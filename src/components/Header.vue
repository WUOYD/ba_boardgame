<template>
<div id="header">
    <div class="menu-wrapper">
        <div class="menu-item" id="return" @click="updateView(2)">
            <img :src="returnIcon">
        </div>
        <div class="menu-item" id="logo">
            <img :src="logo">
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
            logo: "src/assets/logo/Logo.png",
            returnIcon: "/src/assets/icons/return.png",
        }
    },
    methods: {
        updateView(comp) {
            socket.emit("updateView", comp);
            socket.emit("getActivePlayer");
        }
    }
}
</script>

<style>

</style>
