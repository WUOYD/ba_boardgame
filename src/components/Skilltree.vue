<template>
  <div class="content single">
    <h1>Skilltree</h1>
  </div>
</template>

<script>
import { socket } from '../client'

export default {
  data() {
    return {
    }
  },
  mounted() {
    socket.on("updateComponentT1", track => {
    })
  },
  methods: {
    updateClick(element, index) {
      element.target.classList.toggle("selected");
      socket.emit("updateT1", index);
    }
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

