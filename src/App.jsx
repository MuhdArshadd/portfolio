import React, { useState } from 'react';
import { Icons } from './components/Icons';
import { FileContent } from './components/FileContent';
import { DiffView, GitPanel, ExtensionsPanel, ChatPanel } from './components/Panels';

function App() {
    const [activeFile, setActiveFile] = useState('home.tsx');
    const [openFiles, setOpenFiles] = useState(['home.tsx', 'about.html']);
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeSidebar, setActiveSidebar] = useState('explorer');
    const [expandedFolders, setExpandedFolders] = useState(['PORTFOLIO']);
    const [showDiff, setShowDiff] = useState(false);
    const [diffFile, setDiffFile] = useState(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const files = [
        { name: 'home.tsx', type: 'react', icon: 'ReactIcon' },
        { name: 'about.html', type: 'html', icon: 'HtmlIcon' },
        { name: 'projects.js', type: 'js', icon: 'JsIcon' },
        { name: 'skills.json', type: 'json', icon: 'JsonIcon' },
        { name: 'contact.css', type: 'css', icon: 'CssIcon' }
    ];

    const toggleFolder = (folder) => setExpandedFolders(prev => prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]);
    const openFile = (filename) => { if (!openFiles.includes(filename)) setOpenFiles([...openFiles, filename]); setActiveFile(filename); };
    const closeFile = (filename, e) => {
        e.stopPropagation();
        const newOpenFiles = openFiles.filter(f => f !== filename);
        if (newOpenFiles.length === 0) {
            setOpenFiles(['home.tsx']);
            setActiveFile('home.tsx');
        } else {
            setOpenFiles(newOpenFiles);
            if (activeFile === filename) {
                setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
            }
        }
    };
    const getFileIcon = (filename) => { const file = files.find(f => f.name === filename); const IconComponent = Icons[file?.icon || 'JsIcon']; return <IconComponent />; };
    const handleSidebarClick = (panel) => { if (activeSidebar === panel) setSidebarVisible(!sidebarVisible); else { setActiveSidebar(panel); setSidebarVisible(true); } };

    return (
        <div className="vscode-container">
            {/* Title Bar */}
            <div className="title-bar">
                <div className="title-bar-left">
                    <span className="menu-item">File</span><span className="menu-item">Edit</span><span className="menu-item">Selection</span><span className="menu-item">View</span><span className="menu-item">Go</span><span className="menu-item">Run</span><span className="menu-item">Terminal</span><span className="menu-item">Help</span>
                </div>
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>Muhammad Arshad's Portfolio</div>
                <div className="window-controls" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                    <div className="window-btn" style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="5" width="10" height="2" /></svg></div>
                    <div className="window-btn" style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1.5" y="1.5" width="9" height="9" /></svg></div>
                    <div className="window-btn" style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="2" x2="10" y2="10" /><line x1="10" y1="2" x2="2" y2="10" /></svg></div>
                </div>
            </div>

            {/* Main Layout */}
            <div className="main-layout">
                {/* Activity Bar */}
                <div className="activity-bar">
                    <div className={`activity-icon ${activeSidebar === 'explorer' && sidebarVisible ? 'active' : ''}`} onClick={() => handleSidebarClick('explorer')}><Icons.Files /></div>
                    <div className={`activity-icon ${activeSidebar === 'git' ? 'active' : ''}`} onClick={() => handleSidebarClick('git')}><Icons.Git /></div>
                    <div className={`activity-icon ${activeSidebar === 'extensions' && sidebarVisible ? 'active' : ''}`} onClick={() => handleSidebarClick('extensions')}><Icons.Extensions /></div>
                    <div className={`activity-icon ${isChatOpen ? 'active' : ''}`} onClick={() => setIsChatOpen(!isChatOpen)}><Icons.Bot /></div>

                    <div style={{ flex: 1 }}></div>
                    <div className="activity-icon"><Icons.Account /></div>
                    <div className="activity-icon"><Icons.Settings /></div>
                </div>

                {/* Sidebar */}
                {sidebarVisible && (
                    activeSidebar === 'git' ? <GitPanel setShowDiff={setShowDiff} setDiffFile={setDiffFile} /> :
                    activeSidebar === 'extensions' ? <ExtensionsPanel /> :
                    (
                        <div className="sidebar">
                            <div className="sidebar-header"><span>EXPLORER</span><span style={{ cursor: 'pointer' }}>⋯</span></div>
                            <div className="sidebar-content">
                                <div className="folder-section">
                                    <div className="folder-header" onClick={() => toggleFolder('PORTFOLIO')}>
                                        {expandedFolders.includes('PORTFOLIO') ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#dcb67a" style={{ marginRight: '5px' }}><path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" /></svg>
                                        <span style={{ fontWeight: 'bold' }}>PORTFOLIO</span>
                                    </div>
                                    {expandedFolders.includes('PORTFOLIO') && (
                                        <div>
                                            {files.map(file => (
                                                <div key={file.name} className={`file-item ${activeFile === file.name ? 'active' : ''}`} onClick={() => openFile(file.name)}>
                                                    {getFileIcon(file.name)}<span>{file.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
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
                        <span className="breadcrumb-item">User</span><span className="breadcrumb-separator">›</span><span className="breadcrumb-item">PORTFOLIO</span><span className="breadcrumb-separator">›</span><span className="breadcrumb-item">{activeFile}</span>
                    </div>
                    <div className="editor-content">
                        <FileContent activeFile={activeFile} />
                    </div>
                </div>                
                {isChatOpen && <ChatPanel onClose={() => setIsChatOpen(false)} />}
            </div>

            {/* Status Bar */}
            <div className="status-bar">
                <div className="status-left">
                    <div className="status-item"><Icons.Branch /><span>main*</span></div>
                    <div className="status-item"><Icons.Error /><span>0</span><Icons.Warning /><span>0</span></div>
                </div>
                <div className="status-right">
                    <div className="status-item"><span>Ln 12, Col 18</span></div><div className="status-item"><span>UTF-8</span></div><div className="status-item"><span>JavaScript JSX</span></div><div className="status-item"><Icons.Check /><span>Prettier</span></div>
                </div>
            </div>
            {showDiff && <DiffView setShowDiff={setShowDiff} />}
        </div>
    );
}

export default App;