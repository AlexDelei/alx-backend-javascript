/**
 * guardrail - will append the result of the math function to the array
 * @param {*} mathFunction
 * @returns the array with the results
 */
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
