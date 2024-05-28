export default function appendToEachArrayValue(array, appendString) {
  const modified = [];
  for (const val of array) {
    modified.push(appendString + val);
}

  return modified;
}
