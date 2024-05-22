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
                    <p>{{ questNameReceiver }}</p>
                </div>
                <div class="questContent">
                    <div class="questText">
                        <p>{{ questTextReceiver }}</p>
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
                <div>
                    <div>
                        <img :src="this.treasurePicture" />
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
    </div>
    <div v-else>
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
                        <img :src="this.mapIcon"/>
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
            questNameReceiver: null,
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
        }
    },
    mounted() {
        socket.on("updatePlayer", activePlayer => {
            if (activePlayer.quest != null) {
                this.playerHasQuest = true
                this.optionPicked = activePlayer.quest.optionPicked
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
                this.questPictureReceiverGood= activePlayer.quest.questReceiver.imageGood
                this.questPictureReceiverBad= activePlayer.quest.questReceiver.imageBad
                this.questTextReceiverGood = activePlayer.quest.questReceiver.textGood
                this.questTextReceiverBad = activePlayer.quest.questReceiver.textBad
                this.regionQuest = activePlayer.quest.regionQuest
                this.regionDeliver = activePlayer.quest.regionDeliver
                this.questTextOptionSecondGood = activePlayer.quest.optionGoodSecond.text
                this.questTextOptionSecondBad = activePlayer.quest.optionBadSecond.text
                this.rewardGoodReputation = activePlayer.quest.rewardGood.reputation 
                this.rewardGoodGold = activePlayer.quest.rewardGood.gold
                this.rewardGoodMove = activePlayer.quest.rewardGood.move
                this.rewardBadReputation = activePlayer.quest.rewardBad.reputation
                this.rewardBadGold = activePlayer.quest.rewardBad.gold
                this.rewardBadMove = activePlayer.quest.rewardBad.move
                this.optionGood = activePlayer.quest.optionGood
                this.optionBad = activePlayer.quest.optionBad
            }
            else{
                this.playerHasQuest = false
            }
        })
        socket.on("updateQuestDecision", questOption => {
            if(questOption == "Good"){
                
            }
            else{}
        })
        socket.on("updateQuestView", () => {
            this.questView = true;
        })
        socket.emit("getActivePlayer")
    },
    methods: {
        desicionGood() {
            socket.emit("decisionGood")
            this.questView = false;
        },
        desicionBad() {
            socket.emit("decisionBad")
            this.questView = false;
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
            this.questStep = "Reward"
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

#questView{
    height: 100%;
}

.quest, .activeQuest {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80vh;
}

.questPicture {
    display: flex;
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
    width: 70%;
    padding: 2%;
}

.questOfferer {
    width: 100%;
    height: 10%;
    text-align: left;
}

.questOfferer p{
    font-size: 24px;
}

.questContent{
    width: 100%;
    height: 90%;
}

.questText{
    width: 100%;
    height: 40%;
    text-align: left;
}

.questButtons{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40%;
    justify-content: center;
}

.questButtons button{
    width: 100%;
    margin-top: 1%;
    margin-bottom: 1%;
}

#questMap {
    width: auto;
    height: 40%;
    box-sizing: border-box
}

#questMap img{
    width: auto;
    height: 100%;

}
</style>
