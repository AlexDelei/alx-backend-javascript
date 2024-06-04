/**
 * hasValuesFromArray - returns a boolean.
 * @param {a set of data} set
 * @param {an array of data too} arr
 * @returns boolean
 */
export default function hasValuesFromArray(set, arr) {
  for (const i of arr) {
    if (!set.has(i)) {
      return false;
    }
  }
  return true;
}
