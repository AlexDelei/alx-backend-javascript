/**
 * setFromArray - creates a set with data from an array
 * @param {array} arr
 * @returns a set of objects
 */
export default function setFromArray(arr) {
  const setArr = new Set(Object.values(arr));

  return setArr;
}
