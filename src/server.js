const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')

let intervalMs = 100;
let sockets = [];
let players = new Array();
let clientSocket;

// Server
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.use(express.static('public'))

//Connection
io.on('connection', (socket) => {
  //Server message & update
  console.log('new connection: ' + socket.id)
  sockets.push(socket);
  clientSocket = socket;
  socket.emit("userCount", sockets.length)

  // Join
  socket.on('join', (join) => {
    socket.emit('join', join)
  })

  // dice roll input
  socket.emit("diceRoll", (currentDiceRoll) => {
    dice = currentDiceRoll
  });

  // Update View
  socket.on('updateView', (comp) => {
    socket.emit('updateClientView', comp)
  })

  //Sockets fight
  socket.on("startFight", function() {
    socket.emit('startFight', "fight has started" )
    startFight();
  })

  socket.on("diceRollPlayer", (rollPlayer) => {
    diceRollPlayer(rollPlayer);
  })

  socket.on("diceRollMonster", (rollMonster) => {
    diceRollMonster(rollMonster);
  })

  //Disconnect message
  socket.on('disconnect', () => {
    console.log('connection disconnected: ' + socket.id)
    let i = sockets.indexOf(socket);
    sockets.splice(i, 1);
    socket.emit("userCount", sockets.length)
    socket.broadcast.emit("userCount", sockets.length)
  })
})

// Listen on Port 3000
server.listen(3000, () => {
  console.log('listening on port :3000/')
})

// Sequencer Interval
// setInterval(() => {
//   io.emit('playSounds', playSounds)
//   io.emit('sequencerStep', bar)
// }, intervalMs)

class Game{
  constructor(playerCount){
    this.playerCount = playerCount;
    this.round = 1;
  }
}

//Player
class Player{
  constructor(name){
    this.name = name
    this.actions = 10;
    this.health = 10;
    this.reputation = 0;
    this.gold = 0;
    this.monstersKilled = 0;
    this.questsSolved = 0;
    this.victoryPoints = 0;
  }
}

//Monster
class Monster{
  constructor(name, type, health, victoryPoints, rewardGold){
    this.name = name;
    this.type = type;
    this.health = health;
    this.victoryPoints = victoryPoints;
    this.rewardGold = rewardGold;
  }
}

class Fight{
  constructor(activePlayerObject, activeMonsterObject){
    this.activePlayer = activePlayerObject;
    this.activeMonster = activeMonsterObject;
    this.turn = 0;
    this.fight;
  }
}

let monsterTableBronze = [
  ["Bronze", 1, 14, 2, 2, 2, 1, 1],
  ["Bronze", 1, 15, 1, 3, 3, 1, 1],
  ["Bronze", 1, 16, 2, 2, 2, 1, 1],
  ["Bronze", 1, 13, 3, 1, 1, 1, 1],
  ["Bronze", 1, 15, 0, 3, 2, 1, 1],
];

let monsterTableSilver = [
  ["Silver", 2, 21, 0, 4, 3, 2, 3],
  ["Silver", 2, 20, 3, 0, 4, 2, 3],
  ["Silver", 2, 22, 1, 3, 3, 2, 3],
  ["Silver", 2, 21, 3, 3, 2, 2, 3],
  ["Silver", 2, 22, 2, 1, 3, 2, 3]
];

let monsterTableGold = [
  ["Gold", 3, 28, 3, 5, 5, 3, 5],
  ["Gold", 3, 29, 5, 3, 4, 3, 5],
  ["Gold", 3, 30, 3, 5, 5, 3, 5],
  ["Gold", 3, 28, 3, 5, 3, 3, 5],
  ["Gold", 3, 27, 4, 4, 4, 3, 5]
];

let monstersBronze = [];
let monstersSilver = [];
let monstersGold = [];

function initMonsters(){
  for (let i = 0; i < monsterTableBronze.length; i++){
    monstersBronze[i] = new Monster(monsterTableBronze[i][0], monsterTableBronze[i][1], monsterTableBronze[i][2], monsterTableBronze[i][3], monsterTableBronze[i][4], monsterTableBronze[i][5], monsterTableBronze[i][6], monsterTableBronze[i][7]);
  }
  for (let i = 0; i < monsterTableSilver.length; i++){
    monstersSilver[i] = new Monster(monsterTableSilver[i][0], monsterTableSilver[i][1], monsterTableSilver[i][2], monsterTableSilver[i][3], monsterTableSilver[i][4], monsterTableSilver[i][5], monsterTableSilver[i][6], monsterTableSilver[i][7]);
  } 
  for (let i = 0; i < monsterTableGold.length; i++){
    monstersGold[i] = new Monster(monsterTableGold[i][0], monsterTableGold[i][1], monsterTableGold[i][2], monsterTableGold[i][3], monsterTableGold[i][4], monsterTableGold[i][5], monsterTableGold[i][6], monsterTableGold[i][7]);
  }  
}

function block(){
  let blocked = false;
  return blocked
}

function attackerBonusBefore(player){
  return
}

function attackerBonusAfter(player){
  return
}

function randomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
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

//start fight
function startFight(){
  let game = new Game(1);
  let player = new Player("Julian");
  players.push(player);
  initMonsters();
  let activeMonster = getRandomMonster(game.round);
  let activePlayer = player;
  clientSocket.emit("activeMonster", activeMonster);
  initFightMonster(activePlayer, activeMonster);
}

//fight monster
function initFightMonster(activePlayer, activeMonster){
  activePlayer.fight = new Fight(activePlayer, activeMonster)
  clientSocket.emit("updateFight", "Please roll player and monster");
}

//Fight functions
function calculateFightPlayer(activePlayer, activeMonster, playerRoll ){
  let playerDamage = 0;
  if(parseInt(activePlayer.attack) + parseInt(playerRoll) - parseInt(activeMonster.defense) >= 0){
      playerDamage = parseInt(activePlayer.attack) + parseInt(playerRoll) - parseInt(activeMonster.defense);
      return playerDamage
  }
  return 0
}

function calculateFightMonster(activePlayer, activeMonster, monsterRoll){
  if(parseInt(activeMonster.attack) + parseInt(monsterRoll) - parseInt(activePlayer.defense) >= 0){
      return true
  }
  return false
}

function fightPlayer(activePlayer, activeMonster, playerRoll,){
  //damage calculations
 let playerDamage = calculateFightPlayer(activePlayer, activeMonster, playerRoll);

 //apply damage and check for win
 if(playerDamage > 0){

  activeMonster.health = activeMonster.health - playerDamage;
 }
 
 if(activeMonster.health <= 0){
   activePlayer.monstersKilled += 1;
   activePlayer.experiencePoints += activeMonster.rewardXP;
   activePlayer.gold += activeMonster.rewardGold;
   return true
 }
 return false
}

function fightMonster(activePlayer, activeMonster, monsterRoll){
  //damage calculations
 let monsterDamage = calculateFightMonster(activePlayer, activeMonster, monsterRoll);

 //apply damage and check for win
 if(monsterDamage){
   activePlayer.health = activePlayer.health - activeMonster.damage;
 }

 if(activePlayer.health <= 0){
   return true
 }

 return false
}

function diceRollPlayer(diceRollPlayer){
  let winner = fightPlayer(players[0], players[0].fight.activeMonster, diceRollPlayer)
  if(winner){
    clientSocket.emit("updateFight", "Player won");
    return
  }
  clientSocket.emit("updateFight", "Monster has " + players[0].fight.activeMonster.health + " health");
  return
}

function diceRollMonster(diceRollMonster){
  let winner = fightMonster(players[0], players[0].fight.activeMonster, diceRollMonster)
  if(winner){
    clientSocket.emit("updateFight", "Monster won");
    return
  }
  clientSocket.emit("updateFight", "Player has " + players[0].health + " health");
  return
}

//Encounter generation

function probability(n){
  return Math.random() < n;
}

function generateEncounter(){
  let monsterrobability
  if(probability()){
    
  }
}