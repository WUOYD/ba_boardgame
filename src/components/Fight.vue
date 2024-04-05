<template>
<div class="content single">
    <h1>Fight</h1>
    <button @click="startFight">Start fight</button>
    <p>{{ fightText }}</p>
    <div id="statistics">
        <div id="playerStatistics">
            <h2>Player</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>
                            <p>{{ playerName }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Actions</th>
                        <td>
                            <p>{{ playerActions }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Health</th>
                        <td>
                            <p>{{ playerHealth }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Blocks</th>
                        <td>
                            <p>{{ playerBlocks }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Reputation</th>
                        <td>
                            <p>{{ playerReputation }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Gold</th>
                        <td>
                            <p>{{ playerGold }}</p>
                        </td>
                    </tr>
                    <th>Dot</th>
                    <td>
                        <p>{{ playerDot }}</p>
                    </td>
                    <tr>
                        <th>Reflect</th>
                        <td>
                            <p>{{ playerReflect }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Damage next Round</th>
                        <td>
                            <p>{{ playerDamageNextRound }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="monsterStatistics">
            <h2>Monster</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>
                            <p>{{ monsterName }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Typ</th>
                        <td>
                            <p>{{ monsterType }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Health</th>
                        <td>
                            <p>{{ monsterHealth }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Blocks</th>
                        <td>
                            <p>{{ monsterBlocks }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Dot</th>
                        <td>
                            <p>{{ monsterDot }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Reflect</th>
                        <td>
                            <p>{{ monsterReflect }}</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Damage next Round</th>
                        <td>
                            <p>{{ monsterDamageNextRound }}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="visible" id="diceCombinationsPlayer">
        <h2>Player</h2>
        <div v-for="(option, index) in optionsPlayer" :key="index" class="combinationButtons">
            <button :class="{ selected: selectedOptionPlayer === option }" @click="selectOptionPlayer(option)">
                <div class="buttonCombinationTop">
                    <div class="buttonCombinationImages">
                        <img :src="combinationImages[index][0]" width="48" height="48" />
                        <img :src="combinationImages[index][1]" width="48" height="48" />
                    </div>
                    <div class="buttonCombinationName">
                        {{ combinationNamePlayer[index] }}
                    </div>
                </div>
                <div class="buttonCombinationBottom">
                    <div class="buttonCombination, little">
                        <div>Schaden</div>
                        <div>{{ combinationDamagePlayer[index] }}</div>
                    </div>
                    <div class="buttonCombination, little">
                        <div>Block</div>
                        <div>{{ combinationBlockPlayer[index] }}</div>
                    </div>
                    <div class="buttonCombination, little">
                        <div>Heilen</div>
                        <div>{{ combinationHealPlayer[index] }}</div>
                    </div>
                    <div class="buttonCombination, little">
                        <div>Dot</div>
                        <div>{{ combinationDotPlayer[index] }}</div>
                    </div>
                    <div class="buttonCombination, big">
                        <div>Reflektieren</div>
                        <div>{{ combinationReflectPlayer[index] }}</div>
                    </div>
                    <div class="buttonCombination, big">
                        <div>Nachwirkung</div>
                        <div>{{ combinationDamageNextRoundPlayer[index] }}</div>
                    </div>
                </div>
            </button>
        </div>
        <div class="enterCombination">
            <button @click="readSelectedOptionPlayer()">Ausgewählte Option lesen</button>
            <p v-if="selectedOptionPlayer">Ausgewählte Option: {{ selectedOptionPlayer }}</p>
            <p v-else>Noch keine Option ausgewählt</p>
        </div>
    </div>
    <div class="hidden" id="diceCombinationsMonster">
        <h2>Monster</h2>
        <div v-for="(option, index) in optionsMonster" :key="index" class="combinationButtons">
            <button :class="{ selected: selectedOptionMonster === option }" @click="selectOptionMonster(option)">
                <div class="buttonCombinationTop">
                    <div class="buttonCombinationImages">
                        <img :src="combinationImages[index][0]" width="48" height="48" />
                        <img :src="combinationImages[index][1]" width="48" height="48" />
                    </div>
                    <div class="buttonCombinationName">
                        {{ combinationNameMonster[index] }}
                    </div>
                </div>
                <div class="buttonCombinationTop">
                    <div class="buttonCombination, little">
                        <div>Schaden</div>
                        <div>{{ combinationDamageMonster[index] }}</div>
                    </div>
                    <div class="buttonCombination, little">
                        <div>Block</div>
                        <div>{{ combinationBlockMonster[index] }}</div>
                    </div>
                    <div class="buttonCombination, little">
                        <div>Heilen</div>
                        <div>{{ combinationHealMonster[index] }}</div>
                    </div>
                    <div class="buttonCombination, little">
                        <div>Dot</div>
                        <div>{{ combinationDotMonster[index] }}</div>
                    </div>
                    <div class="buttonCombinatio, big">
                        <div>Reflektieren</div>
                        <div>{{ combinationReflectMonster[index] }}</div>
                    </div>
                    <div class="buttonCombination, big">
                        <div>Nachwirkung</div>
                        <div>{{ combinationDamageNextRoundMonster[index] }}</div>
                    </div>
                </div>
            </button>
        </div>
        <div class="enterCombination">
            <button @click="readSelectedOptionMonster()">Ausgewählte Option lesen</button>
            <p v-if="selectedOptionMonster">Ausgewählte Option: {{ selectedOptionMonster }}</p>
            <p v-else>Noch keine Option ausgewählt</p>
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
            fightText: "start fight by pressing start fight button",
            optionsPlayer: [1, 2, 3, 4, 5, 6],
            optionsMonster: [1, 2, 3, 4, 5, 6],
            combinationImages: [
                ["src/assets/icons/claw.png", "src/assets/icons/claw.png"],
                ["src/assets/icons/claw.png", "src/assets/icons/magic.png"],
                ["src/assets/icons/magic.png", "src/assets/icons/magic.png"],
                ["src/assets/icons/magic.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/claw.png"],
            ],
            combinationNamePlayer: ["", "", "", "", "", ""],
            combinationDamagePlayer: ["", "", "", "", "", ""],
            combinationBlockPlayer: ["", "", "", "", "", ""],
            combinationHealPlayer: ["", "", "", "", "", ""],
            combinationDotPlayer: ["", "", "", "", "", ""],
            combinationReflectPlayer: ["", "", "", "", "", ""],
            combinationDamageNextRoundPlayer: ["", "", "", "", "", ""],
            combinationNameMonster: ["", "", "", "", "", ""],
            combinationDamageMonster: ["", "", "", "", "", ""],
            combinationBlockMonster: ["", "", "", "", "", ""],
            combinationHealMonster: ["", "", "", "", "", ""],
            combinationDotMonster: ["", "", "", "", "", ""],
            combinationReflectMonster: ["", "", "", "", "", ""],
            combinationDamageNextRoundMonster: ["", "", "", "", "", ""],
            monsterName: null,
            monsterType: null,
            monsterHealth: null,
            monsterVictoryPoints: null,
            monsterRewardGold: null,
            monsterBlocks: null,
            monsterDot: null,
            monsterReflect: null,
            monsterDamageNextRound: null,
            playerName: null,
            playerActions: null,
            playerHealth: null,
            playerReputation: null,
            playerGold: null,
            playerBlocks: null,
            playerDot: null,
            playerReflect: null,
            playerDamageNextRound: null,
            selectedOptionPlayer: null,
            selectedOptionMonster: null,
        }
    },
    mounted() {
        socket.on("updateFight", message => {
            this.fightText = this.fightText + "\n" + message
        })
        socket.on("updateMonster", activeMonster => {
            this.monsterName = activeMonster.name;
            this.monsterType = activeMonster.type;
            this.monsterHealth = activeMonster.health;
            this.monsterVictoryPoints = activeMonster.victoryPoints;
            this.monsterRewardGold = activeMonster.rewardGold;
            this.monsterBlocks = activeMonster.blocks;
            this.monsterDot = activeMonster.dot;
            this.monsterReflect = activeMonster.reflect;
            this.monsterDamageNextRound = activeMonster.damageNextRound;
            for (let i = 0; i < 6; i++) {
                this.combinationNameMonster[i] = activeMonster.moves[i][0];
                this.combinationDamageMonster[i] = activeMonster.moves[i][1];
                this.combinationBlockMonster[i] = activeMonster.moves[i][2];
                this.combinationHealMonster[i] = activeMonster.moves[i][3];
                this.combinationDotMonster[i] = activeMonster.moves[i][4];
                this.combinationReflectMonster[i] = activeMonster.moves[i][5];
                this.combinationDamageNextRoundMonster[i] = activeMonster.moves[i][6];
            }
        })
        socket.on("updatePlayer", activePlayer => {
            this.playerName = activePlayer.name;
            this.playerActions = activePlayer.actions;
            this.playerHealth = activePlayer.health;
            this.playerReputation = activePlayer.reputation;
            this.playerGold = activePlayer.gold;
            this.playerBlocks = activePlayer.blocks;
            this.playerDot = activePlayer.dot;
            this.playerReflect = activePlayer.reflect;
            this.playerDamageNextRound = activePlayer.damageNextRound;
            for (let i = 0; i < 6; i++) {
                this.combinationNamePlayer[i] = activePlayer.moves[i][0];
                this.combinationDamagePlayer[i] = activePlayer.moves[i][1];
                this.combinationBlockPlayer[i] = activePlayer.moves[i][2];
                this.combinationHealPlayer[i] = activePlayer.moves[i][3];
                this.combinationDotPlayer[i] = activePlayer.moves[i][4];
                this.combinationReflectPlayer[i] = activePlayer.moves[i][5];
                this.combinationDamageNextRoundPlayer[i] = activePlayer.moves[i][6];
            }
        })
        socket.emit("getActivePlayer");
    },
    methods: {
        startFight() {
            socket.emit("startFight");
        },
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
            socket.emit("diceRollPlayer", this.selectedOptionPlayer)
            this.selectedOptionPlayer = null;
            this.toggleVisibility("diceCombinationsPlayer");
            this.toggleVisibility("diceCombinationsMonster");
        },
        readSelectedOptionMonster() {
            socket.emit("diceRollMonster", this.selectedOptionMonster)
            this.selectedOptionMonster = null;
            this.toggleVisibility("diceCombinationsPlayer");
            this.toggleVisibility("diceCombinationsMonster");
        },
        toggleVisibility(elementId) {
            var element = document.getElementById(elementId);
            if (element.classList.contains('visible')) {
                element.classList.remove('visible');
                element.classList.add('hidden');
            } else {
                element.classList.remove('hidden');
                element.classList.add('visible');
            }
        }
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style>
p {
    white-space: pre-line;
}

#diceCombinationsMonster,
#diceCombinationsPlayer {
    display: flex;
    flex-wrap: wrap;
}

.buttonCombinationTop,
.buttonCombinationBottom {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
}

.combinationButtons {
    flex: 0 0 50%;
    box-sizing: border-box;
    padding: 5px;
}

.combinationButtons button {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
}

.buttonCombinationImages,
.buttonCombinationName,
.buttonCombinationDamage,
.buttonCombination {
    display: flex;
    align-items: center;
    justify-content: center;
}

.buttonCombinationImages {
    width: 50%;
    justify-content: right;
    margin-right: 5%;
}

.buttonCombinationName {
    width: 50%;
    justify-content: left;
    margin-left: 5%;
    font-size: 20px !important;
}

.buttonCombination {
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
}

.buttonCombination,
.little {
    width: 14%;

}

.buttonCombination,
.big {
    width: 22%;
}

.selected {
    background-color: #333333;
}

img {
    border-radius: 5px;
    margin: 5px;
}

#statistics {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
}

#playerStatistics {
    width: 45%
}

#monsterStatistics {
    width: 45%;
    position: absolute;
    right: 0;
}

table {
    width: 100%;
}

th,
td {
    width: 50%;
    border-bottom: #333333 dotted;
}

.hidden {
    display: none !important;
}

.visible {
    display: flex !important;
    /* or any other appropriate display property */
}

.enterCombination{
    width: 100%;
    justify-content: center;
    align-items: center;
}
</style>

