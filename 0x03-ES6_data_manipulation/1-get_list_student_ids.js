export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) return [];
  const newArr = arr.map((x) => x.id);

  return newArr;
}
