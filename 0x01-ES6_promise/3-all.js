import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoRespo, userRespo]) => {
      console.log(`${photoRespo.body} ${userRespo.firstName} ${userRespo.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline')
    });
}
