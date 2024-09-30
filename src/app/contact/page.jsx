import Link from 'next/link';

export default function Contact() {
  const email = 'sairaghavireddy30@example.com';
  const linkedIn = 'https://in.linkedin.com/in/m-s-sai-raghavi-reddy';

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-light-primary dark:text-dark-primary">Contact Me</h1>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <p className="text-lg mb-6 text-light-text dark:text-dark-text">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me through the following channels:
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-light-secondary dark:text-dark-secondary">Email</h2>
            <Link 
              href={`mailto:${email}`}
              className="text-light-primary dark:text-dark-primary hover:underline"
            >
              {email}
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-light-secondary dark:text-dark-secondary">LinkedIn</h2>
            <Link 
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-primary dark:text-dark-primary hover:underline"
            >
              View my LinkedIn Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}