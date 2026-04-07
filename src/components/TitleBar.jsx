import React, { useState, useEffect } from 'react';

export const TitleBar = () => {
    // 1. State to track how many times they clicked
    const [minCount, setMinCount] = useState(0);
    const [closeCount, setCloseCount] = useState(0);
    
    // 2. State to handle the popup's visibility and text
    const [popup, setPopup] = useState({ visible: false, text: '' });

    // 3. Arrays of taunts!
    const minimizeMessages = [
        "Minimizing a VS Code inside a browser.. wait what?",
        "Is there an interesting thing other than my portfolio??",
        "You want to watch something aaa 👀",
        "Your girlfriend discord you right now?",
        "I'm like a persistent notification, you can't ignore me forever!"
    ];

    const closeMessages = [
        "You.. you don't like my portfolio :(?",
        "Is it because I'm still a junior or vibe coded?",
        "Plz don't leave me without a rating...",
        "Damn you still insist on leaving huh",
        "Alright, I'll let you go... just close the actual browser tab!"
    ];

    // 4. Click Handlers (Now with endless looping)
    const handleMinimize = () => {
        // Grab the current message
        setPopup({ visible: true, text: minimizeMessages[minCount] });
        
        // Increase the count, but if it hits the length of the array, wrap back to 0
        setMinCount(prev => (prev + 1) % minimizeMessages.length);
    };

    const handleMaximize = async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
                setPopup({ visible: true, text: "Immersive mode activated! 🚀" });
            } else {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                }
            }
        } catch (err) {
            setPopup({ visible: true, text: "Your browser blocked fullscreen mode!" });
        }
    };

    const handleClose = () => {
        // Grab the current message
        setPopup({ visible: true, text: closeMessages[closeCount] });
        
        // Increase the count, wrap back to 0 when it reaches the end
        setCloseCount(prev => (prev + 1) % closeMessages.length);
    };

    // 5. Auto-hide the popup after 2.5 seconds
    useEffect(() => {
        if (popup.visible) {
            const timer = setTimeout(() => {
                setPopup({ visible: false, text: '' });
            }, 2500);
            return () => clearTimeout(timer); // Cleanup the timer if they click again fast
        }
    }, [popup.visible, popup.text]);

    return (
        <div className="title-bar" style={{ position: 'relative' }}>
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
            
            {/* Window Controls Area */}
            <div className="window-controls" style={{ display: 'flex', alignItems: 'center', gap: '0', position: 'relative' }}>
                
                {/* The Floating Popup */}
                {popup.visible && (
                    <div style={{
                        position: 'absolute',
                        top: '35px', // Drops it right below the buttons
                        right: '5px',
                        backgroundColor: '#252526', // Matches VS Code sidebar color
                        border: '1px solid #007acc', // VS Code blue accent
                        color: '#cccccc',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        whiteSpace: 'nowrap',
                        zIndex: 1000,
                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                    }}>
                        {popup.text}
                    </div>
                )}

                {/* Minimize Button */}
                <div 
                    className="window-btn" 
                    onClick={handleMinimize}
                    style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', cursor: 'pointer' }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="1" y="5" width="10" height="2" /></svg>
                </div>

                {/* Maximize Button */}
                <div 
                    className="window-btn" 
                    onClick={handleMaximize}
                    style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', cursor: 'pointer' }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1.5" y="1.5" width="9" height="9" /></svg>
                </div>

                {/* Close Button */}
                <div 
                    className="window-btn" 
                    onClick={handleClose}
                    style={{ width: '46px', height: '30px', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', cursor: 'pointer' }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="2" y1="2" x2="10" y2="10" /><line x1="10" y1="2" x2="2" y2="10" /></svg>
                </div>
            </div>
        </div>
    );
};