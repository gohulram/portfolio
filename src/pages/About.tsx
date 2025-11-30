import { Award, GraduationCap, Briefcase, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const skills = [
    {
      category: 'Design Tools',
      items: ['Figma', 'Wireframing', 'Prototyping', 'Component Design']
    },
    {
      category: 'UI Design',
      items: ['Layouts', 'Color Theory', 'Typography', 'Visual Hierarchy', 'Spacing', 'Components']
    },
    {
      category: 'UX Design',
      items: ['User Research', 'User Flows', 'Information Architecture', 'Usability Testing', 'User Personas']
    },
    {
      category: 'Front-End Basics',
      items: ['HTML', 'CSS', 'JavaScript', 'Responsive Design']
    },
    {
      category: 'Soft Skills',
      items: ['Problem-Solving', 'Design Thinking', 'Collaboration', 'Communication', 'Creativity']
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Jorim Technology Solutions',
      period: 'Jan – Apr 2025',
      highlights: [
        'Engineered full-stack applications using React.js, Node.js, Docker, and Kubernetes',
        'Improved system scalability by 40% through microservice architecture with Kafka',
        'Optimized backend APIs and reduced response time by 25%',
        'Collaborated across teams on project lifecycle from requirement to deployment'
      ]
    }
  ];

  const education = [
    {
      degree: 'Masters in Computer Application',
      institution: 'Karpagam College of Engineering (Anna University), Coimbatore',
      period: '2023 – 2025',
      cgpa: '8.25/10'
    },
    {
      degree: 'B.Sc. in Electronics',
      institution: 'St. John\'s College (MS University), Tirunelveli',
      period: '2020 – 2023',
      cgpa: '8.35/10'
    }
  ];

  const achievements = [
    'Published research paper: Blockchain Integrated Task Management System at SIMTAC\'25 Conference',
    'Completed 50+ PortSwigger Web Security Labs covering XSS, SQLi, CSRF, SSRF, and Access Control',
    'AWS Certified Cloud Practitioner',
    'Blockchain and Its Applications Certification – NPTEL (IIT Kharagpur)',
    'Web Development Certification – Smartcliff Learning Solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                I'm a UI/UX Designer who loves creating simple, beautiful designs. I also know how to code, which helps me understand what's possible and work better with developers.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                I believe good design solves real problems. Every design I create starts with understanding users and their needs. I make sure designs are clear, easy to use, and actually work when built.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                I'm always learning new things, trying new tools, and finding better ways to create designs that people enjoy using.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Location</p>
                  <p className="text-gray-900 font-bold">Tirunelveli, Tamil Nadu, India</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-gray-900 font-bold">gohulhgohulh@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone</p>
                  <p className="text-gray-900 font-bold">+91-9080197042</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Experience</p>
                  <p className="text-gray-900 font-bold">UI/UX Design + Full-Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 flex items-center gap-3">
            <Code className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            Skills & Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            Professional Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp) => (
              <div key={exp.title} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-bold text-base sm:text-lg">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            Education
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-blue-600 font-bold text-base sm:text-lg">CGPA: {edu.cgpa}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium mb-1">{edu.institution}</p>
                <p className="text-sm sm:text-base text-gray-600">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 flex items-center gap-3">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            Achievements & Certifications
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement) => (
              <div key={achievement} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 flex items-start gap-4">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Ready to collaborate?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">Let's discuss how I can help with your next project.</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg text-sm sm:text-base"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
