import React from 'react';
import { getAllCategories } from '../data/projects';

interface ProjectFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilters({ activeCategory, onCategoryChange }: ProjectFiltersProps) {
  const categories = ['All', ...getAllCategories()];

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground shadow-[0_0_15px_rgba(56,189,248,0.3)]'
              : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
