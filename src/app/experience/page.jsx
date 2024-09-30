import Link from 'next/link';

export default function Experience() {
  const experiences = [
    {
      title: ".Net Developer Intern (Training)",
      company: "Accion Labs",
      location: "Hyderabad",
      period: "September 2024 – Present",
      responsibilities: [
        "Currently undergoing intensive training in .NET Core and C# for backend service development.",
        "Focusing on mastering RESTful API design and implementation principles.",
        "Gaining hands-on experience through practical exercises and projects to reinforce .NET Core concepts and best practices.",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company: "Accion Labs",
      location: "Hyderabad",
      period: "March 2024 – August 2024",
      responsibilities: [
        "Developed a POC website using Angular 18, showcasing expertise in services, routing, form validation, and state management to create a dynamic, responsive user interface.",
        "Elevated user experience by integrating PrimeNG components, implementing real-time notifications and custom error handling that improved usability and engagement.",
        "Ensured cross-platform optimization, refining CSS3 for seamless functionality across devices, drastically enhancing performance on mobile and desktop.",
      ],
      certificateLink: "https://drive.google.com/file/d/1CrAbQJzMsBuUNcNyTn7IRUx4rd203AUe/view?usp=sharing"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-light-primary dark:text-dark-primary">{exp.title}</h2>
            <h3 className="text-xl mb-2 text-light-secondary dark:text-dark-secondary">{exp.company}, {exp.location}</h3>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} className="text-light-text dark:text-dark-text">{resp}</li>
              ))}
            </ul>
            {exp.certificateLink && (
              <Link 
                href={exp.certificateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-light-primary dark:bg-dark-primary text-white dark:text-black px-4 py-2 rounded-md hover:opacity-80 transition-opacity duration-300 text-base font-semibold"
              >
                View Certificate
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}