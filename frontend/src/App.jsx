import { useState, useEffect } from 'react';
import { 
  Home, User, Briefcase, Code, Mail, 
  ChevronRight, Building, Calendar, Award,
  MapPin, Phone, CheckCircle, ExternalLink,
  Sparkles, Download, Sun, Moon,
  Server, Cloud, Github, Linkedin
} from 'lucide-react';

import profilePic from './assets/ProfilePic.jpeg'


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const sections = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Building },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const portfolioData = {
    name: "Raparthi Srinivas",
    title: "Full Stack Developer",
    subtitle: "Specializing in PERN & MERN Stack",
    description: "I build performant, scalable web applications with modern technologies.",
    location: "Vizianagaram, Andhra Pradesh",
    email: "raparthisrinivas011@gmail.com",
    phone: "7989908649",
    status: "Available for Freelance",
    
    stats: [
      { value: "10+", label: "Projects Completed" },
    ],

about: {
  intro: "I'm a passionate Full Stack Developer with some experience building robust, scalable web applications. I specialize in both the PERN and MERN stacks, delivering end-to-end solutions from database design to pixel-perfect frontends.",
  details: "I love turning complex problems into simple, elegant solutions. When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring new technologies.",
  // Add these missing properties:
  specialties: [
    "MERN Stack Applications",
    "PERN Stack Development", 
    "API Design & Development",
    "Database Architecture",
    "Cloud Deployment",
    "Performance Optimization"
  ],
  philosophy: "Good code is not just about making it work, but making it maintainable, scalable, and a joy for other developers to work with."
},

// Add certifications array to portfolioData object (add this after education array):
certifications: [
  "MERN Stack - SmartBridge",
  "Artificial Intelligence - Infosys Springboard",
  "Full Stack - Micro IT",
  "Object Oriented System Development Using UML, Java And Patterns"
],

    skills: {
      pernStack: [
        { name: "PostgreSQL", icon: "🐘", proficiency: "Advanced" },
        { name: "Express.js", icon: "⚡", proficiency: "Advanced" },
        { name: "React", icon: "⚛️", proficiency: "Expert" },
        { name: "Node.js", icon: "🟢", proficiency: "Expert" }
      ],
      mernStack: [
        { name: "MongoDB", icon: "🍃", proficiency: "Advanced" },
        { name: "Express.js", icon: "⚡", proficiency: "Advanced" },
        { name: "React", icon: "⚛️", proficiency: "Expert" },
        { name: "Node.js", icon: "🟢", proficiency: "Expert" }
      ],
      otherTech: [
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "⚙️" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "AWS", icon: "☁️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Git", icon: "📚" },
        { name: "Docker", icon: "🐳" },
        { name: "REST APIs", icon: "🔗" },
        { name: "AWS", icon: "☁️" },
        
      ]
    },

    projects: [
          {
      id: 1,
      title: "HireSphere",
      description: "Smart platform for seamless hiring with role-based access for job seekers and recruiters.",
      stack: "MERN",
      role: "Full Stack Developer",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Tailwind CSS"
      ],
      features: [
        "Role-based authentication for recruiters and job seekers",
        "Job posting and application management",
        "Advanced job search and filtering",
        "User profile management",
        "Secure RESTful APIs"
      ],
      liveLink: "https://job-portal-app-vlev.vercel.app/",
      githubLink: "https://github.com/srinivasraparthi/JobPortal-App"
    },
    {
      id: 2,
      title: "MediBook",
      description: "Smart platform for seamless doctor appointment booking and management.",
      stack: "MERN",
      role: "Full Stack Developer",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Socket.io"
      ],
      features: [
        "Doctor and patient role-based authentication",
        "Real-time appointment scheduling",
        "Doctor availability management",
        "Booking notifications",
        "Personalized dashboards for users"
      ],
      liveLink: "",
      githubLink: "https://github.com/srinivasraparthi/prescripto"
    },
    {
      id: 3,
      title: "ShopEZ",
      description: "One-stop online shopping platform with secure authentication and cart management.",
      stack: "MERN",
      role: "Full Stack Developer",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Tailwind CSS"
      ],
      features: [
        "User authentication and authorization",
        "Product listing and management",
        "Shopping cart functionality",
        "Responsive UI",
        "Scalable RESTful APIs"
      ],
      liveLink: "",
      githubLink: "https://github.com/srinivasraparthi/ShopeEZ-one-stop-shop-for-online-purchases"
    }

    ],

    experience: [
      {
        company: "Tech Innovations Inc.",
        role: "Senior Full Stack Developer",
        period: "2022 - Present",
        description: "Led development of enterprise SaaS platform serving 10K+ users."
      },
      {
        company: "Digital Solutions LLC",
        role: "Full Stack Developer",
        period: "2020 - 2022",
        description: "Built and maintained multiple client web applications."
      },
      {
        company: "Startup Ventures",
        role: "Junior Developer",
        period: "2019 - 2020",
        description: "Developed frontend features and assisted in backend development."
      }
    ],

    education: [
      {
        degree: "Bachelor of Computer Science",
        school: "Rajiv Gandhi University of Knowledge and Technologies",
        year: "2026"
      },
      {
        degree: "Pre University Course",
        school: "Rajiv Gandhi University of Knowledge and Technologies",
        year: "2022"
      },
      {
        degree: "Secondary Education",
        school: "AP Model School",
        year: "2020"
      }
    ]
  };

  // Filter projects based on active filter
  const filteredProjects = portfolioData.projects.filter(project => {
    if (activeProjectFilter === 'all') return true;
    if (activeProjectFilter === 'mern') return project.stack === 'MERN';
    if (activeProjectFilter === 'pern') return project.stack === 'PERN';
    return true;
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110 ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600' 
                  : 'bg-gradient-to-br from-blue-600 to-indigo-600'
              }`}>
                <span className="text-white font-bold text-lg">RS</span>
              </div>
              <span className={`text-lg font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {portfolioData.name.split(' ')[1]}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center ${
                      activeSection === section.id
                        ? darkMode
                          ? 'bg-blue-900/30 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                        : darkMode
                          ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {section.label}
                  </button>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 text-yellow-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Download CV */}
              <button className={`hidden md:flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-600 hover:to-purple-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white'
              }`}>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center">
                <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
                  darkMode
                    ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50'
                    : 'bg-blue-100 text-blue-700 border border-blue-300'
                }`}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  {portfolioData.status}
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className={`text-5xl md:text-6xl font-bold leading-tight ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Hi, I'm <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    darkMode
                      ? 'from-blue-400 to-purple-400'
                      : 'from-blue-600 to-indigo-700'
                  }`}>{portfolioData.name}</span>
                </h1>
                
                <h2 className={`text-2xl font-semibold ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {portfolioData.title}
                </h2>
                
                <p className={`text-lg ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {portfolioData.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {portfolioData.stats.map((stat, index) => (
                  <div key={index} className={`text-center p-4 rounded-xl border ${
                    darkMode
                      ? 'bg-gray-800/50 border-gray-700'
                      : 'bg-white border-gray-300'
                  }`}>
                    <div className={`text-3xl font-bold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex space-x-4 pt-8">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center hover:scale-105 ${
                    darkMode
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white'
                  }`}
                >
                  View My Work
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
                    darkMode
                      ? 'border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-300'
                      : 'border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Right Content - Profile */}
            <div className={`rounded-2xl p-8 border backdrop-blur-sm ${
              darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white border-gray-300'
            }`}>
              <div className="relative">
                {/* Profile Image Placeholder */}
                <div className={`w-64 h-64 mx-auto rounded-2xl mb-8 flex items-center justify-center ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800'
                    : 'bg-gradient-to-br from-gray-200 to-gray-300'
                }`}>
                  <img className='rounded-lg' src={profilePic} alt="" />
                </div>

                {/* Quick Info */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className={`w-5 h-5 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {portfolioData.location}
                      </span>
                    </div>
                    <div className="flex items-center">
                      
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <a href="https://github.com/srinivasraparthi" className={`p-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/srinivas-raparthi-31b0322b6/" className={`p-2 rounded-lg ${
                      darkMode 
                        ? 'bg-blue-900/30 text-blue-300 hover:bg-blue-800/50' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://leetcode.com/u/7989908649/" className={`p-2 rounded-lg ${
                      darkMode 
                        ? 'bg-blue-900/30 text-blue-300 hover:bg-blue-800/50' 
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}>
                      LeetCode
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className={`text-4xl font-bold mb-4 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        About Me
      </h2>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
        Get to know my professional journey and philosophy
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      <div className={`rounded-2xl p-8 border ${
        darkMode
          ? 'bg-gray-800/50 border-gray-700'
          : 'bg-white border-gray-300'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          My Journey
        </h3>
        
        {/* FIX: Use portfolioData.about.intro instead of portfolioData.about.description */}
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {portfolioData.about.intro}
        </p>
        
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {portfolioData.about.details}
        </p>
        
        <div className="space-y-4">
          {portfolioData.about.specialties.map((specialty, idx) => (
            <div key={idx} className="flex items-start">
              <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                darkMode ? 'text-green-400' : 'text-green-500'
              }`} />
              <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                {specialty}
              </span>
            </div>
          ))}
        </div>
        
        <div className={`mt-8 pt-6 border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <p className={`italic ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            "{portfolioData.about.philosophy}"
          </p>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="space-y-8">
        {/* Education */}
        <div className={`rounded-2xl p-8 border ${
          darkMode
            ? 'bg-gray-800/50 border-gray-700'
            : 'bg-white border-gray-300'
        }`}>
          <h3 className={`text-2xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education
          </h3>
          
          <div className="space-y-6">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx}>
                <h4 className={`font-semibold mb-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {edu.degree}
                </h4>
                <p className={`text-sm mb-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {edu.school}
                </p>
                <div className="flex justify-between">
                  <span className={`text-sm ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {edu.year}
                  </span>
                  {/* FIX: edu.details doesn't exist in your data structure */}
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {edu.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications - Add check for certifications array */}
        {portfolioData.certifications && portfolioData.certifications.length > 0 && (
          <div className={`rounded-2xl p-8 border ${
            darkMode
              ? 'bg-gray-800/50 border-gray-700'
              : 'bg-white border-gray-300'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Certifications
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.certifications.map((cert, idx) => (
                <div key={idx} className={`p-3 rounded-lg text-center ${
                  darkMode
                    ? 'bg-gray-700/50 border border-gray-600'
                    : 'bg-blue-50 border border-blue-200'
                }`}>
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Tech Stack
            </h2>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Technologies I use to build modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* PERN Stack */}
            <div className={`rounded-2xl p-8 border ${
              darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white border-gray-300'
            }`}>
              <h3 className={`text-xl font-bold mb-6 pb-3 border-b ${
                darkMode ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-900'
              }`}>
                PERN Stack
              </h3>
              
              <div className="space-y-4">
                {portfolioData.skills.pernStack.map((skill, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${
                    darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                  }`}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      skill.proficiency === 'Expert' 
                        ? darkMode 
                          ? 'bg-green-900/30 text-green-300' 
                          : 'bg-green-100 text-green-700'
                        : darkMode
                          ? 'bg-blue-900/30 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                    }`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* MERN Stack */}
            <div className={`rounded-2xl p-8 border ${
              darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white border-gray-300'
            }`}>
              <h3 className={`text-xl font-bold mb-6 pb-3 border-b ${
                darkMode ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-900'
              }`}>
                MERN Stack
              </h3>
              
              <div className="space-y-4">
                {portfolioData.skills.mernStack.map((skill, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${
                    darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                  }`}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      skill.proficiency === 'Expert' 
                        ? darkMode 
                          ? 'bg-green-900/30 text-green-300' 
                          : 'bg-green-100 text-green-700'
                        : darkMode
                          ? 'bg-blue-900/30 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                    }`}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Technologies */}
            <div className={`rounded-2xl p-8 border ${
              darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white border-gray-300'
            }`}>
              <h3 className={`text-xl font-bold mb-6 pb-3 border-b ${
                darkMode ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-900'
              }`}>
                Other Technologies
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {portfolioData.skills.otherTech.map((skill, idx) => (
                  <div key={idx} className={`flex items-center p-3 rounded-lg ${
                    darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                  }`}>
                    <span className="text-xl mr-2">{skill.icon}</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-6 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              A selection of my recent work
            </p>
          </div>

          {/* Project Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              onClick={() => setActiveProjectFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProjectFilter === 'all'
                  ? darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveProjectFilter('mern')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProjectFilter === 'mern'
                  ? darkMode
                    ? 'bg-green-900/30 text-green-300 border border-green-700/50'
                    : 'bg-green-100 text-green-700 border border-green-300'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              MERN Stack
            </button>
            <button 
              onClick={() => setActiveProjectFilter('pern')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProjectFilter === 'pern'
                  ? darkMode
                    ? 'bg-blue-900/30 text-blue-300 border border-blue-700/50'
                    : 'bg-blue-100 text-blue-700 border border-blue-300'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              PERN Stack
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50 hover:shadow-2xl'
                    : 'bg-white border-gray-300 hover:border-blue-400 hover:shadow-xl'
                }`}
              >
                {/* Project Header */}
                <div className={`p-5 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      project.stack === 'PERN'
                        ? darkMode
                          ? 'bg-blue-900/30 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                        : darkMode
                          ? 'bg-green-900/30 text-green-300'
                          : 'bg-green-100 text-green-700'
                    }`}>
                      {project.stack}
                    </span>
                    <div className={`text-xs font-medium px-2 py-1 rounded ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {project.role}
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold group-hover:text-blue-500 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div className="p-5">
                  <p className={`mb-4 text-sm leading-relaxed ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-5">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${
                          darkMode ? 'bg-blue-400' : 'bg-blue-500'
                        }`} />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-5">
                    <div className={`text-xs font-medium mb-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Technologies:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span 
                          key={idx} 
                          className={`px-2 py-1 text-xs rounded ${
                            darkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className={`px-2 py-1 text-xs rounded ${
                          darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-gray-700">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2.5 text-center text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2.5 text-center text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                        darkMode
                          ? 'bg-blue-900/30 text-blue-300 hover:bg-blue-800/50'
                          : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                No {activeProjectFilter === 'all' ? '' : activeProjectFilter} projects found
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white'
              }`}
            >
              Want to build something similar?
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get In Touch
            </h2>
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Let's discuss your next project
            </p>
          </div>

          <div className={`rounded-3xl p-8 md:p-12 ${
            darkMode
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
              : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Email</p>
                      <p className="text-xl font-semibold">{portfolioData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Phone</p>
                      <p className="text-xl font-semibold">{portfolioData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm">Location</p>
                      <p className="text-xl font-semibold">{portfolioData.location}</p>
                    </div>
                  </div>
                </div>

                <div className={`mt-12 p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/10'
                }`}>
                  <h4 className="font-semibold mb-4">Currently Available For</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Full-time Roles", "Contract Work", "Freelance Projects", "Technical Consultancy"].map((item, idx) => (
                      <span key={idx} className="px-4 py-2 bg-white/20 rounded-full text-sm hover:bg-white/30 transition">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                    />
                  </div>
                  
                  <input 
                    type="text" 
                    placeholder="Subject"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                  />
                  
                  <textarea 
                    placeholder="Your Message"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white h-40"
                  ></textarea>
                  
                  <button className="w-full bg-white text-blue-700 font-semibold py-4 rounded-xl hover:bg-blue-50 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${
        darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                  darkMode
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                    : 'bg-gradient-to-br from-blue-600 to-indigo-700'
                }`}>
                  <span className="text-white font-bold text-lg">RS</span>
                </div>
                <span className={`text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {portfolioData.name}
                </span>
              </div>
              <p className={`text-sm mt-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Full Stack Developer
              </p>
            </div>
            
            <div className="flex space-x-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm transition-colors ${
                    darkMode
                      ? 'text-gray-400 hover:text-blue-300'
                      : 'text-gray-600 hover:text-blue-700'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t text-center text-sm ${
            darkMode ? 'text-gray-500 border-gray-800' : 'text-gray-500 border-gray-200'
          }`}>
            <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
            <p className="mt-1">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;