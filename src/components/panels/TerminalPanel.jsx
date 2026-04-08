import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../icons/Icons';

export const TerminalPanel = ({ toggleTerminal , height}) => {
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
        const handleClearTerminal = () => {
            setHistory([]);
        };
        
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
                return 'CLEAR_SIGNAL'; // Special flag handled below
                
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

            case 'cadcopilot':
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
        <div style={{ 
            height: height ? `${height}px` : '250px', 
            background: '#1e1e1e', 
            borderTop: '1px solid var(--border)', 
            display: 'flex', 
            flexDirection: 'column',
            fontFamily: "'Consolas', 'Courier New', monospace",
            fontSize: '13px',
            color: '#cccccc',
            zIndex: 50
        }}>
            {/* Terminal Header Tabs */}
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', padding: '0 10px' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ padding: '8px 15px', borderBottom: '1px solid #4fc1ff', color: '#e7e7e7', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.5px' }}>Terminal</div>
                    <div style={{ padding: '8px 15px', color: '#858585', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.5px', cursor: 'pointer' }}>Output</div>
                    <div style={{ padding: '8px 15px', color: '#858585', textTransform: 'uppercase', fontSize: '11px', letterSpacing: '0.5px', cursor: 'pointer' }}>Debug Console</div>
                </div>
                
                {/* Close Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ cursor: 'pointer' }} onClick={toggleTerminal}>
                        <Icons.Close />
                    </span>
                </div>
            </div>

            {/* Terminal Body */}
            <div 
                style={{ flex: 1, overflowY: 'auto', padding: '10px 15px', cursor: 'text' }}
                onClick={() => inputRef.current && inputRef.current.focus()}
            >
                {/* Standard Windows Startup Text */}
                <div style={{ marginBottom: '15px', opacity: 0.8 }}>
                    Microsoft Windows [Version 10.0.26200.8037]<br/>
                    (c) Microsoft Corporation. All rights reserved.
                </div>

                {/* History Map */}
                {history.map((item, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <span style={{ color: '#00ff00' }}>{defaultPath}</span>
                            <span>{item.command}</span>
                        </div>
                        {item.output && (
                            <div style={{ whiteSpace: 'pre-wrap', marginTop: '4px', color: item.output.includes('not recognized') ? '#f48771' : '#cccccc' }}>
                                {item.output}
                            </div>
                        )}
                    </div>
                ))}

                {/* Current Input Line */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ color: '#00ff00' }}>{defaultPath}</span>
                    <input 
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        spellCheck="false"
                        autoComplete="off"
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            color: '#cccccc',
                            fontFamily: "'Consolas', 'Courier New', monospace",
                            fontSize: '13px',
                            outline: 'none'
                        }}
                    />
                </div>
                {/* Invisible div to scroll to */}
                <div ref={bottomRef} />
            </div>
        </div>
    );
};