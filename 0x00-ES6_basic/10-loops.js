export default function appendToEachArrayValue(array, appendString) {
  const modified = [];
  for (let val of array) {
    modified.push(appendString + val);
}

  return modified;
}
