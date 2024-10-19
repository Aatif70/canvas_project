// src/components/Auth/GoogleAuth.js
import React from 'react';
import { signInWithGoogle } from '../../utils/auth';

const GoogleAuth = () => {
    const handleSignIn = async () => {
        await signInWithGoogle();
        // The redirection will be handled in the AuthPage component
    };

    return (
        <button onClick={handleSignIn}>Sign in with Google</button>
    );
};

export default GoogleAuth;
