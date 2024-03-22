<template>
  <div class="content single">
     <h1>Character</h1>
     <div class="character-grid">
        <div class="cell" id="div11"><p>Name</p></div>
        <div class="cell" id="div12"><p>Health</p></div>
        <div class="cell" id="div13"> </div>
        <div class="cell" id="div14"><p>Angriff</p></div>
        <div class="cell" id="div15"></div>
        <div class="cell" id="div16"><p>Verteidigung</p></div>
        <div class="cell" id="div17"></div>
        <div class="cell" id="div18"><p>Blocks</p></div>
        <div class="cell" id="div19"> </div>
      </div>
      <h2>Experience</h2>
      <div class="experience-grid">
        <div class="cell" id="div21"> </div>
        <div class="cell" id="div22"> </div>
        <div class="cell" id="div23"> </div>
        <div class="cell" id="div24"> </div>
        <div class="cell" id="div25"> </div>
        <div class="cell" id="div26"> </div>
        <div class="cell" id="div27"> </div>
        <div class="cell" id="div28"> </div>
        <div class="cell" id="div29"> </div>
        <div class="cell" id="div30"> </div>
      </div>
  </div>
</template>

<script>
import { socket } from '../client'

export default {
  data() {
    return {
      items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
    ]
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

<style scoped>
  .character-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 50%;
    height: 50%;
    border: solid 1px white;
  }

  .cell{
    border: solid 1px white;
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .experience-grid{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 50%;
    height: 10%;
    border: solid 1px white;
  }

  p {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 0;
  }

  #div11 { grid-area: 1 / 1 / 2 / 3; }
  #div12 { grid-area: 2 / 1 / 3 / 2; }
  #div13 { grid-area: 2 / 2 / 3 / 3; }
  #div14 { grid-area: 3 / 1 / 4 / 2; }
  #div15 { grid-area: 3 / 2 / 4 / 3; }
  #div16 { grid-area: 4 / 1 / 5 / 2; }
  #div17 { grid-area: 4 / 2 / 5 / 3; }
  #div18 { grid-area: 5 / 1 / 6 / 2; }
  #div19 { grid-area: 5 / 2 / 6 / 3; }

  #div21 { grid-area: 1 / 1 / 2 / 2; }
  #div22 { grid-area: 1 / 2 / 2 / 3; }
  #div23 { grid-area: 1 / 3 / 2 / 4; }
  #div24 { grid-area: 1 / 4 / 2 / 5; }
  #div25 { grid-area: 1 / 5 / 2 / 6; }
  #div26 { grid-area: 1 / 6 / 2 / 7; }
  #div27 { grid-area: 1 / 7 / 2 / 8; }
  #div28 { grid-area: 1 / 8 / 2 / 9; }
  #div29 { grid-area: 1 / 9 / 2 / 10; }
  #div30 { grid-area: 1 / 10 / 2 / 11; }


</style>


