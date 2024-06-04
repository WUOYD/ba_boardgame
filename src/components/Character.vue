<template>
<div class="content" id="character">
    <div id="contentLeft">
        <div id="playerImage">
            <img :src="playerPictureFull" />
        </div>
    </div>
    <div id="contentRight">
        <div id="playerName">
            <h1>{{ playerName }}</h1>
        </div>
        <div id="playerStatistics">
            <div class="headerItem" id="playerStatisticsLevels">
                    <div class="levelElement">
                        <img :src="imageClaw" />
                        <div class="levelElementText">Schwert</div>
                        <p>+{{ clawLevel }}</p>
                    </div>
                    <div class="levelElement">
                        <img :src="imageMagic" />
                        <div class="levelElementText">Schild</div>
                        <p>+{{ magicLevel}}</p>
                    </div>
                    <div class="levelElement">
                        <img :src="imageSkull" />
                        <div class="levelElementText">Totenkopf</div>
                        <p>+{{ skullLevel}}</p>
                    </div>
                    
            </div>
        </div>
        <div id="movesPlayer">
            <div v-for="(option, index) in optionsPlayer" :key="index" class="movesCombinationPlayer">
                <div class="movesContentLeft">
                    <div class="movesImages">
                        <img :src="moveImages[index][0]" />
                        <img :src="moveImages[index][1]" />
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
            imageGold: "/src/assets/icons/gold.png",
            imageHealth: "/src/assets/icons/heart.png",
            imageClaw: "src/assets/icons/claw.png",
            imageMagic: "src/assets/icons/magic.png",
            imageSkull: "src/assets/icons/skull.png",
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
            this.playerPictureFull = activePlayer.pictureFull;
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

<style>

</style>
