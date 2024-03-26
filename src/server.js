const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')

let intervalMs = 100
let sockets = []
let dice = 0;

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
  socket.emit("userCount", sockets.length)

  // Join
  socket.on('join', (join) => {
    socket.emit('join', join)
  })

  // dice roll input
  socket.emit("diceRoll", (currentDiceRoll) => {
    diceRoll(currentDiceRoll)
  });

  // Update View
  socket.on('updateView', (comp) => {
    socket.emit('updateClientView', comp)
  })

  //Sockets fight
  socket.on("startFight", function() {
    socket.emit('updateFight', "fight has started" )
    startFight();
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
    this.attack = 2;
    this.defense = 5;
    this.blocks = 2;
    this.experiencePoints = 0;
    this.gold = 0;
    this.monstersKilled = 0;
    this.questsSolved = 0;
  }
}

//Monster
class Monster{
  constructor(type, victoryPoints, health, attack, defense, damage, rewardXP, rewardGold){
    this.type = type;
    this.victoryPoints = victoryPoints;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.damage = damage;
    this.rewardXP = rewardXP;
    this.rewardGold = rewardGold;
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

}

function attackerBonusAfter(player){
  
}

function calculateFightPlayer(playerRoundstate, activeMonster, playerRoll ){
  let playerDamage
  if((playerRoundstate.attack + playerRoll) - activeMonster.defense >= 0){
      return playerDamage
  }
  return 0
}

function calculateFightMonster(playerRoundstate, activeMonster, monsterRoll){
  let monsterDamage
  if((activeMonster.attack + monsterRoll) - playerRoundstate.defense >= 0){
      return true
  }
  return false
}

function playerDamageBlock(){
  let blockedState = false
  //blocked View

  return blockedState
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

function startFight(){
  let game = new Game(1);
  let player = new Player("Julian");
  initMonsters();
  let activeMonster = getRandomMonster(game.round);
  let activePlayer = player;
  fightMonster(activePlayer, activeMonster)
}

function fight(activePlayer, activeMonster){
  
  let playerWon
  if (playerWon){
    console.log("Player Won")
  }
  else{
    console.log("Monster Won")
  }
}

//Fight
async function fightMonster(activePlayer, activeMonster){
  let playerRoundstate = activePlayer;
  let monsterRoundstate = activeMonster;
  let winner = "none"

  while(winner == "none"){
    attackerBonusBefore(playerRoundstate);
    while(dice == 0){}
    let playerRoll = dice
    dice = 0;
    while(dice == 0){}
    let monsterRoll = dice;
    attackerBonusAfter(playerRoundstate);
    callculateFight(playerRoundstate, monsterRoundstate, activePlayer, activeMonster, playerRoll, monsterRoll)
  }
  if(winner == "player"){

  }
  else{}
}


function diceRoll(diceRoll){
  dice = diceRoll
  return 
}

function callculateFight(playerRoundstate, monsterRoundstate , activePlayer, activeMonster, playerRoll, monsterRoll){
   //damage calculations
  let playerDamage = calculateFightPlayer(playerRoundstate, activeMonster, playerRoll);
  let monsterDamage = calculateFightMonster(playerRoundstate, activeMonster, monsterRoll);

  //apply damage and check for win
  if(playerDamage > 0){
    monsterRoundstate.health - playerDamage;
  }
  
  if(monsterRoundstate.health <= 0){
    activePlayer.monstersKilled += 1;
    activePlayer.experiencePoints += activeMonster.rewardXP;
    activePlayer.gold += activeMonster.rewardGold;
    return "player"
  }

  if(monsterDamage){
    activePlayer.health =- activeMonster.damage;
  }

  if(activePlayer.health <= 0){
    return "monster"
  }

  return "none"
}