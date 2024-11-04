'use client';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark'); // Set initial state to 'dark'

  useEffect(() => {
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
      <body className={`min-h-screen flex flex-col bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow pt-20 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
