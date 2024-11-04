export default function About() {
  return (
    <div className="container mx-auto px-6 pt-16 pb-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-fbb031 dark:text-ffffff">
        About Me
      </h1>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg leading-relaxed text-585faf dark:text-ffffff">
          I’m <span className="font-semibold">Sai Raghavi</span>, a developer who codes for fun and for a living!
          From crafting dynamic front-ends with <span className="font-semibold">React, Angular,</span> and <span className="font-semibold">Next.js</span> to building full-stack applications and diving into
          <span className="font-semibold"> Python</span> and <span className="font-semibold">.NET Core</span> for backend development—I love tackling all parts of the stack.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6 text-fbb031 dark:text-585faf text-center">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-ffffff dark:bg-000100 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-fbb031 dark:text-ffffff">Frontend</h3>
            <ul className="list-disc pl-4 text-585faf dark:text-ffffff space-y-1">
              <li>Angular</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript & TypeScript</li>
            </ul>
          </div>

          <div className="p-6 bg-ffffff dark:bg-000100 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-fbb031 dark:text-ffffff">Backend (In Training)</h3>
            <ul className="list-disc pl-4 text-585faf dark:text-ffffff space-y-1">
              <li>.NET Core</li>
              <li>C#</li>
            </ul>
          </div>

          <div className="p-6 bg-ffffff dark:bg-000100 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3 text-fbb031 dark:text-ffffff">Other Technologies</h3>
            <ul className="list-disc pl-4 text-585faf dark:text-ffffff space-y-1">
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
