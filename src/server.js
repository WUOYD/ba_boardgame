// Express Setup
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

// Global Variables
const lobby = {};
let game;

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
  ["Deliver", "Jorn", "Seppo", "Frosgar", "Talvar", "Fische an den Hafen von Talvar bringen", "Die Fische essen", ["1", "2", "0"], ["-1", "0", "5"], null, "text blablabla"],
  ["Monster", "Dorfbewohner von Nebelfrost", "Dorfbewohner von Nebelfrost", "Frosgar", "Frosgar", "Hilf den Dorfbewohnern den Drachen zu töten", "Hilfe ablehnen", ["1", "4", "0"], ["0", "0", "0"], null,"text blablabla"],
  ["Return", "Gunnar", "Holzhändler", "Frosgar", "Athos", "Hole das Holz am Hafen von Athos und bringe es hierher", "Nimm das Geld und behalte es für dich.", ["1", "2", ""], ["-1", "", "5"], false,"text blablabla"],
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
  constructor(questType, questOfferer, questReceiver, regionQuest, regionDeliver, optionGood, optionBad, rewardGood, rewardBad, questFlag, questText) {
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
    this.optionPicked = null;
    this.questFlag = questFlag;
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

// Connection Handlsing
io.on('connection', (socket) => {
  console.log('new connection: ' + socket.id);
  lobby[socket.id] = { socket: socket };
  
  socket.on('join', (playerName) => {
      console.log('Player joining: ', playerName);
      const playerObject = new Player(playerName);
      playerObject.socket = socket;
      lobby[socket.id] = playerObject;
      socket.emit('join', playerName);
      console.log('Player joined: ', playerName);
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
    diceRollPlayer(socket.id, rollPlayer); 
  });

  socket.on("diceRollMonster", (rollMonster) => {
    diceRollMonster(socket.id, rollMonster); 
  });

  // Get Active Player
  socket.on("getActivePlayer", function() {
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  // Upgrades
  socket.on("upgradeClaw", function() {
    updateSkills(socket.id, 1); 
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on("upgradeMagic", function() {
    updateSkills(socket.id, 2); 
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on("upgradeSkull", function() {
    updateSkills(socket.id, 3); // Pass socket.id instead of lobby[socket.id]
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  // Generate Encounter
  socket.on("generateEncounter", function() {
    encounter = investigate(socket.id); // Pass socket.id instead of lobby[socket.id]
    socket.emit("updateEncounter", encounter);
  });

  // Change Region
  socket.on("changeRegion", (region) => { 
    changeRegion(socket.id, region); // Pass socket.id instead of lobby[socket.id]
    socket.emit("currentRegion", lobby[socket.id]);
  });

  // Deny quest
  socket.on("denyQuest", function() { 
    lobby[socket.id].quest = null;
    modifyProbability(socket.id, "Quest"); // Pass socket.id instead of lobby[socket.id]
  });

  // Option good
  socket.on("optionQuestGood", function() { 
    lobby[socket.id].quest.optionPicked = "Good";
    modifyProbability(socket.id, "Quest"); // Pass socket.id instead of lobby[socket.id]
  });

  // Option bad
  socket.on("optionQuestBad", function() { 
    lobby[socket.id].quest.optionPicked = "Bad";
    modifyProbability(socket.id, "Quest"); // Pass socket.id instead of lobby[socket.id]
  });

  // Disconnect Handling
  socket.on('disconnect', () => {
    console.log('connection disconnected: ' + socket.id);
    const playerName = lobby[socket.id].name; // Retrieve player name if needed
    delete lobby[socket.id];
    if (playerName) {
      console.log(`Player ${playerName} has disconnected.`);
    } else {
      console.log(`No player associated with socket ${socket.id}.`);
    }
    io.emit("userCount", Object.keys(lobby).length); // Broadcast updated user count to all connected sockets
  });
});

// Game Initialization
function initGame() {
  initMonsters();
  initQuests();
  game = new Game(1);
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
    modifyProbability(activePlayer, encounter)
  }
  else if(encounter == "Loot"){
    generateLoot(activePlayer);
    modifyProbability(activePlayer, encounter)
  }
  else if(encounter == "Quest"){
    startQuest(activePlayer);
  }
  else if(encounter == "ActiveQuest"){
    manageQuest(activePlayer);
    modifyProbability(activePlayer, encounter)
  }
  return encounter
}

function generateEncounter(activePlayer) {
  const random = Math.random();
  let amountActiveQuest = 0.2
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

  if(activePlayer.quest != null){
    if(activePlayer.quest.questType == "Return"){
      if(activePlayer.region == activePlayer.quest.regionDeliver && activePlayer.quest.questFlag == false){
        activeQuestProbability += amountActiveQuest
        encounters = [
          { type: "Nothing", probability: 1 - (monsterProbability + lootProbability + questProbability + activeQuestProbability) },
          { type: "Monster", probability: monsterProbability },
          { type: "Loot", probability: lootProbability },
          { type: "Quest", probability: questProbability },
          { type: "ActiveQuest", probability: activeQuestProbability },
        ];
      }
      else if(activePlayer.region == activePlayer.quest.regionQuest && activePlayer.quest.questFlag == true){
        activeQuestProbability += amountActiveQuest
        encounters = [
          { type: "Nothing", probability: 1 - (monsterProbability + lootProbability + questProbability + activeQuestProbability) },
          { type: "Monster", probability: monsterProbability },
          { type: "Loot", probability: lootProbability },
          { type: "Quest", probability: questProbability },
          { type: "ActiveQuest", probability: activeQuestProbability },
        ];
      }
      else{}
    }
    else {
      if(activePlayer.region == activePlayer.quest.regionDeliver){
        activeQuestProbability += 0.2
        encounters = [
          { type: "Nothing", probability: 1 - (monsterProbability + lootProbability + questProbability + activeQuestProbability) },
          { type: "Monster", probability: monsterProbability },
          { type: "Loot", probability: lootProbability },
          { type: "Quest", probability: questProbability },
          { type: "ActiveQuest", probability: activeQuestProbability },
        ];
      }
      else{}
    }
  }
  let cumulativeProbability = 0;
  for (const encounter of encounters) {
    cumulativeProbability += encounter.probability;
    encounter.cumulativeProbability = cumulativeProbability;
  }
  for (const encounter of encounters) {
    if (random < encounter.cumulativeProbability) {
      return encounter.type;
    }
  }
  
}

function modifyProbability(activePlayer, choice) {
  let standardAmountMonster = 0.1;
  let standardAmountLoot = 0.05;
  let standardAmountQuest = 0.1;
  let amountMonster = 0.1;
  let amountLoot = 0.05;
  let amountQuest = 0.1;
  let amountActiveQuest = 0.1;

  if (choice == "Nothing"){
    activePlayer.probability.monsterProbability += amountMonster;
    activePlayer.probability.lootProbability += amountLoot;
    if(activePlayer.quest == null){
      activePlayer.probability.questProbability += amountQuest;
    }
    return
  }
  else if (choice == "Monster") {
    activePlayer.probability.monsterProbability = standardAmountMonster;
    activePlayer.probability.lootProbability += amountLoot;
    if(activePlayer.quest == null){
      activePlayer.probability.questProbability += amountQuest;
    }
    return
  } 
  else if (choice == "Loot") {
    activePlayer.probability.monsterProbability += amountMonster;
    activePlayer.probability.lootProbability = standardAmountLoot;
    if(activePlayer.quest == null){
      activePlayer.probability.questProbability += amountQuest;
    }
    return
  } 
  else if (choice == "Quest") {
    activePlayer.probability.monsterProbability += amountMonster;
    activePlayer.probability.lootProbability += amountLoot;
    if(activePlayer.quest == null){
      activePlayer.probability.questProbability += amountQuest;
    }
    else{
      activePlayer.probability.questProbability = 0;
    }
    return
  } 
  else if (choice == "ActiveQuest") {
    activePlayer.probability.monsterProbability += amountMonster;
    activePlayer.probability.lootProbability += amountLoot;
    if(activePlayer.quest != null){
      if(activePlayer.quest.questType == "Return"){
        if(activePlayer.quest.questFlag == true){
          activePlayer.probability.activeQuestProbability = 0;
        }
        else{
          activePlayer.probability.activeQuestProbability += amountActiveQuest
        }
      }
      else{
        activePlayer.probability.questProbability = standardAmountQuest
        activePlayer.probability.activeQuestProbability = 0;
      }
    }
    return
  }
}

//start quest
function startQuest(activePlayer){
  activePlayer.quest = getRandomQuest(game.round);
  lobby[socket.id].socket.emit("updatePlayer", activePlayer)
}

//manage Quest
function manageQuest(activePlayer){
  if(activePlayer.quest.questType == "Return"){
    if(activePlayer.quest.questFlag == false){
      activePlayer.quest.questFlag = true
      //activePlayer.emit("questUpdate", (activePlayer, false))
      activePlayer.probability.activeQuestProbability = 0
      return
    }
    else{
      //activePlayer.emit("questUpdate" (activePlayer, true))
      activePlayer.gold += activePlayer.quest.rewardGood[0]
      activePlayer.reputation += activePlayer.quest.rewardGood[1]
      activePlayer.health += activePlayer.quest.rewardGood[2]
      activePlayer.victoryPoints += activePlayer.quest.rewardGood[3];
      activePlayer.questsSolved += 1;
      activePlayer.probability.questProbability = 0.2;
      activePlayer.probability.activeQuestProbability = 0;
      activePlayer.quest = null;
      return
    }
  }
  else{
    //activePlayer.emit("questUpdate" (activePlayer, true))
    activePlayer.gold += activePlayer.quest.rewardGood[0]
    activePlayer.reputation += activePlayer.quest.rewardGood[1]
    activePlayer.health += activePlayer.quest.rewardGood[2]
    activePlayer.victoryPoints += activePlayer.quest.rewardGood[3];
    activePlayer.questsSolved += 1;
    activePlayer.probability.questProbability = 0.2;
    activePlayer.probability.activeQuestProbability = 0;
    activePlayer.quest = null;
    return
  }
}

//start fight
function startFight(activePlayer){
  let activeMonster = getRandomMonster(game.round);
  initFightMonster(activePlayer, activeMonster);
  lobby[socket.id].socket.emit("updateMonster", activeMonster);
  return activeMonster;
}

//fight monster
function initFightMonster(activePlayer, activeMonster){
  activePlayer.fight = new Fight(activeMonster)
  lobby[socket.id].socket.emit("updateFight", "Please roll player and monster");
}

//Fight rolls
function diceRollPlayer(activePlayer, rollPlayer) {
  let winner = fightPlayer(activePlayer, activePlayer.fight.activeMonster, rollPlayer);
  if (winner) {
    lobby[socket.id].socket.emit("updateFight", "Player won");
  } else {
    lobby[socket.id].socket.emit("updateFight", "Monster has " + activePlayer.fight.activeMonster.health + " health");
  }
  lobby[socket.id].socket.emit("updatePlayer", activePlayer);
  lobby[socket.id].socket.emit("updateMonster", activePlayer.fight.activeMonster);
}

function diceRollMonster(activePlayer, rollMonster) {
  let winner = fightMonster(activePlayer, activePlayer.fight.activeMonster, rollMonster);
  if (winner) {
    lobby[socket.id].socket.emit("updateFight", "Monster won");
  } else {
    lobby[socket.id].socket.emit("updateFight", "Player has " + activePlayer.health + " health");
  }
  lobby[socket.id].socket.emit("updatePlayer", activePlayer);
  lobby[socket.id].socket.emit("updateMonster", activePlayer.fight.activeMonster);
}



function fightPlayer(activePlayer, activeMonster, playerRoll){
  let playerDamage = activePlayer.moves[playerRoll-1][1];
  //dot
  if(activePlayer.moves[playerRoll-1][4] > activePlayer.dot){
    activePlayer.dot = activePlayer.moves[playerRoll-1][4]
  }
  if(activePlayer.dot > 0){
    playerDamage += activePlayer.dot
  }
  //apply previous next round
  if(activePlayer.damageNextRound > 0){
    playerDamage += activePlayer.damageNextRound;
    activePlayer.damageNextRound = 0;
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
  if(activePlayer.moves[playerRoll-1][6] > 0){
    playerDamage.damageNextRound = activePlayer.moves[playerRoll-1][6];
  }
  // reflect 
  if(activeMonster.reflect > 0){
    if(playerDamage >= activeMonster.reflect){
      activePlayer.health = activePlayer.health - activeMonster.reflect;
      activeMonster.reflect = 0;
    }
    if(playerDamage < activeMonster.reflect){
      activePlayer.health = activePlayer.health - playerDamage
      activeMonster.reflect = 0;
    }
  }
  
  //apply heal
  activePlayer.health += activePlayer.moves[playerRoll-1][3]
  // set blocks
  activePlayer.blocks = activePlayer.moves[playerRoll-1][2]
  //reflect
  activePlayer.reflect = activePlayer.moves[playerRoll-1][5]
  //check for win
  if(activeMonster.health <= 0){
    activePlayer.monstersKilled += 1;
    activePlayer.victoryPoints += activeMonster.victoryPoints;
    activePlayer.gold += activeMonster.rewardGold;
    activePlayer.dot = 0;
    activePlayer.reflect = 0;
    activePlayer.damageNextRound = 0;
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
function updateSkills(activePlayer, skill){
  if(skill == 1){
    if(activePlayer.gold > (activePlayer.clawLevel * 3)){
      activePlayer.gold = activePlayer.gold - (activePlayer.clawLevel * 3)
      activePlayer.clawLevel++
    }
  }
  else if(skill == 2){
    if(activePlayer.gold > (activePlayer.magicLevel * 3)){
      activePlayer.gold = activePlayer.gold - (activePlayer.magicLevel * 3)
      activePlayer.magicLevel++
    }
  }
  else if(skill == 3){
    if(activePlayer.gold > (activePlayer.skullLevel * 3)){
      activePlayer.gold = activePlayer.gold - (activePlayer.skullLevel * 3)
      activePlayer.skullLevel++
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