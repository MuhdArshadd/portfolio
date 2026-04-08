import React, { useState } from 'react';
import { Icons } from '../../icons/Icons';
import { extensionsData } from '../../../data/index.js';
import './ExtensionPanel.css'; 
import '../index.css'

export const ExtensionsPanel = ({ openFile }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredExtensions = extensionsData.filter(ext => 
        ext.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ext.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="sidebar" style={{ width: '300px', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--border, #444444)', backgroundColor: 'var(--bg-sidebar, #252526)' }}>
            
            <div className="sidebar-header" style={{ padding: '0 15px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', color: '#cccccc' }}>
                <span>EXTENSIONS: {searchTerm ? 'MARKETPLACE' : 'INSTALLED'}</span>
                <span style={{ cursor: 'pointer' }}>⋯</span>
            </div>
            
            <div className="sidebar-content" style={{ flex: 1, overflowY: 'auto' }}>
                
                {/* Search Bar */}
                <div className="extensions-search-container">
                    <input 
                        type="text" 
                        placeholder="Search Extensions in Marketplace" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="extensions-search-input"
                    />
                </div>
                
                {/* Results Area */}
                <div className="extension-list">
                    {filteredExtensions.length > 0 ? (
                        filteredExtensions.map(ext => {
                            const IconComponent = Icons[ext.iconName] || Icons.Extensions; 
                            
                            return (
                                <div 
                                    key={ext.id}
                                    onClick={() => openFile('Extension: Cad Copilot')}
                                    className="extension-card"
                                >
                                    {/* Bot Icon Square */}
                                    <div className="extension-icon-wrapper">
                                        <IconComponent color="white" />
                                    </div>
                                    
                                    {/* Text Block */}
                                    <div className="extension-text-block">
                                        <span className="extension-title">{ext.name}</span>
                                        <span className="extension-desc">{ext.description}</span>
                                        <span className="extension-meta">
                                            {ext.installed ? 'Installed' : ext.author}
                                        </span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        // No Results Found State
                        <div className="extension-empty-state">
                            No extensions found matching "{searchTerm}"
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    );
};