import React, { useState } from 'react';
import { Icons } from '../icons/Icons';
import '../file-views/ExperiencesView.css';

export const DiffView = ({ setShowDiff }) => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#1e1e1e', zIndex: 50, display: 'flex', flexDirection: 'column' }}>
            
            {/* Diff Tab Header */}
            <div style={{ display: 'flex', background: '#2d2d2d', padding: '10px 20px', alignItems: 'center', borderBottom: '1px solid #1e1e1e' }}>
                <div style={{ color: '#e2c08d', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px' }}>
                    <Icons.JsonIcon />
                    <span style={{ color: '#cccccc' }}>experiences.json (Working Tree)</span>
                </div>
                <button 
                    onClick={() => setShowDiff(false)} 
                    style={{ marginLeft: 'auto', background: 'transparent', border: '1px solid #555', color: '#ccc', padding: '4px 12px', cursor: 'pointer', borderRadius: '3px', fontSize: '12px', transition: 'all 0.2s' }}
                    onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseOut={(e) => e.target.style.background = 'transparent'}
                >
                    Close Diff
                </button>
            </div>

            {/* Split Editor */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                
                {/* ========================================= */}
                {/* LEFT SIDE: ORIGINAL (HEAD)                */}
                {/* ========================================= */}
                <div style={{ flex: 1, borderRight: '1px solid #444', overflowY: 'auto', padding: '30px' }}>
                    <div style={{ color: '#858585', marginBottom: '30px', fontStyle: 'italic', fontSize: '13px' }}>// HEAD (Original)</div>
                    
                    <div className="timeline-column" style={{ maxWidth: '100%' }}>
                        <h2 className="column-heading">
                            <span style={{ color: '#4fc1ff' }}>//</span> PROFESSIONAL
                        </h2>
                        
                        <div className="timeline-container">
                            {/* Original State: Just the Teleport Internship */}
                            <div className="timeline-item">
                                <div className="timeline-dot dot-blue active"></div>
                                <div className="timeline-date">Oct 2025 - Apr 2026</div>
                                <h3 className="timeline-role">Quality Assurance Intern</h3>
                                <div className="timeline-company">@ Teleport Platforms Sdn. Bhd.</div>
                                <p className="timeline-desc">
                                    Managed the Software Testing Life Cycle (STLC) for logistics business flows. Ensured zero-defect deployments and maintained high quality across production systems.
                                </p>
                                <div className="timeline-tech">
                                    <span className="tech-badge">Karate</span>
                                    <span className="tech-badge">Java</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========================================= */}
                {/* RIGHT SIDE: MODIFIED (WORKING TREE)       */}
                {/* ========================================= */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '30px' }}>
                    <div style={{ color: '#858585', marginBottom: '30px', fontStyle: 'italic', fontSize: '13px' }}>// Working Tree (Modified)</div>
                    
                    <div className="timeline-column" style={{ maxWidth: '100%' }}>
                        <h2 className="column-heading">
                            <span style={{ color: '#4fc1ff' }}>//</span> PROFESSIONAL
                        </h2>
                        
                        <div className="timeline-container">
                            
                            {/* THE GLOWING GREEN ADDITION (The Easter Egg) */}
                            <div className="timeline-item" style={{ borderLeftColor: '#23d18b' }}>
                                {/* Green Active Dot */}
                                <div className="timeline-dot" style={{ backgroundColor: '#23d18b', borderColor: '#23d18b', boxShadow: '0 0 0 4px rgba(35, 209, 139, 0.2)' }}></div>
                                
                                {/* Green Highlight Box */}
                                <div style={{ backgroundColor: 'rgba(35, 209, 139, 0.1)', border: '1px solid rgba(35, 209, 139, 0.3)', borderRadius: '6px', padding: '20px', marginLeft: '-15px', marginTop: '-15px', marginBottom: '20px' }}>
                                    
                                    <div className="timeline-date" style={{ color: '#23d18b', fontWeight: 'bold' }}>May 2026 - Present</div>
                                    <h3 className="timeline-role" style={{ color: '#23d18b' }}>Software Engineer</h3>
                                    <div className="timeline-company" style={{ color: '#23d18b' }}>@ [Your Company Name Here] 👀</div>
                                    
                                    <p className="timeline-desc" style={{ color: '#cccccc' }}>
                                        Hired Muhammad Arshad after being thoroughly impressed by his interactive VS Code portfolio, problem-solving skills, and proactive attitude. Best hiring decision ever.
                                    </p>
                                    
                                    <div className="timeline-tech">
                                        <span className="tech-badge" style={{ borderColor: '#23d18b', color: '#23d18b', backgroundColor: 'rgba(35, 209, 139, 0.1)' }}>+ Offer Signed</span>
                                        <span className="tech-badge" style={{ borderColor: '#23d18b', color: '#23d18b', backgroundColor: 'rgba(35, 209, 139, 0.1)' }}>+ Ready to Work</span>
                                    </div>
                                </div>
                            </div>

                            {/* The existing Teleport Internship pushed down */}
                            <div className="timeline-item">
                                <div className="timeline-dot dot-blue"></div>
                                <div className="timeline-date">Oct 2025 - Apr 2026</div>
                                <h3 className="timeline-role">Quality Assurance Intern</h3>
                                <div className="timeline-company">@ Teleport Platforms Sdn. Bhd.</div>
                                <p className="timeline-desc">
                                    Managed the Software Testing Life Cycle (STLC) for logistics business flows. Ensured zero-defect deployments and maintained high quality across production systems.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

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
                                <Icons.JsonIcon />
                                <span style={{ flex: 1 }}>experiences.json</span>
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