<template>
<div class="content single">
    <h1>Fight</h1>
    <button @click="startFight">Start fight</button>
    <p>{{ fightText }}</p>
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
            <tr>
                <th>Monsters Killed</th>
                <td>
                    <p>{{ playerMonstersKilled }}</p>
                </td>
            </tr>
            <tr>
                <th>Quests Solved</th>
                <td>
                    <p>{{ playerQuestsSolved }}</p>
                </td>
            </tr>
            <tr>
                <th>Victory Points</th>
                <td>
                    <p>{{ playerVictoryPoints }}</p>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="diceCombinationsPlayer">
        <div v-for="(option, index) in optionsPlayer" :key="index" class="combinationButtons">
            <button :class="{ selected: selectedOptionPlayer === option }" @click="selectOptionPlayer(option)">
                <div class="buttonCominationImages">
                    <img :src="combinationImages[index][0]" width="48" height="48" />
                    <img :src="combinationImages[index][1]" width="48" height="48" />
                </div>
                <div class="buttonCombinationName">
                    {{ combinationNamePlayer[index] }}
                </div>
                <div class="buttonCombinationDamage">
                    <div>Schaden</div>
                    <div>{{ combinationDamagePlayer[index] }}</div>
                </div>
                <div class="buttonCombinationBlock">
                    <div>Block</div>
                    <div>{{ combinationBlockPlayer[index] }}</div>
                </div>
            </button>
        </div>
    </div>
    <div>
      <button @click="readSelectedOptionPlayer()">Ausgewählte Option lesen</button>
      <p v-if="selectedOptionPlayer">Ausgewählte Option: {{ selectedOptionPlayer }}</p>
      <p v-else>Noch keine Option ausgewählt</p>
    </div>
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
                <th>Victory Points</th>
                <td>
                    <p>{{ monsterVictoryPoints }}</p>
                </td>
            </tr>
            <tr>
                <th>Monster Reward</th>
                <td>
                    <p>{{ monsterRewardGold }}</p>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="diceCombinationsMonster">
        <div v-for="(option, index) in optionsMonster" :key="index" class="combinationButtons">
            <button :class="{ selected: selectedOptionMonster === option }" @click="selectOptionMonster(option)">
                <div class="buttonCominationImages">
                    <img :src="combinationImages[index][0]" width="48" height="48" />
                    <img :src="combinationImages[index][1]" width="48" height="48" />
                </div>
                <div class="buttonCombinationName">
                    {{ combinationNameMonster[index] }}
                </div>
                <div class="buttonCombinationDamage">
                    <div>Schaden</div>
                    <div>{{ combinationDamageMonster[index] }}</div>
                </div>
                <div class="buttonCombinationBlock">
                    <div>Block</div>
                    <div>{{ combinationBlockMonster[index] }}</div>
                </div>
            </button>
        </div>
    </div>
    <div>
      <button @click="readSelectedOptionMonster()">Ausgewählte Option lesen</button>
      <p v-if="selectedOptionMonster">Ausgewählte Option: {{ selectedOptionMonster }}</p>
      <p v-else>Noch keine Option ausgewählt</p>
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
            combinationNameMonster: ["", "", "", "", "", ""],
            combinationDamageMonster: ["", "", "", "", "", ""],
            combinationBlockMonster: ["", "", "", "", "", ""],
            monsterName: null,
            monsterType: null,
            monsterHealth: null,
            monsterVictoryPoints: null,
            monsterRewardGold: null,
            playerName: null,
            playerActions: null,
            playerHealth: null,
            playerReputation: null,
            playerGold: null,
            playerMonstersKilled: null,
            playerQuestsSolved: null,
            playerVictoryPoints: null,
            selectedOptionPlayer: null,
            selectedOptionMonster: null,
        }
    },
    mounted() {
        socket.on("updateFight", message => {
            this.fightText = this.fightText + "\n" + message
        })
        socket.on("activeMonster", activeMonster => {
            this.monsterName = activeMonster.name;
            this.monsterType = activeMonster.type;
            this.monsterHealth = activeMonster.health;
            this.monsterVictoryPoints = activeMonster.victoryPoints;
            this.monsterRewardGold = activeMonster.rewardGold;
            for (let i = 0; i < 6; i++) {
                this.combinationNameMonster[i] = activeMonster.moves[i][0];
                this.combinationDamageMonster[i] = activeMonster.moves[i][1];
                this.combinationBlockMonster[i] = activeMonster.moves[i][2];
            }
        })
        socket.on("activePlayer", activePlayer => {
            this.playerName = activePlayer.name;
            this.playerActions = activePlayer.actions
            this.playerHealth = activePlayer.health
            this.playerReputation = activePlayer.reputation
            this.playerGold = activePlayer.gold
            this.playerMonstersKilled = activePlayer.monstersKilled
            this.playerQuestsSolved = activePlayer.questsSolved
            this.playerVictoryPoints = activePlayer.victoryPoints
            for (let i = 0; i < 6; i++) {
                this.combinationNamePlayer[i] = activePlayer.moves[i][0];
                this.combinationDamagePlayer[i] = activePlayer.moves[i][1];
                this.combinationBlockPlayer[i] = activePlayer.moves[i][2];
            }
        })
        socket.emit("getActivePlayer")
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
        },
        readSelectedOptionMonster() {
          socket.emit("diceRollMonster", this.selectedOptionMonster)
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

.diceCombinationsMonster,
.diceCombinationsPlayer {
    display: flex;
    flex-wrap: wrap;
}

.combinationButtons {
    flex: 0 0 50%;
    box-sizing: border-box;
    padding: 5px;
}

.combinationButtons button {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
}

.buttonCominationImages,
.buttonCombinationName,
.buttonCombinationDamage,
.buttonCombinationBlock {
    display: flex;
    align-items: center;
    justify-content: center;
}

.buttonCominationImages {
    width: 30%;
}

.buttonCombinationName {
    width: 30%;
}

.buttonCombinationDamage,
.buttonCombinationBlock {
    width: 20%;
    display: flex;
    flex-direction: column;
}

.selected {
    background-color: #333333;
}

img {
    border-radius: 5px;
    margin: 5px;
}
</style>
