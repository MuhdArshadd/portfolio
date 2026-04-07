import React from 'react';
import { 
    HomeView, 
    AboutView, 
    ProjectsView, 
    SkillsView, 
    ContactView, 
    ExtensionView 
} from './file-views';

export const FileContent = ({ activeFile }) => {
    switch (activeFile) {
        case 'home.tsx':
            return <HomeView />;
        case 'about.html':
            return <AboutView />;
        case 'projects.js':
            return <ProjectsView />;
        case 'skills.json':
            return <SkillsView />;
        case 'contact.css':
            return <ContactView />;
        case 'Extension: Cad Bot':
            return <ExtensionView />;
        default:
            return <div>Select a file to view content</div>;
    }
};