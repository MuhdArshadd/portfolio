import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../../icons/Icons'; 
import './ActivityBar.css';

export const ActivityBar = ({ activeSidebar, sidebarVisible, handleSidebarClick, isChatOpen, setIsChatOpen, isBotActive, openFile }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const menuRef = useRef(null);

    // Close menus if clicking outside of them
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
            
            {/* --- TOP ICONS --- */}
            <div className={`activity-icon ${activeSidebar === 'explorer' && sidebarVisible ? 'active' : ''}`} onClick={() => handleSidebarClick('explorer')}>
                <Icons.Files />
            </div>
            
            <div className={`activity-icon ${activeSidebar === 'git' ? 'active' : ''}`} onClick={() => handleSidebarClick('git')}>
                <div className="notification-wrapper">
                    <Icons.Git />
                    <div className="notification-badge">1</div>
                </div>
            </div>

            <div className={`activity-icon ${activeSidebar === 'extensions' && sidebarVisible ? 'active' : ''}`} onClick={() => handleSidebarClick('extensions')}>
                <Icons.Extensions />
            </div>
            
            {isBotActive && (
                <div className={`activity-icon ${isChatOpen ? 'active' : ''}`} onClick={() => setIsChatOpen(!isChatOpen)}>
                    <Icons.Bot />
                </div>
            )}

            {/* Spacer to push bottom icons down */}
            <div style={{ flex: 1 }}></div>

            {/* --- BOTTOM ICONS: ACCOUNT MENU --- */}
            <div style={{ position: 'relative' }}>
                <div 
                    className={`activity-icon ${openMenu === 'account' ? 'active' : ''}`} 
                    onClick={() => setOpenMenu(openMenu === 'account' ? null : 'account')}
                >
                    <Icons.Account />
                </div>
                
                {openMenu === 'account' && (
                    <div className="activity-popup menu-account">
                        <div className="activity-popup-item disabled">Signed in as Muhammad Arshad</div>
                        <div className="activity-popup-separator"></div>
                        
                        <div className="activity-popup-item" onClick={() => { window.open('https://www.linkedin.com/in/muhdarshad50/', '_blank'); setOpenMenu(null); }}>
                            Open LinkedIn Profile
                        </div>
                        <div className="activity-popup-item" onClick={() => { window.open('https://github.com/MuhdArshadd', '_blank'); setOpenMenu(null); }}>
                            Open GitHub
                        </div>
                        
                        <div className="activity-popup-separator"></div>
                        
                        <div className="activity-popup-item" onClick={() => { window.open('/resume.pdf', '_blank'); setOpenMenu(null); }}>
                            Download Resume.pdf
                        </div>
                    </div>
                )}
            </div>

            {/* --- BOTTOM ICONS: SETTINGS MENU --- */}
            <div style={{ position: 'relative' }}>
                <div 
                    className={`activity-icon ${openMenu === 'settings' ? 'active' : ''}`} 
                    onClick={() => setOpenMenu(openMenu === 'settings' ? null : 'settings')}
                >
                    <div className="notification-wrapper">
                        <Icons.Settings />
                        <div className="notification-dot"></div>
                    </div>
                </div>

                {openMenu === 'settings' && (
                    <div className="activity-popup menu-settings">
                        
                        <div className="activity-popup-item" onClick={() => { 
                            window.dispatchEvent(new CustomEvent('open-command-palette')); 
                            setOpenMenu(null); 
                        }}>
                            <span>Command Palette...</span> <span className="popup-shortcut">Ctrl+Shift+P</span>
                        </div>
                        
                        <div className="activity-popup-separator"></div>
                        
                        <div className="activity-popup-item" onClick={() => { handleSidebarClick('extensions'); setOpenMenu(null); }}>
                            <span>Extensions</span> <span className="popup-shortcut">Ctrl+Shift+X</span>
                        </div>
                        
                        <div className="activity-popup-separator"></div>
                        
                        <div className="activity-popup-item highlight" onClick={() => { openFile('contact.css'); setOpenMenu(null); }}>
                            Restart to Hire Arshad (1)
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
};