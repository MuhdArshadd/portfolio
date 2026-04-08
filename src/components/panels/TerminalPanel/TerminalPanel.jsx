import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../../icons/Icons';
import './TerminalPanel.css';

export const TerminalPanel = ({ toggleTerminal, height }) => {
    // 1. Terminal State
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const defaultPath = "C:\\Users\\portfolio>";

    // 2. Auto-focus and Auto-scroll
    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    useEffect(() => {
        if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }, [history]);
    
    useEffect(() => {
        const handleClearTerminal = () => setHistory([]);
        window.addEventListener('clear-terminal', handleClearTerminal);
        return () => window.removeEventListener('clear-terminal', handleClearTerminal);
    }, []);

    // 3. The Command Engine
    const processCommand = (rawInput) => {
        const trimmed = rawInput.trim();
        if (!trimmed) return '';
        
        const args = trimmed.split(' ');
        const cmd = args[0].toLowerCase();

        switch (cmd) {
            case 'help':
                return `Available commands:
  help      - Show this help message
  whoami    - Display current user privileges
  cls       - Clear the terminal screen
  echo      - Print text to the terminal
  date      - Display current system date and time
  hire      - Initiate candidate onboarding protocol
  start     - Open specific files (try 'start resume')
  cadbot    - Wake up the AI assistant`;
            
            case 'whoami':
                return 'desktop\\recruiter_guest';
                
            case 'cls':
            case 'clear':
                return 'CLEAR_SIGNAL'; 
                
            case 'echo':
                return args.slice(1).join(' ');
                
            case 'date':
                return new Date().toString();
                
            case 'hire':
                return 'Excellent choice. Initializing offer letter protocols... \n(Just kidding, but you can reach me via the contact page!)';
                
            case 'start':
                if (args[1] === 'resume') {
                    window.open('/resume.pdf', '_blank');
                    return 'Opening resume.pdf in a new tab...';
                }
                return `The system cannot find the file specified: ${args[1] || ''}`;

            case 'cadbot':
                return 'Cad Copilot is currently resting in the Activity Bar. Click the robot icon to chat!';

            default:
                return `'${cmd}' is not recognized as an internal or external command,\noperable program or batch file.\nType 'help' to see available commands.`;
        }
    };

    // 4. Handle hitting 'Enter'
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const output = processCommand(input);
            
            if (output === 'CLEAR_SIGNAL') {
                setHistory([]);
            } else {
                setHistory(prev => [...prev, { command: input, output }]);
            }
            setInput('');
        }
    };

    return (
        <div 
            className="terminal-container"
            style={{ height: height ? `${height}px` : '250px' }} // Keep dynamic height inline!
        >
            {/* Terminal Header Tabs */}
            <div className="terminal-header">
                <div className="terminal-tabs">
                    <div className="terminal-tab active">Terminal</div>
                    <div className="terminal-tab">Output</div>
                    <div className="terminal-tab">Debug Console</div>
                </div>
                
                {/* Close Button */}
                <div className="terminal-actions">
                    <span className="terminal-close-btn" onClick={toggleTerminal}>
                        <Icons.Close />
                    </span>
                </div>
            </div>

            {/* Terminal Body */}
            <div className="terminal-body" onClick={() => inputRef.current && inputRef.current.focus()}>
                
                {/* Standard Windows Startup Text */}
                <div className="terminal-startup-text">
                    Microsoft Windows [Version 10.0.26200.8037]<br/>
                    (c) Microsoft Corporation. All rights reserved.
                </div>

                {/* History Map */}
                {history.map((item, index) => (
                    <div key={index} className="terminal-history-item">
                        <div className="terminal-command-line">
                            <span className="terminal-path">{defaultPath}</span>
                            <span>{item.command}</span>
                        </div>
                        {item.output && (
                            <div className={`terminal-output ${item.output.includes('not recognized') ? 'error' : ''}`}>
                                {item.output}
                            </div>
                        )}
                    </div>
                ))}

                {/* Current Input Line */}
                <div className="terminal-input-wrapper">
                    <span className="terminal-path">{defaultPath}</span>
                    <input 
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        spellCheck="false"
                        autoComplete="off"
                        className="terminal-input"
                    />
                </div>
                
                {/* Invisible div to scroll to */}
                <div ref={bottomRef} />
            </div>
        </div>
    );
};