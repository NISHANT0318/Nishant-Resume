import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const App: React.FC = () => {
  const downloadResume = () => {
    window.open('/nishantsatone.pdf');
  };

  return (
    <div className="min-h-screen bg-[#1E2532] text-white p-8">
      <div className="max-w-6xl mx-auto bg-[#1E2532] shadow-2xl rounded-lg overflow-hidden flex flex-col lg:flex-row">
        
        <div className="lg:w-1/3 bg-[#15202B] p-8">
          <h1 className="text-4xl font-bold mb-4">NISHANT SATONE</h1>
          <div className="space-y-2">
            <a href="mailto:Nishantsatone1997@gmail.com" className="flex items-center text-[#8B949E]">
              <Mail className="w-5 h-5 mr-2" />
              Nishantsatone1997@gmail.com
            </a>
            <a href="tel:+917773919597" className="flex items-center text-[#8B949E]">
              <Phone className="w-5 h-5 mr-2" />
              +91 7773919597
            </a>
            <span className="flex items-center text-[#8B949E]">
              <MapPin className="w-5 h-5 mr-2" />
              Pune, India 411057
            </span>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#58A6FF]">SKILLS</h2>
          <ul className="list-disc list-inside space-y-1 text-[#8B949E]">
            <li>JavaScript (ES6), TypeScript</li>
            <li>React.js, Angular, Redux, NgRx</li>
            <li>HTML5, CSS3, Bootstrap, Tailwind CSS</li>
            <li>RESTful APIs, JWT Authentication</li>
            <li>Reactive Forms, Reactive Programming</li>
            <li>Jest, React Testing Library</li>
            <li>Git, NPM</li>
            <li>Webpack, Vite</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#58A6FF]">EDUCATION</h2>
          <h3 className="text-lg font-semibold text-white">Bachelor of Engineering: Electronics and Telecommunication</h3>
          <p className="text-[#8B949E]">Sant Gadge Baba Amravati University, Amravati, India</p>
          <p className="text-[#8B949E]">Aug 2015 – July 2019</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#58A6FF]">INTERESTS</h2>
          <ul className="list-disc list-inside space-y-1 text-[#8B949E]">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Open Source Contribution</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#58A6FF]">PROFESSIONAL LINKS</h2>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/nishant-satone" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF]">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/NISHANT0318/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF]">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://nishant-satone.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF]">
              <Globe className="w-8 h-8" />
            </a>
          </div>

          <button
            onClick={downloadResume}
            className="mt-8 px-4 py-2 bg-[#58A6FF] text-white font-semibold rounded hover:bg-[#0064C8] transition duration-300"
          >
            Download Resume
          </button>
        </div>

        <div className="lg:w-2/3 p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#58A6FF]">PROFESSIONAL SUMMARY</h2>
          <p className="mb-8 text-[#8B949E]">
            Frontend Developer with 2+ years of experience specializing in creating user-friendly web applications using Angular and React.js. Proficient in JavaScript, TypeScript, and RESTful APIs with a strong emphasis on optimizing performance and enhancing user experience through Agile methodologies.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#58A6FF]">WORK EXPERIENCE</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
            <p className="text-[#8B949E]">Capgemini, Pune | May 2022 – March 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-[#8B949E]">
              <li>Developed and maintained web applications using Angular and React.js, focusing on DOM manipulation, dynamic data rendering, and performance optimization.</li>
              <li>Integrated RESTful APIs with frontend frameworks, ensuring secure communication and data flow using JWT authentication.</li>
              <li>Implemented responsive UI components using Bootstrap and Tailwind CSS.</li>
              <li>Leveraged strong understanding of Angular concepts such as components, services, directives, routing, guards, interceptors, and reactive forms to create robust applications.</li>
              <li>Built and maintained Reactive Forms and managed complex state using Redux and NgRx.</li>
              <li>Optimized routing and navigation through Angular routing and React’s React Router for improved user experiences.</li>
              <li>Worked in Agile environments, regularly collaborating with cross-functional teams to meet project goals and deadlines.</li>
              <li>Utilized Git for version control, enabling smooth collaboration and clean code management.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-[#58A6FF]">PROJECTS</h2>
          <ul className="list-disc list-inside space-y-2 text-[#8B949E]">
            <li>
              <strong className="text-white">CrickDex:</strong>{' '}
              <a href="https://crickdex.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] hover:underline">
                CrickDex
              </a>{' '}- A player identifier app built using React.js and Tailwind CSS, where users can upload a photo, and an AI analyzes the image to provide cricketer details.
            </li>
            <li>
              <strong className="text-white">QuestionX:</strong>{' '}
              <a href="https://questionx.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] hover:underline">
                QuestionX
              </a>{' '}- A chatbot application that provides real-time answers based on user queries.
            </li>
              <li>
              <strong className="text-white">Shopper Avenue:</strong>{' '}
              <a href="https://shopperavenue.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] hover:underline">
                Shopper Avenue
              </a>{' '}
              – An e-commerce website that allows users to browse, search, and purchase products.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#58A6FF]">ACCOMPLISHMENTS</h2>
          <ul className="list-disc list-inside space-y-2 text-[#8B949E]">
            <li>Reduced application load time by 30% through optimizing React components and implementing lazy loading techniques.</li>
            <li>Implemented a state management solution using Redux, improving application performance and maintainability.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
