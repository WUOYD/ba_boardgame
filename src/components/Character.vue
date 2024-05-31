<template>
<div class="content single">
    <h1>Character</h1>
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
                    <th>Health</th>
                    <td>
                        <p>{{ playerHealth }}</p>
                    </td>
                </tr>
                <th>Gold</th>
                <td>
                    <p>{{ playerGold }}</p>
                </td>
            </tbody>
        </table>
    </div>
    <div id="movesPlayer">
        <div v-for="(option, index) in optionsPlayer" :key="index" class="movesCombinationPlayer">
            <div class="movesContentLeft">
                <div class="movesImages">
                    <img :src="moveImages[index][0]" width="100" height="100" />
                    <img :src="moveImages[index][1]" width="100" height="100" />
                </div>
            </div>
            <div class="movesContentRight">
                <div class="moveName">
                    {{ moveNamePlayer[index] }}
                </div>
                <div class="moveText">
                    <span v-if="moveDamagePlayer[index] !== '-'">{{ moveDamagePlayer[index] + clawLevel + skullLevel}} Schaden</span>
                    <span id="commaSpan" v-if="moveDamagePlayer[index] !== '-' && moveBlockPlayer[index] !== '-'">,</span>
                    <span v-if="moveBlockPlayer[index] !== '-'">{{ moveBlockPlayer[index] + magicLevel + skullLevel}} Block</span>
                    <span id="commaSpan" v-if="moveBlockPlayer[index] !== '-' && moveHealPlayer[index] !== '-'">,</span>
                    <span v-if="moveHealPlayer[index] !== '-'">{{ moveHealPlayer[index] + magicLevel+ skullLevel }} Heilen</span>
                    <span id="commaSpan" v-if="moveHealPlayer[index] !== '-' && moveDotPlayer[index] !== '-'">,</span>
                    <span v-if="moveDotPlayer[index] !== '-'">{{ moveDotPlayer[index] + skullLevel}} Schaden jede Runde</span>
                    <span id="commaSpan" v-if="moveDotPlayer[index] !== '-' && moveReflectPlayer[index] !== '-'">,</span>
                    <span v-if="moveReflectPlayer[index] !== '-'">{{ moveReflectPlayer[index] + magicLevel + skullLevel}} Reflektieren</span>
                    <span id="commaSpan" v-if="moveReflectPlayer[index] !== '-' && moveReflectPlayer[index] !== '-'">,</span>
                    <span v-if="moveDamageNextRoundPlayer[index] !== '-'">{{ moveDamageNextRoundPlayer[index] + skullLevel}} Schaden nächste Runde</span>
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
            moveNamePlayer: ["", "", "", "", "", ""],
            moveDamagePlayer: ["", "", "", "", "", ""],
            moveBlockPlayer: ["", "", "", "", "", ""],
            moveHealPlayer: ["", "", "", "", "", ""],
            moveDotPlayer: ["", "", "", "", "", ""],
            moveReflectPlayer: ["", "", "", "", "", ""],
            moveDamageNextRoundPlayer: ["", "", "", "", "", ""],
            optionsPlayer: [1, 2, 3, 4, 5, 6],
            moveImages: [
                ["src/assets/icons/claw.png", "src/assets/icons/claw.png"],
                ["src/assets/icons/claw.png", "src/assets/icons/magic.png"],
                ["src/assets/icons/magic.png", "src/assets/icons/magic.png"],
                ["src/assets/icons/magic.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/skull.png"],
                ["src/assets/icons/skull.png", "src/assets/icons/claw.png"],
            ],
            moveTables: null,
            clawLevel: 0,
            magicLevel: 0,
            skullLevel: 0,
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
            this.moveTables = [
                this.movesTableCombinationSwordSword,
                this.movesTableCombinationSwordMagic,
                this.movesTableCombinationMagicMagic,
                this.movesTableCombinationMagicSkull,
                this.movesTableCombinationSkullSkull,
                this.movesTableCombinationSwordSkull
            ]
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
            this.clawLevel = activePlayer.clawLevel;
            this.magicLevel = activePlayer.magicLevel;
            this.skullLevel = activePlayer.skullLevel;

            for (let i = 0; i < 6; i++) {
                    const moveIndex = activePlayer.moves[i][0];
                    const moveTable = this.moveTables[i];

                    if (moveTable && moveTable[moveIndex]) {
                        const move = moveTable[moveIndex];
                        this.moveNamePlayer[i] = move.name || "-";
                        this.moveDamagePlayer[i] = move.damage !== 0 ? move.damage : "-";
                        this.moveBlockPlayer[i] = move.block !== 0 ? move.block : "-";
                        this.moveHealPlayer[i] = move.heal !== 0 ? move.heal : "-";
                        this.moveDotPlayer[i] = move.dot !== 0 ? move.dot : "-";
                        this.moveReflectPlayer[i] = move.reflect !== 0 ? move.reflect : "-";
                        this.moveDamageNextRoundPlayer[i] = move.damageNextRound !== 0 ? move.damageNextRound : "-";
                    }
                }

        })
        socket.emit("getMovesTables");
        socket.emit("getActivePlayer");
    },
    methods: {},
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
    width: 50%;
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
    height: 40%;
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

#commaSpan {
    margin-right: 10px;
}
</style>
