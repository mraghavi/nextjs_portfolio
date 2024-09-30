export default function About() {
  return (
    <div className="container mx-auto px-4 pt-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-light-primary dark:text-dark-primary">About Me</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4 text-light-text dark:text-dark-text">
          Hello! I'm Muktapuram Sridhar Sai Raghavi Reddy, a passionate Front-End Developer with a knack for crafting engaging web experiences. My journey in tech is driven by a desire to transform ideas into intuitive, user-friendly applications.
        </p>
        <p className="text-lg mb-4 text-light-text dark:text-dark-text">
          Currently, I'm wearing two hats: honing my front-end skills with Angular, React.js, and Next.js, while also diving into the world of backend development as a .NET Developer Intern. This dual focus allows me to build more comprehensive, full-stack solutions.
        </p>
        <p className="text-lg mb-4 text-light-text dark:text-dark-text">
          Always eager to expand my horizons, I'm also exploring the realms of AI and the MERN stack, constantly pushing the boundaries of what I can create.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-light-secondary dark:text-dark-secondary">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold mb-2 text-light-primary dark:text-dark-primary">Frontend</h3>
            <ul className="list-disc list-inside text-light-text dark:text-dark-text">
              <li>Angular</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript & TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-light-primary dark:text-dark-primary">Backend (In Training)</h3>
            <ul className="list-disc list-inside text-light-text dark:text-dark-text">
              <li>.NET Core</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-light-primary dark:text-dark-primary">Other Technologies</h3>
            <ul className="list-disc list-inside text-light-text dark:text-dark-text">
              <li>MongoDB</li>
              <li>PrimeNG</li>
              <li>Material UI</li>
            </ul>
          </div>
        </div>
      </div>

     
    </div>
  );
}