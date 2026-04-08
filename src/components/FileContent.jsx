import React from 'react';
import { 
    HomeView, 
    AboutView, 
    ProjectsView, 
    SkillsView, 
    ContactView, 
    ExtensionView,
    ExperiencesView,
    GitIgnoreView 
} from './file-views';

export const FileContent = ({ activeFile, setBotActive }) => {
    switch (activeFile) {
        case 'home.tsx':
            return <HomeView />;
        case 'about.html':
            return <AboutView />;
        case 'experiences.json':
            return <ExperiencesView />;
        case 'projects.js':
            return <ProjectsView />;
        case 'skills.json':
            return <SkillsView />;
        case 'contact.css':
            return <ContactView />;
        case 'Extension: Cad Copilot':
            return <ExtensionView setBotActive={setBotActive} />;
        case '.gitignore':
            return <GitIgnoreView />;
        default:
            return <div>Select a file to view content</div>;
    }
};