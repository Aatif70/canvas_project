// src/hooks/useProjects.js
import { useState, useEffect } from 'react';
import { fetchProjects } from '../utils/api';

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            const data = await fetchProjects();
            setProjects(data);
        };
        loadProjects();
    }, []);

    return { projects };
};

export default useProjects;

