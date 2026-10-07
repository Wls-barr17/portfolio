export type ProjectCategory =
  'Backend' | 'Frontend' | 'Mobile' | 'Database' | 'AI' | 'University' | 'Game' | 'Web';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  categories: ProjectCategory[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  problem: string;
  solution: string;
  architecture: string[];
  note?: string;
}
