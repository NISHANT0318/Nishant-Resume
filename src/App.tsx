import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1E2532] text-white p-8">
      <div className="max-w-6xl mx-auto bg-[#1E2532] shadow-2xl rounded-lg overflow-hidden flex">
    
        <div className="w-1/3 bg-[#15202B] p-8">
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
            <li>React.js, Redux</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5, CSS3</li>
            <li>AWS</li>
            <li>RESTful APIs</li>
            <li>Jest</li>
            <li>Git, NPM</li>
            <li>Vite, Webpack</li>
            
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
            <a href="https://github.com/NishantSatone" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF]">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://nishant-satone.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF]">
              <Globe className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#58A6FF]">PROFESSIONAL SUMMARY</h2>
          <p className="mb-8 text-[#8B949E]">
            Experienced Front-End Developer with 2+ years of expertise in designing and developing user interfaces using React.js, HTML5, CSS3, and JavaScript (ES6+). Proficient in collaborating with product and design teams to build intuitive and visually appealing interfaces for web applications. Strong skills in cloud deployment AWS, API integration, and unit testing. Focused on writing clean, maintainable, and scalable code, and committed to delivering high-quality, performance-optimized UI components
          </p>

          <h2 className="text-2xl font-bold mb-4 text-[#58A6FF]">WORK HISTORY</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white">Software Engineer</h3>
            <p className="text-[#8B949E]">Capgemini, Pune | May 2022 – March 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-[#8B949E]">
              <li>Developed responsive web applications using React.js, Redux, HTML5, CSS3, and JavaScript (ES6+).</li>
              <li>Optimized and built reusable React components, reducing development time by 20%.</li>
              <li>Implemented React Hooks for efficient state management and handling side effects.</li>
              <li>Integrated RESTful APIs with authentication for seamless data fetching and user management.</li>
              <li>Conducted unit testing using Jest and React Testing Library to ensure code quality and reliability.</li>
              <li>Collaborated with UI/UX designers to transform wireframes into engaging user interfaces.</li>
              <li>Led cloud deployment initiatives on AWS, ensuring scalability and optimized performance of the UI, while working cross-functionally to troubleshoot and resolve UI-related issues.</li>
              <li>Participated in Agile SCRUM practices, including sprint planning and code reviews, fostering a culture of continuous improvement.</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-[#58A6FF]">PROJECTS</h2>
          <ul className="list-disc list-inside space-y-2 text-[#8B949E]">
            <li>
              <strong className="text-white">CrickDex:</strong>{' '}
              <a href="https://crickdex.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] hover:underline">
                CrickDex
              </a> – A player identifier app where users can upload a photo, and an AI analyzes the image, identifies the player, and provides detailed information using the Gemini AI API.
            </li>
            <li>
              <strong className="text-white">QuestionX:</strong>{' '}
              <a href="https://questionx.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] hover:underline">
                QuestionX
              </a> – A chatbot that answers user queries on any topic, functioning like ChatGPT or Gemini, offering accurate and real-time responses.
            </li>
            <li>
              <strong className="text-white">Shopper Avenue:</strong>{' '}
              <a href="https://shopperavenue.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] hover:underline">
                Shopper Avenue
              </a> – An e-commerce website that allows users to browse, search, and purchase products.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-[#58A6FF]">ACCOMPLISHMENTS</h2>
          <ul className="list-disc list-inside space-y-2 text-[#8B949E]">
            <li>Reduced application load time by 30% through optimizing React components and implementing lazy loading techniques.</li>
            <li>Implemented a state management solution using Redux, improving application performance and maintainability.</li>
            <li>Mentored junior developers, leading to improved team productivity and code quality.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
