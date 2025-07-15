"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const profileRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('data-science');
  
  // Handle scroll for animation effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle between sections
  const toggleSection = (section: string) => {
    setActiveSection(section);
  };

  const scrollToAbout = () => {
    // Get the about section element
    const aboutSection = document.getElementById('about-me');
    
    if (aboutSection) {
      // Calculate window height for proper positioning
      // Using the window height - removed unused variable warning
      
      // Calculate position to scroll to - offset by some pixels to ensure the title is visible
      const offset = 100; // Adjust this value as needed
      const position = aboutSection.getBoundingClientRect().top + window.scrollY - offset;
      
      // Smooth scroll to about section
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
      
      // This helps ensure the About Me section becomes visible even with animation delays
      setTimeout(() => {
        // Make sure about section is visible
        if (aboutSection) {
          aboutSection.style.opacity = '1';
          aboutSection.style.transform = 'translateY(0)';
        }
      }, 500); // Slight delay to ensure scroll has completed
    }
  };
  
  
  // Calculate animation based on scroll position
  useEffect(() => {
    if (!profileRef.current) return;
    
    const profileSection = profileRef.current;
    const profileContent = document.querySelector('#profile-content') as HTMLElement;
    const profileImage = document.querySelector('#profile-image') as HTMLElement;
    const profileName = document.querySelector('#profile-name') as HTMLElement;
    const profileSubtitle = document.querySelector('#profile-subtitle') as HTMLElement;
    const heroOverlay = document.querySelector('#hero-overlay') as HTMLElement;
    const aboutSection = aboutRef.current;
    
    // Get viewport height
    const windowHeight = window.innerHeight;

    
    // Normalize scroll progress (0 to 1) - controls when animation completes
    const scrollProgress = Math.min(1, scrollY / (windowHeight * 0.6));
    
    // Apply transforms and animations
    if (profileContent) {
      // Scale down profile content as user scrolls
      const scale = 1 - (scrollProgress * 0.3);
      const translateY = scrollProgress * -50; // Move up slightly
      profileContent.style.transform = `translate(-50%, ${translateY}px) scale(${scale})`;
      profileContent.style.left = '50%'; // Center horizontally
      profileContent.style.opacity = String(Math.max(0, 1 - scrollProgress * 1.5));
    }
    
    if (profileImage) {
      // Shrink image as user scrolls
      profileImage.style.transform = `scale(${1 - scrollProgress * 0.2})`;
    }
    
    if (profileName) {
      // Fade out name slightly faster
      profileName.style.opacity = String(Math.max(0, 1 - scrollProgress * 2));
    }
    
    if (profileSubtitle) {
      // Fade out subtitle even faster
      profileSubtitle.style.opacity = String(Math.max(0, 1 - scrollProgress * 2.5));
    }
    
    // Control the hero overlay opacity
    if (heroOverlay) {
      heroOverlay.style.opacity = String(Math.max(0, 1 - scrollProgress * 1.5));
      
      // Completely hide when scrolled down enough
      if (scrollProgress >= 0.9) {
        heroOverlay.style.visibility = 'hidden';
      } else {
        heroOverlay.style.visibility = 'visible';
      }
    }
    
    // Make profile section disappear completely after certain scroll progress
    if (profileSection) {
      if (scrollProgress >= 0.9) {
        profileSection.style.visibility = 'hidden';
      } else {
        profileSection.style.visibility = 'visible';
      }
    }
    
    // Fade in about section as user scrolls
    if (aboutSection) {
      const aboutScrollProgress = Math.max(0, (scrollY - windowHeight * 0.5) / (windowHeight * 0.2));
      aboutSection.style.opacity = String(Math.min(1, aboutScrollProgress));
      aboutSection.style.transform = `translateY(${Math.max(0, 50 - aboutScrollProgress * 50)}px)`;
    }
    
  }, [scrollY, activeSection]);

  return (
    <main className="relative bg-gray-50 dark:bg-black">
      {/* Hero overlay with gradient - darker in dark mode */}
      <div 
        id="hero-overlay" 
        className="fixed top-0 left-0 w-full h-screen pointer-events-none transition-opacity duration-500"
      >
        {/* Light mode gradient */}
        <div 
          className="absolute inset-0 transition-opacity duration-500 dark:opacity-0"
          style={{
            background: activeSection === 'data-science' 
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(197, 208, 230, 0.8) 100%)' 
              : activeSection === 'web-development'
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(187, 229, 198, 0.8) 100%)'
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(176, 167, 196, 0.8) 100%)'
          }}
        />
        
        {/* Dark mode gradient - much darker */}
        <div 
          className="absolute inset-0 transition-opacity duration-500 opacity-0 dark:opacity-100"
          style={{
            background: activeSection === 'data-science' 
              ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(30, 58, 138, 0.3) 100%)' 
              : activeSection === 'web-development'
              ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(21, 128, 61, 0.3) 100%)'
              : 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(88, 28, 135, 0.3) 100%)',
            zIndex: 1
          }}
        />
      </div>
      
      {/* Profile Section - Centered and Fixed */}
      <section
        id="profile"
        ref={profileRef}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center"
        style={{ zIndex: 2 }}
        aria-label="Profile introduction"
      >
        <div
          id="profile-content"
          className="absolute text-center max-w-4xl px-6 transition-all duration-500 ease-out"
          style={{ zIndex: 3, left: '50%', transform: 'translateX(-50%)' }}
        >
          <div id="profile-image" className="transition-all duration-700">
            <div className="relative mx-auto mb-8 w-[200px] h-[200px]">
              {/* Enhanced background glow with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-full blur-md opacity-40 dark:opacity-20 scale-110 animate-pulse"></div>
              
              {/* Container to maintain circular shape */}
              <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-white shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/profile.png"
                    alt="Tan Chesthareah"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    priority
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <h1 
            id="profile-name" 
            className="text-4xl md:text-6xl font-bold mb-3 transition-all duration-700 text-gray-800 dark:text-white"
          >
            Chesthareah Tan
          </h1>
          
          <div id="profile-subtitle" className="transition-all duration-700 text-gray-700 dark:text-gray-300">
            {/* <h2 className="text-xl md:text-2xl  mb-4">Data Science and Graphic Design</h2> */}
            
            {/* Skill badges */}
            <div className="flex justify-center gap-3 mb-8">
              {/* <span className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium border border-green-100">Python</span> */}
              <span className="px-4 py-1 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-100 dark:border-blue-800">Data Science</span>
              <span className="px-4 py-1 bg-green-50 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm font-medium border border-green-100 dark:border-green-800">Web Development</span>
              <span className="px-4 py-1 bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-100 dark:border-purple-800">Graphic Design</span>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-4 mb-10">
            <a href="#" aria-label="LinkedIn" className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="p-2 text-gray-500 hover:text-gray-800 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="p-2 text-gray-500 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all group"
            aria-label="Scroll down to learn more"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Spacer to push content below fixed profile - with explicit background */}
      <div className="h-screen bg-white dark:bg-black"></div>

      {/* About Me Section with responsive background */}

      <section
        id="about-me"
        ref={aboutRef}
        className="py-20 bg-white dark:bg-gray-950 transition-all duration-1000 opacity-0 will-change-transform relative"
        style={{ zIndex: 10 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              About <span className={`${activeSection === 'data-science' ? 'text-blue-600' : activeSection === 'web-development' ? 'text-green-600' : 'text-purple-600'}`}>Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              I&apos;m passionate about solving problems through data, code, and design, blending analytical rigor with creative flair. With expertise in data science, web development, and graphic design, I bring a unique perspective to every project I tackle.
            </p>
            
            {/* Removed the toggle buttons that were here */}
          </div>
          
          {/* Toggle Navigation */}
          <nav className="flex justify-center gap-4 mb-8" aria-label="Main navigation">
            <button
              onClick={() => toggleSection('data-science')}
              className={`font-semibold text-lg px-4 py-2 rounded-full transition-all ${
                activeSection === 'data-science' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Data Science
            </button>
            <button
              onClick={() => toggleSection('web-development')}
              className={`font-semibold text-lg px-4 py-2 rounded-full transition-all ${
                activeSection === 'web-development' 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => toggleSection('graphic-design')}
              className={`font-semibold text-lg px-4 py-2 rounded-full transition-all ${
                activeSection === 'graphic-design' 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Graphic Design
            </button>
          </nav>
          
          {/* Skills indicators based on active section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeSection === 'data-science' ? (
                <>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3">Web Development:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Django, HTML, CSS, JavaScript</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3">Data Visualization:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Matplotlib, Seaborn</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3">Programming Languages:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Python, SQL, JS</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3">Machine Learning:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Scikit-learn, TensorFlow</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3">Databases:</h3>
                    <p className="text-gray-700 dark:text-gray-300">MySQL, PostgreSQL</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3">Deep Learning:</h3>
                    <p className="text-gray-700 dark:text-gray-300">TensorFlow, Keras</p>
                  </div>
                </>
              ) : activeSection === 'web-development' ? (
                <>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-3">Frontend Development:</h3>
                    <p className="text-gray-700 dark:text-gray-300">React, Next.js, HTML, CSS, JavaScript</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-3">Backend Development:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Node.js, Express, Django, Flask</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-3">Database Management:</h3>
                    <p className="text-gray-700 dark:text-gray-300">MongoDB, PostgreSQL, MySQL</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-3">Styling & UI:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Tailwind CSS, SCSS, Bootstrap</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-3">Development Tools:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Git, Docker, Webpack, Vite</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-3">Cloud & Deployment:</h3>
                    <p className="text-gray-700 dark:text-gray-300">AWS, Vercel, Netlify, Heroku</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-3">Design Software:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Adobe Creative Suite, Figma, Sketch</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-3">Brand Identity:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Logo Design, Brand Guidelines, Typography</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-3">Digital Design:</h3>
                    <p className="text-gray-700 dark:text-gray-300">UI/UX Design, Web Graphics, Social Media</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-3">Print Design:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Brochures, Posters, Business Cards</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-3">Illustration:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Vector Art, Digital Illustration, Icons</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-3">Photography:</h3>
                    <p className="text-gray-700 dark:text-gray-300">Photo Editing, Retouching, Color Grading</p>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <Link 
              href={activeSection === 'data-science' ? '/datascience' : activeSection === 'web-development' ? '/webdevelopment' : '/graphicdesign'} 
              className={`inline-flex items-center px-6 py-3 rounded-lg text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                activeSection === 'data-science' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500' 
                  : activeSection === 'web-development'
                  ? 'bg-gradient-to-r from-green-600 to-green-500'
                  : 'bg-gradient-to-r from-purple-600 to-purple-500'
              }`}
            >
              <span>View My {activeSection === 'data-science' ? 'Data Science' : activeSection === 'web-development' ? 'Web Development' : 'Design'} Portfolio</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Section with explicit white background */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className={`${activeSection === 'data-science' ? 'text-blue-600' : activeSection === 'web-development' ? 'text-green-600' : 'text-purple-600'}`}>Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeSection === 'data-science' ? (
              <>
                {/* Data Science Project Cards */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl overflow-hidden transform transition-all hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-600 flex items-center justify-center relative">
                    <Image 
                      src="/projectimg/face_reg.png" 
                      alt="Face Recognition Project" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Face Recognition Project</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A real-time face recognition system that enhances security by replacing passwords with machine learning and deep learning-based facial authentication.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">Python</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">Django</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">LBPH</span>
                    </div>
                    <Link href="/datascience/project1" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl overflow-hidden transform transition-all hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-48 bg-blue-500 flex items-center justify-center relative">
                    <Image 
                      src="/projectimg/loan.avif" 
                      alt="Loan Recommendation System" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Loan Recommendation System</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      This project uses data to predict a user&apos;s loan eligibility and assess their risk level based on personal and historical financial information.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">Random Forest</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">Python</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">MySQL</span>
                    </div>
                    <Link href="/datascience/project2" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
              </>
            ) : activeSection === 'web-development' ? (
              <>
                {/* Web Development Project Cards */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl overflow-hidden transform transition-all hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-48 bg-green-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Full-stack e-commerce solution with payment integration and admin dashboard.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded">Next.js</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded">TypeScript</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded">Stripe</span>
                    </div>
                    <Link href="/webdevelopment/project1" className="text-green-600 dark:text-green-400 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl overflow-hidden transform transition-all hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-48 bg-green-500 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Modern portfolio website with animations and responsive design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded">React</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded">Tailwind</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-medium rounded">Framer Motion</span>
                    </div>
                    <Link href="/webdevelopment/project2" className="text-green-600 dark:text-green-400 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Graphic Design Project Cards */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl overflow-hidden transform transition-all hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-48 bg-purple-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Brand Identity Design</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Complete brand identity package including logo, color palette, and brand guidelines.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded">Adobe Illustrator</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded">Branding</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded">Logo Design</span>
                    </div>
                    <Link href="/graphicdesign/project1" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl overflow-hidden transform transition-all hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-48 bg-purple-500 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Website UI Redesign</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Modernized UI design for an e-commerce platform, boosting conversion rates by 28%.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded">Figma</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded">UI/UX</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded">Prototyping</span>
                    </div>
                    <Link href="/graphicdesign/project2" className="text-purple-600 dark:text-purple-400 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}