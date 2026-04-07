import React from 'react';

export const TitleBar = () => {
    return (
        <div className="title-bar">
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
            
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                Muhammad Arshad's Portfolio
            </div>
            
            <div className="window-controls" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                <div className="window-btn" style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="5" width="10" height="2" /></svg>
                </div>
                <div className="window-btn" style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1.5" y="1.5" width="9" height="9" /></svg>
                </div>
                <div className="window-btn" style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="2" x2="10" y2="10" /><line x1="10" y1="2" x2="2" y2="10" /></svg>
                </div>
            </div>
        </div>
    );
};