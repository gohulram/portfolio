import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    const sorted = projects.sort((a, b) => a.order - b.order);
    if (filter === 'all') {
      return sorted;
    }
    return sorted.filter(p => p.category === filter);
  }, [filter]);

  const categories = ['all', 'case-study', 'project'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">My Projects</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            A collection of my design and development work. See how I solve problems and create user-friendly experiences.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat === 'case-study' ? 'Case Studies' : 'Web Applications'}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
