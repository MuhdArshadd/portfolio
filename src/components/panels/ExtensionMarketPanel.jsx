import React, { useState } from 'react';
import { Icons } from '../icons/Icons';

export const ExtensionsPanel = ({ openFile }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Extensions data
    const extensions = [
        {
            id: 'cad-bot',
            name: 'Cad Bot',
            description: 'Your personal AI portfolio assistant',
            author: 'Arshad Specialist',
            icon: <Icons.Bot color="white" />,
            installed: true
        }
    ];

    // Filter logic: check if name or description matches search
    const filteredExtensions = extensions.filter(ext => 
        ext.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ext.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="sidebar" style={{ width: '300px' }}>
            <div className="sidebar-header">
                <span>EXTENSIONS: {searchTerm ? 'MARKETPLACE' : 'INSTALLED'}</span>
                <span style={{ cursor: 'pointer' }}>⋯</span>
            </div>
            
            <div className="sidebar-content">
                {/* Search Bar */}
                <div style={{ padding: '10px' }}>
                    <input 
                        type="text" 
                        placeholder="Search Extensions in Marketplace" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ 
                            width: '100%', 
                            background: 'var(--bg-dark)', 
                            border: '1px solid var(--border)', 
                            color: 'var(--text)', 
                            padding: '5px 10px', 
                            borderRadius: '3px', 
                            fontSize: '13px', 
                            outline: 'none' 
                        }} 
                    />
                </div>
                
                {/* Results Area */}
                <div style={{ marginTop: '5px' }}>
                    {filteredExtensions.length > 0 ? (
                        filteredExtensions.map(ext => (
                            <div 
                                key={ext.id}
                                onClick={() => openFile('Extension: Cad Bot')}
                                style={{ 
                                    display: 'flex', 
                                    gap: '12px', 
                                    padding: '10px 15px', 
                                    cursor: 'pointer', 
                                    borderBottom: '1px solid var(--border)', 
                                    backgroundColor: 'transparent',
                                    transition: 'background 0.2s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2a2d2e'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                {/* Bot Icon Square */}
                                <div style={{ 
                                    width: '42px', height: '42px', minWidth: '42px', 
                                    background: 'linear-gradient(135deg, #007acc, #004d80)', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                    borderRadius: '6px' 
                                }}>
                                    {ext.icon}
                                </div>
                                
                                {/* Text Block */}
                                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#ffffff', whiteSpace: 'nowrap' }}>
                                        {ext.name}
                                    </span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {ext.description}
                                    </span>
                                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                                        {ext.installed ? 'Installed' : ext.author}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        // No Results Found State
                        <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
                            No extensions found matching "{searchTerm}"
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};