import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { datascience, web, graphicdesign } from '../data/projects';

interface PinnedProjectsProps {
  activeSection: 'data-science' | 'web-development' | 'graphic-design';
}

const PinnedProjects: React.FC<PinnedProjectsProps> = ({ activeSection }) => {
  // Get projects based on active section, limit to 2 projects
  const getProjects = () => {
    switch (activeSection) {
      case 'data-science':
        return datascience.slice(0, 2);
      case 'web-development':
        return web.slice(0, 2);
      case 'graphic-design':
        return graphicdesign.slice(0, 2);
      default:
        return [];
    }
  };

  // Get color scheme based on active section
  const getColorScheme = () => {
    switch (activeSection) {
      case 'data-science':
        return {
          titleColor: 'text-blue-600',
          tagBg: 'bg-blue-100 dark:bg-blue-900',
          tagText: 'text-blue-700 dark:text-blue-300',
          linkColor: 'text-blue-600 dark:text-blue-400',
          gradientFrom: 'from-blue-600',
          gradientTo: 'to-blue-500'
        };
      case 'web-development':
        return {
          titleColor: 'text-green-600',
          tagBg: 'bg-green-100 dark:bg-green-900',
          tagText: 'text-green-700 dark:text-green-300',
          linkColor: 'text-green-600 dark:text-green-400',
          gradientFrom: 'from-green-600',
          gradientTo: 'to-green-500'
        };
      case 'graphic-design':
        return {
          titleColor: 'text-purple-600',
          tagBg: 'bg-purple-100 dark:bg-purple-900',
          tagText: 'text-purple-700 dark:text-purple-300',
          linkColor: 'text-purple-600 dark:text-purple-400',
          gradientFrom: 'from-purple-600',
          gradientTo: 'to-purple-500'
        };
      default:
        return {
          titleColor: 'text-gray-600',
          tagBg: 'bg-gray-100 dark:bg-gray-900',
          tagText: 'text-gray-700 dark:text-gray-300',
          linkColor: 'text-gray-600 dark:text-gray-400',
          gradientFrom: 'from-gray-600',
          gradientTo: 'to-gray-500'
        };
    }
  };

  // Get route prefix based on active section
  const getRoutePrefix = () => {
    switch (activeSection) {
      case 'data-science':
        return '/datascience';
      case 'web-development':
        return '/webdevelopment';
      case 'graphic-design':
        return '/graphicdesign';
      default:
        return '/';
    }
  };

  // Fallback icon component for when images don't load
  const FallbackIcon = () => {
    switch (activeSection) {
      case 'data-science':
        return (
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        );
      case 'web-development':
        return (
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        );
      case 'graphic-design':
        return (
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  const projects = getProjects();
  const colors = getColorScheme();
  const routePrefix = getRoutePrefix();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Pinned <span className={colors.titleColor}>Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl overflow-hidden transform transition-all hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1"
            >
              <div className={`h-48 bg-gradient-to-br ${colors.gradientFrom} ${colors.gradientTo} flex items-center justify-center relative`}>
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Hide image on error and show fallback
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <FallbackIcon />
                )}
                {/* Fallback icon that shows when image fails to load */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <FallbackIcon />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-2 py-1 ${colors.tagBg} ${colors.tagText} text-xs font-medium rounded`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link 
                  href={`${routePrefix}/${project.id}`} 
                  className={`${colors.linkColor} font-medium hover:underline`}
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PinnedProjects;