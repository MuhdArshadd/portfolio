export const portfolioData = {
    name: "Muhammad Arshad Bin Mohamad Din",
    role: "Software Developer & QA Automation",
    about: `const developer = {
    name: "Muhammad Arshad",
    location: "Malaysia",
    focus: "Building intelligent, scalable systems",
    interests: ["Backend Engineering", "AI/ML", "Data Science"],
    mindset: "Beast Mode",
    status: "Hunting for permanent role!"
};`,
    skills: [
        { category: "Frontend & Mobile", items: ["React", "Flutter", "Tailwind CSS"] },
        { category: "Backend", items: ["Node.js", "Android Studio"] },
        { category: "QA & Testing", items: ["Karate", "Test Automation", "STLC", "API Testing"] },
        { category: "Tools", items: ["Git", "VS Code", "Figma"] }
    ],
    contact: {
        email: "arshadmuhd50@gmail.com",
        github: "https://github.com/MuhdArshadd",
        linkedin: "https://www.linkedin.com/in/muhdarshad50/"
    }
};

export const rolesData = [
    "build scalable mobile applications.", 
    "automate enterprise QA pipelines.", 
    "integrate AI models into real-world apps.",
    "bridge the gap between development and testing."
];

export const chatData = [
    { q: "Who is Cad?", a: "Cad (Arshad) is a First-Class Software Engineer Graduate from Malaysia. He specialises in bridging the gap between building dynamic mobile apps and writing maintainable automated tests." },
    { q: "What is your tech stack?", a: "Cad primarily builds Mobile applications using Flutter for Android and integrates AI models (TensorFlow, OpenAI). Thanks to his enterprise QA background, he also knows exactly how to catch (most of) his own bugs!" },
    { q: "Any standout projects?", a: "Definitely! Cad built 'HeartCare', an AI-driven cardiovascular health app that predicts real-time risk levels. It won multiple Gold and Silver innovation awards and is officially copyrighted with MyIPO." },
    { q: "How can I hire you?", a: "You can email arshadmuhd50@gmail.com or connect on LinkedIn. Cad is currently hunting for a full-time Software Engineer or QA role in the KL/Selangor area!" }
];

export const extensionsData = [
    {
        id: 'cad-bot',
        name: 'Cad Copilot',
        description: 'Your personal AI portfolio assistant',
        author: 'Arshad Specialist',
        iconName: 'Bot',
        installed: true
    }
];

export const gitHistoryData = [
    { message: "feat: interactive git graph & diff view", highlight: true },
    { message: "feat: add marketplace & \"vibe coded\" bot", highlight: false },
    { message: "fix: stop users from closing the app (taunts)", highlight: false },
    { message: "feat: implement dynamic file system routing", highlight: false },
    { message: "feat: setup vscode layout & activity bar", highlight: false },
    { message: "Initial Commit", highlight: false, muted: true }
];

export const extensionChangelogData = [
    {
        version: "v1.2.5",
        updates: [
            "Squashed some bugs. Probably created new ones. The circle of life.",
            "Added dynamic Enable/Disable dropdowns that literally just hide the icon and do nothing else.",
            "Added this Changelog tab so it looks like I actually maintain this.",
            "Status: 100% Open to Work and ready to accept pull requests for full-time roles."
        ]
    },
    {
        version: "v1.1.0",
        updates: [
            "Fixed the state-of-the-art Q&A functionality because it was actually just crashing the browser.",
            "Added endless loop wrapping logic for Title Bar taunt messages to aggressively prevent users from leaving.",
            "Implemented browser Fullscreen API so you are trapped here with my portfolio.",
            "Updated taunt messages for maximum \"vibe coded\" energy. I am not sorry."
        ]
    },
    {
        version: "v1.0.0",
        updates: [
            "Initial release of Cad Copilot.",
            "Implemented state-of-the-art Q&A functionality powered by a highly sophisticated array of hardcoded strings.",
            "Integrated into secondary sidebar because the primary one was getting too crowded."
        ]
    }
];