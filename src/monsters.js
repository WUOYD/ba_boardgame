const monsterTableBronzeNythoria = [
    {
        name: "Wilder Ghul",
        type: "Bronze",
        health: 4,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/ghul.webp",
        moves: [
            { name: "Kratzer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schrei des Todes", text: "1 Block, 1 Schaden nächste Runde", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Giftiger Hauch", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Untote Ausdauer", text: "1 Heilung", damage: 0, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Grabesgriff", text: "3 Schaden, 2 Selbstschaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -2 },
            { name: "Reissen", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Seelenfresser",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/seelenfresser.webp",
        moves: [
            { name: "Klingenhieb", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schattenklinge", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Seelenraub", text: "2 Schaden, SchadenNext-1", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -1 },
            { name: "Schattenwelt", text: "2 Schaden, 2 Block", damage: 2, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Lebensdieb", text: "2 Schaden, 2 Heilung", damage: 2, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Korruption", text: "1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Traumspinner",
        type: "Bronze",
        health: 5,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/traumspinner.webp",
        moves: [
            { name: "Traum", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magischer Traum", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Traumfänger", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Hypnose", text: "2 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Albtraum", text: "4 Schaden, 5 Selbstschaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -5 },
            { name: "Insomnia", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Künstlicher Golem",
        type: "Bronze",
        health: 7,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/golem.webp",
        moves: [
            { name: "Trümmerer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Kraftstoss", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magieschild", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Kraftschild", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Beben", text: "2 Schaden, 2 Block", damage: 2, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magmafall", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Traumspinner-Königin",
        type: "Bronze",
        health: 8,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/traumspinner-koenigin.webp",
        moves: [
            { name: "Traumwanderer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Traumweben", text: "1 Schaden, 1 Reflektieren", damage: 1, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Illusion", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Traumportal", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Seelenernte", text: "2 Schaden, 2 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Albtraumwelle", text: "2 Schaden, 2 Reflektieren", damage: 2, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 }
        ]
    }
]

const monsterTableBronzeDrakan = [
    {
        name: "Salamander",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/salamander.webp",
        moves: [
            { name: "Biss", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Glühende Berührung", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Hitzewelle", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Flammpanzer", text: "3 Block, 1 Reflektieren", damage: 0, block: 3, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Feuergift", text: "1 Schaden, 1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Magmafall", text: "1 Heilung, 2 Schaden", damage: 2, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Aschengeist",
        type: "Bronze",
        health: 4,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/aschengeist.webp",
        moves: [
            { name: "Flämmchen", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flämmchen", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flämmchen", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flämmchen", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flammenmeer", text: "4 Schaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flämmchen", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Drachenjunges",
        type: "Bronze",
        health: 5,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/drachenjunges.webp",
        moves: [
            { name: "Feuerstoss", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Drachengebrüll", text: "1 Block, 1 Schaden nächste Runde", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Flügelschlag", text: "1 Heilung, 1 Reflektieren", damage: 0, block: 0, heal: 1, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Drachenpanzer", text: "5 Block", damage: 0, block: 5, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Drachenwut", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Drachenfeuer", text: "1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Obsidian Golem",
        type: "Bronze",
        health: 8,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/obsidian-golem.webp",
        moves: [
            { name: "Schwerer Schlag", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Bereitschaft", text: "1 Schaden, 1 Schaden nächste Runde, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Steinhaut Panzerung", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Magie Absorption", text: "1 Heilung, 1 Block", damage: 0, block: 1, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Splitterexplosion", text: "3 Schaden, 2 Selbstschaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -2 },
            { name: "Obsidianklingen", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 }
        ]
    },    
    {
        name: "Feuerkobold",
        type: "Bronze",
        health: 4,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/glubber.webp",
        moves: [
            { name: "Klauenangriff", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Feueratem", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Jinx", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Flammenwand", text: "2 Schaden, 1 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Explosion", text: "4 Schaden, 4 Selbstschaden", damage: 4, block: 0, heal: -4, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Koboldbiss", text: "3 Schaden, -1 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -1 }
        ]
    }
]

const monsterTableBronzeTalvar= [
    {
        name: "Goblin Jäger",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/goblin_jaeger.webp",
        moves: [
            { name: "Steinwurf", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Speerwurf", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flinkheit", text: "4 Block", damage: 0, block: 4, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Meditation", text: "1 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Vergifteter Dolch", text: "1 Schaden jede Runde", damage: 0, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Kritischer Treffer", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Betrunkener Goblin",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/betrunkener_goblin.webp",
        moves: [
            { name: "Kratzer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wolfsruf", text: "2 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Rückzieher", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schattenspiel", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blutrunst", text: "2 Schaden, 1 Heilung", damage: 2, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Riss", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Hogoblin",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/hogoblin.webp",
        moves: [
            { name: "Fauler Atem", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magisches Ritual", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Feuerball", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magisches Schild", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Verwesung", text: "1 Schaden, 1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Zorn", text: "4 Schaden, 1 Selbstschaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -1 }
        ]
    },
    {
        name: "Banditenanführer",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/banditenanfuehrer.webp",
        moves: [
            { name: "Klingenhieb", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Doppelklingenschlag", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Verwirrung Stiften", text: "Reflect", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schattenwelt", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Giftfalle", text: "2 Schaden, 1 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Schattenangriff", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Verwundeter Bandit",
        type: "Bronze",
        health: 4,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/verwundeter-bandit.webp",
        moves: [
            { name: "Faustschlag", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Tritt", text: "2 Schaden, 1 Selbstschaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -1 },
            { name: "Sandwurf", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Ausweichmanöver", text: "4 Block, 1 Reflektieren", damage: 0, block: 4, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Hinterhalt", text: "2 Schaden , 1 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Dolchstich", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    }
]

const monsterTableBronzeFrosgar= [
    {
        name: "Eisgolem",
        type: "Bronze",
        health: 8,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/eisgolem.webp",
        moves: [
            { name: "Eisige Briese", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Eissplitter", text: "1 Schaden,  1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Frostrüstung", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Frost Nova", text: "2 Schaden, 1 Block", damage: 2, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blizzard", text: "2 Schaden. 2 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Erfrierung", text: "1 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Frostgreif",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/frostgreif.webp",
        moves: [
            { name: "Kratzer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wolfsruf", text: "2 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Rückzieher", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schattenspiel", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blutrunst", text: "2 Schaden, 1 Heilung", damage: 2, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Riss", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Irrlicht",
        type: "Bronze",
        health: 4,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/irrlicht.webp",
        moves: [
            { name: "Seelenraub", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Aufladung", text: "1 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Blendung", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Gleissendes Licht", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Seelenraub", text: "1 Schaden, 1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Eruption", text: "3 Schaden, 4 Selbstschaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -4 }
        ]
    },
    {
        name: "Jähzorniger Schneehasenkrieger",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/schneehasenkrieger.webp",
        moves: [
            { name: "Klopfer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blumenwedler", text: "1 Heilung", damage: 0, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schrei des Hasenlords", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schneesturm Salto", text: "2 Schaden, 1 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Todeshoppeln", text: "2 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Hasenkeule", text: "2 Schaden, 1 Block", damage: 2, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Eisphönix",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/eisphoenix.webp",
        moves: [
            { name: "Eisige Briese", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Eissplitter", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Eisrose", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Frosttornado", text: "1 Schaden, 1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Wiedergeburt", text: "3 Heilung", damage: 0, block: 0, heal: 3, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Permafrost", text: "1 Heilung, 1 Schaden", damage: 1, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    }
]

const monsterTableBronzeAthos= [
    {
        name: "Manfred",
        type: "Bronze",
        health: 8,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/manfred.webp",
        moves: [
            { name: "Dornen", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blätterpanzer", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wachstum", text: "2 Heilung", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Dornenpanzer", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Entend", text: "2 Selbstschaden, 4 Schaden", damage: 4, block: 0, heal: -2, dot: 0, reflect: 3, damageNextRound: 0 },
            { name: "Stolpern", text: "1 Selbstschaden", damage: 0, block: 0, heal: -1, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Dryade",
        type: "Bronze",
        health: 4,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/dryade.webp",
        moves: [
            { name: "Blättermeer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blätterschild", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Rankenschild", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Waldgeist - Ruf", text: "SchadenNext 1", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Giftige Dornen", text: "1 Schaden jede Runde", damage: 0, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Dornenpeitsche", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Dryadenkönigin",
        type: "Bronze",
        health: 8,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/dryadenkoenigin.webp",
        moves: [
            { name: "Ästepeitsche", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blütenstaub", text: "1 Reflektieren, 1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Heilige Erde", text: "1 Heilung, 1 Block", damage: 0, block: 1, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flügelschlag", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Regeneration", text: "2 Heilung, 2 Reflektieren", damage: 0, block: 0, heal: 2, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Drachenfeuer", text: "1 Schaden jede Runde", damage: 0, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Peter",
        type: "Bronze",
        health: 5,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/peter.webp",
        moves: [
            { name: "Dornen", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Dornenpanzer", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Wurzelschlag", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Nebelwand", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Regeneration", text: "2 Heilung", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Ausbruch", text: "2 Selbstschaden, 2 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 }
        ]
    },
    {
        name: "Kleiner Ork",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/kleiner-ork.webp",
        moves: [
            { name: "Keulenhieb", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Meditation", text: "2 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Steinwurf", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Ogergebrüll", text: "5 Block", damage: 0, block: 5, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wiedergeburt", text: "3 Schaden, -1 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -1 },
            { name: "Hinterhalt", text: "2 Schaden, 1 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 }
        ]
    }    
]

const monsterTableBronzeAridora= [
    {
        name: "Schlangenmagier",
        type: "Bronze",
        health: 5,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/schlangenmagier.webp",
        moves: [
            { name: "Schlangenbiss", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Vipernvision", text: "2 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Hypnotischer Blick", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Zungenzauber", text: "2 Heilung, 2 Schaden", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Giftmagie", text: "2 Schaden, 1 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Schlangenruf", text: "2 Schaden, 1 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 }
        ]
    },
    {
        name: "Schlangenkämpfer",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/schlangenkaempfer.webp",
        moves: [
            { name: "Schlängelnder Angriff", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schlangentanz", text: "1 Schaden nächste Runde, 1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Schuppenpanzerung", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Schlangenumarmung", text: "1 Schaden jede Runde", damage: 0, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Schlangenschwert", text: "4 Schaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schlangenbiss", text: "2 Schaden, 2 Heilung", damage: 2, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Gürtelwächter",
        type: "Bronze",
        health: 8,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/guertelwaechter.webp",
        moves: [
            { name: "Rollenangriff", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schwingende Panzerplatte", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Verteidigungsposition", text: "5 Block, 1 Reflektieren, -1 Schaden nächste Runde", damage: 0, block: 5, heal: 0, dot: 0, reflect: 1, damageNextRound: -1 },
            { name: "Erdbindung", text: "1 Heilung", damage: 0, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Panzerstoss", text: "1 Block, 2 Schaden", damage: 2, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Tempelschild", text: "3 Schaden, -2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -2 }
        ]
    },
    {
        name: "Junger Gnoll",
        type: "Bronze",
        health: 4,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/junger-gnoll.webp",
        moves: [
            { name: "Bissattacke", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Krallenangriff", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Agressive Verteidigung", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Verdeckter Angriff", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Rudelruf", text: "2 Heilung, 2 Schaden", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Steinwurf", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Gnolljäger",
        type: "Bronze",
        health: 6,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/gnolljaeger.webp",
        moves: [
            { name: "Schleuderangriff", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wendigkeit", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Tarnung", text: "3 Block", damage: 0, block: 3, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Überlebenswille", text: "1 Block, 1 Heilung, 1 Reflektieren", damage: 0, block: 1, heal: 1, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Giftige Pfeile", text: "1 Schaden, 1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Schneller Angriff", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    }
]

const monsterTableSilverNythoria = [
    {
        name: "Wilder Ghul",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/ghul.webp",
        moves: [
            { name: "Kratzer", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schrei des Todes", text: "2 Block, 2 Schaden nächste Runde", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Giftiger Hauch", text: "2 Schaden, 2 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Untote Ausdauer", text: "2 Heilung", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Grabesgriff", text: "4 Schaden, 2 Selbstschaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -2 },
            { name: "Reissen", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Seelenfresser",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/seelenfresser.webp",
        moves: [
            { name: "Klingenhieb", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schattenklinge", text: "2 Schaden, 2 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Seelenraub", text: "2 Schaden, SchadenNext-1", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -1 },
            { name: "Schattenwelt", text: "2 Schaden, 2 Block", damage: 2, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Lebensdieb", text: "3 Schaden, 2 Heilung", damage: 3, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Korruption", text: "1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Traumspinner",
        type: "Silver",
        health: 7,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/traumspinner.webp",
        moves: [
            { name: "Traum", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magischer Traum", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Traumfänger", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Hypnose", text: "2 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Albtraum", text: "4 Schaden, 5 Selbstschaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -5 },
            { name: "Insomnia", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Künstlicher Golem",
        type: "Silver",
        health: 9,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/golem.webp",
        moves: [
            { name: "Trümmerer", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Kraftstoss", text: "2 Schaden, 1 Block", damage: 2, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magieschild", text: "3 Block", damage: 0, block: 3, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Kraftschild", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Beben", text: "3 Schaden, 2 Block", damage: 3, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magmafall", text: "4 Schaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Traumspinner-Königin",
        type: "Silver",
        health: 10,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/traumspinner-koenigin.webp",
        moves: [
            { name: "Traumwanderer", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Traumweben", text: "2 Schaden, 1 Reflektieren", damage: 2, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Illusion", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Traumportal", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Seelenernte", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Albtraumwelle", text: "3 Schaden, 2 Reflektieren", damage: 3, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 }
        ]
    }
]

const monsterTableSilverDrakan = [
    {
        name: "Salamander",
        type: "Silver",
        health: 10,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/salamander.webp",
        moves: [
            { name: "Biss", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Glühende Berührung", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Hitzewelle", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Flammpanzer", text: "3 Block, 1 Reflektieren", damage: 0, block: 3, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Feuergift", text: "2 Schaden, 1 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Magmafall", text: "2 Heilung, 3 Schaden", damage: 3, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Aschengeist",
        type: "Silver",
        health: 6,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/aschengeist.webp",
        moves: [
            { name: "Flämmchen", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flämmchen", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flämmchen", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flämmchen", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flammenmeer", text: "5 Schaden", damage: 5, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flämmchen", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Drachenjunges",
        type: "Silver",
        health: 7,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/drachenjunges.webp",
        moves: [
            { name: "Feuerstoss", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Drachengebrüll", text: "1 Block, 2 Schaden nächste Runde", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Flügelschlag", text: "2 Heilung, 1 Reflektieren", damage: 0, block: 0, heal: 2, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Drachenpanzer", text: "5 Block", damage: 0, block: 5, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Drachenwut", text: "4 Schaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Drachenfeuer", text: "2 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Obsidian Golem",
        type: "Silver",
        health: 10,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/obsidian-golem.webp",
        moves: [
            { name: "Schwerer Schlag", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Bereitschaft", text: "2 Schaden, 2 Schaden nächste Runde, 1 Block", damage: 2, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Steinhaut Panzerung", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Magie Absorption", text: "2 Heilung, 1 Block", damage: 0, block: 1, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Splitterexplosion", text: "4 Schaden, 2 Selbstschaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -2 },
            { name: "Obsidianklingen", text: "4 Schaden, 2 Schaden nächste Runde", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 }
        ]
    },    
    {
        name: "Feuerkobold",
        type: "Silver",
        health: 6,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/glubber.webp",
        moves: [
            { name: "Klauenangriff", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Feueratem", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Jinx", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Flammenwand", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Explosion", text: "4 Schaden, 4 Selbstschaden", damage: 4, block: 0, heal: -4, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Koboldbiss", text: "3 Schaden, -1 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -1 }
        ]
    }
]

const monsterTableSilverTalvar = [
    {
        name: "Goblin Jäger",
        type: "Silver",
        health: 10,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/goblin_jaeger.webp",
        moves: [
            { name: "Steinwurf", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Speerwurf", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flinkheit", text: "4 Block", damage: 0, block: 4, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Meditation", text: "2 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Vergifteter Dolch", text: "2 Schaden jede Runde", damage: 0, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Kritischer Treffer", text: "4 Schaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Betrunkener Goblin",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/betrunkener_goblin.webp",
        moves: [
            { name: "Kratzer", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wolfsruf", text: "3 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 3 },
            { name: "Rückzieher", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schattenspiel", text: "2 Schaden, 2 Block", damage: 2, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blutrunst", text: "3 Schaden, 2 Heilung", damage: 3, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Riss", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Hogoblin",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/hogoblin.webp",
        moves: [
            { name: "Fauler Atem", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magisches Ritual", text: "2 Schaden, 2 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Feuerball", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magisches Schild", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Verwesung", text: "2 Schaden, 2 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Zorn", text: "5 Schaden, 2 Selbstschaden", damage: 5, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -2 }
        ]
    },
    {
        name: "Banditenanführer",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/banditenanfuehrer.webp",
        moves: [
            { name: "Klingenhieb", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Doppelklingenschlag", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Verwirrung Stiften", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Schattenwelt", text: "2 Schaden, 2 Block", damage: 2, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Giftfalle", text: "3 Schaden, 2 Schaden jede Runde", damage: 3, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Schattenangriff", text: "4 Schaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Verwundeter Bandit",
        type: "Silver",
        health: 6,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/verwundeter-bandit.webp",
        moves: [
            { name: "Faustschlag", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Tritt", text: "3 Schaden, 2 Selbstschaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -2 },
            { name: "Sandwurf", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Ausweichmanöver", text: "5 Block, 2 Reflektieren", damage: 0, block: 5, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Hinterhalt", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Dolchstich", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    }
]

const monsterTableSilverFrosgar = [
    {
        name: "Eisgolem",
        type: "Silver",
        health: 10,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/eisgolem.webp",
        moves: [
            { name: "Eisige Briese", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Eissplitter", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Frostrüstung", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Frost Nova", text: "3 Schaden, 2 Block", damage: 3, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blizzard", text: "3 Schaden, 3 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 3 },
            { name: "Erfrierung", text: "3 Schaden jede Runde", damage: 3, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Frostgreif",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/frostgreif.webp",
        moves: [
            { name: "Kratzer", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wolfsruf", text: "3 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 3 },
            { name: "Rückzieher", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schattenspiel", text: "2 Schaden, 2 Block", damage: 2, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blutrunst", text: "3 Schaden, 2 Heilung", damage: 3, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Riss", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Irrlicht",
        type: "Silver",
        health: 6,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/irrlicht.webp",
        moves: [
            { name: "Seelenraub", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Aufladung", text: "3 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 3 },
            { name: "Blendung", text: "3 Block", damage: 0, block: 3, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Gleissendes Licht", text: "3 Schaden, 2 Block", damage: 3, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Seelenraub", text: "3 Schaden, 2 Schaden jede Runde", damage: 3, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Eruption", text: "4 Schaden, 4 Selbstschaden", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -4 }
        ]
    },
    {
        name: "Jähzorniger Schneehasenkrieger",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/schneehasenkrieger.webp",
        moves: [
            { name: "Klopfer", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blumenwedler", text: "2 Heilung", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schrei des Hasenlords", text: "3 Block", damage: 0, block: 3, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schneesturm Salto", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Todeshoppeln", text: "3 Schaden jede Runde", damage: 3, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Hasenkeule", text: "3 Schaden, 2 Block", damage: 3, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Eisphönix",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/eisphoenix.webp",
        moves: [
            { name: "Eisige Briese", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Eissplitter", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Eisrose", text: "2 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Frosttornado", text: "3 Schaden, 2 Schaden jede Runde", damage: 3, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Wiedergeburt", text: "3 Heilung", damage: 0, block: 0, heal: 3, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Permafrost", text: "2 Heilung, 3 Schaden", damage: 3, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    }
]

const monsterTableSilverAthos = [
    {
        name: "Manfred",
        type: "Silver",
        health: 10,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/manfred.webp",
        moves: [
            { name: "Dornen", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blätterpanzer", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wachstum", text: "3 Heilung", damage: 0, block: 0, heal: 3, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Dornenpanzer", text: "2 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Entend", text: "2 Selbstschaden, 5 Schaden", damage: 5, block: 0, heal: -2, dot: 0, reflect: 3, damageNextRound: 0 },
            { name: "Stolpern", text: "1 Selbstschaden", damage: 0, block: 0, heal: -1, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Dryade",
        type: "Silver",
        health: 6,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/dryade.webp",
        moves: [
            { name: "Blättermeer", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blätterschild", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Rankenschild", text: "2 Block, 2 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Waldgeist - Ruf", text: "2 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Giftige Dornen", text: "2 Schaden jede Runde", damage: 0, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Dornenpeitsche", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Dryadenkönigin",
        type: "Silver",
        health: 10,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/dryadenkoenigin.webp",
        moves: [
            { name: "Ästepeitsche", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blütenstaub", text: "2 Reflektieren, 2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Heilige Erde", text: "2 Heilung, 2 Block", damage: 0, block: 2, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flügelschlag", text: "3 Block", damage: 0, block: 3, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Regeneration", text: "3 Heilung, 3 Reflektieren", damage: 0, block: 0, heal: 3, dot: 0, reflect: 3, damageNextRound: 0 },
            { name: "Drachenfeuer", text: "2 Schaden jede Runde", damage: 0, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Peter",
        type: "Silver",
        health: 7,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/peter.webp",
        moves: [
            { name: "Dornen", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Dornenpanzer", text: "2 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Wurzelschlag", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Nebelwand", text: "3 Block", damage: 0, block: 3, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Regeneration", text: "3 Heilung", damage: 0, block: 0, heal: 3, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Ausbruch", text: "2 Selbstschaden, 3 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 3 }
        ]
    },
    {
        name: "Kleiner Ork",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/kleiner-ork.webp",
        moves: [
            { name: "Keulenhieb", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Meditation", text: "3 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 3 },
            { name: "Steinwurf", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Ogergebrüll", text: "5 Block", damage: 0, block: 5, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wiedergeburt", text: "4 Schaden, -1 Schaden nächste Runde", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -1 },
            { name: "Hinterhalt", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 }
        ]
    }    
]

const monsterTableSilverAridora = [
    {
        name: "Schlangenmagier",
        type: "Silver",
        health: 7,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/schlangenmagier.webp",
        moves: [
            { name: "Schlangenbiss", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Vipernvision", text: "3 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 3 },
            { name: "Hypnotischer Blick", text: "3 Block", damage: 0, block: 3, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Zungenzauber", text: "3 Heilung, 3 Schaden", damage: 0, block: 0, heal: 3, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Giftmagie", text: "3 Schaden, 2 Schaden jede Runde", damage: 3, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Schlangenruf", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 }
        ]
    },
    {
        name: "Schlangenkämpfer",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/schlangenkaempfer.webp",
        moves: [
            { name: "Schlängelnder Angriff", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schlangentanz", text: "2 Schaden nächste Runde, 2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Schuppenpanzerung", text: "2 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Schlangenumarmung", text: "2 Schaden jede Runde", damage: 0, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Schlangenschwert", text: "5 Schaden", damage: 5, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schlangenbiss", text: "3 Schaden, 3 Heilung", damage: 3, block: 0, heal: 3, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Gürtelwächter",
        type: "Silver",
        health: 10,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/guertelwaechter.webp",
        moves: [
            { name: "Rollenangriff", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schwingende Panzerplatte", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Verteidigungsposition", text: "6 Block, 2 Reflektieren, -2 Schaden nächste Runde", damage: 0, block: 6, heal: 0, dot: 0, reflect: 2, damageNextRound: -2 },
            { name: "Erdbindung", text: "2 Heilung", damage: 0, block: 0, heal: 2, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Panzerstoss", text: "3 Block, 3 Schaden", damage: 3, block: 3, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Tempelschild", text: "4 Schaden, -3 Schaden nächste Runde", damage: 4, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: -3 }
        ]
    },
    {
        name: "Junger Gnoll",
        type: "Silver",
        health: 6,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/junger-gnoll.webp",
        moves: [
            { name: "Bissattacke", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Krallenangriff", text: "3 Schaden, 2 Schaden nächste Runde", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Agressive Verteidigung", text: "2 Block, 2 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Verdeckter Angriff", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Rudelruf", text: "3 Heilung, 3 Schaden", damage: 0, block: 0, heal: 3, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Steinwurf", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Gnolljäger",
        type: "Silver",
        health: 8,
        victoryPoints: 2,
        gold: 2,
        image: "src/assets/img/monster/gnolljaeger.webp",
        moves: [
            { name: "Schleuderangriff", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Wendigkeit", text: "2 Schaden, 2 Block", damage: 1, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Tarnung", text: "4 Block", damage: 0, block: 4, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Überlebenswille", text: "2 Block, 2 Heilung, 2 Reflektieren", damage: 0, block: 2, heal: 2, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Giftige Pfeile", text: "2 Schaden, 2 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Schneller Angriff", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    }
]

const monsterTableGoldNythoria = []
const monsterTableGoldDrakan = []
const monsterTableGoldTalvar = []
const monsterTableGoldFrosgar = []
const monsterTableGoldAthos = []
const monsterTableGoldAridora = []



const monsterTableBronze = {
    monsterTableBronzeNythoria,
    monsterTableBronzeDrakan,
    monsterTableBronzeTalvar,
    monsterTableBronzeFrosgar,
    monsterTableBronzeAthos,
    monsterTableBronzeAridora,
}

const monsterTableSilver = {
    monsterTableSilverNythoria,
    monsterTableSilverDrakan,
    monsterTableSilverTalvar,
    monsterTableSilverFrosgar,
    monsterTableSilverAthos,
    monsterTableSilverAridora,
}

const monsterTableGold = {
    monsterTableGoldNythoria,
    monsterTableGoldDrakan,
    monsterTableGoldTalvar,
    monsterTableGoldFrosgar,
    monsterTableGoldAthos,
    monsterTableGoldAridora,
}

let monsterTableQuests = [
  "monsterBjörn",
  "Freya",
  "Dieb",
  "Grimgar",
  "BruderHilda"
];


module.exports = {
    monsterTableBronze,
    monsterTableSilver,
    monsterTableGold,
    monsterTableQuests
  };