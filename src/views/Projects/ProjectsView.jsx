import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/index.js';
import './ProjectsView.css';

// ==========================================
// 1. PROJECT CARD COMPONENT
// ==========================================
const ProjectCard = ({ project, onClick }) => (
  <div className="project-card" onClick={() => onClick(project)}>
    <div className="project-header">
      
      {/* Row 1: Categories on Top */}
      <div className="project-categories" style={{ marginBottom: '15px' }}>
        {project.categories.map((cat, idx) => (
          <span key={cat}>
            <span className="category-name">{cat}</span>
            {idx < project.categories.length - 1 && <span className="category-dot">•</span>}
          </span>
        ))}
      </div>
      
      {/* Row 2: Links on Left, Status on Right */}
      <div className="project-meta-row">
        <div className="project-links" onClick={(e) => e.stopPropagation()}>
          {project.links.map((link) => (
            <a 
              key={link.type} 
              href={link.url} 
              className={`project-link ${link.type}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.type === 'github' ? 'GitHub →' : link.type === 'website' ? 'Live Site →' : 'YouTube Demo →'}
            </a>
          ))}
        </div>

        {/* The New Conditional Status Badge */}
        {project.status === "In Progress" && (
          <div className="project-status in-progress">
            <span className="status-dot"></span> In Progress
          </div>
        )}
      </div>

    </div>

    <h2 className="project-title">{project.title}</h2>
    <p className="project-description">{project.description}</p>

    <div className="project-tech">
      {project.tech.map((tech) => (
        <span key={tech} className="tech-tag">{tech}</span>
      ))}
    </div>
  </div>
);

// ==========================================
// 2. PROJECT MODAL COMPONENT
// ==========================================
const ProjectModal = ({ project, isClosing, onClose, onBackdropClick }) => {
  if (!project) return null;

  return (
    <div className={`modal-backdrop ${isClosing ? 'closing' : ''}`} onClick={onBackdropClick}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`}>
        
        <div className="modal-header">
          <div className="modal-categories">
            {project.categories.map((cat, idx) => (
              <span key={cat}>
                <span className="modal-category">{cat}</span>
                {idx < project.categories.length - 1 && <span className="category-dot">•</span>}
              </span>
            ))}
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <h2 className="modal-title">{project.title}</h2>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="modal-section-title">Challenge</h3>
            <p className="modal-text">{project.details.challenge}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Solution</h3>
            <p className="modal-text">{project.details.solution}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Key Features</h3>
            <ul className="modal-list">
              {project.details.features.map((feature, idx) => (
                <li key={idx} className="modal-list-item">
                  <span className="list-bullet">→</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Outcome</h3>
            <p className="modal-text outcome">{project.details.outcome}</p>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-tech">
            {project.tech.map((tech) => (
              <span key={tech} className="modal-tech-tag">{tech}</span>
            ))}
          </div>
          
          <div className="modal-links">
            {project.links.map((link) => (
              <a 
                key={link.type} 
                href={link.url} 
                className={`modal-link ${link.type}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.type === 'github' ? 'View Source Code →' : link.type === 'website' ? 'Visit Live Site →' : 'Watch Demo →'}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN VIEW COMPONENT
// ==========================================
export const ProjectsView = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      document.body.style.overflow = 'unset';
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  return (
    <div className="projects-container animate-view">
      
      <div className="projects-header-comment">
        <span style={{ color: '#6a9955' }}>// projects.js : architecture, algorithms & applications</span>
      </div>
      <h1 className="projects-title">Projects</h1>

      {/* Render the Grid using our extracted Card component */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={openModal} 
          />
        ))}
      </div>

      {/* Render the extracted Modal component */}
      <ProjectModal 
        project={selectedProject} 
        isClosing={isClosing} 
        onClose={closeModal} 
        onBackdropClick={handleBackdropClick} 
      />
      
    </div>
  );
};