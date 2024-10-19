// src/components/Dashboard/ProjectList.js
import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
    const projects = []; // Fetch projects from state or props

    return (
        <ul>
            {projects.map(project => (
                <ProjectItem key={project.id} project={project} />
            ))}
        </ul>
    );
};

export default ProjectList;

