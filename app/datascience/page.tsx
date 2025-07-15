"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Animated Background Component inspired by the CodePen
const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;
    
    const context = canvasElement.getContext('2d');
    if (!context) return;
    
    // Create non-null versions of these variables to use inside the class
    // This tells TypeScript they're guaranteed to be non-null
    const canvas: HTMLCanvasElement = canvasElement;
    const ctx: CanvasRenderingContext2D = context;
    
    // Define Particle class with canvas and ctx in closure
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(100, 149, 237, ${Math.random() * 0.5 + 0.1})`; // Cornflower blue with random opacity
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        
        this.draw();
      }
    }
    
    const particles: Particle[] = [];
    const particleCount = 100;
    
    // Set canvas to full width/height
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(100, 149, 237, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update particles
      particles.forEach(particle => particle.update());
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-30"
    />
  );
};

// Define props interface for SkillCard
interface SkillCardProps {
  title: string;
  skills: string;
}

// Updated SkillCard component with proper props typing
const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
    <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-3">• {title}:</h3>
    <p className="text-gray-700 dark:text-gray-300">{skills}</p>
  </div>
);

// Define props interface for SocialLink
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// SocialLink component with proper props typing
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


export default function DataSciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black pt-20 relative overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Hero section with image on left and content on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          {/* Left side - Profile image with Neural Network background */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Neural Network Background - Enlarged */}
              <div className="absolute inset-0 w-full h-full scale-125">
                <svg className="w-full h-full" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  {/* Neural Network Nodes with movement animation */}
                  <circle cx="140" cy="140" r="8" fill="#3B82F6">
                    <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="90" cy="90" r="6" fill="#3B82F6" opacity="0.8">
                    <animate attributeName="cx" values="90;85;95;90" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="90;95;85;90" dur="6s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="60" cy="140" r="6" fill="#3B82F6" opacity="0.8">
                    <animate attributeName="cx" values="60;55;65;60" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="140;145;135;140" dur="6.5s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="90" cy="190" r="6" fill="#3B82F6" opacity="0.8">
                    <animate attributeName="cx" values="90;95;85;90" dur="7.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="190;185;195;190" dur="6.8s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="190" cy="90" r="6" fill="#3B82F6" opacity="0.8">
                    <animate attributeName="cx" values="190;195;185;190" dur="8.2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="90;85;95;90" dur="7.2s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="220" cy="140" r="6" fill="#3B82F6" opacity="0.8">
                    <animate attributeName="cx" values="220;225;215;220" dur="7.8s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="140;145;135;140" dur="8.5s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="190" cy="190" r="6" fill="#3B82F6" opacity="0.8">
                    <animate attributeName="cx" values="190;185;195;190" dur="8.8s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="190;195;185;190" dur="7.5s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="110" cy="50" r="4" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="cx" values="110;115;105;110" dur="9s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="50;55;45;50" dur="8s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="170" cy="50" r="4" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="cx" values="170;165;175;170" dur="8.3s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="50;45;55;50" dur="7.3s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="40" cy="110" r="4" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="cx" values="40;45;35;40" dur="7.6s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="110;105;115;110" dur="8.6s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="40" cy="170" r="4" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="cx" values="40;35;45;40" dur="8.9s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="170;175;165;170" dur="7.9s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="110" cy="230" r="4" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="cx" values="110;105;115;110" dur="9.2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="230;235;225;230" dur="8.2s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="170" cy="230" r="4" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="cx" values="170;175;165;170" dur="8.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="230;225;235;230" dur="9.5s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="240" cy="110" r="4" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="cx" values="240;245;235;240" dur="7.2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="110;115;105;110" dur="8.7s" repeatCount="indefinite" />
                  </circle>
                  
                  <circle cx="240" cy="170" r="4" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="cx" values="240;235;245;240" dur="9.7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="170;165;175;170" dur="8.1s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Neural Network Connections - these will update automatically with the nodes */}
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.5">
                    <animate attributeName="x1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="90;85;95;90" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="90;95;85;90" dur="6s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.5">
                    <animate attributeName="x1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="60;55;65;60" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="140;145;135;140" dur="6.5s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.5">
                    <animate attributeName="x1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="90;95;85;90" dur="7.5s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="190;185;195;190" dur="6.8s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.5">
                    <animate attributeName="x1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="190;195;185;190" dur="8.2s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="90;85;95;90" dur="7.2s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.5">
                    <animate attributeName="x1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="220;225;215;220" dur="7.8s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="140;145;135;140" dur="8.5s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.5">
                    <animate attributeName="x1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="140;140;140;140" dur="1s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="190;185;195;190" dur="8.8s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="190;195;185;190" dur="7.5s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.4">
                    <animate attributeName="x1" values="90;85;95;90" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="90;95;85;90" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="110;115;105;110" dur="9s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="50;55;45;50" dur="8s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.4">
                    <animate attributeName="x1" values="90;85;95;90" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="90;95;85;90" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="40;45;35;40" dur="7.6s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="110;105;115;110" dur="8.6s" repeatCount="indefinite" />
                  </line>
                  
                  {/* Outer connection lines (adding just a few key ones for performance) */}
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="110;115;105;110" dur="9s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="50;55;45;50" dur="8s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="170;165;175;170" dur="8.3s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="50;45;55;50" dur="7.3s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="40;45;35;40" dur="7.6s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="110;105;115;110" dur="8.6s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="40;35;45;40" dur="8.9s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="170;175;165;170" dur="7.9s" repeatCount="indefinite" />
                  </line>
                  
                  {/* Additional connections for a denser network */}
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="190;195;185;190" dur="8.2s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="90;85;95;90" dur="7.2s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="240;245;235;240" dur="7.2s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="110;115;105;110" dur="8.7s" repeatCount="indefinite" />
                  </line>
                  
                  <line stroke="#3B82F6" strokeWidth="1" opacity="0.3">
                    <animate attributeName="x1" values="190;185;195;190" dur="8.8s" repeatCount="indefinite" />
                    <animate attributeName="y1" values="190;195;185;190" dur="7.5s" repeatCount="indefinite" />
                    <animate attributeName="x2" values="170;175;165;170" dur="8.5s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="230;225;235;230" dur="9.5s" repeatCount="indefinite" />
                  </line>
                  
                  {/* Animated Pulse Effect */}
                  <circle cx="140" cy="140" r="8" fill="transparent" stroke="#3B82F6" opacity="0.3">
                    <animate attributeName="r" from="10" to="90" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Profile Image - Circular with border and shadow */}
              <div className="relative mx-auto mb-8 w-[230px] h-[230px]">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-900 dark:to-blue-700 rounded-full blur-md opacity-40 dark:opacity-20 scale-110 animate-pulse"></div>
                <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-white shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/profile.png"
                      alt="Data Scientist"
                      width={230}
                      height={230}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">Data Scientist</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">Unlocking Insights with Data</p>
            <div className="max-w-3xl">
              <p className="text-lg mb-6">
                I specialize in transforming raw data into actionable insights using machine learning and statistical analysis. With a background in both theoretical and applied data science, I help organizations make data-driven decisions that drive growth and innovation.
              </p>
              <div className="flex gap-4 mb-6">
                <SocialLink 
                  href="https://github.com" 
                  label="GitHub Profile"
                  icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
                />
                <SocialLink 
                  href="https://linkedin.com" 
                  label="LinkedIn Profile"
                  icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>}
                />
              </div>
              <Link 
                href="/contact"
                className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Hire Me for Data Projects
              </Link>
            </div>
          </div>
        </div>
        
        {/* Updated Skills section with the new format */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SkillCard title="Programming Languages" skills="Python, SQL" />
          <SkillCard title="Web Development" skills="Django, HTML, CSS, JavaScript" />
          <SkillCard title="Data Visualization" skills="Matplotlib, Seaborn" />
          <SkillCard title="Machine Learning" skills="Scikit-learn, TensorFlow" />
          <SkillCard title="Databases" skills="MySQL, PostgreSQL" />
          <SkillCard title="Deep Learning" skills="TensorFlow, Keras" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">Featured Projects</h2>
        
        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
            <div className="h-48 bg-blue-200 dark:bg-blue-900 flex items-center justify-center">
              <svg className="w-24 h-24 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Face Recognition Project</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              A real-time face recognition system that enhances security by replacing passwords with machine learning and deep learning-based facial authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Django</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">LBPH</span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project →</a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
            <div className="h-48 bg-blue-200 dark:bg-blue-900 flex items-center justify-center">
              <svg className="w-24 h-24 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.5-4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-7 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Loan Recommendation System</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              This project uses data to predict a user&apos;s loan eligibility and assess their risk level based on personal and historical financial information.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Random Forest</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Python</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Django</span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View Project →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}