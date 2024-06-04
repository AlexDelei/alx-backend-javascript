/**
 * getStudentsByLocation - get city by its name
 * @param {an array of objects} lst
 * @param {city to filter by} city
 * @returns a new array with filtered array
 */
export default function getStudentsByLocation(lst, city) {
  // using filter function to narrow down a function
  return lst.filter((x) => x.location === city);
}
