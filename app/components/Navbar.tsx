"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

// Debounce function to optimize scroll performance
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Memoize scroll handler with debounce
  const handleScroll = useMemo(
    () => debounce(() => {
      setScrolled(window.scrollY > 10);
    }, 50),
    []
  );
  
  useEffect(() => {
    // Check initial scroll position
    setScrolled(window.scrollY > 10);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  // Toggle mobile menu with body scroll lock
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => {
      const newState = !prev;
      // Lock body scroll when menu is open
      if (newState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return newState;
    });
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  // Memoize nav items
  const navItems = useMemo(() => [
    { href: '/', label: 'Home', color: 'blue' },
    { href: '/datascience', label: 'Data Science', color: 'blue' },
    { href: '/webdevelopment', label: 'Web Development', color: 'green' },
    { href: '/graphicdesign', label: 'Graphic Design', color: 'purple' },
    { href: '/about', label: 'About', color: 'gray' },
  ], []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="font-bold text-lg">Tan Chesthareah</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  pathname === item.href 
                    ? `text-${item.color}-600 dark:text-${item.color}-400` 
                    : `text-gray-600 hover:text-${item.color}-600 dark:text-gray-300 dark:hover:text-${item.color}-400`
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg 
                className="h-6 w-6 transition-transform duration-300" 
                style={{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with slide animation */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                pathname === item.href 
                  ? `bg-${item.color}-100 text-${item.color}-700 dark:bg-${item.color}-900 dark:text-${item.color}-300` 
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
              onClick={() => toggleMobileMenu()}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            onClick={() => toggleMobileMenu()}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}