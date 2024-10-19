// src/utils/auth.js
import { auth } from '../firebase'; // Import the auth from firebase.js

export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
};

