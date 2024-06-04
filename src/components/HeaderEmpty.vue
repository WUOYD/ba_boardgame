<template>
<div id="header">
    <div class="menu-wrapper">
        <div class="logo">
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
