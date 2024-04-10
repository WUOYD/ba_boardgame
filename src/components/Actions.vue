<template>
  <div class="content single">
      <h1>Actions</h1>
      <button @click="generateEncounter()">Generate Encounter</button>
      <p>{{ text }}</p>
  </div>
</template>

<script>
import { socket } from '../client'

export default {
  data() {
    return {
      text: "Encounter",
    }
  },
  mounted() {
    socket.on("updateEncounter", message => {
      this.text = this.text + "\n" + message
    })
  },
  methods: {
    generateEncounter() {
      socket.emit("generateEncounter");
    }
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

