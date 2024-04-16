<template>
<div class="content single">
    <h1>Actions</h1>
    <div id="playerActions">
        <div v-for="cell in cells" :key="cell.id" :class="{ 'cell': true, 'colored': cell.colored }"></div>
    </div>
    <div id="actions">
        <div class="action" @click="investigate()">
            <img :src="imageInvestigate" width="250" height="250"/>
            <p>Untersuchen </p>
        </div>
        <div class="action" @click="move()">
            <img :src="imageMove" width="250" height="250" />
            <p>Reisen</p>
        </div>
        <div class="action" @click="changeIsland()">
            <img :src="imageChangeIsland" width="250" height="250" />
            <p>Insel wechseln</p>
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
            imageChangeIsland: "/src/assets/icons/changeIsland.png",
            imageInvestigate: "/src/assets/icons/investigate.png",
            imageMove: "/src/assets/icons/move.png",
            playerActions: null,
            cells: [],
        }
    },
    mounted() {
        socket.on("updatePlayer", activePlayer => {
            this.generateCells(parseInt(activePlayer.actions))
        })
        socket.emit("getActivePlayer");
        
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
        investigate(){
            socket.emit("updateActions");
            socket.emit("updateView", 6);
        },
        move(){
            socket.emit("updateActions");
        },
        changeIsland(){
            socket.emit("updateActions");
            socket.emit("updateView", 3);
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
}

.action {
    width: 33.3333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.action p {
    font-size: 20px;
    color: #f7e4c2;
}

#playerActions {
    display: flex;
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
</style>
