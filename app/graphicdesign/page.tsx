"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AnimatedCirclesBackground from '../components/AnimatedCirclesBackground';
// import ProfileBackgroundAnimation from '../components/ProfileBackgroundAnimation';
import CircularToolsBackground from '../components/CircularToolsBackground';

// Define interfaces for props
interface LogoItem {
  src: string;
  alt: string;
  shape: string;
}

interface SkillCardProps {
  title: string;
  skills: string;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// Auto-scrolling Logo Carousel Component with shaped logos and no scrollbar
const LogoCarousel = () => {
  // Specify HTMLDivElement as the type for the ref
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Sample client logos with shape styles
  const logos: LogoItem[] = [
    { src: "/logo1.png", alt: "Client 1", shape: "rounded-full" },
    { src: "/logo2.png", alt: "Client 2", shape: "rounded-lg" },
    { src: "/logo3.png", alt: "Client 3", shape: "rounded-xl" },
    { src: "/logo4.png", alt: "Client 4", shape: "rounded-full" },
    { src: "/logo5.png", alt: "Client 5", shape: "rounded-lg" },
    { src: "/logo6.png", alt: "Client 6", shape: "rounded-xl" },
  ];
  
  useEffect(() => {
    // Get the actual HTML element
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;
    
    // Create a non-null reference to use in the closure
    const carousel = carouselElement as HTMLDivElement;
    
    // Calculate the width of a single set of logos
    const logoSetWidth = carousel.scrollWidth / 3;
    
    // Set initial scroll position to start of the second set
    carousel.scrollLeft = 0;
    
    // Slow, steady scroll speed
    const speed = 0.3; // Pixels per frame - lower value = slower scroll
    let scrollAmount = 0;
    let animationId: number;
    
    const scroll = () => {
      scrollAmount += speed;
      carousel.scrollLeft = scrollAmount;
      
      // When we reach the second set of logos, reset to the first set
      if (scrollAmount >= logoSetWidth * 2) {
        scrollAmount = logoSetWidth;
        carousel.scrollLeft = scrollAmount;
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start animation
    animationId = requestAnimationFrame(scroll);
    
    // Pause and resume functions
    const pauseAnimation = () => {
      cancelAnimationFrame(animationId);
    };
    
    const resumeAnimation = () => {
      scrollAmount = carousel.scrollLeft;
      animationId = requestAnimationFrame(scroll);
    };
    
    // Add event listeners for pause/resume
    carousel.addEventListener('mouseenter', pauseAnimation);
    carousel.addEventListener('mouseleave', resumeAnimation);
    carousel.addEventListener('touchstart', pauseAnimation);
    carousel.addEventListener('touchend', resumeAnimation);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', pauseAnimation);
      carousel.removeEventListener('mouseleave', resumeAnimation);
      carousel.removeEventListener('touchstart', pauseAnimation);
      carousel.removeEventListener('touchend', resumeAnimation);
    };
  }, []);
  
  return (
    <div className="relative w-full my-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-600 dark:text-purple-400 text-center">Logo Designs</h2>
      
      <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md py-4 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-gray-800 z-10"></div>
        
        <div 
          ref={carouselRef}
          className="flex overflow-x-hidden h-full"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {/* Hide scrollbar with CSS */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          <div className="flex space-x-12 px-16 items-center h-full">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 p-2 bg-white dark:bg-gray-700 ${logo.shape} shadow-sm hover:shadow-md transition-all duration-300 w-16 h-16 flex items-center justify-center`}
              >
                <Image 
                  src={logo.src}
                  alt={logo.alt}
                  width={48}
                  height={48}
                  className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Second set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`duplicate-${index}`} 
                className={`flex-shrink-0 p-2 bg-white dark:bg-gray-700 ${logo.shape} shadow-sm hover:shadow-md transition-all duration-300 w-16 h-16 flex items-center justify-center`}
              >
                <Image 
                  src={logo.src}
                  alt={logo.alt}
                  width={48}
                  height={48}
                  className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Third set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`triplicate-${index}`} 
                className={`flex-shrink-0 p-2 bg-white dark:bg-gray-700 ${logo.shape} shadow-sm hover:shadow-md transition-all duration-300 w-16 h-16 flex items-center justify-center`}
              >
                <Image 
                  src={logo.src}
                  alt={logo.alt}
                  width={48}
                  height={48}
                  className="object-contain max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>        
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-gray-800 z-10"></div>
      </div>
    </div>
  );
};

// Video section component
const VideoSection = () => (
  <div className="mb-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-600 dark:text-purple-400 text-center">Video Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
          {/* Replace with actual video element when you have the files */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Product Animation</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            3D animation showcasing a product&apos;s features and benefits with dynamic transitions and visual effects.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">After Effects</span>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Animation</span>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Motion Graphics</span>
          </div>
          <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">Watch Video →</a>
        </div>
      </div>
      
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
          {/* Replace with actual video element when you have the files */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Brand Story Video</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Engaging video narrative that tells the story behind a brand, connecting with audiences on an emotional level.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Premiere Pro</span>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Storytelling</span>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Branding</span>
          </div>
          <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">Watch Video →</a>
        </div>
      </div>
    </div>
  </div>
);

// Poster Section Component
const PosterSection = () => (
  <div className="mb-16">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-600 dark:text-purple-400 text-center">Poster Designs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((index) => (
        <div key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md group">
          <div className={`aspect-square ${index === 1 ? 'bg-pink-100 dark:bg-pink-900' : 'bg-purple-100 dark:bg-purple-900'} relative overflow-hidden`}>
            {/* Replace with actual poster images when you have them */}
            <div className="absolute inset-0 flex items-center justify-center text-purple-500 dark:text-purple-400">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-white font-bold px-4 py-2 rounded-full bg-purple-600 bg-opacity-80">View Larger</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">
              {index === 1 ? "Poster Design 1!" : `Poster Design ${index}`}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
              {index === 1 && "Festival promotional poster with vibrant colors and modern typography."}
              {index === 2 && "Minimalist product launch poster with elegant composition."}
              {index === 3 && "Social awareness campaign poster with powerful imagery."}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
      <a href="#" className="inline-block px-6 py-2 border border-purple-500 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-colors">
        View All Poster Designs
      </a>
    </div>
  </div>
);

// Updated SkillCard component with proper TypeScript typing
const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-6 rounded-xl shadow-md">
    <h3 className="font-bold text-lg text-purple-600 dark:text-purple-400 mb-3">• {title}:</h3>
    <p className="text-gray-700 dark:text-gray-300">{skills}</p>
  </div>
);

// SocialLink component with proper TypeScript typing
const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black pt-20">
      {/* Make sure the animated background is the first child, before any other content */}
      {/* <AnimatedCirclesBackground /> */}
      
      <div className="max-w-6xl mx-auto px-4 pb-20 relative z-10">
        {/* Hero section with profile on left and content on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          {/* Left side - Profile image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-[400px] h-[400px]">
              {/* Circle Tools Background - positioned behind the profile image */}
              <div className="absolute inset-0 ">
                <CircularToolsBackground />
              </div>
              
              {/* Profile Image - positioned in front of the circular tools */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="z-10 w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center">
                  <Image
                    src="/profile.png"
                    alt="Tan Chesthareah"
                    width={240}
                    height={240}
                    className="object-cover w-full h-full"
                    priority
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-purple-600 dark:text-purple-400">Graphic Designer</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">Creating Visual Stories</p>
            <div className="max-w-3xl">
              <p className="text-lg mb-6">
                I transform ideas into compelling visual narratives that captivate audiences and strengthen brand identities. With a keen eye for aesthetics and user experience, I create designs that not only look beautiful but also effectively communicate your message.
              </p>
              <div className="flex gap-4 mb-6">
                <SocialLink 
                  href="https://dribbble.com" 
                  label="Dribbble Profile"
                  icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/></svg>}
                />
                <SocialLink 
                  href="https://behance.net" 
                  label="Behance Portfolio"
                  icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.5.348-1.08.6-1.76.767-.68.165-1.41.254-2.2.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.428-.29.7-.61.826-.94h2.713c-.435 1.348-1.1 2.31-1.997 2.884-.9.576-1.983.866-3.254.866-.877 0-1.67-.137-2.384-.413-.72-.275-1.326-.672-1.84-1.19-.507-.518-.895-1.143-1.17-1.868-.273-.727-.41-1.53-.41-2.4 0-.84.14-1.632.425-2.367.285-.735.677-1.37 1.18-1.91.507-.54 1.106-.962 1.805-1.267.698-.305 1.46-.458 2.285-.458.873 0 1.643.17 2.31.506.665.338 1.216.79 1.655 1.358.44.568.75 1.22.93 1.96.18.74.217 1.52.118 2.362h-8.12c0 .823.233 1.492.69 2.016zm-8.97-10.23c-.31-.282-.717-.423-1.22-.423-.332 0-.64.066-.948.197-.31.132-.562.327-.767.583-.21.256-.36.58-.46.96-.1.39-.148.83-.148 1.33h4.537c-.068-.804-.292-1.39-.672-1.747-.38-.36-.84-.537-1.368-.537-.307 0-.607.094-.902.283zm10.24 3.312c-.33-.374-.79-.557-1.37-.557-.344 0-.646.066-.903.197-.26.132-.48.31-.61.528-.13.22-.261.45-.334.707-.07.258-.115.503-.115.74h4.06c-.067-.693-.248-1.24-.727-1.614zm-2.87 9.754v-3.746H0v3.746h6.34z"/></svg>}
                />
              </div>
              {/* <Link 
                href="/contact"
                className="inline-block px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Hire Me for Design Projects
              </Link> */}
            </div>
          </div>
        </div>
        
        {/* Content sections */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 mb-16">
          {/* Updated Skills section with the new format */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-600 dark:text-purple-400 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <SkillCard title="Design Tools" skills="Figma, Adobe XD, Photoshop" />
            <SkillCard title="UI/UX Design" skills="Wireframing, Prototyping, User Testing" />
            <SkillCard title="Illustration" skills="Vector Art, Icon Design" />
            <SkillCard title="Typography" skills="Font Pairing, Hierarchy, Readability" />
            <SkillCard title="Brand Identity" skills="Logo Design, Brand Guidelines" />
            <SkillCard title="Print Design" skills="Marketing Materials, Packaging" />
          </div>
        </div>
        
        {/* Logo Carousel */}
        <LogoCarousel />

        {/* Poster Section */}
        <PosterSection />

        {/* Video Section */}
        <VideoSection />

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-purple-600 dark:text-purple-400 text-center">Featured Projects</h2>
        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md">
            <div className="h-48 bg-purple-200 dark:bg-purple-900 flex items-center justify-center">
              <svg className="w-24 h-24 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2h-8zm0 2h8v12h-8V4z" />
                <path d="M2 6a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">TechStart Brand Redesign</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete brand identity redesign for a tech startup, including logo, brand guidelines, and marketing materials.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Brand Identity</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Adobe Illustrator</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Strategy</span>
              </div>
              <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">View Project →</a>
            </div>
          </div>
          
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md">
            <div className="h-48 bg-purple-200 dark:bg-purple-900 flex items-center justify-center">
              <svg className="w-24 h-24 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E-Commerce App UI Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Designed a modern, user-friendly interface for a mobile e-commerce application with improved user experience and conversion rates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">UI/UX</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Figma</span>
                <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">Prototyping</span>
              </div>
              <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">View Project →</a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-6 mb-12">
          <SocialLink 
            href="https://dribbble.com" 
            label="Dribbble Profile"
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"/></svg>}
          />
          <SocialLink 
            href="https://behance.net" 
            label="Behance Portfolio"
            icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.5.348-1.08.6-1.76.767-.68.165-1.41.254-2.2.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.428-.29.7-.61.826-.94h2.713c-.435 1.348-1.1 2.31-1.997 2.884-.9.576-1.983.866-3.254.866-.877 0-1.67-.137-2.384-.413-.72-.275-1.326-.672-1.84-1.19-.507-.518-.895-1.143-1.17-1.868-.273-.727-.41-1.53-.41-2.4 0-.84.14-1.632.425-2.367.285-.735.677-1.37 1.18-1.91.507-.54 1.106-.962 1.805-1.267.698-.305 1.46-.458 2.285-.458.873 0 1.643.17 2.31.506.665.338 1.216.79 1.655 1.358.44.568.75 1.22.93 1.96.18.74.217 1.52.118 2.362h-8.12c0 .823.233 1.492.69 2.016zm-8.97-10.23c-.31-.282-.717-.423-1.22-.423-.332 0-.64.066-.948.197-.31.132-.562.327-.767.583-.21.256-.36.58-.46.96-.1.39-.148.83-.148 1.33h4.537c-.068-.804-.292-1.39-.672-1.747-.38-.36-.84-.537-1.368-.537-.307 0-.607.094-.902.283zm10.24 3.312c-.33-.374-.79-.557-1.37-.557-.344 0-.646.066-.903.197-.26.132-.48.31-.61.528-.13.22-.261.45-.334.707-.07.258-.115.503-.115.74h4.06c-.067-.693-.248-1.24-.727-1.614zm-2.87 9.754v-3.746H0v3.746h6.34z"/></svg>}
          />
        </div>
      </div>
    </div>
  );
}