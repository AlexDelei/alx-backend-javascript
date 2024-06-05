export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  for (const j of map) if (j[1] === 1) map.set(j[0], 100);

  return map;
}
