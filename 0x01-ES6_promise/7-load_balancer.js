/**
 * loadBalancer - returns the promise that resolved first
 * @param {*} chinaDownload 
 * @param {*} USDownload 
 * @returns first resolved Promise
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((response) => response);
}
