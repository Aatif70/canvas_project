// src/components/Dashboard/Dashboard.js
import React from 'react';
import ProjectList from './ProjectList';

const Dashboard = () => {
    return (
        <div>
            <h1>Your Projects</h1>
            <ProjectList />
            <button>Create New Project</button>
        </div>
    );
};

export default Dashboard;

