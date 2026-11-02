import React from 'react';
import { ArrowUp, Github, BookOpen, ExternalLink, Terminal } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';
import { openExternalLink } from '../utils/linkHelpers';

export const Footer: React.FC = () => {
  const { personal, links } = portfolioConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-background border-t border-border pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          
          {/* Brand & Personal Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-wider text-white">
                {personal.brand}
              </span>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              An interactive digital exhibition documenting the Advanced Python Programming journey of{' '}
              <span className="text-white font-semibold">{personal.name}</span>.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {links.githubProfile && (
                <button
                  onClick={() => openExternalLink(links.githubProfile)}
                  className="p-2.5 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </button>
              )}

              {links.mediumBlog && (
                <button
                  onClick={() => openExternalLink(links.mediumBlog)}
                  className="p-2.5 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
                  aria-label="Medium Article"
                >
                  <BookOpen className="w-4 h-4" />
                </button>
              )}

              {links.eWasteLiveApp && (
                <button
                  onClick={() => openExternalLink(links.eWasteLiveApp)}
                  className="p-2.5 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-primary transition-colors"
                  aria-label="E-Waste Platform"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Academic Profile */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block">
              Academic Credentials
            </span>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li>
                <span className="text-white font-medium">Student:</span> {personal.name} ({personal.regNo})
              </li>
              <li>
                <span className="text-white font-medium">Course:</span> {personal.course} ({personal.courseCode})
              </li>
              <li>
                <span className="text-white font-medium">Program:</span> {personal.program}
              </li>
              <li>
                <span className="text-white font-medium">Department:</span> {personal.institution}
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block">
              Direct Artifacts
            </span>
            <ul className="space-y-2 text-xs text-text-secondary">
              <li>
                <a href="#analytics" className="hover:text-primary transition-colors">
                  • Pivot Table Analytics & Excel
                </a>
              </li>
              <li>
                <a href="#ewaste" className="hover:text-primary transition-colors">
                  • Circular E-Waste Platform
                </a>
              </li>
              <li>
                <a href="#accessibility" className="hover:text-primary transition-colors">
                  • IoT Visual Impairment Application
                </a>
              </li>
              <li>
                <a href="#video" className="hover:text-primary transition-colors">
                  • Demonstration Video Player
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary transition-colors">
                  • Medium Technical Article
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} {personal.name} • {personal.brand}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              Engineered with Python 3, React & Tailwind CSS
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-card hover:bg-primary hover:text-white border border-border text-text-secondary transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
