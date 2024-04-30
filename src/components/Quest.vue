<template>
<div class="content single">
    <h1>Quest</h1>
    <div v-if="questView">
        <h2>Quest</h2>
        <div v-if="questStep == 'Deliver'" class="questContent">
            <div class="questPicture">
                <img :src="this.questPictureDeliver" />
            </div>
            <div class="questInfos">
                <div class="questName">
                    <p>{{ questNameDeliver }}</p>
                </div>
                <div>
                    <p v-if="this.optionPicked == 'Good'">{{ questTextDeliverGood }}</p>
                    <p v-else>{{ questTextDeliverBad }}</p>
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
                    <p v-if="this.optionPicked == 'Good'">{{ questTextMiddlemanGood }}</p>
                    <p v-else>{{ questTextMiddlemanBad }}</p>
                    <div class="questContinue">
                        <button @click="this.questContinue()">Weiter</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Return'" class="questContent">
            <div class="questPicture">
                <img :src="this.questPictureReturn" />
            </div>
            <div class="questInfos">
                <div class="questName">
                    <p>{{ questNameReturn }}</p>
                </div>
                <div>
                    <p v-if="this.optionPicked == 'Good'">{{ questTextReturnGood }}</p>
                    <p v-else>{{ questTextReturnBad }}</p>
                    <div class="questContinue">
                        <button @click="this.questReward()">Weiter</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="questStep == 'Desicion'" class="questContent">
            <div class="questPicture">
                <img :src="this.questPictureDeliver" />
            </div>
            <div class="questInfos">
                <div class="questName">
                    <p>{{ questNameDeliver }}</p>
                </div>
                <div>
                    <p>{{ questTextDeliver }}</p>
                    <div>
                        <button @click="this.desicionGood()">{{ questTextChoiceSecondGood }}</button>
                        <button @click="this.desicionBad()">{{ questTextChoiceSecondBad }}</button>
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
                        <p v-if="this.optionPicked == 'Good'">{{ rewardGood }}</p>
                        <p v-else>{{ rewardBad }}</p>
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
            <p>Quest offerer: {{ questOfferer }}</p>
            <p>Quest receiver: {{ questReceiver }}</p>
            <p>Quest region: {{ regionQuest }}</p>
            <p>Quest region deliver: {{ regionDeliver }}</p>
            <p>Quest option good: {{ optionGood }}</p>
            <p>Quest option bad: {{ optionBad }}</p>
            <p>Quest reward good: {{ rewardGood }}</p>
            <p>Quest reward bad: {{ rewardBad }}</p>
            <p>Quest quest text: {{ questText }}</p>
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
            questPictureDeliver: null,
            questNameDeliver: null,
            questTextDeliverGood: null,
            questTextDeliverBad: null,
            questPictureMiddleman: null,
            questNameMiddleman: null,
            questTextMiddlemanGood: null,
            questTextMiddlemanBad: null,
            questPictureReturn: null,
            questNameReturn: null,
            questTextReturnGood: null,
            questTextReturnBad: null,
            questPictureMonster: null,
            questNameMonster: null,
            questTextMonster: null,
            questTextChoiceSecondGood: null,
            questTextChoiceSecondBad: null,
        }
    },
    mounted() {
        socket.on("updatePlayer", activePlayer => {
            if (activePlayer.quest != null) {
                this.playerHasQuest = true
                this.optionPicked = activePlayer.quest.optionPicked
                this.questStep = activePlayer.quest.questStep
                this.questType = activePlayer.quest.questType
                this.questNameDeliver = Object.values(activePlayer.quest.questReceiver)[0]
                this.questPictureDeliver = Object.values(activePlayer.quest.questReceiver)[1]
                this.questTextDeliverGood = Object.values(activePlayer.quest.questReceiver)[2]
                this.questTextDeliverBad = Object.values(activePlayer.quest.questReceiver)[3]
                this.questNameMiddleman = Object.values(activePlayer.quest.questMiddleman)[0]
                this.questPictureMiddleman = Object.values(activePlayer.quest.questMiddleman)[1]
                this.questTextMiddlemanGood = Object.values(activePlayer.quest.questMiddleman)[2]
                this.questTextMiddlemanBad = Object.values(activePlayer.quest.questMiddleman)[3]
                this.questNameReturn = Object.values(activePlayer.quest.questReceiver)[0]
                this.questPictureReturn = Object.values(activePlayer.quest.questReceiver)[1]
                this.questTextReturnGood = Object.values(activePlayer.quest.questReceiver)[2]
                this.questTextReturnBad = Object.values(activePlayer.quest.questReceiver)[3]
                this.questNameMonster = activePlayer.quest.questMonster.name
                this.questPictureMonster = activePlayer.quest.questMonster.picture
                this.questTextMonster = activePlayer.quest.questMonsterText
                this.regionQuest = activePlayer.quest.regionQuest
                this.regionDeliver = activePlayer.quest.regionDeliver
                this.questTextChoiceSecondGood = activePlayer.quest.optionGood
                this.questTextChoiceSecondBad = activePlayer.quest.optionBad
                this.rewardGood = activePlayer.quest.rewardGood
                this.rewardBad = activePlayer.quest.rewardBad
            }
        })
        socket.on("changeQuestView", () => {
            if (this.questView) {
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
            socket.emit("questComplete")
        },

    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>
