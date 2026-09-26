import React from 'react';
import './ExperiencesView.css';
import '../index.css';

export const ExperiencesView = () => {
    return (
        <div className="experiences-container animate-view">
            
            {/* Header Section */}
            <div className="exp-header-comment">
                <span style={{ color: '#6a9955' }}>// experience.json - professional engineering experience & recognition</span>
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
                            <h3 className="timeline-role">QA Automation Intern</h3>
                            <div className="timeline-company">@ Teleport Platforms Sdn. Bhd.</div>
                            <p className="timeline-desc">
                                Worked across automation, API testing and defect investigation for logistics order-management workflows in QA and UAT environments.
                            </p>
                            <ul className="timeline-achievements">
                                <li>• Developed 50+ Karate and Cucumber regression tests for order creation, retrieval and assignment workflows.</li>
                                <li>• Reduced a repeatable regression run from more than one hour manually to approximately ten minutes.</li>
                                <li>• Designed test cases covering expected behaviour, edge cases, test data, preconditions and integrations.</li>
                                <li>• Investigated failures through requests, responses, application behaviour and backend logs, then collaborated with developers to verify fixes.</li>
                                <li>• Contributed to GCP Cloud Build configuration for repeatable automated execution across QA and UAT.</li>
                            </ul>
                            <div className="timeline-tech">
                                <span className="tech-badge">Karate Framework</span>
                                <span className="tech-badge">Java</span>
                                <span className="tech-badge">Cucumber BDD</span>
                                <span className="tech-badge">Postman</span>
                                <span className="tech-badge">Swagger UI</span>
                                <span className="tech-badge">GCP Cloud Build</span>
                                <span className="tech-badge">Jira</span>
                                <span className="tech-badge">Bitbucket</span>
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
                        {/* 1. MyMahir TalentLabs */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple active"></div>
                            <div className="timeline-date">2026</div>
                            <h3 className="timeline-role">MyMahir TalentLabs — Associate Back-End Development</h3>
                            <div className="timeline-company">@ TalentLabs x MyMahir</div>
                            <p className="timeline-desc">
                                Selected for an industry-focused Train-&-Place programme covering backend development, Express.js, algorithms, coding practice, and career readiness to prepare participants for technology roles.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Backend Development</span>
                                <span className="tech-badge">Upskilling</span>
                                <span className="tech-badge">Career Readiness</span>
                            </div>
                        </div>

                        {/* 2. Multi-Award Winner (HeartCare) */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2025 - 2026</div>
                            <h3 className="timeline-role">HeartCare Innovation Awards</h3>
                            <div className="timeline-company">@ iDRIVE, InnoGEN & WINSTEM</div>
                            <p className="timeline-desc">
                                Secured Gold at iDRIVE 2025, and Silver at both InnoGEN 2026 and WINSTEM 2025 for 'HeartCare', an innovative mobile solution tackling cardiovascular health.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Full-Stack Mobile Development</span>
                                <span className="tech-badge">Innovation</span>
                            </div>
                        </div>

                        {/* 3. KYouthXGIFT Distinction */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2025</div>
                            <h3 className="timeline-role">KYouthXGIFT Distinction Graduate (Top 15%)</h3>
                            <div className="timeline-company">@ Khazanah Nasional</div>
                            <p className="timeline-desc">
                                Completed an intensive industry-preparation and upskilling initiative, graduating in the top 15% of the cohort with distinction.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Career Prep</span>
                                <span className="tech-badge">Upskilling</span>
                            </div>
                        </div>

                        {/* 4. D’FTMK-A-THON Hackathon */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2025</div>
                            <h3 className="timeline-role">UTeM Hackathon | 2nd Place Winner</h3>
                            <div className="timeline-company">@ CODE FOR INNOVATION Hackathon</div>
                            <p className="timeline-desc">
                                Competed in a 24-hour C++ hackathon tackling local waste management. Showcased rapid debugging by successfully rebuilding the core solution from scratch in under 12 hours.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">C++</span>
                                <span className="tech-badge">Rapid Problem Solving</span>
                            </div>
                        </div>

                        {/* 5. DICRATHON Hackathon */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2024</div>
                            <h3 className="timeline-role">UPSI DICRATHON | 1st Place Winner</h3>
                            <div className="timeline-company">@ Digital Creative Marathon (UPSI)</div>
                            <p className="timeline-desc">
                                Contributed to TourEase, a Flutter travel assistant, by integrating backend data and third-party APIs and validating responses with Postman and Python checks.
                            </p>
                            <div className="timeline-tech">
                                <span className="tech-badge">Mobile Backend Dev</span>
                                <span className="tech-badge">API Integration</span>
                            </div>
                        </div>

                        {/* 6. IoT Bootcamp Mentor */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2024</div>
                            <h3 className="timeline-role">UTEM Micro:bit Club | Bronze Award & IoT Mentor</h3>
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

                        {/* 7. YBR Scholarship */}
                        <div className="timeline-item">
                            <div className="timeline-dot dot-purple"></div>
                            <div className="timeline-date">2023</div>
                            <h3 className="timeline-role">Scholarship Recipient</h3>
                            <div className="timeline-company">@ Yayasan Bank Rakyat (YBR)</div>
                            <p className="timeline-desc">
                                Awarded the bond-free YBR Scholarship in recognition of academic performance and extracurricular involvement.
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
