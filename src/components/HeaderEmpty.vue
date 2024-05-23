<template>
<div id="header">
    <div class="menu-wrapper">
        <div class="logo">
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

.menu-item {
    margin-left: 2%;
    margin-right: 2%;
    cursor: pointer;
}

p {
    font-size: 16px;
}

.logo{
  display: flex;
  justify-content: center;
  width: 100%;
}

.logo img {
  width: 10%;
}
</style>

<script>
import {
    socket
} from '../client'

export default {
    data() {
        return {
            logo: "src/assets/logo/Logo.png"
        }
    },
    methods: {
        updateView(comp) {
            socket.emit("updateView", comp);
        }
    }
}
</script>
