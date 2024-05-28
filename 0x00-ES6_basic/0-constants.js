export function taskFirst () {
  const first = 'I prefer const when I can.';
  return first;
}

export function getLast () {
  return ' is okay';
}

export function taskNext () {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

