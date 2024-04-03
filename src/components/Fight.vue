<template>
  <div class="content single">
    <h1>Fight</h1>
    <p>{{ text }}</p>
    <button @click="startFight">Start fight</button>
    <h2>Player</h2>
    <div class="diceCombinationsPlayer">
        <div v-for="(option, index) in optionsPlayer" :key="index" class="combinationButtons">
          <button :class="{ selected: selectedOption === option }" @click="selectOption(option)">
            <div class="buttonCominationImages">
              <img :src="combinationImages[index][0]" width="48" height="48"/>
              <img :src="combinationImages[index][1]" width="48" height="48"/>
            </div>
            <div class="buttonCombinationName">
              {{ combinationNamePlayer[index] }}
            </div>
            <div class="buttonCombinationDamage">
              <div>Schaden</div>
              <div>{{ combinationDamagePlayer[index] }}</div>
            </div>
            <div class="buttonCombinationBlock">
              <div>Block</div>
              <div>{{ combinationBlockPlayer[index] }}</div>
            </div>
          </button>
        </div>
    </div>
    <h2>Monster</h2>
    <div class="diceCombinationsMonster">
        <div v-for="(option, index) in optionsMonster" :key="index" class="combinationButtons">
          <button :class="{ selected: selectedOption === option }" @click="selectOption(option)">
            <div class="buttonCominationImages">
              <img :src="combinationImages[index][0]" width="48" height="48"/>
              <img :src="combinationImages[index][1]" width="48" height="48"/>
            </div>
            <div class="buttonCombinationName">
              {{ combinationNameMonster[index] }}
            </div>
            <div class="buttonCombinationDamage">
              <div>Schaden</div>
              <div>{{ combinationDamageMonster[index] }}</div>
            </div>
            <div class="buttonCombinationBlock">
              <div>Block</div>
              <div>{{ combinationBlockMonster[index] }}</div>
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
      optionsPlayer: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"],
      optionsMonster: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"],
      combinationNamePlayer: ["", "", "", "", "", ""],
      combinationDamagePlayer: ["", "", "", "", "", ""],
      combinationBlockPlayer: ["", "", "", "", "", ""],
      combinationNameMonster: ["", "", "", "", "", ""],
      combinationDamageMonster: ["", "", "", "", "", ""],
      combinationBlockMonster: ["", "", "", "", "", ""],
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
    socket.on("updateFight", message => {
      this.text = this.text + "\n" + message
    }),
    socket.on("activeMonster", activeMonster => {
      //this.text = this.text + "\n" + JSON.stringify(activeMonster)
      for (let i = 0; i < 6; i++){
        this.combinationNameMonster[i] = activeMonster.moves[i][0];
        this.combinationDamageMonster[i] = activeMonster.moves[i][1];
        this.combinationBlockMonster[i] = activeMonster.moves[i][2];
      }
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
  p {
    white-space: pre-line;
  }

  .diceCombinationsMonster, .diceCombinationsPlayer {
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

  .buttonCominationImages, .buttonCombinationName, .buttonCombinationDamage, .buttonCombinationBlock {
    display: flex; 
    align-items: center;
    justify-content: center;
  }

  .buttonCominationImages{
    width: 25%;
  }

  .buttonCombinationName{
    width: 35%;
  }

  .buttonCombinationDamage, .buttonCombinationBlock{
    width: 20%;
    display: flex;
    flex-direction: column;
  }

  

  img {
    border-radius: 5px;
    margin: 5px; 
  }

</style>
