import React, { useState, useEffect } from 'react';
import './SkillsView.css';

const skillsData = {
  header: {
    status: "always_learning",
    passion: "immovable",
    charateristic: "adaptable"
  },
  categories: [
    {
      id: "languages",
      title: "PROGRAMMING LANGUAGES",
      skills: [
        { name: "Dart", level: 95, color: "#00B4AB" },
        { name: "JavaScript", level: 90, color: "#F7DF1E" },
        { name: "Python", level: 85, color: "#3776AB" },
        { name: "C++", level: 75, color: "#00599C" },
        { name: "Java", level: 70, color: "#E76F00" },
        { name: "SQL", level: 88, color: "#336791" },
        { name: "HTML/CSS", level: 92, color: "#E34F26" }
      ]
    },
    {
      id: "frontend",
      title: "MOBILE FRAMEWORKS",
      skills: [
        { name: "Flutter", level: 95, color: "#02569B" }
      ]
    },
    {
      id: "backend",
      title: "BACKEND FRAMEWORKS",
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Express.js", level: 82, color: "#336791" }
      ]
    },
    {
      id: "databases",
      title: "DATABASES",
      skills: [
        { name: "PostgreSQL", level: 85, color: "#336791" },
        { name: "MySQL", level: 80, color: "#4479A1" },
        { name: "MongoDB", level: 78, color: "#47A248" },
        { name: "NoSQL", level: 75, color: "#00ED64" }
      ]
    },
    {
      id: "cloud",
      title: "CLOUD & BAAS",
      skills: [
        { name: "Google Cloud Platform", level: 80, color: "#4285F4" },
        { name: "Microsoft Azure", level: 75, color: "#0078D4" },
        { name: "Firebase", level: 90, color: "#FFCA28" },
        { name: "Supabase", level: 85, color: "#3ECF8E" }
      ]
    },
    {
      id: "testing",
      title: "TESTING & AUTOMATION",
      skills: [
        { name: "Karate Framework", level: 85, color: "#F7931E" },
        { name: "Cucumber BDD", level: 80, color: "#23D96C" },
        { name: "Postman", level: 90, color: "#FF6C37" },
        { name: "Swagger UI", level: 85, color: "#85EA2D" }
      ]
    },
    {
      id: "architecture",
      title: "ARCHITECTURE & DEVOPS",
      skills: [
        { name: "RESTful API Dev", level: 90, color: "#FF6C37" },
        { name: "CI/CD Integration", level: 82, color: "#2088FF" },
        { name: "JWT Authentication", level: 88, color: "#336791" },
        { name: "TensorFlow Lite", level: 75, color: "#FF6F00" },
        { name: "OOP Principles", level: 95, color: "#00D4AA" }
      ]
    },
    {
      id: "tools",
      title: "TOOLS & VERSION CONTROL",
      skills: [
        { name: "Git/GitHub", level: 90, color: "#F05032" },
        { name: "Jira", level: 85, color: "#0052CC" },
        { name: "Slack", level: 92, color: "#4A154B" },
        { name: "Notion", level: 88, color: "#336791" },
        { name: "Miro", level: 80, color: "#FFD02F" },
        { name: "Figma", level: 80, color: "#F24E1E" },
        { name: "Visily", level: 75, color: "#6366F1" }
      ]
    }
  ],
  methodologies: ["Agile (Scrum / Kanban)"],
  languages: [
    { name: "Bahasa Melayu", level: "Native", flag: "MY" },
    { name: "English", level: "Proficient", flag: "ENG" }
  ],
  softSkills: [
    "Leadership", "Problem-Solving", "Adaptability", "Project Management",
    "Proactive Learning", "Team Collaboration", "Communication", "Resilience"
  ],
  alsoFamiliar: [
    "Cucumber", "Karate", "Swagger", "TensorFlow Lite", 
    "Azure DevOps", "GCP Cloud Functions", "Miro", "Visily"
  ]
};

const SkillBar = ({ name, level, color, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div 
          className="skill-fill" 
          style={{ 
            width: `${width}%`, 
            background: color,
            boxShadow: `0 0 6px ${color}40`
          }}
        />
      </div>
    </div>
  );
};

export const SkillsView = () => {
  return (
    <div className="skills-container animate-view">
      {/* Header */}
      <div className="skills-header-comment">// skills.json — tech stack & tools I actually use</div>
      <h1 className="skills-title">Skills</h1>
      <div className="skills-meta">
        {'{ '}
        <span className="highlight-blue">"status"</span>: <span className="string-orange">"{skillsData.header.status}"</span>,{' '}
        <span className="highlight-blue">"passion"</span>: <span className="string-orange">"{skillsData.header.passion}"</span>,{' '}
        <span className="highlight-blue">"charateristic"</span>: <span className="string-orange">"{skillsData.header.charateristic}"</span>
        {' }'}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillsData.categories.map((category, catIndex) => (
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
        <span className="method-tag">{skillsData.methodologies[0]}</span>
      </div>

      {/* Spoken Languages */}
      <h3 className="section-heading">SPOKEN LANGUAGES</h3>
      <div className="languages-grid">
        {skillsData.languages.map(lang => (
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
        {skillsData.softSkills.map((skill) => (
          <span key={skill} className="soft-skill-tag">{skill}</span>
        ))}
      </div>

      {/* Also Familiar With */}
      <h3 className="section-heading">ALSO FAMILIAR WITH</h3>
      <div className="familiar-card">
        {skillsData.alsoFamiliar.map((item) => (
          <span key={item} className="familiar-tag">{item}</span>
        ))}
      </div>
    </div>
  );
};