import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './icons/Icons'; 

// Notice openFile added to the props here
export const ActivityBar = ({ activeSidebar, sidebarVisible, handleSidebarClick, isChatOpen, setIsChatOpen, isBotActive, openFile }) => {
    // State to track which menu is open ('account', 'settings', or null)
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

    // Reusable styles for the popup menus
    const popupStyle = {
        position: 'absolute',
        bottom: '10px',
        left: '55px',
        backgroundColor: '#252526',
        border: '1px solid #454545',
        borderRadius: '5px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        minWidth: '220px',
        zIndex: 1000,
        padding: '5px 0',
        color: '#cccccc',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        fontSize: '13px'
    };

    const menuItemStyle = {
        padding: '8px 20px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const separatorStyle = {
        height: '1px',
        backgroundColor: '#454545',
        margin: '5px 10px'
    };

    return (
        <div className="activity-bar" ref={menuRef}>
            {/* ... Top icons ... */}
            <div className={`activity-icon ${activeSidebar === 'explorer' && sidebarVisible ? 'active' : ''}`} onClick={() => handleSidebarClick('explorer')}><Icons.Files /></div>
            
            <div className={`activity-icon ${activeSidebar === 'git' ? 'active' : ''}`} onClick={() => handleSidebarClick('git')}>
                <div style={{ position: 'relative', display: 'flex' }}>
                    <Icons.Git />
                    <div style={{ position: 'absolute', bottom: '-4px', right: '-8px', backgroundColor: '#007acc', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-sidebar, #252526)' }}>1</div>
                </div>
            </div>

            <div className={`activity-icon ${activeSidebar === 'extensions' && sidebarVisible ? 'active' : ''}`} onClick={() => handleSidebarClick('extensions')}><Icons.Extensions /></div>
            
            {isBotActive && (
                <div className={`activity-icon ${isChatOpen ? 'active' : ''}`} onClick={() => setIsChatOpen(!isChatOpen)}>
                    <Icons.Bot />
                </div>
            )}

            <div style={{ flex: 1 }}></div>

            {/* --- ACCOUNT MENU --- */}
            <div style={{ position: 'relative' }}>
                <div 
                    className={`activity-icon ${openMenu === 'account' ? 'active' : ''}`} 
                    onClick={() => setOpenMenu(openMenu === 'account' ? null : 'account')}
                >
                    <Icons.Account />
                </div>
                
                {openMenu === 'account' && (
                    <div style={popupStyle}>
                        <div style={{ ...menuItemStyle, color: '#858585', cursor: 'default' }}>Signed in as Muhammad Arshad</div>
                        <div style={separatorStyle}></div>
                        
                        {/* External Links */}
                        <div style={menuItemStyle} className="menu-hover" onClick={() => { window.open('https://www.linkedin.com/in/muhdarshad50/', '_blank'); setOpenMenu(null); }}>
                            Open LinkedIn Profile
                        </div>
                        <div style={menuItemStyle} className="menu-hover" onClick={() => { window.open('https://github.com/MuhdArshadd', '_blank'); setOpenMenu(null); }}>
                            Open GitHub
                        </div>
                        <div style={separatorStyle}></div>
                        
                        {/* Resume Download (Assumes resume.pdf is in your public folder) */}
                        <div style={menuItemStyle} className="menu-hover" onClick={() => { window.open('/resume.pdf', '_blank'); setOpenMenu(null); }}>
                            Download Resume.pdf
                        </div>
                    </div>
                )}
            </div>

            {/* --- SETTINGS MENU --- */}
            <div style={{ position: 'relative' }}>
                <div 
                    className={`activity-icon ${openMenu === 'settings' ? 'active' : ''}`} 
                    onClick={() => setOpenMenu(openMenu === 'settings' ? null : 'settings')}
                >
                    <div style={{ position: 'relative', display: 'flex' }}>
                        <Icons.Settings />
                        <div style={{ position: 'absolute', bottom: '0px', right: '-2px', backgroundColor: '#007acc', borderRadius: '50%', width: '10px', height: '10px', border: '2px solid var(--bg-sidebar)' }}></div>
                    </div>
                </div>

                {openMenu === 'settings' && (
                    <div style={{...popupStyle, bottom: '20px'}}>
                        {/* Command Palette - Now shouts an event to the window */}
                        <div style={menuItemStyle} className="menu-hover" onClick={() => { 
                            window.dispatchEvent(new CustomEvent('open-command-palette')); 
                            setOpenMenu(null); 
                        }}>
                            <span>Command Palette...</span> <span style={{ color: '#858585' }}>Ctrl+Shift+P</span>
                        </div>
                        
                        <div style={separatorStyle}></div>
                        
                        {/* Extensions - Opens the Extensions Sidebar */}
                        <div style={menuItemStyle} className="menu-hover" onClick={() => { handleSidebarClick('extensions'); setOpenMenu(null); }}>
                            <span>Extensions</span> <span style={{ color: '#858585' }}>Ctrl+Shift+X</span>
                        </div>
                        
                        <div style={separatorStyle}></div>
                        
                        {/* Easter Egg - Opens the contact.css file in the editor */}
                        <div style={{...menuItemStyle, color: '#4fc1ff'}} className="menu-hover" onClick={() => { openFile('contact.css'); setOpenMenu(null); }}>
                            Restart to Hire Arshad (1)
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};