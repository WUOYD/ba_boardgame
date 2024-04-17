<template>
<div class="content single">
    <h1>Upgrades</h1>
    <div id="playerInfos">
        <div id="playerImage">
            <img :src="playerPicture" width="250" height="250" />
        </div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>
                        <p>{{ playerName }}</p>
                    </td>
                </tr>
                <tr>
                    <th>Actions</th>
                    <td>
                        <p>{{ playerActions }}</p>
                    </td>
                </tr>
                <tr>
                    <th>Health</th>
                    <td>
                        <p>{{ playerHealth }}</p>
                    </td>
                </tr>
                <tr>
                    <th>Reputation</th>
                    <td>
                        <p>{{ playerReputation }}</p>
                    </td>
                </tr>
                <th>Gold</th>
                <td>
                    <p>{{ playerGold }}</p>
                </td>
            </tbody>
        </table>
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
    font-size: 16px;
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
