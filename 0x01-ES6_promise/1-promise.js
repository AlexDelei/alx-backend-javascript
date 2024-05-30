export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const obj = {
        status: 200,
        body: 'success',
      };
      if (success) {
        resolve(obj);
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 100);
  });
}
