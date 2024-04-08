<template>
<div class="content single">
    <h1>Character</h1>
    <div id="playerInfos">
        <div id="playerImage">
            <img :src="playerPicture" width="250" height="250" />
        </div>
        <div id="playerStatistics">
            <div class="cell" id="div11">
                <p>{{ playerName }}</p>
            </div>
            <div class="cell" id="div12">
                <p>Actions</p>
            </div>
            <div class="cell" id="div13">
                <p>{{ playerActions }}</p>
            </div>
            <div class="cell" id="div14">
                <p>Health</p>
            </div>
            <div class="cell" id="div15">
                <p>{{ playerHealth }}</p>
            </div>
            <div class="cell" id="div16">
                <p>Reputation</p>
            </div>
            <div class="cell" id="div17">
                <p>{{ playerReputation }}</p>
            </div>
            <div class="cell" id="div18">
                <p>Gold</p>
            </div>
            <div class="cell" id="div19">
                <p>{{ playerGold }}</p>
            </div>
        </div>
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
    <h2>Upgrades</h2>
    <div class="upgrade-section">
        <div class="gold-section">
            <p>Gold: {{ playerGold }}</p>
        </div>
        <div class="upgrade-options">
            <div class="upgrade-option">
                <img src="src/assets/icons/claw.png" alt="Claw" />
            </div>
            <div class="upgrade-option">
                <img src="src/assets/icons/magic.png" alt="Magic" />
            </div>
            <div class="upgrade-option">
                <img src="src/assets/icons/skull.png" alt="Skull" />
            </div>
        </div>
        <div class="player-levels">
            <div class="player-level">
                <p>Claw Level: {{ playerClawLevel }}</p>
            </div>
            <div class="player-level">
                <p>Claw Level: {{ playerMagicLevel }}</p>
            </div>
            <div class="player-level">
                <p>Claw Level: {{ playerSkullLevel }}</p>
            </div>
        </div>
        <div class="upgrade-costs">
            <div class="gold-required">
                <p>Gold Required: {{ goldRequiredClaw }}</p>
            </div>
            <div class="gold-required">
                <p>Gold Required: {{ goldRequiredMagic }}</p>
            </div>
            <div class="gold-required">
                <p>Gold Required: {{ goldRequiredSkull }}</p>
            </div>
          </div>
        <div class="upgrade-buttons">
            <div class="button-option">
                <button @click="upgradeClaw()">Upgrade Claw</button>
            </div>
            <div class="button-option">
                <button @click="upgradeMagic()">Upgrade Magic</button>
            </div>
            <div class="button-option">
                <button @click="upgradeSkull()">Upgrade Skull</button>
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
            goldRequiredClaw: 0,
            goldRequiredMagic: 0,
            goldRequiredSkull: 0,
            playerClawLevel: 0,
            playerMagicLevel: 0,
            playerSkullLevel: 0,
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

        })
        socket.emit("getActivePlayer");
    },
    methods: {
        upgradeClaw() {
            if(this.playerGold > this.goldRequiredClaw){
              socket.emit("upgradeClaw");
            }
            else{
              alert("too less gold ma boi")
            }
        },
        upgradeMagic() {
          if(this.playerGold > this.goldRequiredMagic){
              socket.emit("upgradeMagic");
            }
            else{
              alert("too less gold ma boi")
            }
        },
        upgradeSkull() {
          if(this.playerGold > this.goldRequiredSkull){
              socket.emit("upgradeSkull");
            }
            else{
              alert("too less gold ma boi")
            }
        },
    },
    beforeUnmount() {
        this.mounted = false;
    }
}
</script>

<style scoped>
#playerInfos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

#playerStatistics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 50%;
    border: solid 1px white;
}

#playerImage {
    width: 50%;
}

.cell {
    border: solid 1px white;
    display: flex;
    place-items: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}

p {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 0;
}

#div11 {
    grid-area: 1 / 1 / 2 / 3;
}

#div12 {
    grid-area: 2 / 1 / 3 / 2;
}

#div13 {
    grid-area: 2 / 2 / 3 / 3;
}

#div14 {
    grid-area: 3 / 1 / 4 / 2;
}

#div15 {
    grid-area: 3 / 2 / 4 / 3;
}

#div16 {
    grid-area: 4 / 1 / 5 / 2;
}

#div17 {
    grid-area: 4 / 2 / 5 / 3;
}

#div18 {
    grid-area: 5 / 1 / 6 / 2;
}

#div19 {
    grid-area: 5 / 2 / 6 / 3;
}

#div21 {
    grid-area: 1 / 1 / 2 / 2;
}

#div22 {
    grid-area: 1 / 2 / 2 / 3;
}

#div23 {
    grid-area: 1 / 3 / 2 / 4;
}

#div24 {
    grid-area: 1 / 4 / 2 / 5;
}

#div25 {
    grid-area: 1 / 5 / 2 / 6;
}

#div26 {
    grid-area: 1 / 6 / 2 / 7;
}

#div27 {
    grid-area: 1 / 7 / 2 / 8;
}

#div28 {
    grid-area: 1 / 8 / 2 / 9;
}

#div29 {
    grid-area: 1 / 9 / 2 / 10;
}

#div30 {
    grid-area: 1 / 10 / 2 / 11;
}

p {
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
    /* Adding right margin for even-numbered divs */
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

.upgrade-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.gold-section {
    margin-bottom: 20px;
}

.upgrade-options, .player-levels {
    display: flex;
    width: 100%;
}

.upgrade-option {
    width: 33.3333%;
    text-align: center;
    justify-content: center;
}

.upgrade-option img {
    width: 200px;
    height: 200px;
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

.button-option,
.gold-required, .player-level {
    width: 33.3333%
}
</style>
