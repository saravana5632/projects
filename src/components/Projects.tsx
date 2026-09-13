import React, { useState } from 'react';
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Github, ExternalLink, Blocks } from "lucide-react";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    return matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen">
      <div className="container mx-auto">
        
        {/* Projects Heading & Intro */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Blocks className="text-primary size-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Projects</h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl font-light">
            A comprehensive collection of my engineering work. Browse through applications, models, and systems I have built.
          </p>
        </div>

        {/* Search / Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 border-b border-border/50 pb-8">
          <div className="flex flex-wrap gap-2 items-center w-full">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="h-full"
            >
              <div className="h-full glass border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden group flex flex-col rounded-2xl">
                <div className="p-6 pb-4 relative">
                  <div className="absolute top-4 right-4 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
                    <Blocks className="size-16" />
                  </div>
                  <div className="flex gap-2 flex-wrap mb-3">
                    <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-tighter bg-primary/10 text-primary rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                    <Link to={`/projects/${project.id}`}>
                      {project.title}
                    </Link>
                  </h3>
                </div>
                
                <div className="px-6 flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="px-6 pb-6 pt-0 mt-auto flex items-center justify-between border-t border-border/50 pt-6">
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                      >
                        <Github className="size-4" />
                        Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] animate-pulse hover:animate-none"
                      >
                        <ExternalLink className="size-3" />
                        Demo
                      </a>
                    )}
                  </div>
                  
                  <Link 
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors ml-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-muted-foreground">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
