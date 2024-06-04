<template>
<div class="content">
        <div class="text-wrapper">
            <img :src="logo">
        </div>
        <div class="text-wrapper" id="moveBossText">
            <p>Bewege die Boss Monster auf den Pfaden um eine Position weiter!</p>
        </div>
        <button v-if="this.host == true" @click="moveBossComplete()">Bestätigen</button>
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
        }
    },
    mounted() {
        socket.on('updatePlayer', activePlayer => {
            this.host = activePlayer.host
        })
        socket.emit("getActivePlayer");
    },
    methods: {
        moveBossComplete() {
            socket.emit("moveBossComplete");
        }
    },

}
</script>

<style scoped>

</style>
