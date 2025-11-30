import type { PortfolioProject } from '../types/portfolio';

export const projects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Task Collaboration App',
    slug: 'task-collaboration-app',
    description: 'A task management app designed to help teams work together better. Features include easy-to-use dashboards, real-time messaging, and progress tracking. This is my main design project showcasing my UI/UX skills.',
    thumbnail: '/images/thumbnail/close-up-young-business-team-working.jpg',
    category: 'case-study',
    role: 'Beginner UI/UX Designer',
    problem_statement: 'Many teams have trouble working together because communication is scattered across different apps, task priorities are unclear, and it\'s hard to see how projects are progressing. Existing tools are either too complicated or missing important features, which wastes time and makes teams less productive.',
    goal: 'Create an easy-to-use task collaboration app that brings everything together in one place: team communication, task management, and progress tracking. The app should be simple enough for anyone to use, regardless of their technical skills.',
    approach: 'I followed a step-by-step design process:\n\n1. Understanding Users\n   - Talked to 8 team members to learn about their challenges\n   - Found main problems: tasks spread across different apps, unclear priorities, hard to see progress\n   - Created 3 user profiles: Project Manager, Team Lead, and Individual Contributor\n\n2. Planning the Structure\n   - Mapped out how users would complete key tasks: creating projects, assigning tasks, tracking progress\n   - Designed a clear navigation system so everything is easy to find\n   - Made the most-used features easy to access\n\n3. Creating Initial Sketches\n   - Started with simple black-and-white wireframes for major screens (Dashboard, Tasks, Messaging, Meetings)\n   - Tested these early layouts with fellow students and friends\n   - Improved spacing, alignment, and button placement based on their feedback\n\n4. Designing the Visual Style\n   - Chose a clean color palette (blue, white, gray) for a modern look\n   - Used consistent typography for headings, subheadings, and content\n   - Maintained spacing rules across all screens (padding, margins, alignment)\n   - Repeated the same button style, card style, and form style for a uniform look\n   - Focused on clarity and simplicity so beginners can easily use the app\n\n5. Building Interactive Prototypes\n   - Created clickable prototypes in Figma showing how the app works\n   - Tested with 12 users to see if it was easy to use\n   - Made changes based on what users said\n\n6. Preparing for Development\n   - Documented all components and how they work\n   - Created a style guide for developers\n   - Worked with developers to make sure designs work on all devices',
    key_takeaways: 'User research reveals the value of understanding real pain points before designing solutions. The most impactful features emerged from user interviews, not assumptions. Consistency across the design system dramatically improves user confidence. Small interactions and microanimations significantly enhance perceived performance and user satisfaction. Accessibility is not an afterthought—building it in from the start creates better experiences for everyone.',
    tools: ['Figma', 'Usability Testing', 'Design Systems', 'Prototyping'],
    skills_showcased: ['User Research', 'User Flows', 'Wireframing', 'Visual Design', 'Information Architecture', 'Prototyping', 'Design Systems', 'Accessibility'],
    images: [
      { url: '/images/high-fidelity/collaboration.png', caption: 'Task Collaboration - Main collaboration interface showing team interactions' },
      { url: '/images/high-fidelity/task.png', caption: 'Task Management - Visual board to organize tasks by status' },
      { url: '/images/high-fidelity/home.png', caption: 'Dashboard - Shows all tasks, team progress, and quick actions' },
      { url: '/images/high-fidelity/login page.png', caption: 'Login Page - User authentication interface' },
      { url: '/images/high-fidelity/signup page.png', caption: 'Signup Page - User registration interface' }
    ],
    wireframes: [
      { url: '/images/wireframe/collaboration_wireframe.png', caption: 'Task Collaboration Wireframe - Initial layout exploration' },
      { url: '/images/wireframe/home_wireframe.png', caption: 'Home Dashboard Wireframe - Information architecture for main dashboard' },
      { url: '/images/wireframe/gamification_wireframe.png', caption: 'Gamification Wireframe - User engagement and reward system structure' }
    ],
    prototypes: [
      { url: 'https://www.figma.com', label: 'Interactive Prototype', description: 'Full Figma prototype demonstrating task creation, messaging, and progress tracking workflows. Test key user interactions and provide feedback.' }
    ],
    figma_wireframe_link: 'https://www.figma.com/design/KjhMjYyqLJBguzAea45clz/task-collaboration-app?node-id=4016-328&t=TDIZDJtlgD2EtbMl-1',
    figma_highfidelity_link: 'https://www.figma.com/design/KjhMjYyqLJBguzAea45clz/task-collaboration-app?node-id=69-353&t=TDIZDJtlgD2EtbMl-1',
    results: 'Testing Results:\n- 92% of users could complete main tasks without help\n- Average time to complete tasks: 2.3 minutes (target was under 3 minutes)\n- Users rated the interface 4.2 out of 5 for clarity\n- After three rounds of improvements, workflow efficiency improved by 35%\n- The design system helped developers build the app 40% faster\n\nDesign Quality:\n✓ Followed basic accessibility practices (clear text size, color contrast)\n✓ Consistent layouts used across all screens\n✓ No major usability issues in the final screens\n✓ Works well visually for mobile, tablet, and desktop formats\n✓ Clear labeling and simple navigation reduced confusion',
    featured: true,
    order: 1
  },
  {
    id: '2',
    title: 'Pet Pathway Web Application',
    slug: 'pet-pathway',
    description: 'A full-stack web application built with React, Node.js, and MongoDB. This project showcases my technical development skills including frontend and backend development, database design, and API integration.',
    thumbnail: '/images/thumbnail/cute-pet-collage-isolated.jpg',
    category: 'project',
    role: 'Full-Stack Developer',
    problem_statement: 'Pet adoption websites often have too many options with poor search features, and booking vet appointments is spread across different services. Pet owners need a better way to find pets and schedule consultations.',
    goal: 'Build a complete web application that lets users browse adoptable pets with smart filters, view detailed pet information, and book veterinary consultations all in one place.',
    approach: 'This project demonstrates my full-stack development skills:\n\n1. Frontend Development (React.js)\n   - Built responsive user interface with React components\n   - Implemented pet browsing with filtering and search functionality\n   - Created interactive pet profile pages with detailed information\n   - Developed appointment booking interface with calendar integration\n   - Used React Router for smooth page navigation\n   - Implemented state management for user data and bookings\n   - Focused on clean, functional code structure\n\n2. Backend Development (Node.js)\n   - Created RESTful APIs for pet listings, user management, and bookings\n   - Implemented authentication and authorization systems\n   - Built API endpoints for filtering and searching pets\n   - Developed booking system with availability checking\n   - Handled file uploads for pet images\n   - Implemented proper error handling and validation\n\n3. Database Design (MongoDB)\n   - Designed database schema for pets, users, and appointments\n   - Created efficient data models with proper relationships\n   - Implemented database queries for fast data retrieval\n   - Optimized database performance for large datasets\n   - Ensured data integrity and security\n\n4. Technical Implementation\n   - Integrated frontend with backend APIs\n   - Implemented error handling and validation throughout\n   - Optimized image loading and performance\n   - Ensured responsive design works on all devices\n   - Deployed application with proper security measures\n   - Wrote clean, maintainable, and well-documented code',
    key_takeaways: 'Building both frontend and backend gave me a complete understanding of how web applications work. React.js made it easy to create interactive user interfaces. Node.js allowed me to build powerful backend APIs. MongoDB provided flexible data storage. This project showcases my ability to work with the full MERN stack (MongoDB, Express, React, Node.js) and deliver a complete, working application.',
    tools: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'RESTful APIs', 'JavaScript', 'HTML/CSS'],
    skills_showcased: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development', 'Full-Stack Development', 'React.js', 'Node.js', 'MongoDB', 'RESTful APIs', 'JavaScript', 'Express.js'],
    images: [],
    wireframes: [],
    prototypes: [],
    results: 'Technical Achievements:\n- Built complete MERN stack application from scratch\n- React.js frontend with component-based architecture\n- Node.js backend with Express.js framework\n- MongoDB database with optimized queries and proper schema design\n- RESTful API with comprehensive error handling and validation\n- Responsive frontend implementation working on all devices\n- Image upload and optimization functionality\n- Secure authentication and user management system\n- Clean code structure with proper separation of concerns\n\nProject Results:\n- Successfully deployed full-stack web application\n- Handles pet listings, user accounts, and booking system efficiently\n- Fast API responses with optimized database queries\n- Mobile-responsive implementation with cross-browser compatibility\n- Well-documented, maintainable code following best practices\n- GitHub repository available for code review\n\nThis project showcases my technical skills in full-stack development, demonstrating ability to build complete, production-ready web applications using modern technologies.',
    featured: true,
    order: 2
  }
];

