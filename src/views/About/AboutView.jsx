import React from "react";
import { Icons } from "../../components/icons/Icons";
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
          // who I am · what I do · where I build
        </span>
      </div>

      {/* Intro Card */}
      <div className="about-card intro-card">
        <p>
          Hi! I'm <span className="highlight-blue">Muhammad Arshad</span>, a
          Computer Science graduate building my career in quality engineering
          and test automation. My software development background helps me
          understand how applications are designed, while my QA experience
          enables me to approach them from the perspective of reliability, risk
          and software quality.
          <br />
          <br />
          During my QA Automation internship at{" "}
          <span className="highlight-blue">Teleport</span>, I worked with
          large-scale enterprise systems supporting high-volume air logistics
          operations. I translated business requirements into test scenarios,
          automated API and end-to-end workflows using Karate, investigated
          defects and supported software releases through CI/CD pipelines.
          <br />
          <br />I aim to bridge the gap between development and testing by
          designing meaningful tests, building maintainable automation and
          helping engineering teams deliver software that users can trust.
          Whether I am investigating a difficult defect or facing down a heavy
          lift at the gym, I approach challenges with the same discipline and
          resilience until the job is done.
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
              Strengthening test design, defect investigation and risk-based
              testing
            </span>
          </div>

          <div className="focus-item">
            <span className="focus-icon">
              <Icons.CodeSmall />
            </span>
            <span>
              Learning Playwright, JavaScript and TypeScript for modern web
              automation
            </span>
          </div>

          <div className="focus-item">
            <span className="focus-icon">
              <Icons.Mobile />
            </span>
            <span>
              Applying software development knowledge to improve testability and
              system reliability
            </span>
          </div>
        </div>
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
          <div className="edu-date">Oct 2022 - Mar 2026</div>
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
