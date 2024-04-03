<template>
  <div class="content single">
    <h1>Fight</h1>
    <p>{{ text }}</p>
    <button @click="startFight">Start fight</button>
    <div class="diceCombinations">
        <div v-for="(option, index) in options" :key="index" class="combinationButtons">
          <button :class="{ selected: selectedOption === option }" @click="selectOption(option)">
            <div class="buttonCominationImages">
              <img :src="combinationImages[index][0]" width="48" height="48"/>
              <img :src="combinationImages[index][1]" width="48" height="48"/>
            </div>
            <div class="buttonCombinationName">
              {{ combinationName[index] }}
            </div>
            <div class="buttonCombinationMove">
              {{ combinationMove[index] }}
            </div>
          </button>
        </div>
    </div>
    <button @click="readSelectedOption">Ausgewählte Option lesen</button>
    <p v-if="selectedOption">Ausgewählte Option: {{ selectedOption }}</p>
    <p v-else>Noch keine Option ausgewählt</p>
  </div>
</template>

<script>
import { socket } from '../client'

export default {
  data() {
    return {
      text: "start fight by pressing start fight button",
      diceRollPlayer: 0,
      diceRollMonster: 0,
      options: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"],
      combinationName: ["Kratzer", "Biss", "Kauern", "Counter", "Keulenhieb", "Kopfnuss"],
      combinationMove: ["1 Schaden", "1 Schaden", "1 Blocken", "1 Schaden, 1 Block", "3 Schaden", "2 Schaden"],
      combinationImages: [
        ["src/assets/icons/claw.png", "src/assets/icons/claw.png"],
        ["src/assets/icons/claw.png", "src/assets/icons/magic.png"],
        ["src/assets/icons/magic.png", "src/assets/icons/magic.png"],
        ["src/assets/icons/magic.png", "src/assets/icons/skull.png"],
        ["src/assets/icons/skull.png", "src/assets/icons/skull.png"],
        ["src/assets/icons/skull.png", "src/assets/icons/claw.png"],
      ],
      selectedOption: null
    }
  },
  mounted() {
    socket.on("startFight", message => {
      this.text = message
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
    enterRollPlayer(value) {
      socket.emit("diceRollPlayer", value);
    },
    enterRollMonster() {
      socket.emit("diceRollMonster", this.diceRollMonster);
    },
    selectOption(option) {
      this.selectedOption = option;
    },
    readSelectedOption() {
        this.selectedOption;
    }
  },
  beforeUnmount() {
    this.mounted = false;
  }
}
</script>

<style>
  .diceCombinations {
    display: flex;
    flex-wrap: wrap;
  }

  .combinationButtons {
    flex: 0 0 50%; 
    box-sizing: border-box; 
    padding: 5px; 
  }

  .combinationButtons button {
    width: 100%; 
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .buttonCominationImages, .buttonCombinationName, .buttonCombinationMove {
    display: flex; 
    width: 33%;
    align-items: center;
    justify-content: center;
  }

  img {
    border-radius: 5px;
    margin: 5px; 
  }

</style>
