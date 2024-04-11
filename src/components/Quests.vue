<template>
<div class="content single">
    <h1>Quests</h1>
    <div class="quest" v-if="playerHasQuest">
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
    </div>
    <div class="quest" v-else>
        <p>Player has no quest</p>
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
        socket.on("updatePlayer", activePlayer => {
            if (activePlayer.quest != null) {
                this.playerHasQuest = true
            }
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
    methods: {},
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>
