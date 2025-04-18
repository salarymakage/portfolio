"use client";

import Navbar from './components/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <footer className="py-6 text-center text-gray-500 text-sm">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}