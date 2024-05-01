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
        <div id="questPicture">
            <img :src="questOffererPicture"/>
        </div>
        <div id="questInfos">
            <div id="questOfferer">
                <p>{{ questOffererName }}</p>
            </div>
            <div>
                <p>{{ questOffererText }}</p>
                <div id="optionButtons"></div>
                <button v-if="this.optionGood.hasOption != 0" @click="optionQuestGood()">{{ this.optionGood.optionText }}</button>
                <button v-if="this.optionBad.hasOption != 0" @click="optionQuestBad()">{{ this.optionBad.optionText }}</button>
                <button v-if="this.optionDeny.hasOption != 0" @click="optionQuestDeny()">{{ this.optionDeny.optionText }}</button>
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
            imageChangeIsland: "/src/assets/img/changeIsland.png",
            imageInvestigate: "/src/assets/img/investigate.png",
            imageMove: "/src/assets/img/move.png",
            currentEncounter: null,
            questName: null,
            questType: null,
            questOfferer: null,
            optionGood: null,
            optionBad: null,
            optionDeny: null,
            rewardGood: null,
            rewardBad: null,
            rewardDeny: null,
            questText: null,
            questOffererPicture: null,
            questOffererName: null,
            questOffererText: null,
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
                this.optionGood = activePlayer.quest.optionGood
                this.optionBad = activePlayer.quest.optionBad
                this.optionDeny = activePlayer.quest.optionDeny
                this.rewardGood = activePlayer.quest.rewardGood
                this.rewardBad = activePlayer.quest.rewardBad
                this.rewardDeny = activePlayer.quest.rewardDeny
                this.questOffererName = activePlayer.quest.questOfferer.name
                this.questOffererPicture = activePlayer.quest.questOfferer.image
                this.questOffererText = activePlayer.quest.questOfferer.text
                console.log(activePlayer.quest.optionGood)
                console.log(this.optionGood)
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
            this.changeView(5)

        },
        optionQuestBad() {
            socket.emit("optionQuestBad");
            this.currentEncounter = null;
            this.changeView(5)
        },
        optionQuestDeny() {
            socket.emit("optionQuestDeny");
            this.currentEncounter = null;
            this.changeView(5)
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
