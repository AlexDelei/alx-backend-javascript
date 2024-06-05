export default function cleanSet(set, startString) {
  let results = '';
  if (!startString || !startString.length) return results;

  for (const val of set) {
    if (val && val.startsWith(startString)) {
      results += `${val.slice(startString.length)}-`;
    }
  }

  return results.slice(0, results.length - 1);
}
