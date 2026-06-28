export const personalInfo = {
  name: "Muhammad Siddique",
  initials: "MS",
  title: "Software Engineer (Full-Stack | Backend | DevOps)",
  phone: "0310-8741623",
  email: "maliksaddique139@gmail.com",
  github: "https://github.com/MalikSaddique",
  linkedin: "https://www.linkedin.com/in/muhammad-siddique-119860228",
  heroTagline:
    "Backend-focused engineer building high-performance APIs, real-time systems, and containerized deployments with Go, React, and Kubernetes.",
  objective:
    "Software Engineer with hands-on experience in backend development, system integration, and application optimization using Golang, C++, and modern development practices. Skilled in API development, multi-threading, socket programming (WebSockets), database management, and containerized deployment. Adept at collaborating with cross-functional teams, preparing technical documentation, and delivering reliable, high-performance software solutions.",
  typewriterRoles: [
    "Backend Engineer",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Go Developer",
  ],
};

export const stats = [
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Projects Completed", value: 6, suffix: "+" },
  { label: "Certifications", value: 4, suffix: "+" },
  { label: "Tech Stack", value: 0, suffix: "", text: "Go / React / K8s" },
];

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["Go", "C++", "JavaScript", "Python"],
    proficiency: 90,
  },
  {
    category: "Frontend",
    icon: "layout",
    items: [
      "React.js",
      "React Hooks",
      "State Management",
      "REST API Integration",
      "Responsive UI Design",
    ],
    proficiency: 85,
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    proficiency: 88,
  },
  {
    category: "DevOps & Deployment",
    icon: "server",
    items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Ubuntu Linux"],
    proficiency: 87,
  },
  {
    category: "Testing & QA",
    icon: "test",
    items: [
      "Manual Testing",
      "API Testing",
      "Postman",
      "Debugging",
      "Bug Reporting",
    ],
    proficiency: 82,
  },
  {
    category: "Version Control",
    icon: "git",
    items: ["Git", "GitHub"],
    proficiency: 92,
  },
  {
    category: "Tools & Collaboration",
    icon: "tools",
    items: [
      "VS Code",
      "Visual Studio",
      "Google Meet",
      "Zoom",
      "Cursor",
      "Jira",
      "MS SQL Server",
    ],
    proficiency: 85,
  },
  {
    category: "Project Management",
    icon: "project",
    items: [
      "Requirement Gathering",
      "Sprint Planning",
      "Task Breakdown",
      "Documentation",
    ],
    proficiency: 80,
  },
];

export const experience = [
  {
    id: "capregsoft",
    role: "Backend Developer / Technical Officer",
    company: "Capregsoft",
    period: "Feb 2025 – Present",
    icon: "backend",
    highlights: [
      "Developed and maintained RESTful APIs using Golang, ensuring high performance and scalability for production-level services.",
      "Led backend and frontend development of OroTracker.com, a real-time gold tracking platform — database management, API logic, secure endpoints.",
      "Built Skylink, a full-stack lead automation platform with FreeSWITCH/SIP-based real-time call handling.",
      "Conducted manual and API testing using Postman; created test cases and reported bugs.",
      "Collaborated via GitHub (branches, issues, pull requests).",
      "Deployed applications on Kubernetes, managing containerized services for seamless scaling and availability.",
    ],
  },
  {
    id: "egeeks",
    role: "Networking Intern",
    company: "eGeeks-Global",
    period: "Nov 2024 – Jan 2025",
    icon: "network",
    highlights: [
      "Performed system troubleshooting and configured Sophos Firewall.",
      "Managed and configured IT systems, installed new hardware/software.",
      "Created and managed Zoom meeting links for online collaboration.",
      "Installed, maintained, and upgraded systems for smooth IT operations.",
      "Documented IT processes, configurations, and troubleshooting steps.",
    ],
  },
];

export const projects = [
  {
    id: "orotracker",
    title: "OroTracker.com",
    role: "Project Leader",
    category: "Go",
    tags: ["Go", "Docker", "Kubernetes", "REST API"],
    description:
      "A web-based platform to track live gold rates. Complete backend setup, real-time API development, deployment using Docker and Kubernetes.",
    detail:
      "Led end-to-end development of a real-time gold rate tracking platform with secure REST APIs, database management, and production deployment on Kubernetes.",
  },
  {
    id: "skylink",
    title: "Skylink – Intelligent Call Management",
    role: "Full-Stack, FreeSWITCH/SIP",
    category: "Full-Stack",
    tags: ["Go", "FreeSWITCH", "SIP", "React", "CRM"],
    description:
      "Full-stack call management and lead automation platform for real estate companies with telephony infrastructure and CRM integrations.",
    detail:
      "Built telephony infrastructure with FreeSWITCH and SIP Trunk for real-time, high-volume call routing/recording. Integrated WhatsApp, Mailchimp, ElevenLabs (AI voice), OpenAI, TikTok, Facebook, and Bitrix CRM.",
  },
  {
    id: "mailavail",
    title: "MailAvail – Email Verification Platform",
    role: "Go + DevOps",
    category: "DevOps",
    tags: ["Go", "Kubernetes", "CI/CD", "Queue"],
    description:
      "Designed deployment specs and Kubernetes manifests for a distributed email outbound verification system.",
    detail:
      "Queue-based processing and CI/CD integration for automated rollout of a distributed email verification system.",
  },
  {
    id: "chat-app",
    title: "Chat Application",
    role: "Go",
    category: "Go",
    tags: ["Go", "WebSockets", "Concurrency"],
    description:
      "WebSocket-based real-time chatroom with concurrent messaging support, showcasing Go's concurrency model.",
    detail:
      "Demonstrates goroutines, channels, and WebSocket handling for real-time bidirectional communication.",
  },
  {
    id: "file-analyzer",
    title: "File Analyzer Tool",
    role: "Go",
    category: "Go",
    tags: ["Go", "CLI", "Goroutines"],
    description:
      "Command-line app to parse and analyze large files efficiently using goroutines and memory optimization.",
    detail:
      "Optimized for large file processing with concurrent goroutine workers and memory-efficient streaming.",
  },
  {
    id: "banking",
    title: "Banking Management System",
    role: "C++",
    category: "C++",
    tags: ["C++", "OOP", "Console"],
    description:
      "Console-based banking system with account management, transaction history, and user interaction features.",
    detail:
      "Object-oriented design with account management, transaction logging, and interactive CLI interface.",
  },
];

export const education = {
  degree: "Bachelor's Degree in Software Engineering",
  institution: "HITEC University",
  period: "2020 – 2024",
  cgpa: "3.43",
};

export const certifications = [
  {
    id: "hcia",
    title: "HCIA-Datacom (Certification)",
    issuer: "Huawei",
    date: "July 2023",
    description:
      "Network fundamentals, routing/switching, network security.",
    icon: "network",
  },
  {
    id: "coursera",
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera (Google)",
    date: "August 2024",
    description:
      "Networking protocols, services, cloud computing.",
    icon: "cert",
  },
  {
    id: "iot",
    title: "IOT Based Project Competition",
    issuer: "UET Taxila (GetInnovative)",
    date: "May 29, 2024",
    description: "Competitive IoT project showcase and innovation challenge.",
    icon: "trophy",
  },
  {
    id: "huawei-ict",
    title: "Huawei ICT Competition 2022–2023",
    issuer: "HITEC University",
    date: "Aug 2023",
    description:
      "Selected in top 100 candidates nationwide (Pakistan).",
    icon: "award",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects", hasDropdown: true },
  { label: "Education", href: "#education" },
  { label: "More", href: "#certifications", hasMoreDropdown: true },
  { label: "Contact", href: "#contact" },
];

export const marqueeTech = [
  "Go",
  "React",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "WebSockets",
  "CI/CD",
  "Git",
  "Python",
  "C++",
  "Linux",
  "Postman",
];
