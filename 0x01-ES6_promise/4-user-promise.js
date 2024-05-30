export default function signUpUser(firstName, lastName) {
  const whatsThatBrother = new Promise((resolve, reject) => {
    if (firstName && lastName) {
      resolve({ firstName, lastName });
    } else {
      reject('Name Cannot be blank');
    }
  });

  return whatsThatBrother
    .then((response) => {
      console.log(response);
    })
    .catch(() => {
      console.log(new Error(''));
    });
}
