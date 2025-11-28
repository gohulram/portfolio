import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { PortfolioProject } from '../types/portfolio';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (!error && data) {
        setProject(data);
      }
      setLoading(false);
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading project...</p>
      </div>
    );
  }

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
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {project.category}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{project.description}</p>
        </div>

        {project.thumbnail && (
          <div className="rounded-2xl overflow-hidden shadow-lg mb-12 bg-gradient-to-br from-gray-100 to-gray-200 h-96">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid md:grid-cols-4 gap-6 mb-12 bg-slate-50 p-8 rounded-2xl">
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

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Problem Statement</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{project.problem_statement}</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Goal</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{project.goal}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Approach</h2>
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{project.approach}</p>
          </div>
        </div>

        {project.wireframes && project.wireframes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Wireframes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.wireframes.map((wireframe, idx) => (
                <div key={idx} className="bg-gray-100 rounded-xl overflow-hidden">
                  <img src={wireframe.url} alt={wireframe.caption} className="w-full h-auto" />
                  <p className="p-4 text-sm text-gray-700 font-medium">{wireframe.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">High-Fidelity Designs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, idx) => (
                <div key={idx} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                  <img src={image.url} alt={image.caption} className="w-full h-auto" />
                  <p className="p-4 text-sm text-gray-700 font-medium">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.prototypes && project.prototypes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Interactive Prototypes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.prototypes.map((proto, idx) => (
                <a
                  key={idx}
                  href={proto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">{proto.label}</h3>
                    <ExternalLink className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-gray-600">{proto.description}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Results & Impact</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{project.results}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.key_takeaways.split('\n').filter(Boolean).map((takeaway, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Want to work together?</h3>
          <p className="text-blue-50 mb-6">I'd love to discuss more about this project or collaborate on yours.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
