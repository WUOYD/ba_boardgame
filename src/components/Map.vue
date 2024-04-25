<template>
<div class="content sequencer">
    <h1>Map</h1>
    <div id="currentIsland">
        <p>Current Island: {{ currentIsland }}</p>
    </div>
    <div id="islands">
        <div class="island" v-if="currentIsland == 'Nythoria' || currentIsland == 'Aridora' || currentIsland == 'Elysora'" @click="acceptChoice(0)">
            <img :src="islands[0][2]" width="250" height="250" />
            <p>Frosgar</p>
        </div>
        <div class="island" v-if="currentIsland == 'Frosgar' || currentIsland == 'Athos' || currentIsland == 'Elysora'" @click="acceptChoice(1)">
            <img :src="islands[1][2]" width="250" height="250" />
            <p>Aridora</p>
        </div>
        <div class="island" v-if="currentIsland == 'Aridora' || currentIsland == 'Drakan' || currentIsland == 'Elysora'" @click="acceptChoice(2)">
            <img :src="islands[2][2]" width="250" height="250" />
            <p>Athos</p>
        </div>
        <div class="island" v-if="currentIsland == 'Athos' || currentIsland == 'Talvar' || currentIsland == 'Elysora'" @click="acceptChoice(3)">
            <img :src="islands[3][2]" width="250" height="250" />
            <p>Drakan</p>
        </div>
        <div class="island" v-if="currentIsland == 'Drakan' || currentIsland == 'Nythoria' || currentIsland == 'Elysora'" @click="acceptChoice(4)">
            <img :src="islands[4][2]" width="250" height="250" />
            <p>Talvar</p>
        </div>
        <div class="island" v-if="currentIsland == 'Talvar' || currentIsland == 'Frosgar' || currentIsland == 'Elysora'" @click="acceptChoice(5)">
            <img :src="islands[5][2]" width="250" height="250" />
            <p>Nythoria</p>
        </div>
        <div class="island" v-if="currentIsland !== 'Elysora'" @click="acceptChoice(6)">
            <img :src="islands[6][2]" width="250" height="250" />
            <p>Elysora</p>
        </div>
    </div>
    <div id="changeRegionPopUp" class="hidden">
        <img :src="travelDestinationPicture" />
        <div class="overlay-content">
            <p>Möchtest du wirklich auf {{ travelDestinationText }} reisen?</p>
            <div id="buttons">
                <button @click="acceptedChoice()">Annehmen</button>
                <button @click="deniedChoice()">Ablehnen</button>
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
            currentIsland: null,
            travelDestination: null,
            travelDestinationText: null,
            travelDestinationPicture: null,
            islands: [
                [1, "Frosgar", "src/assets/img/islands/frosgar.webp"],
                [2, "Aridora", "src/assets/img/islands/aridora.webp"],
                [3, "Athos", "src/assets/img/islands/athos.webp"],
                [4, "Drakan", "src/assets/img/islands/drakan.webp"],
                [5, "Talvar", "src/assets/img/islands/talvar.webp"],
                [6, "Nythoria", "src/assets/img/islands/nythoria.webp"],
                [7, "Elysora", "src/assets/img/islands/elysora.webp"],
            ]
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
        toggleVisibility(elementId) {
            var element = document.getElementById(elementId);
            if (element.classList.contains('visible')) {
                element.classList.remove('visible');
                element.classList.add('hidden');
            } else {
                element.classList.remove('hidden');
                element.classList.add('visible');
            }
        },
        acceptChoice(island) {
            this.toggleVisibility("changeRegionPopUp");
            this.travelDestination = this.islands[island][0];
            this.travelDestinationText = this.islands[island][1];
            this.travelDestinationPicture = this.islands[island][2];
        },
        acceptedChoice() {
            this.changeRegion(this.travelDestination);
            this.toggleVisibility("changeRegionPopUp");
        },
        deniedChoice() {
            this.toggleVisibility("changeRegionPopUp");
        },
        changeRegion(region) {
            if (region == 7) {
                socket.emit("changeRegion", region);
                socket.emit("updateView", 7);
            } else {
                socket.emit("changeRegion", region);
                socket.emit("updateView", 2);
            }
        }
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

#islands {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.island {
    width: calc(33.33% - 10px);
    margin: 5px;
}

.island p {
    font-size: 20px;
}

#changeRegionPopUp {
    position: fixed !important;
    top: 12.5%;
    left: 12.5%;
    width: 75%;
    height: 75%;
    z-index: 999;
    overflow: hidden;
    padding: 20px;
    border-radius: 25px;
}

.overlay-content {
    position: absolute;
    top: 40%;
    left: 35%;
    width: 30%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
}

#changeRegionPopUp img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
}

.buttons{
    display: flex;
    width: 100%;
}

.buttons button {
    width: 40%;
    background-color: transparent;
    border-radius: 10px;
    border-color: white;
    cursor: pointer;
    font-size: 16px;
    color: white;
    border-width: 1px;
}
</style>
