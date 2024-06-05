<template>
<div class="content">
    <div class="encounter" id="monster" v-if="currentEncounter == 'Monster'">
        <img :src="monsterImage" width="250" height="250" />
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
        <img :src="imageTreasure" />
        <p>Du hast {{ this.goldLoot }} Gold gefunden</p>
        <button @click="closeLoot()">Zurück zur Übersicht</button>
    </div>
    <div class="encounter" id="quest" v-if="currentEncounter == 'Quest'">
        <div class="questPicture">
            <img :src="questOffererPicture" />
        </div>
        <div class="questInfos">
            <div class="questOfferer">
                <p>{{ questOffererName }}</p>
            </div>
            <div class="questContent">
                <div class="questText">
                    <p>{{ questOffererText }}</p>
                </div>
                <div class="optionButtons">
                    <button v-if="hasOptionGood == 1" @click="optionQuestGood()">{{ this.optionGood.optionText }}</button>
                    <button v-if="hasOptionBad == 1" @click="optionQuestBad()">{{ this.optionBad.optionText }}</button>
                    <button v-if="hasOptionDeny == 1" @click="optionQuestDeny()">{{ this.optionDeny.optionText }}</button>
                </div>
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
            imageTreasure: "src/assets/img/misc/treasure.webp",
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
            hasOptionGood: null,
            hasOptionBad: null,
            hasOptionDeny: null,
            rewardGood: null,
            rewardBad: null,
            rewardDeny: null,
            questText: null,
            questOffererPicture: null,
            questOffererName: null,
            questOffererText: null,
            monsterImage: "src/assets/img/placeholder.webp",
            monsterName: null,
            monsterType: null,
            goldLoot: null,
            imageMapGood: "",
            imageMapBad: "",
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
                this.hasOptionGood = activePlayer.quest.optionGood.hasOption
                this.hasOptionBad = activePlayer.quest.optionBad.hasOption
                this.hasOptionDeny = activePlayer.quest.optionDeny.hasOption
                this.rewardGood = activePlayer.quest.rewardGood
                this.rewardBad = activePlayer.quest.rewardBad
                this.rewardDeny = activePlayer.quest.rewardDeny
                this.questOffererName = activePlayer.quest.questOfferer.name
                this.questOffererPicture = activePlayer.quest.questOfferer.image
                this.questOffererText = activePlayer.quest.questOfferer.text
                this.imageMapGood = activePlayer.quest.imageMapGood
                this.imageMapBad = activePlayer.quest.imageMapBad
            }
            this.goldLoot = activePlayer.goldLoot
        })
        socket.on("updateMonster", activePlayer => {
            if (activePlayer.fight != null) {
                this.monsterName = activePlayer.fight.activeMonster.name;
                this.monsterImage = activePlayer.fight.activeMonster.image;
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
            this.currentEncounter = null;
            this.changeView(5)
            socket.emit("optionQuestGood");
            socket.emit("getActivePlayer");
            setTimeout(() => {
                socket.emit("showMap");
                socket.emit("showMapViewer")
            }, 500);
        },
        optionQuestBad() {
            this.currentEncounter = null;
            this.changeView(5)
            socket.emit("optionQuestBad");
            socket.emit("getActivePlayer");
            setTimeout(() => {
                socket.emit("showMap");
                socket.emit("showMapViewer")
            }, 500);
        },
        optionQuestDeny() {
            socket.emit("optionQuestDeny");
            this.currentEncounter = null;
            this.changeView(2)
            socket.emit("getActivePlayer");
        },
        changeView(comp) {
            socket.emit("updateView", comp);
            socket.emit("getActivePlayer");
        },
        closeLoot(){
            socket.emit("updateViewer", "Logo")
            this.changeView(2)
        }
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style>

</style>
