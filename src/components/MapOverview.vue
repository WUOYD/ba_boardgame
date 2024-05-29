<template>
<div class="content">
    <div id="reputations">
        <div class="islandReputation" id="aridora">
            <h2>Aridora</h2>
            <div class="reputationListHeadline">
                <div class="playerPlace">Platz</div>
                <div class="playerName">Name</div>
                <div class="playerReputation">Ehre</div>
            </div>
            <div class="reputationListContent">
                <div v-for="(player, index) in listAridora" :key="index" class="reputationListElement">
                    <div class="playerPlace">{{ index + 1 }}</div>
                    <div class="playerName">{{ player.name }}</div>
                    <div class="playerReputation">{{ player.reputation }}</div>
                </div>
            </div>
        </div>
        <div class="islandReputation" id="athos">
            <h2>Athos</h2>
            <div class="reputationListHeadline">
                <div class="playerPlace">Platz</div>
                <div class="playerName">Name</div>
                <div class="playerReputation">Ehre</div>
            </div>
            <div class="reputationListContent">
                <div v-for="(player, index) in listAthos" :key="index" class="reputationListElement">
                    <div class="playerPlace">{{ index + 1 }}</div>
                    <div class="playerName">{{ player.name }}</div>
                    <div class="playerReputation">{{ player.reputation }}</div>
                </div>
            </div>
        </div>
        <div class="islandReputation" id="drakan">
            <h2>Drakan</h2>
            <div class="reputationListHeadline">
                <div class="playerPlace">Platz</div>
                <div class="playerName">Name</div>
                <div class="playerReputation">Ehre</div>
            </div>
            <div class="reputationListContent">
                <div v-for="(player, index) in listDrakan" :key="index" class="reputationListElement">
                    <div class="playerPlace">{{ index + 1 }}</div>
                    <div class="playerName">{{ player.name }}</div>
                    <div class="playerReputation">{{ player.reputation }}</div>
                </div>
            </div>
        </div>
        <div class="islandReputation" id="frosgar">
            <h2>Frosgar</h2>
            <div class="reputationListHeadline">
                <div class="playerPlace">Platz</div>
                <div class="playerName">Name</div>
                <div class="playerReputation">Ehre</div>
            </div>
            <div class="reputationListContent">
                <div v-for="(player, index) in listFrosgar" :key="index" class="reputationListElement">
                    <div class="playerPlace">{{ index + 1 }}</div>
                    <div class="playerName">{{ player.name }}</div>
                    <div class="playerReputation">{{ player.reputation }}</div>
                </div>
            </div>
        </div>
        <div class="islandReputation" id="nythroria">
            <h2>Nythroria</h2>
            <div class="reputationListHeadline">
                <div class="playerPlace">Platz</div>
                <div class="playerName">Name</div>
                <div class="playerReputation">Ehre</div>
            </div>
            <div class="reputationListContent">
                <div v-for="(player, index) in listNythoria" :key="index" class="reputationListElement">
                    <div class="playerPlace">{{ index + 1 }}</div>
                    <div class="playerName">{{ player.name }}</div>
                    <div class="playerReputation">{{ player.reputation }}</div>
                </div>
            </div>
        </div>
        <div class="islandReputation" id="talvar">
            <h2>Talvar</h2>
            <div class="reputationListHeadline">
                <div class="playerPlace">Platz</div>
                <div class="playerName">Name</div>
                <div class="playerReputation">Ehre</div>
            </div>
            <div class="reputationListContent">
                <div v-for="(player, index) in listTalvar" :key="index" class="reputationListElement">
                    <div class="playerPlace">{{ index + 1 }}</div>
                    <div class="playerName">{{ player.name }}</div>
                    <div class="playerReputation">{{ player.reputation }}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

    
    
<script>
import {
    socket
} from '../client';

export default {
    data() {
        return {
            listAridora: [],
            listAthos: [],
            listDrakan: [],
            listFrosgar: [],
            listNythoria: [],
            listTalvar: []
        };
    },
    mounted() {
        socket.on("setPlayerStandings", playerStandings => {
            console.log(playerStandings);
            this.savePlayerStandings(playerStandings);
            console.log();
        });
        socket.emit("getPlayerStandings");
    },
    methods: {
        savePlayerStandings(playerStandings) {
            this.listAridora = [];
            this.listAthos = [];
            this.listDrakan = [];
            this.listFrosgar = [];
            this.listNythoria = [];
            this.listTalvar = [];

            playerStandings.aridora.forEach(player => {
                this.listAridora.push({
                    name: player.name,
                    reputation: player.reputation
                });
            });
            playerStandings.athos.forEach(player => {
                this.listAthos.push({
                    name: player.name,
                    reputation: player.reputation
                });
            });
            playerStandings.drakan.forEach(player => {
                this.listDrakan.push({
                    name: player.name,
                    reputation: player.reputation
                });
            });
            playerStandings.frosgar.forEach(player => {
                this.listFrosgar.push({
                    name: player.name,
                    reputation: player.reputation
                });
            });
            playerStandings.nythoria.forEach(player => {
                this.listNythoria.push({
                    name: player.name,
                    reputation: player.reputation
                });
            });
            playerStandings.talvar.forEach(player => {
                this.listTalvar.push({
                    name: player.name,
                    reputation: player.reputation
                });
            });
        }
    }
};
</script>
    
    
<style scoped>
.content {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 40px 10vw 40px 10vw;
}

#reputations {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}

.islandReputation {
    display: flex;
    flex-basis: calc(50% - 20px);
    box-sizing: border-box;
    padding: 10px;
    flex-direction: column;
}

 .reputationListContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-size: 16px;
}

.reputationListHeadline, .reputationListElement{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    font-size: 16px;
}

.reputationListElement{
    border-bottom: dotted 1px;
}

.playerPlace,
.playerName,
.playerReputation {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.3333%;
    height: 100%;
}


img {
    width: 45%;
    height: auto;
}
</style>
