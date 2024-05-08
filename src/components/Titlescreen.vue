<template>
    <div class="content">
        <div class="intro">
            <div class="text-wrapper">
                <h1>Legenden von Synn</h1>
            </div>
            <div class="titleText" id="changeType">
                <p>Wähle den Typ aus:</p>
                <div class="buttons">
                    <button @click="setClientType('client')" :class="{ selected: clientType === 'client' }">Spieler</button>
                    <button @click="setClientType('viewer')" :class="{ selected: clientType === 'viewer' }">Viewer</button>
                </div>
            </div>
            <div v-if="clientType === 'client'">
                <div class="titleText" id="playerName">
                    <p>Gib deinen Namen ein:</p>
                    <input type="text" v-model="playerName" placeholder="Gib deinen Namen ein">
                    <button @click="join()">Starten</button>
                </div>
            </div>
            <div v-if="clientType === 'viewer'">
                <div class="titleText" id="playerName">
                    <p>Starten</p>
                    <button @click="joinViewer()">Starten</button>
                </div>
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
            clientType: '',
        }
    },
    methods: {
        join() {
            socket.emit("joinPlayer", this.playerName);
        },
        joinViewer() {
            socket.emit("joinViewer");
        },
        setClientType(type) {
                this.clientType = type;
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

.intro {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 15vh 5vw 10vh 5vh;
    box-sizing: border-box;
}

.text-wrapper {
    padding: 0 15vw;
    width: 100%;
    box-sizing: border-box;
}

.text-wrapper {
    margin-bottom: 25px;
}

p {
    margin-bottom: 20px;
    font-size: 16px;
}

#changeType{
    display: flex;
    flex-direction: column;
}

.titleText {
    margin-bottom: 50px;
}

.buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

button{
    margin-right: 2%;
    margin-left: 2%;
}

input {
    width: 100%;
    margin-bottom: 5%;
    text-align: center;
}

::placeholder {
    text-align: center; 
}

</style> 