import React, { useState } from "react";
import { Icons } from "../../components/icons/Icons";
import { portfolioData } from "../../data";
import "./AboutView.css";
import "../index.css";

export const AboutView = ({ openFile }) => {
  const [showFullSummary, setShowFullSummary] = useState(false);
  const [showAllCredentials, setShowAllCredentials] = useState(false);
  const [showEarlierEducation, setShowEarlierEducation] = useState(false);

  return (
    <div className="about-container animate-view">
      {/* Top Header */}
      <div className="about-header-comment">
        <span style={{ color: "#6a9955" }}>
          // about.html - Muhammad Arshad
        </span>
      </div>

      <h1 className="about-title">About Me</h1>

      <div className="about-subtitle">
        <span style={{ color: "#6a9955" }}>
          // software development foundation · quality engineering specialization
        </span>
      </div>

      {/* Intro Card */}
      <div className="about-card intro-card">
        <p>
          I&apos;m <span className="highlight-blue">Muhammad Arshad</span>, an
          early-career Software Engineer and First Class Honours Computer
          Science (Software Development) graduate from UTeM. My degree and
          project work gave me hands-on experience building backend services,
          REST APIs, mobile applications and data-driven systems with Node.js,
          Express, Flutter and SQL databases.
        </p>
        <div className={`intro-details ${showFullSummary ? "is-visible" : ""}`}>
          <p>
            My strongest professional experience comes from a six-month QA
            Automation internship at{" "}
            <span className="highlight-blue">Teleport</span>. There, I worked with
            logistics order-management workflows and translated requirements into
            test scenarios, developed 50+ Karate and Cucumber regression tests,
            performed functional and integration testing, investigated defects
            with developers and contributed to repeatable test execution through
            GCP Cloud Build. The automation reduced a repeatable regression run
            from more than one hour manually to approximately ten minutes.
          </p>
          <p>
            That combination lets me understand how software is built and how it
            fails. Quality Engineering and Test Automation are my primary
            professional direction, while my backend and mobile foundation also
            supports junior Software Engineering roles where development,
            debugging and system reliability matter.
          </p>
        </div>
        <button
          type="button"
          className="mobile-disclosure-button intro-disclosure"
          aria-expanded={showFullSummary}
          onClick={() => setShowFullSummary((current) => !current)}
        >
          <span>{showFullSummary ? "Show less" : "Read more"}</span>
          <span className="disclosure-chevron" aria-hidden="true"></span>
        </button>
      </div>

      {/* Current Focus Section */}
      <h2 className="section-heading">CURRENT FOCUS</h2>

      <div className="about-card focus-card">
        <div className="focus-grid">
          <div className="focus-item">
            <span className="focus-icon">
              <Icons.CheckMark />
            </span>
            <span>Building maintainable API and UI test automation</span>
          </div>

          <div className="focus-item">
            <span className="focus-icon">
              <Icons.Search />
            </span>
            <span>
              Designing and validating REST APIs, backend workflows and data
              contracts
            </span>
          </div>

          <div className="focus-item">
            <span className="focus-icon">
              <Icons.CodeSmall />
            </span>
            <span>
              Developing mobile applications and integrations with Flutter and
              Dart
            </span>
          </div>

          <div className="focus-item">
            <span className="focus-icon">
              <Icons.Mobile />
            </span>
            <span>
              Applying developer context to testability, debugging and system
              reliability
            </span>
          </div>
        </div>
      </div>

      <h2 className="section-heading">SELECTED RECOGNITION</h2>

      <div className="about-card recognition-panel">
        <div className="recognition-grid">
          {portfolioData.selectedRecognition.map((recognition) => (
            <article className="recognition-card" key={recognition.id}>
              <div className="recognition-category">{recognition.category}</div>
              <h3>{recognition.title}</h3>
              <ul>
                {recognition.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="recognition-link"
          onClick={() => openFile?.("experiences.json")}
        >
          View all experience &amp; recognition →
        </button>
      </div>

      <h2 className="section-heading">CERTIFICATIONS &amp; PROFESSIONAL LEARNING</h2>

      <div className={`about-card credential-card ${showAllCredentials ? "show-all" : ""}`}>
        {portfolioData.certificationsAndLearning.map((credential, index) => (
          <div
            className={`credential-item ${index >= 3 ? "credential-item-extra" : ""}`}
            key={credential.id}
          >
            <div>
              <div className="credential-name">{credential.name}</div>
              <div className="credential-note">
                {credential.note}
                {credential.link && (
                  <>
                    {" "}
                    <a
                      className="credential-link"
                      href={credential.link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {credential.link.label}
                    </a>
                    .
                  </>
                )}
              </div>
            </div>
            <span className={`credential-status ${credential.statusClass}`}>
              {credential.status}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="mobile-disclosure-button"
          aria-expanded={showAllCredentials}
          onClick={() => setShowAllCredentials((current) => !current)}
        >
          <span>{showAllCredentials ? "Show fewer credentials" : "Show all credentials"}</span>
          <span className="disclosure-chevron" aria-hidden="true"></span>
        </button>
      </div>

      {/* Education Section */}
      <h2 className="section-heading">EDUCATION</h2>

      <div className="about-card edu-card">
        <div className="edu-header">
          <div className="edu-title">
            <span className="edu-icon">
              <Icons.Graduation />
            </span>{" "}
            Universiti Teknikal Malaysia Melaka (UTeM)
          </div>
          <div className="edu-date">Oct 2022 - Apr 2026</div>
        </div>
        <div className="edu-program">
          Bachelor of Computer Science in Software Development (Hons.)
        </div>
        <div className="edu-details">
          <span className="cgpa">CGPA: 3.88 (First Class Honours)</span>
          <div className="edu-desc" style={{ marginTop: "8px" }}>
            Graduated with First Class Honours, developing a strong foundation
            in software engineering, application development, databases,
            software testing and system design.
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mobile-disclosure-button education-disclosure"
        aria-expanded={showEarlierEducation}
        onClick={() => setShowEarlierEducation((current) => !current)}
      >
        <span>{showEarlierEducation ? "Hide earlier education" : "Show earlier education"}</span>
        <span className="disclosure-chevron" aria-hidden="true"></span>
      </button>

      <div className={`earlier-education ${showEarlierEducation ? "is-visible" : ""}`}>
        <div className="about-card edu-card">
          <div className="edu-header">
            <div className="edu-title">
              <span className="edu-icon">
                <Icons.School />
              </span>{" "}
              Kolej Matrikulasi Selangor (KMS)
            </div>
            <div className="edu-date">2021 - 2022</div>
          </div>
          <div className="edu-program">Sains Fizikal (Physical Science)</div>
          <div className="edu-details">
            <span className="cgpa">CGPA: 4.0 | MUET (BAND 4)</span>
            <div className="edu-desc">
              During the challenging COVID-19 era, I managed to excel academically
              and was shortlisted for the Pembiayaan Pendidikan Boleh Ubah Yayasan
              Bank Rakyat, which converted into a full scholarship.
            </div>
          </div>
        </div>

        <div className="about-card edu-card">
          <div className="edu-header">
            <div className="edu-title">
              <span className="edu-icon">
                <Icons.School />
              </span>{" "}
              SMK Bandar Baru Sungai Long
            </div>
            <div className="edu-date">2016 - 2020</div>
          </div>
          <div className="edu-program">Sijil Pelajaran Malaysia (SPM)</div>
          <div className="edu-details">
            <span className="cgpa">Grade: 8A 1B+</span>
            <div className="edu-desc">
              Active in Science and Mathematics events, Kompang Club, Kawad Kaki,
              and Sports.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div style={{ height: "40px" }}></div>
    </div>
  );
};
