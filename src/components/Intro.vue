<template>
<div class="content">
    <div v-if="introStep == 'Video'" id="introVideo">
        <iframe src="https://www.youtube.com/embed/CEoyHUsepdU?si=u_TzwK7QxyVaAvY9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                    <div class="contentRulesRow">
                        <div class="contentRulesRowElement">
                            <img :src="imageInvestigate">
                        </div>
                        <div class="contentRulesRowElement">
                            <p>Untersuchen</p>
                            <p>Erkunde dein aktuelles Spielfeld um Aufträge, Monster oder Loot zu finden</p>
                        </div>
                    </div>
                    <div class="contentRulesRow">
                        <div class="contentRulesRowElement">
                            <img :src="imageChangeIsland"/>
                        </div>
                        <div class="contentRulesRowElement">
                            <p>Insel wechseln</p>
                            <p>Reise auf eine benachbarte Insel. Diese Aktion kann nur an einem Hafen (◇) aus durchgeführt werden</p>
                        </div>
                    </div>
                </div>
                <div class="contentRulesRight">
                    <div class="contentRulesRow">
                        <div class="contentRulesRowElement">
                            <img :src="imageHeal">
                        </div>
                        <div class="contentRulesRowElement">
                            <p>Heilen</p>
                            <p>Heile dich um die Hälfte deines verlorenen Lebens +2</p>
                        </div>
                    </div>
                    <div class="contentRulesRow">
                        <div class="contentRulesRowElement">
                            <img :src="imageEndTurn"/>
                        </div>
                        <div class="contentRulesRowElement">
                            <p>Zug beenden</p>
                            <p>Du kannst den eigenen Zug jederzeit beenden</p>
                        </div>
                    </div>
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
                    <div class="contentRulesRow">
                        <div class="contentRulesRowElement">
                            <img :src="imageQuest">
                        </div>
                        <div class="contentRulesRowElement">
                            <p>Auftrag</p>
                            <p>Interagiere mit den Auftraggeber*innen. Diese Aktion ist nur möglich, wenn ein aktiver Auftrag vorliegt und dich auf dem Auftragsmarker befindet.</p>
                        </div>
                    </div>
                </div>
                <div class="contentRulesRight">
                    <div class="contentRulesRow">
                        <div class="contentRulesRowElement">
                            <img :src="imageBoss">
                        </div>
                        <div class="contentRulesRowElement">
                            <p>Boss</p>
                            <p>Bekämpfe ein mächtiges Bossmonster. Diese Aktion ist nur möglich, wenn du dich auf demselben Feld wie das Bossmonster befindet.</p>
                        </div>
                    </div>
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
                    <div class="contentRulesDiv">
                        <p>Monster</p>
                        <p>Beim Besiegen von Monster kannst du Gold und Glaube erhalten.</p>
                    </div>
                    <div class="contentRulesRow">
                        <div class="contentRulesRowElement">
                            <p>Spielerwürfel</p>
                        </div>
                        <div class="contentRulesRowElementRow">
                            <img :src="imageClaw">
                            <img :src="imageMagic">
                            <img :src="imageSkull">
                        </div>
                    </div>
                    <div class="contentRulesRow">
                        <div class="contentRulesRowElement">
                            <p>Monsterwürfel</p>
                        </div>
                        <div class="contentRulesRowElementRow">
                            <img :src="imageClaw">
                            <img :src="imageMagic">
                            <img :src="imageSkull">
                        </div>
                    </div>
                </div>
                <div class="contentRulesRight">
                    <p>Würfel</p>
                    <p>Würfle mit deinen drei Würfeln und wähle zwei davon aus, um deinen Angriff zu bestimmen. Ein/eine Mitspieler*in würfelt mit zwei Monsterwürfeln. Diese Kombination entscheidet den Angriff des Monsters.</p>
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
                <div class="contentRulesFull">
                    <img :src="imageEncounter">
                    <div>
                        <div class="borderRules"><p>1. Wähle 2 deiner 3 Würfel aus und tippe die Kombination an.</p></div>
                        <div class="borderRules"><p>2. Dann mit kann "Bestätigen" du deine Eingabe bestätigen.</p></div>    
                    </div>
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
                    <p>Jede Insel beheimatet ein Bossmonster. Diese gilt es in jeder Phase zu besiegen. Sobald alle Bossmonster besiegt sind, wird die Phase beendet. Diese Monster geben dir sofort Siegpunkte, sowie Glauben und Gold. Die Bossmonster bewegen sich nach jeder vollen Runde um ein Feld in Pfeilrichtung vorwärts.</p>
                </div>
                <div class="contentRulesRight">
                    <div class="borderRules">
                        <p>Achtung!</p>
                        <p>Sobald du dich auf demselben Spielfeld wie ein Bossmonster befindest, musst du dieses bekämpfen. Es ist nicht möglich, sich an einem Bossmonster vorbeizubewegen, ohne einen Kampf auszutragen. Aber vorsicht, Bossmonster sind starke Gegner, meide sie in den ersten Spielzügen.</p>
                    </div>
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
                    <p>Pflichtkampf</p>
                    <p>Wenn ein Bossmonster am Ende einer Runde auf dein Spielfeld gelangt musst du in deinem nächsten Spielzug gegen dieses kämpfst.</p>
                    <div class="borderRules">
                        <p>Bei Spielbeginn:</p>
                        <p>Legt die Monstermarker auf die Festgelegeten Monsterpunkte</p>
                    </div>
                </div>
                <div class="contentRulesRight">
                    <div class="contentRulesFull">
                        <img :src="imageMapRules">
                    </div>
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
                    <p>Auftragsgeber*innen können durch das Untersuchen von Spielfeldern gefunden werden. </p>
                    <p>Bei den meisten Aufträgen gibt es zwei Entscheidungsmöglichkeiten. Du kannst sie ehrenhaft oder unehrenhaft lösen. Beide Ansätze bieten dir Vor- und Nachteile. </p>
                </div>
                <div class="contentRulesRight">
                    <p>Ehrenhafte Auswahl: Ehrenhafte Lösungen geben dir Glauben, dafür aber meist weniger Belohnung. </p>
                    <p>Unehrenhafte Auswahl: Die Unehrenhafte Variante gibt dir oft mehr Belohnungen, aber Achtung dein Glaube könnte sinken! Entscheide also mit Bedacht.</p>
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
                    <p>Nimmst du einen Auftrag an, wird dir die Position der Auftragsmarker auf deinem Bildschrim angezeigt. Diese zeigen dir an, wo du deinen Auftrag erledigen kannst. Platziere sie also auf den angezeigten Positionen.</p>
                </div>
                <div class="contentRulesRight">
                    <div class="contentRulesFull">
                        <img :src="imageMapRulesFull">
                    </div>
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
                    <div class="contentRulesFull">
                        <img :src="imageQuest">
                    </div>
                </div>
                <div class="contentRulesRight">
                    <p>Nachdem du einen Auftrag angenommen hast, erscheint auf deinem Bildschirm das Auftragssymbol.</p>
                    <p>Befindest du dich anschliessend auf dem Marker kannst du durch das Auftragssymbol die Quest abhandeln.</p>
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
                    <p>Es gibt zwei Möglichkeiten um während dem Spiel stärker zu werden. Reise hierfür nach Elysoria um deinen Charakter aufzuwerten.</p>
                </div>
                <div class="contentRulesRight">
                    <p>Ausrüstung verstärken: Ausrüstung verstärkt deine Fähigkeiten. Dies kostet dich Gold.</p>
                    <p>Fähigkeiten austauschen: Du kannst während dem Spiel neue Fähigkeiten freischalten. Diese kannst du anschliessend austauschen um so mächtigere Angriffe auszurüsten.</p>
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
                    <p>Beim Phasenende werden die Gesammelten Glaubenspunkte und die Siegpunkte durch das Besiegen der Bossmonster gewertet.</p>
                    <p>Auf jeder Insel, auf welcher du die meisten Glaubenspunkte erringen konntest, erhälst du einen Siegpunkt.</p>
                </div>
                <div class="contentRulesRight">
                    <p>Bei Gleichstand der Glaubenspunkte erhalten beide Spielende einen Siegpunkt für die betroffene Insel.</p>
                    <p>Im Anschluss zum Phasenende wird ein Phasenevent eingeleitet, welches den Spielverlauf für die kommende Phase verändert.</p>
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
                <div class="contentRulesFullColumn">
                    <p>Ihr seid jetzt bereit.</p>
                    <p>Stellt die Apostel auf die Häfen der jeweiligen Inseln und beginnt das Spiel.</p>
                    <div id="contentRulesPlayer">
                        <div class="contentRulesPlayerDiv">
                            <img :src="imageRanger">
                            <p>Athos</p>
                        </div>
                        <div class="contentRulesPlayerDiv">
                            <img :src="imageMage">
                            <p>Nythoria</p>
                        </div>
                        <div class="contentRulesPlayerDiv">
                            <img :src="imageThief">
                            <p>Drakan</p>
                        </div>
                        <div class="contentRulesPlayerDiv">
                            <img :src="imageBarbarian">
                            <p>Frosgar</p>
                        </div>
                    </div>
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
            imageChangeIsland: "/src/assets/icons/changeIsland.png",
            imageInvestigate: "/src/assets/icons/investigate.png",
            imageMove: "/src/assets/icons/move.png",
            imageHeal: "/src/assets/icons/heart.png",
            imageQuest: "/src/assets/icons/quest.png",
            imageQuestBig: "/src/assets/icons/quest_big.png",
            imageGold: "/src/assets/icons/gold.png",
            imageMap: "/src/assets/icons/map_border.png",
            imageEndTurn: "/src/assets/icons/endTurn.png",
            imageBoss: "/src/assets/icons/boss.png",
            imageClaw: "src/assets/icons/claw.png",
            imageMagic: "src/assets/icons/magic.png",
            imageSkull: "src/assets/icons/skull.png",
            imageEncounter: "src/assets/img/misc/encounter.png",
            imageMapRules: "src/assets/img/misc/map_rules.png",
            imageMapRulesFull: "src/assets/img/quest/maps/Aria_Karte.webp",
            imageRanger: "src/assets/img/player/ranger_full.webp",
            imageMage: "src/assets/img/player/mage_full.webp",
            imageBarbarian: "src/assets/img/player/barbarian_full.webp",
            imageThief: "src/assets/img/player/thief_full.webp",
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
