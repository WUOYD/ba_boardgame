<template>
<div class="content single">
    <h1>Quest</h1>
    <div v-if="questView" id="questView">
        <h2>Quest</h2>
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
                    <div class="questButtons">
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
                    <div class="questButtons">
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
                    <div class="questButtons">
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
                    <div class="questButtons">
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
                    <div class="questButtons">
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
                    <div class="questButtons">
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
                    <div class="questButtons">
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
                        <p v-if="optionPicked == 'Good'">{{ optionGoodText }}</p>
                        <p v-else>{{ optionBadText }}</p>
                    </div>
                    <div id="questMap">
                        <img :src="this.mapIcon" />
                    </div>
                </div>
            </div>
        </div>
        <div class="activeQuest" v-else>
            <p>Player has no quest</p>
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
            mapIcon: "src/assets/icons/map_icon.webp",
            imageTreasure: "src/assets/img/misc/treasure.webp",
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
                this.rewardGoodMove = activePlayer.quest.rewardGood.move
                this.rewardBadReputation = activePlayer.quest.rewardBad.reputation
                this.rewardBadGold = activePlayer.quest.rewardBad.gold
                this.rewardBadMove = activePlayer.quest.rewardBad.move
                this.optionGood = activePlayer.quest.optionGood
                this.optionBad = activePlayer.quest.optionBad
                if (activePlayer.quest.questMonster != null) {
                    this.questNameMonster = activePlayer.quest.questMonster.name
                    this.questTextMonster = activePlayer.quest.questMonsterText
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

    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style>
#questView {
    height: 80%;
    width: 100%;
}

.quest {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90%;
    justify-content: center;
    align-items: center;
}

.activeQuest {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
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

#questMap {
    width: auto;
    height: 50%;
    box-sizing: border-box
}

#questMap img {
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
</style>
