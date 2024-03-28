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
    }
  },
  mounted() {
    socket.on("startFight", info => {
      this.text = info
    }),
    socket.on("updateFight", message => {
      this.text = this.text + "\n" + message
    }),
    socket.on("activeMonster", activeMonster => {
      this.text = this.text + "\n" + JSON.stringify(activeMonster);
    })
  },
  methods: {
    startFight() {
      socket.emit("startFight");
    },
    enterRoll() {
      var diceRoll = this.diceRoll;
      socket.emit("diceRoll", diceRoll);
    },
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

