/*
  # Portfolio Database Schema

  1. New Tables
    - `portfolio_projects`: Stores case study projects
      - `id` (uuid, primary key)
      - `title` (text): Project title
      - `slug` (text, unique): URL-friendly identifier
      - `description` (text): Brief project description
      - `thumbnail` (text): Image URL for project thumbnail
      - `category` (text): Project category (e.g., 'case-study')
      - `role` (text): Designer's role in the project
      - `problem_statement` (text): Problem being solved
      - `goal` (text): Project goal
      - `approach` (text): Design approach and methodology
      - `key_takeaways` (text): Lessons learned
      - `tools` (text[]): Tools used (Figma, etc.)
      - `skills_showcased` (text[]): UX/UI skills demonstrated
      - `images` (jsonb): Array of image URLs for case study
      - `wireframes` (jsonb): Wireframe images
      - `prototypes` (jsonb): Prototype details and links
      - `results` (text): Performance indicators and results
      - `featured` (boolean): Is this a featured project?
      - `order` (integer): Display order
      - `created_at` (timestamp)

    - `testimonials`: Client/mentor testimonials
      - `id` (uuid, primary key)
      - `name` (text): Testimonial author
      - `title` (text): Author's role/title
      - `company` (text): Organization
      - `content` (text): Testimonial text
      - `rating` (integer): Rating (1-5)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (portfolio is public-facing)
    - Restrict write access to admin/owner
*/

CREATE TABLE IF NOT EXISTS portfolio_projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  thumbnail text,
  category text DEFAULT 'case-study',
  role text,
  problem_statement text,
  goal text,
  approach text,
  key_takeaways text,
  tools text[],
  skills_showcased text[],
  images jsonb DEFAULT '[]'::jsonb,
  wireframes jsonb DEFAULT '[]'::jsonb,
  prototypes jsonb DEFAULT '[]'::jsonb,
  results text,
  featured boolean DEFAULT false,
  "order" integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text,
  company text,
  content text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Portfolio projects are public"
  ON portfolio_projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Testimonials are public"
  ON testimonials FOR SELECT
  TO public
  USING (true);
