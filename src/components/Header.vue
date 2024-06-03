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

<style scoped>
.menu-wrapper {
    display: flex;
    place-items: center;
    align-items: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
}

p {
    font-size: 16px;
}

#return{
    box-sizing: border-box;
    padding: 4%;
    justify-content: flex-start;
}

.menu-item {
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 33.3333%;
}

.menu-item img {
    width: 30%;
    height: auto;
}
</style>

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
#return img{
 rotate: 180deg;
}
</style>
