import React from 'react';
import { Icons } from '../icons/Icons';
import { fileSystem } from '../../data/index';

export const ExplorerPanel = ({ expandedFolders, toggleFolder, activeFile, openFile, getFileIcon }) => (
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
                        {fileSystem.map(file => (
                            <div key={file.name} className={`file-item ${activeFile === file.name ? 'active' : ''}`} onClick={() => openFile(file.name)}>
                                {getFileIcon(file.name)}<span>{file.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </div>
);