// Express Setup
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

// Global Variables
let sockets = [];
let players = [];
let clientSocket;
let game;
let player;

//Moves, "Name", Damage, Block, Heal, DoT, Reflect, Damage next Round
let monsterTableBronze = [
  ["Goblin Jäger", "Bronze", 1, 6, 2, "src/assets/img/goblin_jaeger.webp" ,[["Steinwurf", 1, 0, 0, 0, 0, 0], ["Speerwurf", 2, 0, 0, 0, 0, 0], ["Flinkheit", 0, 5, 0, 0, 0, 0], ["Meditation", 0, 0, 0, 0, 0, 1], ["Vergifteter Dolch", 1, 0, 0, 1, 0, 0], ["Kritischer Treffer", 3, 0, 0, 0, 0, 0]]], 
  ["Manfred", "Bronze", 1, 8, 2, "src/assets/img/manfred.webp", [["Dornen", 1, 0, 0, 0, 0, 0], ["Blätterpanzer", 0, 1, 0, 0, 0, 0], ["Wachstum", 0, 0, 2, 0, 0, 0], ["Dornenpanzer", 0, 0, 0, 0, 10, 0], ["Entend", 4, 0, 0, 0, 4, 0], ["Stolpern", 0, 0, 1, 0, 0, 0]]],
  ["Feuerkobold", "Bronze", 1, 4, 2, "src/assets/img/glubber.webp", [["Klauenangriff", 1, 0, 0, 0, 0, 0], ["Feueratem", 2, 0, 0, 0, 0, 0], ["Jinx", 0, 1, 0, 0, 1, 0], ["Flammenwand", 2, 0, 0, 0, 0, 1], ["Explosion", 4, 0, -4, 0, 0, 0], ["Koboldbiss", 3, 0, 0, 0, 0, 0]]],
  ["Eisgolem", "Bronze", 1, 8, 2, "src/assets/img/eisgolem.webp", [["Eisige Briese", 1, 0, 0, 0, 0, 0], ["Eissplitter", 1, 0, 0, 0, 0, 0], ["Frostrüstung", 0, 0, 2, 0, 0, 0], ["Frost Nova", 2, 0, 0, 0, 0, 0], ["Blizzard", 2, 0, 1, 0, 0, 0], ["Erfrierung", 2, 0, 0, 0, 0, 0]]], 
  ["Betrunkener Goblin", "Bronze", 1, 14, 2, "src/assets/img/betrunkener_goblin.webp", [["Kratzer", 1, 0, 0, 0, 0, 0, 0], ["Biss", 1, 0, 0, 0, 0, 0], ["Kauern", 0, 1, 0, 0, 0, 0], ["Counter", 1, 1, 0, 0, 0, 0], ["Käulenhieb", 3, 0, 0, 0, 0, 0], ["Kopfnuss", 2, 0, 0, 0, 0, 0]]],
]

let monsterTableSilver = [

];

let monsterTableGold = [

];

let monstersBronze = [];
let monstersSilver = [];
let monstersGold = [];

//questType, questOfferer, questReceiver, regionQuest, regionDeliver, optionGood, optionBad, rewardGood[Ehre, Gold, life], rewardBad[Ehre, Gold, Life], questText,
let questTableBronze = [
  ["Deliever", "Jorn", "Seppo", "Frosgar", "Talvar", "Fische an den Hafen von Talvar bringen", "Die Fische essen", ["1", "2", "0"], ["-1", "0", "5"], "text blablabla"],
  ["Monster", "Dorfbewohner von Nebelfrost", "Dorfbewohner von Nebelfrost", "Frosgar", "Frosgar", "Hilf den Dorfbewohnern den Drachen zu töten", "Hilfe ablehnen", ["1", "4", "0"], ["0", "0", "0"], "text blablabla"],
  ["Return", "Gunnar", "Holzhändler", "Frosgar", "Athos", "Hole das Holz am Hafen von Athos und bringe es hierher", "Nimm das Geld und behalte es für dich.", ["1", "2", ""], ["-1", "", "5"], "text blablabla"],
  ]

let questTableSilver = [

];

let questTableGold = [

];

let questsBronze = [];
let questsSilver = [];
let questsGold = [];

// Classes
class Game {
  constructor(playerCount) {
    this.playerCount = playerCount;
    this.round = 1;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.actions = 10;
    this.health = 10;
    this.reputation = 0;
    this.gold = 20;
    this.monstersKilled = 0;
    this.questsSolved = 0;
    this.victoryPoints = 0;
    this.blocks = 0;
    this.dot = 0;
    this.reflect = 0;
    this.damageNextRound = 0;
    this.picture = "src/assets/img/player.webp";
    this.moves = [
      ["Leicheter Hieb", 1, 0, 0, 0, 0, 0],
      ["Gedeckter Angriff", 1, 1, 0, 0, 0, 0],
      ["Schildwall", 0, 3, 0, 0, 0, 0],
      ["Magischer Schild", 0, 3, 0, 0, 0, 0],
      ["Magisches Eis", 2, 1, 0, 0, 0, 0],
      ["Schwerer Hieb", 2, 0, 0, 0, 0, 0]
    ];
    this.clawLevel = 1;
    this.skullLevel = 1;
    this.magicLevel = 1;
    this.probability = {
      monsterProbability: 0.2,
      lootProbability: 0.1,
      questProbability: 0.2,
      activeQuestProbability: 0.0
    };
    this.quest = null;
    this.region = "Frosgar";
  }
}

class Monster {
  constructor(name, type, victoryPoints, health, rewardGold, picture, moves) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.victoryPoints = victoryPoints;
    this.rewardGold = rewardGold;
    this.blocks = 0;
    this.dot = 0;
    this.reflect = 0;
    this.damageNextRound = 0;
    this.picture = picture;
    this.moves = moves;
  }
}

class Fight {
  constructor(activeMonsterObject) {
    this.activeMonster = activeMonsterObject;
  }
}

class Quest {
  constructor(questType, questOfferer, questReceiver, regionQuest, regionDeliver, optionGood, optionBad, rewardGood, rewardBad, questText) {
    this.questType = questType;
    this.questOfferer = questOfferer;
    this.questReceiver = questReceiver;
    this.regionQuest = regionQuest;
    this.regionDeliver = regionDeliver;
    this.optionGood = optionGood;
    this.optionBad = optionBad;
    this.rewardGood = rewardGood;
    this.rewardBad = rewardBad;
    this.questText = questText;
    this.optionPicked = 0;
  }
}

// Socket.IO Setup
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Express Routes
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.use(express.static('public'));

// Listen on Port 3000
server.listen(3000, () => {
  console.log('listening on port :3000/');
});

// Connection Handling
io.on('connection', (socket) => {
  console.log('new connection: ' + socket.id);
  sockets.push(socket);
  clientSocket = socket;
  socket.emit("userCount", sockets.length);

  // Join
  socket.on('join', (join) => {
    socket.emit('join', join);
  });

  // Update View
  socket.on('updateView', (comp) => {
    socket.emit('updateClientView', comp);
  });

  // Fight Handling
  socket.on("startFight", function() {
    startFight();
  });

  socket.on("diceRollPlayer", (rollPlayer) => {
    diceRollPlayer(rollPlayer);
  });

  socket.on("diceRollMonster", (rollMonster) => {
    diceRollMonster(rollMonster);
  });

  // Get Active Player
  socket.on("getActivePlayer", function() {
    socket.emit("updatePlayer", players[0]);
  });

  // Upgrades
  socket.on("upgradeClaw", function() {
    updateSkills(1);
    socket.emit("updatePlayer", players[0]);
  });

  socket.on("upgradeMagic", function() {
    updateSkills(2);
    socket.emit("updatePlayer", players[0]);
  });

  socket.on("upgradeSkull", function() {
    updateSkills(3);
    socket.emit("updatePlayer", players[0]);
  });

  // Generate Encounter
  socket.on("generateEncounter", function() {
    encounter = investigate(players[0]);
    socket.emit("updateEncounter", encounter);
  });

  // Change Region
  socket.on("changeRegion", (region) => { 
    changeRegion(players[0], region);
    socket.emit("currentRegion", players[0]);
  });

   // Deny quest
  socket.on("denyQuest", function() { 
    players[0].quest = null;
  });

  //option good
  socket.on("optionQuestGood", function() { 
    players[0].quest.optionPicked = "Good";
  });
  //option bad
  socket.on("optionQuestBad", function() { 
    players[0].quest.optionPicked = "Bad";
  });

  // Disconnect Handling
  socket.on('disconnect', () => {
    console.log('connection disconnected: ' + socket.id);
    let i = sockets.indexOf(socket);
    sockets.splice(i, 1);
    socket.emit("userCount", sockets.length);
    socket.broadcast.emit("userCount", sockets.length);
  });
});

// Game Initialization
function initGame() {
  initMonsters();
  initQuests();
  game = new Game(1);
  player = new Player("Julian");
  players.push(player);
}

initGame();


function initMonsters(){
  for (let i = 0; i < monsterTableBronze.length; i++){
    monstersBronze[i] = new Monster(monsterTableBronze[i][0], monsterTableBronze[i][1], monsterTableBronze[i][2], monsterTableBronze[i][3], monsterTableBronze[i][4], monsterTableBronze[i][5], monsterTableBronze[i][6]);
  }
  for (let i = 0; i < monsterTableSilver.length; i++){
    monstersSilver[i] = new Monster(monsterTableSilver[i][0], monsterTableSilver[i][1], monsterTableSilver[i][2], monsterTableSilver[i][3], monsterTableSilver[i][4], monsterTableSilver[i][5], monsterTableBronze[i][6]);
  } 
  for (let i = 0; i < monsterTableGold.length; i++){
    monstersGold[i] = new Monster(monsterTableGold[i][0], monsterTableGold[i][1], monsterTableGold[i][2], monsterTableGold[i][3], monsterTableGold[i][4], monsterTableGold[i][5], monsterTableGold[i][6]);
  }  
}

function getRandomMonster(round){
  let monster
  let rndNumber
  switch (round) {
    case 1:
      rndNumber = randomNumber(0,monstersBronze.length-1);
      monster = monstersBronze[rndNumber];
      break;
    case 2:
      rndNumber = randomNumber(0,monstersSilver.length-1);
      monster = monstersSilver[rndNumber];
      break;
    case 3:
      rndNumber = randomNumber(0,monstersGold.length-1);
      monster = monstersGold[rndNumber];
      break;
  }
  return monster
}

function initQuests(){
  for (let i = 0; i < questTableBronze.length; i++){
    questsBronze[i] = new Quest(questTableBronze[i][0], questTableBronze[i][1], questTableBronze[i][2], questTableBronze[i][3], questTableBronze[i][4], questTableBronze[i][5], questTableBronze[i][6], questTableBronze[i][7], questTableBronze[i][8], questTableBronze[i][9]);
  }
  for (let i = 0; i < questTableSilver.length; i++){
    questsSilver[i] = new Quest(questTableSilver[i][0], questTableSilver[i][1], questTableSilver[i][2], questTableSilver[i][3], questTableSilver[i][4], questTableSilver[i][5], questTableBronze[i][6], questTableBronze[i][7], questTableBronze[i][8], questTableBronze[i][9]);
  } 
  for (let i = 0; i < questTableGold.length; i++){
    questsGold[i] = new Quest(questTableGold[i][0], questTableGold[i][1], questTableGold[i][2], questTableGold[i][3], questTableGold[i][4], questTableGold[i][5], questTableGold[i][6], questTableGold[i][7], questTableGold[i][8], questTableGold[i][9]);
  }  
}

function getRandomQuest(round){
  let quest
  let rndNumber
  switch (round) {
    case 1:
      rndNumber = randomNumber(0,questsBronze.length-1);
      quest = questsBronze[rndNumber];
      break;
    case 2:
      rndNumber = randomNumber(0,questsSilver.length-1);
      quest = questsSilver[rndNumber];
      break;
    case 3:
      rndNumber = randomNumber(0,questsGold.length-1);
      quest = questsGold[rndNumber];
      break;
  }
  return quest
}


//investigate
function investigate(activePlayer){
  let encounter = generateEncounter(activePlayer);
  if(encounter == "Nothing"){
    
  }
  else if(encounter == "Monster"){
    startFight(activePlayer);

  }
  else if(encounter == "Loot"){
    generateLoot(activePlayer);

  }
  else if(encounter == "Quest"){
    startQuest(activePlayer);

  }
  else if(encounter == "ActiveQuest"){
    manageQuest(activePlayer);
    
  }
  return encounter
}

function generateEncounter(activePlayer) {
  const random = Math.random();
  let monsterProbability = activePlayer.probability.monsterProbability
  let lootProbability = activePlayer.probability.lootProbability
  let questProbability = activePlayer.probability.questProbability
  let activeQuestProbability = activePlayer.probability.activeQuestProbability

  let encounters = [
    { type: "Nothing", probability: 1 - (monsterProbability + lootProbability + questProbability + activeQuestProbability) },
    { type: "Monster", probability: monsterProbability },
    { type: "Loot", probability: lootProbability },
    { type: "Quest", probability: questProbability },
    { type: "ActiveQuest", probability: activeQuestProbability },
  ];

  let cumulativeProbability = 0;
  for (const encounter of encounters) {
    cumulativeProbability += encounter.probability;
    encounter.cumulativeProbability = cumulativeProbability;
  }

  for (const encounter of encounters) {
    if (random < encounter.cumulativeProbability) {
      modifyProbability(activePlayer, encounter.type)
      return encounter.type;
    }
  }
}

function modifyProbability(activePlayer, choice) {
  let amountMonster = 0.1;
  let amountLoot = 0.05;
  let amountQuest = 0.1;
  let amountActiveQuest = 0.1;

  if (choice == "Nothing"){
    activePlayer.probability[0] += amountMonster;
    activePlayer.probability[1] += amountLoot;
    activePlayer.probability[2] += amountQuest;
    if (activePlayer.probability[3] > 0) {
      activePlayer.probability[3] += amountActiveQuest;
    }
    else{
      activePlayer.probability[2] += amountQuest;
    }
  }
  else if (choice == "Monster") {
    activePlayer.probability[0] = 0.2;
    activePlayer.probability[1] += amountLoot;
    if (activePlayer.probability[3] > 0) {
      activePlayer.probability[3] += amountActiveQuest;
    }
    else{
      activePlayer.probability[2] += amountQuest;
    }
  } 
  else if (choice == "Loot") {
    activePlayer.probability[0] += amountMonster;
    activePlayer.probability[1] = 0.1;
    if (activePlayer.probability[3] > 0) {
      activePlayer.probability[3] += amountActiveQuest;
    }
    else{
      activePlayer.probability[2] += amountQuest;
    }
  } 
  else if (choice == "Quest") {
    activePlayer.probability[0] += amountMonster;
    activePlayer.probability[1] += amountLoot;
    activePlayer.probability[2] = 0;
    activePlayer.probability[3] = 0.2;
  } 
  else if (choice == "ActiveQuest") {
    activePlayer.probability[0] += amountMonster;
    activePlayer.probability[1] += amountLoot;
    activePlayer.probability[2] = 0.2;
    activePlayer.probability[3] = 0;
  } else {}
}

//start quest
function startQuest(activePlayer){
  activePlayer.quest = getRandomQuest(game.round);
  clientSocket.emit("updateQuest", ("Quest is:", activePlayer.quest));
}

//manage Quest
function manageQuest(activePlayer){
  return
}

//start fight
function startFight(){
  let activeMonster = getRandomMonster(game.round);
  let activePlayer = players[0];
  initFightMonster(activePlayer, activeMonster);
  clientSocket.emit("updateMonster", activeMonster);
  return activeMonster;
}

//fight monster
function initFightMonster(activePlayer, activeMonster){
  activePlayer.fight = new Fight(activeMonster)
  clientSocket.emit("updateFight", "Please roll player and monster");
}

//Fight rolls
function diceRollPlayer(diceRollPlayer){
  let winner = fightPlayer(players[0], players[0].fight.activeMonster, diceRollPlayer)
  if(winner){
    clientSocket.emit("updateFight", "Player won");
    return
  }
  clientSocket.emit("updateFight", "Monster has " + players[0].fight.activeMonster.health + " health");
  clientSocket.emit("updatePlayer", players[0])
  clientSocket.emit("updateMonster", players[0].fight.activeMonster)
  return
}

function diceRollMonster(diceRollMonster){
  let winner = fightMonster(players[0], players[0].fight.activeMonster, diceRollMonster)
  if(winner){
    clientSocket.emit("updateFight", "Monster won");
    return
  }
  clientSocket.emit("updateFight", "Player has " + players[0].health + " health");
  clientSocket.emit("updatePlayer", players[0])
  clientSocket.emit("updateMonster", players[0].fight.activeMonster)
  return
}

function fightPlayer(activePlayer, activeMonster, playerRoll){
  let playerDamage = players[0].moves[playerRoll-1][1];
  //dot
  if(players[0].moves[playerRoll-1][4] > players[0].dot){
    players[0].dot = players[0].moves[playerRoll-1][4]
  }
  if(players[0].dot > 0){
    playerDamage += players[0].dot
  }
  //apply previous next round
  if(players[0].damageNextRound > 0){
    playerDamage += players[0].damageNextRound;
    players[0].damageNextRound = 0;
  }
  //apply damage
  if(playerDamage > 0){
    if(activeMonster.blocks >= playerDamage){
      activeMonster.blocks = 0;
    }
    else if(activeMonster.blocks < playerDamage){
      activeMonster.health = activeMonster.health + (activeMonster.blocks - playerDamage)
      activeMonster.blocks = 0;
    }
    else{
      activeMonster.health = activeMonster.health -  playerDamage;
    }
  }
  //apply damage next round
  if(players[0].moves[playerRoll-1][6] > 0){
    playerDamage.damageNextRound = players[0].moves[playerRoll-1][6];
  }
  // reflect 
  if(activeMonster.reflect > 0){
    if(playerDamage >= activeMonster.reflect){
      players[0].health = players[0].health - activeMonster.reflect;
      activeMonster.reflect = 0;
    }
    if(playerDamage < activeMonster.reflect){
      players[0].health = players[0].health - playerDamage
      activeMonster.reflect = 0;
    }
  }
  
  //apply heal
  players[0].health += players[0].moves[playerRoll-1][3]
  // set blocks
  players[0].blocks = players[0].moves[playerRoll-1][2]
  //reflect
  players[0].reflect = players[0].moves[playerRoll-1][5]
  //check for win
  if(activeMonster.health <= 0){
    activePlayer.monstersKilled += 1;
    activePlayer.victoryPoints += activeMonster.victoryPoints;
    activePlayer.gold += activeMonster.rewardGold;
    players[0].dot = 0;
    players[0].reflect = 0;
    players[0].damageNextRound = 0;
    return true
  }
  return false
 }
 
 function fightMonster(activePlayer, activeMonster, monsterRoll){
  //apply damage
  let monsterDamage = activeMonster.moves[monsterRoll-1][1];

  //dot
  if(activeMonster.moves[monsterRoll-1][4] > 0){
    activeMonster.dot = activeMonster.moves[monsterRoll-1][4]
  }
  if(activeMonster.dot > 0){
    monsterDamage += activeMonster.dot
  }
  //apply previous next round
  if(activeMonster.damageNextRound > 0){
    monsterDamage += activeMonster.damageNextRound;
    activeMonster.damageNextRound = 0;
  }
  if(monsterDamage > 0){
    if(activePlayer.blocks > monsterDamage){
      activePlayer.blocks = 0;
    }
    else if(activePlayer.blocks < monsterDamage){
      activePlayer.health = activePlayer.health + (activePlayer.blocks - monsterDamage)
      activePlayer.blocks = 0
    }
    else{
      activePlayer.health = activePlayer.health - monsterDamage;
    }
  }
  //apply damage next round
  if(activeMonster.moves[monsterRoll-1][6] > 0){
    monsterDamage.damageNextRound = activeMonster.moves[monsterRoll-1][6];
  }
  // reflect 
  if(activePlayer.reflect > 0){
    if(monsterDamage >= activePlayer.reflect){
      activeMonster.health - activePlayer.reflect;
      activePlayer.reflect = 0;
    }
    if(monsterDamage < activePlayer.reflect){
      activeMonster.health - monsterDamage
      activeMonster.reflect = 0;
    }
  }
  //apply heal
  activeMonster.health += activeMonster.moves[monsterRoll-1][3]
  // set blocks
  activeMonster.blocks = activeMonster.moves[monsterRoll-1][2]
  //reflect
  activeMonster.reflect = activeMonster.moves[monsterRoll-1][5]
  //check for win
  if(activePlayer.health <= 0){
    return true
  }
  return false
 }

 // update skills
function updateSkills(skill){
  if(skill == 1){
    if(players[0].gold > (players[0].clawLevel * 3)){
      players[0].gold = players[0].gold - (players[0].clawLevel * 3)
      players[0].clawLevel++
    }
  }
  else if(skill == 2){
    if(players[0].gold > (players[0].magicLevel * 3)){
      players[0].gold = players[0].gold - (players[0].magicLevel * 3)
      players[0].magicLevel++
    }
  }
  else if(skill == 3){
    if(players[0].gold > (players[0].skullLevel * 3)){
      players[0].gold = players[0].gold - (players[0].skullLevel * 3)
      players[0].skullLevel++
    }
  }
  else{}
}

function changeRegion(activePlayer, region){
  switch (region) {
    case 1:
      activePlayer.region = "Frosgar"
      break;
    case 2:
      activePlayer.region = "Aridora"
      break;
    case 3:
      activePlayer.region = "Nythoria"
      break;
    case 4:
      activePlayer.region = "Talvar"
      break;
    case 5:
      activePlayer.region = "Athos"
      break;
    case 6:
      activePlayer.region = "Drakan"
      break;
    case 7:
      activePlayer.region = "Middle"
      break;
  }
}

function generateLoot(activePlayer){
  return
}

 //help functions
 function randomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}