import React, { useState, useEffect, useRef } from 'react';
import { Icons } from './icons/Icons'; 

export const TitleBar = ({ openFile }) => {
    // Taunt State
    const [minCount, setMinCount] = useState(0);
    const [closeCount, setCloseCount] = useState(0);
    const [popup, setPopup] = useState({ visible: false, text: '' });

    // Command Palette State
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const paletteRef = useRef(null);
    const inputRef = useRef(null);

    // Dropdown Menu State
    const [activeMenu, setActiveMenu] = useState(null);
    const menuBarRef = useRef(null);

    // Your entire file system
    const allFiles = [
        { name: 'home.tsx', path: 'PORTFOLIO', type: 'react' },
        { name: 'about.html', path: 'PORTFOLIO', type: 'html' },
        { name: 'projects.js', path: 'PORTFOLIO', type: 'js' },
        { name: 'skills.json', path: 'PORTFOLIO', type: 'json' },
        { name: 'contact.css', path: 'PORTFOLIO', type: 'css' },
    ];

    const getFileIcon = (type) => {
        switch (type) {
            case 'react': return <Icons.ReactIcon />;
            case 'html': return <Icons.HtmlIcon />;
            case 'css': return <Icons.CssIcon />;
            case 'js': return <Icons.JsIcon />;
            case 'json': return <Icons.JsonIcon />;
            case 'extension': return <Icons.ExtensionTabIcon />;
            default: return <Icons.Files />; 
        }
    }

    const filteredFiles = allFiles.filter(file => 
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // --- Window & Click Handlers ---

    // Close palette AND menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (paletteRef.current && !paletteRef.current.contains(event.target)) {
                setIsPaletteOpen(false);
            }
            if (menuBarRef.current && !menuBarRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Listen for the Custom Event from the Activity Bar
    useEffect(() => {
        const openPalette = () => setIsPaletteOpen(true);
        window.addEventListener('open-command-palette', openPalette);
        return () => window.removeEventListener('open-command-palette', openPalette);
    }, []);

    // Auto-focus the input when the palette opens
    useEffect(() => {
        if (isPaletteOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isPaletteOpen]);

    const handleFileSelect = (fileName) => {
        if (openFile) openFile(fileName);
        setIsPaletteOpen(false);
        setSearchQuery('');
    };

    const handleMaximize = async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
                setPopup({ visible: true, text: "Immersive mode activated! 🚀" });
            } else {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                }
            }
        } catch (err) {
            setPopup({ visible: true, text: "Your browser blocked fullscreen mode!" });
        }
    };

    // --- Dropdown Menu Data Structure ---
    const closeMenu = () => setActiveMenu(null);

    const menuItems = {
        File: [
            { label: 'New Tab', action: () => { openFile('home.tsx'); closeMenu(); }, shortcut: 'Ctrl+N' },
            { divider: true },
            { label: 'home.tsx', action: () => { openFile('home.tsx'); closeMenu(); } },
            { label: 'about.html', action: () => { openFile('about.html'); closeMenu(); } },
            { label: 'projects.js', action: () => { openFile('projects.js'); closeMenu(); } },
            { label: 'skills.json', action: () => { openFile('skills.json'); closeMenu(); } },
            { label: 'contact.css', action: () => { openFile('contact.css'); closeMenu(); } },
            { divider: true },
            { label: 'Close Tab', action: () => { closeMenu(); alert('Tip: Pass a closeFile prop from App.jsx to make this work!'); }, shortcut: 'Ctrl+W' },
            { label: 'Close All Tabs', action: () => { closeMenu(); }, shortcut: 'Ctrl+K W' }
        ],
        Edit: [
            { label: 'Find', action: () => { setIsPaletteOpen(true); closeMenu(); }, shortcut: 'Ctrl+F' },
            { label: 'Select All', action: () => { document.execCommand('selectAll'); closeMenu(); }, shortcut: 'Ctrl+A' },
            { label: 'Copy', action: () => { document.execCommand('copy'); closeMenu(); }, shortcut: 'Ctrl+C' }
        ],
        View: [
            { label: 'Command Palette...', action: () => { setIsPaletteOpen(true); closeMenu(); }, shortcut: 'Ctrl+Shift+P' },
            { label: 'Toggle Sidebar', action: () => { closeMenu(); alert('Tip: Pass toggleSidebar from App.jsx!'); }, shortcut: 'Ctrl+B' },
            { label: 'Toggle Terminal', action: () => { closeMenu(); alert('Terminal feature coming soon!'); }, shortcut: 'Ctrl+`' },
            { label: 'Cad Bot', action: () => { openFile('Extension: Cad Bot'); closeMenu(); } },
            { divider: true },
            { label: 'Enter Full Screen', action: () => { handleMaximize(); closeMenu(); }, shortcut: 'F11' },
            { label: 'Zoom In', action: () => { document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1); closeMenu(); }, shortcut: 'Ctrl+=' },
            { label: 'Zoom Out', action: () => { document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1); closeMenu(); }, shortcut: 'Ctrl+-' },
            { label: 'Reset Zoom', action: () => { document.body.style.zoom = 1; closeMenu(); }, shortcut: 'Ctrl+Numpad0' }
        ],
        Go: [
            { label: 'Go to File...', action: () => { setIsPaletteOpen(true); closeMenu(); }, shortcut: 'Ctrl+P' },
            { divider: true },
            ...allFiles.map(f => ({ label: f.name, action: () => { openFile(f.name); closeMenu(); } }))
        ],
        Run: [
            { label: 'Start Terminal', action: () => { closeMenu(); alert('Booting terminal environment...'); } }
        ],
        Help: [
            { label: 'Command Palette...', action: () => { setIsPaletteOpen(true); closeMenu(); }, shortcut: 'Ctrl+Shift+P' },
            { divider: true },
            { label: 'About Muhammad Arshad', action: () => { openFile('about.html'); closeMenu(); } },
            { label: 'Welcome', action: () => { openFile('home.tsx'); closeMenu(); } }
        ]
    };

    // --- Taunt Click Handlers ---
    const minimizeMessages = [
        "Minimizing a VS Code inside a browser.. wait what?",
        "Is there an interesting thing other than my portfolio??",
        "You want to watch something aaa 👀",
        "Your girlfriend discord you right now?",
        "I'm like a persistent notification, you can't ignore me forever!"
    ];

    const closeMessages = [
        "You.. you don't like my portfolio :(?",
        "Is it because I'm still a junior or vibe coded?",
        "Well you can't complain we are living in AI era now",
        "Damn you still insist on leaving huh",
        "Alright, I'll let you go... just close the actual browser tab!"
    ];

    const handleMinimize = () => {
        setPopup({ visible: true, text: minimizeMessages[minCount] });
        setMinCount(prev => (prev + 1) % minimizeMessages.length);
    };

    const handleClose = () => {
        setPopup({ visible: true, text: closeMessages[closeCount] });
        setCloseCount(prev => (prev + 1) % closeMessages.length);
    };

    useEffect(() => {
        if (popup.visible) {
            const timer = setTimeout(() => setPopup({ visible: false, text: '' }), 2500);
            return () => clearTimeout(timer);
        }
    }, [popup.visible, popup.text]);

    return (
        <div className="title-bar" style={{ position: 'relative' }}>
            
            {/* LEFT SIDE NAV BAR */}
            <div className="title-bar-left" ref={menuBarRef} style={{ display: 'flex', position: 'relative' }}>
                {['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'].map((menuName) => (
                    <div 
                        key={menuName} 
                        style={{ position: 'relative' }}
                    >
                        <span 
                            className="menu-item" 
                            style={{ 
                                padding: '6px 10px', cursor: 'pointer', fontSize: '13px', 
                                background: activeMenu === menuName ? 'rgba(255,255,255,0.1)' : 'transparent',
                                borderRadius: '3px'
                            }}
                            onClick={() => {
                                // If menu exists in our data, toggle it. Otherwise do nothing.
                                if (menuItems[menuName]) {
                                    setActiveMenu(activeMenu === menuName ? null : menuName);
                                }
                            }}
                        >
                            {menuName}
                        </span>

                        {/* THE DROPDOWN MENU */}
                        {activeMenu === menuName && menuItems[menuName] && (
                            <div style={{
                                position: 'absolute', top: '100%', left: '0',
                                background: '#252526', border: '1px solid #454545',
                                borderRadius: '5px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                                minWidth: '240px', zIndex: 2000, padding: '5px 0',
                                color: '#cccccc', fontSize: '13px'
                            }}>
                                {menuItems[menuName].map((item, idx) => {
                                    if (item.divider) {
                                        return <div key={idx} style={{ height: '1px', background: '#454545', margin: '5px 10px' }} />;
                                    }
                                    return (
                                        <div 
                                            key={idx} 
                                            className="menu-hover"
                                            onClick={item.action}
                                            style={{ padding: '6px 20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                            onMouseOver={(e) => { e.currentTarget.style.background = '#04395e'; e.currentTarget.style.color = '#ffffff'; }}
                                            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#cccccc'; }}
                                        >
                                            <span>{item.label}</span>
                                            {item.shortcut && <span style={{ color: '#858585', fontSize: '11px' }}>{item.shortcut}</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* CENTER COMMAND PALETTE TRIGGER */}
            <div 
                style={{ 
                    position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px', padding: '2px 30px', cursor: 'pointer',
                    fontSize: '12px', color: '#cccccc', display: 'flex', alignItems: 'center', gap: '8px',
                    width: '400px', justifyContent: 'center'
                }}
                onClick={() => setIsPaletteOpen(true)}
                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            >
                <span style={{ fontSize: '10px' }}></span> Muhammad Arshad's Portfolio
            </div>

            {/* THE COMPACT COMMAND PALETTE MODAL */}
            {isPaletteOpen && (
                <div ref={paletteRef} style={{
                    position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)',
                    width: '480px', 
                    background: '#252526', border: '1px solid #454545',
                    borderRadius: '6px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', zIndex: 9999,
                    display: 'flex', flexDirection: 'column', overflow: 'hidden'
                }}>
                    {/* Input Area */}
                    <div style={{ padding: '5px' }}>
                        <input 
                            ref={inputRef}
                            type="text" 
                            placeholder="Search files by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ 
                                width: '100%', boxSizing: 'border-box', background: '#3c3c3c', 
                                border: '1px solid #007acc', color: '#cccccc', 
                                padding: '6px 8px', fontSize: '12px', 
                                outline: 'none', borderRadius: '3px' 
                            }}
                        />
                    </div>

                    {/* Results List */}
                    <div style={{ maxHeight: '300px', overflowY: 'auto', paddingBottom: '4px' }}>
                        <div style={{ padding: '4px 10px', display: 'flex', justifyContent: 'space-between', color: '#cccccc', fontSize: '12px', background: '#04395e', cursor: 'pointer' }}>
                            <span>Go to File <span style={{ opacity: 0.6 }}>{searchQuery}</span></span>
                        </div>

                        <div style={{ padding: '4px 10px', fontSize: '10px', color: '#858585', marginTop: '2px', textTransform: 'uppercase' }}>
                            {searchQuery ? 'search results' : 'recently opened'}
                        </div>

                        {filteredFiles.length > 0 ? filteredFiles.map((file, idx) => (
                            <div 
                                key={idx}
                                onClick={() => handleFileSelect(file.name)}
                                style={{ 
                                    padding: '4px 15px', display: 'flex', justifyContent: 'space-between', 
                                    alignItems: 'center', cursor: 'pointer', fontSize: '12px', color: '#cccccc' 
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = '#2a2d2e'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                            >
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        {getFileIcon(file.type)}
                                    </span>
                                    <span>{file.name}</span>
                                    <span style={{ fontSize: '11px', color: '#858585', marginLeft: '8px' }}>{file.path}</span>
                                </div>
                            </div>
                        )) : (
                            <div style={{ padding: '8px 15px', color: '#858585', fontSize: '12px' }}>
                                No matching results
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            {/* Window Controls Area */}
            <div className="window-controls" style={{ display: 'flex', alignItems: 'center', gap: '0', position: 'relative' }}>
                {popup.visible && (
                    <div style={{
                        position: 'absolute', top: '35px', right: '5px', backgroundColor: '#252526',
                        border: '1px solid #007acc', color: '#cccccc', padding: '8px 12px',
                        borderRadius: '4px', fontSize: '12px', whiteSpace: 'nowrap', zIndex: 1000,
                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                    }}>
                        {popup.text}
                    </div>
                )}

                <div className="window-btn" onClick={handleMinimize} style={{ width: '46px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="5" width="10" height="2" /></svg>
                </div>
                <div className="window-btn" onClick={handleMaximize} style={{ width: '46px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1.5" y="1.5" width="9" height="9" /></svg>
                </div>
                <div className="window-btn" onClick={handleClose} style={{ width: '46px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="2" x2="10" y2="10" /><line x1="10" y1="2" x2="2" y2="10" /></svg>
                </div>
            </div>
        </div>
    );
};