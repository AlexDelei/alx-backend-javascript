/**
 * getListStudentIds - map > constructs a new array after iterating
 * @param {an array of objects} arr 
 * @returns 
 */
export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  const newArr = arr.map((x) => x.id);

  return newArr;
}
