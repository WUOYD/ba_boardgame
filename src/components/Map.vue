<template>
<div class="content sequencer">
    <h1>Map</h1>
    <div id="currentIsland">
        <p>Current Island: {{ currentIsland }}</p>
    </div>
    <div id="islands">
        <div class="island" v-if="currentIsland == 'Nythoria' || currentIsland == 'Aridora' || currentIsland == 'Elysora'" @click="changeRegion(1)">
            <img :src="imageFrosgar" width="250" height="250"/>
            <p>Frosgar</p>
        </div>
        <div class="island" v-if="currentIsland == 'Frosgar' || currentIsland == 'Athos' || currentIsland == 'Elysora'" @click="changeRegion(2)">
            <img :src="imageAridora" width="250" height="250"/>
            <p>Aridora</p>
        </div>
        <div class="island" v-if="currentIsland == 'Aridora' || currentIsland == 'Drakan' || currentIsland == 'Elysora'" @click="changeRegion(3)">
            <img :src="imageAthos" width="250" height="250"/>
            <p>Athos</p>
        </div>
        <div class="island" v-if="currentIsland == 'Athos' || currentIsland == 'Talvar' || currentIsland == 'Elysora'" @click="changeRegion(4)">
            <img :src="imageDrakan" width="250" height="250"/>
            <p>Drakan</p>
        </div>
        <div class="island" v-if="currentIsland == 'Drakan' || currentIsland == 'Nythoria' || currentIsland == 'Elysora'" @click="changeRegion(5)">
            <img :src="imageTalvar" width="250" height="250"/>
            <p>Talvar</p>
        </div>
        <div class="island" v-if="currentIsland == 'Talvar' || currentIsland == 'Frosgar' || currentIsland == 'Elysora'" @click="changeRegion(6)">
            <img :src="imageNythoria" width="250" height="250"/>
            <p>Nythoria</p>
        </div>
        <div class="island" v-if="currentIsland !== 'Elysora'" @click="changeRegion(7)">
            <img :src="imageElysora" width="250" height="250"/>
            <p>Elysora</p>
        </div>
    </div>
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

#currentIsland{
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
}

#islands{
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.island{
    width: calc(33.33% - 10px);
    margin: 5px;
}

.island p{
    font-size: 20px;
}
</style> 

<script>
import {
    socket
} from '../client'

export default {
    data() {
        return {
            currentIsland: null,
            imageFrosgar: "src/assets/img/islands/frosgar.webp",
            imageAridora: "src/assets/img/islands/aridora.webp",
            imageAthos: "src/assets/img/islands/athos.webp",
            imageDrakan: "src/assets/img/islands/drakan.webp",
            imageTalvar: "src/assets/img/islands/talvar.webp",
            imageNythoria: "src/assets/img/islands/nythoria.webp",
            imageElysora: "src/assets/img/islands/elysora.webp",

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
        changeRegion(region) {
            socket.emit("changeRegion", region);
            socket.emit("updateView", 2);
        }
    }
}
</script>
