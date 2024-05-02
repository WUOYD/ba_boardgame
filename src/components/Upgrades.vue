<template>
<div class="content single">
    <h1>Upgrades</h1>
    <button id="backButton" class="hidden" @click="changeViewAbility(7)">Back</button>
    <div id="buttons" class="visible">
        <button v-if="currentView == 'abilities'">Fähigkeiten</button>
        <button v-if="currentView == 'equipment'" @click="toggleView()">Fähigkeiten</button>
        <button v-if="currentView == 'equipment'">Ausrüstung</button>
        <button v-if="currentView == 'abilities'" @click="toggleView()">Ausrüstung</button>
    </div>
    <div id="abilities" class="visible">
        <h2>Fähigkeiten</h2>
        <div class="gold-section">
            <p>Gold: {{ playerGold }}</p>
        </div>
        <div id="movesPlayer">
        <div v-for="(option, index) in optionsPlayer" :key="index" class="movesCombinationPlayer">
            <div class="movesContentLeft">
                <div class="movesImages">
                    <img :src="moveImages[index][0]" width="64" height="64" />
                    <img :src="moveImages[index][1]" width="64" height="64" />
                </div>
            </div>
            <div class="movesContentRight">
                <div class="moveName">
                    {{ moveNamePlayer[index] }}
                </div>
                <div class="moveText">
                    {{ moveTextPlayer[index] }}
                </div>
            </div>
        </div>
    </div>
    <div class="hidden" id="upgradeAbility">
    </div>
    </div>
    <div id="equipment" class="hidden">
        <div class="upgrade-section">
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
                            <p>{{ playerClawLevel*3}} Gold</p> 
                            <p>Upgrade Claw</p></button>
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
                            <p>{{ playerMagicLevel*3}} Gold </p> 
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
                            <p>{{ playerSkullLevel*3}} Gold </p> 
                            <p>Upgrade Skull</p></button>
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
            activeAbility: 'none',
            combinationImagesUpgrade: 'none',
            combinationNamePlayerUpgrade: 'none',
            combinationTextPlayerUpgrade: 'none',
            playerName: null,
            playerActions: null,
            playerHealth: null,
            playerReputation: null,
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
            clawIcons: [
                { value: false },
                { value: false },
                { value: false },
                { value: false }
            ],
            imagePathsClaw: {
                trueImage: "src/assets/icons/claw.png",
                falseImage: "src/assets/icons/clawGray.png"
            },
            magicIcons: [
                { value: false },
                { value: false },
                { value: false },
                { value: false }
            ],
            imagePathsMagic: {
                trueImage: "src/assets/icons/magic.png",
                falseImage: "src/assets/icons/magicGray.png"
            },
            skullIcons: [
                { value: false },
                { value: false },
                { value: false },
                { value: false }
            ],
            imagePathsSkull: {
                trueImage: "src/assets/icons/skull.png",
                falseImage: "src/assets/icons/skullGray.png"
            },
            movesTableCombinationSwordSword: null, 
            movesTableCombinationMagicMagic: null, 
            movesTableCombinationSkullSkull: null, 
            movesTableCombinationSwordMagic: null, 
            movesTableCombinationMagicSkull: null, 
            movesTableCombinationSwordSkull: null,
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
            for(let i = 0; i < this.playerClawLevel; i++){
                this.clawIcons[i].value = true;
            }
            for(let i = 0; i < this.playerMagicLevel; i++){
                this.magicIcons[i].value = true;
            }
            for(let i = 0; i < this.playerSkullLevel; i++){
                this.skullIcons[i].value = true;
            }
        })
        socket.emit("getMovesTables");
        socket.emit("getActivePlayer");
    },
    methods: {
        toggleView() {
            if (this.currentView == "abilities") {
                this.currentView = "equipment"
            } else {
                this.currentView = "abilities"
            }
            this.toggleVisibility("abilities");
            this.toggleVisibility("equipment");
        },
        toggleVisibility(elementId) {
            var element = document.getElementById(elementId);
            if (element.classList.contains('visible')) {
                element.classList.remove('visible');
                element.classList.add('hidden');
            } else {
                element.classList.remove('hidden');
                element.classList.add('visible');
            }
        },
        getImageClaw(value) {
                return value ? this.imagePathsClaw.trueImage : this.imagePathsClaw.falseImage;
        },
        getImageMagic(value) {
                return value ? this.imagePathsMagic.trueImage : this.imagePathsMagic.falseImage;
        },
        getImageSkull(value) {
                return value ? this.imagePathsSkull.trueImage : this.imagePathsSkull.falseImage;
        },
        upgradeClaw(){
            socket.emit("upgradeClaw");
        },
        upgradeMagic(){
            socket.emit("upgradeMagic");
        },
        upgradeSkull(){
            socket.emit("upgradeSkull");
        },
        changeViewAbility(index){
            this.combinationImagesUpgrade = moveImages[index];
            this.combinationNamePlayerUpgrade = moveNamePlayer[index];
            this.combinationNameTextUpgrade = moveTextPlayer[index];
            this.toggleVisibility("abilities")
            this.toggleVisibility("upgradeAbility")
            this.toggleVisibility("buttons")
            this.toggleVisibility("backButton")
        },
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

.movesContentLeft{
    width: 50%;
    height: 100%;
    align-items: center;
}

.movesContentRight{
    width: 50%;
    display: flex;
    flex-direction: column;
}

.movesImages{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.moveName{
    display: flex;
    width: 100%;
    height: 50%;
    font-size: 20px;
    align-items: center;
}

.moveText{
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
}

#abilities {
    width: 100%;
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

.player-level{
    display: flex;
    flex-direction: row;
    width: 100%;
}

.player-level-icons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;
}

.player-level-icon img{
    border-radius: 10px;
    margin-right: 2.5px;
    margin-left: 2.5px;
}

.player-level-infos{
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    align-items: center;
}

.upgradeButtons{
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>
