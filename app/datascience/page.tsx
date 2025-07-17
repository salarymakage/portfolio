"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import NeuralNetworkBackground from '../components/ProfileBackgroundAnimation';
import ProjectGrid from '../components/ProjectGrid';
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
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Hero section with image on left and content on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          {/* Left side - Profile image with Neural Network background */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              <NeuralNetworkBackground 
                size={400}
                color="#3B82F6"
                opacity={1}
                className=""
              />

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
        
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">Projects</h2>
        
        {/* Featured Projects */}
        <ProjectGrid type="datascience" />
      </div>
    </div>
  );
}