import React, { useState, useEffect } from 'react';
import { Icons } from '../../components/icons/Icons';
import { rolesData } from '../../data/index.js';
import './HomeView.css';
import '../index.css';

export const HomeView = ({ openFile }) => {
    
    // --- TYPEWRITER STATE & LOGIC ---
    const [currentText, setCurrentText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const targetWord = rolesData[roleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const delay = (currentText === targetWord && !isDeleting) ? 2000 : typingSpeed;

        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === targetWord) {
                // Word is finished, start deleting
                setIsDeleting(true);
            } else if (isDeleting && currentText === '') {
                // Word is deleted, move to the next word
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % rolesData.length);
            } else {
                // Type or delete the next character
                const nextText = isDeleting 
                    ? targetWord.substring(0, currentText.length - 1)
                    : targetWord.substring(0, currentText.length + 1);
                setCurrentText(nextText);
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, roleIndex]);

    return (
        <div className="home-hero-container animate-view">
            {/* Greeting */}
            <div className="hero-greeting">
                // hello world !! Welcome to my portfolio
            </div>

            {/* Massive Name & Profile Picture */}
            <div className="hero-header-flex">
                <h1 className="hero-name hero-name-container">
                    <span className="name-first">Muhammad</span>
                    <br />
                    <span className="name-last">Arshad</span>
                </h1>
                
                {/* Circular Profile Picture Frame */}
                <div className="profile-pic-container">
                    <img 
                        src="src/assets/profile.jpg" 
                        alt="Muhammad Arshad" 
                        className="profile-pic"
                    />
                </div>
            </div>

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
                Bridging the gap between <span className="highlight">dynamic mobile engineering</span> and <span className="highlight">automated quality assurance</span>. I build scalable, <span className="highlight">AI-integrated applications</span> that deliver real value from the very first tap to the backend.
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
                    <div className="stat-number">3.88</div>
                    <div className="stat-label">CGPA (CS HONS)</div>
                </div>
                <div className="stat-box">
                    <div className="stat-number">5</div>
                    <div className="stat-label">INNOVATION MEDALS</div>
                </div>
                <div className="stat-box">
                    <div className="stat-number" style={{ color: '#4ec9b0' }}>KL/SELANGOR</div>
                    <div className="stat-label">PREFERRED LOCATION</div>
                </div>
                <div className="stat-box">
                    <div className="stat-number" style={{ color: '#4fc1ff' }}>YES</div>
                    <div className="stat-label">AVAILABLE FOR HIRE</div>
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
                <a href="src/assets/resume.pdf" target="_blank" rel="noreferrer" className="social-badge">
                    <Icons.File /> Resume
                </a>
            </div>
        </div>
    );
};