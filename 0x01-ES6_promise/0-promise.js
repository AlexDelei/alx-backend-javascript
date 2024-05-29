import { error } from 'console';

/**
 * getResponseFromAPI - creating a simple promise
 * @returns either resolved(successfully completed the process), rejected (not okay)
 */
export default function getResponseFromAPI() {
  const theProm = new Promise((resolve, reject) => {
    // Performing an asynchronous operation
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve('Operation was successful');
      } else {
        reject(error);
      }
    });
  });

  return theProm;
}
