import React, { useState } from 'react';
import { Icons } from '../../icons/Icons';
import { gitHistoryData } from '../../../data/index.js';
import '../../../views/Experiences/ExperiencesView.css';
import './GitPanel.css';
import '../index.css';

export const DiffView = ({ setShowDiff }) => {
    return (
        <div className="diff-overlay">
            
            {/* Diff Tab Header */}
            <div className="diff-header">
                <div className="diff-header-title">
                    <Icons.JsonIcon />
                    <span style={{ color: '#cccccc' }}>experiences.json (Working Tree)</span>
                </div>
                <button className="diff-close-btn" onClick={() => setShowDiff(false)}>
                    Close Diff
                </button>
            </div>

            {/* Split Editor */}
            <div className="diff-split-container">
                
                {/* --- LEFT SIDE: ORIGINAL (HEAD) --- */}
                <div className="diff-pane left">
                    <div className="diff-pane-label">// HEAD (Original)</div>
                    
                    <div className="timeline-column" style={{ maxWidth: '100%' }}>
                        <h2 className="column-heading">
                            <span style={{ color: '#4fc1ff' }}>//</span> PROFESSIONAL
                        </h2>
                        
                        <div className="timeline-container">
                            <div className="timeline-item">
                                <div className="timeline-dot dot-blue active"></div>
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

                {/* --- RIGHT SIDE: MODIFIED (WORKING TREE) --- */}
                <div className="diff-pane">
                    <div className="diff-pane-label">// Working Tree (Modified)</div>
                    
                    <div className="timeline-column" style={{ maxWidth: '100%' }}>
                        <h2 className="column-heading">
                            <span style={{ color: '#4fc1ff' }}>//</span> PROFESSIONAL
                        </h2>
                        
                        <div className="timeline-container">
                            
                            {/* THE GLOWING GREEN ADDITION */}
                            <div className="timeline-item" style={{ borderLeftColor: '#23d18b' }}>
                                <div className="timeline-dot" style={{ backgroundColor: '#23d18b', borderColor: '#23d18b', boxShadow: '0 0 0 4px rgba(35, 209, 139, 0.2)' }}></div>
                                
                                <div className="diff-addition-box">
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

                            {/* The existing Teleport Internship */}
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
    const [isChangesOpen, setIsChangesOpen] = useState(true);
    const [isGraphOpen, setIsGraphOpen] = useState(true);

    return (
        <div className="sidebar git-panel-container">
            
            <div className="sidebar-header" style={{ padding: '0 15px', height: '35px', display: 'flex', alignItems: 'center', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px' }}>
                <span>SOURCE CONTROL</span>
            </div>

            {/* UPPER SECTION */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
                
                <div className="git-section-header" onClick={() => setIsChangesOpen(!isChangesOpen)}>
                    <div style={{ width: '20px', display: 'flex', justifyContent: 'center' }}>
                        {isChangesOpen ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
                    </div>
                    <span className="git-section-title">Changes</span>
                    <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', paddingRight: '10px' }}>1</span>
                </div>

                {isChangesOpen && (
                    <div style={{ paddingBottom: '10px' }}>
                        <div className="git-commit-container">
                            <input type="text" className="git-commit-input" placeholder="Message (Ctrl+Enter to commit)" />
                            <div className="git-commit-btn">✓ Commit</div>
                        </div>

                        <div style={{ marginTop: '4px' }}>
                            <div className="git-file-item" onClick={() => { setShowDiff(true); setDiffFile('experiences.json'); }}>
                                <Icons.JsonIcon />
                                <span style={{ flex: 1 }}>experiences.json</span>
                                <span className="git-file-status">M</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* LOWER SECTION: Dynamic SVG Graph */}
            <div style={{ borderTop: '1px solid var(--border)' }}>
                
                <div className="git-section-header" onClick={() => setIsGraphOpen(!isGraphOpen)}>
                    <div style={{ width: '20px', display: 'flex', justifyContent: 'center', marginTop: '4px' }}>
                        {isGraphOpen ? <Icons.ChevronDown /> : <Icons.ChevronRight />}
                    </div>
                    <span className="git-section-title" style={{ marginTop: '4px' }}>Graph</span>
                </div>

                {isGraphOpen && (
                    <div style={{ padding: '10px 15px' }}>
                        {/* Calculate height dynamically based on number of commits */}
                        <svg width="100%" height={gitHistoryData.length * 30 + 20} viewBox={`0 0 280 ${gitHistoryData.length * 30 + 20}`}>
                            {/* Main vertical line */}
                            <line x1="20" y1="20" x2="20" y2={gitHistoryData.length * 30} stroke="#1dadf0" strokeWidth="2"/>
                            
                            {/* Map through data to draw dots and text dynamically! */}
                            {gitHistoryData.map((commit, idx) => {
                                const yPos = 30 + (idx * 30);
                                return (
                                    <React.Fragment key={idx}>
                                        <circle cx="20" cy={yPos} r="5" fill="#1dadf0" />
                                        <text 
                                            x="35" 
                                            y={yPos + 4} 
                                            fill={commit.highlight ? "#9cdcfe" : (commit.muted ? "#888888" : "#cccccc")} 
                                            fontSize="12" 
                                            fontWeight={commit.highlight ? "bold" : "normal"}
                                        >
                                            {commit.message}
                                        </text>
                                    </React.Fragment>
                                );
                            })}
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};