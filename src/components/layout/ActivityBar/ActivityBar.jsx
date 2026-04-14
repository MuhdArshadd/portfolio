import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../../icons/Icons'; 
import { fileSystem } from '../../../data/index.js'
import './ActivityBar.css';

export const ActivityBar = ({ 
    activeSidebar, sidebarVisible, handleSidebarClick, 
    isChatOpen, setIsChatOpen, isBotActive, openFile, closeAllFiles 
}) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
    const menuRef = useRef(null);

    // Track window size to toggle mobile behavior
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close menus if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="activity-bar" ref={menuRef}>
            
            {/* --- 1. FILES ICON (With Mobile Popup) --- */}
            <div style={{ position: 'relative' }}>
                <div 
                    className={`activity-icon ${activeSidebar === 'explorer' && sidebarVisible ? 'active' : ''}`} 
                    onClick={() => {
                        if (isMobile) setOpenMenu(openMenu === 'files' ? null : 'files');
                        else handleSidebarClick('explorer');
                    }}
                >
                    <Icons.Files />
                </div>
                
                {/* Mobile Files Popup Chat Bubble */}
                {isMobile && openMenu === 'files' && (
                    <div className="activity-popup mobile-bubble menu-files">
                        <div className="activity-popup-item disabled" style={{ fontSize: '11px', textAlign: 'center' }}>EXPLORER</div>
                        <div className="activity-popup-separator"></div>
                        
                        {/* --- ADD THE FILTER HERE --- */}
                        {fileSystem
                            .filter(file => file.name !== 'source_control.git' && file.name !== 'Extension: Cad Copilot')
                            .map(file => (
                                <div key={file.name} className="activity-popup-item" onClick={() => { openFile(file.name); setOpenMenu(null); }}>
                                    {file.name}
                                </div>
                            ))
                        }
                        
                    </div>
                )}
            </div>
            
            {/* --- 2. GIT ICON --- */}
            <div 
                className={`activity-icon ${activeSidebar === 'git' ? 'active' : ''}`} 
                onClick={() => {
                    if (isMobile) {
                        openFile('source_control.git'); // Change this to whatever file you want Git to open!
                        setOpenMenu(null);
                    } else {
                        handleSidebarClick('git');
                    }
                }}
            >
                <div className="notification-wrapper">
                    <Icons.Git />
                    <div className="notification-badge">1</div>
                </div>
            </div>

            {/* --- 3. THE "CAD COPILOT" PILL --- */}
            {isBotActive && (
                <div 
                    className={`activity-icon bot-pill ${isChatOpen ? 'active' : ''}`} 
                    onClick={() => {
                        setIsChatOpen(!isChatOpen);
                        setOpenMenu(null); // <--- Forces the files menu to close when you click the bot!
                    }}
                >
                    <Icons.Bot />
                    <span className="bot-pill-text">Cad Copilot</span>
                </div>
            )}

            {/* --- 4. EXTENSIONS ICON --- */}
            <div 
                className={`activity-icon ${activeSidebar === 'extensions' && sidebarVisible ? 'active' : ''}`} 
                onClick={() => {
                    if (isMobile) {
                        openFile('Extension: Cad Copilot'); // Change this to whatever file you want Extensions to open!
                        setOpenMenu(null);
                    } else {
                        handleSidebarClick('extensions');
                    }
                }}
            >
                <Icons.Extensions />
            </div>

            {/* Spacer (Pushes items down on Desktop, ignored on mobile flex-row) */}
            <div className="activity-spacer"></div>

            {/* --- 5. ACCOUNT MENU --- */}
            <div style={{ position: 'relative' }}>
                <div 
                    className={`activity-icon ${openMenu === 'account' ? 'active' : ''}`} 
                    onClick={() => setOpenMenu(openMenu === 'account' ? null : 'account')}
                >
                    <Icons.Account />
                </div>
                {openMenu === 'account' && (
                    <div className={`activity-popup menu-account ${isMobile ? 'mobile-bubble' : ''}`}>
                        <div className="activity-popup-item disabled">Signed in as Muhammad Arshad</div>
                        <div className="activity-popup-separator"></div>
                        <div className="activity-popup-item" onClick={() => { window.open('https://www.linkedin.com/in/muhdarshad50/', '_blank'); setOpenMenu(null); }}>LinkedIn Profile</div>
                        <div className="activity-popup-item" onClick={() => { window.open('https://github.com/MuhdArshadd', '_blank'); setOpenMenu(null); }}>GitHub</div>
                        <div className="activity-popup-separator"></div>
                        <div className="activity-popup-item" onClick={() => { window.open('/resume.pdf', '_blank'); setOpenMenu(null); }}>Download Resume.pdf</div>
                    </div>
                )}
            </div>

            {/* --- 6. SETTINGS (Hidden on Mobile) --- */}
            <div className="settings-wrapper" style={{ position: 'relative' }}>
                <div 
                    className={`activity-icon ${openMenu === 'settings' ? 'active' : ''}`} 
                    onClick={() => setOpenMenu(openMenu === 'settings' ? null : 'settings')}
                >
                    <div className="notification-wrapper">
                        <Icons.Settings />
                        <div className="notification-dot"></div>
                    </div>
                </div>
                {openMenu === 'settings' && !isMobile && (
                    <div className="activity-popup menu-settings">
                    {/* ADDED hide-with-palette TO THE ITEM */}
                    <div className="activity-popup-item hide-with-palette" onClick={() => { window.dispatchEvent(new CustomEvent('open-command-palette')); setOpenMenu(null); }}>
                        <span>Command Palette...</span> <span className="popup-shortcut">Ctrl+Shift+P</span>
                    </div>
                        {/* ADDED hide-with-palette TO THE SEPARATOR SO WE DON'T GET A WEIRD GAP */}
                    <div className="activity-popup-separator hide-with-palette"></div>
                         <div className="activity-popup-item highlight" onClick={() => { openFile('contact.css'); setOpenMenu(null); }}>
                            Restart to Hire Arshad (1)
                        </div>
                    </div>
                )}
            </div>

            {/* --- 7. MOBILE TRIPLE DOT (Clear Tabs) --- */}
            {isMobile && (
                <div style={{ position: 'relative' }}>
                    <div 
                        className={`activity-icon ${openMenu === 'more' ? 'active' : ''}`} 
                        onClick={() => setOpenMenu(openMenu === 'more' ? null : 'more')}
                        style={{ fontSize: '18px', fontWeight: 'bold' }}
                    >
                        &#8942; {/* Vertical Triple Dot Character */}
                    </div>
                    {openMenu === 'more' && (
                        <div className="activity-popup mobile-bubble more-bubble">
                            <div className="activity-popup-item" onClick={() => { if(closeAllFiles) closeAllFiles(); setOpenMenu(null); }}>
                                Clear All Tabs
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};