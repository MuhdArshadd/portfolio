import React, { useState, useEffect } from 'react';
import { Icons } from '../../components/icons/Icons';
import { extensionChangelogData } from '../../data/index.js'; 
import './ExtensionView.css'; 
import '../index.css';

export const ExtensionView = ({ setBotActive }) => {
    const [activeTab, setActiveTab] = useState('details');
    const [extState, setExtState] = useState('enabled'); 
    const [autoUpdate, setAutoUpdate] = useState(true);
    
    // 'status', 'install', 'settings', or null
    const [openMenu, setOpenMenu] = useState(null); 

    useEffect(() => {
        if (setBotActive) {
            setBotActive(extState === 'enabled');
        }
    }, [extState, setBotActive]);

    return (
        <div className="ext-container animate-view">
            
            <div className="ext-header-row">
                <div className={`ext-icon-box ${extState === 'uninstalled' ? 'uninstalled' : 'enabled'}`}>
                    <div className={`ext-icon-inner ${extState === 'uninstalled' ? 'dimmed' : ''}`}>
                        <Icons.Bot />
                    </div>
                </div>
                <div>
                    <h1 className="ext-title">Cad Copilot</h1>
                    <div className="ext-meta-row">
                        <span style={{ color: '#4fc1ff' }}>Arshad Specialist</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>⬇ 14,204</span>
                        <span style={{ color: '#cca700' }}>★★★★★ (5)</span>
                        <span style={{ color: '#c586c0' }}>♥ Sponsor</span>
                    </div>
                    <p className="ext-desc">Open/Run/Debug Portfolio Questions by leveraging the Activity Bar, Chat logic, and much more.</p>
                    
                    {/* --- BULLETPROOF OVERLAY ACTIONS ROW --- */}
                    <div className="ext-actions-row" style={{ position: 'relative', zIndex: openMenu ? 9999 : 1 }}>
                        
                        {/* 1. The Invisible Backdrop (Closes menu when clicking outside) */}
                        {openMenu && (
                            <div 
                                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9998 }} 
                                onClick={() => setOpenMenu(null)}
                            />
                        )}

                        {/* 2. Disable/Enable Dropdown */}
                        <div style={{ position: 'relative', zIndex: openMenu === 'status' ? 9999 : 1 }}>
                            <button 
                                onClick={() => setOpenMenu(openMenu === 'status' ? null : 'status')}
                                className="ext-btn primary"
                            >
                                {extState === 'disabled' ? 'Enable' : 'Disable'} <span>⌄</span>
                            </button>
                            {openMenu === 'status' && (
                                <div className="ext-dropdown">
                                    <div className="ext-dropdown-item" onClick={() => { setExtState('enabled'); setOpenMenu(null); setBotActive(true);}}>
                                        {extState === 'enabled' ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Enabled
                                    </div>
                                    <div className="ext-dropdown-item" onClick={() => { setExtState('disabled'); setOpenMenu(null); setBotActive(true);}}>
                                        {extState === 'disabled' ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Disabled
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 3. Uninstall/Install Dropdown */}
                        <div style={{ position: 'relative', zIndex: openMenu === 'install' ? 9999 : 1 }}>
                            <button 
                                onClick={() => setOpenMenu(openMenu === 'install' ? null : 'install')}
                                className="ext-btn secondary"
                            >
                                {extState === 'uninstalled' ? 'Install' : 'Uninstall'} <span>⌄</span>
                            </button>
                            {openMenu === 'install' && (
                                <div className="ext-dropdown">
                                    <div className="ext-dropdown-item" onClick={() => { setExtState('enabled'); setOpenMenu(null); setBotActive(true); }}>
                                        {extState !== 'uninstalled' ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Installed
                                    </div>
                                    <div className="ext-dropdown-item" onClick={() => { setExtState('uninstalled'); setOpenMenu(null); setBotActive(true);}}>
                                        {extState === 'uninstalled' ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Uninstalled
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 4. Settings Gear Dropdown */}
                        <div style={{ position: 'relative', zIndex: openMenu === 'settings' ? 9999 : 1 }}>
                            <button 
                                onClick={() => setOpenMenu(openMenu === 'settings' ? null : 'settings')}
                                className="ext-btn secondary icon-only"
                            >
                                <Icons.Settings />
                            </button>
                            {openMenu === 'settings' && (
                                <div className="ext-dropdown">
                                    <div className="ext-dropdown-item" onClick={() => { setAutoUpdate(!autoUpdate); setOpenMenu(null); }}>
                                        {autoUpdate ? <Icons.Check /> : <span style={{width: '16px'}}></span>} Auto Update
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="ext-tabs-row">
                <div onClick={() => setActiveTab('details')} className={`ext-tab ${activeTab === 'details' ? 'active' : ''}`}>
                    Details
                </div>
                <div onClick={() => setActiveTab('changelog')} className={`ext-tab ${activeTab === 'changelog' ? 'active' : ''}`}>
                    Changelog
                </div>
            </div>

            {/* Markdown Body: Details Tab */}
            {activeTab === 'details' && (
                <div className="ext-body">
                    <h2 className="ext-h2">Cad Copilot</h2>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', marginTop: '15px' }}>
                        <span className="ext-tag dark">version 1.2.5</span>
                        <span className={`ext-tag ${extState === 'uninstalled' ? 'grey' : 'blue'}`}>
                            {extState === 'uninstalled' ? 'not installed' : 'installed globally'}
                        </span>
                    </div>
                    <p>A highly sophisticated "AI" assistant natively integrated into the portfolio environment. Yada, yada, yada... wait, are you actually reading the extension documentation? I admire your thoroughness! Basically, it's a fun little chat widget to help you navigate my tech stack and discover Easter eggs.</p>
                    
                    <h3 className="ext-h3">Features</h3>
                    <p>Codelens will be added above each <code>Feature:</code>, <code>Scenario:</code> and <code>Scenario Outline:</code> ... just kidding. Here is what this actually does:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Context-aware portfolio guidance (it knows you are snooping around).</li>
                        <li>Instant answers about my tech stack so you don't have to hunt for my resume.</li>
                        <li>Pre-configured shortcut buttons because typing is exhausting and I don't want to implement real chatbot lol.</li>
                        <li>A concerning amount of self-awareness and fourth-wall breaks.</li>
                    </ul>
                    
                    <h3 className="ext-h3">Sponsors</h3>
                    <p style={{ color: '#858585' }}>This project is proudly sponsored by excessive caffeine, 3 AM debugging sessions, and the burning desire to finally land a permanent role. (Seriously, my internship ends on April 2nd, let's talk! 👀)</p>
                </div>
            )}

            {/* Markdown Body: Changelog Tab */}
            {activeTab === 'changelog' && (
                <div className="ext-body">
                    <h2 className="ext-h2">Changelog</h2>
                    
                    {extensionChangelogData.map((log, index) => (
                        <div key={index} className="ext-changelog-block">
                            <h3 className="ext-changelog-version">{log.version}</h3>
                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                                {log.updates.map((update, i) => (
                                    <li key={i}>{update}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );
};