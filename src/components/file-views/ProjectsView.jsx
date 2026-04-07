import React from 'react';
import {portfolioData} from '../../data/index'

export const ProjectsView = () => (
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