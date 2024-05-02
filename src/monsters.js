const monsterTableBronze = [
  {
      name: "Goblin Jäger",
      type: "Bronze",
      health: 6,
      blocks: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
      victoryPoints: 1,
      gold: 1,
      image: "src/assets/img/monster/goblin_jaeger.webp",
      moves: [
          { name: "Steinwurf", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Speerwurf", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Flinkheit", text: "5 Block", damage: 0, block: 5, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Meditation", text: "1 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
          { name: "Vergifteter Dolch", text: "1 Gift Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
          { name: "Kritischer Treffer", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
      ]
  },
  {
      name: "Manfred",
      type: "Bronze",
      health: 8,
      blocks: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
      victoryPoints: 1,
      gold: 1,
      image: "src/assets/img/monster/manfred.webp",
      moves: [
          { name: "Dornen", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Blätterpanzer", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Wachstum", text: "2 Heilen", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Dornenpanzer", text: "4 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 4, damageNextRound: 0 },
          { name: "Entend", text: "4 Schaden, 3 Reflektieren", damage: 4, block: 0, heal: 0, dot: 0, reflect: 3, damageNextRound: 0 },
          { name: "Stolpern", text: "1 Heilen", damage: 0, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 }
      ]
  },
  {
      name: "Feuerkobold",
      type: "Bronze",
      health: 4,
      blocks: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
      victoryPoints: 1,
      gold: 1,
      image: "src/assets/img/monster/glubber.webp",
      moves: [
          { name: "Klauenangriff", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Feueratem", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Jinx", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
          { name: "Flammenwand", text: "2 Schaden, 1 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
          { name: "Explosion", text: "4 Schaden, 4 Selbstschaden", damage: 4, block: 0, heal: -4, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Koboldbiss", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
      ]
  },
  {
      name: "Eisgolem",
      type: "Bronze",
      health: 8,
      blocks: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
      victoryPoints: 1,
      gold: 1,
      image: "src/assets/img/monster/eisgolem.webp",
      moves: [
          { name: "Eisige Briese", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Eissplitter", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Frostrüstung", text: "2 Heilen", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Frost Nova", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Blizzard", text: "2 Schaden, 1 Heilen", damage: 2, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Erfrierung", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
      ]
  },
  {
      name: "Betrunkener Goblin",
      type: "Bronze",
      health: 8,
      blocks: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
      victoryPoints: 1,
      gold: 1,
      image: "src/assets/img/monster/betrunkener_goblin.webp",
      moves: [
          { name: "Kratzer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Biss", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Kauern", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Counter", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Käulenhieb", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
          { name: "Kopfnuss", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
      ]
  }
];



  
let monsterTableSilver = [
  
];
  
let monsterTableGold = [
  
];

let monsterTableQuests = [
  "monsterBjörn",
  "Freya",
  "Dieb",
  "Grimgar",
  "BruderHilda"
];


module.exports = {
    monsterTableBronze,
    monsterTableSilver,
    monsterTableGold,
    monsterTableQuests
  };