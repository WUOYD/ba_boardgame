<template>
<div class="content single">
    <h1>Actions</h1>
    <button @click="generateEncounter()">Generate Encounter</button>
    <p>{{ text }}</p>
    <div class="encounter" id="nothing" v-if="currentEncounter == 'Nothing'">
        <h2>Nothing</h2>
    </div>
    <div class="encounter" id="monster" v-if="currentEncounter == 'Monster'">
        <h2>Monster</h2>
    </div>
    <div class="encounter" id="loot" v-if="currentEncounter == 'Loot'">
        <h2>Loot</h2>
    </div>
    <div class="encounter" id="quest" v-if="currentEncounter == 'Quest'">
        <h2>Quest</h2>
        <p>Quest type: {{ questType }}</p>
        <p>Quest offerer: {{ questOfferer }}</p>
        <p>Quest receiver: {{ questReceiver }}</p>
        <p>Quest region : {{ regionQuest }}</p>
        <p>Quest region deliver: {{ regionDeliver }}</p>
        <p>Quest option good: {{ optionGood }}</p>
        <p>Quest option bad: {{ optionBad }}</p>
        <p>Quest reward good: {{ rewardGood }}</p>
        <p>Quest reward bad: {{ rewardBad }}</p>
        <p>Quest quest text: {{ questText }}</p>
        <button @click="optionQuestGood()">Option Good</button>
        <button @click="optionQuestBad()">Option Bad</button>
        <button @click="denyQuest()">Deny Quest</button>

    </div>
    <div class="encounter" id="activeQuest" v-if="currentEncounter == 'ActiveQuest'">
        <h2>ActiveQuest</h2>
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
            text: "Encounter",
            currentEncounter: 0,
            questName: null,
            questType: null,
            questOfferer: null,
            questReceiver: null,
            regionQuest: null,
            regionDeliver: null,
            optionGood: null,
            optionBad: null,
            rewardGood: null,
            rewardBad: null,
            questText: null
        }
    },
    mounted() {
        socket.on("updateEncounter", message => {
            this.text = this.text + "\n" + message
            this.currentEncounter = message
        })
        socket.on("updatePlayer", activePlayer => {
            this.questType = activePlayer.quest.questType
            this.questOfferer = activePlayer.quest.questOfferer
            this.questReceiver = activePlayer.quest.questReceiver
            this.regionQuest = activePlayer.quest.regionQuest
            this.regionDeliver = activePlayer.quest.regionDeliver
            this.optionGood = activePlayer.quest.optionGood
            this.optionBad = activePlayer.quest.optionBad
            this.rewardGood = activePlayer.quest.rewardGood
            this.rewardBad = activePlayer.quest.rewardBad
            this.questText = activePlayer.quest.questText
        })
        socket.emit("getActivePlayer");
    },
    methods: {
        generateEncounter() {
            socket.emit("generateEncounter");
        },
        optionQuestGood(){
          socket.emit("optionQuestGood");
        },
        optionQuestBad(){
          socket.emit("optionQuestBad");
        },
        denyQuest(){
          socket.emit("denyQuest");
        },
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style>
.encounter {
    width: 100%;
    height: 30vh;
}
</style>
