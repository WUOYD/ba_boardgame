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
                <button v-if="this.questOptionGood == 1" @click="optionQuestGood()">{{ optionGood[2] }} Reward: {{  }}</button>
                <button v-if="this.questOptionBad == 1" @click="optionQuestBad()">{{ optionBad[2] }}</button>
                <button v-if="this.questOptionDeny == 1" @click="optionQuestDeny()">{{ optionDeny[2] }}</button>
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
                this.questOfferer = Array.from(activePlayer.quest.questOfferer)
                this.optionGood = Array.from(activePlayer.quest.optionGood)
                this.optionBad = Array.from(activePlayer.quest.optionBad)
                this.optionDeny = Array.from(activePlayer.quest.optionDeny)
                this.rewardGood = Array.from(activePlayer.quest.rewardGood)
                this.rewardBad = Array.from(activePlayer.quest.rewardBad)
                this.rewardDeny = Array.from(activePlayer.quest.rewardDeny)
                this.questOffererName = this.questOfferer[0]
                this.questOffererPicture = this.questOfferer[1]
                this.questOffererText = this.questOfferer[2]
                this.questOptionGood = this.optionGood[0]
                this.questOptionBad = this.optionBad[0]
                this.questOptionDeny = this.optionDeny[0]
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
