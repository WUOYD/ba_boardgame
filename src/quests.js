
  
let questTableSilver = [
  
];
  
let questTableGold = [
  
];


let questTableBronze = [
    {
        questType: "Bronze",
        questOfferer: {
            name: "Bjorn, Jäger",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Während unserer letzten Jagd wurde eine ungewöhnlich große und gefährliche Bestie gesichtet - ein gigantischer Wolf von beispiellosem Ausmaß. Diese Kreatur hat bereits mehrere unserer erfahrensten Jäger getötet und stellt eine ernsthafte Bedrohung für unser Dorf dar. Finde, diesen übermächtigen Wolf und besiege ihn. Bringe mir einen seiner Reisszähne als Beweis für deine Tat. Für diese gefährliche Aufgabe werde ich dich großzügig belohnen."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        questReceiver: {
            nameGood: "Bjorn, Jäger",
            image: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegion: "Frostgar"
        },
        questRewardGood: {
            reputation: 1,
            gold: 5,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: "-",
            gold: "-",
            move: "-",
            impact: "-"
        },
        questRewardDeny: {
            reputation: "-",
            gold: "-",
            move: "-",
            impact: "-",
        },
        optionGood: {
            hasOption: 1,
            optionType: "ReturnMonster",
            optionText: "Annehmen",
        },
        optionBad: {
            hasOption: "-",
            optionType: "-",
            optionText: "-",
        },
        optionDeny: {
            hasOption: 1,
            optionType: "None",
            optionText: "Ablehnen"
        },
        questMonster: 1,
        questMonsterText: "Text",
        optionGoodSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
        optionBadSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
    },
    {
        questType: "Bronze",
        questOfferer: {
            name: "Freya, Schmiedin",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Ich habe eine Waffenlieferung für die Zwerge in Drakan. Bringe sie ihnen, ich werde dir dafür einen Anteil geben."
        },
        questMiddleman: {
            name: "Zwerge",
            image: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        questReceiver: {
            name: "Freya, Schmiedin",
            image: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegion: "Drakan"
        },
        questRewardGood: {
            reputation: 1,
            gold: 5,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: -1,
            gold: 10,
            move: "-",
            impact: 1
        },
        questRewardDeny: {
            reputation: "-",
            gold: "-",
            move: "-",
            impact: "-"
        },
        optionGood: {
            hasOption: 1,
            optionType: "Return",
            optionText: "Abliefern und Gold zurückbringen"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Abliefern und Gold für sich behalten"
        },
        optionDeny: {
            hasOption: 1,
            optionType: "None",
            optionText: "Ablehnen"
        },
        questImpact: {
            name: "-",
            image: "-",
            text: "-"
        },
        questMonster: 2,
        questMonsterText: "Text",
        optionGoodSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
        optionBadSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
    },
    {
        questType: "Bronze",
        questOfferer: {
            name: "Grimgar, Dorfbewohner",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Unser friedliches Dorf wurde von einem anderen Stamm überfallen, einige unserer Häuser wurden abgebrannt und die Nahrungsmittel wurden gestohlen. Aber all das ist nicht so schlimm wie der Verlust des Amulettes meines Vaters. Hilf mir bitte, den Dieb zu fassen und mir das Amulett wieder zu beschaffen, um den Rest dieser abscheulichen Übeltäter kümmern wir uns später."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        questReceiver: {
            name: "Grimgar, Dorfbewohner",
            image: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegion: "Frostgar"
        },
        questRewardGood: {
            reputation: 1,
            gold: 3,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: "-",
            gold: 3,
            move: "-",
            impact: "-"
        },
        questRewardDeny: {
            reputation: "-",
            gold: "-",
            move: "-",
            impact: "-"
        },
        optionGood: {
            hasOption: 1,
            optionType: "ReturnMonster",
            optionText: "Den Dieb finden und das Amulett zurückbringen"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Fight",
            optionText: "Ablehnen"
        },
        optionDeny: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
        questImpact: {
            name: "-",
            image: "-",
            text: "-"
        },
        questMonster: 3,
        questMonsterText: "Text",
        optionGoodSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
        optionBadSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
    },
    {
        questType: "Bronze",
        questOfferer: {
            name: "Hilda, Handwerkerin",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Ich habe gehört, dass es in Aridora begabte Handwerker gibt, von denen ich neue Fertigkeiten und Möglichkeiten lernen kann, um meine eigene Handwerkskunst zu verbessern. Die Reise über das Meer ist jedoch alleine viel zu gefährlich. Könntest du mich begleiten und mich sicher nach Aridora bringen?"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        questReceiver: {
            name: "Max, Handwerker",
            image: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegion: "Arida"
        },
        questRewardGood: {
            reputation: 1,
            gold: 5,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: -1,
            gold: "-",
            move: "-",
            impact: "-"
        },
        questRewardDeny: {
            reputation: "-",
            gold: "-",
            move: "-",
            impact: "-"
        },
        optionGood: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Hilf Hilda"
        },
        optionBad: {
            hasOption: 1,
            optionType: "End",
            optionText: "Nimm Hilda auf dem Weg ihr Gepäck und ihre Wertsachen ab und lasse sie zurück"
        },
        optionDeny: {
            hasOption: 1,
            optionType: "None",
            optionText: "Ablehnen"
        },
        questImpact: {
            name: "-",
            image: "-",
            text: "-"
        },
        questMonster: "-",
        questMonsterText: "Text",
        optionGoodSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
        optionBadSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
    },
    {
        questType: "Bronze",
        questOfferer: {
            name: "Leyla",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Ich verfüge über einige kostbare Edelsteine, die in Drakan benötigt werden, um Waffen zu veredeln. Bringe sie zu den Zwergen, welche in dieser Gegend leben, und tausche sie dort gegen Feueressenz ein. Sobald du die Feueressenz hast, bringe sie zu mir zurück. Ich brauche sie, um meine Schmuckstücke herzustellen."
        },
        questMiddleman: {
            name: "Zwerge",
            image: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        questReceiver: {
            name: "Leyla",
            image: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegion: "Drakan"
        },
        questRewardGood: {
            reputation: 1,
            gold: 3,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: -1,
            gold: 5,
            move: "-",
            impact: "-"
        },
        questRewardDeny: {
            reputation: "-",
            gold: "-",
            move: "-",
            impact: "-"
        },
        optionGood: {
            hasOption: 1,
            optionType: "Return",
            optionText: "Hole die Feueressenz"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Stiehl die Diamanten und verkaufe sie am Hafen von Aridora"
        },
        optionDeny: {
            hasOption: 1,
            optionType: "None",
            optionText: "Ablehnen"
        },
        questImpact: {
            name: "-",
            image: "-",
            text: "-"
        },
        questMonster: "-",
        questMonsterText: "Text",
        optionGoodSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
        optionBadSecond: {
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
    }
]    

module.exports = {
    questTableBronze,
    questTableSilver,
    questTableGold
  };


