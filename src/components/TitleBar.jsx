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

    // 3. Your entire file system to search through
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
            default: return <Icons.Files />; // Fallback icon
        }
    }

    // Filter files based on search query
    const filteredFiles = allFiles.filter(file => 
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Listen for the Custom Event from the Activity Bar
    useEffect(() => {
        const openPalette = () => setIsPaletteOpen(true);
        
        // Start listening
        window.addEventListener('open-command-palette', openPalette);
        
        // Clean up the listener when the component unmounts
        return () => window.removeEventListener('open-command-palette', openPalette);
    }, []);

    // Handle clicking outside the palette to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (paletteRef.current && !paletteRef.current.contains(event.target)) {
                setIsPaletteOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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

    // --- Existing Click Handlers ---
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
            <div className="title-bar-left">
                <span className="menu-item">File</span>
                <span className="menu-item">Edit</span>
                <span className="menu-item">Selection</span>
                <span className="menu-item">View</span>
                <span className="menu-item">Go</span>
                <span className="menu-item">Run</span>
                <span className="menu-item">Terminal</span>
                <span className="menu-item">Help</span>
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
                    width: '480px', // Reduced from 600px
                    background: '#252526', border: '1px solid #454545',
                    borderRadius: '6px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', zIndex: 9999,
                    display: 'flex', flexDirection: 'column', overflow: 'hidden'
                }}>
                    {/* Input Area */}
                    <div style={{ padding: '5px' }}> {/* Reduced padding */}
                        <input 
                            ref={inputRef}
                            type="text" 
                            placeholder="Search files by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{ 
                                width: '100%', boxSizing: 'border-box', background: '#3c3c3c', 
                                border: '1px solid #007acc', color: '#cccccc', 
                                padding: '6px 8px', 
                                fontSize: '12px', 
                                outline: 'none', borderRadius: '3px' 
                            }}
                        />
                    </div>

                    {/* Results List */}
                    <div style={{ maxHeight: '300px', overflowY: 'auto', paddingBottom: '4px' }}>
                        
                        {/* Static Action Row */}
                        <div style={{ padding: '4px 10px', display: 'flex', justifyContent: 'space-between', color: '#cccccc', fontSize: '12px', background: '#04395e', cursor: 'pointer' }}>
                            <span>Go to File <span style={{ opacity: 0.6 }}>{searchQuery}</span></span>
                        </div>

                        {/* File Results Header */}
                        <div style={{ padding: '4px 10px', fontSize: '10px', color: '#858585', marginTop: '2px', textTransform: 'uppercase' }}>
                            {searchQuery ? 'search results' : 'recently opened'}
                        </div>

                        {filteredFiles.length > 0 ? filteredFiles.map((file, idx) => (
                            <div 
                                key={idx}
                                onClick={() => handleFileSelect(file.name)}
                                style={{ 
                                    padding: '4px 15px', // Reduced padding for tighter rows
                                    display: 'flex', justifyContent: 'space-between', 
                                    alignItems: 'center', cursor: 'pointer', fontSize: '12px', color: '#cccccc' // Reduced font size
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