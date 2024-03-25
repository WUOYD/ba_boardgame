const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')


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
  socket.broadcast.emit("userCount", sockets.length)

  // Join
  socket.on('join', (join) => {
    socket.emit('join', join)
  })

  // Update View
  socket.on('updateView', (comp) => {
    socket.emit('updateClientView', comp)
  })

  // Component View
  socket.on('updateComp', (comp) => {
    switch (comp) {
      case 1:
        socket.emit('updateComponentT1', track1)
        break
    }
  })

  //Sockets updates
  socket.on('updateT1', (index) => {
    track1[index] = !track1[index]
    socket.broadcast.emit('updateComponentT1', track1)
  })


  //Reset
  socket.on('reset', (reset) => {
    track1 = [false, false, false, false, false, false, false, false]
    socket.emit('updateComponentT1', track1)
    socket.broadcast.emit('updateComponentT1', track1)
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
setInterval(() => {
  let tracks = [
    track1,
  ]
  let playSounds = []
  for (let i = 0; i < tracks.length; i++) {
    playSounds.push(tracks[i][bar])
  }
  io.emit('playSounds', playSounds)
  io.emit('sequencerStep', bar)
}, bpm_ms)

class Player{
  constructor(name){
    var name
    var actions = 10;
    var health = 10;
    var attack = 2;
    var defense = 5;
    var blocks = 3;
    var experiencePoints = 0;
    var gold = 0;
    var monstersKilled = 0;
    var questsSolved = 0;
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

var monsterTableBronze = [
  ["Bronze", 1, 14, 2, 2, 2, 1, 1]
  ["Bronze", 1, 15, 1, 3, 3, 1, 1]
  ["Bronze", 1, 16, 2, 2, 2, 1, 1]
  ["Bronze", 1, 13, 3, 1, 1, 1, 1]
  ["Bronze", 1, 15, 0, 3, 2, 1, 1]
];

var monsterTableSilver = [
  ["Silver", 2, 21, 0, 4, 3, 2, 3]
  ["Silver", 2, 20, 3, 0, 4, 2, 3]
  ["Silver", 2, 22, 1, 3, 3, 2, 3]
  ["Silver", 2, 21, 3, 3, 2, 2, 3]
  ["Silver", 2, 22, 2, 1, 3, 2, 3]
];

var monsterTableGold = [
  ["Gold", 3, 28, 3, 5, 5, 3, 5]
  ["Gold", 3, 29, 5, 3, 4, 3, 5]
  ["Gold", 3, 30, 3, 5, 5, 3, 5]
  ["Gold", 3, 28, 3, 5, 3, 3, 5]
  ["Gold", 3, 27, 4, 4, 4, 3, 5]
];

var monstersBronze = [];
var monstersSilver = [];
var monstersGold = [];

function initMonsters(monsterTable){
  for (let i = -1; i < monstersBronze.length; i++){
    monstersBronze[i] = new Monster(monsterTableBronze[i][1], monsterTableBronze[i][2], monsterTableBronze[i][3], monsterTableBronze[i][4], monsterTableBronze[i][5], monsterTableBronze[i][6], monsterTableBronze[i][7], monsterTableBronze[i][8]);
  }
  for (let i = -1; i < monstersSilver.length; i++){
    monstersSilver[i] = new Monster(monsterTableSilver[i][1], monsterTableSilver[i][2], monsterTableSilver[i][3], monsterTableSilver[i][4], monsterTableSilver[i][5], monsterTableSilver[i][6], monsterTableSilver[i][7], monsterTableSilver[i][8]);
  } 
  for (let i = -1; i < monstersGold.length; i++){
    monstersGold[i] = new Monster(monsterTableGold[i][1], monsterTableGold[i][2], monsterTableGold[i][3], monsterTableGold[i][4], monsterTableGold[i][5], monsterTableGold[i][6], monsterTableGold[i][7], monsterTableGold[i][8]);
  }  
}

//Fight
function fightMonster(activePlayer, activeMonster){
  var playerWon = false;
  var monsterWon = false;
  var playerRoundstate = activePlayer;
  var monsterRoundstate = activeMonster;
  while(monsterWon == false && playerWon == false){
    //damage calculations
    attackerBonusBefore(playerRoundstate);
    var playerRoll = diceRoll();
    var monsterRoll = diceRoll();
    var playerDamage = calculateFightPlayer(playerRoundstate, activeMonster, playerRoll);
    var monsterDamage = calculateFightMonster(playerRoundstate, activeMonster, monsterRoll);

    //damage calculations
    attackerBonusAfter(playerRoundstate);
    monsterRoundstate.health - playerDamage;
    if(monsterDamage){
      if(!playerDamageBlock()){
        activePlayer.health - activeMonster.damage;
      } 
    }

    //Winner
    if(activePlayer.health <= 0){
      monsterWon = true;
    }
    if(activeMonster.health <= 0){
      true;
    }
    if(playerWon){
      activePlayer.monstersKilled += 1;
      activePlayer.experiencePoints += activeMonster.rewardXP;
      activePlayer.gold += activeMonster.rewardGold;
    }
    else if(monsterWon){
      
    }
    else{

    }

};

function diceRoll(){
  var diceCount

  return diceCount
}

function block(){
  var blocked = false;
  return blocked
}

function attackerBonusBefore(player){

}

function attackerBonusAfter(player){
  
}

function calculateFightPlayer(playerRoundstate, activeMonster, playerRoll ){
  var playerDamage
  if((playerRoundstate.attack + playerRoll) - activeMonster.defense >= 0){
      return playerDamage
  }
  return 0
}

function calculateFightMonster(playerRoundstate, activeMonster, monsterRoll){
  var monsterDamage
  if((activeMonster.attack + monsterRoll) - playerRoundstate.defense >= 0){
      return true
    }
  }
  return false
}

function playerDamageBlock(){
  var blockedState = false
  //blocked View

  return blockedState
}