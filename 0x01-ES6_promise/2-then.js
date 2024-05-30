/**
 * handleResponseFromAPI - Function handlers
 * @param {*} promise
 * @returns objects and logs a message on every resolution
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error(''));
}
