export function initMap () {
  return [{
    type: 'player',
    position: {
      x: 160,
      y: 320
    }
  }];
}

export function advanceMobs (map, delta) {
  const mobs = map.filter(entity => entity.type === 'mob_warrior');
  const others = map.filter(entity => entity.type !== 'mob_warrior');
  const movedMobs = mobs.map(mob => {
    return {
      ...mob,
      position: {
        ...mob.position,
        y: mob.position.y + delta / 10
      }
    };
  });
  return [
    ...movedMobs,
    ...others
  ];
}

export function spawnMobs (map) {
  const shouldSpawn = Math.random() < 0.01;
  return shouldSpawn
    ? [
      ...map,
      {
        type: 'mob_warrior',
        position: {
          x: Math.floor(Math.random() * 320),
          y: 0
        }
      }
    ]
    : map;
}

export function movePlayer (map, direction) {
  const player = map.find(entity => entity.type === 'player');
  const others = map.filter(entity => entity.type !== 'player');
  if (direction === 'left' && player.position.x > 0) {
    player.position.x -= 1;
  }
  if (direction === 'right' && player.position.x < 288) {
    player.position.x += 1;
  }
  return [
    ...others,
    player
  ];
}

export function isLoseConditionMet (map) {
  const mobByTheEnd = map.find(entity => entity.type === 'mob_warrior' && entity.position.y === 320);
  return !!mobByTheEnd;
}
