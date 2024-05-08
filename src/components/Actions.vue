<template>
<div class="content single">
    <h1>Actions</h1>
    <div id="headerActions">
        <div id="headerSectionLeft">
            <div class="headerItem">
                <img :src="imagePlayer" width="100" height="100" @click="updateView(1)" />
            </div>
            <div class="headerItem" id="playerStatisticsActions">
                <div id="playerGold">
                    <img :src="imageGold" width="50" height="50" />
                    <p>{{ playerGold }}</p>
                </div>
                <div id="playerHealth">
                    <img :src="imageHeal" width="50" height="50" />
                    <p>{{ playerHealth }}</p>
                </div>
            </div>
        </div>
        <div id="headerSectionMiddle">
            <h2>Spieler Aktionen</h2>
            <div id="playerActions">
                <div v-for="cell in cells" :key="cell.id" :class="{ 'cell': true, 'colored': cell.colored }"></div>
            </div>
        </div>
        <div id="headerSectionRight">
            <div class="headerItem">
                <img :src="imageMap" width="100" height="100" @click="updateView(8)" />
            </div>
            <div class="headerItem">
                <img :src="imageQuestBig" width="100" height="100" @click="updateView(5)" />
            </div>
        </div>
    </div>
    <div v-if="playerIsActive" id="actions">
        <div class="action" @click="investigate()">
            <img :src="imageInvestigate">
            <p>Untersuchen </p>
        </div>
        <div class="action" @click="move()">
            <img :src="imageMove"/>
            <p>Reisen</p>
        </div>
        <div class="action" @click="changeIsland()">
            <img :src="imageChangeIsland"/>
            <p>Insel wechseln</p>
        </div>
        <div v-if="playerHealth != 10" class="action" @click="heal()">
            <img :src="imageHeal"/>
            <p>Heilen</p>
        </div>
        <div v-if="playerHasQuest" class="action" @click="quest()">
            <img :src="imageQuest"/>
            <p>Quest</p>
        </div>
    </div>
    <div v-if="actionUsed != false" id="endAction" @click="endAction()">
        <p>Zug Beenden</p>
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
            imageChangeIsland: "/src/assets/icons/changeIsland.png",
            imageInvestigate: "/src/assets/icons/investigate.png",
            imageMove: "/src/assets/icons/move.png",
            imageHeal: "/src/assets/icons/heart.png",
            imageQuest: "/src/assets/icons/quest.png",
            imageQuestBig: "/src/assets/icons/quest_big.png",
            imageGold: "/src/assets/icons/gold.png",
            imageMap: "/src/assets/icons/map.png",
            imagePlayer: "/src/assets/img/player/player.webp",
            playerActions: null,
            playerHealth: null,
            playerGold: null,
            cells: [],
            playerHasQuest: false,
            playerIsActive: false,
            actionUsed: false,
        }
    },
    mounted() {
        socket.on("updatePlayer", activePlayer => {
            this.playerName = activePlayer.name;
            this.playerActions = activePlayer.actions;
            this.actionUsed = activePlayer.actionUsed;
            this.playerIsActive = activePlayer.playerIsActive
            this.playerHealth = activePlayer.health;
            this.playerGold = activePlayer.gold;
            if(activePlayer.quest != null){
                this.playerHasQuest = true
            }
            else{
                this.playerHasQuest = false
            }
            this.generateCells(parseInt(activePlayer.actions))
        })
    },
    methods: {
        generateCells(number) {
            this.cells = []; // Clear existing cells
            for (let i = 0; i < 10; i++) {
                const cell = {
                    id: i,
                    colored: i < number
                };
                this.cells.push(cell);
            }
        },
        investigate() {
            if(this.actionUsed != true){
            socket.emit("updateActions");
            socket.emit("updateView", 6);
            }
        },
        move() {
            if(this.actionUsed != true){
            socket.emit("updateActions");
            }
        },
        changeIsland() {
            if(this.actionUsed != true){
            socket.emit("updateActions");
            socket.emit("updateView", 3);
            }
        },
        heal() {
            if(this.actionUsed != true){
            socket.emit("updateActions");
            socket.emit("healPlayer");
            }
        },
        quest() {
            if(this.actionUsed != true){
            socket.emit("updateActions");
            socket.emit("manageQuest");
            }
        },
        updateView(comp) {
            socket.emit("updateView", comp);
        },
        endAction() {
            if(this.actionUsed == true){
                socket.emit("endAction");
                this.actionUsed = false;
            }
        }
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style>
#actions {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.action {
    width: calc(100%/5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.action p {
    font-size: 20px;
    color: #f7e4c2;
}

#playerActions {
    display: flex;
}

#playerStatisticsActions {
    display: flex;
    flex-direction: column;
}

#playerStatisticsActionsActions p {
    font-size: 24px;
}

.cell {
    width: 30px;
    height: 30px;
    margin: 5px;
    border: 1px solid #f7e4c2;
}

.colored {
    background-color: #6c0317;
}

#headerActions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 5%;
}

#headerActions img {
    border-radius: 50%;
    border: 3px solid #f7e4c2;
}

#actions img{
    width: 100%;
}

#headerSectionLeft {
    display: flex;
    flex-direction: row;
    width: 20%;
}

#headerSectionRight {
    display: flex;
    flex-direction: row;
    width: 20%;
}

.headerItem {
    margin-right: 2%;
    margin-left: 2%;
    cursor: pointer;
}

#playerStatisticsActions{
    cursor: default !important;
}

#playerStatisticsActions img {
    border-radius: 0% !important;
    border: 0px !important;
}

#playerStatisticsActions p{
    font-size: 24px !important;
}

#playerGold {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

}

#playerHealth {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#playerHealth p,
#playerGold p {
    margin-bottom: 0px !important;
}

#endAction {
    display: flex;
    align-items: flex-end;
}
</style>
