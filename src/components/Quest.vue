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
                            <p v-if="rewardGood.reputation!='-'">{{ rewardGood.reputation }} Ehre</p>
                            <p v-if="rewardGood.gold!='-'">{{ rewardGood.gold }} Gold</p>
                            <p v-if="rewardGood.move!='-'">{{ rewardGood.move }} Move</p>
                        </div>
                        <div v-else>
                            <p v-if="rewardBad.reputation!='-'">{{ rewardBad.reputation }} Ehre</p>
                            <p v-if="rewardBad.gold!='-'">{{ rewardBad.gold }} Gold</p>
                            <p v-if="rewardBad.move!='-'">{{ rewardBad.move }} Move</p>
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
            <div class=""></div>
            <p>Quest type: {{ questType }}</p>
            <p>Quest region: {{ regionQuest }}</p>
            <p>Quest region deliver: {{ regionDeliver }}</p>
            <p v-if="optionPicked == 'Good'">Quest reward good: {{ rewardGood }}</p>
            <p v-else>Quest reward bad: {{ rewardBad }}</p>
            <p>Quest Text: {{ questTextOfferer }}</p>
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
            rewardGood: null,
            rewardBad: null,
            questView: false,
            questStep: null,
            optionPicked: null,
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
        }
    },
    mounted() {
        socket.on("updatePlayer", activePlayer => {
            if (activePlayer.quest != null) {
                this.playerHasQuest = true
                this.optionPicked = activePlayer.quest.optionPicked
                this.questStep = activePlayer.quest.questStep
                this.questType = activePlayer.quest.questType
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
                this.rewardGood = activePlayer.quest.rewardGood
                this.rewardBad = activePlayer.quest.rewardBad

                //this.questNameMonster = activePlayer.quest.questMonster.name
                //this.questPictureMonster = activePlayer.quest.questMonster.picture
                //this.questTextMonster = activePlayer.quest.questMonsterText
            }
            else{
                this.playerHasQuest = false
            }
        })
        socket.on("changeQuestView", () => {
            if (this.questView == false) {
                this.questView = true
            } else {
                this.questView = false
            }
        })
        socket.on("updateQuestDecision", questOption => {
            if(questOption == "Good"){
                
            }
            else{}
        })
        socket.emit("getActivePlayer")
    },
    methods: {
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
        desicionGood() {
            socket.emit("decisionGood")
        },
        desicionBad() {
            socket.emit("decisionBad")
        },
        questContinue() {
            socket.emit("updateView", 2)
        },
        questContinueFight() {
            socket.emit("updateView", 4)
        },
        questReward() {
            this.questStep = "Reward"
        },
        questComplete() {
            socket.emit("updateView", 2)
            socket.emit("questComplete")
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

.quest {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80%;
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
    height: 60%;
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
</style>
