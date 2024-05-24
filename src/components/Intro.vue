<template>
<div class="content">
    <div class="intro">
        <div class="text-wrapper">
            <img :src="logo">
        </div>
        <div style="display: none;">
            <p>Hier kommt ein Video</p>
        </div>
        <div>
            <p>Regeln</p>
        </div>
        <div id="playerList">
            <div id="tableHeader">
                <p>Spielername</p>
                <p>Status</p>
            </div>
            <div id="playerInfos">
                <div id="playerNames">
                    <div v-for="(player, index) in playerList" :key="index" class="playerName">
                        <p>{{ player.name }}</p>
                    </div>
                </div>
                <div id="playerStates">
                    <div v-for="(playerState, index) in playerReadyList" :key="index" class="playerState">
                        <p>{{ playerState ? 'ready' : 'not ready' }}</p>
                    </div>
                </div>
            </div>
        </div>
        <button @click="this.playerReady()">Bereit</button>
        <button v-if="this.host == true" @click="this.startGame()">Spiel starten</button>
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
            playerList: null,
            playerReadyList: null,
            host: false,
            logo: "src/assets/logo/Logo.png"
        }
    },
    mounted() {
        socket.on('updatePlayer', activePlayer => {
            this.host = activePlayer.host
        })
        socket.on('setReadyState', playerState => {
            this.playerList = playerState.playerList
            this.playerReadyList = playerState.readyList
        })
        socket.emit("getReadyState");
        socket.emit("getActivePlayer");
    },
    methods: {
        playerReady() {
            socket.emit("changeReadyState");
        },
        startGame() {
            socket.emit("hostStartGame");
        }
    },

}
</script>

<style scoped>
.content {
    /* display: none !important; */
    position: relative;
    height: 100vh;
    width: 100vw;
    z-index: 1;
}

/* ================== INTRO ====================== */

.text-wrapper {
    padding: 0 15vw;
    width: 100%;
    box-sizing: border-box;
}

.text-wrapper {
    padding: 0 15vw;
    width: 100%;
    box-sizing: border-box;    
    margin-bottom: 25px;
}

.text-wrapper img {
    height: auto;
    width: 60%;
}

p {
    margin-bottom: 20px;
    font-size: 16px;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

button {
    margin-right: 2%;
    margin-left: 2%;
}

#playerList {
    width: 100%;
    display: flex;
    flex-direction: column;
}

#tableHeader {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
}

#tableHeader p {
    margin-right: 2%;
    margin-left: 2%;
    width: 15%;
}

#playerInfos{
    display: flex;
    flex-direction: row;
}

#playerNames{
    display: flex;
    flex-direction: column;
    width: 50%;
}

#playerStates{
    display: flex;
    flex-direction: column;
    width: 50%;
}

.playerName {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

.playerName p{
    width: 30%;
    margin-right: 4%;
    margin-left: 4%;
}

.playerState {
    display: flex;
    width: 100%;
    justify-content: flex-start;
}

.playerState p{
    width: 30%;
    margin-right: 4%;
    margin-left: 4%;
}


#tableHeader p{
    font-size: 20px;
}


</style>
