import React from 'react';
import {portfolioData} from '../../data/index'

export const SkillsView = () => (
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