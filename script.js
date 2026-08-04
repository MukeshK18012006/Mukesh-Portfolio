const profile = {
  name: "MUKESH K",
  role: "Artificial Intelligence & Data Science Student",
  tagline: "Transforming Data into Intelligence and Ideas into Innovation",
  intro:
    "I am a B.Tech student specializing in Artificial Intelligence and Data Science at PPG Institute of Technology, Coimbatore. Passionate about AI, Data Analytics, Machine Learning, Mobile Applications, and Modern Web Technologies.",
  email: "mukesh4718012006@gmail.com",
  phone: "6383955078",
  github: "MukeshK18012006",
  linkedin: "mukesh-k-956423293",
  locationLabel: "11°02'37.1\"N 76°59'59.4\"E",
  locationUrl:
    "https://www.google.com/maps/place/11%C2%B002'37.1%22N+76%C2%B059'59.4%22E/@11.0432945,76.9995232,19.4z/data=!4m4!3m3!8m2!3d11.043636!4d76.999845?entry=ttu&g_ep=EgoyMDI2MDYyMi4wIKXMDSoASAFQAw%3D%3D",
};

const stats = [
  { label: "Projects", value: 8 },
  { label: "Certifications", value: 11 },
  { label: "Internships", value: 4 },
  { label: "Languages", value: 2 },
];

const typingText = document.getElementById("typingText");

const words = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Web Development",
  "Mobile Apps"
];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingText.textContent = "";
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
      typeEffect();
    }, 1500);
  }
}

typeEffect();
const education = [
  {
    title: "HSC",
    institution: "Hindustan Matric Higher Secondary School",
    meta: "March 2023",
    description: "Percentage: 66.6%",
  },
  {
    title: "B.Tech Artificial Intelligence and Data Science",
    institution: "PPG Institute of Technology",
    meta: "Affiliated to Anna University | 2023 - 2027",
    description: "Current CGPA: 7.47 (Up to 5th Semester)",
  },
];

const skillCategories = [
  {
    name: "Programming",
    short: "Python, SQL, JavaScript",
    items: ["Python", "SQL", "JavaScript"],
    description: "Core programming skills for scripting, data tasks, and interactive web experiences.",
  },
  {
    name: "Data Analytics",
    short: "Pandas, NumPy, Excel",
    items: ["Pandas", "NumPy", "Excel"],
    description: "Hands-on analysis workflow for cleaning, transformation, and reporting.",
  },
  {
    name: "Data Visualization",
    short: "Power BI, Tableau",
    items: ["Power BI", "Tableau"],
    description: "Visual storytelling and dashboarding for practical business insight delivery.",
  },
  {
    name: "Machine Learning & AI",
    short: "Predictive Modeling, Generative AI",
    items: ["Predictive Modeling", "Generative AI"],
    description: "Applied AI concepts for model building, prediction, and intelligent automation.",
  },
  {
    name: "Web Development",
    short: "HTML, CSS",
    items: ["HTML", "CSS"],
    description: "Clean front-end foundations for responsive, accessible interfaces.",
  },
  {
    name: "Mobile Development",
    short: "React Native",
    items: ["React Native"],
    description: "Cross-platform application development for Android and iOS experiences.",
  },
  {
    name: "Database Management",
    short: "MySQL, PostgreSQL, SSMS",
    items: ["MySQL", "PostgreSQL", "SSMS"],
    description: "Database design and querying across common relational platforms.",
  },
  {
    name: "Computer Vision",
    short: "Image Processing",
    items: ["Image Processing"],
    description: "Visual data processing techniques for smarter interaction and recognition workflows.",
  },
  {
    name: "Non-Technical Skills",
    short: "Problem Solving, Collaboration",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Project Management"],
    description: "Professional habits that support teamwork, delivery, and clear communication.",
  },
];

const projects = [
  {
    title: "SignSpeak AI",
    subtitle: "Offline Indian Sign Language to Text and Voice Translation System",
    overview:
      "An offline-first sign language translation experience designed to bridge communication gaps through computer vision and mobile interaction.",
    technologies: ["React Native", "AI", "Computer Vision"],
    features: [
      "Camera-driven gesture capture",
      "Text and voice translation flow",
      "Offline support for reliable use",
      "Simple mobile-first interface",
    ],
    challenges: [
      "Keeping the experience responsive on mobile devices",
      "Designing a smooth recognition workflow without relying on constant connectivity",
    ],
    results: [
      "Built a practical accessibility-driven concept for real-world use",
      "Highlighted how AI can support communication in mobile environments",
    ],
    github: "Add Placeholder",
    live: "Add Placeholder",
    category: "mobile",
    tags: ["React Native", "AI", "Computer Vision", "Accessibility"],
  },
  {
    title: "Offline AI Wellness Assistant",
    subtitle: "Educational chatbot, voice commands, and therapeutic mini-games",
    overview:
      "A wellness-focused assistant that combines guided conversation, speech input, and interactive games to support a calming digital experience.",
    technologies: ["React Native"],
    features: [
      "Friendly educational chatbot",
      "Voice commands",
      "MindGarden therapy game",
      "Stress Eater Snake game",
    ],
    challenges: [
      "Balancing useful guidance with a relaxed user experience",
      "Keeping the game and chatbot flows lightweight for mobile usage",
    ],
    results: [
      "Created a polished concept that blends utility and wellness",
      "Showcases interaction design beyond standard productivity apps",
    ],
    github: "Add Placeholder",
    live: "Add Placeholder",
    category: "mobile",
    tags: ["React Native", "Wellness", "Voice", "Game"],
  },
  {
    title: "VerdantX",
    subtitle: "AI Based Smart Plant Health Monitoring System",
    overview:
      "A smart agriculture concept that combines machine learning and computer vision to help users monitor plant health and detect issues early.",
    technologies: ["Machine Learning", "Computer Vision", "React Native"],
    features: [
      "Plant health monitoring",
      "AI-assisted diagnosis",
      "Mobile interface for tracking",
      "User-friendly insight delivery",
    ],
    challenges: [
      "Presenting technical plant health feedback in a simple way",
      "Designing an intuitive mobile interface around AI results",
    ],
    results: [
      "Delivered a strong AI and sustainability story",
      "Useful for agriculture-tech and innovation showcases",
    ],
    github: "Add Placeholder",
    live: "Add Placeholder",
    category: "ai",
    tags: ["Machine Learning", "Computer Vision", "React Native"],
  },
  {
    title: "Random Password Generator",
    subtitle: "Secure utility app for generating strong passwords",
    overview:
      "A focused utility project aimed at creating secure and customizable password output quickly.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Password generation controls",
      "Simple interface",
      "Fast utility-focused workflow",
      "Clear copy-ready output",
    ],
    challenges: [
      "Keeping the tool lightweight and easy to use",
      "Designing a minimal interface with clear controls",
    ],
    results: ["Reliable personal utility project", "Useful for front-end and UX demonstrations"],
    github: "https://github.com/MukeshK18012006/random_password_generator",
    live: "https://github.com/MukeshK18012006/random_password_generator",
    category: "web",
    tags: ["Web", "Utility", "JavaScript"],
  },
  {
    title: "Heart Disease Prediction",
    subtitle: "Health prediction web project",
    overview:
      "A data-driven health prediction project that demonstrates how machine learning can support early insight generation.",
    technologies: ["Machine Learning", "HTML", "CSS", "JavaScript"],
    features: [
      "Prediction-oriented workflow",
      "Health data input form",
      "Simple result display",
      "Accessible web layout",
    ],
    challenges: ["Presenting a sensitive healthcare concept clearly", "Maintaining a clean, recruiter-friendly interface"],
    results: ["Strong demonstration of ML application thinking", "Useful for analytics and AI role discussions"],
    github: "https://mukeshk18012006.github.io/heart_disease_prediction/",
    live: "https://mukeshk18012006.github.io/heart_disease_prediction/",
    category: "ai",
    tags: ["Machine Learning", "Health Tech", "Web"],
  },
  {
    title: "Queue Modelling (SIH)",
    subtitle: "Smart India Hackathon concept project",
    overview:
      "An idea-driven project focused on queue modeling and better system planning for practical public or operational contexts.",
    technologies: ["Figma","App Design", "Modeling"],
    features: ["Model-oriented thinking", "Hackathon collaboration", "Problem-first design"],
    challenges: ["Working with limited time and evolving requirements", "Structuring a concept for presentation"],
    results: ["Demonstrates hackathon readiness", "Shows strong systems thinking"],
    github: "Add Placeholder",
    live: "Add Placeholder",
    category: "analytics",
    tags: ["Hackathon", "Modeling", "SIH"],
  },
  {
    title: "Tech Treek Hackathon App Development",
    subtitle: "Rapid app development showcase",
    overview:
      "A hackathon app development project focused on quick iteration, clean presentation, and practical feature delivery.",
    technologies: ["Mobile Development", "UI Design"],
    features: ["Rapid delivery", "Prototype styling", "Hackathon execution"],
    challenges: ["Time-boxed development", "Communicating value within a short presentation window"],
    results: ["Strong competition-ready portfolio piece", "Useful for showcasing team delivery"],
    github: "Add Placeholder",
    live: "Add Placeholder",
    category: "mobile",
    tags: ["Hackathon", "Mobile", "Prototype"],
  },
  {
    title: "BBQ Nation Website Clone",
    subtitle: "Restaurant website recreation",
    overview:
      "A visual clone project focused on recreating a polished brand-inspired website experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: ["UI replication", "Responsive layout", "Menu and brand styling"],
    challenges: ["Matching visual polish", "Keeping the interface responsive across devices"],
    results: ["Demonstrates front-end precision", "Useful for web design interviews"],
    github: "Add Placeholder",
    live: "Add Placeholder",
    category: "web",
    tags: ["Clone", "Web Design", "Frontend"],
  },
];

const certifications = [
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    description: "Built foundational fluency in generative AI concepts, use cases, and responsible application.",
    skills: ["Generative AI", "Prompting", "AI Foundations"],
    pdf: "GEN_AI.pdf",
  },
  {
    title: "Hugging Face Projects Course",
    issuer: "Simplilearn SkillUp",
    description: "Explored practical workflows around model usage, NLP experimentation, and AI tooling.",
    skills: ["NLP", "Model Usage", "AI Tools"],
    pdf: "HUGGING_FACE.pdf",
  },
  {
    title: "Explore Generative AI with Copilot in Bing",
    issuer: "Microsoft",
    description: "Learned how generative AI can enhance search, discovery, and everyday productivity.",
    skills: ["Copilot", "Generative AI", "Productivity"],
    pdf: "GEN_AI.pdf",
  },
  {
    title: "IBM Artificial Intelligence Fundamentals",
    issuer: "IBM",
    description: "Covered the core ideas behind AI systems, model application, and key terminology.",
    skills: ["AI Fundamentals", "Model Thinking", "Applied AI"],
    pdf: "IBM_AI.pdf",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    issuer: "IBM",
    description: "Introduced cybersecurity principles and the importance of digital safety practices.",
    skills: ["Cybersecurity", "Risk Awareness", "Security Basics"],
    pdf: "IBM_CYBER.pdf",
  },
  {
    title: "IBM Data Fundamentals",
    issuer: "IBM",
    description: "Focused on data literacy, data handling, and how information supports intelligent decisions.",
    skills: ["Data Literacy", "Analytics", "Information Systems"],
    pdf: "IBM DATA.pdf",
  },
  {
    title: "Process Mining Rising Star",
    issuer: "Celonis Academy",
    description: "A process mining certification that expands understanding of operational intelligence.",
    skills: ["Process Mining", "Operations", "Insight Discovery"],
    pdf: "CELONIS.pdf",
  },
  {
    title: "Introduction to MongoDB, AI and Vector Search",
    issuer: "MongoDB",
    description: "Learned how modern databases and vector search support intelligent applications.",
    skills: ["MongoDB", "Vector Search", "AI Data"],
    pdf: "MONGODB.pdf",
  },
  {
    title: "LetsUpgrade Bootcamps",
    issuer: "LetsUpgrade",
    description: "Practical bootcamp exposure across emerging technologies and project workflows.",
    skills: ["Bootcamp Learning", "Project Practice", "Tech Exploration"],
    pdf: "LETSUPGRADE.pdf",
  },
  {
    title: "AWS Workshop Certification",
    issuer: "AWS",
    description: "Hands-on exposure to cloud fundamentals and deployment awareness.",
    skills: ["Cloud Basics", "AWS", "Deployment Awareness"],
    pdf: "AWS.pdf",
  },
  {
    title: "Codex Event Exotica 2K24",
    issuer: "Codex",
    description: "Event recognition that highlights active participation in technical showcases.",
    skills: ["Event Participation", "Presentation", "Technical Exposure"],
    pdf: "CODEX.pdf",
  },
];

const internships = [
  {
    title: "Data Analytics Intern",
    company: "Code Core Global Hitech Solutions",
    duration: "6 Months",
    responsibilities: [
      "Worked with analytics-focused tasks and data-oriented learning",
      "Strengthened practical problem-solving through real work exposure",
      "Contributed to a professional workflow and reporting mindset",
    ],
    skills: ["Data Analytics", "Reporting", "Team Collaboration"],
    pdf: "CC.pdf",
  },
  {
    title: "Full Stack Development Intern",
    company: "Tech Volt",
    duration: "30 Days",
    responsibilities: [
      "Explored full stack workflow patterns",
      "Practiced front-end and back-end coordination",
      "Improved development discipline through project tasks",
    ],
    skills: ["Full Stack", "Web Development", "Workflow Thinking"],
    pdf: "TECHVOLT.pdf",
  },
  {
    title: "Cyber Security Intern",
    company: "Adhoc Softwares",
    duration: "30 Days",
    responsibilities: [
      "Learned cyber safety principles and secure digital habits",
      "Improved awareness of system protection and risk handling",
      "Built confidence in security-related discussions",
    ],
    skills: ["Cyber Security", "Risk Awareness", "Security Basics"],
    pdf: "ADHOC.pdf",
  },
  {
    title: "Data Analytics Intern",
    company: "Tamizhan Skills (TRSE)",
    duration: "1 Month",
    responsibilities: [
      "Engaged with data analytics workflows and exercises",
      "Reinforced practical understanding of data handling",
      "Improved data presentation and analytical thinking",
    ],
    skills: ["Data Analytics", "Excel", "Presentation"],
    pdf: "TRSE.pdf",
  },
];

const achievements = [
  { title: "SIH Participation", text: "Participation in Smart India Hackathon problem-solving and team delivery." },
  { title: "Tech Treek Hackathon", text: "Hackathon experience with app development and presentation work." },
  { title: "Multiple AI Projects", text: "Built and showcased AI-led project concepts across mobile and web platforms." },
  { title: "Data Analytics Internships", text: "Hands-on internship exposure in data-driven environments." },
  { title: "Generative AI Certifications", text: "Completed learning milestones across Generative AI and model tools." },
];

const languages = [
  { name: "English", text: "Professional communication and presentation." },
  { name: "Tamil", text: "Native language for clear local communication." },
];

const projectFilters = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
  { id: "analytics", label: "Analytics" },
];

const els = {
  loader: document.getElementById("loader"),
  progressBar: document.getElementById("progressBar"),
  particleLayer: document.getElementById("particleLayer"),
  typingText: document.getElementById("typingText"),
  heroProjectCount: document.getElementById("heroProjectCount"),
  heroCertCount: document.getElementById("heroCertCount"),
  heroInternCount: document.getElementById("heroInternCount"),
  statsGrid: document.getElementById("statsGrid"),
  skillsSummary: document.getElementById("skillsSummary"),
  timeline: document.getElementById("timeline"),
  skillCategories: document.getElementById("skillCategories"),
  projectGrid: document.getElementById("projectGrid"),
  projectFilters: document.getElementById("projectFilters"),
  projectSearch: document.getElementById("projectSearch"),
  certificationGrid: document.getElementById("certificationGrid"),
  internshipGrid: document.getElementById("internshipGrid"),
  achievementGrid: document.getElementById("achievementGrid"),
  languageGrid: document.getElementById("languageGrid"),
  githubStats: document.getElementById("githubStats"),
  githubRepos: document.getElementById("githubRepos"),
  contactForm: document.getElementById("contactForm"),
  modalOverlay: document.getElementById("modalOverlay"),
  modalContent: document.getElementById("modalContent"),
  modalClose: document.getElementById("modalClose"),
  toast: document.getElementById("toast"),
  backToTop: document.getElementById("backToTop"),
  downloadResumeBtn: document.getElementById("downloadResumeBtn"),
  downloadResumeHero: document.getElementById("downloadResumeHero"),
  themeToggle: document.getElementById("themeToggle"),
  openMapsBtn: document.getElementById("openMapsBtn"),
  copyAddressBtn: document.getElementById("copyAddressBtn"),
};

let activeFilter = "all";
let activeProjectSearch = "";
let typingIndex = 0;
let typingChar = 0;
let typingErasing = false;
let typingHold = 0;
let revealObserver = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function createParticles() {
  const count = 18;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.opacity = `${0.1 + Math.random() * 0.5}`;
    particle.style.transform = `scale(${0.8 + Math.random() * 1.4})`;
    frag.appendChild(particle);
  }
  els.particleLayer.appendChild(frag);
}

function renderStats() {
  els.statsGrid.innerHTML = stats
    .map(
      (item) => `
        <div class="stats-card">
          <strong data-counter="${item.value}">0</strong>
          <span class="muted">${item.label}</span>
        </div>
      `
    )
    .join("");

  els.skillsSummary.innerHTML = skillCategories
    .slice(0, 6)
    .map((item) => `<div class="chip">${escapeHtml(item.name)}</div>`)
    .join("");
  observeReveals();
}

function renderTimeline() {
  els.timeline.innerHTML = education
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <span class="timeline-dot"></span>
          <div class="timeline-meta">${escapeHtml(item.meta)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <div class="muted">${escapeHtml(item.institution)}</div>
          <p class="subcopy">${escapeHtml(item.description)}</p>
        </article>
      `
    )
    .join("");
  observeReveals();
}

function renderSkillCategories() {
  els.skillCategories.innerHTML = skillCategories
    .map(
      (item, index) => `
        <button class="category-card reveal" type="button" data-skill-index="${index}">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.short)}</p>
          <span class="muted">Open details</span>
        </button>
      `
    )
    .join("");
  observeReveals();
}

function renderProjectFilters() {
  els.projectFilters.innerHTML = projectFilters
    .map(
      (filter) => `
        <button class="filter-chip ${filter.id === activeFilter ? "active" : ""}" type="button" data-filter="${filter.id}">
          ${escapeHtml(filter.label)}
        </button>
      `
    )
    .join("");
}

function filteredProjects() {
  return projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const haystack = `${project.title} ${project.subtitle} ${project.technologies.join(" ")} ${project.tags.join(" ")}`.toLowerCase();
    const matchesSearch = haystack.includes(activeProjectSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });
}

function renderProjects() {
  const list = filteredProjects();
  els.projectGrid.innerHTML = list.length
    ? list
        .map(
          (project, index) => `
            <article class="card reveal" role="button" tabindex="0" data-project-index="${projects.indexOf(project)}">
              <div class="meta">${escapeHtml(project.technologies.join(" • "))}</div>
              <h3>${escapeHtml(project.title)}</h3>
              <p class="subcopy">${escapeHtml(project.subtitle)}</p>
              <div class="tags">
                ${project.tags.slice(0, 3).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="glass" style="padding:24px;border-radius:24px;">No projects matched your search.</div>`;
  observeReveals();
}

function renderCertifications() {
  els.certificationGrid.innerHTML = certifications
    .map(
      (cert, index) => `
        <article class="card reveal" role="button" tabindex="0" data-cert-index="${index}">
          <div class="meta">${escapeHtml(cert.issuer)}</div>
          <h3>${escapeHtml(cert.title)}</h3>
          <p class="subcopy">${escapeHtml(cert.description)}</p>
          <div class="tags">
            ${cert.skills.slice(0, 3).map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
  observeReveals();
}

function renderInternships() {
  els.internshipGrid.innerHTML = internships
    .map(
      (item, index) => `
        <article class="card reveal" role="button" tabindex="0" data-intern-index="${index}">
          <div class="meta">${escapeHtml(item.duration)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="subcopy">${escapeHtml(item.company)}</p>
          <div class="tags">
            ${item.skills.slice(0, 3).map((skill) => `<span class="tag">${escapeHtml(skill)}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
  observeReveals();
}

function renderAchievements() {
  els.achievementGrid.innerHTML = achievements
    .map(
      (item) => `
        <article class="achievement-card reveal">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
  observeReveals();
}

function renderLanguages() {
  els.languageGrid.innerHTML = languages
    .map(
      (item) => `
        <article class="language-card reveal">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `
    )
    .join("");
  observeReveals();
}

function renderGitHubFallback() {
  els.githubStats.innerHTML = `
    <div class="stat-box"><strong>8+</strong><span class="muted">Public Projects</span></div>
    <div class="stat-box"><strong>2</strong><span class="muted">Highlighted Profiles</span></div>
    <div class="stat-box"><strong>4</strong><span class="muted">Internships</span></div>
    <div class="stat-box"><strong>11</strong><span class="muted">Certifications</span></div>
  `;
  els.githubRepos.innerHTML = `
    <div class="repo-card">
      <h4>GitHub API unavailable</h4>
      <p>The portfolio is ready to show recent repositories when the network is available.</p>
    </div>
  `;
}

async function loadGitHub() {
  const userUrl = `https://api.github.com/users/${profile.github}`;
  const reposUrl = `https://api.github.com/users/${profile.github}/repos?sort=updated&per_page=6`;

  try {
    const [userRes, reposRes] = await Promise.all([fetch(userUrl), fetch(reposUrl)]);
    if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");
    const user = await userRes.json();
    const repos = await reposRes.json();

    els.githubStats.innerHTML = `
      <div class="stat-box"><strong>${user.public_repos ?? 0}</strong><span class="muted">Public Repositories</span></div>
      <div class="stat-box"><strong>${user.followers ?? 0}</strong><span class="muted">Followers</span></div>
      <div class="stat-box"><strong>${user.following ?? 0}</strong><span class="muted">Following</span></div>
      <div class="stat-box"><strong>${user.public_gists ?? 0}</strong><span class="muted">Public Gists</span></div>
    `;

    els.githubRepos.innerHTML = repos.length
      ? repos
          .slice(0, 4)
          .map(
            (repo) => `
              <a class="repo-card" href="${repo.html_url}" target="_blank" rel="noreferrer">
                <h4>${escapeHtml(repo.name)}</h4>
                <p>${escapeHtml(repo.description || "Recent public repository.")}</p>
                <small>${repo.language ? escapeHtml(repo.language) : "Code"} • ${escapeHtml(repo.visibility || "public")}</small>
              </a>
            `
          )
          .join("")
      : `<div class="repo-card"><h4>No public repos found</h4><p>The GitHub profile currently does not expose recent repositories.</p></div>`;
  } catch (error) {
    renderGitHubFallback();
  }
}

function buildModalActions(actions) {
  return `
    <div class="modal-actions">
      ${actions
        .map(
          (action) =>
            !action.href || /placeholder/i.test(action.href)
              ? `<span class="pill-btn ${action.variant || "secondary"} disabled" aria-disabled="true">${escapeHtml(action.label)}</span>`
              : `<a class="pill-btn ${action.variant || "secondary"}" href="${action.href}" ${action.download ? `download="${action.download}"` : ""} ${action.target ? `target="${action.target}"` : ""} ${action.rel ? `rel="${action.rel}"` : ""}>${escapeHtml(action.label)}</a>`
        )
        .join("")}
    </div>
  `;
}

function escapePdfText(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function buildSimplePdf({ title, subtitle, lines }) {
  const contentLines = [
    "BT",
    "/F1 18 Tf",
    "72 760 Td",
    `(${escapePdfText(title)}) Tj`,
    "/F1 12 Tf",
    "14 TL",
  ];

  if (subtitle) {
    contentLines.push("T*");
    contentLines.push(`(${escapePdfText(subtitle)}) Tj`);
  }

  lines.forEach((line) => {
    contentLines.push("T*");
    contentLines.push(`(${escapePdfText(line)}) Tj`);
  });

  contentLines.push("ET");
  const content = contentLines.join("\n");

  const objects = [
    `1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj`,
    `2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj`,
    `3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj`,
    `4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj`,
    `5 0 obj << /Length ${content.length} >> stream\n${content}\nendstream endobj`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = ["0000000000 65535 f "];
  objects.forEach((object) => {
    offsets.push(String(pdf.length).padStart(10, "0") + " 00000 n ");
    pdf += `${object}\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n${offsets.join("\n")}\n`;
  pdf += `trailer << /Root 1 0 R /Size ${objects.length + 1} >>\n`;
  pdf += `startxref\n${xrefStart}\n%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

function triggerPdfDownload(fileName, pdfBlob) {
  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function viewPdfBlob(pdfBlob) {
  const url = URL.createObjectURL(pdfBlob);
  window.open(url, "_blank", "noopener,noreferrer");
  window.setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function openModal(content) {
  els.modalContent.innerHTML = content;
  els.modalOverlay.classList.add("active");
  els.modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  els.modalOverlay.classList.remove("active");
  els.modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  els.modalContent.innerHTML = "";
}

function projectModal(project) {
  return `
    <div class="modal-content">
      <div class="eyebrow">Project Detail</div>
      <h3 id="modalTitle">${escapeHtml(project.title)}</h3>
      <p class="muted">${escapeHtml(project.subtitle)}</p>
      <section>
        <h4>Overview</h4>
        <p>${escapeHtml(project.overview)}</p>
      </section>
      <section>
        <h4>Technologies Used</h4>
        <p>${escapeHtml(project.technologies.join(", "))}</p>
      </section>
      <section>
        <h4>Features</h4>
        <ul>${project.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
      </section>
      <section>
        <h4>Challenges</h4>
        <ul>${project.challenges.map((challenge) => `<li>${escapeHtml(challenge)}</li>`).join("")}</ul>
      </section>
      <section>
        <h4>Results</h4>
        <ul>${project.results.map((result) => `<li>${escapeHtml(result)}</li>`).join("")}</ul>
      </section>
      ${buildModalActions([
        { label: "GitHub Link", href: project.github, variant: "primary", target: "_blank", rel: "noreferrer" },
        { label: "Live Website Link", href: project.live, variant: "secondary", target: "_blank", rel: "noreferrer" },
      ])}
    </div>
  `;
}

function skillModal(skill) {
  return `
    <div class="modal-content">
      <div class="eyebrow">Skill Category</div>
      <h3 id="modalTitle">${escapeHtml(skill.name)}</h3>
      <p>${escapeHtml(skill.description)}</p>
      <section>
        <h4>Detailed Skills</h4>
        <ul>${skill.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    </div>
  `;
}

function certificationModal(cert) {
  return `
    <div class="modal-content">
      <div class="eyebrow">Certification</div>
      <h3 id="modalTitle">${escapeHtml(cert.title)}</h3>
      <p class="muted">${escapeHtml(cert.issuer)}</p>
      <section>
        <h4>Description</h4>
        <p>${escapeHtml(cert.description)}</p>
      </section>
      <section>
        <h4>Skills Learned</h4>
        <ul>${cert.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("")}</ul>
      </section>
      <section>
        <h4>Issuing Organization</h4>
        <p>${escapeHtml(cert.issuer)}</p>
      </section>
      <p class="muted">Certificate PDF: ${escapeHtml(cert.pdf)}.</p>
      <div class="modal-actions">
        <button class="pill-btn primary" type="button" data-view-pdf="cert" data-index="${certifications.indexOf(cert)}">View PDF</button>
        <button class="pill-btn secondary" type="button" data-download-pdf="cert" data-index="${certifications.indexOf(cert)}">Download PDF</button>
      </div>
    </div>
  `;
}

function internshipModal(item) {
  return `
    <div class="modal-content">
      <div class="eyebrow">Internship</div>
      <h3 id="modalTitle">${escapeHtml(item.title)}</h3>
      <p class="muted">${escapeHtml(item.company)} • ${escapeHtml(item.duration)}</p>
      <section>
        <h4>Responsibilities</h4>
        <ul>${item.responsibilities.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}</ul>
      </section>
      <section>
        <h4>Skills Acquired</h4>
        <ul>${item.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("")}</ul>
      </section>
      <p class="muted">Certificate PDF: ${escapeHtml(item.pdf)}.</p>
      <div class="modal-actions">
        <button class="pill-btn primary" type="button" data-view-pdf="intern" data-index="${internships.indexOf(item)}">View PDF</button>
        <button class="pill-btn secondary" type="button" data-download-pdf="intern" data-index="${internships.indexOf(item)}">Download PDF</button>
      </div>
    </div>
  `;
}

function openProject(index) {
  openModal(projectModal(projects[index]));
}

function openSkill(index) {
  openModal(skillModal(skillCategories[index]));
}

function openCertification(index) {
  openModal(certificationModal(certifications[index]));
}

function openInternship(index) {
  openModal(internshipModal(internships[index]));
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "MUKESH_K_RESUME.pdf";
  link.download = "MUKESH_K_RESUME.pdf";

  document.body.appendChild(link);
  link.click();
  link.remove();

  showToast("Resume download started");
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  els.themeToggle.innerHTML = theme === "dark" ? "<span>☀</span>" : "<span>◐</span>";
}

function initTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  applyTheme(saved || "light");
}

function animateCounter(element, target) {
  let start = 0;
  const duration = 1200;
  const begun = performance.now();
  const step = (now) => {
    const progress = Math.min((now - begun) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(start + (target - start) * eased);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        animateCounter(counter, Number(counter.dataset.counter || 0));
        observer.unobserve(counter);
      });
    },
    { threshold: 0.6 }
  );

  document.querySelectorAll("[data-counter]").forEach((counter) => counterObserver.observe(counter));
}

function initRevealObserver() {
  revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  observeReveals();
}

function observeReveals(scope = document) {
  if (!revealObserver) return;
  scope.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

function initTyping() {
  const current = typingPhrases[typingIndex];

  if (!typingErasing) {
    els.typingText.textContent = current.substring(0, typingChar + 1);
    typingChar++;

    if (typingChar >= current.length) {
      typingErasing = true;
      typingHold = 15; // pause before deleting
    }
  } else {
    if (typingHold > 0) {
      typingHold--;
      return;
    }

    els.typingText.textContent = current.substring(0, typingChar - 1);
    typingChar--;

    if (typingChar <= 0) {
      typingErasing = false;
      typingIndex = (typingIndex + 1) % typingPhrases.length;
    }
  }
}

function initParallax() {
  const elements = document.querySelectorAll("[data-parallax]");
  window.addEventListener("mousemove", (event) => {
    const xRatio = (event.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (event.clientY / window.innerHeight - 0.5) * 2;
    elements.forEach((element) => {
      const intensity = Number(element.dataset.parallax || 0.1);
      element.style.transform = `translate3d(${xRatio * 18 * intensity}px, ${yRatio * 18 * intensity}px, 0)`;
    });
    document.querySelectorAll("[data-tilt]").forEach((element) => {
      element.style.transform = `rotateX(${yRatio * -4}deg) rotateY(${xRatio * 4}deg)`;
    });
  });
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
  els.progressBar.style.width = `${progress}%`;
  els.backToTop.classList.toggle("visible", scrollTop > 600);
}

function formatAddress() {
  return `${profile.locationLabel}\n${profile.locationUrl}`;
}

function bindEvents() {
  els.downloadResumeBtn.addEventListener("click", downloadResume);
  els.downloadResumeHero.addEventListener("click", downloadResume);

  els.themeToggle.addEventListener("click", () => {
    applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
    showToast(`Switched to ${document.body.dataset.theme} mode`);
  });

  els.openMapsBtn.addEventListener("click", () => {
    window.open(profile.locationUrl, "_blank", "noreferrer");
  });

  els.copyAddressBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(formatAddress());
      showToast("Map link copied to clipboard");
    } catch {
      showToast("Copy failed. Please copy manually.");
    }
  });

  els.backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  els.modalOverlay.addEventListener("click", (event) => {
    if (event.target === els.modalOverlay) closeModal();
  });

  els.modalClose.addEventListener("click", closeModal);
  els.modalContent.addEventListener("click", (event) => {
    const downloadButton = event.target.closest("[data-download-pdf]");
    const viewButton = event.target.closest("[data-view-pdf]");

    if (downloadButton) {
  const type = downloadButton.dataset.downloadPdf;
  const index = Number(downloadButton.dataset.index);

  const item =
    type === "cert"
      ? certifications[index]
      : internships[index];

  const link = document.createElement("a");
  link.href = item.pdf;
  link.download = "";
  document.body.appendChild(link);
  link.click();
  link.remove();

  showToast("Download started");
}

   if (viewButton) {
  const type = viewButton.dataset.viewPdf;
  const index = Number(viewButton.dataset.index);

  const item =
    type === "cert"
      ? certifications[index]
      : internships[index];

  window.open(item.pdf, "_blank");
}
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  els.projectFilters.addEventListener("click", (event) => {
    const target = event.target.closest("[data-filter]");
    if (!target) return;
    activeFilter = target.dataset.filter;


    renderProjectFilters();
    renderProjects();
    attachCardEvents();
  });

  els.projectSearch.addEventListener("input", (event) => {
    activeProjectSearch = event.target.value.trim();
    renderProjects();
    attachCardEvents();
  });

  els.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contactName");
    const email = document.getElementById("contactEmail");
    const message = document.getElementById("contactMessage");

    const errors = {
      contactName: !name.value.trim() ? "Please enter your name." : "",
      contactEmail: !email.value.trim() ? "Please enter your email." : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) ? "Enter a valid email address." : "",
      contactMessage: !message.value.trim() ? "Please enter a message." : "",
    };

    Object.entries(errors).forEach(([id, error]) => {
      const el = document.querySelector(`[data-error-for="${id}"]`);
      if (el) el.textContent = error;
    });

    if (Object.values(errors).some(Boolean)) return;

    const subject = encodeURIComponent(`Portfolio inquiry for ${profile.name}`);
    const body = encodeURIComponent(`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    showToast("Opening email draft");
    event.target.reset();
  });

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

function attachCardEvents() {
  document.querySelectorAll("[data-project-index]").forEach((card) => {
    card.addEventListener("click", () => openProject(Number(card.dataset.projectIndex)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openProject(Number(card.dataset.projectIndex));
    });
  });

  document.querySelectorAll("[data-skill-index]").forEach((card) => {
    card.addEventListener("click", () => openSkill(Number(card.dataset.skillIndex)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openSkill(Number(card.dataset.skillIndex));
    });
  });

  document.querySelectorAll("[data-cert-index]").forEach((card) => {
    card.addEventListener("click", () => openCertification(Number(card.dataset.certIndex)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openCertification(Number(card.dataset.certIndex));
    });
  });

  document.querySelectorAll("[data-intern-index]").forEach((card) => {
    card.addEventListener("click", () => openInternship(Number(card.dataset.internIndex)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openInternship(Number(card.dataset.internIndex));
    });
  });
}

function boot() {
  createParticles();
  initTheme();
  renderStats();
  renderTimeline();
  renderSkillCategories();
  renderProjectFilters();
  renderProjects();
  renderCertifications();
  renderInternships();
  renderAchievements();
  renderLanguages();
  attachCardEvents();
  bindEvents();
  initRevealObserver();
  initCounters();
  initParallax();
  loadGitHub();
  updateProgress();

  els.heroProjectCount.textContent = stats[0].value;
  els.heroCertCount.textContent = stats[1].value;
  els.heroInternCount.textContent = stats[2].value;

  window.setInterval(initTyping, 90);
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1500);
});

document.addEventListener("DOMContentLoaded", boot);
