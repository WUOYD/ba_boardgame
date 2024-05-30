<template>
<div class="content">
    <div v-if="currentEncounter == 'Loot'" class="viewer" id="lootViewer">
        <img :src="imageTreasure" />
        <p>{{ this.playerName }} hat {{ this.goldLoot }} Gold gefunden</p>
    </div>
    <div v-if="currentEncounter == 'Quest'" class="viewer" id="questViewer">
        <div v-if="questStep == 'Deliver'" class="quest">
            <div class="questPicture">
                <img :src="this.questPictureDeliver" />
            </div>
            <div class="questInfos">
                <div class="questOfferer">
                    <p>{{ questNameReceiver }}</p>
                </div>
                <div class="questContent">
                    <div class="questText">
                        <div v-if="optionPicked == 'Good'">
                            <p>{{ questTextReceiverGood }}</p>
                        </div>
                        <div v-else>
                            <p>{{ questTextReceiverBad }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Middleman'" class="quest">
            <div class="questPicture">
                <img :src="this.questPictureMiddleman" />
            </div>
            <div class="questInfos">
                <div class="questOfferer">
                    <p>{{ questNameMiddleman }}</p>
                </div>
                <div class="questContent">
                    <div class="questText">
                        <div v-if="optionPicked == 'Good'">
                            <p>{{ questTextMiddlemanGood }}</p>
                        </div>
                        <div v-else>
                            <p>{{ questTextMiddlemanBad }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Return'" class="quest">
            <div class="questPicture">
                <img v-if="this.optionPicked == 'Good'" :src="this.questPictureReceiverGood" />
                <img v-if="this.optionPicked == 'Bad'" :src="this.questPictureReceiverBad" />
            </div>
            <div class="questInfos">
                <div class="questOfferer">
                    <p v-if="this.optionPicked == 'Good'">{{ questNameReceiverGood }}</p>
                    <p v-else>{{ questNameReceiverBad }}</p>
                </div>
                <div class="questContent">
                    <div class="questText">
                        <div v-if="optionPicked == 'Good'">
                            <p>{{ questTextReceiverGood }}</p>
                        </div>
                        <div v-else>
                            <p>{{ questTextReceiverBad }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Desicion'" class="quest">
            <div class="questPicture">
                <img :src="this.questPictureReceiver" />
            </div>
            <div class="questInfos">
                <div class="questOfferer">
                    <div v-if="optionPicked == 'Good'">
                        <p>{{ questNameReceiverGood }}</p>
                    </div>
                    <div v-else>
                        <p>{{ questNameReceiverBad }}</p>
                    </div>
                </div>
                <div class="questContent">
                    <div class="questText">
                        <div v-if="optionPicked == 'Good'">
                            <p>{{ questTextReceiverGood }}</p>
                        </div>
                        <div v-else>
                            <p>{{ questTextReceiverBad }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Fight'" class="quest">
            <div class="questPicture">
                <img :src="this.questPictureMonster" />
            </div>
            <div class="questInfos">
                <div class="questOfferer">
                    <p>{{ questNameMonster }}</p>
                </div>
                <div class="questContent">
                    <div class="questText">
                        <p>{{ questTextMonster }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Reward'" class="quest">
            <div class="questInfos">
                <div class="reward">
                    <div>
                        <img :src="this.imageTreasure" />
                    </div>
                    <div>
                        <div v-if="this.optionPicked == 'Good'">
                            <p v-if="rewardGoodReputation!='-'">{{ rewardGoodReputation }} Ehre</p>
                            <p v-if="rewardGoodGold!='-'">{{ rewardGoodGold }} Gold</p>
                            <p v-if="rewardGoodMove!='-'">{{ rewardGoodMove }} Move</p>
                        </div>
                        <div v-else>
                            <p v-if="rewardBadReputation!='-'">{{ rewardBadReputation }} Ehre</p>
                            <p v-if="rewardBadGold!='-'">{{ rewardBadGold }} Gold</p>
                            <p v-if="rewardBadMove!='-'">{{ rewardBadMove }} Move</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'RewardDesicion'" class="quest">
            <div class="questInfos">
                <div class="reward">
                    <div>
                        <img :src="this.imageTreasure" />
                    </div>
                    <div>
                        <div v-if="this.optionPickedDecision == 'Good'">
                            <p v-if="rewardGoodReputation!='-'">{{ rewardGoodReputation }} Ehre</p>
                            <p v-if="rewardGoodGold!='-'">{{ rewardGoodGold }} Gold</p>
                            <p v-if="rewardGoodMove!='-'">{{ rewardGoodMove }} Move</p>
                        </div>
                        <div v-else>
                            <p v-if="rewardBadReputation!='-'">{{ rewardBadReputation }} Ehre</p>
                            <p v-if="rewardBadGold!='-'">{{ rewardBadGold }} Gold</p>
                            <p v-if="rewardBadMove!='-'">{{ rewardBadMove }} Move</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else v-if="questStep == 'Offer'" class="quest">
            <div class="questPicture">
                <img :src="questPictureOfferer" />
            </div>
            <div class="questInfos">
                <div class="questOfferer">
                    <p>{{ questNameOfferer }}</p>
                </div>
                <div class="questContent">
                    <div class="questText">
                        <p>{{ questTextOfferer }}</p>
                    </div>
                    <div class="optionButtons">
                        <button v-if="hasOptionGood == 1" >{{ this.optionGoodText }}</button>
                        <button v-if="hasOptionBad == 1" >{{ this.optionBadText }}</button>
                        <button v-if="hasOptionDeny == 1" >Ablehnen</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="currentEncounter == 'Monster'" class="viewer" id="monsterViewer">
        <div id="statistics">
            <div :class="{ 'activeFighter': this.fightTurn == 'player' }" id="playerStatistics">
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
            <div :class="{ 'activeFighter': this.fightTurn == 'monster' }" id="monsterStatistics">
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
        <div v-if="this.fightTurn == 'player'" id="diceCombinationsPlayer">
            <h2>Player</h2>
            <div id="movesPlayer">
                <div v-for="(option, index) in optionsPlayer" :key="index" class="movesCombinationPlayer">
                    <button>
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
        </div>
        <div v-if="this.fightTurn == 'monster'" id="diceCombinationsMonster">
            <h2>Monster</h2>
            <div id="movesMonster">
                <div v-for="(option, index) in optionsMonster" :key="index" class="movesCombinationMonster">
                    <button>
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
        </div>
    </div>
    <div v-if="currentEncounter == 'changeIsland'" class="viewer" id="islandViewer">
        <div class="islandViewer" v-if="travelDestination == 'Frosgar'">
            <img :src="islands[0][2]" width="250" height="250" />
            <p>Frosgar</p>
        </div>
        <div class="islandViewer" v-if="travelDestination == 'Aridora'">
            <img :src="islands[1][2]" />
            <p>Aridora</p>
        </div>
        <div class="islandViewer" v-if="travelDestination == 'Athos'">
            <img :src="islands[2][2]" />
            <p>Athos</p>
        </div>
        <div class="islandViewer" v-if="travelDestination == 'Drakan'">
            <img :src="islands[3][2]" />
            <p>Drakan</p>
        </div>
        <div class="islandViewer" v-if="travelDestination == 'Talvar'">
            <img :src="islands[4][2]" />
            <p>Talvar</p>
        </div>
        <div class="islandViewer" v-if="travelDestination == 'Nythoria'">
            <img :src="islands[5][2]" />
            <p>Nythoria</p>
        </div>
        <div class="islandViewer" v-if="travelDestination == 'Elysora'">
            <img :src="islands[6][2]" />
            <p>Elysora</p>
        </div>
    </div>
    <div v-if="currentEncounter == 'Map'" id="questMap">
        <img v-if="optionPicked == 'Good'" :src="this.imageMapGood" @click="this.showMap()"/>
        <img v-else :src="this.imageMapBad" @click="this.showMap()" />
        <div v-if="openMapFirstTime == true">
            <p>Platziere einen Marker auf deiner aktuellen Position und einen auf die Angezeigte Position!</p>
        </div>
    </div>
    <div v-if="currentEncounter == 'Story'" class="viewer" id="storyViewer">

    </div>
    <div v-if="currentEncounter == 'Logo'" class="viewer" id="logoViewer">
        <img :src="logo" />
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
            logo: "src/assets/logo/Logo.png",
            goldLoot: null,
            rewardGoodReputation: null,
            rewardGoodGold: null,
            rewardGoodMove: null,
            rewardBadReputation: null,
            rewardBadGold: null,
            rewardBadMove: null,
            questView: false,
            questStep: null,
            optionPicked: null,
            optionPickedDecision: null,
            optionGood: null,
            optionBad: null,
            hasOptionGood: null,
            hasOptionBad: null,
            hasOptionDeny: null,
            questPictureOfferer: null,
            questNameOfferer: null,
            questTextOffererGood: null,
            questPictureMiddleman: null,
            questNameMiddleman: null,
            questTextMiddlemanGood: null,
            questTextMiddlemanBad: null,
            questPictureReceiver: null,
            questNameReceiverGood: null,
            questNameReceiverBad: null,
            questTextReceiverGood: null,
            questTextReceiverBad: null,
            questPictureMonster: null,
            questNameMonster: null,
            questTextMonster: null,
            questTextOptionSecondGood: null,
            questTextOptionSecondBad: null,
            optionGoodText: null,
            optionBadText: null,
            openMap: false,
            openMapFirstTime: false,
            imageMapGood: "",
            imageMapBad: "",
            mapIcon: "src/assets/icons/map_icon.webp",
            imageTreasure: "src/assets/img/misc/treasure.webp",
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
            fightTurn: "player",
            optionPickedDecision: null,
            currentEncounter: "Logo",
            travelDestination: null,
            islands: [
                [1, "Frosgar", "src/assets/img/islands/frosgar.webp"],
                [2, "Aridora", "src/assets/img/islands/aridora.webp"],
                [3, "Athos", "src/assets/img/islands/athos.webp"],
                [4, "Drakan", "src/assets/img/islands/drakan.webp"],
                [5, "Talvar", "src/assets/img/islands/talvar.webp"],
                [6, "Nythoria", "src/assets/img/islands/nythoria.webp"],
                [7, "Elysora", "src/assets/img/islands/elysora.webp"],
            ]
        }
    },
    mounted() {
        socket.on("ShowMapViewer", () => {
            if(this.openMap){
                this.openMap = false;
            }
            else{
                this.openMap = true;
            }
        })
        socket.on("changeTurn", () => {
            if (this.fightTurn == "monster") {
                this.fightTurn = "player"
            } else {
                this.fightTurn = "monster"
            }
        })
        socket.on("changeRegion", region => {
            this.travelDestination = region
        })
        socket.on("updateEncounter", message => {
            if(this.currentEncounter == "Map"){
                this.currentEncounter = "Logo"
            }
            else{
                this.currentEncounter = message
            }
            
        })
        socket.on("setMovesTables", movesTables => {
            this.movesTableCombinationSwordSword = movesTables.movesTableCombinationSwordSword
            this.movesTableCombinationMagicMagic = movesTables.movesTableCombinationMagicMagic
            this.movesTableCombinationSkullSkull = movesTables.movesTableCombinationSkullSkull
            this.movesTableCombinationSwordMagic = movesTables.movesTableCombinationSwordMagic
            this.movesTableCombinationMagicSkull = movesTables.movesTableCombinationMagicSkull
            this.movesTableCombinationSwordSkull = movesTables.movesTableCombinationSwordSkull
        })
        socket.on("updateMonster", activePlayer => {
            if (activePlayer && activePlayer.fight) {
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
            }
        })
        socket.on("updatePlayer", activePlayer => {
            if (activePlayer) {
                this.playerName = activePlayer.name;
                this.playerPicture = activePlayer.picture;
                this.playerActions = activePlayer.actions;
                this.playerHealth = activePlayer.health;
                this.playerReputation = activePlayer.reputation;
                this.playerGold = activePlayer.gold;
                this.playerBlocks = activePlayer.blocks;
                this.playerDot = activePlayer.dot;
                this.playerReflect = activePlayer.reflect;
                this.goldLoot = activePlayer.goldLoot
                if (activePlayer.quest) {
                    if (activePlayer.quest.optionPickedDecision != null) {
                        this.optionPickedDecision = activePlayer.quest.optionPickedDecision
                    }
                }
                if (activePlayer.moves[0] && this.movesTableCombinationSwordSword[activePlayer.moves[0][0]]) {
                    this.moveNamePlayer[0] = this.movesTableCombinationSwordSword[activePlayer.moves[0][0]].name;
                    this.moveTextPlayer[0] = this.movesTableCombinationSwordSword[activePlayer.moves[0][0]].text;
                }
                if (activePlayer.moves[1] && this.movesTableCombinationSwordMagic[activePlayer.moves[1][0]]) {
                    this.moveNamePlayer[1] = this.movesTableCombinationSwordMagic[activePlayer.moves[1][0]].name;
                    this.moveTextPlayer[1] = this.movesTableCombinationSwordMagic[activePlayer.moves[1][0]].text;
                }
                if (activePlayer.moves[2] && this.movesTableCombinationMagicMagic[activePlayer.moves[2][0]]) {
                    this.moveNamePlayer[2] = this.movesTableCombinationMagicMagic[activePlayer.moves[2][0]].name;
                    this.moveTextPlayer[2] = this.movesTableCombinationMagicMagic[activePlayer.moves[2][0]].text;
                }
                if (activePlayer.moves[3] && this.movesTableCombinationMagicSkull[activePlayer.moves[3][0]]) {
                    this.moveNamePlayer[3] = this.movesTableCombinationMagicSkull[activePlayer.moves[3][0]].name;
                    this.moveTextPlayer[3] = this.movesTableCombinationMagicSkull[activePlayer.moves[3][0]].text;
                }
                if (activePlayer.moves[4] && this.movesTableCombinationSkullSkull[activePlayer.moves[4][0]]) {
                    this.moveNamePlayer[4] = this.movesTableCombinationSkullSkull[activePlayer.moves[4][0]].name;
                    this.moveTextPlayer[4] = this.movesTableCombinationSkullSkull[activePlayer.moves[4][0]].text;
                }
                if (activePlayer.moves[5] && this.movesTableCombinationSwordSkull[activePlayer.moves[5][0]]) {
                    this.moveNamePlayer[5] = this.movesTableCombinationSwordSkull[activePlayer.moves[5][0]].name;
                    this.moveTextPlayer[5] = this.movesTableCombinationSwordSkull[activePlayer.moves[5][0]].text;
                }
            }
            if (activePlayer && activePlayer.quest) {
                this.optionPicked = activePlayer.quest.optionPicked
                this.optionPickedDecision = activePlayer.quest.optionPickedDecision
                this.questStep = activePlayer.quest.questStep
                this.questType = activePlayer.quest.questType
                this.hasOptionGood = activePlayer.quest.optionGood.hasOption
                this.hasOptionBad = activePlayer.quest.optionBad.hasOption
                this.hasOptionDeny = activePlayer.quest.optionDeny.hasOption
                this.optionGoodText = activePlayer.quest.optionGood.optionText
                this.optionBadText = activePlayer.quest.optionBad.optionText
                this.questNameOfferer = activePlayer.quest.questOfferer.name
                this.questPictureOfferer = activePlayer.quest.questOfferer.image
                this.questTextOfferer = activePlayer.quest.questOfferer.text
                this.questNameMiddleman = activePlayer.quest.questMiddleman.name
                this.questPictureMiddleman = activePlayer.quest.questMiddleman.image
                this.questTextMiddlemanGood = activePlayer.quest.questMiddleman.textGood
                this.questTextMiddlemanBad = activePlayer.quest.questMiddleman.textBad
                this.questNameReceiverGood = activePlayer.quest.questReceiver.nameGood
                this.questNameReceiverBad = activePlayer.quest.questReceiver.nameBad
                this.questPictureReceiverGood = activePlayer.quest.questReceiver.imageGood
                this.questPictureReceiverBad = activePlayer.quest.questReceiver.imageBad
                this.questTextReceiverGood = activePlayer.quest.questReceiver.textGood
                this.questTextReceiverBad = activePlayer.quest.questReceiver.textBad
                this.regionQuest = activePlayer.quest.regionQuest
                this.regionDeliver = activePlayer.quest.regionDeliver
                this.questTextOptionSecondGood = activePlayer.quest.optionGoodSecond.optionText
                this.questTextOptionSecondBad = activePlayer.quest.optionBadSecond.optionText
                this.rewardGoodReputation = activePlayer.quest.rewardGood.reputation
                this.rewardGoodGold = activePlayer.quest.rewardGood.gold
                this.rewardGoodMove = activePlayer.quest.rewardGood.move
                this.rewardBadReputation = activePlayer.quest.rewardBad.reputation
                this.rewardBadGold = activePlayer.quest.rewardBad.gold
                this.rewardBadMove = activePlayer.quest.rewardBad.move
                this.optionGood = activePlayer.quest.optionGood
                this.optionBad = activePlayer.quest.optionBad
                this.imageMapGood = activePlayer.quest.imageMapGood
                this.imageMapBad = activePlayer.quest.imageMapBad
                if (activePlayer.quest.questMonster != null) {
                    this.questNameMonster = activePlayer.quest.questMonster.name
                    this.questTextMonster = activePlayer.quest.questMonsterText
                }
            }
        });
        socket.emit("getMovesTables");
    },
    methods: {
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style>
.viewer {
    display: flex;
    width: 100%;
    height: 100%;
}

#monsterViewer{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}

#lootViewer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#islandViewer{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

#islandViewer img{
    width: 50%;
    height: 50%;
}

#lootViewer img {
    width: 50%;
    border-radius: 20px;
}

#logoViewer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

#logoViewer img {
    width: 50%;
    height: auto
}


.questPicture {
    display: flex;
    height: 100%;
    width: 30%;
    justify-content: center;
    align-items: center;
    padding: 2%;
}

.questPicture img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
}

.questInfos {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    padding: 2%;
}

.questOfferer {
    width: 100%;
    height: 10%;
    text-align: left;
}

.questOfferer p {
    font-size: 24px;
}

.questContent {
    width: 100%;
    height: 90%;
}

.questText {
    width: 100%;
    height: 50%;
    text-align: left;
}

.questButtons {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40%;
    justify-content: center;
}

.questButtons button {
    width: 100%;
    margin-top: 1%;
    margin-bottom: 1%;
}

#questMapIcon {
    width: auto;
    height: 50%;
    box-sizing: border-box
}

#questMapIcon img {
    width: auto;
    height: 50%;

}

.reward {
    justify-content: center;
}

.reward img {
    width: 50%;
    border-radius: 20px;
}

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

.islandViewer img {
    width: auto;
    height: 80%;
}
</style>
