//Moves, "Name", Damage, Block, Heal, DoT, Reflect, Damage next Round
let monsterTableBronze = [
    ["Goblin Jäger", "Bronze", 1, 6, 2, "src/assets/img/monster/goblin_jaeger.webp" ,[["Steinwurf", 1, 0, 0, 0, 0, 0], ["Speerwurf", 2, 0, 0, 0, 0, 0], ["Flinkheit", 0, 5, 0, 0, 0, 0], ["Meditation", 0, 0, 0, 0, 0, 1], ["Vergifteter Dolch", 1, 0, 0, 1, 0, 0], ["Kritischer Treffer", 3, 0, 0, 0, 0, 0]]], 
    ["Manfred", "Bronze", 1, 8, 2, "src/assets/img/monster/manfred.webp", [["Dornen", 1, 0, 0, 0, 0, 0], ["Blätterpanzer", 0, 1, 0, 0, 0, 0], ["Wachstum", 0, 0, 2, 0, 0, 0], ["Dornenpanzer", 0, 0, 0, 0, 10, 0], ["Entend", 4, 0, 0, 0, 4, 0], ["Stolpern", 0, 0, 1, 0, 0, 0]]],
    ["Feuerkobold", "Bronze", 1, 4, 2, "src/assets/img/monster/glubber.webp", [["Klauenangriff", 1, 0, 0, 0, 0, 0], ["Feueratem", 2, 0, 0, 0, 0, 0], ["Jinx", 0, 1, 0, 0, 1, 0], ["Flammenwand", 2, 0, 0, 0, 0, 1], ["Explosion", 4, 0, -4, 0, 0, 0], ["Koboldbiss", 3, 0, 0, 0, 0, 0]]],
    ["Eisgolem", "Bronze", 1, 8, 2, "src/assets/img/monster/eisgolem.webp", [["Eisige Briese", 1, 0, 0, 0, 0, 0], ["Eissplitter", 1, 0, 0, 0, 0, 0], ["Frostrüstung", 0, 0, 2, 0, 0, 0], ["Frost Nova", 2, 0, 0, 0, 0, 0], ["Blizzard", 2, 0, 1, 0, 0, 0], ["Erfrierung", 2, 0, 0, 0, 0, 0]]], 
    ["Betrunkener Goblin", "Bronze", 1, 14, 2, "src/assets/img/monster/betrunkener_goblin.webp", [["Kratzer", 1, 0, 0, 0, 0, 0, 0], ["Biss", 1, 0, 0, 0, 0, 0], ["Kauern", 0, 1, 0, 0, 0, 0], ["Counter", 1, 1, 0, 0, 0, 0], ["Käulenhieb", 3, 0, 0, 0, 0, 0], ["Kopfnuss", 2, 0, 0, 0, 0, 0]]],
]
  
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
    monsterTableGold
  };