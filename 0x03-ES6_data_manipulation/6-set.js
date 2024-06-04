export default function setFromArray(arr) {
  const setArr = new Set(Object.values(arr));

  return setArr;
}
