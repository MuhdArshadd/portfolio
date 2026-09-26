import React from "react";
import { Icons } from "../../components/icons/Icons";
import { portfolioData } from "../../data";
import "./AboutView.css";
import "../index.css";

export const AboutView = () => {
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
          <br />
          <br />
          My strongest professional experience comes from a six-month QA
          Automation internship at{" "}
          <span className="highlight-blue">Teleport</span>. There, I worked with
          logistics order-management workflows and translated requirements into
          test scenarios, developed 50+ Karate and Cucumber regression tests,
          performed functional and integration testing, investigated defects
          with developers and contributed to repeatable test execution through
          GCP Cloud Build. The automation reduced a repeatable regression run
          from more than one hour manually to approximately ten minutes.
          <br />
          <br />
          That combination lets me understand how software is built and how it
          fails. Quality Engineering and Test Automation are my primary
          professional direction, while my backend and mobile foundation also
          supports junior Software Engineering roles where development,
          debugging and system reliability matter.
        </p>
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

      <h2 className="section-heading">CERTIFICATIONS &amp; PROFESSIONAL LEARNING</h2>

      <div className="about-card credential-card">
        {portfolioData.certificationsAndLearning.map((credential) => (
          <div className="credential-item" key={credential.id}>
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

      {/* Bottom Spacing */}
      <div style={{ height: "40px" }}></div>
    </div>
  );
};
