<template>
<div class="content single">
    <h1>Upgrades</h1>
    <div class="buttons">
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
        <div id="combinationPlayer">
            <div v-for="(option, index) in optionsPlayer" :key="index" class="combinationPlayer">
                <div class="playerTop">
                    <div class="playerImages">
                        <img :src="combinationImages[index][0]" width="48" height="48" />
                        <img :src="combinationImages[index][1]" width="48" height="48" />
                    </div>
                    <div class="playerName">
                        {{ combinationNamePlayer[index] }}
                    </div>
                </div>
                <div class="playerBottom">
                    <div class="playerLittle">
                        <div>Schaden</div>
                        <div>{{ combinationDamagePlayer[index] }}</div>
                    </div>
                    <div class="playerLittle">
                        <div>Block</div>
                        <div>{{ combinationBlockPlayer[index] }}</div>
                    </div>
                    <div class="playerLittle">
                        <div>Heilen</div>
                        <div>{{ combinationHealPlayer[index] }}</div>
                    </div>
                    <div class="playerLittle">
                        <div>Dot</div>
                        <div>{{ combinationDotPlayer[index] }}</div>
                    </div>
                    <div class="playerBig">
                        <div>Reflektieren</div>
                        <div>{{ combinationReflectPlayer[index] }}</div>
                    </div>
                    <div class="playerBig">
                        <div>Nachwirkung</div>
                        <div>{{ combinationDamageNextRoundPlayer[index] }}</div>
                    </div>
                </div>
            </div>
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
                            <img :src="getImageClaw(item.value,)">
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
            playerName: null,
            playerActions: null,
            playerHealth: null,
            playerReputation: null,
            playerGold: null,
            combinationNamePlayer: ["", "", "", "", "", ""],
            combinationDamagePlayer: ["", "", "", "", "", ""],
            combinationBlockPlayer: ["", "", "", "", "", ""],
            combinationHealPlayer: ["", "", "", "", "", ""],
            combinationDotPlayer: ["", "", "", "", "", ""],
            combinationReflectPlayer: ["", "", "", "", "", ""],
            combinationDamageNextRoundPlayer: ["", "", "", "", "", ""],
            optionsPlayer: [1, 2, 3, 4, 5, 6],
            combinationImages: [
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
            currentView: 'abilities',
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
            
        }
    },
    mounted() {
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
            for (let i = 0; i < 6; i++) {
                this.combinationNamePlayer[i] = activePlayer.moves[i][0];
                this.combinationDamagePlayer[i] = activePlayer.moves[i][1] + activePlayer.clawLevel;
                this.combinationBlockPlayer[i] = activePlayer.moves[i][2] + activePlayer.magicLevel;
                this.combinationHealPlayer[i] = activePlayer.moves[i][3];
                this.combinationDotPlayer[i] = activePlayer.moves[i][4];
                this.combinationReflectPlayer[i] = activePlayer.moves[i][5];
                this.combinationDamageNextRoundPlayer[i] = activePlayer.moves[i][6];
            }
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

#combinationPlayer {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* Adding gap between the divs */
}

#combinationPlayer .combinationPlayer {
    flex-basis: calc(50% - 5px);
    box-sizing: border-box;
    padding: 5px;
    background-color: #6b6b6b;
    border-radius: 10px;
    height: 120px;
}

#combinationPlayer .combinationPlayer:nth-child(even) {
    margin-right: 0px;
}

#combinationPlayer .playerTop,
#combinationPlayer .playerBottom {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
}

#combinationPlayer .playerImages {
    width: 50%;
    justify-content: flex-end;
}

#combinationPlayer .playerName {
    width: 50%;
    justify-content: flex-start;
    font-size: 20px;
}

#combinationPlayer .playerBottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

#combinationPlayer .playerBottom .playerLittle {
    width: 14%;
}

#combinationPlayer .playerBig {
    width: 22%;
}

#combinationPlayer img {
    border-radius: 5px;
    margin: 5px;
}

#abilities {
    width: 80%;
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
    width: 50%;
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
