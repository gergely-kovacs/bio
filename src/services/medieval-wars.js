export function initMap () {
  return new Array(11).fill(new Array(11).fill(null));
}

export function advanceMobs (battleField) {
  return [
    new Array(11).fill(null),
    ...battleField.slice(0, 10)
  ];
}

export function spawnMobs (battleField) {
  const firstRow = battleField[0].map(cell => {
    if (Math.random() < 0.04) {
      return 'mob_warrior';
    }
    return cell;
  });
  return [
    firstRow,
    ...battleField.slice(1, 11)
  ];
}

export function isLoseConditionMet (battleField) {
  return !!battleField[10].filter(cell => cell === 'mob_warrior').length;
}
