import React from 'react';
import './ExperiencesView.css';

export const ExperiencesView = () => {
    return (
        <div className="experiences-container animate-view">
            
            {/* Header Section */}
            <div className="exp-header-comment">
                <span style={{ color: '#6a9955' }}>// experience.json - professional & extracurricular journey</span>
            </div>
            
            <h1 className="exp-title">Experiences</h1>

            {/* Split Layout Container */}
            <div className="split-layout">
                
                {/* ========================================== */}
                {/* LEFT COLUMN: PROFESSIONAL CAREER           */}
                {/* ========================================== */}
                <div className="timeline-column">
                    <h2 className="column-heading">
                        <span style={{ color: '#4fc1ff' }}>//</span> PROFESSIONAL
                    </h2>
                    
                    <div className="timeline-container">
                        {/* Teleport Internship */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-blue active"></div>
                            <div className="timeline-date">Oct 2025 - Apr 2026</div>
                            <h3 className="timeline-role">Quality Assurance (Manual & Automation) Intern</h3>
                            <div className="timeline-company">@ Teleport Platforms Sdn. Bhd.</div>
                            <p className="timeline-desc">
                                Managed the Software Testing Life Cycle (STLC) for logistics business flows. Ensured zero-defect deployments and maintained high quality across production systems.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Karate Framework</span>
                                <span className="tech-badge">Java</span>
                                <span className="tech-badge">Cucumber(BDD)</span>
                                <span className="tech-badge">Postman</span>
                                <span className="tech-badge">Swagger UI</span>
                                <span className="tech-badge">CI/CD Integration</span>
                                <span className="tech-badge">Atlassian Jira</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========================================== */}
                {/* RIGHT COLUMN: ACTIVITIES & CURRICULUM      */}
                {/* ========================================== */}
                <div className="timeline-column">
                    <h2 className="column-heading">
                        <span style={{ color: '#c586c0' }}>//</span> ACTIVITIES
                    </h2>

                    <div className="timeline-container">
                        {/* 1. Multi-Award Winner (HeartCare) */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple active"></div>
                            <div className="timeline-date">2025 - 2026</div>
                            <h3 className="timeline-role">Multi-Award Winner Innovation</h3>
                            <div className="timeline-company">@ iDRIVE, InnoGEN & WINSTEM</div>
                            <p className="timeline-desc">
                                Secured Gold at iDRIVE 2025, and Silver at both InnoGEN 2026 and WINSTEM 2025 for 'HeartCare', an innovative mobile solution tackling cardiovascular health.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Fullstack Mobile App Dev</span>
                                <span className="tech-badge">Innovation</span>
                            </div>
                        </div>

                        {/* 2. KYouthXGIFT Distinction */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2025</div>
                            <h3 className="timeline-role">Distinction Graduate (Top 15%)</h3>
                            <div className="timeline-company">@ Khazanah Nasional KYouthXGIFT</div>
                            <p className="timeline-desc">
                                Completed an intensive industry-preparation and upskilling initiative, graduating in the top 15% of the cohort with distinction.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Career Prep</span>
                                <span className="tech-badge">Upskilling</span>
                            </div>
                        </div>

                        {/* 3. D’FTMK-A-THON Hackathon */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2025</div>
                            <h3 className="timeline-role">2nd Place Winner</h3>
                            <div className="timeline-company">@ CODE FOR INNOVATION Hackathon</div>
                            <p className="timeline-desc">
                                Competed in a 24-hour C++ hackathon tackling local waste management. Showcased rapid debugging by successfully rebuilding the core solution from scratch in under 12 hours.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">C++</span>
                                <span className="tech-badge">Rapid Problem Solving</span>
                            </div>
                        </div>

                        {/* 4. DICRATHON Hackathon */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2024</div>
                            <h3 className="timeline-role">1st Place Winner</h3>
                            <div className="timeline-company">@ Digital Creative Marathon (UPSI)</div>
                            <p className="timeline-desc">
                                Developed 'TourEase', a Flutter-based travel assistant. Handled backend integrations and API performance testing to digitize processes for Malaysian SME vendors.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Mobile Backend Dev</span>
                                <span className="tech-badge">API Integration</span>
                            </div>
                        </div>

                        {/* 5. IoT Bootcamp Mentor */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2024</div>
                            <h3 className="timeline-role">Bronze Award & IoT Mentor</h3>
                            <div className="timeline-company">@ STGEMS x SULAM Bootcamp</div>
                            <p className="timeline-desc">
                                Mentored primary students to build an IoT-based automated system using Micro:bit, securing the Bronze Award in the final exhibition phase for technical execution.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">IoT</span>
                                <span className="tech-badge">Leadership</span>
                                <span className="tech-badge">Mentorship</span>
                            </div>
                        </div>

                        {/* 6. YBR Scholarship */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2023</div>
                            <h3 className="timeline-role">Scholarship Recipient</h3>
                            <div className="timeline-company">@ Yayasan Bank Rakyat (YBR)</div>
                            <p className="timeline-desc">
                                Awarded the prestigious, bond-free YBR Scholarship in recognition of outstanding academic excellence and active extracurricular involvement.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Academic Excellence</span>
                                <span className="tech-badge">Scholar</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div style={{ height: '40px' }}></div>
        </div>
    );
};