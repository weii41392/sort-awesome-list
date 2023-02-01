import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GithubAuthProvider
} from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyDmksBQEc1vI8ciuVtQXEGsQPcF_garSXQ',
  authDomain: 'sort-awesome-list.firebaseapp.com',
  projectId: 'sort-awesome-list',
  storageBucket: 'sort-awesome-list.appspot.com',
  messagingSenderId: '386090953715',
  appId: '1:386090953715:web:6e33f8eced9d248ede4086',
  measurementId: 'G-7MBETJDTCM'
});
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export async function signInWithGithub() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      return credential.accessToken;
    })
    .catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        console.error(error);
      }
      throw new Error('Failed to sign in with GitHub.');
    });
}

export async function signOutFromGithub() {
  return signOut(auth).catch((error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
    throw new Error('Failed to sign out from GitHub.');
  });
}
