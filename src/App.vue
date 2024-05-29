<script setup>
import Titlescreen from './components/Titlescreen.vue'
import Header from './components/Header.vue'
import HeaderEmpty from './components/HeaderEmpty.vue'
import Actions from './components/Actions.vue'
import Character from './components/Character.vue'
import Viewer from './components/Viewer.vue'
import Fight from './components/Fight.vue'
import Map from './components/Map.vue'
import MapOverview from './components/MapOverview.vue'
import Options from './components/Options.vue'
import Quest from './components/Quest.vue'
import Investigation from './components/Investigation.vue'
import Intro from './components/Intro.vue'
import Upgrades from './components/Upgrades.vue'

</script>

<template>
<component :is="Header" v-if="comp == 'Map' || comp == 'Character' || comp == 'Quest' || comp == 'Options' || comp == 'Upgrades' || comp == 'MapOverview'"></component>
<component :is="HeaderEmpty" v-else></component>
<Titlescreen v-if="title" />
<component :is="comp"></component>
</template>

<script>
import { socket } from './client.js'
export default {
  components: {
    Intro,
    Map,
    Character,
    Actions,
    Quest,
    Viewer,
    Fight,
    Options,
    Investigation,
    Upgrades,
    MapOverview,
  },
  created() {
    socket.connect();
  },
  data() {
    return {
      comp: "",
      header: "",
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
          socket.emit("getPlayerStandings");
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
      this.comp = "Intro";
    })
    socket.on('joinViewerClient', () => {
      this.title = false;
      this.comp = "Viewer";
    })
    socket.on("startGame", () => {
      this.comp = "Actions";
      socket.emit("getActivePlayer");
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
