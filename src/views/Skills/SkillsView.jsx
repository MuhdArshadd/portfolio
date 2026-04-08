import React from 'react';
import { techSkillsData } from '../../data/index.js';
import { SkillBar } from '../../components/ui/SkillBar';
import './SkillsView.css';

export const SkillsView = () => {
  return (
    <div className="skills-container animate-view">
      
      {/* Header */}
      <div className="skills-header-comment">// skills.json — tech stack & tools I actually use</div>
      <h1 className="skills-title">Skills</h1>
      
      <div className="skills-meta">
        {'{ '}
        <span className="highlight-blue">"status"</span>: <span className="string-orange">"{techSkillsData.header.status}"</span>,{' '}
        <span className="highlight-blue">"passion"</span>: <span className="string-orange">"{techSkillsData.header.passion}"</span>,{' '}
        <span className="highlight-blue">"charateristic"</span>: <span className="string-orange">"{techSkillsData.header.charateristic}"</span>
        {' }'}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {techSkillsData.categories.map((category, catIndex) => (
          <div key={category.id} className="skill-card">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                  delay={(catIndex * 100) + (skillIndex * 50)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Methodologies */}
      <h3 className="section-heading">METHODOLOGIES</h3>
      <div className="methodology-card">
        <span className="method-tag">{techSkillsData.methodologies[0]}</span>
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