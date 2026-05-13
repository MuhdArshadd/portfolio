import React from 'react';
import { Icons } from '../../components/icons/Icons';
import './AboutView.css';
import '../index.css';

export const AboutView = () => {
    return (
        <div className="about-container animate-view">
            
            {/* Top Header */}
            <div className="about-header-comment">
                <span style={{ color: '#6a9955' }}>// about.html - Muhammad Arshad</span>
            </div>
            
            <h1 className="about-title">About Me</h1>
            
            <div className="about-subtitle">
                <span style={{ color: '#6a9955' }}>// who I am · what I do · where I build</span>
            </div>

            {/* Intro Card */}
            <div className="about-card intro-card">
                <p>
                    Hi! I'm <span className="highlight-blue">Muhammad Arshad</span>, a software engineer who believes technology should be utilized to solve real-world bottlenecks and tangibly improve daily lives. 
                    <br /><br />
                    Having recently wrapped up a QA Automation Internship at <span className="highlight-blue">Teleport</span>, I was exposed to the realities of large-scale enterprise systems. Working in high-stakes air logistics—where software processes thousands of parcels per minute—taught me the critical importance of system uptime. I specialise in bridging the gap between dynamic <span className="highlight-blue">mobile engineering</span>, <span className="highlight-blue">test automation</span>, and <span className="highlight-blue">AI solutions</span>.
                    <br /><br />
                    Whether I am translating business requirements into automated CI/CD pipelines, building AI-driven health apps, or facing down a heavy lift at the gym, my mindset remains the same: I tackle complex, intimidating challenges with discipline and resilience until the job is done.
                </p>
            </div>

            {/* Current Focus Section */}
            <h2 className="section-heading">CURRENT FOCUS</h2>
            <div className="about-card focus-card">
                <div className="focus-grid">
                    <div className="focus-item">
                        <span className="focus-icon"><Icons.Mobile /></span>
                        <span>Building mobile and web experiences</span>
                    </div>
                    <div className="focus-item">
                        <span className="focus-icon"><Icons.CheckMark /></span>
                        <span>Ensuring system reliability through QA Automation & STLC</span>
                    </div>
                    <div className="focus-item">
                        <span className="focus-icon"><Icons.CodeSmall /></span>
                        <span>Competing in hackathons to build AI-for-good solutions and explore innovative ideas</span>
                    </div>
                    <div className="focus-item">
                        <span className="focus-icon"><Icons.Search /></span>
                        <span>Integrating on-device machine learning (TensorFlow Lite) and LLM APIs into mobile environments</span>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <h2 className="section-heading">EDUCATION</h2>
            
            <div className="about-card edu-card">
                <div className="edu-header">
                    <div className="edu-title">
                        <span className="edu-icon"><Icons.Graduation /></span> Universiti Teknikal Malaysia Melaka (UTeM)
                    </div>
                    <div className="edu-date">Oct 2022 - Mar 2026</div>
                </div>
                <div className="edu-program">Bachelor of Computer Science in Software Development (Hons.)</div>
                <div className="edu-details">
                    <span className="cgpa">CGPA: 3.88 (First Class Honours)</span>
                    <div className="edu-desc" style={{ marginTop: '8px' }}>
                        Graduated with top academic standing. Specialised in building scalable architectures and full-stack development with a strictly quality-first mindset.
                    </div>
                </div>
            </div>

            <div className="about-card edu-card">
                <div className="edu-header">
                    <div className="edu-title">
                        <span className="edu-icon"><Icons.School /></span> Kolej Matrikulasi Selangor (KMS)
                    </div>
                    <div className="edu-date">2021 - 2022</div>
                </div>
                <div className="edu-program">Sains Fizikal (Physical Science)</div>
                <div className="edu-details">
                    <span className="cgpa">CGPA: 4.0 | MUET (BAND 4)</span>
                    <div className="edu-desc">
                        During the challenging COVID-19 era, I managed to excel academically and was shortlisted for the Pembiayaan Pendidikan Boleh Ubah Yayasan Bank Rakyat, which converted into a full scholarship.
                    </div>
                </div>
            </div>

            <div className="about-card edu-card">
                <div className="edu-header">
                    <div className="edu-title">
                        <span className="edu-icon"><Icons.School /></span> SMK Bandar Baru Sungai Long
                    </div>
                    <div className="edu-date">2016 - 2020</div>
                </div>
                <div className="edu-program">Sijil Pelajaran Malaysia (SPM)</div>
                <div className="edu-details">
                    <span className="cgpa">Grade: 8A 1B+</span>
                    <div className="edu-desc">
                        Active in Science and Mathematics events, Kompang Club, Kawad Kaki, and Sports.
                    </div>
                </div>
            </div>

            {/* Bottom Spacing */}
            <div style={{ height: '40px' }}></div>
        </div>
    );
};