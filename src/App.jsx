import React, { useState } from 'react';
import { Icons } from './components/icons/Icons';
import { fileSystem } from "./data/index.js";
import { TitleBar } from './components/TitleBar';
import { ActivityBar } from './components/ActivityBar';
import { StatusBar } from './components/StatusBar';
import { FileContent } from './components/FileContent';
import { DiffView, GitPanel, ExtensionsPanel, ChatPanel, ExplorerPanel } from './components/panels';

function App() {
    // --- STATE ---
    const [activeFile, setActiveFile] = useState('home.tsx');
    const [openFiles, setOpenFiles] = useState(['home.tsx', 'about.html']);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeSidebar, setActiveSidebar] = useState('explorer');
    const [expandedFolders, setExpandedFolders] = useState(['PORTFOLIO']);
    const [showDiff, setShowDiff] = useState(false);
    const [diffFile, setDiffFile] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isBotActive, setBotActive] = useState(true);

    // --- HELPER FUNCTIONS ---
    const toggleFolder = (folder) => setExpandedFolders(prev => prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]);
    const openFile = (filename) => { if (!openFiles.includes(filename)) setOpenFiles([...openFiles, filename]); setActiveFile(filename); };
    const closeFile = (filename, e) => {
        e.stopPropagation();
        const newOpenFiles = openFiles.filter(f => f !== filename);
        if (newOpenFiles.length === 0) { setOpenFiles(['home.tsx']); setActiveFile('home.tsx'); } 
        else { setOpenFiles(newOpenFiles); if (activeFile === filename) setActiveFile(newOpenFiles[newOpenFiles.length - 1]); }
    };
    const getFileIcon = (filename) => { const file = fileSystem.find(f => f.name === filename); const IconComponent = Icons[file?.icon || 'ExtensionTabIcon']; return <IconComponent />; };
    const handleSidebarClick = (panel) => { if (activeSidebar === panel) setSidebarVisible(!sidebarVisible); else { setActiveSidebar(panel); setSidebarVisible(true); } };

    console.log("2. App.jsx is holding state as:", isBotActive);
    // --- MAIN RENDER ---
    return (
        <div className="vscode-container">
            
            <TitleBar />

            <div className="main-layout">
                
                <ActivityBar 
                    activeSidebar={activeSidebar} 
                    sidebarVisible={sidebarVisible} 
                    handleSidebarClick={handleSidebarClick}
                    isChatOpen={isChatOpen}
                    setIsChatOpen={setIsChatOpen}
                    isBotActive={isBotActive}
                />

                {/* Left Sidebars */}
                {sidebarVisible && (
                    activeSidebar === 'git' ? <GitPanel setShowDiff={setShowDiff} setDiffFile={setDiffFile} /> :
                    activeSidebar === 'extensions' ? <ExtensionsPanel openFile={openFile} /> :
                    <ExplorerPanel expandedFolders={expandedFolders} toggleFolder={toggleFolder} activeFile={activeFile} openFile={openFile} getFileIcon={getFileIcon} />
                )}

                {/* Editor Area */}
                <div className="editor-area">
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
                    
                    <div className="editor-content">
                        <FileContent activeFile={activeFile} setBotActive={setBotActive}/>
                    </div>
                </div>                

                {/* Right Sidebar (Cad Bot) */}
                {isChatOpen && <ChatPanel onClose={() => setIsChatOpen(false)} />}
            
            </div>

            <StatusBar />
            {showDiff && <DiffView setShowDiff={setShowDiff} />}
            
        </div>
    );
}

export default App;