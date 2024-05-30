/**
 * signUpUser - resolve a promise and return an object
 * @param {*} firstName
 * @param {*} lastName
 * @returns an object with a resolved promise
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
