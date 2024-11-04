import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Me', path: '/contact' },
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        setIsVisible(window.scrollY < lastScrollY);
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 backdrop-blur-lg bg-light-bg/30 dark:bg-dark-bg/30 shadow-lg border border-light-bg/40 dark:border-dark-bg/40 rounded-b-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-serif font-black text-light-primary dark:text-dark-primary transition-colors duration-300">
            Sai Raghavi's Portfolio
          </Link>
          <div className="flex items-center space-x-6">
            <ul className="hidden sm:flex space-x-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`px-3 py-2 rounded-md transition-all duration-200 ${
                      pathname === item.path
                        ? 'bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary'
                        : 'hover:bg-light-primary/5 dark:hover:bg-dark-primary/5 text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="ml-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}
