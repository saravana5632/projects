export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  year: number;
  status: "Completed" | "In Progress" | "Archived";
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  screenshots?: string[];
  featured?: boolean;
  
  // Optional fields for the details page based on user request
  features?: string[];
  additionalDetails?: string;
}
