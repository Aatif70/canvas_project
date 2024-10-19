// src/components/Auth/AuthPage.js
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import GoogleAuth from './GoogleAuth';
import { useHistory } from 'react-router-dom';

const AuthPage = () => {
    const { user } = useAuth();
    const history = useHistory();

    useEffect(() => {
        if (user) {
            // Redirect to the landing page if the user is authenticated
            history.push('/');
        }
    }, [user, history]);

    return (
        <div>
            <h1>Authenticate</h1>
            <GoogleAuth />
        </div>
    );
};

export default AuthPage;
