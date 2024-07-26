function getPaymentTokenFromAPI(success) {
  const resPromise = new Promise((res) => {
    if (success === true) {
      res({ data: 'Successful response from the API' });
    }
  });
  return resPromise;
}

module.exports = getPaymentTokenFromAPI;
