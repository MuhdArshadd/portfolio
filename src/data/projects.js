export const projectsData = [
  {
    id: 1,
    projectArea: "quality",
    categories: ["UI AUTOMATION", "END-TO-END TESTING"],
    title: "Cinema Booking Flow - Playwright Automation",
    description: "A JavaScript UI-automation practice project covering a dynamic, multi-step cinema-booking journey with resilient Playwright selectors and assertions.",
    tech: ["Playwright", "JavaScript", "UI Automation", "E2E Testing"],
    links: [
      { type: "github", url: "https://github.com/MuhdArshadd/cinema-booking-flow-playwright-practice" },
    ],
    status: "Practice Project",
    details: {
      challenge: "Exercise a realistic browser flow that changes state across movie selection, scheduling, authentication and seat-selection navigation.",
      solution: "Automated the journey in Playwright using locators, role-based selectors, assertions and popup handling for dynamic browser interactions.",
      features: [
        "Movie, date and time selection coverage",
        "Authentication-gate validation",
        "Seat-selection navigation checks",
        "Role-based selectors and popup handling"
      ],
      outcome: "Demonstrates practical UI test design and browser automation across a multi-step end-to-end flow."
    }
  },
  {
    id: 2,
    projectArea: "quality",
    categories: ["UNIT TESTING", "C++", "CI"],
    title: "C++ Unit Testing & CI Practice",
    description: "A focused unit-testing project using dependency injection, mocks and automated build/test workflows to isolate C++ components and verify behaviour.",
    tech: ["C++", "GoogleTest", "GoogleMock", "CMake", "CTest", "GitLab CI"],
    links: [
        { type: "gitlab", url: "https://gitlab.com/arshad-group3/cpp-unit-testing-training" },
    ],
    status: "Practice Project",
    details: {
      challenge: "Test C++ components independently from external dependencies while keeping the build and test process repeatable.",
      solution: "Placed dependencies behind interfaces, used constructor injection, and implemented tests with GoogleTest fixtures and GoogleMock expectations.",
      features: [
        "Test fixtures, matchers and parameterized test concepts",
        "Mocks, fakes, return behaviours and exception coverage",
        "Dependency injection through interfaces",
        "CMake, CTest and GitLab CI workflow on a Windows runner"
      ],
      outcome: "Built and passed all 10 automated tests through the configured CI workflow."
    }
  },
  {
    id: 3,
    projectArea: "development",
    featured: true,
    categories: ["MOBILE", "BACKEND", "AI", "HEALTHCARE"],
    title: "HeartCare - AI Cardiovascular Assistant",
    description: "Award-winning full-stack mobile application for cardiovascular health awareness, combining Flutter, REST APIs, PostgreSQL-backed services and on-device AI.",
    tech: ["Flutter", "Dart", "Node.js", "Express.js", "PostgreSQL", "TensorFlow Lite"],
    links: [
      { type: "github", url: "https://github.com/MuhdArshadd/HeartCare" },
      { type: "demo", url: "https://youtu.be/nRaeWM9NVCU" }
    ],
    status: "MyIPO Registered",
    details: {
      challenge: "Create a secure, accessible mobile system that supports early cardiovascular-health awareness, ongoing health logging and family assistance.",
      solution: "Built a Flutter client and Node.js/Express REST API backed by PostgreSQL/Supabase, with JWT authentication, on-device TensorFlow Lite inference and third-party service integrations.",
      features: [
        "On-device cardiovascular risk assessment with TensorFlow Lite",
        "Family tracking and Firebase Cloud Messaging notifications",
        "OpenAI-assisted treatment planning",
        "Health metric and symptom logging",
        "Google Maps integration and backend deployment"
      ],
      outcome: "Received Gold at iDRIVE 2025, Silver at WINSTEM 2025 and Silver at InnoGEN Challenge 2026, with intellectual property registration through MyIPO."
    }
  },
  {
    id: 4,
    projectArea: "development",
    categories: ["MOBILE", "DATA AUTOMATION", "SOCIAL IMPACT"],
    title: "MYCare - Community Support Hub",
    description: "A Flutter application that centralizes support-service information, backed by PostgreSQL and Python collection workflows using Selenium and BeautifulSoup.",
    tech: ["Flutter", "Python", "Selenium", "BeautifulSoup", "PostgreSQL", "OpenAI"],
    links: [
      { type: "github", url: "https://github.com/MuhdArshadd/MYCare" },
      { type: "demo", url: "https://youtu.be/Q9NCwTdgixY" }
    ],
    status: "Completed",
    details: {
      challenge: "Young adults in underserved communities can struggle to find current, centralized information about food banks, medical services and skill-building programmes.",
      solution: "Led a student Agile team building a mobile application and Python data-collection workflow, translating coursework requirements into technical tasks and integrated features.",
      features: [
        "Selenium and BeautifulSoup collection from 10+ web sources",
        "Validation of scraped fields and content before integration",
        "OpenAI-powered guidance chatbot",
        "Google Maps and Places integration"
      ],
      outcome: "Delivered a working community-support application while demonstrating team leadership, mobile development, data automation and integration testing."
    }
  },
  {
    id: 5,
    projectArea: "development",
    categories: ["MOBILE", "BACKEND", "TOURISM"],
    title: "TourEase - Smart Heritage Guide",
    description: "A collaborative Flutter tourism application integrating backend data, third-party APIs, maps and an AI assistant. Awarded first place at DICRATHON 2024.",
    tech: ["Flutter", "Dart", "Python", "REST APIs", "Postman", "Azure PostgreSQL"],
    links: [
      { type: "github", url: "https://github.com/MuhdArshadd/TourEase" },
      { type: "demo", url: "https://youtu.be/gQyQ8sYruE4" }
    ],
    status: "Completed",
    details: {
      challenge: "Help tourists access relevant heritage information, navigation and assistance through a single mobile experience.",
      solution: "Contributed application features that integrated third-party REST APIs and backend data, validating responses with Postman and Python checks before application integration.",
      features: [
        "Google Maps navigation and destination discovery",
        "AI-assisted tourist guidance",
        "HTTP status, JSON field and response-structure validation",
        "Backend and external API integration"
      ],
      outcome: "Contributed to the functional prototype that received first place at the UPSI Digital Creative Marathon."
    }
  },
  {
    id: 6,
    projectArea: "development",
    categories: ["WEB", "FRONTEND", "CLIENT PROJECT"],
    title: "BWR Services - Aircond Specialist",
    description: "A responsive business website designed to establish a professional web presence and move visitors directly into a pre-filled WhatsApp booking flow.",
    tech: ["React", "Tailwind CSS", "Vite", "Vercel"],
    links: [
      { type: "github", url: "https://github.com/MuhdArshadd/BWR_SERVICES" },
      { type: "website", url: "https://bwr-services.vercel.app/" }
    ],
    status: "Completed",
    details: {
      challenge: "The service business relied on social platforms and needed a focused website that clearly explained its services and made enquiries straightforward.",
      solution: "Designed and built a responsive React landing page with clear service information, social proof and a direct WhatsApp conversion path.",
      features: [
        "Responsive mobile and desktop layouts",
        "Pre-filled WhatsApp booking messages",
        "Customer review presentation",
        "Service-work image gallery"
      ],
      outcome: "Delivered a live, shareable business website that provides customers with a clearer path from discovery to enquiry."
    }
  },
  {
    id: 7,
    projectArea: "development",
    categories: ["DESKTOP", "JAVA", "OOP"],
    title: "Car Service Maintenance System",
    description: "A Java desktop system for customer service requests, payments and staff job assignments, built around object-oriented design and relational data.",
    tech: ["Java", "MySQL", "OOP", "Eclipse"],
    links: [
      { type: "demo", url: "https://youtu.be/DDuG1yB9RN0" }
    ],
    status: "Completed",
    details: {
      challenge: "Replace manual tracking of service bookings, mechanic assignments and invoices with a structured application workflow.",
      solution: "Built a role-based Java desktop application connected to MySQL, applying object-oriented principles across customer and staff workflows.",
      features: [
        "Staff and customer authentication",
        "Service booking and schedule management",
        "Payment and invoice workflows",
        "Staff job-assignment dashboard"
      ],
      outcome: "Demonstrates foundational Java, object-oriented design and relational database integration."
    }
  },
  {
    id: 8,
    projectArea: "development",
    categories: ["CLI", "C++", "DATABASES"],
    title: "Tuition Centre Management System",
    description: "A command-line management system built in C++ with MySQL to support enrolment, fee tracking and administrative workflows.",
    tech: ["C++", "MySQL", "OOP", "SQL"],
    links: [
      { type: "github", url: "https://github.com/MuhdArshadd/TuitionCentre" }
    ],
    status: "Completed",
    details: {
      challenge: "Reduce manual administration around student enrolment, class availability, fees and related records.",
      solution: "Developed a C++ command-line application using object-oriented design and a relational MySQL database.",
      features: [
        "Student enrolment and class-capacity tracking",
        "Tuition fee calculation and payment records",
        "Subject and user-management workflows",
        "Relational data retrieval with SQL"
      ],
      outcome: "Demonstrates early foundations in C++, object-oriented programming, SQL and end-to-end system development."
    }
  }
];
