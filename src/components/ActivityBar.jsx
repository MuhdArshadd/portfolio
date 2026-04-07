import React from 'react';
import { Icons } from './icons/Icons';

export const ActivityBar = ({ activeSidebar, sidebarVisible, handleSidebarClick, isChatOpen, setIsChatOpen }) => {
    return (
        <div className="activity-bar">
            <div className={`activity-icon ${activeSidebar === 'explorer' && sidebarVisible ? 'active' : ''}`} onClick={() => handleSidebarClick('explorer')}><Icons.Files /></div>
            <div className={`activity-icon ${activeSidebar === 'git' ? 'active' : ''}`} onClick={() => handleSidebarClick('git')}><Icons.Git /></div>
            <div className={`activity-icon ${activeSidebar === 'extensions' && sidebarVisible ? 'active' : ''}`} onClick={() => handleSidebarClick('extensions')}><Icons.Extensions /></div>
            
            {/* Cad Bot Icon */}
            <div className={`activity-icon ${isChatOpen ? 'active' : ''}`} onClick={() => setIsChatOpen(!isChatOpen)}><Icons.Bot /></div>

            <div style={{ flex: 1 }}></div>
            <div className="activity-icon"><Icons.Account /></div>
            <div className="activity-icon"><Icons.Settings /></div>
        </div>
    );
};