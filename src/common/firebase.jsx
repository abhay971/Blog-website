import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA14bBCXKArycAs3erz-jC8jQooJ6hstZY",
  authDomain: "blog-website-93ff3.firebaseapp.com",
  projectId: "blog-website-93ff3",
  storageBucket: "blog-website-93ff3.appspot.com",
  messagingSenderId: "3597121398",
  appId: "1:3597121398:web:600088759900b09da9ac57"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })

    return user 

}