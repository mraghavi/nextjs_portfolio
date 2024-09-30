'use client';
import { useState } from 'react';

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = 'https://drive.google.com/file/d/1cPESynZUuxnnqhqQh62rWmd9XUh3woAX/preview';
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1cPESynZUuxnnqhqQh62rWmd9XUh3woAX';

  const toggleResumeView = () => {
    setShowResume(!showResume);
  };

  return (
    <div className="container pt-24 max-w-4xl mx-auto px-4">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-light-primary dark:text-dark-primary">
          Sai Raghavi Reddy
        </h1>
        <p className="text-2xl mb-8 text-light-secondary dark:text-dark-secondary">
          Front-End Developer | Full-Stack Enthusiast
        </p>
        <p className="text-xl mb-8 leading-relaxed text-light-text dark:text-dark-text">
          Hi, I'm Sai Raghavi Reddy, a Front-End Developer with a passion for full-stack development. I build dynamic web experiences with React.js, Angular, and Next.js, turning ideas into seamless digital solutions.
        </p>
        <div className="space-x-4">
          <button
            onClick={toggleResumeView}
            className="btn btn-primary transform hover:scale-105 transition-transform duration-200"
          >
            {showResume ? 'Hide Resume' : 'View My Resume'}
          </button>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary transform hover:scale-105 transition-transform duration-200"
          >
            Download My Resume
          </a>
        </div>
      </div>
      {showResume && (
        <div className="w-full max-w-3xl mx-auto mb-12 shadow-custom rounded-lg overflow-hidden" style={{ height: '842px' }}>
          <iframe
            src={resumeUrl}
            className="w-full h-full border-0"
            allow="autoplay"
          ></iframe>
        </div>
      )}
    </div>
  );
}