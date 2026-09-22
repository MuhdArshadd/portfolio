import React, { useState, useEffect } from 'react';
import { projectsData } from '../../data/index.js';
import './ProjectsView.css';

const projectLinkLabels = {
  github: {
    card: 'GitHub →',
    modal: 'View on GitHub →'
  },
  gitlab: {
    card: 'GitLab →',
    modal: 'View on GitLab →'
  },
  website: {
    card: 'Live Site →',
    modal: 'Visit Live Site →'
  },
  demo: {
    card: 'YouTube Demo →',
    modal: 'Watch Demo →'
  }
};

const getProjectLinkLabel = (type, context) => (
  projectLinkLabels[type]?.[context] ?? 'Open Link →'
);

// ==========================================
// 1. PROJECT CARD COMPONENT
// ==========================================
const ProjectCard = ({ project, onClick }) => (
  <article
    className={`project-card ${project.featured ? 'featured' : ''}`}
    onClick={() => onClick(project)}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClick(project);
      }
    }}
    role="button"
    tabIndex="0"
    aria-label={`View details for ${project.title}`}
  >
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
              {getProjectLinkLabel(link.type, 'card')}
            </a>
          ))}
        </div>

        {project.featured && (
          <div className="project-status featured-project">
            Featured Project
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
  </article>
);

// ==========================================
// 2. PROJECT MODAL COMPONENT
// ==========================================
const ProjectModal = ({ project, isClosing, onClose, onBackdropClick }) => {
  if (!project) return null;

  return (
    <div className={`modal-backdrop ${isClosing ? 'closing' : ''}`} onClick={onBackdropClick}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        
        <div className="modal-header">
          <div className="modal-categories">
            {project.categories.map((cat, idx) => (
              <span key={cat}>
                <span className="modal-category">{cat}</span>
                {idx < project.categories.length - 1 && <span className="category-dot">•</span>}
              </span>
            ))}
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close project details">×</button>
        </div>

        <h2 className="modal-title" id="project-modal-title">{project.title}</h2>

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
                {getProjectLinkLabel(link.type, 'modal')}
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

  const projectSections = [
    {
      id: 'quality',
      title: 'Quality Engineering / Testing',
      description: 'Focused projects demonstrating browser automation, unit testing, test design and repeatable CI workflows.'
    },
    {
      id: 'development',
      title: 'Software Development',
      description: 'Mobile, backend and full-stack systems built through university, hackathon and client project work.'
    }
  ];

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
        <span style={{ color: '#6a9955' }}>// projects.js : quality engineering + software development</span>
      </div>
      <h1 className="projects-title">Projects</h1>
      <p className="projects-intro">
        Testing projects show how I validate software; development projects show how I design and build it. HeartCare remains my flagship full-stack mobile project.
      </p>

      {projectSections.map((section) => (
        <section className="project-section" key={section.id} aria-labelledby={`${section.id}-projects-title`}>
          <div className="project-section-header">
            <h2 id={`${section.id}-projects-title`} className="project-section-title">{section.title}</h2>
            <p className="project-section-description">{section.description}</p>
          </div>
          <div className="projects-grid">
            {projectsData
              .filter((project) => project.projectArea === section.id)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={openModal}
                />
              ))}
          </div>
        </section>
      ))}

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
