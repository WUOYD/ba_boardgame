<template>
    <div class="content">
        <div class="intro">
            <div class="logo-wrapper">
                <img :src="logo">
            </div>
            <div id="startButton">
                <button @click="start()">Start</button>
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
            logo: "src/assets/logo/Logo.png"
        }
    },
    methods: {
        reset(){
            socket.emit("resetGame");
        },
        start(){
            socket.emit("start");
        }
    },
}
</script>

<style >

</style> 