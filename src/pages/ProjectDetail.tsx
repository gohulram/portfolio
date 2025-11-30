import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Project not found</p>
          <Link to="/projects" className="text-blue-600 hover:text-blue-700">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 sm:mb-8 font-medium text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mb-8 sm:mb-12">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            {project.category === 'case-study' ? 'Case Study' : 'Web Application'}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">{project.title}</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mb-6 sm:mb-8">{project.description}</p>
          
          {/* High-Fidelity Images Card */}
          {project.images && project.images.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">High-Fidelity Designs</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {project.images.map((image, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                    <div className="relative w-full aspect-square bg-white overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.caption || `High-fidelity design ${idx + 1} for ${project.title}`}
                        loading="lazy"
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="p-2 text-xs text-gray-700 font-medium line-clamp-2">{image.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {project.thumbnail && project.images && project.images.length === 0 && (
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8 sm:mb-12 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="relative w-full aspect-video sm:aspect-[21/9] bg-white">
              <img
                src={project.thumbnail}
                alt={`${project.title} - Project overview thumbnail`}
                loading="eager"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 bg-slate-50 p-6 sm:p-8 rounded-2xl">
          <div>
            <p className="text-sm text-gray-600 font-medium mb-2">My Role</p>
            <p className="text-lg font-bold text-gray-900">{project.role}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium mb-2">Tools Used</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium mb-2">Skills Showcased</p>
            <div className="flex flex-wrap gap-2">
              {project.skills_showcased.slice(0, 3).map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Problem Statement</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{project.problem_statement}</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Goal</h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{project.goal}</p>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Design Approach</h2>
          <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl border border-blue-200">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line">{project.approach}</p>
          </div>
        </div>

        {project.wireframes && project.wireframes.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Wireframes</h2>
              {project.figma_wireframe_link && (
                <a
                  href={project.figma_wireframe_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Wireframes in Figma
                </a>
              )}
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4">Early sketches showing the layout and structure of the design.</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {project.wireframes.map((wireframe, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={wireframe.url} 
                      alt={wireframe.caption || `Wireframe ${idx + 1} for ${project.title}`} 
                      loading="lazy"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <p className="p-3 sm:p-4 text-xs sm:text-sm text-gray-700 font-medium">{wireframe.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Figma Design Screens</h2>
              {project.figma_highfidelity_link && (
                <a
                  href={project.figma_highfidelity_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
                >
                  <ExternalLink className="w-4 h-4" />
                  View High-Fidelity Designs in Figma
                </a>
              )}
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4">Final designs created in Figma, showing the complete user interface.</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {project.images.map((image, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative w-full aspect-video bg-white overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.caption || `High-fidelity design ${idx + 1} for ${project.title}`} 
                      loading="lazy"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <p className="p-3 sm:p-4 text-xs sm:text-sm text-gray-700 font-medium">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.prototypes && project.prototypes.length > 0 && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Interactive Prototypes</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">Click through these interactive prototypes to see how the design works.</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {project.prototypes.map((proto, idx) => (
                <a
                  key={idx}
                  href={proto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600">{proto.label}</h3>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">{proto.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Results & Impact</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 sm:p-8 rounded-2xl border border-green-200">
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed whitespace-pre-line">{project.results}</p>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Key Takeaways</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">What I learned from this project.</p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {project.key_takeaways.split('\n').filter(Boolean).map((takeaway, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 p-5 sm:p-6 rounded-xl">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 sm:p-8 rounded-2xl text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Want to work together?</h3>
          <p className="text-sm sm:text-base text-blue-50 mb-4 sm:mb-6">I'd love to discuss this project or collaborate on yours.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-50 transition-all text-sm sm:text-base"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
