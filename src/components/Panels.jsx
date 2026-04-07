import React from 'react';
import { Icons } from './Icons';
import { useState, useRef, useEffect } from 'react';

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

export const GitPanel = ({ setShowDiff, setDiffFile }) => (
    <div className="sidebar" style={{ width: '300px' }}>
        <div className="sidebar-header">
            <span>SOURCE CONTROL</span>
            <span style={{ cursor: 'pointer' }}>⋯</span>
        </div>
        <div className="sidebar-content">
            <div style={{ padding: '10px 15px', fontSize: '12px', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    <span>Changes</span>
                </div>
                <div className="file-item" onClick={() => { setShowDiff(true); setDiffFile('about.html'); }} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#e2c08d', fontWeight: 'bold' }}>M</span>
                    <Icons.HtmlIcon />
                    <span>about.html</span>
                </div>
            </div>
        </div>
        <div style={{ padding: '15px', borderTop: '1px solid var(--border)', marginTop: '10px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>Git Graph</div>
            <svg width="100%" height="120" viewBox="0 0 200 120">
                <line x1="30" y1="20" x2="30" y2="100" stroke="#888" strokeWidth="2" />
                <path d="M 30 40 Q 60 40 60 60 T 60 80" fill="none" stroke="#888" strokeWidth="2" />
                <circle cx="30" cy="20" r="5" fill="#4ec9b0" />
                <circle cx="30" cy="40" r="5" fill="#4ec9b0" />
                <circle cx="60" cy="60" r="5" fill="#ce9178" />
                <circle cx="30" cy="80" r="5" fill="#4ec9b0" />
                <circle cx="30" cy="100" r="5" fill="#4ec9b0" />
                <text x="45" y="25" fill="#ccc" fontSize="10">main</text>
                <text x="70" y="65" fill="#ccc" fontSize="10">feature/about-update</text>
                <text x="45" y="105" fill="#ccc" fontSize="10">HEAD</text>
            </svg>
        </div>
    </div>
);

export const ExtensionsPanel = () => (
    <div className="sidebar" style={{ width: '300px' }}>
        <div className="sidebar-header">
            <span>EXTENSIONS</span>
            <span style={{ cursor: 'pointer' }}>⋯</span>
        </div>
        <div className="sidebar-content" style={{ padding: '10px' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '13px' }}>No extensions installed</div>
        </div>
    </div>
);

export const ChatPanel = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hi! I'm Cad Bot. How can I help you learn more about Cad?" }
    ]);

    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const qaOptions = [
        { q: "Who is Cad?", a: "Cad (Arshad) is a passionate developer from Malaysia focused on building intelligent, scalable systems!" },
        { q: "What is your tech stack?", a: "Cad specializes in React, Node.js, and Test Automation (like Karate and API testing)." },
        { q: "Any standout projects?", a: "Definitely! Cad built 'HeartCare', an award-winning health app, and 'GovEase', an AI hackathon build." },
        { q: "How can I hire you?", a: "You can email arshadmuhd50@gmail.com or connect on LinkedIn. Cad is currently hunting for a permanent role!" }
    ];

    const handleAsk = (qa) => {
        setMessages(prev => [...prev, { sender: 'user', text: qa.q }]);
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'bot', text: qa.a }]);
        }, 400);
    };

    return (
        <div className="sidebar" style={{ width: '300px', display: 'flex', flexDirection: 'column', borderLeft: '1px solid var(--border)', borderRight: 'none' }}>
            <div className="sidebar-header">
                <span>CAD BOT</span>
                {/* Close button */}
                <span style={{ cursor: 'pointer' }} onClick={onClose}><Icons.Close /></span>
            </div>
            
            <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                        <div style={{
                            maxWidth: '85%', padding: '8px 12px', borderRadius: '6px', fontSize: '13px', lineHeight: '1.4',
                            backgroundColor: msg.sender === 'user' ? '#007acc' : '#333333',
                            color: msg.sender === 'user' ? '#ffffff' : '#cccccc',
                            borderBottomRightRadius: msg.sender === 'user' ? '0px' : '6px',
                            borderBottomLeftRadius: msg.sender === 'bot' ? '0px' : '6px',
                        }}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div style={{ padding: '15px', borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-darker)' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Ask a question:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {qaOptions.map((qa, idx) => (
                        <button 
                            key={idx} onClick={() => handleAsk(qa)}
                            style={{ textAlign: 'left', padding: '6px 10px', backgroundColor: 'transparent', border: '1px solid var(--border)', color: 'var(--blue)', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', transition: 'all 0.2s ease' }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'rgba(79, 193, 255, 0.1)'; e.currentTarget.style.borderColor = 'var(--blue)'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                        >
                            {qa.q}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};