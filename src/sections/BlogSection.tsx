import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../config/portfolio';
import { openExternalLink } from '../utils/linkHelpers';
import { BookOpen, ExternalLink } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const { links, personal } = portfolioConfig;

  return (
    <section id="blog" className="py-20 md:py-28 border-b border-border relative bg-background-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="TECHNICAL PUBLISHING"
          title="SHARING KNOWLEDGE"
          highlight="THROUGH WRITING."
          subtitle="Publishing accessible software insights for the global developer ecosystem on Medium."
        />

        {/* EDITORIAL BLOG SHOWCASE CARD */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-dark-card hover:border-border-light transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  Medium Publication
                </span>
                <span className="text-xs text-text-muted">
                  • By {personal.name}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-heading text-text-primary leading-tight">
                Everyone Deserves to Code: Making Python Accessible to Braille Learners
              </h3>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                Programming literacy is a fundamental modern catalyst, yet visually impaired students face immense hurdles navigating visual code editors. In this article, I share how Python libraries like <code className="text-primary font-mono">PyBraille</code> and open-source JavaScript parsers can automatically translate complex indentation and programming syntax into tactile Grade 1 Braille Unicode characters, empowering blind learners to write and debug code with full autonomy.
              </p>

              {/* Publication Highlights */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                {['Python Accessibility', 'Assistive Technology', 'Braille Translation', 'Inclusive Coding', 'Open Source', 'PyBraille'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-background border border-border text-text-secondary font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Medium Call-To-Action Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-background border border-border flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <BookOpen className="w-4 h-4" />
                  Read on Medium
                </div>
                <h4 className="text-base font-bold text-white font-heading">
                  Verified Academic Publishing
                </h4>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  Direct companion publication to the CSI3007 Advanced Python Programming tutorial series.
                </p>
              </div>

              {links.mediumBlog ? (
                <button
                  onClick={() => openExternalLink(links.mediumBlog)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-orange-glow hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Full Article on Medium
                </button>
              ) : (
                <span className="text-xs text-text-muted italic">Publication link pending update.</span>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
