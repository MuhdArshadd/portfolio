import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './components/icons/Icons.jsx';
import { fileSystem } from './data/index.js';
import { TitleBar } from './components/layout/TitleBar/TitleBar.jsx';
import { ActivityBar } from './components/layout/ActivityBar/ActivityBar.jsx';
import { StatusBar } from './components/layout/StatusBar/StatusBar.jsx';
import { FileContent } from './components/layout/FileContent/FileContent.jsx';
import { DiffView, GitPanel, ExtensionsPanel, ChatPanel, ExplorerPanel, TerminalPanel  } from './components/panels/index.js';
import './index.css';

function App() {
    // --- STATE ---
    const [activeFile, setActiveFile] = useState('home.jsx');
    const [openFiles, setOpenFiles] = useState(['home.jsx', 'about.html']);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeSidebar, setActiveSidebar] = useState('explorer');
    const [expandedFolders, setExpandedFolders] = useState(['PORTFOLIO']);
    const [showDiff, setShowDiff] = useState(false);
    const [diffFile, setDiffFile] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isBotActive, setBotActive] = useState(true);
    const [terminalVisible, setTerminalVisible] = useState(false);
    const [terminalHeight, setTerminalHeight] = useState(250);
    const isDraggingRef = useRef(false);

    // --- HELPER FUNCTIONS ---
    const toggleFolder = (folder) => setExpandedFolders(prev => prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]);
    const openFile = (filename) => { if (!openFiles.includes(filename)) setOpenFiles([...openFiles, filename]); setActiveFile(filename); };
    const closeFile = (filenameToClose, e) => {
        if (e) e.stopPropagation();
        const targetFile = filenameToClose || activeFile;
        const newOpenFiles = openFiles.filter(f => f !== targetFile);
        if (newOpenFiles.length === 0) { 
            setOpenFiles(['home.jsx']); 
            setActiveFile('home.jsx'); 
        } else { 
            setOpenFiles(newOpenFiles); 
            if (activeFile === targetFile) {
                setActiveFile(newOpenFiles[newOpenFiles.length - 1]); 
            }
        }
    };
    const getFileIcon = (filename) => { const file = fileSystem.find(f => f.name === filename); const IconComponent = Icons[file?.icon || 'ExtensionTabIcon']; return <IconComponent />; };
    const handleSidebarClick = (panel) => { if (activeSidebar === panel) setSidebarVisible(!sidebarVisible); else { setActiveSidebar(panel); setSidebarVisible(true); } };
    const closeAllFiles = () => {
        // Keeps only home.jsx open
        setOpenFiles(['home.jsx']);
        setActiveFile('home.jsx');
    };
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    const toggleTerminal = () => {
        setTerminalVisible(!terminalVisible);
    };
    const startResizing = () => {
        isDraggingRef.current = true;
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResizing);
    };

    const resize = (e) => {
        if (isDraggingRef.current) {
            // Calculate height from the bottom of the screen
            // 22px accounts for the Status Bar height at the bottom
            const newHeight = window.innerHeight - e.clientY - 22; 
            
            // Set constraints so it doesn't get too small or crush the editor
            if (newHeight > 100 && newHeight < window.innerHeight * 0.8) {
                setTerminalHeight(newHeight);
            }
        }
    };

    const stopResizing = () => {
        isDraggingRef.current = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResizing);
    };
    
    
    // --- MAIN RENDER ---
    return (
        <div className="vscode-container">
            
            <TitleBar 
                openFile={openFile}
                closeFile={closeFile} 
                closeAllFiles={closeAllFiles} 
                toggleSidebar={toggleSidebar}
                toggleTerminal={toggleTerminal} 
            />

            <div className="main-layout">
                
                <ActivityBar 
                    activeSidebar={activeSidebar} 
                    sidebarVisible={sidebarVisible} 
                    handleSidebarClick={handleSidebarClick}
                    isChatOpen={isChatOpen}
                    setIsChatOpen={setIsChatOpen}
                    isBotActive={isBotActive}
                    openFile={openFile}
                />

                {/* Left Sidebars */}
                {sidebarVisible && (
                    activeSidebar === 'git' ? <GitPanel setShowDiff={setShowDiff} setDiffFile={setDiffFile} /> :
                    activeSidebar === 'extensions' ? <ExtensionsPanel openFile={openFile} /> :
                    <ExplorerPanel expandedFolders={expandedFolders} toggleFolder={toggleFolder} activeFile={activeFile} openFile={openFile} getFileIcon={getFileIcon} />
                )}

                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                    
                    {/* Editor Area (Added flex: 1 so it pushes the terminal down) */}
                    <div className="editor-area" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>

                        {/* --- THE DIFF VIEW --- */}
                        {showDiff && <DiffView setShowDiff={setShowDiff} />}

                        <div className="tabs">
                            {openFiles.map(file => (
                                <div key={file} className={`tab ${activeFile === file ? 'active' : ''}`} onClick={() => setActiveFile(file)}>
                                    {getFileIcon(file)}<span>{file}</span>
                                    <span className="tab-close" onClick={(e) => closeFile(file, e)}><Icons.Close /></span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="breadcrumbs">
                            <span className="breadcrumb-item">User</span><span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">PORTFOLIO</span><span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">{activeFile}</span>
                        </div>
                        
                        <div className="editor-content" style={{ flex: 1, overflowY: 'auto' }}>
                            <FileContent activeFile={activeFile} setBotActive={setBotActive} openFile={openFile}/>
                        </div>
                    </div>                

                    {/* --- TERMINAL (Now sits at the bottom of the Center Column) --- */}
                    {terminalVisible && (
                        <>
                            {/* The Draggable Resizer Handle */}
                            <div 
                                onMouseDown={startResizing}
                                style={{
                                    height: '4px',
                                    cursor: 'ns-resize', // Shows the up/down arrow cursor
                                    backgroundColor: 'transparent',
                                    width: '100%',
                                    zIndex: 100,
                                    marginTop: '-4px' // Pulls it up slightly to overlap the border
                                }}
                                // Hover effect just like VS Code!
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#007acc'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            />
                            
                            {/* Pass the dynamic height down */}
                            <TerminalPanel toggleTerminal={toggleTerminal} height={terminalHeight} />
                        </>
                    )}

                </div> 


                {/* Right Sidebar (Cad Copilot) */}
                {isChatOpen && <ChatPanel onClose={() => setIsChatOpen(false)} />}
            
            </div>

            <StatusBar />            
        </div>
    );
}

export default App;