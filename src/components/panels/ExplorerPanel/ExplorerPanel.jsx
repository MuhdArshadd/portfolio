import React from 'react';
import { Icons } from '../../icons/Icons';
import { fileSystem } from '../../../data/index.js';
import './ExplorerPanel.css';
import '../index.css'

export const ExplorerPanel = ({ expandedFolders, toggleFolder, activeFile, openFile, getFileIcon }) => (
    <div className="sidebar" style={{ width: '250px', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border, #444444)', backgroundColor: 'var(--bg-sidebar, #252526)' }}>
        
        <div className="sidebar-header" style={{ padding: '0 15px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', color: '#cccccc' }}>
            <span>EXPLORER</span>
            <span style={{ cursor: 'pointer' }}>⋯</span>
        </div>
        
        <div className="sidebar-content" style={{ flex: 1, overflowY: 'auto', paddingTop: '10px' }}>
            <div className="folder-section">
                
                {/* --- FOLDER HEADER --- */}
                <div className="explorer-folder-header" onClick={() => toggleFolder('PORTFOLIO')}>
                    <span className="explorer-folder-icon">
                        {expandedFolders.includes('PORTFOLIO') ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
                    </span>
                    
                    <svg className="explorer-folder-icon" width="16" height="16" viewBox="0 0 24 24" fill="#dcb67a">
                        <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" />
                    </svg>
                    
                    <span className="explorer-folder-name">PORTFOLIO</span>
                </div>

                {/* --- FILES INSIDE FOLDER --- */}
                {expandedFolders.includes('PORTFOLIO') && (
                    <div className="explorer-file-list">
                        {fileSystem.map(file => (
                            <div 
                                key={file.name} 
                                className={`explorer-file-item ${activeFile === file.name ? 'active' : ''}`} 
                                onClick={() => openFile(file.name)}
                            >
                                {getFileIcon(file.name)}
                                <span>{file.name}</span>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
        </div>
    </div>
);