import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink, Code } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';
import { openExternalLink } from '../utils/linkHelpers';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Journey', href: '#journey' },
  { name: 'Classroom', href: '#classroom' },
  { name: 'Analytics', href: '#analytics' },
  { name: 'Accessibility', href: '#accessibility' },
  { name: 'Assessments', href: '#padlet' },
  { name: 'E-Waste Project', href: '#ewaste' },
  { name: 'Blog', href: '#blog' },
  { name: 'Business', href: '#business' },
  { name: 'Video', href: '#video' },
  { name: 'Code & Docs', href: '#github' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* BRAND IDENTITY */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:border-primary transition-colors">
            <Code className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl tracking-wider text-white group-hover:text-primary transition-colors">
                {portfolioConfig.personal.brand}
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold">
                {portfolioConfig.personal.name}
              </span>
            </div>
            <span className="hidden md:block text-[10px] text-text-muted">
              Advanced Python Programming Journey
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden xl:flex items-center gap-1 bg-card/60 border border-border/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA BUTTONS & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          {portfolioConfig.links.eWasteLiveApp && (
            <button
              onClick={() => openExternalLink(portfolioConfig.links.eWasteLiveApp)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-primary/20 text-text-primary hover:text-primary border border-border hover:border-primary transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-primary" />
              Live Capstone
            </button>
          )}

          {portfolioConfig.links.githubProfile && (
            <button
              onClick={() => openExternalLink(portfolioConfig.links.githubProfile)}
              className="p-2 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-card border border-border text-text-secondary hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[65px] bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl p-6 transition-all duration-300">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'bg-card text-text-secondary hover:text-white hover:bg-white/5 border border-border'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted">
            <span>{portfolioConfig.personal.name}</span>
            <span>Reg: {portfolioConfig.personal.regNo}</span>
          </div>
        </div>
      )}
    </header>
  );
};

