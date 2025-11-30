import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Figma, Code, Zap, Users, Target } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).sort((a, b) => a.order - b.order).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
              UI/UX Designer & Figma Beginner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Designing Digital
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Experiences</span>
              That Matter
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              I'm a UI/UX Designer who creates simple, easy-to-use interfaces that solve real problems. With experience in both design and development, I make sure designs look great and work perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 justify-center"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all inline-flex items-center gap-2 justify-center"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 via-cyan-400 to-teal-400 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 right-10 w-24 h-24 bg-white/20 rounded-2xl transform -rotate-12" />
                <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/20 rounded-full transform rotate-45" />
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-lg" />
              </div>
              <Palette className="w-40 h-40 text-white opacity-40 relative z-10" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Figma className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Beginner in</p>
                  <p className="text-lg font-bold text-gray-900">Figma Design</p>
                  <p className="text-xs text-gray-500">Prototyping & Design Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">What I Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Palette className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">UI/UX Design</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              I design beautiful and easy-to-use interfaces. I focus on making things clear, organized, and simple for users to understand and use.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-100 to-green-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">User Research</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              I study how people use products and what they need. This helps me create designs that are easy to navigate and understand.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Figma className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Figma Prototyping</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              I create interactive designs in Figma that you can click through and test. This helps everyone see how the final product will work.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Code className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Developer Collaboration</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              I work closely with developers to make sure designs can be built. My coding knowledge helps me create designs that are both beautiful and practical.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Team Collaboration</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              I work well with teams, listen to feedback, and make sure everyone's ideas are included in the final design.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Problem Solving</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              I find creative solutions to design challenges. I balance what users want, what the business needs, and what's technically possible.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Take a look at my design work, from research to final designs. See how I solve problems and create user-friendly experiences.
          </p>
        </div>

        {featuredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                role={project.role}
                skills={project.skills_showcased}
              />
            ))}
          </div>
        ) : null}

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Let's Create Something Amazing</h2>
          <p className="text-lg sm:text-xl text-blue-50 mb-6 sm:mb-8">
            I'm always excited to work on new projects. Let's talk about how I can help bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-50 transition-all shadow-lg text-sm sm:text-base"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
