<template>
  <div class="content single">
    <h1>Fight</h1>
    <button @click="startFight()">Start fight</button>
    <p>{{ text }}</p>
    <input v-model="diceRoll" placeholder="dice roll" />
    <button @click="enterRoll()">enter roll</button>
  </div>
</template>

<script>
import { socket } from '../client'

export default {
  data() {
    return {
      text: "Fight text",
      diceRoll: 0,
      test: 0,
    }
  },
  mounted() {
    socket.on("startFight", info => {
      this.text = info
      console.log("got server feedback")
    }),
    socket.on("updateFight", track => {
      this.text = track
      console.log("got server feedback")
    }),
    socket.on("activeMonster", activeMonster => {
      this.text = activeMonster
    })
  },
  methods: {
    startFight() {
      socket.emit("startFight")
    },
    enterRoll() {
      var diceRoll = this.diceRoll
      socket.emit("diceRoll", diceRoll);
    },
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

