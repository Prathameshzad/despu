// menuData.js

export const mainMenu = [
  {
    name: "Home",
    url: "#home",
    hasChildren: false
  },
  {
    name: "About",
    url: "#about",
    hasChildren: false
  },
  {
    name: "Important Dates",
    url: "#dates",
    hasChildren: false
  },

  
  {
    name: "Guidelines",
    url: "#submission-guidelines",
    hasChildren: false
  },
    {
    name: "Contact",
    url: "#contact",
    hasChildren: false
  },
];

// services 

export const services = [
  {
    id: 1,
    title: "Full Paper Submission Deadline",
    date: "30 September 2025",
    icon: "⏳",
  },
  {
    id: 2,
    title: "Notification of Acceptance:",
    date: "15 December 2025",
    icon: "✅ ",
  },
  {
    id: 3,
    title: "Camera-Ready Submission:",
    date: "15 January 2026",
    icon: "📷 ",
  },
  {
    id: 4,
    title: "Registration",
    date: "1 January 2026",
    icon: "💻",
  },
  {
    id: 5,
    title: "Conference Dates",
    date: "6-7 March 2026",
    icon: "👥",
  },
  
  
];

// about us 

export const aboutUs = [
  {
    title: "Conference Overview",
    description: "We are pleased to announce Resonance 2026, a two-day international symposium celebrating the distinguished career and contributions of Professor Rajendra Akerkar on his 60th birthday. This symposium will bring together leading researchers, practitioners, and industry experts to explore the cutting-edge intersections between Big Data and Artificial Intelligence, with a particular focus on real-world applications that address societal challenges.",
    desc: "Conference Dates: 6-7 March 2026",
    desc1: "Venue: DESPU",
    image: "/images/banner-art.svg",
    // buttonLink: "/contact"
  },
  {
    title: "Symposium Theme",
    description: "The symposium focuses on the synergistic relationship between Big Data technologies and AI methodologies, emphasizing practical applications that leverage both domains to solve complex real-world problems. We invite contributions that demonstrate innovative approaches, theoretical advancements, and practical implementations at the intersection of these transformative technologies.",
    image: "/images/blog-1.jpg",
    // buttonLink: "/contact"
  },
  {
    title: "Call for Contributions",
    description: "We invite submissions for the following types of contributions",
    desc: "* Full Papers (8-12 pages): Original research contributions with significant theoretical or practical advances",
    desc1: "* Short Papers (6-8 pages): Preliminary research results, novel ideas, or work-in-progress",
    desc2: "* Position Papers (4-6 pages): Visionary perspectives on future directions in Big Data and AI applications",
    desc3: "* Industry Case Studies (6-8 pages): Real-world implementations and lessons learned",
    image: "/images/research.webp",
    // buttonLink: "/contact"
  }
];

// faq

export const faqData = [
  {
    question: "Disaster Response and Community Resilience",
    answer: [
      "AI for early warning and crisis prediction",
      "Smart infrastructure and resilient communities",
      "Emergency communication and cybersecurity",
      "Social media analysis during disasters",
    ]
  },
  {
    question: "Digital Safety and Information Integrity",
    answer: [
      "Detecting misinformation and fake news",
      "Countering and Preventing radicalization, online violence (including hate speech), polarization",
      "Social Network Analysis in social cybersecurity",
      "Promoting digital wellness and trust online",
    ]
  },
  {
    question: "Sustainable Mobility and Smart Transport",
    answer: [
      "AI for traffic management and transport planning",
      "Inclusive and accessible mobility systems",
      "Understanding travel behaviour through data",
      "Reducing emissions with smart transport solutions"
    ],
  },
  {
    question: "AI for Health and Wellbeing",
    answer: [
      "Predicting disease outbreaks and improving healthcare access",
      "Mental health support using AI tools",
      "Personalized medicine and health analytics",
      "Assistive technologies for vulnerable populations"
    ],
  },
  {
    question: " Clean Energy and Climate Action",
    answer: [
      "Forecasting energy demand and optimizing usage",
      "Managing renewable energy and smart grids",
      "Supporting green energy transitions",
      "AI for climate modelling and environmental monitoring"
    ],
  },
  {
    question: "Fair Governance, Social Justice and Public Policy",
    answer: [
      "AI for transparent and accountable governance",
      "Data-driven policy design and evaluation",
      "Civic engagement and participatory platforms",
      "Reducing bias in public sector AI systems",
      "AI for detecting inequality and discrimination",
      "Big data for monitoring human rights"
    ],
  },
  {
    question: " Foundational Technologies for Social Good",
    answer: [
      "Explainable and fair AI for critical decisions",
      "Causal reasoning and what-if analysis",
      "Knowledge graphs for structured intelligence",
      "Cross-domain AI integration and human-AI collaboration"
    ],
  },
];

export const teamData = {
  Chair: [
    { name: "Xuan Song", title: "School of Artificial Intelligence, Jilin University, China", image: "/images/chair_1.webp" },
    { name: "char-2", title: "Technical Chair", image: "/images/chair_1.webp" },
  ],
  "Co-Chair": [
    { name: "Co-chair-1", title: "Co-Chair – Research", image: "/images/chair_1.webp" },
    { name: "Co-chair-2", title: "Co-Chair – Logistics", image: "/images/chair_1.webp" },
  ], 
};

export const committeedata = {
  Committee: [
    { name: "Xuan Song", title: "School of Artificial Intelligence, Jilin University, China" },
    { name: "Abhishek Srivastava", title: "IIT Indore" },
    { name: "André Skupin", title: "San Diego State University, USA" },
    { name: "Debajyoti Mukhopadhyay", title: "WIDiCoReL Research Lab, India" },
    { name: "Hangli Ge", title: "The University of Tokyo, Japan" },
    { name: "Hemant Purohit", title: "George Mason University, USA" },
    { name: "Henry Hexmoor", title: "Southern Illinois University, USA" },
    { name: "Hoang Long Nguyen", title: "PDF Solutions, Canada" },
    { name: "Kaustubh Patil", title: "Forschungszentrum Jülich, Germany" },
    { name: "Pawan Lingras", title: "Saint Mary's University, Halifax, Canada" },
    { name: "Rishikesh Patankar", title: "National Skill Development Corporation, India" },
    { name: "Sachin Gaur", title: "Ukumi.ai, Norway" },
    { name: "Song Guo", title: "Hong Kong University of Science and Technology, Hong Kong" },
    { name: "Sören Auer", title: "Leibniz Universität Hannover, Germany" },
    { name: "Subhasis Thakur", title: "University of Galway, Ireland" },
    { name: "Sule Yildirim Yayilgan", title: "NTNU, Norway" },
    { name: "Vadim Ermolayev", title: "Ukrainian Catholic University, Ukraine" }
  ]
};



