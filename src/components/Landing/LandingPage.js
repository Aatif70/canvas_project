// src/components/Landing/LandingPage.js
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Welcome to the Canvas Builder</h1>
            <p>Create stunning websites with ease!</p>
            {!user ? (
                <Link to="/auth">Authenticate</Link> // Link to the authentication page
            ) : (
                <p>Welcome back, {user.displayName}!</p>
            )}
        </div>
    );
};

export default LandingPage;
