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
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I'm a passionate UI/UX Designer with a strong foundation in full-stack development. My background in software engineering gives me a unique perspective on design—I understand not just how things should look, but also how they should work.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I believe great design solves problems. Every interface I create is driven by research, user empathy, and a commitment to clarity. I bridge the gap between designers and developers, ensuring that beautiful designs become reality.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm constantly learning, experimenting with new tools and methodologies, and pushing my boundaries to create experiences that users love.
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

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <Code className="w-10 h-10 text-blue-600" />
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <Briefcase className="w-10 h-10 text-blue-600" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.title} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-bold text-lg">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 font-medium">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-blue-600" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.degree} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-blue-600 font-bold text-lg">CGPA: {edu.cgpa}</span>
                </div>
                <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-600">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center gap-3">
            <Award className="w-10 h-10 text-blue-600" />
            Achievements & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 flex items-start gap-4">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-900">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to collaborate?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss how my skills and perspective can help your next project succeed.</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
