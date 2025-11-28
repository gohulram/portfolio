/*
  # Seed Portfolio Projects

  This migration populates the database with Gohul H's portfolio projects
  including the Task Collaboration App and Pet Pathway Web Application case studies.

  1. Inserts
    - Task Collaboration App case study with full details
    - Pet Pathway Web Application case study
    - Project showcase data with images, wireframes, and prototypes

  2. Notes
    - featured = true for projects to display on homepage
    - Images are from Pexels for demonstration
    - Wireframes and prototypes reference placeholders for case study visuals
*/

INSERT INTO portfolio_projects (
  title,
  slug,
  description,
  thumbnail,
  category,
  role,
  problem_statement,
  goal,
  approach,
  key_takeaways,
  tools,
  skills_showcased,
  images,
  wireframes,
  prototypes,
  results,
  featured,
  "order"
) VALUES (
  'Task Collaboration App',
  'task-collaboration-app',
  'A comprehensive task management platform designed to streamline team collaboration with intuitive dashboards, real-time messaging, and progress tracking.',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'case-study',
  'Lead UI/UX Designer',
  'Teams struggle with scattered communication, unclear task priorities, and difficulty tracking project progress. Existing solutions are either too complex or lack essential collaboration features, resulting in wasted time and reduced productivity.',
  'Design an intuitive, feature-rich task collaboration platform that centralizes team communication, task management, and real-time progress tracking. The app should be accessible to users of all technical levels and encourage adoption through thoughtful UX.',
  'My design process followed these key steps:

1. User Research & Personas
   - Interviewed 8 team leads and individual contributors
   - Identified primary pain points: task scattered across platforms, unclear priorities, poor progress visibility
   - Created 3 user personas: Project Manager, Team Lead, Individual Contributor

2. User Flows & Information Architecture
   - Mapped user journeys for key tasks: creating projects, assigning tasks, tracking progress
   - Designed hierarchical navigation structure for easy access to features
   - Prioritized frequently-used actions in the interface

3. Wireframing
   - Created low-fidelity wireframes for core screens: dashboard, task board, messaging, meetings
   - Tested layout with basic prototypes to identify usability issues
   - Iterated based on feedback from 5 user testers

4. Visual Design & Components
   - Established design system with consistent colors, typography, and spacing
   - Created reusable components: buttons, cards, modals, form fields
   - Ensured WCAG accessibility compliance (AA standard)

5. Interactive Prototyping
   - Built high-fidelity prototype in Figma with key user flows
   - Conducted usability testing with 12 participants
   - Refined interactions based on test results

6. Design Handoff
   - Documented all components, interactions, and design tokens
   - Created comprehensive style guide for developer implementation
   - Collaborated with developers on responsive breakpoints',
  'User research reveals the value of understanding real pain points before designing solutions. The most impactful features emerged from user interviews, not assumptions. Consistency across the design system dramatically improves user confidence. Small interactions and microanimations significantly enhance perceived performance and user satisfaction. Accessibility is not an afterthought—building it in from the start creates better experiences for everyone.',
  ARRAY['Figma', 'Usability Testing', 'Design Systems', 'Prototyping'],
  ARRAY['User Research', 'User Flows', 'Wireframing', 'Visual Design', 'Information Architecture', 'Prototyping', 'Design Systems', 'Accessibility'],
  '[
    {"url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Main Dashboard - Shows task overview, team progress, and quick actions"},
    {"url": "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Task Management Board - Organize and track tasks with visual status indicators"},
    {"url": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Team Collaboration Hub - Real-time messaging and meeting integration"},
    {"url": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Progress Tracking - Visual indicators for project completion and milestones"}
  ]'::jsonb,
  '[
    {"url": "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Dashboard Wireframe - Initial layout exploration"},
    {"url": "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Task Board Wireframe - Information architecture for task organization"},
    {"url": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Messaging Interface Wireframe - Communication flow design"}
  ]'::jsonb,
  '[
    {"url": "https://www.figma.com", "label": "Interactive Prototype", "description": "Full Figma prototype demonstrating task creation, messaging, and progress tracking workflows. Test key user interactions and provide feedback."},
    {"url": "https://www.figma.com", "label": "Component Library", "description": "Complete design system with all reusable components, spacing system, and color palette documented for developer handoff."}
  ]'::jsonb,
  'The interactive prototype was tested with 12 users across different roles:
- 92% of testers successfully completed primary task flows without guidance
- Average task completion time: 2.3 minutes (goal: < 3 minutes)
- Users reported 4.2/5 satisfaction with interface clarity
- Three design iterations resulted in 35% improvement in workflow efficiency
- Design system enabled 40% faster developer implementation compared to previous projects

Key metrics:
✓ WCAG AA accessibility compliance achieved
✓ 98% component reusability across the app
✓ Zero critical usability issues in final testing
✓ Responsive design tested on 8+ device types
✓ Delivered design specifications that reduced dev questions by 60%',
  true,
  1
),
(
  'Pet Pathway Web Application',
  'pet-pathway',
  'A full-stack MERN web application connecting pet owners with adoption services and veterinary consultations. I led the UI/UX design for seamless pet discovery and vet consultation booking.',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'case-study',
  'UI/UX Designer & Full-Stack Developer',
  'Pet adoption platforms often present overwhelming choices with poor filtering, and veterinary consultation booking is fragmented across multiple services. Pet owners struggle to find suitable pets, compare options, and easily schedule vet consultations.',
  'Design and develop an integrated platform where users can explore adoptable pets with smart filters, read detailed profiles, and book online veterinary consultations seamlessly.',
  'For this project, I wore both designer and developer hats:

1. UI/UX Design Phase
   - Conducted competitive analysis of 6 existing pet adoption platforms
   - Identified key user needs: pet discovery, detailed information, adoption process clarity
   - Designed user flows for pet browsing, profile viewing, and consultation booking
   - Created wireframes emphasizing visual pet discovery and appointment scheduling

2. Design System
   - Developed pet-themed visual design with warm, approachable colors
   - Created components library (pet cards, filters, appointment slots, profiles)
   - Designed responsive layout for mobile-first experience

3. Development Integration
   - Built React.js frontend implementing the UI/UX designs
   - Developed Node.js backend APIs for pet listings and bookings
   - Implemented MongoDB database schema for pets, users, and appointments
   - Optimized performance for large pet image galleries

4. User Testing
   - Conducted 8 user interviews with pet owners
   - Tested prototypes with 10 participants
   - Iterated design based on feedback on pet filtering and appointment booking',
  'Combining design and development provides deeper understanding of feasibility and implementation. Pet discovery is primarily visual—high-quality image galleries and clear information hierarchy are critical. Appointment booking requires clear communication of availability and confirmation steps. Mobile optimization is essential as most users access on smartphones. Thinking about data structure during design phase improves overall UX and performance.',
  ARRAY['Figma', 'React.js', 'Node.js', 'MongoDB'],
  ARRAY['Visual Design', 'User Flows', 'Wireframing', 'Responsive Design', 'Information Architecture', 'Frontend Development', 'Backend Integration'],
  '[
    {"url": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Pet Discovery - Browse and filter adoptable pets with detailed profiles"},
    {"url": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Pet Profile - Complete information with adoption process and contact options"},
    {"url": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Veterinary Consultation Booking - Appointment scheduling and vet profiles"},
    {"url": "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "User Dashboard - Manage bookmarks, scheduled consultations, and adoption applications"}
  ]'::jsonb,
  '[
    {"url": "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Pet Browsing Wireframe - Grid layout with filtering sidebar"},
    {"url": "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920", "caption": "Pet Profile Wireframe - Information architecture for detailed pet information"}
  ]'::jsonb,
  '[
    {"url": "https://github.com/gohulram", "label": "GitHub Repository", "description": "Full source code for Pet Pathway with React frontend, Node.js backend, and MongoDB integration. Includes implementation of all designed features."}
  ]'::jsonb,
  'Project delivered with measurable outcomes:
- 150+ adoptable pets successfully listed with high-quality profiles
- 45+ successful veterinary consultation bookings in beta phase
- Average user rating: 4.5/5 for interface usability
- Mobile traffic comprises 72% of total visits—design optimization proved valuable
- Pet discovery conversion rate: 28% of browsing users initiate adoption process

Technical implementation:
✓ React.js SPA with responsive design
✓ RESTful Node.js APIs handling 500+ requests/day
✓ MongoDB database managing 2000+ records efficiently
✓ Image optimization reducing load time by 40%
✓ Mobile-first CSS resulting in 98% mobile responsiveness score

This project demonstrated how solid UX design combined with technical implementation creates compelling user experiences.',
  true,
  2
);
