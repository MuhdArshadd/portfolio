import React, { useState, useEffect } from 'react';
import './ProjectsView.css';

const projectsData = [
  {
    id: 1,
    categories: ["MOBILE", "AI", "HEALTHCARE"],
    title: "HeartCare - AI Cardiovascular Assistant",
    description: "Award-winning mobile app for early awareness and preventive care of Non-Communicable Diseases (NCDs) in Malaysia. Features on-device AI risk assessment, family tracking, and a smart treatment planner.",
    tech: ["Flutter", "Node.js", "TensorFlow Lite", "PostgreSQL", "OpenAI"],
    links: [
        { type: "github", url: "https://github.com/MuhdArshadd/HeartCare" },
        { type: "demo", url: "https://youtu.be/nRaeWM9NVCU" }
    ],
    status: "MyIPO Registered",
    details: {
      challenge: "NCDs require early awareness and preventive care. Families need a reliable, secure way to monitor high-risk members and provide instant support in emergencies.",
      solution: "Developed a decoupled mobile architecture separating on-device AI UI from cloud processing. Integrated TensorFlow Lite for offline predictions and Google Maps for real-time family location tracking.",
      features: [
          "On-Device AI Risk Assessment via TensorFlow Lite (trained on 70k+ entries)", 
          "Family Mode Tracking with FCM Push Notifications", 
          "AI-Generated Smart Treatment Planner powered by OpenAI", 
          "Health Metric & Symptom Logging (BP, Glucose, BMI)"
      ],
      outcome: "Won Gold at iDRIVE 2025, Silver at InnoGEN 2026, and Silver at WINSTEM 2025. Officially registered under the Intellectual Property Corporation of Malaysia (MyIPO)."
    }
  },
  {
    id: 2,
    categories: ["MOBILE", "AI", "TOURISM"],
    title: "TourEase - Smart Heritage Guide",
    description: "Intelligent tourism mobile platform offering personalized recommendations, real-time updates, and an interactive AI assistant to help tourists explore Malaysia's heritage. 1st Place at DICRATHON 2024.",
    tech: ["Flutter", "Dart", "OpenAI API", "Google Maps API", "Azure SQL"],
    links: [
        { type: "demo", url: "https://youtu.be/gQyQ8sYruE4" }
    ],
    status: "Completed",
    details: {
      challenge: "Tourists face issues with unpersonalized support, lack of reliable event data, and overcrowding at popular heritage attractions in Malaysia.",
      solution: "Built an AI-driven, mobile-first platform providing real-time info on crowd levels, AI-assisted guidance, and turn-by-turn navigation.",
      features: [
          "Interactive Map with turn-by-turn navigation and crowd levels", 
          "Multilingual AI Chatbot for virtual tourist assistance", 
          "Personalized AI-driven destination recommendations", 
          "Real-time alerts for events and attraction statuses"
      ],
      outcome: "Awarded 1st Place (Best Smart Tourism Solution) at DICRATHON 2024 for innovation in digital tourism."
    }
  },
  {
    id: 3,
    categories: ["MOBILE", "DATA AUTOMATION", "SOCIAL IMPACT"],
    title: "MYCare - Community Support Hub",
    description: "Mobile application designed to centralize access to essential support services for underserved communities, featuring live data automated via Python web scraping.",
    tech: ["Flutter", "Python", "Selenium", "Azure PostgreSQL", "OpenAI"],
    links: [
        { type: "github", url: "https://github.com/MuhdArshadd/MYCare" },
        { type: "demo", url: "https://youtu.be/Q9NCwTdgixY" }
    ],
    status: "Completed",
    details: {
      challenge: "Young adults in low-income communities often struggle to find centralized, real-time information regarding food banks, medical services, and skill-building programs.",
      solution: "Engineered a cross-platform mobile app that aggregates live community data using Python automated web scraping scripts, guided by an intelligent chatbot.",
      features: [
          "Real-Time Data via automated Python scraping (BeautifulSoup/Selenium)", 
          "AI-Powered Chatbot integrated with OpenAI for user guidance", 
          "Google Maps/Places integration for locating nearby food banks", 
          "Skill-Building Module linked to Harvard Online & Coursera"
      ],
      outcome: "Successfully bridged the gap between marginalized communities and support services while enhancing full-stack and automation skills."
    }
  },
  {
    id: 4,
    categories: ["FULL STACK", "WEB DEV", "E-COMMERCE"],
    title: "Grillz - Restaurant Ordering System",
    description: "Full-stack web application developed for a burger establishment. Supports both online ordering and walk-in QR-code scanning, managed through a centralized staff dashboard.",
    tech: ["PHP", "JavaScript", "HTML/CSS", "Azure PostgreSQL", "XAMPP"],
    links: [
        { type: "github", url: "https://github.com/MuhdArshadd/Grillz" }
    ],
    status: "Prototype",
    details: {
      challenge: "Restaurants need a unified system to handle both digital walk-in orders (QR codes) and remote online orders without confusing the kitchen staff.",
      solution: "Developed a role-based full-stack PHP application integrating secure cloud databases and real-time dashboard updates.",
      features: [
          "Role-based access for Staff and Customers", 
          "Walk-in ordering via table QR Code scanning", 
          "Digital menu with cart management and checkout", 
          "Automated email confirmations via PHPMailer"
      ],
      outcome: "Delivered a fully functional production-ready database architecture hosted on Azure PostgreSQL."
    }
  },
  {
    id: 5,
    categories: ["DESKTOP", "OOP", "MANAGEMENT"],
    title: "Car Service Maintenance System",
    description: "Object-Oriented Programming (OOP) system developed in Java. Facilitates customer car service requests, payment processing, and staff job assignments.",
    tech: ["Java", "Eclipse", "MySQL", "XAMPP"],
    links: [
        { type: "demo", url: "https://youtu.be/DDuG1yB9RN0" }
    ],
    status: "Completed",
    details: {
      challenge: "Manual tracking of car service bookings, mechanic job assignments, and invoice generation leads to operational inefficiencies.",
      solution: "Built a robust Java-based desktop application utilizing pure Object-Oriented principles and an interconnected MySQL database.",
      features: [
          "Secure user authentication for Staff and Customers", 
          "End-to-end service booking and schedule management", 
          "Payment processing and automated invoice receipt generation", 
          "Staff dashboard for job assignment and review"
      ],
      outcome: "Created a highly structured, modular codebase demonstrating strong foundational knowledge of Java and OOP patterns."
    }
  },
  {
    id: 6,
    categories: ["CLI", "C++", "DATABASES"],
    title: "Tuition Centre Management System",
    description: "Command Line Interface (CLI) application addressing operational inefficiencies in secondary education institutions. Handles enrollment, fee tracking, and feedback.",
    tech: ["C++", "MySQL", "Visual Studio", "OOP"],
    links: [
        { type: "github", url: "https://github.com/MuhdArshadd/TutionCenter" }
    ],
    status: "Completed",
    details: {
      challenge: "Tuition centers face administrative bottlenecks managing student enrollments, tracking unpaid fees, and updating curriculum quotas.",
      solution: "Engineered a scalable C++ application utilizing MySQL Connector to manipulate and track real-time educational data.",
      features: [
          "Dynamic Enrollment/Unroll module with real-time quota updates", 
          "Automated tuition fee tracking and payment status indicators", 
          "Subject management module for curriculum flexibility", 
          "Secure tutor and administrator account management"
      ],
      outcome: "Successfully prototyped a digital transformation solution for post-COVID academic administration."
    }
  }
];

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
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedProject]);

  return (
    <div className="projects-container animate-view">
      {/* Header */}
      <div className="projects-header-comment">
        <span style={{ color: '#6a9955' }}>// projects.js : architecture, algorithms & applications</span>
      </div>
      <h1 className="projects-title">Projects</h1>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => openModal(project)}
          >
            {/* Card Header */}
            <div className="project-header">
              <div className="project-meta-row">
                <div className="project-categories">
                  {project.categories.map((cat, idx) => (
                    <span key={cat}>
                      <span className="category-name">{cat}</span>
                      {idx < project.categories.length - 1 && <span className="category-dot">•</span>}
                    </span>
                  ))}
                </div>
                
                {/* DYNAMIC LINKS (GitHub or YouTube) */}
                <div className="project-links" onClick={(e) => e.stopPropagation()}>
                  {project.links.map((link) => (
                    <a 
                      key={link.type} 
                      href={link.url} 
                      className={`project-link ${link.type}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type === 'github' ? 'GitHub →' : 'YouTube Demo →'}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Content */}
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            {/* Tech Stack */}
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div 
          className={`modal-backdrop ${isClosing ? 'closing' : ''}`}
          onClick={handleBackdropClick}
        >
          <div className={`modal-content ${isClosing ? 'closing' : ''}`}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-categories">
                {selectedProject.categories.map((cat, idx) => (
                  <span key={cat}>
                    <span className="modal-category">{cat}</span>
                    {idx < selectedProject.categories.length - 1 && <span className="category-dot">•</span>}
                  </span>
                ))}
              </div>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>

            {/* Modal Title */}
            <h2 className="modal-title">{selectedProject.title}</h2>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-section-title">Challenge</h3>
                <p className="modal-text">{selectedProject.details.challenge}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Solution</h3>
                <p className="modal-text">{selectedProject.details.solution}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Key Features</h3>
                <ul className="modal-list">
                  {selectedProject.details.features.map((feature, idx) => (
                    <li key={idx} className="modal-list-item">
                      <span className="list-bullet">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Outcome</h3>
                <p className="modal-text outcome">{selectedProject.details.outcome}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <div className="modal-tech">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="modal-tech-tag">{tech}</span>
                ))}
              </div>
              
              {/* DYNAMIC MODAL LINKS */}
              <div className="modal-links">
                {selectedProject.links.map((link) => (
                  <a 
                    key={link.type} 
                    href={link.url} 
                    className={`modal-link ${link.type}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.type === 'github' ? 'View Source Code →' : 'Watch Demo →'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};