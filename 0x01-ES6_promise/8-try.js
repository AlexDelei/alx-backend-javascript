export default function divideFunction(numerator, denominator) {
  let result = null;
  if (numerator !== 0 && denominator !== 0) {
    result = numerator / denominator;
  } else {
    throw new Error('cannot divide by 0');
  }

  return result;
}
