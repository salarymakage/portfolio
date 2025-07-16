"use client";

import Image from 'next/image';
// import AnimatedCirclesBackground from '../components/AnimatedCirclesBackground';
// import ProfileBackgroundAnimation from '../components/ProfileBackgroundAnimation';
import CircularToolsBackground from '../components/CircularToolsBackground';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}