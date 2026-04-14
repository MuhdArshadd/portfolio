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
} from '../../../views';

import {
    DiffView,
} from '../../panels/index'

export const FileContent = ({ activeFile, openFile, setBotActive, closeFile }) => {
    switch (activeFile) {
        case 'home.jsx':
            return <HomeView openFile={openFile}/>;
        case 'about.html':
            return <AboutView openFile={openFile}/>;
        case 'experiences.json':
            return <ExperiencesView openFile={openFile}/>;
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
        case 'source_control.git':
            return (
                <DiffView 
                    setShowDiff={() => { if(closeFile) closeFile('source_control.git'); }} 
                    setDiffFile={() => {}} 
                />
            );
        default:
            return <HomeView openFile={openFile} />;
    }
};