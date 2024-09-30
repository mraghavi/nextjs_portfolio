import Link from 'next/link';

const Highlight = ({ children }) => (
  <span className="font-semibold text-light-primary dark:text-dark-primary">
    {children}
  </span>
);

const projects = [
  {
    title: "EpiRecipes Search Platform",
    description: (
      <>
        This project involved building a <Highlight>full-stack application</Highlight> for <Highlight>real-time recipe searches</Highlight> using the EpiRecipes dataset. I created a <Highlight>React.js frontend</Highlight> with a sleek, intuitive UI inspired by e-commerce platforms, complete with <Highlight>real-time search</Highlight> and <Highlight>dynamic filters</Highlight>. On the backend, I used <Highlight>Django</Highlight> and integrated it with <Highlight>OpenSearch</Highlight> for lightning-fast data retrieval.
      </>
    ),
    techStack: ["React.js", "Django", "OpenSearch"],
    github: "https://github.com/mraghavi/epi_recipes"
  },
  {
    title: "Angular Front-End Platform",
    description: (
      <>
        This <Highlight>Angular-based platform</Highlight> showcases my deep knowledge of Angular and focuses on creating a <Highlight>seamless user experience</Highlight>. It features a collection of blog articles and uses <Highlight>PrimeNG components</Highlight> to enhance interactivity. I implemented <Highlight>Angular routing</Highlight> and optimized the platform for <Highlight>cross-device compatibility</Highlight>, ensuring a consistent experience across devices.
      </>
    ),
    techStack: ["Angular", "PrimeNG"],
    github: "https://github.com/mraghavi/Accion-Angular-Basics-training"
  },
  {
    title: "Portfolio Website (Next.js)",
    description: (
      <>
        I built my personal portfolio using <Highlight>Next.js</Highlight> to showcase my skills, projects, and blog content. The site is optimized with <Highlight>server-side rendering (SSR)</Highlight> for fast load times and features a <Highlight>responsive design</Highlight> for seamless viewing across devices. This project demonstrates my proficiency in <Highlight>modern React development</Highlight> and Next.js framework.
      </>
    ),
    techStack: ["Next.js", "React"],
    github: "https://github.com/mraghavi/nextjs_portfolio"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-light-primary dark:text-dark-primary">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card p-6 flex flex-col h-full transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold mb-4 text-light-primary dark:text-dark-primary">{project.title}</h2>
            <p className="text-base text-light-text dark:text-dark-text mb-6 flex-grow">{project.description}</p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-light-secondary dark:text-dark-secondary">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent px-3 py-1 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-105">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Link href={project.github} target="_blank" rel="noopener noreferrer" 
              className="btn btn-primary text-center">
              View on GitHub
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}