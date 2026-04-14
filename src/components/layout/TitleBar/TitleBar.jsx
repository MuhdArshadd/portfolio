import React, { useState, useEffect, useRef } from 'react';
import { Icons } from '../../icons/Icons'; 
import { fileSystem } from '../../../data/index.js'; 
import './TitleBar.css'; 

export const TitleBar = ({ openFile, closeFile, closeAllFiles, toggleSidebar, toggleTerminal }) => {
    // --- States ---
    const [minCount, setMinCount] = useState(0);
    const [closeCount, setCloseCount] = useState(0);
    const [popup, setPopup] = useState({ visible: false, text: '' });
    const [isPaletteOpen, setIsPaletteOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeMenu, setActiveMenu] = useState(null);

    // --- Refs ---
    const paletteRef = useRef(null);
    const inputRef = useRef(null);
    const menuBarRef = useRef(null);
    const chordRef = useRef(false);

    const getFileIcon = (type) => {
        switch (type) {
            case 'react': return <Icons.ReactIcon />;
            case 'html': return <Icons.HtmlIcon />;
            case 'css': return <Icons.CssIcon />;
            case 'js': return <Icons.JsIcon />;
            case 'json': return <Icons.JsonIcon />;
            case 'extension': return <Icons.ExtensionTabIcon />;
            case 'git': return <Icons.GitSmall />;
            default: return <Icons.Files />; 
        }
    };

    const filteredFiles = fileSystem.filter(file => 
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // --- ZOOM FUNCTIONS WITH MIN/MAX BOUNDS ---
    const handleZoomIn = () => {
        const currentZoom = parseFloat(document.body.style.zoom || 1);
        if (currentZoom < 1.3) document.body.style.zoom = (currentZoom + 0.1).toFixed(1);
    };

    const handleZoomOut = () => {
        const currentZoom = parseFloat(document.body.style.zoom || 1);
        if (currentZoom > 0.8) document.body.style.zoom = (currentZoom - 0.1).toFixed(1);
    };

    const handleResetZoom = () => {
        document.body.style.zoom = 1;
    };

    // --- GLOBAL KEYBOARD SHORTCUTS ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            // 1. Check for Chord Start (Ctrl+K)
            if (e.ctrlKey && (e.key === 'k' || e.key === 'K')) {
                e.preventDefault();
                chordRef.current = true;
                setTimeout(() => { chordRef.current = false; }, 2000);
                return;
            }

            // 2. Check for Close All Tabs Chord (Ctrl+K, then W)
            if (chordRef.current && (e.key === 'w' || e.key === 'W')) {
                e.preventDefault();
                chordRef.current = false; 
                if (closeAllFiles) closeAllFiles();
                return;
            }

            // 3. Shortcuts
            if (e.altKey && (e.key === 'n' || e.key === 'N')) {
                e.preventDefault();
                if (openFile) openFile('home.jsx');
            }
            if (e.altKey && (e.key === 'w' || e.key === 'W')) {
                e.preventDefault();
                if (closeFile) closeFile(null); 
            }
            if (e.ctrlKey && (e.key === 'p' || e.key === 'P' || e.key === 'f' || e.key === 'F')) {
                e.preventDefault();
                setIsPaletteOpen(true);
            }
            if (e.ctrlKey && (e.key === 'b' || e.key === 'B')) {
                e.preventDefault();
                if (toggleSidebar) toggleSidebar();
            }
            if (e.ctrlKey && e.key === '`') {
                e.preventDefault();
                if (toggleTerminal) toggleTerminal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleSidebar, toggleTerminal, closeFile, openFile, closeAllFiles]);

    // --- Mouse & Palette Listeners ---
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (paletteRef.current && !paletteRef.current.contains(event.target)) setIsPaletteOpen(false);
            if (menuBarRef.current && !menuBarRef.current.contains(event.target)) setActiveMenu(null);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const openPalette = () => setIsPaletteOpen(true);
        window.addEventListener('open-command-palette', openPalette);
        return () => window.removeEventListener('open-command-palette', openPalette);
    }, []);

    useEffect(() => {
        if (isPaletteOpen && inputRef.current) inputRef.current.focus();
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
                setPopup({ visible: true, text: "Immersive mode activated" });
            } else if (document.exitFullscreen) {
                await document.exitFullscreen();
            }
        } catch (err) {
            setPopup({ visible: true, text: "Your browser blocked fullscreen mode!" });
        }
    };

    // --- Menu Data ---
    const closeMenu = () => setActiveMenu(null);

    const menuItems = {
        File: [
            { label: 'New Tab', action: () => { if(openFile) openFile('home.jsx'); closeMenu(); }, shortcut: 'Alt+N' },
            { divider: true },
            { label: 'Open home.jsx', action: () => { if(openFile) openFile('home.jsx'); closeMenu(); } },
            { label: 'Open about.html', action: () => { if(openFile) openFile('about.html'); closeMenu(); } },
            { label: 'Open projects.js', action: () => { if(openFile) openFile('projects.js'); closeMenu(); } },
            { label: 'Open skills.json', action: () => { if(openFile) openFile('skills.json'); closeMenu(); } },
            { label: 'Open contact.css', action: () => { if(openFile) openFile('contact.css'); closeMenu(); } },
            { divider: true },
            { label: 'Close Tab', action: () => { if(closeFile) closeFile(null); closeMenu(); }, shortcut: 'Alt+W' },
            { label: 'Close All Tabs', action: () => { if(closeAllFiles) closeAllFiles(); closeMenu(); }, shortcut: 'Alt+K W' }
        ],
        Edit: [
            { label: 'Find', action: () => { setIsPaletteOpen(true); closeMenu(); }, shortcut: 'Ctrl+F', className: 'hide-with-palette' },
            { label: 'Select All', action: () => { document.execCommand('selectAll'); closeMenu(); }, shortcut: 'Ctrl+A' },
            { label: 'Copy', action: () => { document.execCommand('copy'); closeMenu(); }, shortcut: 'Ctrl+C' }
        ],
        View: [
            { label: 'Command Palette...', action: () => { setIsPaletteOpen(true); closeMenu(); }, shortcut: 'Ctrl+Shift+P', className: 'hide-with-palette' },
            { label: 'Toggle Sidebar', action: () => { if(toggleSidebar) toggleSidebar(); closeMenu(); }, shortcut: 'Ctrl+B' },
            { label: 'Toggle Terminal', action: () => { if(toggleTerminal) toggleTerminal(); closeMenu(); }, shortcut: 'Ctrl+`' },
            { label: 'Cad Copilot', action: () => { if(openFile) openFile('Extension: Cad Copilot'); closeMenu(); } },
            { divider: true },
            { label: 'Enter Full Screen', action: () => { handleMaximize(); closeMenu(); }, shortcut: 'F11' },
            { label: 'Zoom In', action: () => { handleZoomIn(); closeMenu(); }, shortcut: 'Ctrl+=' },
            { label: 'Zoom Out', action: () => { handleZoomOut(); closeMenu(); }, shortcut: 'Ctrl+-' },
            { label: 'Reset Zoom', action: () => { handleResetZoom(); closeMenu(); }, shortcut: 'Ctrl+Numpad0' }
        ],
        Go: [
            { label: 'Go to File...', action: () => { setIsPaletteOpen(true); closeMenu(); }, shortcut: 'Ctrl+P', className: 'hide-with-palette' },
            { divider: true },
            ...fileSystem.map(f => ({ label: f.name, action: () => { if(openFile) openFile(f.name); closeMenu(); } }))
        ],
        Run: [
            { label: 'Start Terminal', action: () => { if(toggleTerminal) toggleTerminal(); closeMenu(); } }
        ],
        Terminal: [ 
            { label: 'New Terminal', action: () => { if(toggleTerminal) toggleTerminal(); closeMenu(); }, shortcut: 'Ctrl+Shift+`' },
            { label: 'Toggle Terminal', action: () => { if(toggleTerminal) toggleTerminal(); closeMenu(); }, shortcut: 'Ctrl+`' },
            { divider: true },
            { label: 'Clear Terminal', action: () => { window.dispatchEvent(new CustomEvent('clear-terminal')); closeMenu(); }}
        ],
        Help: [
            { label: 'Command Palette...', action: () => { setIsPaletteOpen(true); closeMenu(); }, shortcut: 'Ctrl+Shift+P', className: 'hide-with-palette' },
            { divider: true },
            { label: 'About Muhammad Arshad', action: () => { if(openFile) openFile('about.html'); closeMenu(); } },
            { label: 'Welcome', action: () => { if(openFile) openFile('home.jsx'); closeMenu(); } }
        ]
    };

    // --- Taunts ---
    const minimizeMessages = ["Minimizing a VS Code inside a browser.. wait what?", "Is there an interesting thing other than my portfolio??", "You want to watch something aaa 👀", "Your girlfriend discord you right now?", "I'm like a persistent notification, you can't ignore me forever!"];
    const closeMessages = ["You.. you don't like my portfolio :(?", "Is it because I'm still a junior or vibe coded?", "Well you can't complain we are living in AI era now", "Damn you still insist on leaving huh", "Alright, I'll let you go... just close the actual browser tab!"];

    const handleMinimize = () => { setPopup({ visible: true, text: minimizeMessages[minCount] }); setMinCount(prev => (prev + 1) % minimizeMessages.length); };
    const handleClose = () => { setPopup({ visible: true, text: closeMessages[closeCount] }); setCloseCount(prev => (prev + 1) % closeMessages.length); };

    useEffect(() => {
        if (popup.visible) {
            const timer = setTimeout(() => setPopup({ visible: false, text: '' }), 2500);
            return () => clearTimeout(timer);
        }
    }, [popup.visible, popup.text]);

    return (
        <div className="title-bar" style={{ position: 'relative' }}>
            
            {/* --- LEFT MENU ITEMS --- */}
            <div className="title-bar-left" ref={menuBarRef} style={{ display: 'flex', position: 'relative' }}>
                {['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'].map((menuName) => (
                    <div key={menuName} style={{ position: 'relative' }}>
                        <span 
                            className={`title-menu-item ${activeMenu === menuName ? 'active' : ''}`}
                            onClick={() => { if (menuItems[menuName]) setActiveMenu(activeMenu === menuName ? null : menuName); }}
                        >
                            {menuName}
                        </span>
                        
                        {/* Dropdown Box */}
                        {activeMenu === menuName && menuItems[menuName] && (
                            <div className="title-dropdown">
                                {menuItems[menuName].map((item, idx) => {
                                    if (item.divider) return <div key={idx} className="title-dropdown-divider" />;
                                    return (
                                        // UPDATE THIS LINE TO INJECT THE CLASS:
                                        <div key={idx} className={`title-dropdown-item ${item.className || ''}`} onClick={item.action}>
                                            <span>{item.label}</span>
                                            {item.shortcut && <span className="title-shortcut">{item.shortcut}</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            {/* --- CENTER SEARCH/COMMAND PALETTE BUTTON --- */}
            <div className="command-palette-btn" onClick={() => setIsPaletteOpen(true)}>
                Muhammad Arshad's Portfolio
            </div>

            {/* --- COMMAND PALETTE MODAL --- */}
            {isPaletteOpen && (
                <div ref={paletteRef} className="command-palette-modal">
                    <div style={{ padding: '5px' }}>
                        <input 
                            ref={inputRef} type="text" placeholder="Search files by name..."
                            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            className="command-palette-input"
                        />
                    </div>
                    <div style={{ maxHeight: '300px', overflowY: 'auto', paddingBottom: '4px' }}>
                        
                        <div style={{ padding: '4px 10px', display: 'flex', justifyContent: 'space-between', color: '#cccccc', fontSize: '12px', background: '#04395e', cursor: 'pointer' }}>
                            <span>Go to File <span style={{ opacity: 0.6 }}>{searchQuery}</span></span>
                        </div>
                        <div style={{ padding: '4px 10px', fontSize: '10px', color: '#858585', marginTop: '2px', textTransform: 'uppercase' }}>
                            {searchQuery ? 'search results' : 'recently opened'}
                        </div>
                        
                        {filteredFiles.length > 0 ? filteredFiles.map((file, idx) => (
                            <div key={idx} onClick={() => handleFileSelect(file.name)} className="command-palette-result">
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>{getFileIcon(file.type)}</span>
                                    <span>{file.name}</span>
                                    <span style={{ fontSize: '11px', color: '#858585', marginLeft: '8px' }}>PORTFOLIO</span>
                                </div>
                            </div>
                        )) : (
                            <div style={{ padding: '8px 15px', color: '#858585', fontSize: '12px' }}>No matching results</div>
                        )}
                    </div>
                </div>
            )}
            
            {/* --- RIGHT WINDOW CONTROLS --- */}
            <div className="window-controls" style={{ display: 'flex', alignItems: 'center', gap: '0', position: 'relative' }}>
                {popup.visible && (
                    <div className="window-popup">{popup.text}</div>
                )}
                <div className="window-btn" onClick={handleMinimize} style={{ width: '46px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="5" width="10" height="2" /></svg></div>
                <div className="window-btn" onClick={handleMaximize} style={{ width: '46px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1.5" y="1.5" width="9" height="9" /></svg></div>
                <div className="window-btn" onClick={handleClose} style={{ width: '46px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="2" x2="10" y2="10" /><line x1="10" y1="2" x2="2" y2="10" /></svg></div>
            </div>
        </div>
    );
};