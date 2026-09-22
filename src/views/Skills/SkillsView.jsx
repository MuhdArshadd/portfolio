import React from 'react';
import { techSkillsData } from '../../data/index.js';
import './SkillsView.css';

export const SkillsView = () => {
  return (
    <div className="skills-container animate-view">
      
      {/* Header */}
      <div className="skills-header-comment">// skills.json — tech stack & tools I actually use</div>
      <h1 className="skills-title">Skills</h1>
      
      <div className="skills-meta">
        {'{ '}
        <span className="highlight-blue">"identity"</span>: <span className="string-orange">"{techSkillsData.header.identity}"</span>,{' '}
        <span className="highlight-blue">"focus"</span>: <span className="string-orange">"{techSkillsData.header.professionalFocus}"</span>{' '}
        {' }'}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {techSkillsData.categories.map((category) => (
          <div key={category.id} className="skill-card">
            <h3 className="skill-category-title" style={{ borderBottomColor: `${category.accent}66` }}>{category.title}</h3>
            <p className="skill-category-description">{category.description}</p>
            <div className="skill-tag-list">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-capability" style={{ borderColor: `${category.accent}55` }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Methodologies */}
      <h3 className="section-heading">METHODOLOGIES</h3>
      <div className="methodology-card">
        {techSkillsData.methodologies.map((methodology) => (
          <span className="method-tag" key={methodology}>{methodology}</span>
        ))}
      </div>

      {/* Spoken Languages */}
      <h3 className="section-heading">SPOKEN LANGUAGES</h3>
      <div className="languages-grid">
        {techSkillsData.languages.map(lang => (
          <div key={lang.name} className="language-card">
            <span className="lang-flag">{lang.flag}</span>
            <div className="lang-info">
              <span className="lang-name">{lang.name}</span>
              <span className="lang-level" style={{ 
                color: lang.level === 'Native' ? '#4ec9b0' : '#ce9178' 
              }}>
                {lang.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="section-heading">SOFT SKILLS</h3>
      <div className="soft-skills-card">
        {techSkillsData.softSkills.map((skill) => (
          <span key={skill} className="soft-skill-tag">{skill}</span>
        ))}
      </div>

      {/* Also Familiar With */}
      <h3 className="section-heading">ALSO FAMILIAR WITH</h3>
      <div className="familiar-card">
        {techSkillsData.alsoFamiliar.map((item) => (
          <span key={item} className="familiar-tag">{item}</span>
        ))}
      </div>
      
    </div>
  );
};
