const monsterTableBronzeNythoria = [
    {
        name: "Wilder Ghul",
        type: "Bronze",
        region: "Nythoria",
        health: 4,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/wilder_ghul.webp",
        moves: [
            { name: "Kratzer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schrei des Todes", text: "1 Block, 1 Schaden nächste Runde", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Giftiger Hauch", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Untote Ausdauer", text: "1 Heilung", damage: 0, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Grabesgriff", text: "3 Schaden, 2 Selbstschaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0, selfDamage: 2 },
            { name: "Reissen", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Seelenfresser",
        type: "Bronze",
        region: "Nythoria",
        health: 6,
        victoryPoints: 1,
        gold: 3,
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
        name: "Künstlicher Golem",
        type: "Bronze",
        region: "Nythoria",
        health: 7,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/kuenstlicher_golem.webp",
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
        name: "Traumspinner",
        type: "Bronze",
        region: "Nythoria",
        health: 5,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/traumspinner.webp",
        moves: [
            { name: "Traum", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magischer Traum", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Traumfänger", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Hypnose", text: "2 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 },
            { name: "Albtraum", text: "4 Schaden, 5 Selbstschaden", damage: 4, block: 0, heal: -5, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Insomnia", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Traumspinner Königin",
        type: "Bronze",
        region: "Nythoria",
        health: 8,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/traumspinner_koenigin.webp",
        moves: [
            { name: "Traumwanderer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Traumweben", text: "1 Schaden, 1 Reflektieren", damage: 1, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Illusion", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Traumportal", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Seelenernte", text: "2 Schaden, 2 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Albtraumwelle", text: "2 Schaden, 2 Reflektieren", damage: 2, block: 0, heal: 0, dot: 0, reflect: 2, damageNextRound: 0 }
        ]
    },
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
        image: "src/assets/img/monster/obsidian_golem.webp",
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
        image: "src/assets/img/monster/feuerkobold.webp",
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
        name: "Betrunkener Goblin",
        type: "Bronze",
        region: "Talvar",
        health: 6,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/bentrunkener_goblin.webp",
        moves: [
            { name: "Kratzer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Biss", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Kauern", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Counter", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Erbrechen", text: "3 Schaden, 1 Selbstschaden", damage: 3, block: 0, heal: -1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Kopfnuss", text: "2 Schaden, 1 Selbstschaden", damage: 2, block: 0, heal: -1, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Goblin Jäger",
        type: "Bronze",
        region: "Talvar",
        health: 6,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/goblin_jaeger.webp",
        moves: [
            { name: "Steinwurf", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Speerwurf", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Flinkheit", text: "4 Block", damage: 0, block: 4, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Meditation", text: "1 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Vergifteter Dolch", text: "1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Kritischer Treffer", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Hogoblin",
        type: "Bronze",
        region: "Talvar",
        health: 6,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/hogoblin.webp",
        moves: [
            { name: "Fauler Atem", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magisches Ritual", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Feuerball", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Magisches Schild", text: "1 Block, 1 Reflektieren", damage: 0, block: 1, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Verwesung", text: "1 Schaden, 1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Zorn", text: "4 Schaden, 1 Selbstschaden", damage: 4, block: 0, heal: -1	, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Verwundeter Bandit",
        type: "Bronze",
        region: "Talvar",
        health: 4,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/verwundeter_bandit.webp",
        moves: [
            { name: "Faustschlag", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Tritt", text: "2 Schaden, 1 Selbstschaden", damage: 2, block: 0, heal: -1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Sandwurf", text: "1 Block", damage: 0, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Ausweichmanöver", text: "4 Block, 1 Reflektieren", damage: 0, block: 4, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Hinterhalt", text: "2 Schaden, 1 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Dolchstich", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Banditenanführer",
        type: "Bronze",
        region: "Talvar",
        health: 6,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/banditenanfuehrer.webp",
        moves: [
            { name: "Klingenhieb", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Doppelklingenschlag", text: "2 Schaden", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Verwirrung Stiften", text: "Reflect", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Schattenwelt", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Giftfalle", text: "2 Schaden, 1 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Schattenangriff", text: "3 Schaden", damage: 3, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
]

const monsterTableBronzeFrosgar= [
    {
        name: "Irrlicht",
        type: "Bronze",
        region: "Frosgar",
        health: 4,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/irrlicht.webp",
        moves: [
            { name: "Seelenraub", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Aufladung", text: "1 Schaden nächste Runde", damage: 0, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Blendung", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Gleissendes Licht", text: "1 Schaden, 1 Block", damage: 1, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Seelenraub", text: "1 Schaden, 1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Eruption", text: "3 Schaden, 4 Selbstschaden", damage: 3, block: 0, heal: -4, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Jähzorniger Schneehasenkrieger",
        type: "Bronze",
        region: "Frosgar",
        health: 6,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/jaehzorniger_schneehasenkrieger.webp",
        moves: [
            { name: "Klopfer", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blumenwedler", text: "1 Heilung", damage: 0, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schrei des Hasenlords", text: "2 Block", damage: 0, block: 2, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Schneesturm Salto", text: "2 Schaden, 1 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Todeshoppeln", text: "2 Schaden jede Runde", damage: 2, block: 0, heal: 0, dot: 2, reflect: 0, damageNextRound: 0 },
            { name: "Hasenkeule", text: "2 Schaden, 1 Block", damage: 2, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },{
        name: "Eisphönix",
        type: "Bronze",
        region: "Frosgar",
        health: 6,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/.webp",
        moves: [
            { name: "Eisige Briese", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Eissplitter", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Eisrose", text: "1 Reflektieren", damage: 0, block: 0, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Frosttornado", text: "1 Schaden, 1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 },
            { name: "Wiedergeburt", text: "3 Heilung", damage: 0, block: 0, heal: 3, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Permafrost", text: "1 Heilung, 1 Schaden", damage: 1, block: 0, heal: 1, dot: 0, reflect: 0, damageNextRound: 0 }
        ]
    },
    {
        name: "Frostgreif",
        type: "Bronze",
        region: "Frosgar",
        health: 6,
        victoryPoints: 1,
        gold: 3,
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
        name: "Eisgolem",
        type: "Bronze",
        region: "Frosgar",
        health: 8,
        victoryPoints: 1,
        gold: 3,
        image: "src/assets/img/monster/eisgolem.webp",
        moves: [
            { name: "Eisige Briese", text: "1 Schaden", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Eissplitter", text: "1 Schaden, 1 Schaden nächste Runde", damage: 1, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 1 },
            { name: "Frostrüstung", text: "2 Block, 1 Reflektieren", damage: 0, block: 2, heal: 0, dot: 0, reflect: 1, damageNextRound: 0 },
            { name: "Frost Nova", text: "2 Schaden, 1 Block", damage: 2, block: 1, heal: 0, dot: 0, reflect: 0, damageNextRound: 0 },
            { name: "Blizzard", text: "2 Schaden, 2 Schaden nächste Runde", damage: 2, block: 0, heal: 0, dot: 0, reflect: 0, damageNextRound: 2 },
            { name: "Erfrierung", text: "1 Schaden jede Runde", damage: 1, block: 0, heal: 0, dot: 1, reflect: 0, damageNextRound: 0 }
        ]
    },
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
        name: "Dryaden Königin",
        type: "Bronze",
        health: 8,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/dryaden_koenigin.webp",
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
        image: "src/assets/img/monster/kleiner_ork.webp",
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
        name: "Wüstenhyäne",
        type: "Bronze",
        health: 4,
        victoryPoints: 1,
        gold: 1,
        image: "src/assets/img/monster/Wuestenhyaene.webp",
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

const monsterTableSilverNythoria = []
const monsterTableSilverDrakan = []
const monsterTableSilverTalvar = []
const monsterTableSilverFrosgar = []
const monsterTableSilverAthos = []
const monsterTableSilverAridora = []

const monsterTableGoldNythoria = []
const monsterTableGoldDrakan = []
const monsterTableGoldTalvar = []
const monsterTableGoldFrosgar = []
const monsterTableGoldAthos = []
const monsterTableGoldAridora = []



let monsterTableQuests = [
    {
        "name": "Template",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "",
        "moves": [
            { "name": "-", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "-", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "-", "text": "2 Heilung", "damage": 0, "block": 0, "heal": 2, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "-", "text": "2 Block, 1 Schaden nächste Runde", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 1 },
            { "name": "-", "text": "2 Schaden, 1 Schaden jede Runde", "damage": 2, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "-", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Eiswolf",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Eiswolf.webp",
        "moves": [
            { "name": "Krallenhieb", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Sprungangriff", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Eisige Aura", "text": "2 Heilung", "damage": 0, "block": 0, "heal": 2, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Winterschlaf", "text": "2 Block, 1 Schaden nächste Runde", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 1 },
            { "name": "Eisiger Biss", "text": "2 Schaden, 1 Schaden jede Runde", "damage": 2, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Frostatem", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Ragnar",
        "type": "Quest",
        "health": 6,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Ragnar.webp",
        "moves": [
            { "name": "Axtangriff", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Kraftvoller Hieb", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Zorn", "text": "1 Heilung, 2 Schaden nächste Runde", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Wille der Barbaren", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Blutung", "text": "1 Schaden jede Runde", "damage": 0, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Todesstoss", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Sandkrabbe",
        "type": "Quest",
        "health": 6,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Aldric-Sandkrabbe.webp",
        "moves": [
            { "name": "Klauenschlag", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Rolle", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Eingraben", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Sandpanzer", "text": "2 Reflektieren", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Aufspiessen", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Fangzahn", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Banditen",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Bran-Banditen.webp",
        "moves": [
            { "name": "Dolchstoss", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Blutklinge", "text": "1 Schaden pro Runde", "damage": 0, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Täuschung", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Rauchbombe", "text": "2 Reflektieren", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Heiltrank", "text": "2 Heilung", "damage": 0, "block": 0, "heal": 2, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Hinterhalt", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Gorr",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Gorr2.webp",
        "moves": [
            { "name": "Knüppelschlag", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Messerangriff", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Ausweichen", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Kopfstoss", "text": "2 Schaden, 1 Selbstschaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 1 },
            { "name": "Giftwolke", "text": "1 Schaden, 1 Schaden pro Runde", "damage": 1, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Versteckte Klinge", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Drache",
        "type": "Quest",
        "health": 6,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Drache.webp",
        "moves": [
            { "name": "Flügelschlag", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Ascheregen", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Herz der Flammen", "text": "1 Heilung", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Drachengebrüll", "text": "1 Heilung, 2 Schaden nächste Runde", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Verbrannte Erde", "text": "1 Schaden pro Runde", "damage": 0, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Feueratem", "text": "4 Schaden", "damage": 4, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Geisterwache",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Jorund-Geisterwache.webp",
        "moves": [
            { "name": "Geisterhand", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Wächteraura", "text": "2 Reflektieren", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Furcht", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Todesrasseln", "text": "1 Heilung, 1 Schaden", "damage": 1, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Seelenernte", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Fluch des Wächters", "text": "2 Schaden pro Runde", "damage": 0, "block": 0, "heal": 0, "dot": 2, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Grunthar",
        "type": "Quest",
        "health": 8,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Grunthar.webp",
        "moves": [
            { "name": "Faustschlag", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Rülpser", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Bier trinken", "text": "1 Heilung", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Kopfstoss", "text": "2 Schaden, 2 Selbstschaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 2 },
            { "name": "Unkontrollierter Schlag", "text": "3 Schaden, 2 Selbstschaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 2 },
            { "name": "Torkeln", "text": "4 Selbstschaden", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 4 }
        ]
    },
    {
        "name": "Olafur",
        "type": "Quest",
        "health": 8,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Olafur.webp",
        "moves": [
            { "name": "Faustschlag", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Rülpser", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Bier trinken", "text": "1 Heilung", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Kopfstoss", "text": "2 Schaden, 2 Selbstschaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 2 },
            { "name": "Unkontrollierter Schlag", "text": "3 Schaden, 2 Selbstschaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 2 },
            { "name": "Torkeln", "text": "4 Selbstschaden", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 4 }
        ]
    },
    {
        "name": "Lavagolem",
        "type": "Quest",
        "health": 6,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Morana-Bestie.webp",
        "moves": [
            { "name": "Feuerschlag", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Inferno", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Lavafluss", "text": "1 Heilung", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Steinhaut", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Verbrennen", "text": "1 Schaden pro Runde", "damage": 1, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Magmaströme", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Tempelwächter",
        "type": "Quest",
        "health": 7,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Dr.-Alrdich-Tempelwaechter.webp",
        "moves": [
            { "name": "Lanzenhieb", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Ansturm", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Schild des Wächters", "text": "3 Block", "damage": 0, "block": 3, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Defensive Haltung", "text": "3 Reflektieren", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 3, "damageNextRound": 0 },
            { "name": "Kraft des Artefakts", "text": "1 Heilung", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Opfer der Tempelwächter", "text": "4 Selbstschaden, 4 Schaden", "damage": 4, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 4 }
        ]
    },
    {
        "name": "Hanto",
        "type": "Quest",
        "health": 6,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Leta-Wolf.webp",
        "moves": [
            { "name": "Biss", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Sprungangriff", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Ausweichen", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Klauenschlag", "text": "1 Schaden pro Runde", "damage": 1, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Blutrunst", "text": "2 Schaden nächste Runde", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Zerfetzen", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Jotorun",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Dr.-Titus-Tona-Jotorun.webp",
        "moves": [
            { "name": "Faustschlag", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Steinwurf", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Ausweichen", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Biss", "text": "1 Schaden pro Runde", "damage": 1, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Kratzer", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Eiszapfen", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Dr. Titus Tona",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Dr.Titus-Tona.webp",
        "moves": [
            { "name": "Elixier der Stärke", "text": "2 Schaden nächse Runde", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Kosmischer Schild", "text": "2 Reflektieren", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Elixier der Kraft", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Heiltrank", "text": "1 Heilung", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Giftessenz", "text": "1 Schaden pro Runde", "damage": 1, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Kosmische Entladung", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Baumgeist",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Gulmur-Baumbewohner.webp",
        "moves": [
            { "name": "Durchdringender Ast", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Schneiden der Blätter", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Kraft des Waldes", "text": "2 Heilung", "damage": 0, "block": 0, "heal": 2, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Magische Aura", "text": "2 Reflektieren", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Wurzelfänge", "text": "1 Schaden pro Runde", "damage": 1, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Entladung", "text": "3 Schaden, 4 Selbstschaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 4 }
        ]
    },
    {
        "name": "Vito",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Vito.webp",
        "moves": [
            { "name": "Elixier der Stärke", "text": "2 Schaden nächse Runde", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Schildtrank", "text": "2 Reflektieren", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Elixier der Kraft", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Heiltrank", "text": "1 Heilung", "damage": 0, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Giftessenz", "text": "1 Schaden pro Runde", "damage": 1, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "Explosives Gemisch", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Aerendyl",
        "type": "Quest",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Nuala-Aerendyl.webp",
        "moves": [
            { "name": "Faustschlag", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Tritt", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Ausweichen", "text": "2 Block", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Wahn", "text": "2 Schaden nächste Runde", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Kopfstoss", "text": "2 Schaden, 1 Selbstschaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 1 },
            { "name": "Verwirrung", "text": "2 Selbstschaden", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 2 }
        ]
    }    
  ];

  let monsterTableBoss = [
    {
        "name": "Template",
        "type": "Boss",
        "health": 5,
        "victoryPoints": 1,
        "gold": 1,
        "image": "",
        "moves": [
            { "name": "-", "text": "1 Schaden", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "-", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "-", "text": "2 Heilung", "damage": 0, "block": 0, "heal": 2, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "-", "text": "2 Block, 1 Schaden nächste Runde", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 1 },
            { "name": "-", "text": "2 Schaden, 1 Schaden jede Runde", "damage": 2, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0 },
            { "name": "-", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Gnarlgrimm",
        "type": "Boss",
        "health": 12,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Boss-Gnarlgrimm.webp",
        "moves": [
            { "name": "Astschlag", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Geisterhieb", "text": "2 Schaden, 1 Block", "damage": 2, "block": 1, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Geisternebel", "text": "1 Block, 2 Reflektieren", "damage": 0, "block": 1, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Schutzgeist", "text": "2 Block, 1 Heilung", "damage": 0, "block": 2, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Seelenflüstern", "text": "2 Schaden, 3 Schaden nächste Runde", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 3 },
            { "name": "Wurzelschlinge", "text": "2 Schaden jede Runde, 1 Selbstschaden", "damage": 2, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 0, "selfDamage": 1 }
        ]
    },
    {
        "name": "Xerthok",
        "type": "Boss",
        "health": 11,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Boss-Xerthok.webp",
        "moves": [
            { "name": "Dornenfaust", "text": "1 Schaden, 1 Reflektieren", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 1, "damageNextRound": 0 },
            { "name": "Dornenpanzer", "text": "1 Block, 1 Reflektieren", "damage": 0, "block": 1, "heal": 0, "dot": 0, "reflect": 1, "damageNextRound": 0 },
            { "name": "Stachelrüstung", "text": "2 Reflektieren", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Sandsturm", "text": "1 Schaden, 2 Schaden nächste Runde", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Dornenessenz", "text": "3 Reflektieren, 2 Schaden", "damage": 0, "block": 0, "heal": 0, "dot": 0, "reflect": 3, "damageNextRound": 0 },
            { "name": "Dornenschauer", "text": "2 Schaden, 1 Schaden jede Runde", "damage": 2, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 1 }
        ]
    },
    {
        "name": "Ankalor",
        "type": "Boss",
        "health": 13,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Boss-Ankalor.webp",
        "moves": [
            { "name": "Runenhieb", "text": "1 Schaden, 1 Schaden nächste Runde", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 1 },
            { "name": "Magische Ketten", "text": "3 Block", "damage": 0, "block": 3, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Magische Barriere", "text": "2 Block, 2 Reflektieren", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Erderschütterer", "text": "3 Schaden, 1 Selbstschaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 1 },
            { "name": "Runenheilung", "text": "1 Schaden, 3 Heilung", "damage": 1, "block": 0, "heal": 3, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Runenerruption", "text": "2 Schaden, 1 Schaden jede Runde", "damage": 2, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 1 }
        ]
    },
    {
        "name": "Igneous",
        "type": "Boss",
        "health": 13,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Boss-Igneous.webp",
        "moves": [
            { "name": "Lavahieb", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Magmaerruption", "text": "2 Schaden, 1 Schaden nächste Runde", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 1 },
            { "name": "Glühender Panzer", "text": "2 Block, 2 Reflektieren", "damage": 0, "block": 2, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Obsidianschild", "text": "4 Block", "damage": 0, "block": 4, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Vulkanische Wut", "text": "1 Schaden, 2 Schaden jede Runde", "damage": 1, "block": 0, "heal": 0, "dot": 1, "reflect": 0, "damageNextRound": 2 },
            { "name": "Ascheexplosion", "text": "3 Schaden", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 }
        ]
    },
    {
        "name": "Krogar",
        "type": "Boss",
        "health": 11,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Boss-Krogar.webp",
        "moves": [
            { "name": "Schädelspalter", "text": "2 Schaden", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Kriegsgebrüll", "text": "2 Schaden, 1 Schaden nächste Runde", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 1 },
            { "name": "Blutdurst", "text": "1 Schaden, 1 Heilung", "damage": 1, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Schild der Ahnen", "text": "3 Block, 3 Reflektieren", "damage": 0, "block": 3, "heal": 0, "dot": 0, "reflect": 3, "damageNextRound": 0 },
            { "name": "Wut des Häuptlings", "text": "3 Schaden, 2 Schaden nächste Runde", "damage": 3, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Sturmangriff", "text": "4 Schaden, 2 Selbstschaden", "damage": 4, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 0, "selfDamage": 2 }
        ]
    },
    {
        "name": "Fenral",
        "type": "Boss",
        "health": 12,
        "victoryPoints": 1,
        "gold": 1,
        "image": "src/assets/img/monster/Boss-Fenral.webp",
        "moves": [
            { "name": "Reisszahnangriff", "text": "1 Schaden, 1 Schaden nächste Runde", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 1 },
            { "name": "Mondschatten", "text": "1 Block, 2 Reflektieren", "damage": 0, "block": 1, "heal": 0, "dot": 0, "reflect": 2, "damageNextRound": 0 },
            { "name": "Blutrausch", "text": "1 Schaden, 1 Heilung", "damage": 1, "block": 0, "heal": 1, "dot": 0, "reflect": 0, "damageNextRound": 0 },
            { "name": "Heulender Wind", "text": "2 Schaden, 2 Schaden nächste Runde", "damage": 2, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 2 },
            { "name": "Eisklauen", "text": "4 Schaden, 1 Block, 1 Reflektieren", "damage": 4, "block": 1, "heal": 0, "dot": 0, "reflect": 1, "damageNextRound": 0 },
            { "name": "Rudelruf", "text": "1 Schaden, 3 Schaden nächste Runde", "damage": 1, "block": 0, "heal": 0, "dot": 0, "reflect": 0, "damageNextRound": 3 }
        ]
    },
]    


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



module.exports = {
    monsterTableBronze,
    monsterTableSilver,
    monsterTableGold,
    monsterTableQuests,
    monsterTableBoss
  };