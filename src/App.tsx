import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Router basename="/projects">
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] neural-bg z-[-1]" />
      </div>
    </Router>
  );
}
