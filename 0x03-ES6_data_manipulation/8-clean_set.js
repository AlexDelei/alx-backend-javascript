export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const results = [];

  for (const val of set) {
    if (val.startsWith(startString)) {
      results.push(val.slice(startString.length));
    }
  }

  return results.join('-');
}
