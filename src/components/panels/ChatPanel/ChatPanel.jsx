import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../../icons/Icons';
import { chatData } from '../../../data/index.js';
import './ChatPanel.css'; 
import '../index.css';

export const ChatPanel = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hi! I'm Cad Copilot. How can I help you learn more about Cad?" }
    ]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleAsk = (qa) => {
        setMessages(prev => [...prev, { sender: 'user', text: qa.q }]);
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'bot', text: qa.a }]);
        }, 400);
    };

    return (
        <div className="chat-panel-container">
            {/* Header */}
            <div className="sidebar-header">
                <span>CAD COPILOT</span>
                <span style={{ cursor: 'pointer' }} onClick={onClose}><Icons.Close /></span>
            </div>
            
            {/* Message History */}
            <div className="chat-messages-container">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`chat-message-row ${msg.sender}`}>
                        <div className={`chat-bubble ${msg.sender}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Options */}
            <div className="chat-input-area">
                <div className="chat-input-label">Ask a question:</div>
                <div className="chat-options-list">
                    {chatData.map((qa, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => handleAsk(qa)}
                            className="chat-option-btn"
                        >
                            {qa.q}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};