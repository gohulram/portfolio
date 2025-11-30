export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  role: string;
  problem_statement: string;
  goal: string;
  approach: string;
  key_takeaways: string;
  tools: string[];
  skills_showcased: string[];
  images: { url: string; caption: string }[];
  wireframes: { url: string; caption: string }[];
  prototypes: { url: string; label: string; description: string }[];
  figma_wireframe_link?: string;
  figma_highfidelity_link?: string;
  results: string;
  featured: boolean;
  order: number;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}
