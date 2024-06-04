export default function getStudentIdsSum(arr) {
  // sum of all student ids
  const newArr = arr.reduce((accumulator, current) => accumulator + current.id, 0);

  return newArr;
}
