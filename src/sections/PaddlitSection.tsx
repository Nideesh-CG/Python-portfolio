import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ImageLightbox } from '../components/ImageLightbox';
import { portfolioConfig } from '../config/portfolio';
import { Maximize2, Download, HelpCircle, Lightbulb } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';

export const PaddlitSection: React.FC = () => {
  const { assets, personal } = portfolioConfig;
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <section id="padlet" className="py-20 md:py-28 border-b border-border relative bg-background-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="COLLABORATIVE ASSESSMENTS"
          title="THINK. SOLVE."
          highlight="LEARN."
          subtitle="Padlet Practical Assessments: Demonstrating advanced algorithmic problem solving and object-oriented Python design patterns on collaborative academic platforms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SCREENSHOT DISPLAY CARD */}
          <div className="lg:col-span-7 bg-card border border-border rounded-3xl overflow-hidden shadow-dark-card">
            <div className="p-4 md:p-6 bg-background-secondary border-b border-border flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block">
                  Course Padlet Board Submission
                </span>
                <h3 className="text-lg font-bold font-heading text-text-primary">
                  Object-Oriented Python Question Sets
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowLightbox(true)}
                  className="p-2 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => triggerDownload(assets.padlet)}
                  className="p-2 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
                  title="Download Image"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              onClick={() => setShowLightbox(true)}
              className="relative aspect-video bg-black/60 cursor-zoom-in group p-3 flex items-center justify-center overflow-hidden"
            >
              <img
                src={assets.padlet}
                alt="Padlet Assessment Screenshot"
                className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-xl bg-black/80 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-2 border border-border">
                  <Maximize2 className="w-4 h-4 text-primary" /> Click to Expand Screenshot
                </span>
              </div>
            </div>

            <div className="p-4 px-6 bg-background-secondary/40 border-t border-border flex items-center justify-between text-xs text-text-muted">
              <span>Platform: Padlet Academic Board • Faculty: Prof. Sharmila Banu K</span>
              <span className="font-mono text-primary font-semibold">{personal.regNo}</span>
            </div>
          </div>

          {/* ASSESSMENT CONTEXT & REFLECTIONS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block mb-1">
                Assessment Context
              </span>
              <h4 className="text-lg font-bold font-heading text-text-primary">
                Object-Oriented Problem Design
              </h4>
              <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed">
                As part of course CSI3007, students formulated and submitted algorithmic problem sets to the departmental Padlet board, demonstrating mastery of object-oriented data structures and recursion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary font-mono block mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" /> Featured Challenge
              </span>
              <h4 className="text-lg font-bold font-heading text-text-primary">
                Flatten a Multilevel Doubly Linked List
              </h4>
              <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed">
                <strong className="text-white">Medium Tier Problem:</strong> Designing an object-oriented Python solution for traversing a doubly linked list where nodes may contain child pointers, flattening the hierarchy using depth-first pointer reassignment without memory leaks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" /> Pedagogical Reflection
              </span>
              <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed italic">
                "Formulating solutions for peers sharpened my grasp of Python's reference semantics, garbage collection behavior, and recursive stack frames under OOP class encapsulation."
              </p>
            </div>
          </div>

        </div>
      </div>

      {showLightbox && (
        <ImageLightbox
          isOpen={showLightbox}
          imageUrl={assets.padlet}
          title="Padlet Practical Assessment Board"
          caption="Object-Oriented Python Question Sets (Prof. Sharmila Banu K / CSI3007)"
          onClose={() => setShowLightbox(false)}
        />
      )}
    </section>
  );
};
