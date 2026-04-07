import React from 'react';
import { portfolioData } from '../data/data';

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

        default:
            return <div>Select a file to view content</div>;
    }
};