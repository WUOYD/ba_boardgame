<template>
    <div class="content">
        <div class="intro">
            <div class="logo-wrapper">
                <img :src="logo">
            </div>
            <div class="titleText" id="changeType">
                <p>Wähle den Typ aus:</p>
                <div class="buttons">
                    <button @click="setClientType('player')" :class="{ selected: clientType === 'player' }">Spieler</button>
                    <button @click="setClientType('viewer')" :class="{ selected: clientType === 'viewer' }">Viewer</button>
                </div>
            </div>
            <div class="enterName" v-if="clientType === 'player'">
                    <input type="text" maxlength="16" v-model="playerName" placeholder="Gib deinen Namen ein">
                    <button @click="joinPlayer()">Starten</button>
            </div>
            <div class="enterName" v-if="clientType === 'viewer'">
                    <p>Starten</p>
                    <button @click="joinViewer()">Starten</button>
            </div>
            <div id="resetButton">
                <button @click="reset()">Reset Server</button>
            </div>
        </div>
    </div>
</template>

<script>
import { socket } from '../client'

export default {
    data() {
        return {
            playerName: '',
            clientType: 'player',
            logo: "src/assets/logo/Logo.png"
        }
    },
    methods: {
        joinPlayer() {
            socket.emit("joinPlayer", this.playerName);
        },
        joinViewer() {
            socket.emit("joinViewer");
        },
        setClientType(type) {
                this.clientType = type;
        },
        reset(){
            socket.emit("resetGame");
        }
    },
}
</script>

<style >

</style> 