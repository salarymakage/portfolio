"use client";

import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';
import ThemeScript from './components/ThemeScript';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <footer className="py-6 text-center text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-gray-950">
            <div className="container mx-auto">
              <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}