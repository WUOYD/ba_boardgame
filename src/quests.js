let questTableBronzeFrosgar = [
    {
        questType: "Bronze",
        questOfferer: {
            name: "Bjorn",
            image: "src/assets/img/quest/Bjorn.webp",
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
            imageGood: "src/assets/img/quest/Bjorn.webp",
            imageBad: "src/assets/img/quest/Bjorn.webp",
            textGood: "Beeindruckend, Abenteurer! Dieser Reißzahn ist ein Beweis für deine Tapferkeit und Entschlossenheit. Mit dem Tod des Wolfes können wir endlich wieder ruhig schlafen. Du hast unserer Gemeinschaft einen großen Dienst erwiesen, und dafür sind wir dir zutiefst dankbar. Nimm diese Belohnung als Zeichen unserer Dankbarkeit.",
            textBad: "-"
        },
        regions: {
            questRegion: "Frosgar",
            questDeliverRegionGood: "Frosgar",
            questDeliverRegionBad: "Frosgar"
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
        questMonsterText: "Der Wolf steht majestätisch vor dir, sein Fell von eisigen Kristallen umhüllt, die im kalten Licht des Mondes funkeln. Seine Augen glühen vor wilder Entschlossenheit, bereit, jeden Herausforderer zu besiegen. Eine eisige Kälte geht von ihm aus und lässt dir das Blut in den Adern gefrieren. Sei bereit für einen erbitterten Kampf in den eisigen Weiten dieser Insel. Die Bewohner zählen auf dich, mutiger Abenteurer, um den Wolf von Frosgar zu besiegen und ihre Heimat zu verteidigen.",
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
            image: "src/assets/img/quest/Freya.webp",
            text: "Sei gegrüsst, tapferer Abenteurer! Ich brauche deine Hilfe bei einer wichtigen Angelegenheit. Wie du sehen kannst, habe ich hier eine Lieferung Eisessenz, die dringend zu den zwerigischen Schmieden in Drakan gebracht werden muss.Die Eisessenz wird in den tiefen Höhlen unserer Insel gefunden, wo sie von uralten magischen Quellen gespeist wird. Sie ist von unschätzbarem Wert und wird in Drakan benötigt, um die mächtigsten Schwerter zu schmieden, die jemals geschmiedet wurden. Wenn du diese Aufgabe für mich erledigst, gebe ich dir einen Teil des Gewinnes ab."
        },
        questMiddleman: {
            name: "Bronn",
            image: "src/assets/img/quest/Bronn.webp",
            textGood: "Aha, endlich ist die Eisessenz angekommen! Ich danke dir, tapferer Abenteurer, dass du diese wichtige Lieferung sicher zu uns gebracht hast. Die Eisessenz ist von unschätzbarem Wert für unsere Schmiedekunst, und ohne sie wären wir nicht in der Lage, die mächtigen Waffen und Rüstungen zu schmieden, die Drakan so dringend benötigt. Hier ist die Bezahlung, die ich mit Freya vereinbart habe.",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Freya",
            nameBad: "Freya",
            imageGood: "src/assets/img/quest/Freya.webp",
            imageBad: "src/assets/img/quest/Freya.webp",
            textGood: "Ah, du bist zurück! Ich sehe, dass du das Gold sicher zurückgebracht hast, das du für die Eisessenz erhalten hast. Das ist sehr großzügig von dir. Ich hoffe, die Belohnung ist deiner Mühe angemessen, aber ich möchte dir persönlich für deine Tapferkeit und Zuverlässigkeit danken.",
            textBad: "Aha, endlich ist die Eisessenz angekommen! Ich danke dir, tapferer Abenteurer, dass du diese wichtige Lieferung sicher zu uns gebracht hast. Die Eisessenz ist von unschätzbarem Wert für unsere Schmiedekunst, und ohne sie wären wir nicht in der Lage, die mächtigen Waffen und Rüstungen zu schmieden, die Drakan so dringend benötigt. Hier ist die Bezahlung, die ich mit Freya vereinbart habe."
        },
        regions: {
            questRegion: "Frosgar",
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
            image: "src/assets/img/quest/Grimgar.webp",
            text: "Unser friedliches Dorf wurde von einem anderen Stamm überfallen, einige unserer Häuser wurden abgebrannt und die Nahrungsmittel wurden gestohlen. Aber all das ist nicht so schlimm wie der Verlust des Amulettes meines Vaters. Hilf mir bitte, den Dieb zu fassen und mir das Amulett wieder zu beschaffen, um den Rest dieser abscheulichen Übeltäter kümmern wir uns später."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Grimgar",
            nameBad: "Grimgar",
            imageGood: "src/assets/img/quest/Grimgar.webp",
            imageBad: "src/assets/img/quest/Grimgar.webp",
            textGood: "TextGood",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frosgar",
            questDeliverRegionGood: "Frosgar",
            questDeliverRegionBad: "Frosgar"
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
            hasOption: "-",
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
        questMonster: 2,
        questMonsterText: "Ah, ein weiterer Narr, der sich in meine Angelegenheiten einmischt. Du glaubst wohl, du könntest mich besiegen und mir mein wohlverdientes Beutegut wieder abnehmen? Nun, komm und versuche es doch, wenn du dich traust.",
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
            image: "src/assets/img/quest/Hilda.webp",
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
            imageGood: "src/assets/img/quest/Hilda.webp",
            imageBad: "src/assets/img/quest/Hilda.webp",
            textGood: "Ich kann es kaum erwarten, die begabten Handwerker von Aridora kennenzulernen und von ihren Fertigkeiten zu lernen. Du hast mir eine großartige Möglichkeit eröffnet, meine Handwerkskunst zu verbessern und neue Möglichkeiten zu entdecken. Ich werde dir immer dankbar sein für deine Hilfe und deine Bereitschaft, mich auf diesem Abenteuer zu begleiten",
            textBad: "TextBad"
        },
        regions: {
            questRegion: "Frosgar",
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
            hasOption: "-",
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
            name: "Thorgar",
            image: "src/assets/img/quest/Thorgar.webp",
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
            imageGood: "src/assets/img/quest/Sylar.webp",
            imageBad: "src/assets/img/quest/Sylar.webp",
            textGood: "Ach, endlich sind die Bärenfelle angekommen! Diese Felle sind von ausgezeichneter Qualität und werden sich hervorragend für meine Arbeit eignen. Vielen Dank für deine Hilfe.",
            textBad: "-"
        },
        regions: {
            questRegion: "Frosgar",
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

let questTableBronzeAridora = [
    {
        questType: "Bronze",
        questOfferer: {
            name: "Leyla",
            image: "src/assets/img/quest/Leyla.webp",
            text: "Ich verfüge über einige kostbare Edelsteine, die in Drakan benötigt werden, um Waffen zu veredeln. Bringe sie zu den Zwergen,  welche in dieser Gegend leben, und tausche sie dort gegen Feueressenz ein. Sobald du die Feueressenz hast, bringe sie zu mir zurück. Ich brauche sie, um meine Schmuckstücke herzustellen."
        },
        questMiddleman: {
            name: "Bork",
            image: "src/assets/img/quest/Bork.webp",
            textGood: "Ah, die wertvollen Edelsteine von Leyla! Es ist eine Ehre, solche kostbaren Schätze von einer so geschätzten Verbündeten wie ihr zu erhalten. Die Edelsteine werden wir mit größter Sorgfalt behandeln und nutzen, um unsere Waffen zu veredeln und ihre Macht zu verstärken. Die Feueressenz, die du im Austausch erhälst, ist von unschätzbarem Wert und wird Leyla zweifellos dabei helfen, ihre Schmuckstücke mit magischer Kraft zu versehen.",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Leyla",
            nameBad: "Ravyn",
            imageGood: "src/assets/img/quest/Leyla.webp",
            imageBad: "src/assets/img/quest/Ravyn.webp",
            textGood: "Die Feueressenz! Endlich bist du zurückgekehrt! Dein Mut und deine Entschlossenheit haben sich als unermesslich wertvoll erwiesen, mein tapferer Freund. Mit dieser mächtigen Zutat kann ich nun meine Schmuckstücke zu wahrhaft magischen Meisterwerken formen.",
            textBad: "Hehe, Edelsteine, sagst du? Nun, nun, was haben wir denn hier? Du bist mutig, mir diese gestohlene Ware anzubieten, mein Freund, oder vielleicht einfach nur ein bisschen naiv. Aber ich sage dir, ich bin hier, um Geschäfte zu machen, und ich werde dir ein Angebot machen, das du nicht ablehnen kannst."
        },
        regions: {
            questRegion: "Aridora",
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
            optionText: "Bringe die Edelsteine nach Drakan und kehre zurück"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Verkaufe die Edelsteine am Hafen von Aridora"
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
            name: "Aldric",
            image: "src/assets/img/quest/Aldric.webp",
            text: "In der Wüste wurden kürzlich auffällige, mysteriöse Löcher und Spuren im Sand entdeckt. Die Bewohner sind besorgt über diese ungewöhnlichen Vorkommnisse. Würdest du dich bereit erklären, näher zu untersuchen, was sich dahinter verbirgt?"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "-",
            nameBad: "",
            imageGood: "-",
            imageBad: "-",
            textGood: "-",
            textBad: "-"
        },
        regions: {
            questRegion: "Aridora",
            questDeliverRegionGood: "Aridora",
            questDeliverRegionBad: "-"
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
            optionType: "DeliverMonster",
            optionText: "Untersuche die Vorkomnisse in der Wüste"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 3,
        questMonsterText: "Vor dir erhebt sich eine majestätische Düne, als plötzlich der Sand unter deinen Füßen zu beben beginnt. Ein dumpfes Grollen erfüllt die Luft, gefolgt von einem gewaltigen Zischen, das dich erstarren lässt. Aus dem goldenen Sand vor dir bricht eine Kreatur hervor, die jeden Gedanken an Flucht aus deinem Verstand verbannt",
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
            name: "Aria",
            image: "src/assets/img/quest/Aria.webp",
            text: "Ich habe eine Karte gefunden, die auf einen Schatz hinweist, der sich in den Ruinen von Aridora befindet. Ich gebe dir die Karte, um ihn  zu finden. Wenn du erfolgreich bist, werden wir beide reich sein und ich kann endlich von dieser verfluchten Insel verschwinden. Die Hitze wird mich eines Tages noch ins Grab bringen."
        },
        questMiddleman: {
            name: "Schatz",
            image: "src/assets/img/quest/Aria-Treasure.webp",
            textGood: "Während du die Ruinen untersuchst stösst du plötzlich auf eine verborgene Kammer, von der die Karte sprach. In der Mitte der Kammer steht eine Truhe, die beim Öffnen Schmuck und Gold offenbart.",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Aria",
            nameBad: "Schatz",
            imageGood: "src/assets/img/quest/Aria.webp",
            imageBad: "src/assets/img/quest/Aria-Treasure.webp",
            textGood: "Unfassbar! Du hast den Schatz gefunden!Ich kann es kaum glauben! Endlich, nach all diesen Jahren der Suche und des Hoffens. Wir sind reich, mein Freund, reich! Du hast mein Leben verändert, mein Freund. Mit diesem Schatz kann ich endlich von dieser verfluchten Insel verschwinden und ein neues Leben beginnen, weit weg von der unerbittlichen Hitze und den endlosen Sanddünen.",
            textBad: "Während du die Ruinen untersuchst stösst du plötzlich auf eine verborgene Kammer, von der die Karte sprach. In der Mitte der Kammer steht eine Truhe, die beim Öffnen Schmuck und Gold offenbart."
        },
        regions: {
            questRegion: "Aridora",
            questDeliverRegionGood: "Aridora",
            questDeliverRegionBad: "-"
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
            optionText: "Schatz suchen und zurückbringen"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Schatz suchen und selber behalten"
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
            name: "Orion",
            image: "src/assets/img/quest/Orion.webp",
            text: "Ein unerbittlicher Sandsturm hat die Bewohner der Wüsteninsel heimgesucht und bedroht unsere Existenz. Ich habe von einem Forscher der Insel Nythoria ein magisches Amulett erhalten, welches in der Lage sein soll den Sandsturm aufzuhalten. Das Problem ist, dass man es in das Sturmauge bringen muss, um die gewünschte Wirkung zu erzielen. Du bist ein mächtiger Abenteurer, wenn es jemand schaffen kann, dann du!"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Aria",
            nameBad: "Morgrim",
            imageGood: "src/assets/img/quest/Aria.webp",
            imageBad: "src/assets/img/quest/Morgrim.webp",
            textGood: "Unglaublich! Du hast es geschafft, den Sandsturm zu stoppen! Unser aller Dank gebührt dir, tapferer Abenteurer. Nimm bitte diese Belohnung an, es ist nicht viel, aber mehr habe ich leider nicht.",
            textBad: "Ich hörte, du hast da etwas von grossem Wert für mich? Du bist ein gewiefter Geschäftsmann, das muss man dir lassen. Dieses Amulett wird mir sicherlich einen schönen Gewinn einbringen. Du hast den richtigen Riecher für lukrative Geschäfte, das muss ich sagen. Nun, mein Freund, ich hoffe, unsere Wege kreuzen sich wieder, es hat mich gefreut, mit dir Geschäfte zu machen."
        },
        regions: {
            questRegion: "Aridora",
            questDeliverRegionGood: "Talvar",
            questDeliverRegionBad: "-"
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
            optionType: "Deliver",
            optionText: "Amulett nehmen und zum Sturm reisen"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Amulett nehmen am Hafen von Talvar verkaufen"
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
]   

let questTableBronzeTalvar = [ 
    {
        questType: "Bronze",
        questOfferer: {
            name: "Marelda",
            image: "src/assets/img/quest/Marelda.webp",
            text: "Oiii, riechst du das? Es stinkt nach Fisch! Klar sind wir ein Fischerdorf, aber ich kann den Gestank kaum noch ertragen. Ich habe ein Gerücht gehört, dass die Tintenfresser von Nythoria ein Artefakt entwickelt haben, welches einen wohligen Duft versprüht und sogar den Gestank von verbrannten Haaren überdecken kann! Wir haben gemeinsam gesammelt und konnten 10 Gold zusammenkratzen. Kannst du für mein Dorf eines dieser Artefakte auf Nythoria beschaffen?"
        },
        questMiddleman: {
            name: "Priscilla",
            image: "src/assets/img/quest/Priscilla.webp",
            textGood: "Du bist also den weiten Weg von Talvar hierergekommen, um mir meine neuste Erfindung abzukaufen? Nun gut ich mache dir einen fairen Preis, ich wusste sowieso nie was ich mit dm Ding anfangen soll.",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Marelda",
            nameBad: "-",
            imageGood: "-",
            imageBad: "-",
            textGood: "Wow, das Ding funktioniert ja wirklich! Ich kann den Fischgestank kaum noch wahrnehmen! Stattdessen riecht es hier nach frischen Blumen und Zimt. Das ist ja fantastisch, die Tintenfresser sind also doch gar nicht so blöd wie ich immer dachte!",
            textBad: "-"
        },
        regions: {
            questRegion: "Talvar",
            questDeliverRegionGood: "Nythoria",
            questDeliverRegionBad: "-"
        },
        questRewardGood: {
            reputation: 1,
            gold: 0,
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
            optionText: "Hole das Artefakt in Nythoria"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Reward",
            optionText: "Nimm das Gold und mach dich aus dem Staub"
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
            name: "Bran",
            image: "src/assets/img/quest/Bran.webp",
            text: "Unser Dorf wird in der letzten Zeit immer öfter von einer Gruppe von Banditen überfallen. Wir haben versucht, mit ihnen zu verhandeln, aber sie haben abgelehnt. Finde dieses Pack und beseitige sie!"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "-",
            nameBad: "-",
            imageGood: "-",
            imageBad: "-",
            textGood: "-",
            textBad: "-"
        },
        regions: {
            questRegion: "Talvar",
            questDeliverRegionGood: "Talvar",
            questDeliverRegionBad: "-"
        },
        questRewardGood: {
            reputation: 1,
            gold: 10,
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
            optionType: "DeliverMonster",
            optionText: "Finde und bekämpfe die Banditen"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 4,
        questMonsterText: "Na, wen haben wir denn hier? Ein neugieriger Abenteurer, der sich in unsere Angelegenheiten einmischt. Du hast dich wohl für die falsche Seite entschieden, mein Freund. Aber keine Sorge, wir werden uns um dich kümmern, genauso wie wir es mit den anderen tun, die sich uns in den Weg stellen.",
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
            name: "Ivan",
            image: "src/assets/img/quest/Ivan.webp",
            text: "Du da! Ja du. Du siehst aus, als kommst du weit herum. Ich schulde den Zwergen auf Drakan noch etwas Gold. Hier nimm die Münzen und bringe sie an den Hafen von Drakan. Ich vertraue dass die Zahlung heil ankommt. Du erhältst natürlich einen kleinen Teil der Transaktion."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Dregan",
            nameBad: "Dregan",
            imageGood: "src/assets/img/quest/Dregan.webp",
            imageBad: "src/assets/img/quest/Dregan.webp",
            textGood: "Ich danke euch für eure Zuverlässigkeit. Geschäfte mit den Bewohnern von Talvar sind immer ein Wagnis, aber es scheint, als hätte ich das richtige Vertrauen gesetzt.Ihr habt euren Teil der Abmachung erfüllt, und ich werde meinen halten. Wenn ihr je wieder Geschäfte mit den Zwergen von Drakan machen wollt, wisst ihr, wo ihr mich findet.",
            textBad: "Was ist das denn?! Das ist nicht das, was vereinbart war. Wo ist der Rest des Goldes? Ivan, dieser Mistkerl! Ich werde ihm eine letzte Chance geben, seinen Fehler zu korrigieren. Bringt mir den Rest des Goldes, den ich verlangt habe, oder es wird Konsequenzen geben. Verlasst diesen Hafen, bis ihr das Problem behoben habt."
        },
        regions: {
            questRegion: "Talvar",
            questDeliverRegionGood: "Drakan",
            questDeliverRegionBad: "-"
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
            optionType: "DeliverDecision",
            optionText: "Bringe das Gold nach Drakan"
        },
        optionBad: {
            hasOption: "-",
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
        questMonsterText: "-",
        optionGoodSecond: {
            hasOption: 1,
            optionType: "Reward",
            optionText: "Übergib Dregan das Gold"
        },
        optionBadSecond: {
            hasOption: 1,
            optionType: "Reward",
            optionText: "Übergibt Dregan nur einen Bruchteil des Goldes"
        },
    },
    {
        questType: "Bronze",
        questOfferer: {
            name: "Gorr",
            image: "src/assets/img/quest/Gorr.webp",
            text: "Pssst… komm mal her. Ich habe einen kleinen Job für dich, wenn du diskret sein kannst. In einem der Fischerboote hier in Talvar wurde eine seltene und kostbare Perle gefunden. Sie ist in der Vorratshöhle  versteckt, und ich plane, sie zu holen. Bist du dabei? Du musst lediglich die Wächter ablenken. Wir könnten das große Los ziehen."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Gorr",
            nameBad: "Gorr",
            imageGood: "-",
            imageBad: "-",
            textGood: "-",
            textBad: "-"
        },
        regions: {
            questRegion: "Talvar",
            questDeliverRegionGood: "Talvar",
            questDeliverRegionBad: "-"
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
            optionType: "DeliverDecision",
            optionText: "Geh mit Gorr zu der Vorratshöhle"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 5,
        questMonsterText: "Du dreckiger Verräter! Dafür wirst du büssen!",
       
        optionGoodSecond: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Verrate Gorr und alarmiere die Wachen"
        },
        optionBadSecond: {
            hasOption: 1,
            optionType: "Reward",
            optionText: "Lenke die Wachen ab"
        },
    }
]

let questTableBronzeDrakan = [
    {
        questType: "Bronze",
        questOfferer: {
            name: "Tholrin",
            image: "src/assets/img/quest/Tholrin.webp",
            text: "Hey, ich habe eine Axt für einen Holzfäller in Athos geschmiedet. Kannst du sie ihm übergeben und mir das dafür Gold bringen?"
        },
        questMiddleman: {
            name: "Roran",
            image: "src/assets/img/quest/Roran.webp",
            textGood: "Ah, endlich ist sie da! Diese Axt ist perfekt für meine Arbeit im Wald von Athos. ",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Tholrin",
            nameBad: "Roran",
            imageGood: "src/assets/img/quest/Tholrin.webp",
            imageBad: "src/assets/img/quest/Roran.webp",
            textGood: "Du hast deine Sache gut gemacht, mein Freund. Als Zeichen meiner Dankbarkeit möchte ich dir eine kleine Belohnung geben. Bitte akzeptiere sie als Anerkennung für deine Zuverlässigkeit.",
            textBad: "Ah, endlich ist sie da! Diese Axt ist perfekt für meine Arbeit im Wald von Athos. "
        },
        regions: {
            questRegion: "Drakan",
            questDeliverRegionGood: "Athos",
            questDeliverRegionBad: "Athos"
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
            optionText: "Liefere die Axt und bring das Gold zurück"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Liefere die Axt und behalte das Gold"
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
            name: "Skaldor",
            image: "src/assets/img/quest/Skaldor.webp",
            text: "Ein Drache treibt sein Unwesen in unserem Land. Er terrorisiert die Gegend um den Vulkan herum und bedroht unsere Existenz. Doch ich weiß, dass du mutig genug bist, um dieser Herausforderung gewachsen zu sein. Bringe mir danach sein Herz, ich kann es gut gebrauchen, um eine mächtige Rüstung herzustellen, die jedem Angriff trotzen kann. "
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Skaldor",
            nameBad: "-",
            imageGood: "src/assets/img/quest/Skaldor.webp",
            imageBad: "-",
            textGood: "Du bist wahrhaftig ein Held, mein Freund! Du hast nicht nur das Ungeheuer besiegt, sondern auch die Quelle seiner Macht erobert. Durch deine Hilfe bin ich nun in der Lage die mächtigste aller Rüstungen zu schmieden, welche durch die Macht des Drachenherzens verstärkt wird.",
            textBad: "-"
        },
        regions: {
            questRegion: "Drakan",
            questDeliverRegionGood: "Drakan",
            questDeliverRegionBad: "Drakan"
        },
        questRewardGood: {
            reputation: 1,
            gold: 10,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: -1,
            gold: 0,
            move: ["MagicMagic", 2],
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
            optionText: "Besiege den Drachen und bringe sein Herz zurück"
        },
        optionBad: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Besiege den Drachen und zerstöre sein Herz"
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
        questMonster: 6,
        questMonsterText: "Als der Drache heranfliegt, erfüllt sein brüllendes Echo die Luft und seine gewaltigen Schwingen werfen einen düsteren Schatten über das Land. Die Hitze seines Atems verursacht ein Flimmern in der Luft, während er mit drohendem Blick über die Landschaft blickt.",
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
            name: "Jorund",
            image: "src/assets/img/quest/Jorund.webp",
            text: "Ein mysteriöses Leuchten kommt nachts aus dem alten, verlassenen Minenschacht. In der Mine soll der Legende nach ein uralter Schatz liegen. Er soll jedoch von einer geisterhaften Wache beschützt werden. Bisher ist auf jedenfall noch niemand der die Mine betreten hat zurückgekehrt. Aus diesem Grund wurde die Mine vor einiger Zeit verschlossen. Ich kann dir jedoch den Schlüssel zum Tor der Mine geben, um den Schatz zu bergen, wenn du ihn mit mir teilst"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Jorund",
            nameBad: "-",
            imageGood: "src/assets/img/quest/Jorund.webp",
            imageBad: "-",
            textGood: "Du bist zurückgekehrt, und mit dir der Schatz aus der alten Mine! Du hast bewiesen, dass du ein wahrer Abenteurer bist. Hier nimm dir deinen Anteil.",
            textBad: "-"
        },
        regions: {
            questRegion: "Drakan",
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
            optionText: "Hol den Schatz aus der Mine und bringe ihn zurück"
        },
        optionBad: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Hol den Schatz aus der Mine und beanspruche ihn für dich"
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
        questMonster: 7,
        questMonsterText: "Wer wagt es, in mein Reich einzudringen und meinen Schatz zu stehlen? Seid gewarnt, Eindringling, denn ihr werdet nicht ungestraft davonkommen.",
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
            name: "Grunthar",
            image: "src/assets/img/quest/Grunthar.webp",
            text: "Mein Lehrmeister Olafur ist seit einigen Wochen spurlos verschwunden. Er war ein legendärer Braumeister und hat mir alles beigebracht, was ich über die Kunst des Bierbrauens weis. Jedoch ist mit seinem Verschwinden auch das geheime Braurezept verschwunden. Unser Vorrat geht langsam dem Ende zu und die Kunden erwarten höchste Qualität von uns. Das Rezept könnte sich in seinem Haus in den Bergen von Drakan befinden, kannst du es mir beschaffen?"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Olafur",
            nameBad: ".",
            imageGood: "src/assets/img/quest/Olafur.webp",
            imageBad: "-",
            textGood: "Was willst du hier?... Was Grunthar hat dich geschickt?! Dieser Mistkerl versucht bereits seit Jahren, mir mein Geheimes Braurezept zu klauen. Er ist ein Betrüger, der mir mein Geschäft streitig machen will!",
            textBad: "-"
        },
        regions: {
            questRegion: "Drakan",
            questDeliverRegionGood: "Drakan",
            questDeliverRegionBad: "Drakan"
        },
        questRewardGood: {
            reputation: 1,
            gold: 5,
            move: "-",
            impact: "-",
            text: "Weist du was? Eigentlich bin ich zu alt für dieses Geschäft. Du scheinst mir ehrenhaft zu sein, nimm das Braurezept, aber versprich mir, dass du es für dich behälst."
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
            optionType: "DeliverDecision",
            optionText: "Suche Olafur"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 8,
        questMonsterText: "'Ich werde dir mein Rezept nicht freiwillig geben! Wenn du es willst komm und hol es dir...!' Olafur nimmt das Rezept und wirft es in seinen Ofen",
        optionGoodSecond: {
            hasOption: 1,
            optionType: "Reward",
            optionText: "Glaube Olafur und lasse ihn in Ruhe"
        },
        optionBadSecond: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Stiehl das Rezept von Olafur"
        },
    },
    {
        questType: "Bronze",
        questOfferer: {
            name: "Morana",
            image: "src/assets/img/quest/Morana.webp",
            text: "Eine Reihe ungewöhnlicher Erdbeben hat die Insel erschüttert, verursacht durch eine uralte Bestie, die tief unter der Insel lebt. Steig hinab ins Tor zur Hölle am Fuss vom höchsten Berg von Drakan und stell dich der Bestie. Ich habe ein mächtiges Amulett, welches dir ermöglichen sollte, die Bestie zu zähmen."
        },
        questMiddleman: {
            name: "Bestie der Tiefe",
            image: "src/assets/img/quest/Morana-Bestie.webp",
            textGood: "Du setzt das Amulett von Morana ein, die Bestie wehrt sich gegen den mächtigen Zauber des Amuletts. Nach kurzer Zeit schwindet die Kraft der Bestie und sie wird ruhiger. Mit Hilfe des Amuletts gelang es dir die Bestie zu zähmen.",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Morana",
            nameBad: "-",
            imageGood: "src/assets/img/quest/Morana.webp",
            imageBad: "-",
            textGood: "-",
            textBad: "-"
        },
        regions: {
            questRegion: "Drakan",
            questDeliverRegionGood: "Drakan",
            questDeliverRegionBad: "Drakan"
        },
        questRewardGood: {
            reputation: 1,
            gold: 10,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: 1,
            gold: 0,
            move: ["SwordSword", 3],
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
            optionText: "Nimm das Amulett um die Bestie zu zähmen"
        },
        optionBad: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Ich brauche das Amulett nicht, ich töte diese Bestie ein für alle Mal!"
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
        questMonster: 9,
        questMonsterText: "Du steigst ab in das Tor zur Hölle, unten angekommen steht dir eine furchterregende Bestie gegenüber. Die Zeit ist gekommen, deine Kraft unter Beweis zu stellen!",
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

let questTableBronzeNythoria = [
     {
        questType: "Bronze",
        questOfferer: {
            name: "Ilyan",
            image: "src/assets/img/quest/Ilyan.webp",
            text: "Sei gegrüßt! Ich bin Alchemist Ilyan. Eine unerklärliche Energieaktivität hat im Kristallberg begonnen, und ich fürchte um die Sicherheit unserer Insel. Deine Fähigkeiten sind dringend benötigt, um die Ursache zu untersuchen und mögliche Gefahren abzuwenden. Ich werde mich mit den Zwergen auf Drakan zusammensetzen, kannst du mir den Kern der Resonanz nach Drakan bringen?"
        },
        questMiddleman: {
            name: "Energiequelle",
            image: "src/assets/img/quest/Ilyan-Energiequelle.webp",
            textGood: "Als du den Eingang zum Kristallberg betrittst, kommst du in eine riesige Halle. In der Mitte auf einem Altar siehst du die Energiequelle in einem seltsamen Licht erstrahlen. Sie ist aus reinem Gold und strahlt eine beeindruckende Energie aus.",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Ilyan",
            nameBad: "Energiequelle",
            imageGood: "src/assets/img/quest/Ilyan.webp",
            imageBad: "src/assets/img/quest/Ilyan-Energiequelle.webp",
            textGood: "Vielen Dank für deine Hife, ich habe bereits mit den Zwergen eine Lösung für unser Problem gesucht, leider bisher ohne Erfolg. ",
            textBad: "Als du den Eingang zum Kristallberg betrittst, kommst du in eine riesige Halle. In der Mitte auf einem Altar siehst du die Energiequelle in einem seltsamen Licht erstrahlen. Sie ist aus reinem Gold und strahlt eine beeindruckende Energie aus. Als du sie deaktivierst zerfällt sie in ihre Einzelteile, das Gold steckst du ein und verschwindest."
        },
        regions: {
            questRegion: "Nythoria",
            questDeliverRegionGood: "Drakan",
            questDeliverRegionBad: "-"
        },
        questRewardGood: {
            reputation: 1,
            gold: 0,
            move: ["SwordSkull", 3],
            impact: "-"
        },
        questRewardBad: {
            reputation: 1,
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
            optionText: "Energiequelle sichern, verhindere, dass die Energie unkontrolliert freigesetzt wird, und bringe sie zu Ilyan für weitere Forschungen."
        },
        optionBad: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Die Energiequelle besteht aus reinem Gold, deaktiviere die Energiequelle und nimm das gesamte Gold an dich."
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
            name: "Leta",
            image: "src/assets/img/quest/Leta.webp",
            text: "Im Nebelmeer haben mehrere Jäger in den letzten Tagen ein fürchterliches Schnauben gehört und einige der Jäger sind spurlos verschwunden. Kannst du das Gebiet untersuchen und das Monster, was es auch immer ist, erledigen? Ich wäre dir zu tiefstem Dank verpflichtet."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Leta",
            nameBad: "-",
            imageGood: "src/assets/img/quest/Leta.webp",
            imageBad: "-",
            textGood: "-",
            textBad: "-"
        },
        regions: {
            questRegion: "Nythoria",
            questDeliverRegionGood: "Nythoria",
            questDeliverRegionBad: "-"
        },
        questRewardGood: {
            reputation: 1,
            gold: 5,
            move: "-",
            impact: "-"
        },
        questRewardBad: {
            reputation: -1,
            gold: 0,
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
            optionType: "DeliverMonster",
            optionText: "Finde und erledige das Monster"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 11,
        questMonsterText: "Hier kommt das Nebelmonster",
       
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
            name: "Dr. Titus Tona",
            image: "src/assets/img/quest/Dr.Titus-Tona.webp",
            text: "Oh, da bist du ja! Hervorragend, hervorragend! Ich bin Dr. Titus, vielleicht hast du von meinen Studien der kosmischen Windungen gehört? Nein? Nun, macht nichts. Zur Sache: Meine unschätzbar wertvolle Teleskop-Linse, ein Unikat, ist verschwunden! Ich vermute, ein Eiskobold aus Frosgar hat sie entwendet, um sie für ein paar glitzernde Münzen zu verkaufen. Ohne sie ist meine Arbeit so aussichtslos wie die Suche nach Sternenlicht bei Tagesanbruch! Kannst du mich begleiten, um den Eiskobold zu konfrontieren? Ohne diese Linse... oh, diese Katastrophe!"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Jotorun",
            nameBad: "Dr. Titus Tona",
            imageGood: "src/assets/img/quest/Dr.Titus-Tona.webp",
            imageBad: "src/assets/img/quest/Dr.-Titus-Tona-Jotorun.webp",
            textGood: "Halt! Bevor du irgendetwas unüberlegtes tust, lass mich sprechen! Ich bin der Jotorun, den der verrückte Titus in ein Versuchstier verwandelt hat. Ja, ich habe die Linse, aber nicht ohne Grund. Titus hat mich für seine Experimente missbraucht, und als ich nicht mehr nützlich war, hat er mich wie Abfall behandelt. Ich bitte dich, gegen den wahren Bösewicht hier vorzugehen – gegen Titus. Hilf mir, und ich verspreche dir eine Belohnung, die deine wildesten Vorstellungen übertrifft. Was sagst du dazu?",
            textBad: "-"
        },
        regions: {
            questRegion: "Nythoria",
            questDeliverRegionGood: "Nythoria",
            questDeliverRegionBad: "-"
        },
        questRewardGood: {
            reputation: 1,
            gold: 0,
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
            optionType: "DeliverDecision",
            optionText: "Finde den Eiskobold"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 12,
        questMonsterText: "*Knack* *Knack* *Knack*",
        optionGoodSecond: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Beseitige Dr. Titus Tona"
        },
        optionBadSecond: {
            hasOption: 1,
            optionType: "Reward",
            optionText: "Verschone den Eiskobold Jotorun"
        },
    },
    {
        questType: "Bronze",
        questOfferer: {
            name: "Dr. Aldrich",
            image: "src/assets/img/quest/Dr.-Aldrich.webp",
            text: "Mein Freund, ich benötige dringend deine Hilfe bei einer wichtigen Aufgabe. Es gibt ein Artefakt, das ich für meine Forschungen dringend benötige. Es ist von unschätzbarem Wert und von entscheidender Bedeutung für meine Arbeit. Das Artefakt wurde zuletzt in den Ruinen des alten Tempels der Erkenntnis gesichtet. Dieser befindet sich in den Wäldern von Athos. Es ist ein gefährliches Unterfangen, dorthin zu gelangen, aber ich bin zuversichtlich, dass du die Fähigkeiten besitzt, um diese Aufgabe zu bewältigen."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Dr. Aldrich",
            nameBad: "-",
            imageGood: "src/assets/img/quest/Dr.-Aldrich.webp",
            imageBad: "-",
            textGood: "Du hast es geschafft! Um ehrlich zu sein hätte ich nicht gedacht dass so eine schmächtig gebaute Person in der Lage ist das Artefakt zu holen. Aber nun gut hier ist deine Belohnung.",
            textBad: "-"
        },
        regions: {
            questRegion: "Nythoria",
            questDeliverRegionGood: "Nythoria",
            questDeliverRegionBad: "-"
        },
        questRewardGood: {
            reputation: 1,
            gold: 10,
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
            optionType: "ReturnMonster",
            optionText: "Hole das Artefakt aus dem Tempel der Erkenntnis"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 10,
        questMonsterText: "Nicht ein weiterer sterblicher Narr, der die heiligen Hallen betreten will, um das Artefakt zu beanspruchen! Das Artefakt gehört den Göttern und es wird nur denjenigen gewährt, die würdig sind, es zu empfangen. Kein Sterblicher wird es ungestraft beanspruchen können.",
       
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

let questTableBronzeAthos = [
    {   
        questType: "Bronze",
        questOfferer: {
            name: "Thalion",
            image: "src/assets/img/quest/Thalion.webp",
            text: "Dieser Baum ist wirklich ungewöhnlich... ich bekomme ihn einfach nicht zu Fall. Es fühlt sich an, als ob er durch eine magische Kraft geschützt wird. Meine beste Axt ist sogar daran zerbrochen. Könntest du mir helfen, indem du eine neue Axt von den Zwergen in Drakan besorgst?"
        },
        questMiddleman: {
            name: "Gulmur",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Thalion",
            nameBad: "-",
            imageGood: "src/assets/img/quest/Thalion.webp",
            imageBad: "-",
            textGood: "Wow das war unerwartet! Vielen Dank für deine Hilfe, ohne dich hätte mich diese Kreatur wohl ins Grab gebracht. Ich werde diesen seltsamen Vorfall gleich dem Stammesoberhaupt melden.",
            textBad: "-"
        },
        regions: {
            questRegion: "Athos",
            questDeliverRegionGood: "Athos",
            questDeliverRegionBad: "-"
        },
        questRewardGood: {
            reputation: 1,
            gold: 10,
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
            optionType: "ReturnMonster",
            optionText: "Hole die Axt in Drakan"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 14,
        questMonsterText: "*Krach* *Knartsch* *Quitsch*",
       
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
            name: "Fenion",
            image: "src/assets/img/quest/Fenion.webp",
            text: "Ein mysteriöser Alchemist aus Nythoria ist vor Kurzem im Dorf aufgetaucht und hat sich in einer alten Ruine in der Nähe niedergelassen. Seit seiner Ankunft häufen sich seltsame Vorfälle: Tiere verhalten sich ungewöhnlich und Pflanzen wachsen über Nacht. Ich fürchte, dass der Alchemist dunkle Magie praktiziert, die das Gleichgewicht der Natur stört. Kannst du den Alchemisten aufsuchen und mit ihm reden, um herauszufinden, was hier vor sich geht?"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Vito",
            nameBad: "-",
            imageGood: "src/assets/img/quest/Vito.webp",
            imageBad: "-",
            textGood: "Wer wagt es, mein geheimes Refugium zu stören? Ach, die Dorfbewohner und ihre kleinen Sorgen. Sie verstehen einfach nicht, dass manchmal große Opfer für noch größere Gewinne nötig sind. Meine Experimente sind... nun ja, ein wenig fortgeschrittener als das, was sie als 'natürlich' betrachten würden. Ein wenig Modifikation hier, ein bisschen Energieumleitung dort. Ich nutze die verborgenen Energien dieser Insel, um meine eigenen Kräfte zu verstärken. Bedauerlich, dass die Natur dabei ein wenig aus dem Gleichgewicht geraten ist. Nimm dieses Gold, verlasse diesen Ort und spreche nie wieder darüber, und ich werde sicherstellen, dass deine kleine Gemeinde verschont bleibt. Mischt du dich jedoch weiter ein, kann ich für nichts garantieren.",
            textBad: "-"
        },
        regions: {
            questRegion: "Athos",
            questDeliverRegionGood: "Athos",
            questDeliverRegionBad: "-"
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
            optionType: "DeliverDesicion",
            optionText: "Suche den Alchemisten auf"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 15,
        questMonsterText: "-",
        optionGoodSecond: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Unterbinde die Arbeit von Vito"
        },
        optionBadSecond: {
            hasOption: 1,
            optionType: "Reward",
            optionText: "Nimm die Bestechung an und schweige über seine Arbeit"
        },
    },
    {   
        questType: "Bronze",
        questOfferer: {
            name: "Elanor",
            image: "src/assets/img/quest/Elanor.webp",
            text: "Ich stehe vor einem großen Dilemma. Meine Vorräte an wichtigen Heilkräutern, die ich zur Behandlung unserer Dorfbewohner nutze, sind gefährlich zur Neige gegangen. Besonders jetzt, wo eine Krankheitswelle unser Dorf heimsucht, benötige ich diese Kräuter dringender denn je. Leider wachsen einige dieser essenziellen Kräuter nur in einem abgelegenen Teil des nahegelegenen Waldes, bekannt für seine wilden Tiere und launischen Wetterbedingungen. Ich brauche dringend jemanden, der mutig genug ist, diese Kräuter zu sammeln, damit ich die Gesundheit unserer Gemeinschaft aufrechterhalten kann. Bist du bereit, diese Aufgabe zu übernehmen und unser Dorf zu unterstützen?"
        },
        questMiddleman: {
            name: "Heilkräuter",
            image: "src/assets/img/quest/Haulkraeuter.webp",
            textGood: "Du hats die benötigten Heilkräuter gefunden, bringe sie zurück zu Elanor",
            textBad: "Du hats die benötigten Heilkräuter gefunden, bringe sie zurück zu Elanor"
        },
        questReceiver: {
            nameGood: "Elanor",
            nameBad: "-",
            imageGood: "src/assets/img/quest/Elanor.webp",
            imageBad: "-",
            textGood: "Vielen Dank für deine Hilfe. Mit diesen Heilkräutern kann ich unser Dorf retten. Diese magische Perle verleiht dir Kraft, nimm sie als Zeichen meiner Dankbarkeit",
            textBad: "Vielen Dank für deine Hilfe. Mit diesen Heilkräutern kann ich unser Dorf retten, auch wenn dies mein letztes Gold ist."
        },
        regions: {
            questRegion: "Athos",
            questDeliverRegionGood: "Athos",
            questDeliverRegionBad: "Athos"
        },
        questRewardGood: {
            reputation: 1,
            gold: 0,
            move: ["SwordMagic", 2],
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
            optionText: "Hilf Elanor die Heilkräuter zu besorgen und das Dorf zu retten"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Return",
            optionText: "Verlange Gold für deine Hilfe"
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
            name: "Arwen",
            image: "src/assets/img/quest/Arwen.webp",
            text: "Ich habe hier eine Ladung Holz, die in Nythoria benötigt wird. Leider ist mein Schiff beim letzten Seegang durch einen Sturm beschädigt worden. Kannst du das Holz für mich nach Nythoria bringen?"
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Gwendolin",
            nameBad: "Tarik",
            imageGood: "src/assets/img/quest/Gwendolin.webp",
            imageBad: "src/assets/img/quest/Tarik.webp",
            textGood: "Ah das Holz, welches ich bestellt habe. Vielen Dank für die Lieferung, ich habe bereits darauf gewartet.",
            textBad: "Du hast also Holz zu verkaufen? Du siehst mir nicht nach einem Holzfäller aus... Gut für dich, dass ich solche Dinge nicht genau hinterfrage, wenn ich ein gutes Angebot rieche. Hier nimm das Gold und verschwinde, bevor ich die Wachen rufe! "
        },
        regions: {
            questRegion: "Athos",
            questDeliverRegionGood: "Nythoria",
            questDeliverRegionBad: "Talvar"
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
            optionType: "Deliver",
            optionText: "Bringe das Holz nach Nythoria"
        },
        optionBad: {
            hasOption: 1,
            optionType: "Deliver",
            optionText: "Stehle das Holz und verkaufe es in Talvar"
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
            name: "Nuala",
            image: "src/assets/img/quest/Nuala.webp",
            text: "Hey, du! Ich muss dir was erzählen... Also, ich war heute am heiligen See, weißt du? Und da war dieser Mann... Er hat sich total komisch benommen, ganz anders als die Leute hier normalerweise. Er stand nur da und starrte ins Wasser, ohne sich zu bewegen, fast wie verzaubert oder so. Es war echt seltsam. Kannst du nachsehen, was mit ihm los ist? Vielleicht stimmt was nicht, oder er braucht Hilfe."
        },
        questMiddleman: {
            name: "-",
            image: "-",
            textGood: "-",
            textBad: "-"
        },
        questReceiver: {
            nameGood: "Aerendyl",
            nameBad: "Aerendyl",
            imageGood: "src/assets/img/quest/Nuala-Aerendyl.webp",
            imageBad: "src/assets/img/quest/Nuala-Aerendyl.webp",
            textGood: "”Das Wasser, es flüstert... es lügt nicht... es zeigt, was verborgen ist…” Der Mann scheint verwirrt zu sein und geht auf dich los.",
            textBad: "”Das Wasser, es flüstert... es lügt nicht... es zeigt, was verborgen ist…” Der Mann scheint verwirrt zu sein und geht auf dich los."
        },
        regions: {
            questRegion: "Athos",
            questDeliverRegionGood: "Athos",
            questDeliverRegionBad: "Athos"
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
            hasOption: "-",
            optionType: "-",
            optionText: "-"
        },
        optionBad: {
            hasOption: "-",
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
        questMonster: 16,
        questMonsterText: "-",
        optionGoodSecond: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Überwältige den Mann und versuch ihm zu helfen"
        },
        optionBadSecond: {
            hasOption: 1,
            optionType: "DeliverMonster",
            optionText: "Töte den Mann und plündere anschliessend seine Leiche"
        },
    },
]


let questTableSilverNythoria
let questTableSilverDrakan
let questTableSilverTalvar
let questTableSilverFrosgar
let questTableSilverAthos
let questTableSilverAridora

let questTableGoldNythoria
let questTableGoldDrakan
let questTableGoldTalvar
let questTableGoldFrosgar
let questTableGoldAthos
let questTableGoldAridora


const questTableBronze = {
    questTableBronzeNythoria,
    questTableBronzeDrakan,
    questTableBronzeTalvar,
    questTableBronzeFrosgar,
    questTableBronzeAthos,
    questTableBronzeAridora,
}

const questTableSilver = {
    questTableSilverNythoria,
    questTableSilverDrakan,
    questTableSilverTalvar,
    questTableSilverFrosgar,
    questTableSilverAthos,
    questTableSilverAridora,
}

const questTableGold = {
    questTableGoldNythoria,
    questTableGoldDrakan,
    questTableGoldTalvar,
    questTableGoldFrosgar,
    questTableGoldAthos,
    questTableGoldAridora,
}
  

module.exports = {
    questTableBronze,
    questTableSilver,
    questTableGold,
  };