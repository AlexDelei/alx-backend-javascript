/**
 * appendToEachArrayValue - appending a string to the passed array
 * @param {*} array
 * @param {*} appendString
 * @returns - the modified array
 */
export default function appendToEachArrayValue(array, appendString) {
  const modified = [];
  for (const val of array) {
    modified.push(appendString + val);
  }

  return modified;
}
