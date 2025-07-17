import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { datascience, web, graphicdesign } from '../data/projects';

interface ProjectGridProps {
  type: 'datascience' | 'web' | 'graphicdesign';
  limit?: number;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ type, limit = 6 }) => {
  // Get projects based on type
  const getProjects = () => {
    switch (type) {
      case 'datascience':
        return datascience.slice(0, limit);
      case 'web':
        return web.slice(0, limit);
      case 'graphicdesign':
        return graphicdesign.slice(0, limit);
      default:
        return [];
    }
  };

  // Get color scheme based on type
  const getColors = () => {
    switch (type) {
      case 'datascience':
        return {
          bg: 'bg-blue-200 dark:bg-blue-900',
          icon: 'text-blue-500 dark:text-blue-400',
          tag: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
          link: 'text-blue-600 dark:text-blue-400'
        };
      case 'web':
        return {
          bg: 'bg-green-200 dark:bg-green-900',
          icon: 'text-green-500 dark:text-green-400',
          tag: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
          link: 'text-green-600 dark:text-green-400'
        };
      case 'graphicdesign':
        return {
          bg: 'bg-purple-200 dark:bg-purple-900',
          icon: 'text-purple-500 dark:text-purple-400',
          tag: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
          link: 'text-purple-600 dark:text-purple-400'
        };
      default:
        return {
          bg: 'bg-gray-200 dark:bg-gray-900',
          icon: 'text-gray-500 dark:text-gray-400',
          tag: 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
          link: 'text-gray-600 dark:text-gray-400'
        };
    }
  };

  // Get route prefix
  const getRoutePrefix = () => {
    switch (type) {
      case 'datascience':
        return '/datascience';
      case 'web':
        return '/webdevelopment';
      case 'graphicdesign':
        return '/graphicdesign';
      default:
        return '/';
    }
  };

  // Get fallback icons
  const getIcon = (projectId: string) => {
    if (type === 'datascience') {
      if (projectId === 'facerecognition') {
        return (
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
            <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
            <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
          </svg>
        );
      } else if (projectId === 'loanprediction') {
        return (
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.5-4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-7 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
          </svg>
        );
      }
    }
    
    // Default icon for other projects
    return (
      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  const projects = getProjects();
  const colors = getColors();
  const routePrefix = getRoutePrefix();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {projects.map((project) => (
        <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
          <div className={`h-48 ${colors.bg} flex items-center justify-center relative`}>
            {/* Try to show image if it exists */}
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}
            
            {/* Fallback icon */}
            <div className={`${colors.icon} z-10`}>
              {getIcon(project.id)}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            {/* Tags */}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`px-2 py-1 ${colors.tag} text-xs rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <Link 
              href={`${routePrefix}/${project.id}`}
              className={`${colors.link} hover:underline`}
            >
              View Project →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;