<template>
<div class="content single">
    <h1>Investigation</h1>
    <div class="encounter" id="nothing" v-if="currentEncounter == 'Nothing'">
        <h2>Nothing</h2>
        <p>Nothing happens...</p>
        <button @click="changeView(2)">Zurück zur Übersicht</button>
    </div>
    <div class="encounter" id="monster" v-if="currentEncounter == 'Monster'">
        <h2>Monster</h2>
        <img :src="monsterPicture" width="250" height="250" />
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>
                        <p>{{ monsterName }}</p>
                    </td>
                </tr>
                <tr>
                    <th>Typ</th>
                    <td>
                        <p>{{ monsterType }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="changeView(4)">Kämpfe gegen das Monster</button>
    </div>
    <div class="encounter" id="loot" v-if="currentEncounter == 'Loot'">
        <h2>Loot</h2>
        <p>Loot XY</p>
        <button @click="changeView(2)">Zurück zur Übersicht</button>
    </div>
    <div class="encounter" id="quest" v-if="currentEncounter == 'Quest'">
        <h2>Quest</h2>
        <p>Quest type: {{ questType }}</p>
        <p>Quest offerer: {{ questOfferer }}</p>
        <p>Quest receiver: {{ questReceiver }}</p>
        <p>Quest region: {{ regionQuest }}</p>
        <p>Quest region deliver: {{ regionDeliver }}</p>
        <p>Quest option good: {{ optionGood }}</p>
        <p>Quest option bad: {{ optionBad }}</p>
        <p>Quest quest text: {{ questText }}</p>
        <button @click="optionQuestGood()">Option Good</button>
        <button @click="optionQuestBad()">Option Bad</button>
        <button @click="optionQuestDeny()">Deny Quest</button>
    </div>
    <div class="encounter" id="activeQuest" v-if="currentEncounter == 'ActiveQuest'">
        <h2>ActiveQuest</h2>
        <p>Quest abgeschlossen</p>
        <p>Quest offerer: {{ questOfferer }}</p>
        <p>Quest quest text: {{ questText }}</p>
        <p>Quest reward:  
            <p v-if="optionPicked == 'Good'">{{ rewardGood }}</p>
            <p v-if="optionPicked == 'Bad'">{{ rewardBad}}</p>
        </p>
        <button @click="changeView(2)">Zurück zur Übersicht</button>
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
            imageChangeIsland: "/src/assets/img/changeIsland.png",
            imageInvestigate: "/src/assets/img/investigate.png",
            imageMove: "/src/assets/img/move.png",
            currentEncounter: null,
            questName: null,
            questType: null,
            questOfferer: null,
            questMiddleman: null,
            questReceiver: null,
            regionQuest: null,
            regionDeliver: null,
            optionGood: null,
            optionBad: null,
            optionDeny: null,
            rewardGood: null,
            rewardBad: null,
            rewardDeny: null,
            optionPicked: null,
            monsterPicture: "src/assets/img/placeholder.webp",
            monsterName: null,
            monsterType: null,
        }
    },
    mounted() {
        socket.on("updateEncounter", message => {
            this.currentEncounter = message
        })
        socket.on("updatePlayer", activePlayer => {
            if (activePlayer.quest != null) {
                this.questType = activePlayer.quest.questType
                this.questOfferer = activePlayer.quest.questOfferer
                this.questMiddleman = activePlayer.quest.questMiddleman
                this.questReceiver = activePlayer.quest.questReceiver
                this.regionQuest = activePlayer.quest.regionQuest
                this.regionDeliver = activePlayer.quest.regionDeliver
                this.optionGood = activePlayer.quest.optionGood
                this.optionBad = activePlayer.quest.optionBad
                this.optionDeny = activePlayer.quest.optionDeny
                this.rewardGood = activePlayer.quest.rewardGood
                this.rewardBad = activePlayer.quest.rewardBad
                this.rewardDeny = activePlayer.quest.rewardDeny
                this.questMonster = activePlayer.quest.questMonster
            }
        })
        socket.on("updateMonster", activePlayer => {
            if (activePlayer.fight != null) {
                this.monsterName = activePlayer.fight.activeMonster.name;
                this.monsterPicture = activePlayer.fight.activeMonster.picture;
                this.monsterType = activePlayer.fight.activeMonster.type;
            }
        })
        this.investigate()
        socket.emit("getActivePlayer");
    },
    methods: {
        investigate() {
            socket.emit("investigate");
        },
        optionQuestGood() {
            socket.emit("optionQuestGood");
            this.currentEncounter = null;
            this.changeView(2)

        },
        optionQuestBad() {
            socket.emit("optionQuestBad");
            this.currentEncounter = null;
            this.changeView(2)
        },
        optionQuestDeny() {
            socket.emit("optionQuestDeny");
            this.currentEncounter = null;
            this.changeView(2)
        },
        changeView(comp) {
            socket.emit("updateView", comp);
        }
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style>
p {
    margin-bottom: 20px;
}
</style>
