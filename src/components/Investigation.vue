<template>
<div class="content single">
    <h1>Investigation</h1>
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
        <button @click="changeView(2)">Zurück zur Übersicht</button>
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
            goldLoot: null
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
            socket.emit("optionQuestGood");
            this.currentEncounter = null;
            this.changeView(5)
            socket.emit("getActivePlayer");
        },
        optionQuestBad() {
            socket.emit("optionQuestBad");
            this.currentEncounter = null;
            this.changeView(5)
            socket.emit("getActivePlayer");
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

#quest {
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
    height: 40%;
    text-align: left;
}

.optionButtons{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60%;
    justify-content: center;
}

.optionButtons button{
    width: 100%;
    margin-top: 1%;
    margin-bottom: 1%;
}

table {
    margin-bottom: 10px;
}

td p{
    margin-bottom: 0px;
    text-align: center;
}

tr {
    height: 40px;
}

#monster{
    width: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

#monster img{
    width: 100%;
    overflow: hidden;
    object-fit: cover;
}

#loot img {
    width: 50%;
    border-radius: 20px;
}

</style>
