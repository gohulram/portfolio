import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  role: string;
  skills: string[];
}

export default function ProjectCard({ slug, title, description, thumbnail, role, skills }: ProjectCardProps) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
              {title}
            </h3>
            <ArrowRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
          </div>

          <p className="text-sm text-gray-600 mb-3 font-medium">{role}</p>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                +{skills.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
