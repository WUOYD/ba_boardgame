<template>
  <div class="content single">
    <h1>Fight</h1>
    <button @click="startFight()">Start fight</button>
    <p>{{ text }}</p>
    <div class="inputPlayer">
      <input v-model="diceRollPlayer" placeholder="dice roll player" />
      <button @click="enterRollPlayer()">enter roll</button>
    </div>
    <div class="inputMonster">
      <input v-model="diceRollMonster" placeholder="dice roll monster" />
      <button @click="enterRollMonster()">enter roll</button>
    </div>

  </div>
</template>

<script>
import { socket } from '../client'

export default {
  data() {
    return {
      text: "Fight text",
      diceRollPlayer: 0,
      diceRollMonster: 0
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
    enterRollPlayer() {
      socket.emit("diceRollPlayer", this.diceRollPlayer);
    },
    enterRollMonster() {
      socket.emit("diceRollMonster", this.diceRollMonster);
    },
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

