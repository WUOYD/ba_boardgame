<template>
<div v-if="winner === 'player'" class="winner">
    <div class="overlay-content">
        <h2>Spieler gewonnen</h2>
        <p>{{ playerName }} hat {{ monsterName }} besiegt!</p>
        <p>Victory Points: {{ monsterVictoryPoints }}</p>
        <p>Gold: {{ monsterRewardGold }}</p>
        <button class="close-btn" @click="closeFight()">Zurück</button>
    </div>
</div>
<div v-if="winner === 'monster'" class="winner">
    <div class="overlay-content">
        <h2>Monster gewonnen</h2>
        <p>{{ monsterName }} hat {{ playerName }} besiegt!</p>
        <button class="close-btn" @click="closeFight()">Zurück</button>
    </div>
</div>
<div class="content">
    <div id="statistics">
        <div :class="{ 'activeFighter': fightTurn === 'player' }" id="playerStatistics">
            <div class="staticticsContent">
                <div class="statisticsTable">
                    <table>
                        <h2>{{ playerName }}</h2>
                        <tbody>
                            <tr>
                                <th>Leben</th>
                                <td>
                                    <p>{{ playerHealth }}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Block</th>
                                <td>
                                    <p>{{ playerBlocks }}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Reflektieren</th>
                                <td>
                                    <p>{{ playerReflect }}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Zusatzschaden</th>
                                <td>
                                    <p>{{ playerDot + playerDamageNextRound }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="statisticsImage">
                    <img :src="playerPicture" width="250" height="250" />
                </div>
            </div>
        </div>
        <div :class="{ 'activeFighter': fightTurn === 'monster' }" id="monsterStatistics">
            <div class="staticticsContent">
                <div class="statisticsImage">
                    <img :src="monsterImage" width="250" height="250" />
                </div>
                <div class="statisticsTable">
                    <table>
                        <h2>{{ monsterName }}</h2>
                        <tbody>
                            <tr>
                                <th>Leben</th>
                                <td>
                                    <p>{{ monsterHealth }}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Block</th>
                                <td>
                                    <p>{{ monsterBlocks }}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Reflektieren</th>
                                <td>
                                    <p>{{ monsterReflect }}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Zusatzschaden</th>
                                <td>
                                    <p>{{ monsterDot + monsterDamageNextRound }}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div v-if="fightTurn === 'player'" id="diceCombinationsPlayerFight">
        <div id="movesPlayer">
            <div v-for="(option, index) in optionsPlayer" :key="index" class="movesCombinationPlayer">
                <button class="movesCombinationPlayerButtons" :class="{ selected: selectedOptionPlayer === option }" @click="selectOptionPlayer(option)">
                    <div class="movesContentLeft">
                        <div class="movesImages">
                            <img :src="moveImages[index][0]" width="100" height="100" />
                            <img :src="moveImages[index][1]" width="100" height="100" />
                        </div>
                    </div>
                    <div class="movesContentRight">
                        <div class="moveName">
                            {{ moveNamePlayer[index] }}
                        </div>
                        <p class="moveText">
                            <span v-if="moveDamagePlayer[index] !== '-'">{{ moveDamagePlayer[index] + clawLevel + skullLevel}} Schaden</span>
                            <span id="commaSpan" v-if="moveDamagePlayer[index] !== '-' && moveBlockPlayer[index] !== '-'">,</span>
                            <span v-if="moveBlockPlayer[index] !== '-'">{{ moveBlockPlayer[index] + magicLevel + skullLevel}} Block</span>
                            <span id="commaSpan" v-if="moveBlockPlayer[index] !== '-' && moveHealPlayer[index] !== '-'">,</span>
                            <span v-if="moveHealPlayer[index] !== '-'">{{ moveHealPlayer[index] + magicLevel+ skullLevel }} Heilen</span>
                            <span id="commaSpan" v-if="moveHealPlayer[index] !== '-' && moveDotPlayer[index] !== '-'">,</span>
                            <span v-if="moveDotPlayer[index] !== '-'">{{ moveDotPlayer[index] + skullLevel}} Schaden jede Runde</span>
                            <span id="commaSpan" v-if="moveDotPlayer[index] !== '-' && moveReflectPlayer[index] !== '-'">,</span>
                            <span v-if="moveReflectPlayer[index] !== '-'">{{ moveReflectPlayer[index] + magicLevel + skullLevel}} Reflektieren</span>
                            <span id="commaSpan" v-if="moveReflectPlayer[index] !== '-' && moveReflectPlayer[index] !== '-'">,</span>
                            <span v-if="moveDamageNextRoundPlayer[index] !== '-'">{{ moveDamageNextRoundPlayer[index] + skullLevel}} Schaden nächste Runde</span>
                        </p>
                    </div>
                </button>
            </div>
        </div>
        <div class="enterCombination">
            <button @click="readSelectedOptionPlayer()">Bestätigen</button>
        </div>
    </div>
    <div v-if="fightTurn === 'monster'" id="diceCombinationsMonster">
        <div id="movesMonster">
            <div v-for="(option, index) in optionsMonster" :key="index" class="movesCombinationMonster">
                <button :class="{ selected: selectedOptionMonster === option }" @click="selectOptionMonster(option)">
                    <div class="movesContentLeft">
                        <div class="movesImages">
                            <img :src="moveImages[index][0]" />
                            <img :src="moveImages[index][1]" />
                        </div>
                    </div>
                    <div class="movesContentRight">
                        <div class="moveName">
                            {{ moveNameMonster[index] }}
                        </div>
                        <div class="moveText">
                            {{ moveTextMonster[index] }}
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <div class="enterCombination">
            <button @click="readSelectedOptionMonster()">Bestätigen</button>
        </div>
    </div>
</div>
</template>

<script>
import {
    socket
} from '../client'

export default {
    data() {
        return {
            moveImages: [
                ["src/assets/icons/claw.png", "src/assets/icons/claw.png"],
                ["src/assets/icons/claw.png", "src/assets/icons/magic.png"],
                ["src/assets/icons/magic.png", "src/assets/icons/magic.png"],
                ["src/assets/icons/magic.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/claw.png"],
            ],
            optionsPlayer: [1, 2, 3, 4, 5, 6],
            playerPicture: "",
            playerName: "playerName",
            playerActions: null,
            playerHealth: null,
            playerReputation: null,
            playerGold: null,
            playerBlocks: null,
            playerDot: null,
            playerReflect: null,
            playerDamageNextRound: null,
            moveNamePlayer: ["", "", "", "", "", ""],
            moveDamagePlayer: ["", "", "", "", "", ""],
            moveBlockPlayer: ["", "", "", "", "", ""],
            moveHealPlayer: ["", "", "", "", "", ""],
            moveDotPlayer: ["", "", "", "", "", ""],
            moveReflectPlayer: ["", "", "", "", "", ""],
            moveDamageNextRoundPlayer: ["", "", "", "", "", ""],
            optionsMonster: [1, 2, 3, 4, 5, 6],
            monsterPicture: "src/assets/img/placeholder.webp",
            monsterName: null,
            monsterType: null,
            monsterHealth: null,
            monsterVictoryPoints: null,
            monsterRewardGold: null,
            monsterBlocks: null,
            monsterDot: null,
            monsterReflect: null,
            moveNameMonster: ["", "", "", "", "", ""],
            moveTextMonster: ["", "", "", "", "", ""],
            monsterDamageNextRound: null,
            selectedOptionPlayer: null,
            selectedOptionMonster: null,
            movesTableCombinationSwordSword: null,
            movesTableCombinationMagicMagic: null,
            movesTableCombinationSkullSkull: null,
            movesTableCombinationSwordMagic: null,
            movesTableCombinationMagicSkull: null,
            movesTableCombinationSwordSkull: null,
            fightTurn: "player",
            winner: null,
            optionPickedDecision: null,
            moveTables: null,
            clawLevel: null,
            skullLevel: null,
            magicLevel: null,
        };
    },
    mounted() {
        socket.on("setMovesTables", movesTables => {
            this.movesTableCombinationSwordSword = movesTables.movesTableCombinationSwordSword;
            this.movesTableCombinationMagicMagic = movesTables.movesTableCombinationMagicMagic;
            this.movesTableCombinationSkullSkull = movesTables.movesTableCombinationSkullSkull;
            this.movesTableCombinationSwordMagic = movesTables.movesTableCombinationSwordMagic;
            this.movesTableCombinationMagicSkull = movesTables.movesTableCombinationMagicSkull;
            this.movesTableCombinationSwordSkull = movesTables.movesTableCombinationSwordSkull;
            this.moveTables = [
                this.movesTableCombinationSwordSword,
                this.movesTableCombinationSwordMagic,
                this.movesTableCombinationMagicMagic,
                this.movesTableCombinationMagicSkull,
                this.movesTableCombinationSkullSkull,
                this.movesTableCombinationSwordSkull
            ]
        });

        socket.on("fightWinner", status => {
            this.winner = status ? "player" : "monster";
        });

        socket.on("updateMonster", activePlayer => {
            this.monsterName = activePlayer.fight.activeMonster.name;
            this.monsterImage = activePlayer.fight.activeMonster.image;
            this.monsterType = activePlayer.fight.activeMonster.type;
            this.monsterHealth = activePlayer.fight.activeMonster.health;
            this.monsterVictoryPoints = activePlayer.fight.activeMonster.victoryPoints;
            this.monsterRewardGold = activePlayer.fight.activeMonster.rewardGold;
            this.monsterBlocks = activePlayer.fight.activeMonster.blocks;
            this.monsterDot = activePlayer.fight.activeMonster.dot;
            this.monsterReflect = activePlayer.fight.activeMonster.reflect;
            this.monsterDamageNextRound = activePlayer.fight.activeMonster.damageNextRound;

            for (let i = 0; i < 6; i++) {
                this.moveNameMonster[i] = activePlayer.fight.activeMonster.moves[i].name;
                this.moveTextMonster[i] = activePlayer.fight.activeMonster.moves[i].text;
            }
        });

        socket.on("updatePlayer", activePlayer => {
            if (activePlayer && activePlayer.moves) {
                this.playerName = activePlayer.name;
                this.playerPicture = activePlayer.picture;
                this.playerActions = activePlayer.actions;
                this.playerHealth = activePlayer.health;
                this.playerReputation = activePlayer.reputation;
                this.playerGold = activePlayer.gold;
                this.playerBlocks = activePlayer.blocks;
                this.playerDot = activePlayer.dot;
                this.playerReflect = activePlayer.reflect;
                this.clawLevel = activePlayer.clawLevel;
                this.skullLevel = activePlayer.skullLevel;
                this.magicLevel = activePlayer.magicLevel;

                if (activePlayer.quest != null && activePlayer.quest.optionPickedDecision != null) {
                    this.optionPickedDecision = activePlayer.quest.optionPickedDecision;
                }

                for (let i = 0; i < 6; i++) {
                    const moveIndex = activePlayer.moves[i][0];
                    const moveTable = this.moveTables[i];

                    if (moveTable && moveTable[moveIndex]) {
                        const move = moveTable[moveIndex];
                        this.moveNamePlayer[i] = move.name || "-";
                        this.moveDamagePlayer[i] = move.damage !== 0 ? move.damage : "-";
                        this.moveBlockPlayer[i] = move.block !== 0 ? move.block : "-";
                        this.moveHealPlayer[i] = move.heal !== 0 ? move.heal : "-";
                        this.moveDotPlayer[i] = move.dot !== 0 ? move.dot : "-";
                        this.moveReflectPlayer[i] = move.reflect !== 0 ? move.reflect : "-";
                        this.moveDamageNextRoundPlayer[i] = move.damageNextRound !== 0 ? move.damageNextRound : "-";
                    }
                }
            } else {
                console.error('Active player or move tables are not defined');
            }
        });

        socket.emit("getMovesTables");
        socket.emit("getActivePlayer");
        socket.emit("getActiveMonster");
    },
    methods: {
        enterRollPlayer(value) {
            socket.emit("diceRollPlayer", value);
        },
        enterRollMonster() {
            socket.emit("diceRollMonster", this.diceRollMonster);
        },
        selectOptionPlayer(option) {
            this.selectedOptionPlayer = option;
        },
        selectOptionMonster(option) {
            this.selectedOptionMonster = option;
        },
        readSelectedOptionPlayer() {
            if (this.selectedOptionPlayer != null) {
                socket.emit("diceRollPlayer", this.selectedOptionPlayer);
                this.selectedOptionPlayer = null;
                this.fightTurn = "monster";
            }
        },
        readSelectedOptionMonster() {
            if (this.selectedOptionMonster != null) {
                socket.emit("diceRollMonster", this.selectedOptionMonster);
                this.selectedOptionMonster = null;
                this.fightTurn = "player";
            }

        },
        updateView(comp) {
            socket.emit("updateView", comp);
        },
        closeFight() {
            socket.emit("updateViewer", "Logo");
            socket.emit("getActivePlayer");
            if (this.monsterType === "Quest") {
                this.updateView(5);
                socket.emit("questFight");
            } else {
                this.updateView(2);
                socket.emit("getActivePlayer");
            }
        }
    },
    beforeUnmount() {
        this.mounted = false;
    }
};
</script>

<style>

</style>
