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
let lobby = [];
let game;
let playerList = [];
let viewerList = [];
let playerReadyList = []; 
let activePlayer = 0;
let playerCount = 0;
let playerRound = 0;

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
let questsBronzeNythoria = [];
let questsBronzeDrakan = [];
let questsBronzeTalvar = [];
let questsBronzeFrosgar = [];
let questsBronzeAthos = [];
let questsBronzeAridora = [];
let questsSilverNythoria = [];
let questsSilverDrakan = [];
let questsSilverTalvar = [];
let questsSilverFrosgar = [];
let questsSilverAthos = [];
let questsSilverAridora = [];
let questsGoldNythoria = [];
let questsGoldDrakan = [];
let questsGoldTalvar = [];
let questsGoldFrosgar = [];
let questsGoldAthos = [];
let questsGoldAridora = [];
let questMonsters = [];
let bossMonsters = [];
let bossMonsterState = {
  aridora: false,
  athos: false,
  drakan: false,
  frosgar: false,
  nythoria: false,
  talvar: false,
}


const { monsterTableBronze, monsterTableSilver, monsterTableGold, monsterTableQuests, monsterTableBoss } = monsterTables;
const { monsterTableBronzeNythoria, monsterTableBronzeDrakan, monsterTableBronzeTalvar, monsterTableBronzeFrosgar, monsterTableBronzeAthos, monsterTableBronzeAridora} = monsterTableBronze
const { monsterTableSilverNythoria, monsterTableSilverDrakan, monsterTableSilverTalvar, monsterTableSilverFrosgar, monsterTableSilverAthos, monsterTableSilverAridora} = monsterTableSilver
const { monsterTableGoldNythoria, monsterTableGoldDrakan, monsterTableGoldTalvar, monsterTableGoldFrosgar, monsterTableGoldAthos, monsterTableGoldAridora} = monsterTableGold
const { questTableBronze, questTableSilver, questTableGold } = questTables;
const { questTableBronzeNythoria, questTableBronzeDrakan, questTableBronzeTalvar, questTableBronzeFrosgar, questTableBronzeAthos, questTableBronzeAridora} = questTableBronze
const { questTableSilverNythoria, questTableSilverDrakan, questTableSilverTalvar, questTableSilverFrosgar, questTableSilverAthos, questTableSilverAridora} = questTableSilver
const { questTableGoldNythoria, questTableGoldDrakan, questTableGoldTalvar, questTableGoldFrosgar, questTableGoldAthos, questTableGoldAridora} = questTableGold
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
  constructor(region, playerImage, playerImageFull) {
    this.name = null;
    this.region = region;
    this.host = false;
    this.actions = 2;
    this.actionsUsed = {
      investigate: false,
      heal: false,
      changeIsland: false,
      quest: false,
      boss: false,
    };
    this.health = 10; 
    this.reputation = {
      athos: 0,
      aridora: 0,
      nythoria: 0,
      drakan: 0,
      talvar: 0,
      frosgar: 0,
    };
    this.gold = 0;
    this.goldLoot = 0;
    this.monstersKilled = 0;
    this.questsSolved = 0;
    this.victoryPoints = 0;
    this.blocks = 0;
    this.dot = 0;
    this.reflect = 0;
    this.damageNextRound = 0;
    this.picture = playerImage;
    this.pictureFull = playerImageFull;
    this.moves = [[1, []], [1, []], [1, []], [1, []], [1, []], [1, []]];
    this.clawLevel = 0;
    this.skullLevel = 0;
    this.magicLevel = 0;
    this.quest = null;
    this.playerIsActive = false;
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
  constructor(questType, questOfferer, questMiddleman, questReceiver, questRegion, questRegionDeliverGood, questRegionDeliverBad, questRewardGood, questRewardBad, questRewardDeny, optionGood, optionBad, optionDeny, questMonster, questMonsterText, questImpact, optionGoodSecond, optionBadSecond, imageMapGood, imageMapBad) {
    this.questType = questType;
    this.questOfferer = questOfferer;
    this.questMiddleman = questMiddleman;
    this.questReceiver = questReceiver;
    this.regionQuest = questRegion;
    this.questDeliverRegionGood = questRegionDeliverGood;
    this.questDeliverRegionBad = questRegionDeliverBad;
    this.optionGood = optionGood;
    this.optionBad = optionBad;
    this.optionDeny = optionDeny;
    this.imageMapGood = imageMapGood
    this.imageMapBad = imageMapBad
    this.rewardGood = questRewardGood;
    this.rewardBad = questRewardBad;
    this.rewardDeny = questRewardDeny;
    this.questMonster = questMonster;
    this.questMonsterText = questMonsterText;
    this.questImpact = questImpact;
    this.optionGoodSecond = optionGoodSecond;
    this.optionBadSecond = optionBadSecond;
    this.optionPicked = null;
    this.optionPickedDecision = null;
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
  
  socket.on('resetGame', function() {
    lobby = [];
    playerList = []; 
    playerReadyList = []; 
    viewerList = [];
    playerCount = 0;
    bossMonsterState = {
      aridora: false,
      athos: false,
      drakan: false,
      frosgar: false,
      nythoria: false,
      talvar: false,
    }
    console.log("reset game data")
  });

  socket.on('start', function() {
    socket.emit('join');
  })

  socket.on('returnToStart', function() {
    socket.emit('changeViewToStart');
  })

  socket.on('joinPlayer', function() {
    if(playerCount < 4){
      let region;
      let playerImage
      let playerImageFull
      switch (playerCount){
        case 0:
          playerImage = "src/assets/img/player/ranger_portrait.webp"
          playerImageFull = "src/assets/img/player/ranger_full.webp"
          region = "Athos";
          break
        case 1:
          playerImage = "src/assets/img/player/mage_portrait.webp"
          playerImageFull = "src/assets/img/player/mage_full.webp"
          region = "Nythoria";
          break
        case 2:
          playerImage = "src/assets/img/player/barbarian_portrait.webp"
          playerImageFull = "src/assets/img/player/barbarian_full.webp"
          region = "Frosgar";
          break
        case 3:
          playerImage = "src/assets/img/player/thief_portrait.webp"
          playerImageFull = "src/assets/img/player/thief_full.webp"
          region = "Drakan";
          break
      }
      playerCount++
      const playerObject = new Player(region, playerImage, playerImageFull);
      lobby[socket.id] = playerObject;
      playerList.push(lobby[socket.id]);
      playerReadyList.push(false);
      if (playerList.length == 1) {
        lobby[socket.id].host = true;
      }
      socket.emit("joinPlayerSuccessful")
    }
    else{
      socket.emit("joinPlayerUnsuccessful")
    }
  });
  
  socket.on('enterPlayerName', (playerName) => {
    lobby[socket.id].name = playerName
    console.log('Player joined: ', playerName);
  })




  socket.on('joinViewer', function() {
    socket.emit('joinViewerClient', socket.id);
    console.log('Viewer joined: ', socket.id);
    viewerList.push(socket.id);
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
      const identifiers = Object.keys(lobby).filter(id => lobby[id] instanceof Player);
      const randomIndex = randomNumber(0, playerList.length - 1);
      activePlayer = randomIndex;
      const randomIdentifier = identifiers[randomIndex];
      // Set the active player
      identifiers.forEach(id => {
        lobby[id].playerIsActive = (id === randomIdentifier);
      });
      identifiers.forEach(id => {
        io.to(id).emit("startGame");
        io.to(id).emit("updatePlayer", sanitizePlayer(lobby[id]));
      });
    }
  });
  

  socket.on("endAction", function() {
    const identifiers = Object.keys(lobby);
    let oldPlayer = identifiers[activePlayer]
    let newPlayer
    if(activePlayer < playerList.length-1){
      activePlayer += 1;
      newPlayer = identifiers[activePlayer];
    }
    else{
      newPlayer = identifiers[0];
      activePlayer = 0;
    }
    lobby[oldPlayer].actionsUsed.investigate = false;
    lobby[oldPlayer].actionsUsed.heal = false;
    lobby[oldPlayer].actionsUsed.quest = false;
    lobby[oldPlayer].actionsUsed.changeIsland = false;
    lobby[oldPlayer].actionsUsed.boss = false;
    lobby[oldPlayer].actions = 2;
    lobby[oldPlayer].playerIsActive = false;
    lobby[newPlayer].playerIsActive = true;
    io.to(oldPlayer).emit('updateClientView', 2);
    io.to(oldPlayer).emit("updatePlayer", lobby[oldPlayer]);
    io.to(newPlayer).emit('updateClientView', 2);
    io.to(newPlayer).emit("updatePlayer", lobby[newPlayer]);
    playerRound++
    if(playerRound == playerCount){
      io.emit('updateClientView', 9);
      playerRound = 0;
    }
  });

  // Update View
  socket.on('updateView', (comp) => {
    socket.emit('updateClientView', comp);
  });

  socket.on('questFight', function() {
    completeQuestFight(socket);
  });

  socket.on('bossFight', function() {
    bossFight(socket);
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

  socket.on("getPlayerStandings", function() {
    let playerStandings = getPlayerStandings()
    socket.emit("setPlayerStandings", playerStandings);
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

  socket.on("updateViewer", (encounter) => {
    emitChangeViewToViewer(encounter, socket)
  });

  // Generate Encounter
  socket.on("investigate", function() {
    const encounter = investigate(lobby[socket.id]);
    socket.emit("updatePlayer", sanitizePlayer(lobby[socket.id]));
    socket.emit("updateMonster", lobby[socket.id]);
    socket.emit("updateEncounter", encounter);
  
    viewerList.forEach(viewerSocketId => {
      const viewerSocket = io.sockets.sockets.get(viewerSocketId);  // Fetch the socket object
      if (viewerSocket) {
        viewerSocket.emit("updateEncounter", encounter);
        viewerSocket.emit("updatePlayer", sanitizePlayer(lobby[socket.id]));
        viewerSocket.emit("updateMonster", lobby[socket.id]);
      }
    });
  });
  
  

  // Change Region
  socket.on("changeRegion", async (region) => { 
    changeRegion(lobby[socket.id], region); 
    socket.emit("currentRegion", lobby[socket.id]);
  
    for (const viewerSocketId of viewerList) {
      const viewerSocket = io.sockets.sockets.get(viewerSocketId);
      if (viewerSocket) {
        viewerSocket.emit("changeRegion", lobby[socket.id].region);
        viewerSocket.emit("updateEncounter", "changeIsland");
        await sleep(5000);
        viewerSocket.emit("updateEncounter", "Logo");
      }
    }
  });

  // Option good
  socket.on("optionQuestGood", function() { 
    lobby[socket.id].quest.optionPicked = "Good";
    socket.emit("showMapClient")
    emitChangeViewToViewer("Logo", socket)
  });

  // Option bad
  socket.on("optionQuestBad", function() { 
    lobby[socket.id].quest.optionPicked = "Bad";
    emitChangeViewToViewer("Logo", socket)
  });

  socket.on("showMap", function() { 
      socket.emit("showMapClient");
  });

  socket.on("showMapViewer", function() { 
    if(lobby[socket.id].playerIsActive == true) {
      for (const viewerSocketId of viewerList) {
        const viewerSocket = io.sockets.sockets.get(viewerSocketId);
        if (viewerSocket) {
          viewerSocket.emit("updatePlayer", sanitizePlayer(lobby[socket.id]))
          viewerSocket.emit("updateEncounter", "Map");
          viewerSocket.emit("showMapViewer")
        }
      }
    }
  });


  // Deny quest
  socket.on("optionQuestDeny", function() { 
    lobby[socket.id].quest = null;
  });

  socket.on("manageQuest", function() { 
    socket.emit('updateClientView', 5);
    socket.emit('changeQuestView');
    manageQuest(socket, lobby[socket.id]);
    socket.emit("updatePlayer", lobby[socket.id]);
    emitChangeViewToViewer("Quest", socket)
  });

  socket.on("decisionGood", function() {
    lobby[socket.id].quest.optionPickedDecision = "Good"
    manageQuestDesicion(socket, lobby[socket.id]);
  });

  socket.on("decisionBad", function() { 
    lobby[socket.id].quest.optionPickedDecision = "Bad"
    manageQuestDesicion(socket, lobby[socket.id]);
  });

  socket.on("questComplete", function() { 
    completeQuest(lobby[socket.id])
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  socket.on("updateActions", (action) => {
    if (lobby[socket.id] && lobby[socket.id].actionsUsed) {
      lobby[socket.id].actions -= 1;
      switch (action) {
        case "investigate":
          lobby[socket.id].actionsUsed.investigate = true;
          break;
        case "heal":
          lobby[socket.id].actionsUsed.heal = true;
          break;
        case "quest":
          lobby[socket.id].actionsUsed.quest = true;
          break;
        case "changeIsland":
          lobby[socket.id].actionsUsed.changeIsland = true;
          break;
        case "boss":
          lobby[socket.id].actionsUsed.boss = true;
          break;
      }
      socket.emit("updatePlayer", sanitizePlayer(lobby[socket.id]));
    } else {
      console.error(`Player with socket ID ${socket.id} is not properly initialized.`);
    }
  });

  // heal player
  socket.on("healPlayer", function() {
    if(lobby[socket.id].health == 9){
      lobby[socket.id].health = lobby[socket.id].health + 1
    }
    else if(lobby[socket.id].health == 8){
      lobby[socket.id].health = lobby[socket.id].health + 2
    }
    else if(lobby[socket.id].health == 7){
      lobby[socket.id].health = lobby[socket.id].health + 3
    }
    else {
      lobby[socket.id].health = lobby[socket.id].health + ((Math.ceil((10-lobby[socket.id].health)/2) + 2))
    }
    socket.emit("updatePlayer", lobby[socket.id]);
  });

  // Dice roll
  socket.on("diceRollPlayer", (rollPlayer) => {
    diceRollPlayer(socket, lobby[socket.id], rollPlayer); 
  });

  socket.on("diceRollMonster", (rollMonster) => {
    diceRollMonster(socket, lobby[socket.id], rollMonster); 
  });

  socket.on("moveBossComplete", function() {
    io.emit('updateClientView', 2);
  });

  // Disconnect Handling
  socket.on('disconnect', () => {
    console.log('connection disconnected: ' + socket.id);
    delete lobby[socket.id];
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
  let monsterCount = 5; 
  
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
  // for (let i = 0; i < monsterCount; i++) {
  //   monstersSilverNythoria.push(new Monster(monsterTableSilverNythoria[i].name, monsterTableSilverNythoria[i].type, monsterTableSilverNythoria[i].health, monsterTableSilverNythoria[i].gold, monsterTableSilverNythoria[i].victoryPoints, monsterTableSilverNythoria[i].image, monsterTableSilverNythoria[i].moves));
  //   monstersSilverDrakan.push(new Monster(monsterTableSilverDrakan[i].name, monsterTableSilverDrakan[i].type, monsterTableSilverDrakan[i].health, monsterTableSilverDrakan[i].gold, monsterTableSilverDrakan[i].victoryPoints, monsterTableSilverDrakan[i].image, monsterTableSilverDrakan[i].moves));
  //   monstersSilverTalvar.push(new Monster(monsterTableSilverTalvar[i].name, monsterTableSilverTalvar[i].type, monsterTableSilverTalvar[i].health, monsterTableSilverTalvar[i].gold, monsterTableSilverTalvar[i].victoryPoints, monsterTableSilverTalvar[i].image, monsterTableSilverTalvar[i].moves));
  //   monstersSilverFrosgar.push(new Monster(monsterTableSilverFrosgar[i].name, monsterTableSilverFrosgar[i].type, monsterTableSilverFrosgar[i].health, monsterTableSilverFrosgar[i].gold, monsterTableSilverFrosgar[i].victoryPoints, monsterTableSilverFrosgar[i].image, monsterTableSilverFrosgar[i].moves));
  //   monstersSilverAthos.push(new Monster(monsterTableSilverAthos[i].name, monsterTableSilverAthos[i].type, monsterTableSilverAthos[i].health, monsterTableSilverAthos[i].gold, monsterTableSilverAthos[i].victoryPoints, monsterTableSilverAthos[i].image, monsterTableSilverAthos[i].moves));
  //   monstersSilverAridora.push(new Monster(monsterTableSilverAridora[i].name, monsterTableSilverAridora[i].type, monsterTableSilverAridora[i].health, monsterTableSilverAridora[i].gold, monsterTableSilverAridora[i].victoryPoints, monsterTableSilverAridora[i].image, monsterTableSilverAridora[i].moves));
  // }

  // Initialize Gold monsters
  // for (let i = 0; i < monsterCount; i++) {
  //   monstersGoldNythoria.push(new Monster(monsterTableGoldNythoria[i].name, monsterTableGoldNythoria[i].type, monsterTableGoldNythoria[i].health, monsterTableGoldNythoria[i].gold, monsterTableGoldNythoria[i].victoryPoints, monsterTableGoldNythoria[i].image, monsterTableGoldNythoria[i].moves));
  //   monstersGoldDrakan.push(new Monster(monsterTableGoldDrakan[i].name, monsterTableGoldDrakan[i].type, monsterTableGoldDrakan[i].health, monsterTableGoldDrakan[i].gold, monsterTableGoldDrakan[i].victoryPoints, monsterTableGoldDrakan[i].image, monsterTableGoldDrakan[i].moves));
  //   monstersGoldTalvar.push(new Monster(monsterTableGoldTalvar[i].name, monsterTableGoldTalvar[i].type, monsterTableGoldTalvar[i].health, monsterTableGoldTalvar[i].gold, monsterTableGoldTalvar[i].victoryPoints, monsterTableGoldTalvar[i].image, monsterTableGoldTalvar[i].moves));
  //   monstersGoldFrosgar.push(new Monster(monsterTableGoldFrosgar[i].name, monsterTableGoldFrosgar[i].type, monsterTableGoldFrosgar[i].health, monsterTableGoldFrosgar[i].gold, monsterTableGoldFrosgar[i].victoryPoints, monsterTableGoldFrosgar[i].image, monsterTableGoldFrosgar[i].moves));
  //   monstersGoldAthos.push(new Monster(monsterTableGoldAthos[i].name, monsterTableGoldAthos[i].type, monsterTableGoldAthos[i].health, monsterTableGoldAthos[i].gold, monsterTableGoldAthos[i].victoryPoints, monsterTableGoldAthos[i].image, monsterTableGoldAthos[i].moves));
  //   monstersGoldAridora.push(new Monster(monsterTableGoldAridora[i].name, monsterTableGoldAridora[i].type, monsterTableGoldAridora[i].health, monsterTableGoldAridora[i].gold, monsterTableGoldAridora[i].victoryPoints, monsterTableGoldAridora[i].image, monsterTableGoldAridora[i].moves));
  // }

  // Initialize Quest monsters
   for (let i = 0; i < monsterTableQuests.length; i++) {
     questMonsters.push(new Monster(monsterTableQuests[i].name, monsterTableQuests[i].type, monsterTableQuests[i].health, monsterTableQuests[i].gold, monsterTableQuests[i].victoryPoints, monsterTableQuests[i].image, monsterTableQuests[i].moves));
    }

  // Initialize Boss monsters
   for (let i = 0; i < monsterTableBoss.length; i++) {
    bossMonsters.push(new Monster(monsterTableBoss[i].name, monsterTableBoss[i].type, monsterTableBoss[i].health, monsterTableBoss[i].gold, monsterTableBoss[i].victoryPoints, monsterTableBoss[i].image, monsterTableBoss[i].moves));
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
  let questCount = 4; 
  
  // Initialize Bronze monsters
  for (let i = 0; i < questCount; i++) {
    questsBronzeDrakan.push(new Quest(questTableBronzeDrakan[i].questType, questTableBronzeDrakan[i].questOfferer, questTableBronzeDrakan[i].questMiddleman, questTableBronzeDrakan[i].questReceiver, questTableBronzeDrakan[i].regions.questRegion, questTableBronzeDrakan[i].regions.questRegionDeliverGood, questTableBronzeDrakan[i].regions.questRegionDeliverBad, questTableBronzeDrakan[i].questRewardGood, questTableBronzeDrakan[i].questRewardBad, questTableBronzeDrakan[i].questRewardDeny, questTableBronzeDrakan[i].optionGood, questTableBronzeDrakan[i].optionBad, questTableBronzeDrakan[i].optionDeny, questTableBronzeDrakan[i].questMonster, questTableBronzeDrakan[i].questMonsterText, questTableBronzeDrakan[i].questImpact, questTableBronzeDrakan[i].optionGoodSecond, questTableBronzeDrakan[i].optionBadSecond, questTableBronzeDrakan[i].imageMapGood, questTableBronzeDrakan[i].imageMapBad));
    questsBronzeTalvar.push(new Quest(questTableBronzeTalvar[i].questType, questTableBronzeTalvar[i].questOfferer, questTableBronzeTalvar[i].questMiddleman, questTableBronzeTalvar[i].questReceiver, questTableBronzeTalvar[i].regions.questRegion, questTableBronzeTalvar[i].regions.questRegionDeliverGood, questTableBronzeTalvar[i].regions.questRegionDeliverBad, questTableBronzeTalvar[i].questRewardGood, questTableBronzeTalvar[i].questRewardBad, questTableBronzeTalvar[i].questRewardDeny, questTableBronzeTalvar[i].optionGood, questTableBronzeTalvar[i].optionBad, questTableBronzeTalvar[i].optionDeny, questTableBronzeTalvar[i].questMonster, questTableBronzeTalvar[i].questMonsterText, questTableBronzeTalvar[i].questImpact, questTableBronzeTalvar[i].optionGoodSecond, questTableBronzeTalvar[i].optionBadSecond, questTableBronzeTalvar[i].imageMapGood, questTableBronzeTalvar[i].imageMapBad));
    questsBronzeAridora.push(new Quest(questTableBronzeAridora[i].questType, questTableBronzeAridora[i].questOfferer, questTableBronzeAridora[i].questMiddleman, questTableBronzeAridora[i].questReceiver,  questTableBronzeAridora[i].regions.questRegion, questTableBronzeAridora[i].regions.questRegionDeliverGood, questTableBronzeAridora[i].regions.questRegionDeliverBad, questTableBronzeAridora[i].questRewardGood, questTableBronzeAridora[i].questRewardBad, questTableBronzeAridora[i].questRewardDeny, questTableBronzeAridora[i].optionGood, questTableBronzeAridora[i].optionBad, questTableBronzeAridora[i].optionDeny, questTableBronzeAridora[i].questMonster, questTableBronzeAridora[i].questMonsterText, questTableBronzeAridora[i].questImpact, questTableBronzeAridora[i].optionGoodSecond, questTableBronzeAridora[i].optionBadSecond, questTableBronzeAridora[i].imageMapGood, questTableBronzeAridora[i].imageMapBad));
    questsBronzeAthos.push(new Quest(questTableBronzeAthos[i].questType, questTableBronzeAthos[i].questOfferer, questTableBronzeAthos[i].questMiddleman, questTableBronzeAthos[i].questReceiver, questTableBronzeAthos[i].regions.questRegion, questTableBronzeAthos[i].regions.questRegionDeliverGood, questTableBronzeAthos[i].regions.questRegionDeliverBad, questTableBronzeAthos[i].questRewardGood, questTableBronzeAthos[i].questRewardBad, questTableBronzeAthos[i].questRewardDeny, questTableBronzeAthos[i].optionGood, questTableBronzeAthos[i].optionBad, questTableBronzeAthos[i].optionDeny, questTableBronzeAthos[i].questMonster, questTableBronzeAthos[i].questMonsterText, questTableBronzeAthos[i].questImpact, questTableBronzeAthos[i].optionGoodSecond, questTableBronzeAthos[i].optionBadSecond, questTableBronzeAthos[i].imageMapGood, questTableBronzeAthos[i].imageMapBad));
    questsBronzeNythoria.push(new Quest(questTableBronzeNythoria[i].questType, questTableBronzeNythoria[i].questOfferer, questTableBronzeNythoria[i].questMiddleman, questTableBronzeNythoria[i].questReceiver, questTableBronzeNythoria[i].regions.questRegion, questTableBronzeNythoria[i].regions.questRegionDeliverGood, questTableBronzeNythoria[i].regions.questRegionDeliverBad, questTableBronzeNythoria[i].questRewardGood, questTableBronzeNythoria[i].questRewardBad, questTableBronzeNythoria[i].questRewardDeny, questTableBronzeNythoria[i].optionGood, questTableBronzeNythoria[i].optionBad, questTableBronzeNythoria[i].optionDeny, questTableBronzeNythoria[i].questMonster, questTableBronzeNythoria[i].questMonsterText, questTableBronzeNythoria[i].questImpact, questTableBronzeNythoria[i].optionGoodSecond, questTableBronzeNythoria[i].optionBadSecond, questTableBronzeNythoria[i].imageMapGood, questTableBronzeNythoria[i].imageMapBad));
    questsBronzeFrosgar.push(new Quest(questTableBronzeFrosgar[i].questType, questTableBronzeFrosgar[i].questOfferer, questTableBronzeFrosgar[i].questMiddleman, questTableBronzeFrosgar[i].questReceiver, questTableBronzeFrosgar[i].regions.questRegion, questTableBronzeFrosgar[i].regions.questRegionDeliverGood, questTableBronzeFrosgar[i].regions.questRegionDeliverBad, questTableBronzeFrosgar[i].questRewardGood, questTableBronzeFrosgar[i].questRewardBad, questTableBronzeFrosgar[i].questRewardDeny, questTableBronzeFrosgar[i].optionGood, questTableBronzeFrosgar[i].optionBad, questTableBronzeFrosgar[i].optionDeny, questTableBronzeFrosgar[i].questMonster, questTableBronzeFrosgar[i].questMonsterText, questTableBronzeFrosgar[i].questImpact, questTableBronzeFrosgar[i].optionGoodSecond, questTableBronzeFrosgar[i].optionBadSecond, questTableBronzeFrosgar[i].imageMapGood, questTableBronzeFrosgar[i].imageMapBad));
  }

  // // Initialize Silver quests
  // for (let i = 0; i < questCount; i++) {
  //   questsSilverNythoria.push(new Quest(questTableSilverNythoria[i].questType, questTableSilverNythoria[i].questOfferer, questTableSilverNythoria[i].questMiddleman, questTableSilverNythoria[i].questReceiver, questTableSilverNythoria[i].regions.questRegion, questTableSilverNythoria[i].regions.questRegionDeliverGood, questTableSilverNythoria[i].regions.questRegionDeliverBad, questTableSilverNythoria[i].rewardGood, questTableSilverNythoria[i].rewardBad, questTableSilverNythoria[i].rewardDeny, questTableSilverNythoria[i].optionGood, questTableSilverNythoria[i].optionBad, questTableSilverNythoria[i].optionDeny, questTableSilverNythoria[i].questMonster, questTableSilverNythoria[i].questMonsterText, questTableSilverNythoria[i].questImpact, questTableSilverNythoria[i].optionGoodSecond, questTableSilverNythoria[i].optionBadSecond));
  //   questsSilverDrakan.push(new Quest(questTableSilverDrakan[i].questType, questTableSilverDrakan[i].questOfferer, questTableSilverDrakan[i].questMiddleman, questTableSilverDrakan[i].questReceiver,questTableSilverDrakan[i].regions.questRegion, questTableSilverDrakan[i].regions.questRegionDeliverGood, questTableSilverDrakan[i].regions.questRegionDeliverBad, questTableSilverDrakan[i].rewardGood, questTableSilverDrakan[i].rewardBad, questTableSilverDrakan[i].rewardDeny, questTableSilverDrakan[i].optionGood, questTableSilverDrakan[i].optionBad, questTableSilverDrakan[i].optionDeny, questTableSilverDrakan[i].questMonster, questTableSilverDrakan[i].questMonsterText, questTableSilverDrakan[i].questImpact, questTableSilverDrakan[i].optionGoodSecond, questTableSilverDrakan[i].optionBadSecond));
  //   questsSilverTalvar.push(new Quest(questTableSilverTalvar[i].questType, questTableSilverTalvar[i].questOfferer, questTableSilverTalvar[i].questMiddleman, questTableSilverTalvar[i].questReceiver, questTableSilverTalvar[i].regions.questRegion, questTableSilverTalvar[i].regions.questRegionDeliverGood, questTableSilverTalvar[i].regions.questRegionDeliverBad, questTableSilverTalvar[i].rewardGood, questTableSilverTalvar[i].rewardBad, questTableSilverTalvar[i].rewardDeny, questTableSilverTalvar[i].optionGood, questTableSilverTalvar[i].optionBad, questTableSilverTalvar[i].optionDeny, questTableSilverTalvar[i].questMonster, questTableSilverTalvar[i].questMonsterText, questTableSilverTalvar[i].questImpact, questTableSilverTalvar[i].optionGoodSecond, questTableSilverTalvar[i].optionBadSecond));
  //   questsSilverFrosgar.push(new Quest(questTableSilverFrosgar[i].questType, questTableSilverFrosgar[i].questOfferer, questTableSilverFrosgar[i].questMiddleman, questTableSilverFrosgar[i].questReceiver, questTableSilverFrosgar[i].regions.questRegion, questTableSilverFrosgar[i].regions.questRegionDeliverGood, questTableSilverFrosgar[i].regions.questRegionDeliverBad, questTableSilverFrosgar[i].rewardGood, questTableSilverFrosgar[i].rewardBad, questTableSilverFrosgar[i].rewardDeny, questTableSilverFrosgar[i].optionGood, questTableSilverFrosgar[i].optionBad, questTableSilverFrosgar[i].optionDeny, questTableSilverFrosgar[i].questMonster, questTableSilverFrosgar[i].questMonsterText, questTableSilverFrosgar[i].questImpact, questTableSilverFrosgar[i].optionGoodSecond, questTableSilverFrosgar[i].optionBadSecond));
  //   questsSilverAthos.push(new Quest(questTableSilverAthos[i].questType, questTableSilverAthos[i].questOfferer, questTableSilverAthos[i].questMiddleman, questTableSilverAthos[i].questReceiver, questTableSilverAthos[i].regions.questRegion, questTableSilverAthos[i].regions.questRegionDeliverGood, questTableSilverAthos[i].regions.questRegionDeliverBad, questTableSilverAthos[i].rewardGood, questTableSilverAthos[i].rewardBad, questTableSilverAthos[i].rewardDeny, questTableSilverAthos[i].optionGood, questTableSilverAthos[i].optionBad, questTableSilverAthos[i].optionDeny, questTableSilverAthos[i].questMonster, questTableSilverAthos[i].questMonsterText, questTableSilverAthos[i].questImpact, questTableSilverAthos[i].optionGoodSecond, questTableSilverAthos[i].optionBadSecond));
  //   questsSilverAridora.push(new Quest(questTableSilverAridora[i].questType, questTableSilverAridora[i].questOfferer, questTableSilverAridora[i].questMiddleman, questTableSilverAridora[i].questReceiver, questTableSilverAridora[i].regions.questRegion, questTableSilverAridora[i].regions.questRegionDeliverGood, questTableSilverAridora[i].regions.questRegionDeliverBad, questTableSilverAridora[i].rewardGood, questTableSilverAridora[i].rewardBad, questTableSilverAridora[i].rewardDeny, questTableSilverAridora[i].optionGood, questTableSilverAridora[i].optionBad, questTableSilverAridora[i].optionDeny, questTableSilverAridora[i].questMonster, questTableSilverAridora[i].questMonsterText, questTableSilverAridora[i].questImpact, questTableSilverAridora[i].optionGoodSecond, questTableSilverAridora[i].optionBadSecond));
  // }

  // // Initialize Gold quests
  // for (let i = 0; i < questCount; i++) {
  //   questsGoldNythoria.push(new Quest(questTableGoldNythoria[i].questType, questTableGoldNythoria[i].questOfferer, questTableGoldNythoria[i].questMiddleman, questTableGoldNythoria[i].questReceiver, questTableGoldNythoria[i].regions.questRegion, questTableGoldNythoria[i].regions.questRegionDeliverGood, questTableGoldNythoria[i].regions.questRegionDeliverBad, questTableGoldNythoria[i].rewardGood, questTableGoldNythoria[i].rewardBad, questTableGoldNythoria[i].rewardDeny, questTableGoldNythoria[i].optionGood, questTableGoldNythoria[i].optionBad, questTableGoldNythoria[i].optionDeny, questTableGoldNythoria[i].questMonster, questTableGoldNythoria[i].questMonsterText, questTableGoldNythoria[i].questImpact, questTableGoldNythoria[i].optionGoodSecond, questTableGoldNythoria[i].optionBadSecond));
  //   questsGoldDrakan.push(new Quest(questTableGoldDrakan[i].questType, questTableGoldDrakan[i].questOfferer, questTableGoldDrakan[i].questMiddleman, questTableGoldDrakan[i].questReceiver, questTableGoldDrakan[i].regions.questRegion, questTableGoldDrakan[i].regions.questRegionDeliverGood, questTableGoldDrakan[i].regions.questRegionDeliverBad, questTableGoldDrakan[i].rewardGood, questTableGoldDrakan[i].rewardBad, questTableGoldDrakan[i].rewardDeny, questTableGoldDrakan[i].optionGood, questTableGoldDrakan[i].optionBad, questTableGoldDrakan[i].optionDeny, questTableGoldDrakan[i].questMonster, questTableGoldDrakan[i].questMonsterText, questTableGoldDrakan[i].questImpact, questTableGoldDrakan[i].optionGoodSecond, questTableGoldDrakan[i].optionBadSecond));
  //   questsGoldTalvar.push(new Quest(questTableGoldTalvar[i].questType, questTableGoldTalvar[i].questOfferer, questTableGoldTalvar[i].questMiddleman, questTableGoldTalvar[i].questReceiver, questTableGoldTalvar[i].regions.questRegion, questTableGoldTalvar[i].regions.questRegionDeliverGood, questTableGoldTalvar[i].regions.questRegionDeliverBad, questTableGoldTalvar[i].rewardGood, questTableGoldTalvar[i].rewardBad, questTableGoldTalvar[i].rewardDeny, questTableGoldTalvar[i].optionGood, questTableGoldTalvar[i].optionBad, questTableGoldTalvar[i].optionDeny, questTableGoldTalvar[i].questMonster, questTableGoldTalvar[i].questMonsterText, questTableGoldTalvar[i].questImpact, questTableGoldTalvar[i].optionGoodSecond, questTableGoldTalvar[i].optionBadSecond));
  //   questsGoldFrosgar.push(new Quest(questTableGoldFrosgar[i].questType, questTableGoldFrosgar[i].questOfferer, questTableGoldFrosgar[i].questMiddleman, questTableGoldFrosgar[i].questReceiver, questTableGoldFrosgar[i].regions.questRegion, questTableGoldFrosgar[i].regions.questRegionDeliverGood, questTableGoldFrosgar[i].regions.questRegionDeliverBad, questTableGoldFrosgar[i].rewardGood, questTableGoldFrosgar[i].rewardBad, questTableGoldFrosgar[i].rewardDeny, questTableGoldFrosgar[i].optionGood, questTableGoldFrosgar[i].optionBad, questTableGoldFrosgar[i].optionDeny, questTableGoldFrosgar[i].questMonster, questTableGoldFrosgar[i].questMonsterText, questTableGoldFrosgar[i].questImpact, questTableGoldFrosgar[i].optionGoodSecond, questTableGoldFrosgar[i].optionBadSecond));
  //   questsGoldAthos.push(new Quest(questTableGoldAthos[i].questType, questTableGoldAthos[i].questOfferer, questTableGoldAthos[i].questMiddleman, questTableGoldAthos[i].questReceiver, questTableGoldAthos[i].regions.questRegion, questTableGoldAthos[i].regions.questRegionDeliverGood, questTableGoldAthos[i].regions.questRegionDeliverBad, questTableGoldAthos[i].rewardGood, questTableGoldAthos[i].rewardBad, questTableGoldAthos[i].rewardDeny, questTableGoldAthos[i].optionGood, questTableGoldAthos[i].optionBad, questTableGoldAthos[i].optionDeny, questTableGoldAthos[i].questMonster, questTableGoldAthos[i].questMonsterText, questTableGoldAthos[i].questImpact, questTableGoldAthos[i].optionGoodSecond, questTableGoldAthos[i].optionBadSecond));
  //   questsGoldAridora.push(new Quest(questTableGoldAridora[i].questType, questTableGoldAridora[i].questOfferer, questTableGoldAridora[i].questMiddleman, questTableGoldAridora[i].questReceiver, questTableGoldAridora[i].regions.questRegion, questTableGoldAridora[i].regions.questRegionDeliverGood, questTableGoldAridora[i].regions.questRegionDeliverBad, questTableGoldAridora[i].rewardGood, questTableGoldAridora[i].rewardBad, questTableGoldAridora[i].rewardDeny, questTableGoldAridora[i].optionGood, questTableGoldAridora[i].optionBad, questTableGoldAridora[i].optionDeny, questTableGoldAridora[i].questMonster, questTableGoldAridora[i].questMonsterText, questTableGoldAridora[i].questImpact, questTableGoldAridora[i].optionGoodSecond, questTableGoldAridora[i].optionBadSecond));
  // }

}

function getRandomQuest(playerRegion, round){
  let quest
  let rndNumber
  switch (playerRegion) {
    case "Nythoria":
        switch (round) {
            case 1:
                rndNumber = randomNumber(0, questsBronzeNythoria.length - 1);
                quest = questsBronzeNythoria[rndNumber];
                break;
            case 2:
                rndNumber = randomNumber(0, questsSilverNythoria.length - 1);
                quest = questsSilverNythoria[rndNumber];
                break;
            case 3:
                rndNumber = randomNumber(0, questsGoldNythoria.length - 1);
                quest = questsGoldNythoria[rndNumber];
                break;
        }
        break;
    case "Drakan":
        switch (round) {
            case 1:
                rndNumber = randomNumber(0, questsBronzeDrakan.length - 1);
                quest = questsBronzeDrakan[rndNumber];
                break;
            case 2:
                rndNumber = randomNumber(0, questsSilverDrakan.length - 1);
                quest = questsSilverDrakan[rndNumber];
                break;
            case 3:
                rndNumber = randomNumber(0, questsGoldDrakan.length - 1);
                quest = questsGoldDrakan[rndNumber];
                break;
        }
        break;
    case "Talvar":
        switch (round) {
            case 1:
                rndNumber = randomNumber(0, questsBronzeTalvar.length - 1);
                quest = questsBronzeTalvar[rndNumber];
                break;
            case 2:
                rndNumber = randomNumber(0, questsSilverTalvar.length - 1);
                quest = questsSilverTalvar[rndNumber];
                break;
            case 3:
                rndNumber = randomNumber(0, questsGoldTalvar.length - 1);
                quest = questsGoldTalvar[rndNumber];
                break;
        }
        break;
    case "Frosgar":
        switch (round) {
            case 1:
                rndNumber = randomNumber(0, questsBronzeFrosgar.length - 1);
                quest = questsBronzeFrosgar[rndNumber];
                break;
            case 2:
                rndNumber = randomNumber(0, questsSilverFrosgar.length - 1);
                quest = questsSilverFrosgar[rndNumber];
                break;
            case 3:
                rndNumber = randomNumber(0, questsGoldFrosgar.length - 1);
                quest = questsGoldFrosgar[rndNumber];
                break;
        }
        break;
    case "Athos":
        switch (round) {
            case 1:
                rndNumber = randomNumber(0, questsBronzeAthos.length - 1);
                quest = questsBronzeAthos[rndNumber];
                break;
            case 2:
                rndNumber = randomNumber(0, questsSilverAthos.length - 1);
                quest = questsSilverAthos[rndNumber];
                break;
            case 3:
                rndNumber = randomNumber(0, questsGoldAthos.length - 1);
                quest = questsGoldAthos[rndNumber];
                break;
        }
        break;
    case "Aridora":
        switch (round) {
            case 1:
                rndNumber = randomNumber(0, questsBronzeAridora.length - 1);
                quest = questsBronzeAridora[rndNumber];
                break;
            case 2:
                rndNumber = randomNumber(0, questsSilverAridora.length - 1);
                quest = questsSilverAridora[rndNumber];
                break;
            case 3:
                rndNumber = randomNumber(0, questsGoldAridora.length - 1);
                quest = questsGoldAridora[rndNumber];
                break;
        }
        break;
    default:
        console.error("Invalid player region:", playerRegion);
        quest = null;
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
  return encounter
}

function generateEncounter(activePlayer) {
  const random = Math.random();
  let monsterProbability 
  let lootProbability
  let questProbability 

  if (activePlayer.quest != null){
    monsterProbability = 0.8
    lootProbability = 0.2
    questProbability = 0.0
  }
  else{
    monsterProbability = 0.2
    lootProbability = 0.1
    questProbability = 0.7
  }

  let encounters = [
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


//start quest
function startQuest(activePlayer){
  activePlayer.quest = Object.assign({}, getRandomQuest(activePlayer.region, game.round));
  activePlayer.quest.questStep = "Offer"
}

//manage Quest
function manageQuest(socket, activePlayer){
  if(activePlayer.quest.optionPicked == "Good"){
    switch(activePlayer.quest.optionGood.optionType) {
      case "Deliver":
        activePlayer.quest.questStep = "Deliver"
        socket.emit("updatePlayer", activePlayer);
        socket.emit("updateQuestView")
        break;
      case "DeliverMonster":
        activePlayer.quest.questStep = "Fight"
        let activeMonster = Object.assign({}, questMonsters[activePlayer.quest.questMonster]);
        startFight(activePlayer, activeMonster);
        socket.emit("updatePlayer", activePlayer);
        socket.emit("updateQuestView")
        break;
      case "DeliverDecision":
        activePlayer.quest.questStep = "Desicion"
        socket.emit("updatePlayer", activePlayer);
        if(activePlayer.quest.optionPicked == "Good"){
          socket.emit("updateQuestDecision", "Good")
          socket.emit("updateQuestView")
        }
        else{
          socket.emit("updateQuestDecision", "Bad")
          socket.emit("updateQuestView")
        }
        break;
      case "Return":
        if(activePlayer.quest.questFlag == false){
          activePlayer.quest.questFlag = true
          activePlayer.quest.questStep = "Middleman"
          socket.emit("updatePlayer", activePlayer);
          socket.emit("updateQuestView")
        }
        else{
          activePlayer.quest.questStep = "Return"
          socket.emit("updatePlayer", activePlayer);
          socket.emit("updateQuestView")
        }
        break;
      case "ReturnMonster":
        if(activePlayer.quest.questFlag == false){
          activePlayer.quest.questFlag = true
          activePlayer.quest.questStep = "Fight"
          let activeMonster = Object.assign({}, questMonsters[activePlayer.quest.questMonster]);
          startFight(activePlayer, activeMonster);
          socket.emit("updatePlayer", activePlayer);
          socket.emit("updateQuestView")
        }
        else{
          activePlayer.quest.questStep = "Return"
          socket.emit("updatePlayer", activePlayer);
          socket.emit("updateQuestView")
        }
        break;
    }
  }
  if(activePlayer.quest.optionPicked == "Bad"){
    switch(activePlayer.quest.optionBad.optionType) {
      case "Deliver":
        activePlayer.quest.questStep = "Deliver"
        socket.emit("updatePlayer", activePlayer);
        socket.emit("updateQuestView")
        break;
      case "DeliverMonster":
        activePlayer.quest.questStep = "Fight"
        let activeMonster = Object.assign({}, questMonsters[activePlayer.quest.questMonster]);
        startFight(activePlayer, activeMonster);
        socket.emit("updatePlayer", activePlayer);
        socket.emit("updateQuestView")
        break;
      case "Return":
        if(activePlayer.quest.questFlag == false){
          activePlayer.quest.questFlag = true
          activePlayer.quest.questStep = "Middleman"
          socket.emit("updatePlayer", activePlayer);
          socket.emit("updateQuestView")
        }
        else{
          activePlayer.quest.questStep = "Return"
          socket.emit("updatePlayer", activePlayer);
          socket.emit("updateQuestView")
        }
        break;
      case "ReturnMonster":
        if(activePlayer.quest.questFlag == false){
          activePlayer.quest.questFlag = true
          activePlayer.quest.questStep = "Fight"
          let activeMonster = Object.assign({}, questMonsters[activePlayer.quest.questMonster]);
          startFight(activePlayer, activeMonster);
          socket.emit("updatePlayer", activePlayer);
          socket.emit("updateQuestView")
        }
        else{
          activePlayer.quest.questStep = "Return"
          socket.emit("updatePlayer", activePlayer);
          socket.emit("updateQuestView")
        }
        break;
    }
  }
}

function manageQuestDesicion(socket, activePlayer){
  if(activePlayer.quest.optionPickedDecision == "Good"){
    switch(activePlayer.quest.optionGoodSecond.optionType) {
      case "DeliverMonster":
        activePlayer.quest.questStep = "Fight"
        console.log(questMonsters)
        console.log(activePlayer.quest.questMonster)
        console.log(questMonsters[activePlayer.quest.questMonster])
        let activeMonster = Object.assign({}, questMonsters[activePlayer.quest.questMonster]);
        startFight(activePlayer, activeMonster);
        socket.emit("updatePlayer", activePlayer);
        socket.emit("updateQuestView")
        break
      case "Reward":
        activePlayer.quest.questStep = "RewardDesicion"
        socket.emit("updatePlayer", activePlayer);
        socket.emit("updateQuestView")
        break
    }
  }
  else{
    switch(activePlayer.quest.optionBadSecond.optionType) {
      case "DeliverMonster":
        activePlayer.quest.questStep = "Fight"
        let activeMonster = Object.assign({}, questMonsters[activePlayer.quest.questMonster]);
        startFight(activePlayer, activeMonster);
        socket.emit("updatePlayer", activePlayer);
        socket.emit("updateQuestView")
        break
      case "Reward":
        activePlayer.quest.questStep = "RewardDesicion"
        socket.emit("updatePlayer", activePlayer);
        socket.emit("updateQuestView")
        break
    }
  }
}

function completeQuest(activePlayer){
  if(activePlayer.quest.optionPicked == "Good"){
    activePlayer.gold += activePlayer.quest.rewardGood.gold
    switch (activePlayer.quest.regionQuest){
      case "Athos":
        activePlayer.reputation.athos += activePlayer.quest.rewardGood.reputation
        break
      case "Aridora":
        activePlayer.reputation.aridora += activePlayer.quest.rewardGood.reputation
        break
      case "Nythoria":
        activePlayer.reputation.nythoria += activePlayer.quest.rewardGood.reputation
        break
      case "Drakan":
        activePlayer.reputation.drakan += activePlayer.quest.rewardGood.reputation
        break
      case "Talvar":
        activePlayer.reputation.talvar += activePlayer.quest.rewardGood.reputation
        break
      case "Frosgar":
        activePlayer.reputation.frosgar += activePlayer.quest.rewardGood.reputation
        break
    }
    if(activePlayer.quest.rewardGood.move != "-"){
      switch (activePlayer.quest.rewardGood.move[0]){
        case "SwordSword":
          activePlayer.moves[0][1].push(movesTableCombinationSwordSword[activePlayer.quest.rewardGood.move[1]])
          break
        case "SwordMagic":
          activePlayer.moves[1][1].push(movesTableCombinationSwordMagic[activePlayer.quest.rewardGood.move[1]])
          break
        case "MagicMagic":
          activePlayer.moves[2][1].push(movesTableCombinationMagicMagic[activePlayer.quest.rewardGood.move[1]])
          break
        case "MagicSkull":
          activePlayer.moves[3][1].push(movesTableCombinationMagicSkull[activePlayer.quest.rewardGood.move[1]])
          break
        case "SkullSkull":
          activePlayer.moves[4][1].push(movesTableCombinationSkullSkull[activePlayer.quest.rewardGood.move[1]])
          break
        case "SwordSkull":
          activePlayer.moves[5][1].push(movesTableCombinationSwordSkull[activePlayer.quest.rewardGood.move[1]])
          break
      }
    }
    activePlayer.questsSolved += 1;
    activePlayer.quest = null;
    return
  }
  else{
    activePlayer.gold += activePlayer.quest.rewardBad.gold
    switch (activePlayer.quest.regionQuest){
      case "Athos":
        activePlayer.reputation.athos += activePlayer.quest.rewardBad.reputation
        break
      case "Aridora":
        activePlayer.reputation.aridora += activePlayer.quest.rewardBad.reputation
        break
      case "Nythoria":
        activePlayer.reputation.nythoria += activePlayer.quest.rewardBad.reputation
        break
      case "Drakan":
        activePlayer.reputation.drakan += activePlayer.quest.rewardBad.reputation
        break
      case "Talvar":
        activePlayer.reputation.talvar += activePlayer.quest.rewardBad.reputation
        break
      case "Frosgar":
        activePlayer.reputation.frosgar += activePlayer.quest.rewardBad.reputation
        break
    }
    activePlayer.questsSolved += 1;
    activePlayer.quest = null;
    return
  }
}

//start fight
function startFight(activePlayer, activeMonster){
  activePlayer.fight = new Fight(activeMonster);
}

function bossFight(socket){
  let bossMonster
  switch (lobby[socket.id].region){
    case "Athos":
      bossMonster = Object.assign({}, bossMonsters[1])
      startFight(lobby[socket.id], bossMonster)
      break
    case "Aridora":
      bossMonster = Object.assign({}, bossMonsters[2])
      startFight(lobby[socket.id], bossMonster)
      break
    case "Nythoria":
      bossMonster = Object.assign({}, bossMonsters[3])
      startFight(lobby[socket.id], bossMonster)
      break
    case "Drakan":
      bossMonster = Object.assign({}, bossMonsters[4])
      startFight(lobby[socket.id], bossMonster)
      break
    case "Talvar":
      bossMonster = Object.assign({}, bossMonsters[5])
      startFight(lobby[socket.id], bossMonster)
      break
    case "Frosgar":
      bossMonster = Object.assign({}, bossMonsters[6])
      startFight(lobby[socket.id], bossMonster)
      break
  }
}

//Fight rolls
function diceRollPlayer(socket, activePlayer, rollPlayer) {
  let winner = fightPlayer(activePlayer, activePlayer.fight.activeMonster, rollPlayer);
  socket.emit("updatePlayer", activePlayer);
  socket.emit("updateMonster", activePlayer);
  viewerList.forEach(viewerSocketId => {
    const viewerSocket = io.sockets.sockets.get(viewerSocketId);  // Fetch the socket object
    if (viewerSocket) {
      viewerSocket.emit("updatePlayer", activePlayer)
      viewerSocket.emit("updateMonster", activePlayer)
      viewerSocket.emit("changeTurn")
    }
  });
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
  viewerList.forEach(viewerSocketId => {
    const viewerSocket = io.sockets.sockets.get(viewerSocketId);  // Fetch the socket object
    if (viewerSocket) {
      viewerSocket.emit("updatePlayer", activePlayer)
      viewerSocket.emit("updateMonster", activePlayer)
      viewerSocket.emit("changeTurn")
    }
  });
  if (winner) {
    socket.emit("fightWinner", false)
    activePlayer.health = 5;
    return
  }
  return
}

function fightPlayer(activePlayer, activeMonster, playerRoll){
  let move
  let moveIndex
  let moveType
  switch (playerRoll){
    case 1:
      moveIndex = activePlayer.moves[0][0]
      moveType = "SwordSword"
      move = movesTableCombinationSwordSword[moveIndex]
      break
    case 2:
      moveIndex = activePlayer.moves[1][0]
      moveType = "SwordMagic"
      move = movesTableCombinationSwordMagic[moveIndex]
      break
    case 3:
      moveIndex = activePlayer.moves[2][0]
      moveType = "MagicMagic"
      move = movesTableCombinationMagicMagic[moveIndex]
      break
    case 4:
      moveIndex = activePlayer.moves[3][0]
      moveType = "MagicSkull"
      move = movesTableCombinationMagicSkull[moveIndex]
      break
    case 5:
      moveIndex = activePlayer.moves[4][0]
      moveType = "SkullSkull"
      move = movesTableCombinationSkullSkull[moveIndex]
      break
    case 6:
      moveIndex = activePlayer.moves[5][0]
      moveType = "SwordSkull"
      move = movesTableCombinationSwordSkull[moveIndex]
      break
  }
  let playerDamage = move.damage;

  // if(moveType == "SwordSword" || moveType == "SwordMagic" || moveType == "SwordSkull"){
  //   if(move.damage > 0){
  //     activePlayer.clawLevel
  //   }
  // }
  
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
      activeMonster.blocks = 0;
    }
  }
  //apply damage next round
  if(move.damageNextRound > 0){
    activePlayer.damageNextRound = move.damageNextRound;
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
  if(activeMonster.moves[moveIndex].dot > 0){
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
      activePlayer.blocks = 0;
    }
    else{
      activePlayer.health = activePlayer.health - monsterDamage;
      activePlayer.blocks = 0;
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

 function completeQuestFight(socket){   
  if(lobby[socket.id].optionPicked == "Good"){
    if(lobby[socket.id].quest.optionGood.optionType == "ReturnMonster"){
      socket.emit("updatePlayer", lobby[socket.id]);
    }
    else{
      socket.emit("updatePlayer", lobby[socket.id]);
      socket.emit("questReward")
    }
  }
  else {
    if(lobby[socket.id].quest.optionBad.optionType == "ReturnMonster"){
      socket.emit("updatePlayer", lobby[socket.id]);
    }
      socket.emit("updatePlayer", lobby[socket.id]);
      socket.emit("questReward")
    }
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function emitChangeViewToViewer(encounter, socket){
  viewerList.forEach(viewerSocketId => {
    const viewerSocket = io.sockets.sockets.get(viewerSocketId);  // Fetch the socket object
    if (viewerSocket) {
      viewerSocket.emit("updateEncounter", encounter);
      viewerSocket.emit("updatePlayer", sanitizePlayer(lobby[socket.id]));
    }
  });
}

function getPlayerStandings(){
  const playerStandings = {
    athos: [],
    aridora: [],
    nythoria: [],
    drakan: [],
    talvar: [],
    frosgar: []
  };
  
  for (const socketId in lobby) {
    if (lobby.hasOwnProperty(socketId )) {
      const player = lobby[socketId];
      for (const island in player.reputation) {
        if (player.reputation.hasOwnProperty(island)) {
          playerStandings[island].push({
            name: player.name,
            reputation: player.reputation[island]
          });
        }
      }
    }
  }

  for (const island in playerStandings) {
    if (playerStandings.hasOwnProperty(island)) {
      playerStandings[island].sort((a, b) => b.reputation - a.reputation);
    }
  }

  return playerStandings
}

function sanitizePlayer(player) {
  return {
    name: player.name,
    region: player.region,
    host: player.host,
    actions: player.actions,
    actionsUsed: player.actionsUsed,
    health: player.health,
    reputation: player.reputation,
    gold: player.gold,
    goldLoot: player.goldLoot,
    monstersKilled: player.monstersKilled,
    questsSolved: player.questsSolved,
    victoryPoints: player.victoryPoints,
    blocks: player.blocks,
    dot: player.dot,
    reflect: player.reflect,
    damageNextRound: player.damageNextRound,
    picture: player.picture,
    moves: player.moves,
    clawLevel: player.clawLevel,
    skullLevel: player.skullLevel,
    magicLevel: player.magicLevel,
    quest: player.quest,
    playerIsActive: player.playerIsActive
  };
}
