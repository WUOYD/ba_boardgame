<template>
<div v-if="winner === 'player'" class="winner">
    <div class="overlay-content">
        <h2>Player won</h2>
        <p>{{ playerName }} has slain {{ monsterName }}</p>
        <p>Victory Points: {{ monsterVictoryPoints }}</p>
        <p>Gold: {{ monsterRewardGold }}</p>
        <button class="close-btn" @click="closeFight()">Zurück</button>
    </div>
</div>
<div v-if="winner === 'monster'" class="winner">
    <div class="overlay-content">
        <h2>Monster</h2>
        <p>{{ monsterName }} has slain {{ playerName }}</p>
        <button class="close-btn" @click="closeFight()">Zurück</button>
    </div>
</div>
<div class="content single">
    <h1>Fight</h1>
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
                    <h2>{{ monsterName }}</h2>
                    <table>
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
    <div v-if="fightTurn === 'player'" id="diceCombinationsPlayer">
        <h2>Player</h2>
        <div id="movesPlayer">
            <div v-for="(option, index) in optionsPlayer" :key="index" class="movesCombinationPlayer">
                <button :class="{ selected: selectedOptionPlayer === option }" @click="selectOptionPlayer(option)">
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
        <h2>Monster</h2>
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
            socket.emit("diceRollPlayer", this.selectedOptionPlayer);
            this.selectedOptionPlayer = null;
            this.fightTurn = "monster";
        },
        readSelectedOptionMonster() {
            socket.emit("diceRollMonster", this.selectedOptionMonster);
            this.selectedOptionMonster = null;
            this.fightTurn = "player";
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
p {
    white-space: pre-line;
}

#movesPlayer,
#movesMonster {
    width: 95%;
    height: 70%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

#diceCombinationsPlayer,
#diceCombinationsMonster {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(50, 50, 50, 0.3);
    border-radius: 10px;
    border: 1px solid #f7e4c2;
}

#movesPlayer .movesCombinationPlayer,
#movesMonster .movesCombinationMonster {
    flex-basis: calc(50% - 5px);
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: row;
}

#movesPlayer .movesCombinationPlayer:nth-child(even) {
    margin-right: 0px;
}

#movesMonster .movesCombinationMonster:nth-child(even) {
    margin-right: 0px;
}

#movesPlayer .moveImages,
#movesMonster .moveImages {
    width: 50%;
    justify-content: flex-end;
}

#movesPlayer img,
#movesMonster img {
    border-radius: 10px;
    margin: 5px;
}

.movesContentLeft {
    width: 50%;
    height: 100%;
    align-items: center;
}

.movesContentRight {
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 100%
}

.movesImages {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.movesImages img {
    width: 25%;
    height: auto;
}

.moveName {
    display: flex;
    width: 100%;
    height: 50%;
    font-size: 20px;
    align-items: center;
    justify-content: left;
}

.moveText {
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
}

.movesCombinationPlayer button,
.movesCombinationMonster button {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: rgba(50, 50, 50, 0.5);
    border: none;
    border-radius: 5px;
}

.selected {
    background-color: rgba(50, 50, 50, 0.8) !important;
}

.statisticsImage img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    object-fit: cover;
    justify-content: center;
    align-items: center;
}

.activeFighter {
    background-color: rgba(50, 50, 50, 0.3);
    border-radius: 10px;
    border: 1px solid #f7e4c2;
}

.buttonCombinationImages img {
    border-radius: 5px;
    margin: 5px;
}

#statistics {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    position: relative;
}

#playerStatistics {
    display: flex;
    width: 45%;
    height: 80%;
    display: flex;
    padding: 1%;
}

#monsterStatistics {
    height: 80%;
    width: 45%;
    display: flex;
    padding: 1%;
    flex-direction: column;
    position: absolute;
    right: 0;
}

.statisticsImage,
.statisticsTable {
    display: flex;
    width: 50% !important;
    margin-left: 2%;
    margin-right: 2%;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.staticticsContent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.statisticsTable table {
    width: 100%;
    margin-bottom: 0px !important;
}

.statisticsTable th,
td {
    width: 50%;
    border-bottom: #333333 dotted 1px;
    font-size: 18px;
}

.statisticsTable td p {
    font-size: 18px;
}

.enterCombination {
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.enterCombination button {
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.winner {
    position: fixed !important;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.9);
    border: 1px solid #f7e4c2;
    overflow: auto;
    padding: 20px;
    border-radius: 25px;
    z-index: 999;
}

.overlay-content {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.overlay-content h2 {
    width: auto;
}

.close-btn {
    background-color: transparent;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    color: white;
    border-width: 1px;
}

#commaSpan {
    margin-right: 10px;
}
</style>
