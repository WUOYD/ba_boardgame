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
  }
}

let movesTableCombinationSkullSkull = {
  1: {
      name: "Magisches Eis",
      text: "2 Schaden, 1 Block",
      damage: 2,
      block: 1,
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