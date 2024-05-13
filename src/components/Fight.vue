<template>
<div id="playerWon" class="hidden">
    <div class="overlay-content">
        <h2>Player won</h2>
        <p>{{ playerName }} has slayn {{ monsterName }}</p>
        <p>Victory Points: {{ monsterVictoryPoints }}</p>
        <p>Gold: {{ monsterRewardGold }}</p>
        <button class="close-btn" v-on:click="closeFightPlayer()">Zurück zu Übersicht</button>
    </div>
</div>
<div id="monsterWon" class="hidden">
    <div class="overlay-content">
        <h2>Monster</h2>
        <p>{{ monsterName }} has slayn {{ playerName }}</p>
        <button class="close-btn" @click="closeFightMonster()">Zurück zu Übersicht</button>
    </div>
</div>
<div class="content single">
    <h1>Fight</h1>
    <div id="statistics">
        <div id="playerStatistics">
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
        <div id="monsterStatistics">
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
    <div class="visible" id="diceCombinationsPlayer">
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
                    <div class="moveText">
                        {{ moveTextPlayer[index] }}
                    </div>
                </div>
                </button>
            </div>
        </div>
            <div class="enterCombination">
                <button @click="readSelectedOptionPlayer()">Ausgewählte Option lesen</button>
            </div>
        </div>
        <div class="hidden" id="diceCombinationsMonster">
            <h2>Monster</h2>
            <div id="movesMonster">
            <div v-for="(option, index) in optionsMonster" :key="index" class="movesCombinationMonster">
                <button :class="{ selected: selectedOptionMonster === option }" @click="selectOptionMonster(option)">
                <div class="movesContentLeft">
                    <div class="movesImages">
                        <img :src="moveImages[index][0]" width="100" height="100" />
                        <img :src="moveImages[index][1]" width="100" height="100" />
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
                <button @click="readSelectedOptionMonster()">Ausgewählte Option lesen</button>
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
            fightText: "start fight by making move",
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
            playerName: null,
            playerActions: null,
            playerHealth: null,
            playerReputation: null,
            playerGold: null,
            playerBlocks: null,
            playerDot: null,
            playerReflect: null,
            playerDamageNextRound: null,
            moveNamePlayer: ["", "", "", "", "", ""],
            moveTextPlayer: ["", "", "", "", "", ""],
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
        }
    },
    mounted() {
        socket.on("setMovesTables", movesTables => {
            this.movesTableCombinationSwordSword = movesTables.movesTableCombinationSwordSword
            this.movesTableCombinationMagicMagic = movesTables.movesTableCombinationMagicMagic
            this.movesTableCombinationSkullSkull = movesTables.movesTableCombinationSkullSkull
            this.movesTableCombinationSwordMagic = movesTables.movesTableCombinationSwordMagic
            this.movesTableCombinationMagicSkull = movesTables.movesTableCombinationMagicSkull
            this.movesTableCombinationSwordSkull = movesTables.movesTableCombinationSwordSkull
        })
        socket.on("fightWinner", status => {
            if (status) {
                this.toggleVisibility("playerWon")
            } else {
                console.log("test")
                this.toggleVisibility("monsterWon")
            }
        })
        socket.on("updateMonster", activePlayer => {
            this.monsterName = activePlayer.fight.activeMonster.name;
            this.monsterImage = activePlayer.fight.activeMonster.image;
            this.monsterType = activePlayer.fight.activeMonster.type;
            this.monsterHealth = activePlayer.fight.activeMonster.health;
            this.monsterVictoryPoints = activePlayer.fight.activeMonster.victoryPoints;
            this.monsterRewardGold = activePlayer.fight.activeMonster.rewardGold
            this.monsterBlocks = activePlayer.fight.activeMonster.blocks;
            this.monsterDot = activePlayer.fight.activeMonster.dot;
            this.monsterReflect = activePlayer.fight.activeMonster.reflect;
            this.monsterDamageNextRound = activePlayer.fight.activeMonster.damageNextRound;
            this.moveNameMonster[0] = activePlayer.fight.activeMonster.moves[0].name
            this.moveTextMonster[0] = activePlayer.fight.activeMonster.moves[0].text
            this.moveNameMonster[1] = activePlayer.fight.activeMonster.moves[1].name
            this.moveTextMonster[1] = activePlayer.fight.activeMonster.moves[1].text
            this.moveNameMonster[2] = activePlayer.fight.activeMonster.moves[2].name
            this.moveTextMonster[2] = activePlayer.fight.activeMonster.moves[2].text
            this.moveNameMonster[3] = activePlayer.fight.activeMonster.moves[3].name
            this.moveTextMonster[3] = activePlayer.fight.activeMonster.moves[3].text
            this.moveNameMonster[4] = activePlayer.fight.activeMonster.moves[4].name
            this.moveTextMonster[4] = activePlayer.fight.activeMonster.moves[4].text
            this.moveNameMonster[5] = activePlayer.fight.activeMonster.moves[5].name
            this.moveTextMonster[5] = activePlayer.fight.activeMonster.moves[5].text
        })
        socket.on("updatePlayer", activePlayer => {
            this.playerName = activePlayer.name;
            this.playerPicture = activePlayer.picture;
            this.playerActions = activePlayer.actions;
            this.playerHealth = activePlayer.health;
            this.playerReputation = activePlayer.reputation;
            this.playerGold = activePlayer.gold;
            this.playerBlocks = activePlayer.blocks;
            this.playerDot = activePlayer.dot;
            this.playerReflect = activePlayer.reflect;
            this.moveNamePlayer[0] = this.movesTableCombinationSwordSword[activePlayer.moves[0][0]].name
            this.moveTextPlayer[0] = this.movesTableCombinationSwordSword[activePlayer.moves[0][0]].text
            this.moveNamePlayer[1] = this.movesTableCombinationSwordMagic[activePlayer.moves[1][0]].name
            this.moveTextPlayer[1] = this.movesTableCombinationSwordMagic[activePlayer.moves[1][0]].text
            this.moveNamePlayer[2] = this.movesTableCombinationMagicMagic[activePlayer.moves[2][0]].name
            this.moveTextPlayer[2] = this.movesTableCombinationMagicMagic[activePlayer.moves[2][0]].text
            this.moveNamePlayer[3] = this.movesTableCombinationMagicSkull[activePlayer.moves[3][0]].name
            this.moveTextPlayer[3] = this.movesTableCombinationMagicSkull[activePlayer.moves[3][0]].text
            this.moveNamePlayer[4] = this.movesTableCombinationSkullSkull[activePlayer.moves[4][0]].name
            this.moveTextPlayer[4] = this.movesTableCombinationSkullSkull[activePlayer.moves[4][0]].text
            this.moveNamePlayer[5] = this.movesTableCombinationSwordSkull[activePlayer.moves[5][0]].name
            this.moveTextPlayer[5] = this.movesTableCombinationSwordSkull[activePlayer.moves[5][0]].text
        })
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
        },
        updateView(comp) {
            socket.emit("updateView", comp);
        },
        closeFightPlayer() {
            this.toggleVisibility("playerWon")
            this.updateView(2);
            socket.emit("getActivePlayer");
        },
        closeFightMonster() {
            this.toggleVisibility("monsterWon")
            this.updateView(2);
            socket.emit("getActivePlayer");
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

#movesPlayer, #movesMonster {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

#diceCombinationsPlayer, #diceCombinationsMonster{
    width: 100%;
    display: flex;
    flex-direction: column;
}

#movesPlayer .movesCombinationPlayer, #movesMonster .movesCombinationMonster {
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

#movesPlayer .moveImages, #movesMonster .moveImages {
    width: 50%;
    justify-content: flex-end;
}

#movesPlayer img, #movesMonster img {
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


.movesCombinationPlayer button, .movesCombinationMonster button {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: rgba(50, 50, 50, 0.2);
    border: none;
    border-radius: 5px;
}

.selected {
    background-color: rgba(50, 50, 50, 0.8) !important;
}

.statisticsImage img {
    border-radius: 5px;
    margin: 5px;
}

.buttonCombinationImages img {
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
    width: 47.5%;
    display: flex;
    flex-direction: column;
}

#monsterStatistics {
    width: 47.5%;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
}

.statisticsImage,
.statisticsTable {
    width: 50% !important;
}

.staticticsContent {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.statisticsTable table {
    width: 100%;
}

.statisticsTable th,
td {
    width: 50%;
    border-bottom: #333333 dotted 1px;
    font-size: 12px;
}

.statisticsTable td p {
    font-size: 12px;
}

.hidden {
    display: none !important;
}

.visible {
    display: flex;
}

.enterCombination {
    width: 100%;
    justify-content: center;
    align-items: center;
}

#playerWon {
    position: fixed !important;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: rgba(71, 15, 15, 0.9);
    overflow: auto;
    padding: 20px;
    border-radius: 25px;
}

#monsterWon {
    position: fixed !important;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: rgba(71, 15, 15, 0.9);
    z-index: 999;
    overflow: auto;
    padding: 20px;
    border-radius: 25px;
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
</style>
