/**
 * uploadPhoto - represents when a file can not be processed and an error is raised
 * @param {*} fileName
 * @returns File cannot be processed
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
