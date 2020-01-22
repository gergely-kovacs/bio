export function initMap () {
  const map = new Array(11).fill(new Array(11).fill(null));
  map[10][5] = 'player';
  return map;
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

export function movePlayer (battleField, direction) {
  const lastRow = battleField[10];
  const playerPosition = lastRow.indexOf('player');
  if (direction === 'left' && playerPosition > 0) {
    lastRow[playerPosition - 1] = 'player';
    lastRow[playerPosition] = null;
  }
  if (direction === 'right' && playerPosition < 10) {
    lastRow[playerPosition + 1] = 'player';
    lastRow[playerPosition] = null;
  }
  return [
    ...battleField.slice(0, 10),
    lastRow
  ];
}

export function isLoseConditionMet (battleField) {
  return !!battleField[10].filter(cell => cell === 'mob_warrior').length;
}
