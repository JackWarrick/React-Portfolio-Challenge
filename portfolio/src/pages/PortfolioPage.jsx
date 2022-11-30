import React from 'react';
import { Project } from '../components/Project';
import { projects } from '../utils/projects';

export const PortfolioPage = () => {
    return <section>
        <h1>Here is my Portfolio</h1>
        {projects.map(project => <Project {... project} />)}
    </section>

}