// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { auth } from '../utils/auth';

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, []);

    return { user };
};

export default useAuth;

