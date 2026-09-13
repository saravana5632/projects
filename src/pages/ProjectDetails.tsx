import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, CheckCircle2, Blocks, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects.find(p => p.id === id) : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 relative"
        >
          <div className="absolute top-0 right-0 pointer-events-none opacity-5">
            <Blocks size={120} />
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-tighter bg-primary/10 text-primary rounded-md">
              {project.category}
            </span>
            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-tighter bg-muted/50 text-muted-foreground rounded-md flex items-center gap-1.5">
              <Calendar size={12} />
              {project.year}
            </span>
            <span className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-tighter bg-muted/50 text-muted-foreground rounded-md flex items-center gap-1.5">
              <CheckCircle2 size={12} />
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed font-light mb-8 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border border-border/50 text-foreground text-xs font-bold uppercase tracking-widest hover:bg-muted transition-colors"
              >
                <Github size={16} />
                Source Code
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Featured Image */}
        {project.image && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16 rounded-2xl overflow-hidden glass border-border/50"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-12">
            {/* Extended description or Features would go here if we expand the data model */}
            {project.features && project.features.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-primary size-6" />
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
                  <ImageIcon className="text-primary size-6" />
                  Screenshots
                </h2>
                <div className="grid gap-6">
                  {project.screenshots.map((shot, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden glass border border-border/50">
                      <img src={shot} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div>
            <div className="glass rounded-2xl p-6 border-border/50 sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6 flex items-center gap-2">
                <Tag className="text-primary size-4" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-tighter bg-muted/50 text-muted-foreground rounded-md border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
