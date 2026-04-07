import React, { useState, useEffect } from 'react';
import { Icons } from '../icons/Icons';

// setBotActive
export const ExtensionView = ({ setBotActive }) => {
    // State for Tabs
    const [activeTab, setActiveTab] = useState('details');
    
    // State for the Extension's status
    const [extState, setExtState] = useState('enabled'); // 'enabled', 'disabled', or 'uninstalled'
    const [autoUpdate, setAutoUpdate] = useState(true);
    
    // State for opening/closing dropdowns
    const [openMenu, setOpenMenu] = useState(null); // 'status', 'install', 'settings', or null

    // This tells the main App.jsx to show/hide the bot in the sidebar
    useEffect(() => {
        if (setBotActive) {
            console.log("1. ExtensionView is sending:", extState === 'enabled'); // ADD THIS
            setBotActive(extState === 'enabled');
        } else {
            console.log("ERROR: ExtensionView did not receive setBotActive!"); // ADD THIS
        }
    }, [extState, setBotActive]);

    // Reusable styling for the dropdown menus
    const menuStyle = {
        position: 'absolute', top: '100%', left: '0', marginTop: '4px',
        background: '#252526', border: '1px solid #454545', borderRadius: '4px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.5)', zIndex: 100, minWidth: '130px', padding: '4px 0'
    };
    const itemStyle = { padding: '6px 12px', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' };

    return (
        <div style={{ padding: '30px', maxWidth: '900px', color: '#cccccc', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
            
            {/* Header Section */}
            <div style={{ display: 'flex', gap: '25px', marginBottom: '30px' }}>
                <div style={{ width: '110px', height: '110px', background: extState === 'uninstalled' ? '#333' : 'linear-gradient(135deg, #007acc, #004d80)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', transition: 'background 0.3s' }}>
                    <div style={{ transform: 'scale(2.5)', opacity: extState === 'uninstalled' ? 0.5 : 1 }}><Icons.Bot /></div>
                </div>
                <div>
                    <h1 style={{ margin: '0 0 5px 0', color: '#ffffff', fontSize: '28px', fontWeight: '600' }}>Cad Bot</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#858585', fontSize: '13px', marginBottom: '15px' }}>
                        <span style={{ color: '#4fc1ff' }}>Arshad Specialist</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>⬇ 14,204</span>
                        <span style={{ color: '#cca700' }}>★★★★★ (5)</span>
                        <span style={{ color: '#c586c0' }}>♥ Sponsor</span>
                    </div>
                    <p style={{ margin: '0 0 15px 0', fontSize: '14px' }}>Open/Run/Debug Portfolio Questions by leveraging the Activity Bar, Chat logic, and much more.</p>
                    
                    {/* Action Buttons with Dropdowns */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        
                        {/* Disable/Enable Dropdown */}
                        <div style={{ position: 'relative' }}>
                            <button 
                                onClick={() => setOpenMenu(openMenu === 'status' ? null : 'status')}
                                style={{ background: '#007acc', color: '#ffffff', border: '1px solid #007acc', padding: '4px 12px', borderRadius: '3px', cursor: 'pointer', display: 'flex', gap: '5px', alignItems: 'center' }}
                            >
                                {extState === 'disabled' ? 'Enable' : 'Disable'} <span>⌄</span>
                            </button>
                            {openMenu === 'status' && (
                                <div style={menuStyle}>
                                    <div style={itemStyle} onClick={() => { setExtState('enabled'); setOpenMenu(null); setBotActive(true);}}>
                                        {extState === 'enabled' ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Enabled
                                    </div>
                                    <div style={itemStyle} onClick={() => { setExtState('disabled'); setOpenMenu(null); setBotActive(true);}}>
                                        {extState === 'disabled' ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Disabled
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Uninstall/Install Dropdown */}
                        <div style={{ position: 'relative' }}>
                            <button 
                                onClick={() => setOpenMenu(openMenu === 'install' ? null : 'install')}
                                style={{ background: '#333333', color: '#ffffff', border: '1px solid #3c3c3c', padding: '4px 12px', borderRadius: '3px', cursor: 'pointer', display: 'flex', gap: '5px', alignItems: 'center' }}
                            >
                                {extState === 'uninstalled' ? 'Install' : 'Uninstall'} <span>⌄</span>
                            </button>
                            {openMenu === 'install' && (
                                <div style={menuStyle}>
                                    <div style={itemStyle} onClick={() => { setExtState('enabled'); setOpenMenu(null); setBotActive(true); }}>
                                        {extState !== 'uninstalled' ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Installed
                                    </div>
                                    <div style={itemStyle} onClick={() => { setExtState('uninstalled'); setOpenMenu(null); setBotActive(true);}}>
                                        {extState === 'uninstalled' ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Uninstalled
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Settings Gear Dropdown */}
                        <div style={{ position: 'relative' }}>
                            <button 
                                onClick={() => setOpenMenu(openMenu === 'settings' ? null : 'settings')}
                                style={{ background: '#333333', color: '#ffffff', border: '1px solid #3c3c3c', padding: '4px 8px', borderRadius: '3px', cursor: 'pointer' }}
                            >
                                <Icons.Settings />
                            </button>
                            {openMenu === 'settings' && (
                                <div style={menuStyle}>
                                    <div style={itemStyle} onClick={() => { setAutoUpdate(!autoUpdate); setOpenMenu(null); }}>
                                        {autoUpdate ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Auto Update
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '25px', borderBottom: '1px solid #3c3c3c', marginBottom: '25px', textTransform: 'uppercase', fontSize: '12px' }}>
                <div onClick={() => setActiveTab('details')} style={{ borderBottom: activeTab === 'details' ? '2px solid #4fc1ff' : 'none', color: activeTab === 'details' ? '#ffffff' : '#858585', paddingBottom: '8px', cursor: 'pointer' }}>
                    Details
                </div>
                <div onClick={() => setActiveTab('changelog')} style={{ borderBottom: activeTab === 'changelog' ? '2px solid #4fc1ff' : 'none', color: activeTab === 'changelog' ? '#ffffff' : '#858585', paddingBottom: '8px', cursor: 'pointer' }}>
                    Changelog
                </div>
            </div>

            {/* Markdown Body: Details Tab */}
            {activeTab === 'details' && (
                <div style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <h2 style={{ borderBottom: '1px solid #3c3c3c', paddingBottom: '8px', color: '#ffffff', fontWeight: 'normal', fontSize: '22px' }}>Cad Bot</h2>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', marginTop: '15px' }}>
                        <span style={{ background: '#333333', padding: '2px 8px', borderRadius: '3px', fontSize: '12px' }}>version 1.2.5</span>
                        <span style={{ background: extState === 'uninstalled' ? '#666' : '#007acc', color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '12px' }}>
                            {extState === 'uninstalled' ? 'not installed' : 'installed globally'}
                        </span>
                    </div>
                    <p>A conversational AI assistant natively integrated into the portfolio environment. Navigate the codebase, learn about tech stacks, and discover Easter eggs by simply asking Cad Bot!</p>
                    <h3 style={{ color: '#ffffff', marginTop: '30px', fontWeight: 'normal', fontSize: '18px' }}>Features</h3>
                    <p>Codelens will be added above each <code>Feature:</code>, <code>Scenario:</code> and <code>Scenario Outline:</code> ... just kidding. Here is what I actually do:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Context-aware portfolio guidance.</li>
                        <li>Instant answers about tech stacks (React, Test Automation, Node.js).</li>
                        <li>Pre-configured shortcut buttons for quick learning.</li>
                        <li>Built-in humor and self-awareness ("vibe coded").</li>
                    </ul>
                    <h3 style={{ color: '#ffffff', marginTop: '30px', fontWeight: 'normal', fontSize: '18px' }}>Sponsors</h3>
                    <p style={{ color: '#858585' }}>This project is proudly sponsored by coffee, late-night debugging sessions, and the burning desire to finally land a permanent role!</p>
                </div>
            )}

            {/* Markdown Body: Changelog Tab */}
            {activeTab === 'changelog' && (
                <div style={{ lineHeight: '1.6', fontSize: '14px' }}>
                    <h2 style={{ borderBottom: '1px solid #3c3c3c', paddingBottom: '8px', color: '#ffffff', fontWeight: 'normal', fontSize: '22px' }}>Changelog</h2>
                    
                    <div style={{ padding: '15px 0', borderBottom: '1px solid #3c3c3c' }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#4fc1ff' }}>v1.2.5</h3>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                            <li>Added interactive Extension Marketplace page.</li>
                            <li>Introduced dynamic Enable/Disable dropdowns controlling actual UI elements.</li>
                            <li>Added Changelog tab with version history.</li>
                        </ul>
                    </div>

                    <div style={{ padding: '15px 0', borderBottom: '1px solid #3c3c3c' }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#4fc1ff' }}>v1.1.0</h3>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                            <li>Implemented browser Fullscreen API on maximize button.</li>
                            <li>Added endless loop wrapping logic for Title Bar taunt messages.</li>
                            <li>Updated taunt messages for maximum "vibe coded" energy.</li>
                        </ul>
                    </div>

                    <div style={{ padding: '15px 0', borderBottom: '1px solid #3c3c3c' }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#4fc1ff' }}>v1.0.0</h3>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                            <li>Initial release of Cad Bot.</li>
                            <li>Basic Q&A functionality and auto-scroll implemented.</li>
                            <li>Integrated into secondary sidebar.</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};