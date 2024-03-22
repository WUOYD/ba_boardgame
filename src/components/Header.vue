<template>
    <div id="header">
      <img src="../assets/logo/mashroom-logo-sm.svg" alt="logo">
      <div class="menu-wrapper">
        <div class="menu-item" id="map" @click="updateView(0)"><p>Map</p></div>
        <div class="menu-item" id="character" @click="updateView(1)"><p>Character</p></div>
        <div class="menu-item" id="actions" @click="updateView(2)"><p>Actions</p></div>
        <div class="menu-item" id="skilltree" @click="updateView(3)"><p>Skilltree</p></div>
        <div class="menu-item" id="quests" @click="updateView(4)"><p>Quests</p></div>
      </div>
    </div>
</template>

<style scoped>
  .menu-wrapper{
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
  .menu-item{
      margin-left: 2%;
      margin-right: 2%;

  }

</style>

<script>
import { socket } from '../client'

export default {
  methods: {
    updateView(comp) {
            socket.emit("updateView", comp);
            socket.emit("updateComp", comp);
        }
  }
}
</script>


