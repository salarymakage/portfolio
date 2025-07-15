"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

// Animated Background Component for Web Development
const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (!canvasElement) return;
    
    const context = canvasElement.getContext('2d');
    if (!context) return;
    
    const canvas: HTMLCanvasElement = canvasElement;
    const ctx: CanvasRenderingContext2D = context;
    
    class CodeBlock {
      x: number;
      y: number;
      vx: number;
      vy: number;
      width: number;
      height: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 1 - 0.5;
        this.vy = Math.random() * 1 - 0.5;
        this.width = Math.random() * 40 + 20;
        this.height = Math.random() * 20 + 10;
        this.color = `rgba(34, 197, 94, ${Math.random() * 0.3 + 0.1})`; // Green with random opacity
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width - this.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height - this.height) this.vy = -this.vy;
        
        this.draw();
      }
    }
    
    const codeBlocks: CodeBlock[] = [];
    const blockCount = 50;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    for (let i = 0; i < blockCount; i++) {
      codeBlocks.push(new CodeBlock());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between nearby blocks
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < codeBlocks.length; i++) {
        for (let j = i + 1; j < codeBlocks.length; j++) {
          const dx = codeBlocks[i].x - codeBlocks[j].x;
          const dy = codeBlocks[i].y - codeBlocks[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(codeBlocks[i].x + codeBlocks[i].width / 2, codeBlocks[i].y + codeBlocks[i].height / 2);
            ctx.lineTo(codeBlocks[j].x + codeBlocks[j].width / 2, codeBlocks[j].y + codeBlocks[j].height / 2);
            ctx.stroke();
          }
        }
      }
      
      codeBlocks.forEach(block => block.update());
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
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-20"
    />
  );
};

interface SkillCardProps {
  title: string;
  skills: string;
}

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
    <h3 className="font-bold text-lg text-green-600 dark:text-green-400 mb-3">• {title}:</h3>
    <p className="text-gray-700 dark:text-gray-300">{skills}</p>
  </div>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

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

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-black pt-20 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Hero section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          {/* Left side - Profile image with Code background */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Code Background */}
              <div className="absolute inset-0 w-full h-full scale-125">
                <svg className="w-full h-full" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
                  {/* HTML Tags */}
                  <text x="40" y="50" fill="#22C55E" fontSize="14" opacity="0.7" fontFamily="monospace">
                    &lt;html&gt;
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="60" y="70" fill="#22C55E" fontSize="12" opacity="0.6" fontFamily="monospace">
                    &lt;head&gt;
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="60" y="90" fill="#22C55E" fontSize="12" opacity="0.5" fontFamily="monospace">
                    &lt;body&gt;
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="5s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="80" y="110" fill="#22C55E" fontSize="10" opacity="0.6" fontFamily="monospace">
                    &lt;div class="container"&gt;
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="100" y="130" fill="#22C55E" fontSize="8" opacity="0.5" fontFamily="monospace">
                    &lt;h1&gt;Hello World&lt;/h1&gt;
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.5s" repeatCount="indefinite" />
                  </text>
                  
                  {/* CSS Styles */}
                  <text x="160" y="200" fill="#22C55E" fontSize="10" opacity="0.6" fontFamily="monospace">
                    .container {"{"}
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.8s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="180" y="220" fill="#22C55E" fontSize="8" opacity="0.5" fontFamily="monospace">
                    width: 100%;
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.2s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="180" y="240" fill="#22C55E" fontSize="8" opacity="0.4" fontFamily="monospace">
                    margin: 0 auto;
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="5.2s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="160" y="260" fill="#22C55E" fontSize="10" opacity="0.6" fontFamily="monospace">
                    {"}"}
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.8s" repeatCount="indefinite" />
                  </text>
                  
                  {/* JavaScript */}
                  <text x="20" y="180" fill="#22C55E" fontSize="9" opacity="0.5" fontFamily="monospace">
                    function init() {"{"}
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.8s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="40" y="200" fill="#22C55E" fontSize="7" opacity="0.4" fontFamily="monospace">
                    console.log("Ready");
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="5.8s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="20" y="220" fill="#22C55E" fontSize="9" opacity="0.5" fontFamily="monospace">
                    {"}"}
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.8s" repeatCount="indefinite" />
                  </text>
                  
                  {/* React JSX */}
                  <text x="180" y="60" fill="#22C55E" fontSize="8" opacity="0.6" fontFamily="monospace">
                    const App = () =&gt; {"{"}
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.2s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="200" y="80" fill="#22C55E" fontSize="6" opacity="0.5" fontFamily="monospace">
                    return &lt;div&gt;...&lt;/div&gt;;
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4.3s" repeatCount="indefinite" />
                  </text>
                  
                  <text x="180" y="100" fill="#22C55E" fontSize="8" opacity="0.6" fontFamily="monospace">
                    {"}"};
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.2s" repeatCount="indefinite" />
                  </text>
                </svg>
              </div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl">
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
          
          {/* Right side - Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
              Web Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Building modern, responsive, and user-friendly web applications
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Frontend Specialist
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                UI/UX Integration
              </span>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-6">
              <SocialLink
                href="https://github.com"
                label="GitHub"
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                }
              />
              
              <SocialLink
                href="https://linkedin.com"
                label="LinkedIn"
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                }
              />
              
              <SocialLink
                href="https://twitter.com"
                label="Twitter"
                icon={
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-600 dark:text-green-400 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Frontend Development" skills="React, Next.js, Vue.js, TypeScript, HTML5, CSS3, Tailwind CSS" />
            <SkillCard title="Backend Development" skills="Node.js, Express.js, Django, Flask, Python, REST APIs" />
            <SkillCard title="Database Management" skills="MongoDB, PostgreSQL, MySQL, Redis, Firebase" />
            <SkillCard title="Development Tools" skills="Git, Docker, Webpack, Vite, npm, yarn" />
            <SkillCard title="Cloud & Deployment" skills="AWS, Vercel, Netlify, Heroku, Docker, CI/CD" />
            <SkillCard title="Testing & Quality" skills="Jest, Cypress, ESLint, Prettier, Testing Library" />
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-600 dark:text-green-400 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">MongoDB</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Stripe</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline">Live Demo →</a>
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline">GitHub →</a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Next.js</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Socket.io</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">PostgreSQL</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">TypeScript</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline">Live Demo →</a>
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline">GitHub →</a>
                </div>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Real-time Chat Application</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Modern chat application with real-time messaging, file sharing, group chats, and notification system.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Socket.io</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Node.js</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline">Live Demo →</a>
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline">GitHub →</a>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interactive analytics dashboard with real-time data visualization, custom reports, and data export functionality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Vue.js</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">D3.js</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">Express</span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">PostgreSQL</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline">Live Demo →</a>
                  <a href="#" className="text-green-600 dark:text-green-400 hover:underline">GitHub →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-600 dark:text-green-400">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate on your next web development project. I&apos;m passionate about creating scalable, 
            performant, and user-friendly applications that solve real-world problems.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 