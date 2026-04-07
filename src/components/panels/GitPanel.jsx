import React, { useState } from 'react';
import { Icons } from '../icons/Icons';

export const DiffView = ({ setShowDiff }) => (
    <div style={{ position: 'fixed', top: '30px', left: '48px', right: '0', bottom: '22px', background: 'var(--bg-dark)', zIndex: 100, display: 'flex' }}>
        <div style={{ flex: 1, borderRight: '1px solid var(--border)', padding: '20px', overflow: 'auto' }}>
            <div style={{ color: 'var(--text-muted)', marginBottom: '10px', fontSize: '12px' }}>HEAD (Original)</div>
            <div className="code-line"><span className="line-num">1</span><span className="line-content">&lt;<span className="tag">h1</span>&gt;About Me&lt;/<span className="tag">h1</span>&gt;</span></div>
            <div className="code-line"><span className="line-num">2</span><span className="line-content">&lt;<span className="tag">p</span>&gt;Original content here&lt;/<span className="tag">p</span>&gt;</span></div>
        </div>
        <div style={{ flex: 1, padding: '20px', overflow: 'auto', background: 'rgba(0,255,0,0.05)' }}>
            <div style={{ color: 'var(--green)', marginBottom: '10px', fontSize: '12px' }}>Working Tree (Modified)</div>
            <div className="code-line"><span className="line-num">1</span><span className="line-content">&lt;<span className="tag">h1</span>&gt;About Me&lt;/<span className="tag">h1</span>&gt;</span></div>
            <div className="code-line"><span className="line-num">2</span><span className="line-content" style={{ background: 'rgba(0,255,0,0.2)' }}>&lt;<span className="tag">p</span>&gt;Updated content with new information&lt;/<span className="tag">p</span>&gt;</span></div>
            <div className="code-line"><span className="line-num">3</span><span className="line-content" style={{ background: 'rgba(0,255,0,0.2)' }}>&lt;<span className="tag">p</span>&gt;Added new paragraph&lt;/<span className="tag">p</span>&gt;</span></div>
        </div>
        <button onClick={() => setShowDiff(false)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--bg-sidebar)', border: '1px solid var(--border)', color: 'var(--text)', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}>
            Close Diff
        </button>
    </div>
);

export const GitPanel = ({ setShowDiff, setDiffFile }) => {
    // State to handle collapsible sections
    const [isChangesOpen, setIsChangesOpen] = useState(true);
    const [isGraphOpen, setIsGraphOpen] = useState(true);

    return (
        <div className="sidebar" style={{ width: '300px', background: 'var(--bg-sidebar)', display: 'flex', flexDirection: 'column' }}>
            
            {/* SOURCE CONTROL Header (Cleaned up, no extra icons) */}
            <div className="sidebar-header" style={{ padding: '0 15px', height: '35px', display: 'flex', alignItems: 'center', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                <span>SOURCE CONTROL</span>
            </div>

            {/* UPPER SECTION: Takes up available space to push Graph to the bottom */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
                
                {/* CHANGES Collapsible Header */}
                <div 
                    onClick={() => setIsChangesOpen(!isChangesOpen)} 
                    style={{ padding: '0 5px', height: '22px', display: 'flex', alignItems: 'center', fontSize: '11px', cursor: 'pointer' }}
                >
                    <div style={{ width: '20px', display: 'flex', justifyContent: 'center' }}>
                        {isChangesOpen ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
                    </div>
                    <span style={{ fontWeight: '600', textTransform: 'uppercase' }}>Changes</span>
                    <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', paddingRight: '10px' }}>1</span>
                </div>

                {/* CHANGES Content */}
                {isChangesOpen && (
                    <div style={{ paddingBottom: '10px' }}>
                        {/* Commit Message Box */}
                        <div style={{ padding: '8px 15px' }}>
                            <input 
                                type="text" 
                                className="commit-input" 
                                placeholder="Message (Ctrl+Enter to commit)"
                                style={{ width: '100%', boxSizing: 'border-box' }}
                            />
                            <div className="commit-button">
                                ✓ Commit
                            </div>
                        </div>

                        {/* Changes List */}
                        <div style={{ marginTop: '4px' }}>
                            <div className="git-file-item" onClick={() => { setShowDiff(true); setDiffFile('about.html'); }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px', color: '#e34c26' }}>
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                                    <polyline points="13 2 13 9 20 9"/>
                                </svg>
                                <span style={{ flex: 1 }}>about.html</span>
                                <span style={{ color: '#e2c08d', fontWeight: '600', fontSize: '12px' }}>M</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* LOWER SECTION: The Graph */}
            <div style={{ borderTop: '1px solid var(--border)' }}>
                
                {/* GRAPH Collapsible Header (Cleaned up, no extra icons) */}
                <div 
                    onClick={() => setIsGraphOpen(!isGraphOpen)} 
                    style={{ padding: '4px 5px', height: '22px', display: 'flex', alignItems: 'center', fontSize: '11px', cursor: 'pointer' }}
                >
                    <div style={{ width: '20px', display: 'flex', justifyContent: 'center' }}>
                        {isGraphOpen ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
                    </div>
                    <span style={{ fontWeight: '600', textTransform: 'uppercase' }}>Graph</span>
                </div>

                {/* GRAPH Content */}
                {isGraphOpen && (
                    <div style={{ padding: '10px 15px' }}>
                        <svg width="100%" height="200" viewBox="0 0 280 200">
                            {/* Main straight vertical line */}
                            <line x1="20" y1="20" x2="20" y2="180" stroke="#1dadf0" strokeWidth="2"/>
                            
                            {/* Commit dots on the line */}
                            <circle cx="20" cy="30" r="5" fill="#1dadf0"/>
                            <circle cx="20" cy="60" r="5" fill="#1dadf0"/>
                            <circle cx="20" cy="90" r="5" fill="#1dadf0"/>
                            <circle cx="20" cy="120" r="5" fill="#1dadf0"/>
                            <circle cx="20" cy="150" r="5" fill="#1dadf0"/>
                            <circle cx="20" cy="180" r="5" fill="#1dadf0"/>
                            
                            {/* Commit messages to the right */}
                            <text x="35" y="34" fill="#9cdcfe" fontSize="12" fontWeight="bold">feat: interactive git graph & diff view</text>
                            <text x="35" y="64" fill="#ccc" fontSize="12">feat: add marketplace & "vibe coded" bot</text>
                            <text x="35" y="94" fill="#ccc" fontSize="12">fix: stop users from closing the app (taunts)</text>
                            <text x="35" y="124" fill="#ccc" fontSize="12">feat: implement dynamic file system routing</text>
                            <text x="35" y="154" fill="#ccc" fontSize="12">feat: setup vscode layout & activity bar</text>
                            <text x="35" y="184" fill="#888" fontSize="12">Initial Commit</text>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};