import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../icons/Icons';

export const ChatPanel = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hi! I'm Cad Copilot. How can I help you learn more about Cad?" }
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
                <span>CAD COPILOT</span>
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