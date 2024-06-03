<template>
    <div class="content">
        <div class="intro">
            <div id="resetButton">
                <button @click="reset()">Reset</button>
            </div>
            <div class="text-wrapper">
                <img :src="logo">
            </div>
            <div class="titleText" id="changeType">
                <p>Wähle den Typ aus:</p>
                <div class="buttons">
                    <button @click="setClientType('player')" :class="{ selected: clientType === 'player' }">Spieler</button>
                    <button @click="setClientType('viewer')" :class="{ selected: clientType === 'viewer' }">Viewer</button>
                </div>
            </div>
            <div v-if="clientType === 'player'">
                <div class="titleText" id="playerName">
                    <p>Gib deinen Namen ein:</p>
                    <input type="text" maxlength="16" v-model="playerName" placeholder="Gib deinen Namen ein">
                    <button @click="joinPlayer()">Starten</button>
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

<style scoped>
.content {
    /* display: none !important; */
    position: relative;
    height: 90%;
    width: 100%;
    z-index: 1;
}

/* ================== INTRO ====================== */

.intro {
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

#resetButton{
    margin-bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
}



</style> 