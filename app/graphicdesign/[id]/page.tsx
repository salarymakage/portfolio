import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '../../data/projects';

interface ProjectPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.filter(p => p.category === 'design').map((project) => ({ id: project.id }));
}

export default function GraphicDesignProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id && p.category === 'design');

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {project.title}
        </h1>

        <div className="relative w-full h-64 md:h-96 mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6 text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Source ↗
          </a>
        )}

        <Link
          href="/graphicdesign"
          className="inline-block text-gray-600 dark:text-gray-400 hover:underline"
        >
          ← Back to Graphic Design
        </Link>
      </div>
    </main>
  );
} 