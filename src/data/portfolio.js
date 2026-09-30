export const personalInfo = {
  name: 'Zaheem',
  fullName: 'Zaheem Shah',
  title: 'Full-Stack Software Developer',
  tagline:
    'I build modern, responsive and scalable web applications using modern frontend and backend technologies.',
  email: 'zaheemshh@gmail.com',
  location: 'Karachi, Pakistan',
  availability: 'Open to opportunities',

  social: {
    github: 'https://github.com/zaheemshah',
    linkedin: 'https://www.linkedin.com/in/zaheem-shah-4a1b98412',
    twitter: '#',
  },

  resumeUrl: '#',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [];

export const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
    ],
  },

  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'PHP', level: 80 },
      { name: 'Laravel', level: 80 },
    ],
  },

  {
    title: 'Database & Tools',
    icon: '🚀',
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 80 },
      { name: 'C# / .NET', level: 70 },
      { name: 'Git & GitHub', level: 80 },
    ],
  },
];

export const techStack = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PHP',
  'Laravel',
  'MySQL',
  'C#',
  '.NET',
  'Git',
  'GitHub',
];

export const projects = [
  {
  id: 1,
  title: 'Movie Hub',
  description:
    'A full-stack movie discovery platform built with Laravel and the TMDB API. Users can browse trending movies, search for movies, view detailed information, securely register and log in, and manage their personal favorites.',
  image: '/project-images/movie-hub-1.png',
  gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
  tags: ['Laravel', 'PHP', 'TMDB API', 'Blade', 'SQLite', 'Authentication'],
  liveUrl: null,
  githubUrl: null,
  featured: true,
},

  {
    id: 2,
    title: 'MERN E-Commerce Store',
    description:
      'A full-stack e-commerce platform built with React, Node.js, Express and MongoDB, featuring user authentication, product browsing, cart, wishlist, orders and role-based functionality',
    image: null,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: null,
    githubUrl: 'https://github.com/zaheemshah/mern-ecommerce',
    featured: true,
  },

  {
    id: 3,
    title: 'Personal Portfolio',
    description:
      'A responsive personal portfolio built with React to showcase my development skills, projects, technical experience and professional journey',
    image: null,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['React', 'JavaScript', 'CSS', 'Vite'],
    liveUrl: null,
    githubUrl: 'https://github.com/zaheemshah/zaheem-portfolio',
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    role: 'Full-Stack Development Journey',
    company: 'Personal Projects & Learning',
    period: 'Present',
    description:
      'Building practical web applications while developing skills across frontend, backend, databases and modern full-stack technologies.',

    highlights: [
      'Built a full-stack MERN e-commerce application',
      'Built a Laravel movie search and favorites application',
      'Developing projects with React, Node.js, PHP, Laravel and .NET',
    ],
  },
];