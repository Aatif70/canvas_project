// src/components/Dashboard/ProjectItem.js
import React from 'react';

const ProjectItem = ({ project }) => {
    return (
        <li>
            <span>{project.name}</span>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
};

export default ProjectItem;

