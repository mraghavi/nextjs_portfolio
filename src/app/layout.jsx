'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark'); // Set initial state to 'dark'

  useEffect(() => {
    // Remove the check for system preference and always default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <html lang="en" className={theme}>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow pt-20 pb-8"> {/* Keep pt-20 to maintain space when navbar is hidden */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}