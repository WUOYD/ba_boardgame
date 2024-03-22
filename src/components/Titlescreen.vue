<template>
    <div class="content">
        <div class="intro">
            <div class="text-wrapper">
                <h1>be part of the experience</h1>
            </div>
            <button class="text icon play" @click="join()">join</button>
        </div>
    </div>
</template>

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
    background: var(--color-main);
    padding: 15vh 5vw 10vh 5vh;
    box-sizing: border-box;
}

.text-wrapper {
    padding: 0 15vw;
    width: 100%;
    box-sizing: border-box;
}

.text-wrapper h1 {
    margin-bottom: 25px;
}

.text-wrapper p {
    margin-bottom: 50px;
}

</style> 

<script>
import { socket } from '../client'

export default {
    methods: {
        join() {
            socket.emit("join", "join");
        },

    },
    data() {
        return {
        }
  }
}
</script>