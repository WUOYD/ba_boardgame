let movesTableCombinationSwordSword = {
  1: {
      name: "Leichter Hieb",
      text: "1 Schaden",
      damage: 1,
      block: 0,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  2: {
      name: "Schwacher Schlag",
      text: "1 Schaden, 1 Block",
      damage: 1,
      block: 1,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  3: {
      name: "Präziser Stich",
      text: "1 Schaden, 1 Reflektieren",
      damage: 1,
      block: 0,
      heal: 0,
      dot: 0,
      reflect: 1,
      damageNextRound: 0,
  },
  4: {
      name: "Tiefer Schnitt",
      text: "1 Schaden, 1 Schaden jede Runde",
      damage: 1,
      block: 0,
      heal: 0,
      dot: 1,
      reflect: 0,
      damageNextRound: 0,
  },
  5: {
      name: "Kraftvoller Hieb",
      text: "2 Schaden",
      damage: 2,
      block: 0,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  }
}

let movesTableCombinationMagicMagic = {
  1: {
      name: "Schildwall",
      text: "3 Block",
      damage: 0,
      block: 3,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  2: {
      name: "Magischer Blitz",
      text: "2 Schaden, 2 Block",
      damage: 2,
      block: 2,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  3: {
      name: "Verstärkter Schutz",
      text: "4 Block",
      damage: 0,
      block: 4,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  }
}

let movesTableCombinationSkullSkull = {
  1: {
      name: "Magisches Eis",
      text: "2 Schaden, 2 Block",
      damage: 2,
      block: 2,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  2: {
      name: "Frostige Barriere",
      text: "1 Schaden, 3 Block",
      damage: 1,
      block: 3,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  3: {
      name: "Eisiger Angriff",
      text: "3 Schaden, 1 Block",
      damage: 3,
      block: 1,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  }
}

let movesTableCombinationSwordMagic = {
  1: {
      name: "Gedeckter Angriff",
      text: "1 Schaden, 1 Block",
      damage: 1,
      block: 1,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  2: {
      name: "Zauberschlag",
      text: "2 Schaden, 1 Block",
      damage: 2,
      block: 1,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  3: {
      name: "Kritischer Treffer",
      text: "3 Schaden",
      damage: 3,
      block: 0,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  }
}

let movesTableCombinationMagicSkull = {
  1: {
      name: "Magischer Schild",
      text: "3 Block",
      damage: 0,
      block: 3,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  2: {
      name: "Frostzauber",
      text: "4 Schaden, 2 Block",
      damage: 4,
      block: 2,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  3: {
      name: "Schneesturm",
      text: "2 Schaden, 4 Block",
      damage: 2,
      block: 4,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  }
}

let movesTableCombinationSwordSkull = {
  1: {
      name: "Schwerer Hieb",
      text: "2 Schaden",
      damage: 2,
      block: 0,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  2: {
      name: "Frostiger Schlag",
      text: "3 Schaden, 3 Block",
      damage: 3,
      block: 3,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  },
  3: {
      name: "Eisklinge",
      text: "4 Schaden, 2 Block",
      damage: 4,
      block: 2,
      heal: 0,
      dot: 0,
      reflect: 0,
      damageNextRound: 0,
  }
}

module.exports = {
  movesTableCombinationSwordSword,
  movesTableCombinationMagicMagic,
  movesTableCombinationSkullSkull,
  movesTableCombinationSwordMagic,
  movesTableCombinationMagicSkull,
  movesTableCombinationSwordSkull,
};




module.exports = {
  movesTableCombinationSwordSword,
  movesTableCombinationMagicMagic,
  movesTableCombinationSkullSkull,
  movesTableCombinationSwordMagic,
  movesTableCombinationMagicSkull,
  movesTableCombinationSwordSkull,
  };