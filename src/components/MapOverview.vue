<template>
<div class="content">
    <h1>Map</h1>
    <div id="currentIsland">
        <p>Current Island: {{ currentIsland }}</p>
    </div>
    <img :src="imageMap"/>
</div>
</template>

<script>
import {
    socket
} from '../client'

export default {
    data() {
        return {
            currentIsland: null,
            imageMap: "/src/assets/img/player/mapoverview.jpg"
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
    }
}
</script>

<style scoped>
#currentIsland {
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
}

img {
    width: 80%;
    height: auto;
}
</style>
