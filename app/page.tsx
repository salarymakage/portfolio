"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Image from "next/image";


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
      const windowHeight = window.innerHeight;
      
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
    <main className="relative">
      {/* Hero overlay with gradient starting from white */}
      <div 
        id="hero-overlay" 
        className="fixed top-0 left-0 w-full h-screen pointer-events-none transition-opacity duration-500"
        style={{
          background: activeSection === 'data-science' 
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(197, 208, 230, 0.8) 100%)' 
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(176, 167, 196, 0.8) 100%)',
          zIndex: 1
        }}
      ></div>
      
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-md opacity-40 scale-110 animate-pulse"></div>
              
              {/* Container to maintain circular shape */}
              <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-white shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/DS_profile.png"
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
            className="text-4xl md:text-6xl font-bold mb-3 transition-all duration-700 text-gray-800"
          >
            Chesthareah Tan
          </h1>
          
          <div id="profile-subtitle" className="transition-all duration-700 text-gray-700">
            {/* <h2 className="text-xl md:text-2xl  mb-4">Data Science and Graphic Design</h2> */}
            
            {/* Skill badges */}
            <div className="flex justify-center gap-3 mb-8">
              {/* <span className="px-4 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium border border-green-100">Python</span> */}
              <span className="px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100">Data Science</span>
              <span className="px-4 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium border border-purple-100">Graphic Design</span>
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

      {/* Spacer to push content below fixed profile - with explicit white background */}
      <div className="h-screen bg-white"></div>

      {/* About Me Section with explicit white background */}

      <section
        id="about-me"
        ref={aboutRef}
        className="py-20 bg-white transition-all duration-1000 opacity-0 will-change-transform relative"
        style={{ zIndex: 10 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              About <span className={`${activeSection === 'data-science' ? 'text-blue-600' : 'text-purple-600'}`}>Me</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              I'm passionate about solving problems through data and design, blending analytical rigor with creative flair. With expertise in both data science and graphic design, I bring a unique perspective to every project I tackle.
            </p>
            
            {/* Removed the toggle buttons that were here */}
          </div>
          
          {/* Toggle Navigation */}
          <nav className="flex justify-center gap-6 mb-8" aria-label="Main navigation">
            <button
              onClick={() => toggleSection('data-science')}
              className={`font-semibold text-lg px-4 py-2 rounded-full transition-all ${
                activeSection === 'data-science' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Data Science
            </button>
            <button
              onClick={() => toggleSection('graphic-design')}
              className={`font-semibold text-lg px-4 py-2 rounded-full transition-all ${
                activeSection === 'graphic-design' 
                  ? 'bg-purple-600 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 mb-3">Web Development:</h3>
                    <p className="text-gray-700">Django, HTML, CSS, JavaScript</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 mb-3">Data Visualization:</h3>
                    <p className="text-gray-700">Matplotlib, Seaborn</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 mb-3">Programming Languages:</h3>
                    <p className="text-gray-700">Python, SQL, JS</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 mb-3">Machine Learning:</h3>
                    <p className="text-gray-700">Scikit-learn, TensorFlow</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 mb-3">Databases:</h3>
                    <p className="text-gray-700">MySQL, PostgreSQL</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-blue-600 mb-3">Deep Learning:</h3>
                    <p className="text-gray-700">TensorFlow, Keras</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 mb-3">Design Tools:</h3>
                    <p className="text-gray-700">Figma, Adobe XD, Photoshop</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 mb-3">UI/UX Design:</h3>
                    <p className="text-gray-700">Wireframing, Prototyping, User Testing</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 mb-3">Illustration:</h3>
                    <p className="text-gray-700">Vector Art, Icon Design</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 mb-3">Typography:</h3>
                    <p className="text-gray-700">Font Pairing, Hierarchy, Readability</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 mb-3">Brand Identity:</h3>
                    <p className="text-gray-700">Logo Design, Brand Guidelines</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-lg text-purple-600 mb-3">Print Design:</h3>
                    <p className="text-gray-700">Marketing Materials, Packaging</p>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <Link 
              href={activeSection === 'data-science' ? '/datascience' : '/graphicdesign'} 
              className={`inline-flex items-center px-6 py-3 rounded-lg text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                activeSection === 'data-science' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500' 
                  : 'bg-gradient-to-r from-purple-600 to-purple-500'
              }`}
            >
              <span>View My {activeSection === 'data-science' ? 'Data Science' : 'Design'} Portfolio</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Section with explicit white background */}
      <section className="py-20 bg-gray-50 relative" style={{ zIndex: 10 }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className={`${activeSection === 'data-science' ? 'text-blue-600' : 'text-purple-600'}`}>Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeSection === 'data-science' ? (
              <>
                {/* Data Science Project Cards */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-blue-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Predictive Analysis Model</h3>
                    <p className="text-gray-600 mb-4">
                      Developed a machine learning model to predict customer churn with 92% accuracy.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Python</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">TensorFlow</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Pandas</span>
                    </div>
                    <Link href="/datascience/project1" className="text-blue-600 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-blue-500 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Market Trend Visualization</h3>
                    <p className="text-gray-600 mb-4">
                      Interactive dashboard showing market trends and consumer behavior patterns.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">D3.js</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">R</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Tableau</span>
                    </div>
                    <Link href="/datascience/project2" className="text-blue-600 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Graphic Design Project Cards */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-purple-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Brand Identity System</h3>
                    <p className="text-gray-600 mb-4">
                      Complete brand identity design for a tech startup including logo, colors, and typography.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">Adobe Illustrator</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">Branding</span>
                    </div>
                    <Link href="/graphicdesign/project1" className="text-purple-600 font-medium hover:underline">View Project →</Link>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 bg-purple-500 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Website UI Redesign</h3>
                    <p className="text-gray-600 mb-4">
                      Modernized UI design for an e-commerce platform, boosting conversion rates by 28%.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">Figma</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">UI/UX</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">Prototyping</span>
                    </div>
                    <Link href="/graphicdesign/project2" className="text-purple-600 font-medium hover:underline">View Project →</Link>
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