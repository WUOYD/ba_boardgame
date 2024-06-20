<template>
<div class="content">
    <div v-if="this.currentView === 'abilities' || this.currentView === 'equipment'" id="buttonsUpgrade">
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
                        <p>Schwert verzaubern {{ playerClawLevel+1 }}</p>
                        <p>+{{ playerClawLevel+1 }} Auf alle Angriffesaktionen</p>
                    </div>
                    <div class="upgradeButtons">
                        <button @click="upgradeClaw()">
                            <p>{{ (playerClawLevel+1) * 3 }} Gold</p>
                            <p>Upgrade Schwert</p>
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
                        <p>Magie verzaubern {{ playerMagicLevel+1 }}</p>
                        <p>+{{ playerMagicLevel+1 }} Auf alle Verteidigungsaktionen</p>
                    </div>
                    <div class="upgradeButtons">
                        <button @click="upgradeMagic()">
                            <p>{{ (playerMagicLevel+1) * 3 }} Gold </p>
                            <p>Upgrade Magie</p>
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
                        <p>Schädel verzaubern {{ playerSkullLevel+1 }}</p>
                        <p>+{{ playerSkullLevel+1 }} Auf alle anderen Aktionen</p>
                    </div>
                    <div class="upgradeButtons">
                        <button @click="upgradeSkull()">
                            <p>{{ (playerSkullLevel+1) * 3 }} Gold </p>
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
                ["src/assets/icons/sword.png", "src/assets/icons/sword.png"],
                ["src/assets/icons/sword.png", "src/assets/icons/shield.png"],
                ["src/assets/icons/shield.png", "src/assets/icons/shield.png"],
                ["src/assets/icons/shield.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/sword.png"],
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
                trueImage: "src/assets/icons/sword.png",
                falseImage: "src/assets/icons/swordGray.png"
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
                trueImage: "src/assets/icons/shield.png",
                falseImage: "src/assets/icons/shieldGray.png"
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


</style>
