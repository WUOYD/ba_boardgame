<template>
    <div class="content sequencer">
        <h1>Map</h1>
        <p>{{ currentIsland }}</p>
        <button @click="changeRegion(1)">Frosgar</button>
        <button @click="changeRegion(2)">Aridora</button>
        <button @click="changeRegion(3)">Nythoria</button>
        <button @click="changeRegion(4)">Talvar</button>
        <button @click="changeRegion(5)">Athos</button>
        <button @click="changeRegion(6)">Drakan</button>
        <button @click="changeRegion(7)">Middle</button>
    </div>
</template>

<style scoped>
.content.sequencer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    gap: 0;
    padding: 20px 7vw 20px 7vw;
}

h1 {
    font-size: 16px;
}

</style> 

<script>
import { socket } from '../client'

export default {
    data() {
        return {
            currentIsland: null
        }
    },
    mounted() {
        socket.on("currentRegion", activePlayer => {
            this.currentIsland = activePlayer.region;
        })
        socket.on("updatePlayer", activePlayer => {
            this.currentIsland = activePlayer.region;
        })
        socket.emit("getActivePlayer");
    },
    methods: {
        changeRegion(region){
            socket.emit("changeRegion", region);
        }
    }
}
</script>
