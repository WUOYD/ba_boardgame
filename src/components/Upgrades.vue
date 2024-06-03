<template>
<div class="content">
    <h1>Aufwertungen</h1>
    <div v-if="this.currentView === 'abilities' || this.currentView === 'equipment'" id="buttons">
        <button class="selectedTab" v-if="this.currentView === 'abilities'">Fähigkeiten</button>
        <button v-else @click="this.currentView = 'abilities'">Fähigkeiten</button>
        <button class="selectedTab" v-if="this.currentView === 'equipment'">Ausrüstung</button>
        <button v-else @click="this.currentView = 'equipment'">Ausrüstung</button>
    </div>
    <div id="abilities" v-if="currentView === 'abilities'">
        <h2>Fähigkeiten</h2>
        <div id="text">
            <p>Klicke auf eine Fähigkeit um sie auzuwechseln!</p>
        </div>
        <div id="movesPlayer">
            <div v-for="index in optionsPlayer" :key="index" class="movesCombinationPlayer" @click="changeMove(index)">
                <div class="movesContentLeft">
                    <div class="movesImages">
                        <img :src="moveImages[index - 1][0]" width="64" height="64" />
                        <img :src="moveImages[index - 1][1]" width="64" height="64" />
                    </div>
                </div>
                <div class="movesContentRight">
                    <div class="moveName">
                        {{ moveNamePlayer[index - 1] }}
                    </div>
                    <div class="moveText">
                        {{ moveTextPlayer[index - 1] }}
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div v-if="moveIndexChange !== null && currentView === 'changeMoveSection'" id="changeMoveSection">
                <button @click="updateView(7)">Zurück zu den Uprades</button>
                <h2>Aktuelle Fähigkeit</h2>
                <div id="changeMoveInfos">
                    <div id="changeMoveImages">
                        <img :src="moveImages[moveIndexChange-1][0]" width="64" height="64" />
                        <img :src="moveImages[moveIndexChange-1][1]" width="64" height="64" />
                    </div>
                    <div id="changeMoveCurrent">
                        <p>{{ moveNamePlayer[moveIndexChange-1] }}</p>
                        <p>{{ moveTextPlayer[moveIndexChange-1] }}</p>
                    </div>
                </div>
                <div id="changeMoveAvailable">
                    <h2>Verfügbare Fähigkeiten</h2>
                    <div v-for="(move, index) in changeMovesAvailable" :key="index" class="movesAvailablePlayer" @click="changeMoveToCurrent(move[0])">
                        <p>{{ move[1] }}</p>
                        <p>{{ move[2] }}</p>
                    </div>
                </div>
            </div>
    <div v-if="currentView === 'equipment'" id="equipment" >
        <div class="upgrade-section">
            <h2>Ausrüstung</h2>
            <div class="gold-section">
                <p>Gold: {{ playerGold }}</p>
            </div>
            <div class="player-levels">
                <div class="player-level">
                    <div class="player-level-icons">
                        <div class="player-level-icon" v-for="(item, index) in clawIcons" :key="index">
                            <img :src="getImageClaw(item.value)">
                        </div>
                    </div>
                    <div class="player-level-infos">
                        <p>Schwert verzaubern {{ playerClawLevel }}</p>
                        <p>+{{ playerClawLevel }} Auf alle Schwertwürfe</p>
                    </div>
                    <div class="upgradeButtons">
                        <button @click="upgradeClaw()">
                            <p>{{ playerClawLevel * 3 }} Gold</p>
                            <p>Upgrade Claw</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="player-levels">
                <div class="player-level">
                    <div class="player-level-icons">
                        <div class="player-level-icon" v-for="(item, index) in magicIcons" :key="index">
                            <img :src="getImageMagic(item.value)">
                        </div>
                    </div>
                    <div class="player-level-infos">
                        <p>Magie verzaubern {{ playerMagicLevel }}</p>
                        <p>+{{ playerMagicLevel }} Auf alle Schwertwürfe</p>
                    </div>
                    <div class="upgradeButtons">
                        <button @click="upgradeMagic()">
                            <p>{{ playerMagicLevel * 3 }} Gold </p>
                            <p>Upgrade Magic</p>
                        </button>
                    </div>
                </div>
            </div>
            <div class="player-levels">
                <div class="player-level">
                    <div class="player-level-icons">
                        <div class="player-level-icon" v-for="(item, index) in skullIcons" :key="index">
                            <img :src="getImageSkull(item.value)">
                        </div>
                    </div>
                    <div class="player-level-infos">
                        <p>Schwert verzaubern {{ playerSkullLevel }}</p>
                        <p>+{{ playerSkullLevel }} Auf alle Schwertwürfe</p>
                    </div>
                    <div class="upgradeButtons">
                        <button @click="upgradeSkull()">
                            <p>{{ playerSkullLevel * 3 }} Gold </p>
                            <p>Upgrade Skull</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    socket
} from '../client'

export default {
    data() {
        return {
            currentView: 'abilities',
            playerGold: null,
            moveNamePlayer: ["", "", "", "", "", ""],
            moveTextPlayer: ["", "", "", "", "", ""],
            optionsPlayer: [1, 2, 3, 4, 5, 6],
            moveImages: [
                ["src/assets/icons/claw.png", "src/assets/icons/claw.png"],
                ["src/assets/icons/claw.png", "src/assets/icons/magic.png"],
                ["src/assets/icons/magic.png", "src/assets/icons/magic.png"],
                ["src/assets/icons/magic.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/claw.png"],
            ],
            playerClawLevel: 0,
            playerMagicLevel: 0,
            playerSkullLevel: 0,
            clawIcons: [{
                value: false
            }, {
                value: false
            }, {
                value: false
            }, {
                value: false
            }],
            imagePathsClaw: {
                trueImage: "src/assets/icons/claw.png",
                falseImage: "src/assets/icons/clawGray.png"
            },
            magicIcons: [{
                value: false
            }, {
                value: false
            }, {
                value: false
            }, {
                value: false
            }],
            imagePathsMagic: {
                trueImage: "src/assets/icons/magic.png",
                falseImage: "src/assets/icons/magicGray.png"
            },
            skullIcons: [{
                value: false
            }, {
                value: false
            }, {
                value: false
            }, {
                value: false
            }],
            imagePathsSkull: {
                trueImage: "src/assets/icons/skull.png",
                falseImage: "src/assets/icons/skullGray.png"
            },
            changeMovesAvailable: [],
            moveIndexChange: null,
        }
    },
    mounted() {
        socket.on("setMovesTables", movesTables => {
            this.movesTableCombinationSwordSword = movesTables.movesTableCombinationSwordSword
            this.movesTableCombinationMagicMagic = movesTables.movesTableCombinationMagicMagic
            this.movesTableCombinationSkullSkull = movesTables.movesTableCombinationSkullSkull
            this.movesTableCombinationSwordMagic = movesTables.movesTableCombinationSwordMagic
            this.movesTableCombinationMagicSkull = movesTables.movesTableCombinationMagicSkull
            this.movesTableCombinationSwordSkull = movesTables.movesTableCombinationSwordSkull
        })
        socket.on("updatePlayer", activePlayer => {
            this.playerName = activePlayer.name;
            this.playerPicture = activePlayer.picture;
            this.playerActions = activePlayer.actions;
            this.playerHealth = activePlayer.health;
            this.playerReputation = activePlayer.reputation;
            this.playerGold = activePlayer.gold;
            this.goldRequiredClaw = activePlayer.clawLevel * 3;
            this.goldRequiredMagic = activePlayer.magicLevel * 3;
            this.goldRequiredSkull = activePlayer.skullLevel * 3;
            this.playerClawLevel = activePlayer.clawLevel;
            this.playerMagicLevel = activePlayer.magicLevel;
            this.playerSkullLevel = activePlayer.skullLevel;
            this.moveNamePlayer[0] = this.movesTableCombinationSwordSword[activePlayer.moves[0][0]].name
            this.moveTextPlayer[0] = this.movesTableCombinationSwordSword[activePlayer.moves[0][0]].text
            this.moveNamePlayer[1] = this.movesTableCombinationSwordMagic[activePlayer.moves[1][0]].name
            this.moveTextPlayer[1] = this.movesTableCombinationSwordMagic[activePlayer.moves[1][0]].text
            this.moveNamePlayer[2] = this.movesTableCombinationMagicMagic[activePlayer.moves[2][0]].name
            this.moveTextPlayer[2] = this.movesTableCombinationMagicMagic[activePlayer.moves[2][0]].text
            this.moveNamePlayer[3] = this.movesTableCombinationMagicSkull[activePlayer.moves[3][0]].name
            this.moveTextPlayer[3] = this.movesTableCombinationMagicSkull[activePlayer.moves[3][0]].text
            this.moveNamePlayer[4] = this.movesTableCombinationSkullSkull[activePlayer.moves[4][0]].name
            this.moveTextPlayer[4] = this.movesTableCombinationSkullSkull[activePlayer.moves[4][0]].text
            this.moveNamePlayer[5] = this.movesTableCombinationSwordSkull[activePlayer.moves[5][0]].name
            this.moveTextPlayer[5] = this.movesTableCombinationSwordSkull[activePlayer.moves[5][0]].text
            for (let i = 0; i < this.playerClawLevel; i++) {
                this.clawIcons[i].value = true;
            }
            for (let i = 0; i < this.playerMagicLevel; i++) {
                this.magicIcons[i].value = true;
            }
            for (let i = 0; i < this.playerSkullLevel; i++) {
                this.skullIcons[i].value = true;
            }
        })
        socket.on("updateChangeMoves", activePlayer => {
            this.changeMovesAvailable = [];
            switch (this.moveIndexChange) {
                case 1:
                    activePlayer.moves[0][1].forEach(index => {
                        this.changeMovesAvailable.push([index, this.movesTableCombinationSwordSword[index].name, this.movesTableCombinationSwordSword[index].text])
                    })
                    break
                case 2:
                    activePlayer.moves[1][1].forEach(index => {
                        this.changeMovesAvailable.push([index, this.movesTableCombinationSwordMagic[index].name, this.movesTableCombinationSwordMagic[index].text])
                    })
                    break
                case 3:
                    activePlayer.moves[2][1].forEach(index => {
                        this.changeMovesAvailable.push([index, this.movesTableCombinationMagicMagic[index].name, this.movesTableCombinationMagicMagic[index].text])
                    })
                    break
                case 4:
                    activePlayer.moves[3][1].forEach(index => {
                        this.changeMovesAvailable.push([index, this.movesTableCombinationMagicSkull[index].name, this.movesTableCombinationMagicSkull[index].text])
                    })
                    break
                case 5:
                    activePlayer.moves[4][1].forEach(index => {
                        this.changeMovesAvailable.push([index, this.movesTableCombinationSkullSkull[index].name, this.movesTableCombinationSkullSkull[index].text])
                    })
                    break
                case 6:
                    activePlayer.moves[5][1].forEach(index => {
                        this.changeMovesAvailable.push([index, this.movesTableCombinationSwordSkull[index].name, this.movesTableCombinationSwordSkull[index].text])
                    })
                    break
            }
        })
        socket.emit("getMovesTables");
        socket.emit("getActivePlayer");
    },
    methods: {
        getImageClaw(value) {
            return value ? this.imagePathsClaw.trueImage : this.imagePathsClaw.falseImage;
        },
        getImageMagic(value) {
            return value ? this.imagePathsMagic.trueImage : this.imagePathsMagic.falseImage;
        },
        getImageSkull(value) {
            return value ? this.imagePathsSkull.trueImage : this.imagePathsSkull.falseImage;
        },
        upgradeClaw() {
            socket.emit("upgradeClaw");
        },
        upgradeMagic() {
            socket.emit("upgradeMagic");
        },
        upgradeSkull() {
            socket.emit("upgradeSkull");
        },
        changeViewMove(index) {
            this.combinationImagesUpgrade = moveImages[index];
            this.combinationNamePlayerUpgrade = moveNamePlayer[index];
            this.combinationNameTextUpgrade = moveTextPlayer[index];
        },
        changeMove(index) {
            this.moveIndexChange = index
            this.currentView = "changeMoveSection"
            socket.emit("getChangeMoves")
        },
        changeMoveToCurrent(index){
            let data = { moveIndextoChange: this.moveIndexChange, moveIndexNew: index}
            socket.emit("changeMove", (data));
        },
        updateView(comp) {
            this.currentView = "abilities"
            socket.emit("updateView", comp);
        }
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style scoped>
p {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 0;
}

table {
    width: 100%;
}

th,
td {
    width: 50%;
    border-bottom: #333333 dotted 1px;
    font-size: 16px;
}

td p {
    font-size: 16px;
}

#movesPlayer {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    /* Adding gap between the divs */
}

#movesPlayer .movesCombinationPlayer {
    flex-basis: calc(50% - 5px);
    box-sizing: border-box;
    padding: 5px;
    background-color: rgba(50, 50, 50, 0.2);
    border-radius: 10px;
    height: 120px;
    display: flex;
    flex-direction: row;
}

#movesPlayer .movesCombinationPlayer:nth-child(even) {
    margin-right: 0px;
    /* Adding right margin for even-numbered divs */
}

#movesPlayer .moveImages {
    width: 50%;
    justify-content: flex-end;
}

#movesPlayer img {
    border-radius: 5px;
    margin: 5px;
}

.movesContentLeft {
    width: 50%;
    height: 100%;
    align-items: center;
}

.movesContentRight {
    width: 50%;
    display: flex;
    flex-direction: column;
}

.movesImages {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.moveName {
    display: flex;
    width: 100%;
    height: 50%;
    font-size: 20px;
    align-items: center;
}

.moveText {
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
}

#abilities {
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
}

#equipment {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.upgrade-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.gold-section {
    margin-bottom: 20px;
}

.upgrade-options,
.player-levels {
    display: flex;
    width: 100%;
}

.upgrade-option {
    width: 33.3333%;
    text-align: center;
    justify-content: center;
}

.player-level {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.player-level-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;
}

.player-level-icon img {
    border-radius: 10px;
    margin-right: 2.5px;
    margin-left: 2.5px;
}

.player-level-infos {
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    align-items: center;
}

.upgradeButtons {
    display: flex;
    justify-content: center;
    align-items: center;
}

#buttons button{
    margin-right: 2.5px;
    margin-left: 2.5px;
}

.upgrade-option img {
    width: 50px;
    height: 50px;
}

img {
    width: 100px;
    height: 100px;
}

.upgrade-option button {
    margin-top: 10px;
}

.upgrade-buttons,
.upgrade-costs {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
}

#changeMoveSection {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#changeMoveSection button{
    width: 20%
}

#changeMoveSection p {
    margin-bottom: 10px;
    font-size: 14px;
}

#changeMoveImages {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    padding-right: 10px;
}

#changeMoveImages img{
    border-radius: 10px;
    margin-left: 5px;
    margin-right: 5px;
}

#changeMoveCurrent{
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: flex-start;
    padding-left: 10px;
}

#changeMoveCurrent p{
    display: flex;
    height: 50%;
    align-items: center;
    margin-bottom: 0px;
}

#changeMoveInfos{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}

#changeMoveAvailable{
    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.movesAvailablePlayer{
    display: flex;
    flex-direction: column;
    flex-basis: calc(50% - 5px);
    box-sizing: border-box;
    padding: 5px;
    background-color: rgba(50, 50, 50, 0.2);
    border-radius: 10px;
    height: 120px;
    display: flex;
    padding-left: 10px;
}

.movesAvailablePlayer p{
    display: flex;
    height: 50%;
    align-items: center;
    margin-bottom: 0px !important;
}

.selectedTab{
    background-color: rgba(50, 50, 50, 0.6) ;
}

#text{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
}

#text p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-top: 1px solid #f7e4c2;
    border-bottom: 1px solid #f7e4c2;
}

</style>
