//import
const monsterTables = require("./monsters.js");
const questTables = require("./quests.js");
const moveTables = require("./moves.js");

// Express Setup
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');

// Global Variables
const lobby = [];
let game;
let playerList = new Array();
let viewerList = new Array();
let playerReadyList = new Array(); 
let activePlayer = 0;

let monstersBronzeNythoria = [];
let monstersBronzeDrakan = [];
let monstersBronzeTalvar = [];
let monstersBronzeFrosgar = [];
let monstersBronzeAthos = [];
let monstersBronzeAridora = [];
let monstersSilverNythoria = [];
let monstersSilverDrakan = [];
let monstersSilverTalvar = [];
let monstersSilverFrosgar = [];
let monstersSilverAthos = [];
let monstersSilverAridora = [];
let monstersGoldNythoria = [];
let monstersGoldDrakan = [];
let monstersGoldTalvar = [];
let monstersGoldFrosgar = [];
let monstersGoldAthos = [];
let monstersGoldAridora = [];
let monstersSilver = [];
let monstersGold = [];
let questsBronze = [];
let questsSilver = [];
let questsGold = [];

const { monsterTableBronze, monsterTableSilver, monsterTableGold, monsterTableQuests } = monsterTables;
const { monsterTableBronzeNythoria, monsterTableBronzeDrakan, monsterTableBronzeTalvar, monsterTableBronzeFrosgar, monsterTableBronzeAthos, monsterTableBronzeAridora} = monsterTableBronze
const { monsterTableSilverNythoria, monsterTableSilverDrakan, monsterTableSilverTalvar, monsterTableSilverFrosgar, monsterTableSilverAthos, monsterTableSilverAridora} = monsterTableSilver
const { monsterTableGoldNythoria, monsterTableGoldDrakan, monsterTableGoldTalvar, monsterTableGoldFrosgar, monsterTableGoldAthos, monsterTableGoldAridora} = monsterTableGold
const { questTableBronze, questTableSilver, questTableGold } = questTables;
const { movesTableCombinationSwordSword, movesTableCombinationMagicMagic, movesTableCombinationSkullSkull, movesTableCombinationSwordMagic, movesTableCombinationMagicSkull, movesTableCombinationSwordSkull, } = moveTables;

// Classes
class Game {
  constructor(playerCount, playerList) {
    this.playerCount = playerCount;
    this.playerList = playerList
    this.round = 1;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.host = false;
    this.actions = 10;
    this.actionUsed = false;
    this.health = 10;
    this.reputation = 0;
    this.gold = 20;
    this.goldLoot = 0;
    this.monstersKilled = 0;
    this.questsSolved = 0;
    this.victoryPoints = 0;
    this.blocks = 0;
    this.dot = 0;
    this.reflect = 0;
    this.damageNextRound = 0;
    this.picture = "src/assets/img/player/player.webp";
    //SwordSword, SwordMagic, MagicMagic, MagicSkull, SkullSkull, SkullClaw
    this.moves = [[1,[2,3,4,5]],[1,[2,3]],[1,[2,3]],[1,[2,3]],[1,[2,3]],[1,[2,3]]];
    this.clawLevel = 1;
    this.skullLevel = 1;
    this.magicLevel = 1;
    this.probability = {
      monsterProbability: 0.2,
      lootProbability: 0.1,
      questProbability: 0.2,
    };
    this.quest = null;
    this.region = "Frosgar";
  }
}

class Monster {
  constructor(name, type, health, rewardGold, victoryPoints, image, moves) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.victoryPoints = victoryPoints;
    this.rewardGold = rewardGold;
    this.blocks = 0;
    this.dot = 0;
    this.reflect = 0;
    this.damageNextRound = 0;
    this.image = image;
    this.moves = moves;
  }
}

class Fight {
  constructor(activeMonsterObject) {
    this.activeMonster = activeMonsterObject;
  }
}

class Quest {
  constructor(questType, questOfferer, questMiddleman, questReceiver, questRegion, questRegionDeliver , rewardGood, rewardBad, rewardDeny, optionGood, optionBad, optionDeny, questMonster, questMonsterText, questImpact, optionGoodSecond, optionBadSecond) {
    this.questType = questType;
    this.questOfferer = questOfferer;
    this.questMiddleman = questMiddleman;
    this.questReceiver = questReceiver;
    this.regionQuest = questRegion;
    this.regionDeliver = questRegionDeliver;
    this.optionGood = optionGood;
    this.optionBad = optionBad;
    this.optionDeny = optionDeny;
    this.rewardGood = rewardGood;
    this.rewardBad = rewardBad;
    this.rewardDeny = rewardDeny;
    this.questMonster = monsterTableQuests[questMonster];
    this.questMonsterText = questMonsterText;
    this.questImpact = questImpact;
    this.optionGoodSecond = optionGoodSecond;
    this.optionBadSecond = optionBadSecond;
    this.optionPicked = null;
    this.questFlag = false;
    this.questStep = null;
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
  
  socket.on('joinPlayer', (playerName) => {
      const playerObject = new Player(playerName);
      lobby[socket.id] = playerObject;
      playerList.push(lobby[socket.id]);
      playerReadyList.push(false);
      if(playerList.length == 1){
        lobby[socket.id].host = true;
      }
      socket.emit('join', playerName);
      console.log('Player joined: ', playerName);
      socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on('joinViewer', function() {
    socket.emit('join', socket);
    console.log('Viewer joined: ', socket);
    //viewerList.append(lobby[socket.id]);
  });

  // Get change Ready State
  socket.on("changeReadyState", function() {
    let playerState = {};
    if(playerReadyList[playerList.indexOf(lobby[socket.id])] == true){
      playerReadyList[playerList.indexOf(lobby[socket.id])] = false
    }
    else{
      playerReadyList[playerList.indexOf(lobby[socket.id])] = true
    }
    playerState.readyList = playerReadyList
    playerState.playerList = playerList
    io.emit("setReadyState", playerState);
  });

  socket.on("getReadyState", function() {
    let playerState = {}
    playerState.readyList = playerReadyList
    playerState.playerList = playerList
    io.emit("setReadyState", playerState);
  });

  // startGame
  socket.on("hostStartGame", function() {
    const allPlayersReady = playerReadyList.every(playerReady => playerReady === true);
    if (allPlayersReady) {
      io.emit("startGame");
      const identifiers = Object.keys(lobby);
      const randomIndex = randomNumber(0, playerList.length-1)
      activePlayer = randomIndex
      console.log(activePlayer)
      const randomIdentifier = identifiers[randomIndex];
      lobby[randomIdentifier].playerIsActive = true;
      io.to(randomIdentifier).emit("updatePlayer", lobby[randomIdentifier]);
    }
  });

  socket.on("endAction", function() {
    const identifiers = Object.keys(lobby);
    let oldPlayer = identifiers[activePlayer]
    oldPlayer.actionUsed = false;
    let newPlayer
    if(activePlayer < playerList.length-1){
      activePlayer += 1;
      newPlayer = identifiers[activePlayer];
    }
    else{
      newPlayer = identifiers[0];
      activePlayer = 0;
    }
    console.log(activePlayer)
    lobby[oldPlayer].playerIsActive = false;
    lobby[oldPlayer].actionUsed = false;
    lobby[newPlayer].playerIsActive = true;
    io.to(oldPlayer).emit('updateClientView', "Actions");
    io.to(oldPlayer).emit("updatePlayer", lobby[oldPlayer]);
    io.to(newPlayer).emit('updateClientView', "Actions");
    io.to(newPlayer).emit("updatePlayer", lobby[newPlayer]);
  });

  // Update View
  socket.on('updateView', (comp) => {
    socket.emit('updateClientView', comp);
  });

  // Get Active Player
  socket.on("getActivePlayer", function() {
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on("getActiveMonster", function() {
    socket.emit("updateMonster", lobby[socket.id]);
  });

  socket.on("getMovesTables", function() {
    socket.emit("setMovesTables", moveTables);
  });

  socket.on("getChangeMoves", function() {
    socket.emit("updateChangeMoves", lobby[socket.id]);
  });
  
  socket.on("changeMove", function(data) {
    let index = data.moveIndextoChange -1
    let indexNew = data.moveIndexNew
    lobby[socket.id].moves[index][1].push(lobby[socket.id].moves[index][0])
    let indexRemove = lobby[socket.id].moves[index][1].indexOf(indexNew);
    if (indexRemove !== -1) {
      lobby[socket.id].moves[index][1].splice(indexRemove, 1);
    }
    lobby[socket.id].moves[index][0] = indexNew;
    socket.emit("updatePlayer", lobby[socket.id]);
    socket.emit("updateChangeMoves", lobby[socket.id]);
  });

  // Upgrades
  socket.on("upgradeClaw", function() {
    updateSkills(lobby[socket.id], 1); 
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on("upgradeMagic", function() {
    updateSkills(lobby[socket.id], 2); 
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on("upgradeSkull", function() {
    updateSkills(lobby[socket.id], 3); 
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  // Generate Encounter
  socket.on("investigate", function() {
    encounter = investigate(lobby[socket.id]); 
    socket.emit("updateEncounter", encounter);
    socket.emit("updatePlayer", lobby[socket.id])
    socket.emit("updateMonster", lobby[socket.id])
  });
  

  // Change Region
  socket.on("changeRegion", (region) => { 
    changeRegion(lobby[socket.id], region); 
    socket.emit("currentRegion", lobby[socket.id]);
  });

  // Option good
  socket.on("optionQuestGood", function() { 
    lobby[socket.id].quest.optionPicked = "Good";
    modifyProbability(lobby[socket.id], "Quest"); 
  });

  // Option bad
  socket.on("optionQuestBad", function() { 
    lobby[socket.id].quest.optionPicked = "Bad";
    modifyProbability(lobby[socket.id], "Quest"); 
  });

  // Deny quest
  socket.on("optionQuestDeny", function() { 
    lobby[socket.id].quest = null;
    modifyProbability(lobby[socket.id], "Quest"); 
  });

  socket.on("manageQuest", function() { 
    socket.emit('updateClientView', 5);
    socket.emit('changeQuestView');
    manageQuest(socket, lobby[socket.id]);
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on("decisionGood", function() {
    lobby[socket.id].quest.optionPicked = "Good"
    manageQuest(socket, lobby[socket.id]);
    modifyProbability(lobby[socket.id], "Quest"); 
  });

  socket.on("decisionBad", function() { 
    lobby[socket.id].quest.optionPicked = "Bad"
    manageQuest(socket, lobby[socket.id]);
    modifyProbability(lobby[socket.id], "Quest"); 
  });

  socket.on("questComplete", function() { 
    completeQuest(lobby[socket.id])
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on("updateActions", function() { 
    lobby[socket.id].actionUsed = true; 
    lobby[socket.id].actions -= 1;
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  // heal player
  socket.on("healPlayer", function() {
    if(lobby[socket.id].health <= 8) {
      lobby[socket.id].health = lobby[socket.id].health + ((10-lobby[socket.id].health)/2 + 2)
    }
    else if(lobby[socket.id].health == 9){
      lobby[socket.id].health = lobby[socket.id].health + 1
    }
    else{}
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  // Dice roll
  socket.on("diceRollPlayer", (rollPlayer) => {
    diceRollPlayer(socket, lobby[socket.id], rollPlayer); 
  });

  socket.on("diceRollMonster", (rollMonster) => {
    diceRollMonster(socket, lobby[socket.id], rollMonster); 
  });


  // Disconnect Handling
  socket.on('disconnect', () => {
    console.log('connection disconnected: ' + socket.id);
    const playerName = lobby[socket.id].name; 
    delete lobby[socket.id];
    if (playerName) {
      console.log(`Player ${playerName} has disconnected.`);
    } else {
      console.log(`No player associated with socket ${socket.id}.`);
    }
    io.emit("userCount", Object.keys(lobby).length); 
  });


});

// Game Initialization
function initGame() {
  initMonsters();
  initQuests();
  game = new Game(playerList.length, playerList);
}

initGame();


function initMonsters() {
  let monsterCount = 5;  // Adjust this if the count varies
  
  // Initialize Bronze monsters
  for (let i = 0; i < monsterCount; i++) {
    monstersBronzeNythoria.push(new Monster(monsterTableBronzeNythoria[i].name, monsterTableBronzeNythoria[i].type, monsterTableBronzeNythoria[i].health, monsterTableBronzeNythoria[i].gold, monsterTableBronzeNythoria[i].victoryPoints, monsterTableBronzeNythoria[i].image, monsterTableBronzeNythoria[i].moves));
    monstersBronzeDrakan.push(new Monster(monsterTableBronzeDrakan[i].name, monsterTableBronzeDrakan[i].type, monsterTableBronzeDrakan[i].health, monsterTableBronzeDrakan[i].gold, monsterTableBronzeDrakan[i].victoryPoints, monsterTableBronzeDrakan[i].image, monsterTableBronzeDrakan[i].moves));
    monstersBronzeTalvar.push(new Monster(monsterTableBronzeTalvar[i].name, monsterTableBronzeTalvar[i].type, monsterTableBronzeTalvar[i].health, monsterTableBronzeTalvar[i].gold, monsterTableBronzeTalvar[i].victoryPoints, monsterTableBronzeTalvar[i].image, monsterTableBronzeTalvar[i].moves));
    monstersBronzeFrosgar.push(new Monster(monsterTableBronzeFrosgar[i].name, monsterTableBronzeFrosgar[i].type, monsterTableBronzeFrosgar[i].health, monsterTableBronzeFrosgar[i].gold, monsterTableBronzeFrosgar[i].victoryPoints, monsterTableBronzeFrosgar[i].image, monsterTableBronzeFrosgar[i].moves));
    monstersBronzeAthos.push(new Monster(monsterTableBronzeAthos[i].name, monsterTableBronzeAthos[i].type, monsterTableBronzeAthos[i].health, monsterTableBronzeAthos[i].gold, monsterTableBronzeAthos[i].victoryPoints, monsterTableBronzeAthos[i].image, monsterTableBronzeAthos[i].moves));
    monstersBronzeAridora.push(new Monster(monsterTableBronzeAridora[i].name, monsterTableBronzeAridora[i].type, monsterTableBronzeAridora[i].health, monsterTableBronzeAridora[i].gold, monsterTableBronzeAridora[i].victoryPoints, monsterTableBronzeAridora[i].image, monsterTableBronzeAridora[i].moves));
  }

  // Initialize Silver monsters
  for (let i = 0; i < monsterCount; i++) {
    monstersSilverNythoria.push(new Monster(monsterTableSilverNythoria[i].name, monsterTableSilverNythoria[i].type, monsterTableSilverNythoria[i].health, monsterTableSilverNythoria[i].gold, monsterTableSilverNythoria[i].victoryPoints, monsterTableSilverNythoria[i].image, monsterTableSilverNythoria[i].moves));
    monstersSilverDrakan.push(new Monster(monsterTableSilverDrakan[i].name, monsterTableSilverDrakan[i].type, monsterTableSilverDrakan[i].health, monsterTableSilverDrakan[i].gold, monsterTableSilverDrakan[i].victoryPoints, monsterTableSilverDrakan[i].image, monsterTableSilverDrakan[i].moves));
    monstersSilverTalvar.push(new Monster(monsterTableSilverTalvar[i].name, monsterTableSilverTalvar[i].type, monsterTableSilverTalvar[i].health, monsterTableSilverTalvar[i].gold, monsterTableSilverTalvar[i].victoryPoints, monsterTableSilverTalvar[i].image, monsterTableSilverTalvar[i].moves));
    monstersSilverFrosgar.push(new Monster(monsterTableSilverFrosgar[i].name, monsterTableSilverFrosgar[i].type, monsterTableSilverFrosgar[i].health, monsterTableSilverFrosgar[i].gold, monsterTableSilverFrosgar[i].victoryPoints, monsterTableSilverFrosgar[i].image, monsterTableSilverFrosgar[i].moves));
    monstersSilverAthos.push(new Monster(monsterTableSilverAthos[i].name, monsterTableSilverAthos[i].type, monsterTableSilverAthos[i].health, monsterTableSilverAthos[i].gold, monsterTableSilverAthos[i].victoryPoints, monsterTableSilverAthos[i].image, monsterTableSilverAthos[i].moves));
    monstersSilverAridora.push(new Monster(monsterTableSilverAridora[i].name, monsterTableSilverAridora[i].type, monsterTableSilverAridora[i].health, monsterTableSilverAridora[i].gold, monsterTableSilverAridora[i].victoryPoints, monsterTableSilverAridora[i].image, monsterTableSilverAridora[i].moves));
  }

  // Initialize Gold monsters
  for (let i = 0; i < monsterCount; i++) {
    monstersGoldNythoria.push(new Monster(monsterTableGoldNythoria[i].name, monsterTableGoldNythoria[i].type, monsterTableGoldNythoria[i].health, monsterTableGoldNythoria[i].gold, monsterTableGoldNythoria[i].victoryPoints, monsterTableGoldNythoria[i].image, monsterTableGoldNythoria[i].moves));
    monstersGoldDrakan.push(new Monster(monsterTableGoldDrakan[i].name, monsterTableGoldDrakan[i].type, monsterTableGoldDrakan[i].health, monsterTableGoldDrakan[i].gold, monsterTableGoldDrakan[i].victoryPoints, monsterTableGoldDrakan[i].image, monsterTableGoldDrakan[i].moves));
    monstersGoldTalvar.push(new Monster(monsterTableGoldTalvar[i].name, monsterTableGoldTalvar[i].type, monsterTableGoldTalvar[i].health, monsterTableGoldTalvar[i].gold, monsterTableGoldTalvar[i].victoryPoints, monsterTableGoldTalvar[i].image, monsterTableGoldTalvar[i].moves));
    monstersGoldFrosgar.push(new Monster(monsterTableGoldFrosgar[i].name, monsterTableGoldFrosgar[i].type, monsterTableGoldFrosgar[i].health, monsterTableGoldFrosgar[i].gold, monsterTableGoldFrosgar[i].victoryPoints, monsterTableGoldFrosgar[i].image, monsterTableGoldFrosgar[i].moves));
    monstersGoldAthos.push(new Monster(monsterTableGoldAthos[i].name, monsterTableGoldAthos[i].type, monsterTableGoldAthos[i].health, monsterTableGoldAthos[i].gold, monsterTableGoldAthos[i].victoryPoints, monsterTableGoldAthos[i].image, monsterTableGoldAthos[i].moves));
    monstersGoldAridora.push(new Monster(monsterTableGoldAridora[i].name, monsterTableGoldAridora[i].type, monsterTableGoldAridora[i].health, monsterTableGoldAridora[i].gold, monsterTableGoldAridora[i].victoryPoints, monsterTableGoldAridora[i].image, monsterTableGoldAridora[i].moves));
  }

  // Initialize Quest monsters
  for (let i = 0; i < monsterTableQuests.length; i++) {
    questMonsters.push(new Monster(monsterTableQuests[i][0], monsterTableQuests[i][1], monsterTableQuests[i][2], monsterTableQuests[i][3], monsterTableQuests[i][4], monsterTableQuests[i][5], monsterTableQuests[i][6]));
  }
}

function getRandomMonster(playerRegion, round) {
  let monster;
  let rndNumber;

  switch (playerRegion) {
      case "Nythoria":
          switch (round) {
              case 1:
                  rndNumber = randomNumber(0, monstersBronzeNythoria.length - 1);
                  monster = monstersBronzeNythoria[rndNumber];
                  break;
              case 2:
                  rndNumber = randomNumber(0, monstersSilverNythoria.length - 1);
                  monster = monstersSilverNythoria[rndNumber];
                  break;
              case 3:
                  rndNumber = randomNumber(0, monstersGoldNythoria.length - 1);
                  monster = monstersGoldNythoria[rndNumber];
                  break;
          }
          break;
      case "Drakan":
          switch (round) {
              case 1:
                  rndNumber = randomNumber(0, monstersBronzeDrakan.length - 1);
                  monster = monstersBronzeDrakan[rndNumber];
                  break;
              case 2:
                  rndNumber = randomNumber(0, monstersSilverDrakan.length - 1);
                  monster = monstersSilverDrakan[rndNumber];
                  break;
              case 3:
                  rndNumber = randomNumber(0, monstersGoldDrakan.length - 1);
                  monster = monstersGoldDrakan[rndNumber];
                  break;
          }
          break;
      case "Talvar":
          switch (round) {
              case 1:
                  rndNumber = randomNumber(0, monstersBronzeTalvar.length - 1);
                  monster = monstersBronzeTalvar[rndNumber];
                  break;
              case 2:
                  rndNumber = randomNumber(0, monstersSilverTalvar.length - 1);
                  monster = monstersSilverTalvar[rndNumber];
                  break;
              case 3:
                  rndNumber = randomNumber(0, monstersGoldTalvar.length - 1);
                  monster = monstersGoldTalvar[rndNumber];
                  break;
          }
          break;
      case "Frosgar":
          switch (round) {
              case 1:
                  rndNumber = randomNumber(0, monstersBronzeFrosgar.length - 1);
                  monster = monstersBronzeFrosgar[rndNumber];
                  break;
              case 2:
                  rndNumber = randomNumber(0, monstersSilverFrosgar.length - 1);
                  monster = monstersSilverFrosgar[rndNumber];
                  break;
              case 3:
                  rndNumber = randomNumber(0, monstersGoldFrosgar.length - 1);
                  monster = monstersGoldFrosgar[rndNumber];
                  break;
          }
          break;
      case "Athos":
          switch (round) {
              case 1:
                  rndNumber = randomNumber(0, monstersBronzeAthos.length - 1);
                  monster = monstersBronzeAthos[rndNumber];
                  break;
              case 2:
                  rndNumber = randomNumber(0, monstersSilverAthos.length - 1);
                  monster = monstersSilverAthos[rndNumber];
                  break;
              case 3:
                  rndNumber = randomNumber(0, monstersGoldAthos.length - 1);
                  monster = monstersGoldAthos[rndNumber];
                  break;
          }
          break;
      case "Aridora":
          switch (round) {
              case 1:
                  rndNumber = randomNumber(0, monstersBronzeAridora.length - 1);
                  monster = monstersBronzeAridora[rndNumber];
                  break;
              case 2:
                  rndNumber = randomNumber(0, monstersSilverAridora.length - 1);
                  monster = monstersSilverAridora[rndNumber];
                  break;
              case 3:
                  rndNumber = randomNumber(0, monstersGoldAridora.length - 1);
                  monster = monstersGoldAridora[rndNumber];
                  break;
          }
          break;
      default:
          console.error("Invalid player region:", playerRegion);
          monster = null;
          break;
  }
  return monster;
}


function initQuests(){
  for (let i = 0; i < questTableBronze.length; i++){
    questsBronze[i] = new Quest(questTableBronze[i].questType, questTableBronze[i].questOfferer, questTableBronze[i].questMiddleman, questTableBronze[i].questReceiver, questTableBronze[i].regions.questRegion, questTableBronze[i].regions.questDeliverRegion, questTableBronze[i].questRewardGood, questTableBronze[i].questRewardBad, questTableBronze[i].questRewardDeny, questTableBronze[i].optionGood, questTableBronze[i].optionBad, questTableBronze[i].optionDeny, questTableBronze[i].questMonster, questTableBronze[i].questMonsterText, questTableBronze[i].questImpact, questTableBronze[i].optionGoodSecond, questTableBronze[i].optionBadSecond);
  }
  for (let i = 0; i < questTableSilver.length; i++){
    questsSilver[i] = new Quest(questTableSilver[i].questType, questTableSilver[i].questOfferer, questTableSilver[i].questMiddleman, questTableSilver[i].questReceiver, questTableSilver[i].regions.questRegion, questTableSilver[i].regions.questDeliverRegion, questTableSilver[i].questRewardGood, questTableSilver[i].questRewardBad, questTableSilver[i].questRewardDeny, questTableSilver[i].optionGood, questTableSilver[i].optionBad, questTableSilver[i].optionDeny, questTableSilver[i].questMonster, questTableSilver[i].questMonsterText, questTableSilver[i].questImpact, questTableSilver[i].optionGoodSecond, questTableSilver[i].optionBadSecond);
  } 
  for (let i = 0; i < questTableGold.length; i++){
    questsGold[i] = new Quest(questTableGold[i].questType, questTableGold[i].questOfferer, questTableGold[i].questMiddleman, questTableGold[i].questReceiver, questTableGold[i].regions.questRegion, questTableGold[i].regions.questDeliverRegion, questTableGold[i].questRewardGood, questTableGold[i].questRewardBad, questTableGold[i].questRewardDeny, questTableGold[i].optionGood, questTableGold[i].optionBad, questTableGold[i].optionDeny, questTableGold[i].questMonster, questTableGold[i].questMonsterText, questTableGold[i].questImpact, questTableGold[i].optionGoodSecond, questTableGold[i].optionBadSecond);
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
  if(encounter == "Monster"){
    let activeMonster = Object.assign({}, getRandomMonster(activePlayer.region, game.round));
    startFight(activePlayer, activeMonster);
  }
  else if(encounter == "Loot"){
    activePlayer.goldLoot = generateLoot();
    activePlayer.gold += activePlayer.goldLoot;
  }
  else if(encounter == "Quest"){
    startQuest(activePlayer);
  }
  modifyProbability(activePlayer, encounter)
  return encounter
}

function generateEncounter(activePlayer) {
  const random = Math.random();
  let monsterProbability = activePlayer.probability.monsterProbability
  let lootProbability = activePlayer.probability.lootProbability
  let questProbability = activePlayer.probability.questProbability
  
  let encounters = [
    { type: "Nothing", probability: 1 - (monsterProbability + lootProbability + questProbability) },
    { type: "Monster", probability: monsterProbability },
    { type: "Loot", probability: lootProbability },
    { type: "Quest", probability: questProbability },
  ];

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
  let amountMonster = 0.1;
  let amountLoot = 0.05;
  let amountQuest = 0.1;

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
}

//start quest
function startQuest(activePlayer){
  activePlayer.quest = Object.assign({}, getRandomQuest(game.round));
}

//manage Quest
function manageQuest(socket, activePlayer){
  if(activePlayer.quest.optionPicked == "Good"){
    switch(activePlayer.quest.optionGood.optionType) {
      case "Deliver":
        activePlayer.quest.questStep = "Deliver"
        socket.emit("updatePlayer", activePlayer);
        break;
      case "DeliverMonster":
        activePlayer.quest.questStep = "Fight"
        let activeMonster = Object.assign({}, monsterTableQuests[activePlayer.quest.questMonster]);
        startFight(activePlayer, activeMonster);
        socket.emit("updatePlayer", activePlayer);
        break;
      case "DeliverDecision":
        activePlayer.quest.questStep = "Desicion"
        socket.emit("updatePlayer", activePlayer);
        if(activePlayer.quest.optionPicked == "Good"){
          socket.emit("updateQuestDecision", "Good")
        }
        else{
          socket.emit("updateQuestDecision", "Bad")
        }
        break;
      case "Return":
        if(activePlayer.quest.questFlag == false){
          activePlayer.quest.questFlag = true
          activePlayer.quest.questStep = "Middleman"
          socket.emit("updatePlayer", activePlayer);
        }
        else{
          activePlayer.quest.questStep = "Return"
          socket.emit("updatePlayer", activePlayer);
        }
        break;
      case "ReturnMonster":
        if(activePlayer.quest.questFlag == false){
          activePlayer.quest.questFlag = true
          activePlayer.quest.questStep = "ReturnMonster"
          let activeMonster = Object.assign({}, monsterTableQuests[activePlayer.quest.questMonster]);
          startFight(activePlayer, activeMonster);
          socket.emit("updatePlayer", activePlayer);
        }
        else{
          activePlayer.quest.questStep = "Return"
          socket.emit("updatePlayer", activePlayer);
        }
        break;
    }
  }
  if(activePlayer.quest.optionPicked == "Bad"){
    switch(activePlayer.quest.optionBad.optionType) {
      case "Deliver":
        activePlayer.quest.questStep = "Deliver"
        socket.emit("updatePlayer", activePlayer);
        break;
      case "DeliverMonster":
        activePlayer.quest.questStep = "Fight"
        let activeMonster = Object.assign({}, monsterTableQuests[activePlayer.quest.questMonster]);
        startFight(activePlayer, activeMonster);
        socket.emit("updatePlayer", activePlayer);
        break;
      case "Return":
        if(activePlayer.quest.questFlag == false){
          activePlayer.quest.questFlag = true
          activePlayer.quest.questStep = "Middleman"
          socket.emit("updatePlayer", activePlayer);
        }
        else{
          activePlayer.quest.questStep = "Return"
          socket.emit("updatePlayer", activePlayer);
        }
        break;
      case "ReturnMonster":
        if(activePlayer.quest.questFlag == false){
          activePlayer.quest.questFlag = true
          let activeMonster = Object.assign({}, monsterTableQuests[activePlayer.quest.questMonster]);
          startFight(activePlayer, activeMonster);
          socket.emit("updatePlayer", activePlayer);
        }
        else{
          activePlayer.quest.questStep = "Return"
          socket.emit("updatePlayer", activePlayer);
        }
        break;
    }
  }
}

function completeQuest(activePlayer){
  if(activePlayer.quest.optionPicked == "Good"){
    activePlayer.reputation += activePlayer.quest.rewardGood[0]
    activePlayer.gold += activePlayer.quest.rewardGood[1]
    //activePlayer.moves += activePlayer.quest.rewardGood[3];
    //activePlayer.victoryPoints += activePlayer.quest.rewardGood[3];
    activePlayer.questsSolved += 1;
    activePlayer.probability.questProbability = 0.2;
    activePlayer.quest = null;
    return
  }
  else{
    activePlayer.reputation += activePlayer.quest.rewardBad[0]
    activePlayer.gold += activePlayer.quest.rewardBad[1]
    //activePlayer.moves += activePlayer.quest.rewardGood[3];
    //activePlayer.victoryPoints += activePlayer.quest.rewardGood[3];
    activePlayer.questsSolved += 1;
    activePlayer.probability.questProbability = 0.2;
    activePlayer.quest = null;
    return
  }
}

//start fight
function startFight(activePlayer, activeMonster){
  activePlayer.fight = new Fight(activeMonster);
}

//Fight rolls
function diceRollPlayer(socket, activePlayer, rollPlayer) {
  let winner = fightPlayer(activePlayer, activePlayer.fight.activeMonster, rollPlayer);
  socket.emit("updatePlayer", activePlayer);
  socket.emit("updateMonster", activePlayer);
  if (winner) {
    activePlayer.monstersKilled += 1;
    activePlayer.victoryPoints += activePlayer.fight.activeMonster.victoryPoints;
    activePlayer.gold += activePlayer.fight.activeMonster.rewardGold;
    activePlayer.dot = 0;
    activePlayer.reflect = 0;
    activePlayer.damageNextRound = 0;
    socket.emit("fightWinner", true)
    return
  }
}

function diceRollMonster(socket, activePlayer, rollMonster) {
  let winner = fightMonster(activePlayer, activePlayer.fight.activeMonster, rollMonster);
  socket.emit("updatePlayer", activePlayer);
  socket.emit("updateMonster", activePlayer);
  if (winner) {
    socket.emit("fightWinner", false)
    return
  }
  return
}



function fightPlayer(activePlayer, activeMonster, playerRoll){
  let move
  let moveIndex
  switch (playerRoll){
    case 1:
      moveIndex = activePlayer.moves[0][0]
      move = movesTableCombinationSwordSword[moveIndex]
      break
    case 2:
      moveIndex = activePlayer.moves[1][0]
      move = movesTableCombinationSwordMagic[moveIndex]
      break
    case 3:
      moveIndex = activePlayer.moves[2][0]
      move = movesTableCombinationMagicMagic[moveIndex]
      break
    case 4:
      moveIndex = activePlayer.moves[3][0]
      move = movesTableCombinationMagicSkull[moveIndex]
      break
    case 5:
      moveIndex = activePlayer.moves[4][0]
      move = movesTableCombinationSkullSkull[moveIndex]
      break
    case 6:
      moveIndex = activePlayer.moves[5][0]
      move = movesTableCombinationSwordSkull[moveIndex]
      break
  }
  let playerDamage = move.damage;
  
  //dot
  if(move.dot > activePlayer.dot){
    activePlayer.dot = move.dot
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
      activeMonster.health = activeMonster.health - playerDamage;
    }
  }
  //apply damage next round
  if(move.damageNextRound > 0){
    activePlayer.damageNextRound = move.damageNextRound ;
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
  activePlayer.health += move.heal
  // set blocks
  activePlayer.blocks = move.block
  //reflect
  activePlayer.reflect = move.reflect
  //check for win
  if(activeMonster.health <= 0){
    return true
  }
  return false
 }
 
 function fightMonster(activePlayer, activeMonster, monsterRoll){
  //apply damage
  let moveIndex = monsterRoll-1
  let monsterDamage = activeMonster.moves[moveIndex].damage;

  //dot
  if(activeMonster.moves[monsterRoll-1].dot > 0){
    activeMonster.dot = activeMonster.moves[moveIndex].dot
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
  if(activeMonster.moves[moveIndex].damageNextRound > 0){
    activeMonster.damageNextRound = activeMonster.moves[moveIndex].damageNextRound;
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
  activeMonster.health += activeMonster.moves[moveIndex].heal
  // set blocks
  activeMonster.blocks = activeMonster.moves[moveIndex].block
  //reflect
  activeMonster.reflect = activeMonster.moves[moveIndex].reflect
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
      activePlayer.region = "Athos"
      break;
    case 4:
      activePlayer.region = "Drakan"
      break;
    case 5:
      activePlayer.region = "Talvar"
      break;
    case 6:
      activePlayer.region = "Nythoria"
      break;
    case 7:
      activePlayer.region = "Elysora"
      break;
  }
}

function generateLoot(){
  let gold
  if(game.round == 1){
    gold = randomNumber(1,2)
  }
  else if(game.round == 2){
    gold = randomNumber(2,3)
  }
  else if(game.round == 3){
    gold = randomNumber(3,4)
  }
  else{}
  return gold
}

 //help functions
 function randomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}