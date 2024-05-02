let questTableBronze = [
    {
        questType: "Bronze",
        questOfferer: {
            name: "Bjorn",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Während unserer letzten Jagd wurde eine ungewöhnlich große und gefährliche Bestie gesichtet - ein gigantischer Wolf von beispiellosem Ausmaß. Diese Kreatur hat bereits mehrere unserer erfahrensten Jäger getötet und stellt eine ernsthafte Bedrohung für unser Dorf dar. Finde, diesen übermächtigen Wolf und besiege ihn. Bringe mir einen seiner Reisszähne als Beweis für deine Tat. Für diese gefährliche Aufgabe werde ich dich großzügig belohnen."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Bjorn",
            nameBad: "Bjorn",
            imageGood: "src/assets/img/quest/placeholder_quest.webp",
            imageBad: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "Beeindruckend, Abenteurer! Dieser Reißzahn ist ein Beweis für deine Tapferkeit und Entschlossenheit. Mit dem Tod des Wolfes können wir endlich wieder ruhig schlafen. Du hast unserer Gemeinschaft einen großen Dienst erwiesen, und dafür sind wir dir zutiefst dankbar. Nimm diese Belohnung als Zeichen unserer Dankbarkeit.",
            textBad: "-"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegionGood: "Frostgar",
            questDeliverRegionBad: "Frostgar"
        },
        questRewardGood: {
            reputation: 1,
            gold: 10,
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
        questMonsterText: "Der Wolf steht majestätisch vor dir, sein Fell von eisigen Kristallen umhüllt, die im kalten Licht des Mondes funkeln. Seine Augen glühen vor wilder Entschlossenheit, bereit, jeden Herausforderer zu besiegen. Eine eisige Kälte geht von ihm aus und lässt dir das Blut in den Adern gefrieren. Sei bereit für einen erbitterten Kampf in den eisigen Weiten dieser Insel. Die Bewohner zählen auf dich, mutiger Abenteurer, um den Wolf von Frostgar zu besiegen und ihre Heimat zu verteidigen.",
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
            name: "Freya",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Sei gegrüsst, tapferer Abenteurer! Ich brauche deine Hilfe bei einer wichtigen Angelegenheit. Wie du sehen kannst, habe ich hier eine Lieferung Eisessenz, die dringend zu den zwerigischen Schmieden in Drakan gebracht werden muss.Die Eisessenz wird in den tiefen Höhlen unserer Insel gefunden, wo sie von uralten magischen Quellen gespeist wird. Sie ist von unschätzbarem Wert und wird in Drakan benötigt, um die mächtigsten Schwerter zu schmieden, die jemals geschmiedet wurden. Wenn du diese Aufgabe für mich erledigst, gebe ich dir einen Teil des Gewinnes ab."
        },
        questMiddleman: {
            name: "Zwerge",
            image: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "Aha, endlich ist die Eisessenz angekommen! Ich danke dir, tapferer Abenteurer, dass du diese wichtige Lieferung sicher zu uns gebracht hast. Die Eisessenz ist von unschätzbarem Wert für unsere Schmiedekunst, und ohne sie wären wir nicht in der Lage, die mächtigen Waffen und Rüstungen zu schmieden, die Drakan so dringend benötigt. Hier ist die Bezahlung, die ich mit Freya vereinbart habe.",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Freya",
            nameBad: "Freya",
            imageGood: "src/assets/img/quest/placeholder_quest.webp",
            imageBad: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "Ah, du bist zurück! Ich sehe, dass du das Gold sicher zurückgebracht hast, das du für die Eisessenz erhalten hast. Das ist sehr großzügig von dir. Ich hoffe, die Belohnung ist deiner Mühe angemessen, aber ich möchte dir persönlich für deine Tapferkeit und Zuverlässigkeit danken.",
            textBad: "Aha, endlich ist die Eisessenz angekommen! Ich danke dir, tapferer Abenteurer, dass du diese wichtige Lieferung sicher zu uns gebracht hast. Die Eisessenz ist von unschätzbarem Wert für unsere Schmiedekunst, und ohne sie wären wir nicht in der Lage, die mächtigen Waffen und Rüstungen zu schmieden, die Drakan so dringend benötigt. Hier ist die Bezahlung, die ich mit Freya vereinbart habe."
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegionGood: "Drakan",
            questDeliverRegionBad: "Drakan"
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
            name: "Grimgar",
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
            nameGood: "Grimgar",
            nameBad: "Grimgar",
            imageGood: "src/assets/img/quest/placeholder_quest.webp",
            imageBad: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegionGood: "Frostgar",
            questDeliverRegionBad: "Frostgar"
        },
        questRewardGood: {
            reputation: 1,
            gold: 5,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: "-",
            gold: 10,
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
        questMonsterText: "Du bist der gleiche Abschaum wie diese Diebe! Ich werde dir eine Lektion erteilen!",
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
            name: "Hilda",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Ich habe gehört, dass es in Aridora begabte Handwerker gibt, von denen ich neue Fertigkeiten und Möglichkeiten lernen kann, um meine eigene Handwerkskunst zu verbessern. Die Reise über das Meer ist jedoch alleine viel zu gefährlich. Könntest du mich begleiten und mich sicher nach Aridora bringen?"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Hilda",
            nameBad: "Hilda",
            imageGood: "src/assets/img/quest/placeholder_quest.webp",
            imageBad: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "Ich kann es kaum erwarten, die begabten Handwerker von Aridora kennenzulernen und von ihren Fertigkeiten zu lernen. Du hast mir eine großartige Möglichkeit eröffnet, meine Handwerkskunst zu verbessern und neue Möglichkeiten zu entdecken. Ich werde dir immer dankbar sein für deine Hilfe und deine Bereitschaft, mich auf diesem Abenteuer zu begleiten",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegionGood: "Aridora",
            questDeliverRegionBad: "Aridora"
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
            optionType: "-",
            optionText: "-"
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
            textGood: "Ah, die wertvollen Edelsteine von Leyla! Es ist eine Ehre, solche kostbaren Schätze von einer so geschätzten Verbündeten wie ihr zu erhalten. Die Edelsteine werden wir mit größter Sorgfalt behandeln und nutzen, um unsere Waffen zu veredeln und ihre Macht zu verstärken. Die Feueressenz, die du im Austausch erhälst, ist von unschätzbarem Wert und wird Leyla zweifellos dabei helfen, ihre Schmuckstücke mit magischer Kraft zu versehen.",
            textBad: "TextBad"
        },
        questReceiver: {
            nameGood: "Leyla",
            nameBad: "Leyla",
            imageGood: "src/assets/img/quest/placeholder_quest.webp",
            imageBad: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "Die Feueressenz! Endlich bist du zurückgekehrt! Dein Mut und deine Entschlossenheit haben sich als unermesslich wertvoll erwiesen, mein tapferer Freund. Mit dieser mächtigen Zutat kann ich nun meine Schmuckstücke zu wahrhaft magischen Meisterwerken formen.",
            textBad: "Hehe, Edelsteine, sagst du? Nun, nun, was haben wir denn hier? Du bist mutig, mir diese gestohlene Ware anzubieten, mein Freund, oder vielleicht einfach nur ein bisschen naiv. Aber ich sage dir, ich bin hier, um Geschäfte zu machen, und ich werde dir ein Angebot machen, das du nicht ablehnen kannst."
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegionGood: "Drakan",
            questDeliverRegionBad: "Aridora"
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
        questMonsterText: "-",
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
            name: "Thorgar",
            image: "src/assets/img/quest/placeholder_quest.webp",
            text: "Momentan bin ich im Besitz einiger Bärenfelle, die eigentlich für den Handel mit Athos bestimmt waren. Jedoch kann ich meine Familie momentan nicht verlassen, da ein drohender Konflikt zwischen unseren Stämmen herrscht. Aus diesem Grund muss ich hier bleiben, um unser Dorf zu verteidigen. Kannst du die Bärenfelle für mich an Athos bringen?"
        },   
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Sylar",
            nameBad: "Sylar",
            imageGood: "src/assets/img/quest/placeholder_quest.webp",
            imageBad: "src/assets/img/quest/placeholder_quest.webp",
            textGood: "Ach, endlich sind die Bärenfelle angekommen! Diese Felle sind von ausgezeichneter Qualität und werden sich hervorragend für meine Arbeit eignen. Vielen Dank für deine Hilfe.",
            textBad: "-"
        },
        regions: {
            questRegion: "Frostgar",
            questDeliverRegionGood: "Athos",
            questDeliverRegionBad: "Athos"
        },
        questRewardGood: {
            reputation: 1,
            gold: 10,
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
            optionType: "Deliver",
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
        questMonsterText: "-",
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
]

let questTableSilver = [
  
];
  
let questTableGold = [
  
];

module.exports = {
    questTableBronze,
    questTableSilver,
    questTableGold
  };
