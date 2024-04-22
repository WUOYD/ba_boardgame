<script setup>
import Titlescreen from './components/Titlescreen.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Actions from './components/Actions.vue'
import Character from './components/Character.vue'
import Cutscenes from './components/Cutscenes.vue'
import Fight from './components/Fight.vue'
import Map from './components/Map.vue'
import MapOverview from './components/MapOverview.vue'
import Options from './components/Options.vue'
import Quest from './components/Quest.vue'
import Investigation from './components/Investigation.vue'
import Upgrades from './components/Upgrades.vue'
</script>

<template>
<Titlescreen v-if="title" />
<component :is="Header"></component>
<component :is="comp"></component>
<Footer />
</template>

<script>
import { socket } from './client.js'
export default {
  components: {
    Map,
    Character,
    Actions,
    Quest,
    Cutscenes,
    Fight,
    Options,
    Investigation,
    Upgrades,
    MapOverview
  },
  created() {
    socket.connect();
  },
  data() {
    return {
      comp: "",
      title: true
    }
  },
  mounted() {
    socket.on('updateClientView', comp => {
      switch (comp) {
        case 1:
          this.updateView("Character")
          break;
        case 2:
          this.updateView("Actions")
          break;
        case 3:
          this.updateView("Map")
          break;
        case 4:
          this.updateView("Fight")
          break;
        case 5:
          this.updateView("Quest")
          break;
        case 6:
          this.updateView("Investigation")
          break;
        case 7:
          this.updateView("Upgrades")
          break;
        case 8:
          this.updateView("MapOverview")
          break;
      }
    })
    socket.on('join', (join) => {
      this.title = false;
      this.comp = "Actions"
    })
  },
  methods: {
    updateView(comp) {
      this.comp = comp
    }
  },
  beforeUnmount() {
    socket.disconnect();
  }

}
</script>
