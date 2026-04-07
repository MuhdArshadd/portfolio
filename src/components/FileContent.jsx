import React from 'react';
import { portfolioData } from '../data/index';
import { Icons } from './icons/Icons';

export const FileContent = ({ activeFile }) => {
    switch (activeFile) {
        case 'home.tsx':
            return (
                <div className="portfolio-section">
                    <div className="code-line"><span className="line-num">1</span><span className="line-content"><span className="comment">// Welcome to my portfolio</span></span></div>
                    <div className="code-line"><span className="line-num">2</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">3</span><span className="line-content"><span className="keyword">import</span> React <span className="keyword">from</span> <span className="string">'react'</span>;</span></div>
                    <div className="code-line"><span className="line-num">4</span><span className="line-content"><span className="keyword">import</span> {'{ Passion, Skills }'} <span className="keyword">from</span> <span className="string">'./life'</span>;</span></div>
                    <div className="code-line"><span className="line-num">5</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">6</span><span className="line-content"><span className="keyword">const</span> <span className="function">Portfolio</span> = () =&gt; {'{'}</span></div>
                    <div className="code-line"><span className="line-num">7</span><span className="line-content">  <span className="keyword">const</span> developer = {'{'}</span></div>
                    <div className="code-line"><span className="line-num">8</span><span className="line-content">    name: <span className="string">"{portfolioData.name}"</span>,</span></div>
                    <div className="code-line"><span className="line-num">9</span><span className="line-content">    role: <span className="string">"{portfolioData.role}"</span>,</span></div>
                    <div className="code-line"><span className="line-num">10</span><span className="line-content">    passion: <span className="string">"Building amazing web experiences"</span>,</span></div>
                    <div className="code-line"><span className="line-num">11</span><span className="line-content">    available: <span className="keyword">true</span></span></div>
                    <div className="code-line"><span className="line-num">12</span><span className="line-content">  {'}'};</span></div>
                    <div className="code-line"><span className="line-num">13</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">14</span><span className="line-content">  <span className="keyword">return</span> (</span></div>
                    <div className="code-line"><span className="line-num">15</span><span className="line-content">    &lt;<span className="tag">div</span> className=<span className="string">"welcome"</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">16</span><span className="line-content">      &lt;<span className="tag">h1</span>&gt;Hello, I'm {portfolioData.name}&lt;/<span className="tag">h1</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">17</span><span className="line-content">      &lt;<span className="tag">p</span>&gt;{portfolioData.role}&lt;/<span className="tag">p</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">18</span><span className="line-content">      &lt;<span className="tag">Status</span> available={'{'}developer.available{'}'} /&gt;</span></div>
                    <div className="code-line"><span className="line-num">19</span><span className="line-content">    &lt;/<span className="tag">div</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">20</span><span className="line-content">  );</span></div>
                    <div className="code-line"><span className="line-num">21</span><span className="line-content">{'}'};</span></div>
                    <div className="code-line"><span className="line-num">22</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">23</span><span className="line-content"><span className="keyword">export default</span> Portfolio;</span></div>
                </div>
            );

        case 'about.html':
            return (
                <div className="portfolio-section">
                    <div className="code-line"><span className="line-num">1</span><span className="line-content"><span className="comment">&lt;!-- About Me --&gt;</span></span></div>
                    <div className="code-line"><span className="line-num">2</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">3</span><span className="line-content">&lt;<span className="tag">section</span> <span className="attr">class</span>=<span className="string">"about"</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">4</span><span className="line-content">  &lt;<span className="tag">h1</span>&gt;About Me&lt;/<span className="tag">h1</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">5</span><span className="line-content">  &lt;<span className="tag">p</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">6</span><span className="line-content">    I'm a passionate developer with 5+ years of experience</span></div>
                    <div className="code-line"><span className="line-num">7</span><span className="line-content">    building scalable web applications. I love solving complex</span></div>
                    <div className="code-line"><span className="line-num">8</span><span className="line-content">    problems and creating intuitive user experiences.</span></div>
                    <div className="code-line"><span className="line-num">9</span><span className="line-content">  &lt;/<span className="tag">p</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">10</span><span className="line-content">  </span></div>
                    <div className="code-line"><span className="line-num">11</span><span className="line-content">  &lt;<span className="tag">h2</span>&gt;What I Do&lt;/<span className="tag">h2</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">12</span><span className="line-content">  &lt;<span className="tag">ul</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">13</span><span className="line-content">    &lt;<span className="tag">li</span>&gt;🚀 Full Stack Development&lt;/<span className="tag">li</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">14</span><span className="line-content">    &lt;<span className="tag">li</span>&gt;📱 Responsive Web Design&lt;/<span className="tag">li</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">15</span><span className="line-content">    &lt;<span className="tag">li</span>&gt;☁️ Cloud Architecture&lt;/<span className="tag">li</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">16</span><span className="line-content">    &lt;<span className="tag">li</span>&gt;🤖 AI Integration&lt;/<span className="tag">li</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">17</span><span className="line-content">  &lt;/<span className="tag">ul</span>&gt;</span></div>
                    <div className="code-line"><span className="line-num">18</span><span className="line-content">&lt;/<span className="tag">section</span>&gt;</span></div>
                </div>
            );

        case 'projects.js':
            return (
                <div className="portfolio-section">
                    <div className="code-line"><span className="line-num">1</span><span className="line-content"><span className="comment">// My Projects</span></span></div>
                    <div className="code-line"><span className="line-num">2</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">3</span><span className="line-content"><span className="keyword">const</span> projects = [</span></div>
                    {portfolioData.projects.map((project, idx) => (
                        <React.Fragment key={idx}>
                            <div className="code-line"><span className="line-num">{idx * 6 + 4}</span><span className="line-content">  {'{'}</span></div>
                            <div className="code-line"><span className="line-num">{idx * 6 + 5}</span><span className="line-content">    name: <span className="string">"{project.name}"</span>,</span></div>
                            <div className="code-line"><span className="line-num">{idx * 6 + 6}</span><span className="line-content">    desc: <span className="string">"{project.description}"</span>,</span></div>
                            <div className="code-line"><span className="line-num">{idx * 6 + 7}</span><span className="line-content">    tech: [{project.tech.map(t => <span key={t} className="string">"{t}"</span>).reduce((prev, curr) => [prev, ', ', curr])}],</span></div>
                            <div className="code-line"><span className="line-num">{idx * 6 + 8}</span><span className="line-content">    status: <span className="string">"{project.status}"</span></span></div>
                            <div className="code-line"><span className="line-num">{idx * 6 + 9}</span><span className="line-content">  {'}'}{idx < portfolioData.projects.length - 1 ? ',' : ''}</span></div>
                        </React.Fragment>
                    ))}
                    <div className="code-line"><span className="line-num">{portfolioData.projects.length * 6 + 4}</span><span className="line-content">];</span></div>
                    <div className="code-line"><span className="line-num">{portfolioData.projects.length * 6 + 5}</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">{portfolioData.projects.length * 6 + 6}</span><span className="line-content"><span className="keyword">export default</span> projects;</span></div>
                </div>
            );

        case 'skills.json':
            return (
                <div className="portfolio-section">
                    <div className="code-line"><span className="line-num">1</span><span className="line-content">{'{'}</span></div>
                    <div className="code-line"><span className="line-num">2</span><span className="line-content">  <span className="attr">"skills"</span>: {'{'}</span></div>
                    {portfolioData.skills.map((category, idx) => (
                        <React.Fragment key={category.category}>
                            <div className="code-line"><span className="line-num">{idx * 6 + 3}</span><span className="line-content">    <span className="attr">"{category.category}"</span>: [</span></div>
                            {category.items.map((skill, sIdx) => (
                                <div className="code-line" key={skill}>
                                    <span className="line-num">{idx * 6 + 4 + sIdx}</span>
                                    <span className="line-content">      <span className="string">"{skill}"</span>{sIdx < category.items.length - 1 ? ',' : ''}</span>
                                </div>
                            ))}
                            <div className="code-line"><span className="line-num">{idx * 6 + 4 + category.items.length}</span><span className="line-content">    ]{idx < portfolioData.skills.length - 1 ? ',' : ''}</span></div>
                        </React.Fragment>
                    ))}
                    <div className="code-line"><span className="line-num">27</span><span className="line-content">  {'}'}</span></div>
                    <div className="code-line"><span className="line-num">28</span><span className="line-content">{'}'}</span></div>
                </div>
            );

        case 'contact.css':
            return (
                <div className="portfolio-section">
                    <div className="code-line"><span className="line-num">1</span><span className="line-content"><span className="comment">/* Contact Styles */</span></span></div>
                    <div className="code-line"><span className="line-num">2</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">3</span><span className="line-content"><span className="attr">.contact</span> {'{'}</span></div>
                    <div className="code-line"><span className="line-num">4</span><span className="line-content">  <span className="attr">email</span>: <span className="string">"{portfolioData.contact.email}"</span>;</span></div>
                    <div className="code-line"><span className="line-num">5</span><span className="line-content">  <span className="attr">github</span>: <span className="string">"{portfolioData.contact.github}"</span>;</span></div>
                    <div className="code-line"><span className="line-num">6</span><span className="line-content">  <span className="attr">linkedin</span>: <span className="string">"{portfolioData.contact.linkedin}"</span>;</span></div>
                    <div className="code-line"><span className="line-num">7</span><span className="line-content">  <span className="attr">status</span>: <span className="keyword">available</span>;</span></div>
                    <div className="code-line"><span className="line-num">8</span><span className="line-content">{'}'}</span></div>
                    <div className="code-line"><span className="line-num">9</span><span className="line-content"></span></div>
                    <div className="code-line"><span className="line-num">10</span><span className="line-content"><span className="comment">/* Let's connect! */</span></span></div>
                    <div className="code-line"><span className="line-num">11</span><span className="line-content"><span className="attr">.cta</span>:<span className="function">hover</span> {'{'}</span></div>
                    <div className="code-line"><span className="line-num">12</span><span className="line-content">  <span className="attr">transform</span>: <span className="function">scale</span>(<span className="number">1.1</span>);</span></div>
                    <div className="code-line"><span className="line-num">13</span><span className="line-content">  <span className="attr">transition</span>: <span className="keyword">all</span> <span className="number">0.3s</span> <span className="function">ease</span>;</span></div>
                    <div className="code-line"><span className="line-num">14</span><span className="line-content">{'}'}</span></div>
                </div>
            );

            case 'Extension: Cad Bot':
            return (
                <div style={{ padding: '30px', maxWidth: '900px', color: '#cccccc', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                    
                    {/* Header Section */}
                    <div style={{ display: 'flex', gap: '25px', marginBottom: '30px' }}>
                        {/* Big Icon */}
                        <div style={{ width: '110px', height: '110px', background: 'linear-gradient(135deg, #007acc, #004d80)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                            <div style={{ transform: 'scale(2.5)' }}>
                                <Icons.Bot />
                            </div>
                        </div>
                        
                        {/* Title and Meta Data */}
                        <div>
                            <h1 style={{ margin: '0 0 5px 0', color: '#ffffff', fontSize: '28px', fontWeight: '600' }}>Cad Bot</h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#858585', fontSize: '13px', marginBottom: '15px' }}>
                                <span style={{ color: '#4fc1ff' }}>Aahana Bobade</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>⬇ 14,204</span>
                                <span style={{ color: '#cca700' }}>★★★★★ (5)</span>
                                <span style={{ color: '#c586c0' }}>♥ Sponsor</span>
                            </div>
                            <p style={{ margin: '0 0 15px 0', fontSize: '14px' }}>
                                Open/Run/Debug Portfolio Questions by leveraging the Activity Bar, Chat logic, and much more.
                            </p>
                            
                            {/* Action Buttons */}
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button style={{ background: '#333333', color: '#ffffff', border: '1px solid #3c3c3c', padding: '4px 12px', borderRadius: '3px', cursor: 'not-allowed' }}>Disable ⌄</button>
                                <button style={{ background: '#333333', color: '#ffffff', border: '1px solid #3c3c3c', padding: '4px 12px', borderRadius: '3px', cursor: 'not-allowed' }}>Uninstall ⌄</button>
                                <button style={{ background: '#333333', color: '#ffffff', border: '1px solid #3c3c3c', padding: '4px 8px', borderRadius: '3px', cursor: 'pointer' }}>⚙️</button>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div style={{ display: 'flex', gap: '25px', borderBottom: '1px solid #3c3c3c', marginBottom: '25px', textTransform: 'uppercase', fontSize: '12px' }}>
                        <div style={{ borderBottom: '2px solid #4fc1ff', color: '#ffffff', paddingBottom: '8px', cursor: 'pointer' }}>Details</div>
                        <div style={{ color: '#858585', paddingBottom: '8px', cursor: 'pointer' }}>Features</div>
                        <div style={{ color: '#858585', paddingBottom: '8px', cursor: 'pointer' }}>Changelog</div>
                    </div>

                    {/* Markdown Body */}
                    <div style={{ lineHeight: '1.6', fontSize: '14px' }}>
                        <h2 style={{ borderBottom: '1px solid #3c3c3c', paddingBottom: '8px', color: '#ffffff', fontWeight: 'normal', fontSize: '22px' }}>Cad Bot</h2>
                        
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', marginTop: '15px' }}>
                            <span style={{ background: '#333333', padding: '2px 8px', borderRadius: '3px', fontSize: '12px' }}>version 1.2.5</span>
                            <span style={{ background: '#007acc', color: 'white', padding: '2px 8px', borderRadius: '3px', fontSize: '12px' }}>installed globally</span>
                        </div>
                        
                        <p>
                            A conversational AI assistant natively integrated into the portfolio environment. 
                            Navigate the codebase, learn about tech stacks, and discover Easter eggs by simply asking Cad Bot!
                        </p>
                        
                        <h3 style={{ color: '#ffffff', marginTop: '30px', fontWeight: 'normal', fontSize: '18px' }}>Features</h3>
                        <p>Codelens will be added above each <code>Feature:</code>, <code>Scenario:</code> and <code>Scenario Outline:</code> ... just kidding. Here is what I actually do:</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>Context-aware portfolio guidance.</li>
                            <li>Instant answers about tech stacks (React, Test Automation, Node.js).</li>
                            <li>Pre-configured shortcut buttons for quick learning.</li>
                            <li>Built-in humor and self-awareness ("vibe coded").</li>
                        </ul>

                        <h3 style={{ color: '#ffffff', marginTop: '30px', fontWeight: 'normal', fontSize: '18px' }}>Sponsors</h3>
                        <p style={{ color: '#858585' }}>
                            This project is proudly sponsored by coffee, late-night debugging sessions, and the burning desire to finally land a permanent role!
                        </p>
                    </div>
                </div>
            );

        default:
            return <div>Select a file to view content</div>;
    }
};