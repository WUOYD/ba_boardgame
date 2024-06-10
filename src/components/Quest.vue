<template>
<div class="content">
    <div v-if="questView" id="questView">
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
                    <div class="optionButtons">
                        <button @click="this.questReward()">Weiter</button>
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
                    <div class="optionButtons">
                        <button @click="this.questContinue()">Weiter</button>
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
                    <div class="optionButtons">
                        <button @click="this.questReward()">Weiter</button>
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
                    <div class="optionButtons">
                        <button @click="this.desicionGood()">{{ questTextOptionSecondGood }}</button>
                        <button @click="this.desicionBad()">{{ questTextOptionSecondBad }}</button>
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
                    <div class="optionButtons">
                        <button @click="this.questContinueFight()">Kämpfen</button>
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
                            <p>Du erhälst:</p>
                            <p v-if="rewardGoodReputation!='-'">{{ rewardGoodReputation }} Ehre auf {{ regionQuest }}</p>
                            <p v-if="rewardGoodGold!='-'">{{ rewardGoodGold }} Gold</p>
                            <p v-if="rewardGoodMove!=null">Neuer Angriff erhalten: {{ rewardGoodMove }} Move</p>
                        </div>
                        <div v-else>
                            <p v-if="rewardBadReputation!='-'">{{ rewardBadReputation }} Ehre auf {{ regionQuest }}</p>
                            <p v-if="rewardBadGold!='-'">{{ rewardBadGold }} Gold</p>
                            <p v-if="rewardBadMove!=null">Neuer Angriff erhalten: {{ rewardBadMove }} Move</p>
                        </div>
                    </div>
                    <div class="optionButtons">
                        <button @click="this.questComplete()">Weiter</button>
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
                            <p v-if="rewardGoodReputation!='-'">{{ rewardGoodReputation }} Ehre auf {{ regionQuest }}</p>
                            <p v-if="rewardGoodGold!='-'">{{ rewardGoodGold }} Gold</p>
                            <p v-if="rewardGoodMove!=null">Neuer Angriff erhalten:{{ rewardGoodMove }} </p>
                        </div>
                        <div v-else>
                            <p v-if="rewardBadReputation!='-'">{{ rewardBadReputation }} Ehre auf {{ regionQuest }}</p>
                            <p v-if="rewardBadGold!='-'">{{ rewardBadGold }} Gold</p>
                            <p v-if="rewardBadMove!=null">Neuer Angriff erhalten:{{ rewardBadMove }} Move</p>
                        </div>
                    </div>
                    <div class="optionButtons">
                        <button @click="this.questComplete()">Weiter</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="quest">
        <div class="activeQuest" v-if="playerHasQuest">
            <div class="questPicture">
                <img :src="this.questPictureOfferer" />
            </div>
            <div class="questInfos">
                <div class="questOfferer">
                    <p>{{ questNameOfferer }}</p>
                </div>
                <div class="questContent">
                    <div class="questText">
                        <p>{{ questTextOfferer }}</p>
                            <p class="optionTexts" v-if="optionPicked == 'Good'">{{ optionGoodText }}</p>
                            <p class="optionTexts" v-else>{{ optionBadText }}</p>
                    </div>
                    <div id="questMapIcon">
                        <img :src="this.mapIcon" @click="this.showMap()" />
                    </div>
                </div>
            </div>
        </div>
        <div class="activeQuest" v-else>
            <p>Player has no quest</p>
        </div>
    </div>
    <div v-if="this.openMap" id="questMap">
        <img v-if="optionPicked == 'Good'" :src="this.imageMapGood" @click="this.showMap()" />
        <img v-else :src="this.imageMapBad" @click="this.showMap()" />
        <div v-if="openMapFirstTime == true" id="questMapFirstTime">
            <div v-if="optionPicked == 'Good'">
                <p v-if="this.optionGood == 'Deliver' || this.optionGood == 'DeliverMonster' || this.optionGood == 'DeliverDecision'">Platziere einen Marker auf die Angezeigte Position!</p>
                <p v-else>Platziere einen Marker auf deiner aktuellen Position und einen auf die Angezeigte Position!</p>
            </div>
            <div v-if="optionPicked == 'Bad'">
                <p v-if="this.optionGood == 'Deliver' || this.optionGood == 'DeliverMonster' || this.optionGood == 'DeliverDecision'">Platziere einen Marker auf die Angezeigte Position!</p>
                <p v-else>Platziere einen Marker auf deiner aktuellen Position und einen auf die Angezeigte Position!</p>
            </div>
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
            playerHasQuest: false,
            questType: null,
            regionQuest: null,
            regionDeliver: null,
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
            mapIcon: "src/assets/icons/map.webp",
            imageTreasure: "src/assets/img/misc/treasure.webp",
            imageMapGood: "",
            imageMapBad: "",
            movesTableCombinationSwordSword: null,
            movesTableCombinationMagicMagic: null,
            movesTableCombinationSkullSkull: null,
            movesTableCombinationSwordMagic: null,
            movesTableCombinationMagicSkull: null,
            movesTableCombinationSwordSkull: null,
            openMap: false,
            openMapFirstTime: false,
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
        socket.on("updatePlayer", activePlayer => {
            if (activePlayer.quest != null) {
                this.playerHasQuest = true
                this.optionPicked = activePlayer.quest.optionPicked
                this.optionPickedDecision = activePlayer.quest.optionPickedDecision
                this.questStep = activePlayer.quest.questStep
                this.questType = activePlayer.quest.questType
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
                this.rewardBadReputation = activePlayer.quest.rewardBad.reputation
                this.rewardBadGold = activePlayer.quest.rewardBad.gold
                this.optionGood = activePlayer.quest.optionGood.type
                this.optionBad = activePlayer.quest.optionBad.type
                this.imageMapGood = activePlayer.quest.imageMapGood
                this.imageMapBad = activePlayer.quest.imageMapBad
                if (activePlayer.quest.questMonster != null) {
                    this.questNameMonster = activePlayer.quest.questMonster.name
                    this.questTextMonster = activePlayer.quest.questMonsterText
                }
                let rewardMove
                if (activePlayer.quest.rewardGood.move != "-" || activePlayer.quest.rewardBad.move != "-") {
                    if (activePlayer.quest.rewardGood.move != "-") {
                        switch (activePlayer.quest.rewardGood.move[0]) {
                            case "SwordSword":
                                rewardMove = this.movesTableCombinationSwordSword[activePlayer.quest.rewardGood.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "SwordMagic":
                                rewardMove = this.movesTableCombinationSwordMagic[activePlayer.quest.rewardGood.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "MagicMagic":
                                rewardMove = this.movesTableCombinationMagicMagic[activePlayer.quest.rewardGood.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "MagicSkull":
                                rewardMove = this.movesTableCombinationMagicSkull[activePlayer.quest.rewardGood.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "SkullSkull":
                                rewardMove = this.movesTableCombinationSkullSkull[activePlayer.quest.rewardGood.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "SwordSkull":
                                rewardMove = this.movesTableCombinationSwordSkull[activePlayer.quest.rewardGood.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                        }
                    } else {
                        switch (activePlayer.quest.rewardBad.move[0]) {
                            case "SwordSword":
                                rewardMove = this.movesTableCombinationSwordSword[activePlayer.quest.rewardBad.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "SwordMagic":
                                rewardMove = this.movesTableCombinationSwordMagic[activePlayer.quest.rewardBad.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "MagicMagic":
                                rewardMove = this.movesTableCombinationMagicMagic[activePlayer.quest.rewardBad.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "MagicSkull":
                                rewardMove = this.movesTableCombinationMagicSkull[activePlayer.quest.rewardBad.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "SkullSkull":
                                rewardMove = this.movesTableCombinationSkullSkull[activePlayer.quest.rewardBad.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                            case "SwordSkull":
                                rewardMove = this.movesTableCombinationSwordSkull[activePlayer.quest.rewardBad.move[1]]
                                this.rewardGoodMove = rewardMove.name
                                break
                        }
                    }
                }
            } else {
                this.playerHasQuest = false
            }
        })
        socket.on("questReward", () => {
            this.questReward()
        })
        socket.on("updateQuestView", () => {
            this.questView = true;
        })
        socket.on("showMapClient", () => {
            this.openMap = true;
            this.openMapFirstTime = true;
        })
        socket.emit("getActivePlayer")
        socket.emit("getMovesTables");
    },
    methods: {
        desicionGood() {
            socket.emit("decisionGood")
        },
        desicionBad() {
            socket.emit("decisionBad")
        },
        questContinue() {
            socket.emit("updateView", 2)
            this.questView = false;
        },
        questContinueFight() {
            socket.emit("updateView", 4)
            this.questView = false;
        },
        questReward() {
            if (this.optionPickedDecision != null) {
                this.questStep = "RewardDecision"
            } else {
                this.questStep = "Reward"
            }
        },
        questComplete() {
            socket.emit("updateView", 2)
            socket.emit("questComplete")
            this.questView = false;
        },
        showMap() {
            if (this.openMap) {
                this.openMap = false;
                this.openMapFirstTime = false;
                socket.emit("showMapViewer")
            } else {
                this.openMap = true;
                this.openMapFirstTime = false;
                socket.emit("showMapViewer")
            }
        }
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style>

</style>
