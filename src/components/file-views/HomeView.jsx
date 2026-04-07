import React, { useState, useEffect } from 'react';
import { Icons } from '../icons/Icons';
import './HomeView.css';

export const HomeView = ({ openFile }) => {
    
    // --- TYPEWRITER STATE & LOGIC ---
    const roles = [
        "Android Developer", 
        "QA Automation Engineer", 
        "Software Engineer", 
        "Problem Solver"
    ];
    
    const [currentText, setCurrentText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const targetWord = roles[roleIndex];
        
        // Speeds: 100ms for typing, 50ms for deleting
        const typingSpeed = isDeleting ? 50 : 100;
        
        // Pause for 2 seconds when the word is fully typed out
        const delay = (currentText === targetWord && !isDeleting) ? 2000 : typingSpeed;

        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === targetWord) {
                // Word is finished, start deleting
                setIsDeleting(true);
            } else if (isDeleting && currentText === '') {
                // Word is deleted, move to the next word
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                // Type or delete the next character
                const nextText = isDeleting 
                    ? targetWord.substring(0, currentText.length - 1)
                    : targetWord.substring(0, currentText.length + 1);
                setCurrentText(nextText);
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, roleIndex, roles]);

    return (
        <div className="home-hero-container animate-view">
            {/* Greeting */}
            <div className="hero-greeting">
                // hello world !! Welcome to my portfolio
            </div>

            {/* Massive Name */}
            <h1 className="hero-name">
                <span className="name-first">Muhammad</span>
                <br />
                <span className="name-last">Arshad</span>
            </h1>

            {/* Badges */}
            <div className="hero-badges">
                <div className="badge"><span className="dot dot-green"></span> Android Developer</div>
                <div className="badge"><span className="dot dot-blue"></span> QA Automation Intern</div>
                <div className="badge"><span className="dot dot-purple"></span> Software Engineer</div>
            </div>

            {/* Typewriter Effect */}
            <div className="hero-typewriter">
                I can be your <span style={{ color: '#FFF6DA', fontWeight: 'bold' }}>{currentText}</span>
                <span className="cursor">|</span>
            </div>

            {/* Bio */}
            <p className="hero-bio">
                I live at the crossroads of <span className="highlight">mobile engineering</span>, <span className="highlight">test automation</span>, and <span className="highlight">AI-driven solutions</span>. I build applications that are genuinely <span className="highlight">user-centric and scalable</span>.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => openFile('projects.js')}>
                    <span style={{ color: '#ffd700' }}>📁</span> Projects
                </button>
                <button className="btn btn-outline" onClick={() => openFile('about.html')}>
                    <span style={{ color: '#c586c0' }}>👤</span> About Me
                </button>
                <button className="btn btn-outline" onClick={() => openFile('contact.css')}>
                    <span style={{ color: '#ce9178' }}>✉️</span> Contact
                </button>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats">
                <div className="stat-box">
                    <div className="stat-number">1+</div>
                    <div className="stat-label">YEARS EXP</div>
                </div>
                <div className="stat-box">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">AWARDS WON</div>
                </div>
                <div className="stat-box">
                    <div className="stat-number">∞</div>
                    <div className="stat-label">CURIOSITY</div>
                </div>
                <div className="stat-box">
                    <div className="stat-number">↑</div>
                    <div className="stat-label">ALWAYS LEARNING</div>
                </div>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
                <a href="https://github.com/MuhdArshadd" target="_blank" rel="noreferrer" className="social-badge">
                    <Icons.GitHub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/muhdarshad50/" target="_blank" rel="noreferrer" className="social-badge">
                    <Icons.LinkedIn /> LinkedIn
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="social-badge">
                    <Icons.File /> Resume
                </a>
            </div>
        </div>
    );
};