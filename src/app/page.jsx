'use client';
import { useState } from 'react';

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = 'https://drive.google.com/file/d/1vlSL4PJwSbExf6G0elEwPJDiaoQzWpo5/preview';
const downloadUrl = 'https://drive.google.com/uc?export=download&id=1vlSL4PJwSbExf6G0elEwPJDiaoQzWpo5';


  const toggleResumeView = () => {
    setShowResume(!showResume);
  };

  return (
    <div className="container pt-24 max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row mb-16">
        <div className="md:w-1/2 md:pr-8 flex flex-col items-center justify-center text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-light-primary dark:text-dark-primary">
            Hi, Raghavi here
          </h1>
          <p className="text-2xl mb-8 text-light-secondary dark:text-dark-secondary">
            Front-End Developer | Full-Stack Enthusiast
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8 md:py-8">
          <p className="text-xl mb-8 leading-relaxed text-light-text dark:text-dark-text">
            I'm a Front-End Developer with a passion for full-stack development. I build dynamic web experiences with React.js, Angular, and Next.js, turning ideas into seamless digital solutions.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <button
              onClick={toggleResumeView}
              className="btn btn-primary flex items-center justify-center transform hover:scale-105 transition-transform duration-200 w-full md:w-48 h-12 text-lg font-bold rounded-lg"
              style={{ minWidth: '200px' }}
            >
              {showResume ? 'Hide Resume' : 'View My Resume'}
            </button>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex items-center justify-center transform hover:scale-105 transition-transform duration-200 w-full md:w-48 h-12 text-lg font-bold rounded-lg" 
              style={{ minWidth: '250px' }}
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
      {showResume && (
        <div className="w-full max-w-5xl mx-auto mb-12 shadow-custom rounded-lg overflow-hidden p-4" style={{ height: '842px' }}>
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
