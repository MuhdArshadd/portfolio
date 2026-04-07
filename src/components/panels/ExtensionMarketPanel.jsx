import React from 'react';
import { Icons } from '../icons/Icons';

export const ExtensionsPanel = ({ openFile }) => (
    <div className="sidebar" style={{ width: '300px' }}>
        <div className="sidebar-header">
            <span>EXTENSIONS: INSTALLED</span>
            <span style={{ cursor: 'pointer' }}>⋯</span>
        </div>
        <div className="sidebar-content">
            {/* The Search Bar Mockup */}
            <div style={{ padding: '10px' }}>
                <input 
                    type="text" 
                    placeholder="Search Extensions in Marketplace" 
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border)', color: 'var(--text)', padding: '5px', borderRadius: '3px', fontSize: '13px', outline: 'none' }} 
                />
            </div>
            
            {/* The Cad Bot List Item */}
            <div 
                onClick={() => openFile('Extension: Cad Bot')}
                style={{ display: 'flex', gap: '12px', padding: '10px 15px', cursor: 'pointer', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-dark)' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2a2d2e'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-dark)'}
            >
                {/* Bot Icon Square */}
                <div style={{ width: '42px', height: '42px', minWidth: '42px', background: 'linear-gradient(135deg, #007acc, #004d80)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px' }}>
                    <Icons.Bot color="white" />
                </div>
                
                {/* Text Block */}
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#ffffff', whiteSpace: 'nowrap' }}>Cad Bot</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Your personal AI portfolio assistant</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>Installed</span>
                </div>
            </div>
        </div>
    </div>
);