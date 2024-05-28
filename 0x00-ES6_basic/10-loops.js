export default function appendToEachArrayValue(array, appendString) {
  for (const val in array) {
    array[val] = `${appendString}${array[val]}`;
}

  return array;
}
