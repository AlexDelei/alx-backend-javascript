import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const status = null;
  const value = null;

  const statusArray = [];
  const statusObject = { status, value };

  return Promise
    .allSettled([userPromise, photoPromise]) // Waiting for both promises to settle
    .then((results) => {
      statusObject.status = results.status;
      statusObject.value = results.status === 'fulfilled' ? results.value : String(results.values.reason);
      statusArray.push(statusObject);
    });
}
