/**
 * Using the spread syntax
 * Its expands an iterable
 * concatArrays - concatinate two arrays and a string into a single array
 * @array1 - first array
 * @array2 - second array
 * @string - a word
 * return: an array of concatination
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string]
}
