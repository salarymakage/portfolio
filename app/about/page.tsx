"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple fade-in animation for the section when it loads
    if (sectionRef.current) {
      sectionRef.current.style.opacity = '0';
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.style.opacity = '1';
        }
      }, 100);
    }
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="min-h-screen pt-20 transition-opacity duration-1000"
    >
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <Image
                src="/main_profile.png"
                alt="John Doe"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">About Me</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Multi-disciplinary Professional with expertise in Data Science and Graphic Design
              </p>
              <p className="text-lg mb-6">
                I'm John Doe, a passionate professional who combines analytical thinking with creative design. 
                I've spent the last decade working at the intersection of data and design, 
                helping companies make data-driven decisions while creating visually compelling experiences.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/datascience" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Data Science
                </Link>
                <Link 
                  href="/graphicdesign" 
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Graphic Design
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Background Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">My Journey</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-blue-600"></div>
              <h3 className="text-xl font-bold mb-2">Senior Data Scientist & Designer</h3>
              <p className="text-gray-500 mb-4">InnovateTech Inc. | 2020 - Present</p>
              <p className="text-gray-700 dark:text-gray-300">
                Leading data visualization projects and creating user interfaces that make complex data accessible and actionable for clients across various industries.
              </p>
            </div>
            
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-purple-600"></div>
              <h3 className="text-xl font-bold mb-2">UX Designer</h3>
              <p className="text-gray-500 mb-4">DesignForward Agency | 2017 - 2020</p>
              <p className="text-gray-700 dark:text-gray-300">
                Designed intuitive user experiences for web and mobile applications, focusing on data-driven design decisions and user research.
              </p>
            </div>
            
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-green-600"></div>
              <h3 className="text-xl font-bold mb-2">Data Analyst</h3>
              <p className="text-gray-500 mb-4">Global Analytics Ltd. | 2015 - 2017</p>
              <p className="text-gray-700 dark:text-gray-300">
                Analyzed customer data to identify trends and insights, created reports and dashboards to visualize findings for stakeholders.
              </p>
            </div>
            
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-gray-600"></div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-500 mb-4">Master's in Data Science | University of Technology</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Specialized in machine learning and data visualization.
              </p>
              <p className="text-gray-500 mb-4">Bachelor's in Graphic Design | Design Institute</p>
              <p className="text-gray-700 dark:text-gray-300">
                Focused on digital media and interactive design.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Data Science Skills */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Data Science</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Python</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Machine Learning</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Data Visualization</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Graphic Design Skills */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Graphic Design</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Adobe Creative Suite</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Brand Identity</span>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Personal Interests */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">Beyond Work</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Continuous Learning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Always exploring new technologies and design trends to stay at the cutting edge.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Travel Enthusiast</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Exploring different cultures and places for inspiration and perspective.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Music Production</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating electronic music and exploring the intersection of audio and visual arts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you need data analysis, visualization, or design work, I'm ready to help bring your ideas to life.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}