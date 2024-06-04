<template>
<div class="content">
    <div class="intro">
        <div class="logo-wrapper">
            <img :src="logo">
        </div>
        <div>
            <p>Hier kommt ein Video</p>
        </div>
        <div>
            <p>Regeln</p>
        </div>
        <div id="playerList">
            <div class="tableHeader">
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
                        <p>{{ playerState ? 'Bereit' : 'Nicht Bereit' }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="buttons">
            <button @click="this.playerReady()">Bereit</button>
            <button v-if="this.host == true" @click="this.startGame()">Spiel starten</button>
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

<style >

</style>
