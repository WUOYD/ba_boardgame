<template>
<div class="content">
    <div v-if="introStep == 'Video'" id="introVideo">
        <iframe src="https://www.youtube.com/embed/x4UxBVbktzk?si=uCNidyWeEGJG4QS9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <button @click="this.skipVideo()">Weiter</button>
    </div>
    <div v-if="introStep == 'Rules'" id="rules">
        <div v-if="this.rulesPage == 0" class="rulesPage" id="rulesPageFirst">
            <div class="logo-wrapper">
                <img :src="logo">
            </div>
            <p>Spielst du zum ersten Mal Legenden von Synn?</p>
            <button @click="this.rulesPage += 1">Einführung beginnen</button>
            <button @click="this.skipRules()">Überspringen</button>
        </div>
        <div v-if="this.rulesPage == 1" class="rulesPage">
            <h2>Spielziel</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">
                    <div class="borderRules">
                        <p>"Legenden von Synn" wird in drei Phasen gespielt. Ziel des Spiels ist es, am Ende aller Phasen die meisten Siegpunkte zu haben.</p>
                    </div>
                </div>
                <div class="contentRulesRight">
                    <p>Spielphasen</p>
                    <p>Phasenstruktur: Das Spiel besteht aus drei Phasen. Jede Phase führt neue Mechaniken ein, die das Spielgeschehen beeinflussen.</p>
                    <p>Phasenende: Eine Phase endet, sobald alle Bossgegner der jeweiligen Phase besiegt sind.</p>
                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 2" class="rulesPage">
            <h2>Spielziel</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">
                    <p>Siegpunkte sammeln: Siegpunkte werden durch das Besiegen von Bossgegnern und das Sammeln von Glauben auf den verschiedenen Inseln errungen.</p>
                    <p>Nach dem Ende der dritten Phase gewinnt die Spielerin oder der Spieler mit den meisten Siegpunkten.</p>
                </div>
                <div class="contentRulesRight">
                    <p>Erlangen von Glauben: Glauben kann durch das Erfüllen von Aufträgen und das Besiegen von Gegnern gewonnen werden. Glaubenspunkte werden jeweils pro Insel gewertet und zählen nur für die Insel auf denen sie gesammelt wurden.</p>
                    <p>Am Ende einer Phase bekommen die Spielenden jeweils 1 Siegpunkt für jede Insel, auf der sie am meisten Glaubenspunkte gesammelt haben.</p>
                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 3" class="rulesPage">
            <h2>Bewegung und Aktionen</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">
                    <p>Bewegung</p>
                    <p>Jeder Spielende darf sich pro Spielzug bis zu zwei Felder bewegen. Das Fortbewegen auf dem Spielfeld zählt nicht zu den Aktionen.</p>
                </div>
                <div class="contentRulesRight">
                    <p>Aktionen pro Zug</p>
                    <p>Jeder Spielende darf pro Spielzug bis zu zwei verschiedene Aktionen ausführen, jedoch jede Aktion nur einmal. Es gibt 6 verschiedene Aktionen, die ausgeführt werden können.</p>
                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 4" class="rulesPage">
            <h2>Aktionen</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 5" class="rulesPage">
            <h2>Aktionen</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 6" class="rulesPage">
            <h2>Monster und Kampf</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 7" class="rulesPage">
            <h2>Spielziel</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 8" class="rulesPage">
            <h2>Bossmonster</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 9" class="rulesPage">
            <h2>Bossmonster</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 10" class="rulesPage">
            <h2>Aufträge</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 11" class="rulesPage">
            <h2>Aufträge</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 12" class="rulesPage">
            <h2>Aufträge</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 13" class="rulesPage">
            <h2>Charakter aufwerten</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 14" class="rulesPage">
            <h2>Wertung</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.rulesPage += 1">Weiter</button>
            </div>
        </div>
        <div v-if="this.rulesPage == 15" class="rulesPage">
            <h2>Spielbeginn</h2>
            <div class="contentRules">
                <div class="contentRulesLeft">

                </div>
                <div class="contentRulesRight">

                </div>
            </div>
            <div class="ruleButtons">
                <button @click="this.rulesPage -= 1">Zurück</button>
                <button @click="this.skipRules()">Weiter</button>
            </div>
        </div>
    </div>
    <div v-if="introStep == 'Lobby'" id="playerList">
        <div class="logo-wrapper">
            <img :src="logo">
        </div>
        <div class="tableHeader">
            <p>Spielername</p>
            <p>Status</p>
        </div>
        <div id="playerInfos">
            <div id="playerNames">
                <div v-for="(player, index) in playerList" :key="index" class="playerName">
                    <p>{{ player.name }}</p>
                </div>
            </div>
            <div id="playerStates">
                <div v-for="(playerState, index) in playerReadyList" :key="index" class="playerState">
                    <p>{{ playerState ? 'Bereit' : 'Nicht Bereit' }}</p>
                </div>
            </div>
        </div>
        <div class="buttons">
            <button @click="this.playerReady()">Bereit</button>
            <button v-if="this.host == true" @click="this.startGame()">Spiel starten</button>
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
            playerList: null,
            playerReadyList: null,
            host: false,
            logo: "src/assets/logo/Logo.png",
            introStep: "Video",
            rulesPage: 0,
        }
    },
    mounted() {
        socket.on('updatePlayer', activePlayer => {
            this.host = activePlayer.host
        })
        socket.on('setReadyState', playerState => {
            this.playerList = playerState.playerList
            this.playerReadyList = playerState.readyList
        })
        socket.emit("getReadyState");
        socket.emit("getActivePlayer");
    },
    methods: {
        playerReady() {
            socket.emit("changeReadyState");
        },
        startGame() {
            socket.emit("hostStartGame");
        },
        skipVideo() {
            this.introStep = "Rules";
        },
        skipRules() {
            this.introStep = "Lobby";
        }
    },

}
</script>

<style >

</style>
