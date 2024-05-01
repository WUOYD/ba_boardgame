<template>
<div class="content single">
    <h1>Quest</h1>
    <div v-if="questView">
        <h2>Quest</h2>
        <div v-if="questStep == 'Deliver'" class="questContent">
            <div class="questPicture">
                <img :src="this.questPictureOfferer" />
            </div>
            <div class="questInfos">
                <div class="questName">
                    <p>{{ questNameOfferer }}</p>
                </div>
                <div>
                    <div v-if="optionPicked == 'Good'">
                        <p>{{ questTextOffererGood }}</p>
                    </div>
                    <div v-else>
                        <p>{{ questTextOffererBad }}</p> 
                    </div>
                    <div class="questContinue">
                        <button @click="this.questReward()">Weiter</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Middleman'" class="questContent">
            <div class="questPicture">
                <img :src="this.questPictureMiddleman" />
            </div>
            <div class="questInfos">
                <div class="questName">
                    <p>{{ questNameMiddleman }}</p>
                </div>
                <div>
                    <div v-if="optionPicked == 'Good'">
                        <p>{{ questTextMiddlemanGood }}</p>
                    </div>
                    <div v-else>
                        <p>{{ questTextMiddlemanBad }}</p> 
                    </div>
                    <div class="questContinue">
                        <button @click="this.questContinue()">Weiter</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Return'" class="questContent">
            <div class="questPicture">
                <img :src="this.questPictureReceiver" />
            </div>
            <div class="questInfos">
                <div class="questName">
                    <p>{{ questNameReceiver }}</p>
                </div>
                <div>
                    <div v-if="optionPicked == 'Good'">
                        <p>{{ questTextReceiverGood }}</p>
                    </div>
                    <div v-else>
                        <p>{{ questTextReceiverBad }}</p> 
                    </div>
                    <div class="questContinue">
                        <button @click="this.questReward()">Weiter</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Desicion'" class="questContent">
            <div class="questPicture">
                <img :src="this.questPictureReceiver" />
            </div>
            <div class="questInfos">
                <div class="questName">
                    <p>{{ questNameReceiver }}</p>
                </div>
                <div>
                    <p>{{ questTextReceiver }}</p>
                    <div>
                        <button @click="this.desicionGood()">{{ questTextOptionSecondGood }}</button>
                        <button @click="this.desicionBad()">{{ questTextOptionSecondBad }}</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Fight'" class="questContent">
            <div class="questPicture">
                <img :src="this.questPictureMonster" />
            </div>
            <div class="questInfos">
                <div class="questName">
                    <p>{{ questNameMonster }}</p>
                </div>
                <div>
                    <p>{{ questTextMonster }}</p>
                    <div class="questContinue">
                        <button @click="this.questContinueFight()">Kämpfen</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Reward'" class="questContent">
            <div class="questInfos">
                <div>
                    <div>
                        <img :src="this.treasurePicture" />
                    </div>
                    <div>
                        <div v-if="this.optionPicked == 'Good'">
                            <p v-if="rewardGood[0]!=0">{{ rewardGood[0] }} Ehre</p>
                            <p v-if="rewardGood[1]!=0">{{ rewardGood[1] }} Gold</p>
                            <p v-if="rewardGood[2]!=0">{{ rewardGood[2] }} Move</p>
                        </div>
                        <div v-else>
                            <p v-if="rewardBad[0]!=0">{{ rewardBad[0] }} Ehre</p>
                            <p v-if="rewardBad[1]!=0">{{ rewardBad[1] }} Gold</p>
                            <p v-if="rewardBad[2]!=0">{{ rewardBad[2] }} Move</p>
                        </div>
                    </div>
                    <div class="questContinue">
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
                this.questNameReceiver = activePlayer.quest.questReceiver.name
                this.questPictureReceiver= activePlayer.quest.questReceiver.image
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
