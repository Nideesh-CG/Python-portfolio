import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { DocumentViewer } from '../components/DocumentViewer';
import { ImageLightbox } from '../components/ImageLightbox';
import { portfolioConfig } from '../config/portfolio';
import { Layout, Users, Award, Maximize2, Download } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';

export const LearningSection: React.FC = () => {
  const { assets } = portfolioConfig;
  const [activeLightbox, setActiveLightbox] = useState<{ url: string; title: string; caption: string } | null>(null);

  return (
    <section id="classroom" className="py-20 md:py-28 border-b border-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="COLLABORATIVE PEDAGOGY"
          title="LEARNING BEYOND"
          highlight="THE CLASSROOM."
          subtitle="Interactive storyboarding, peer group discussions, and competitive programming evaluations that elevated academic theory into applied engineering."
        />

        {/* 3 VISUALLY ATTRACTIVE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD A: STORYBOARD */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-border-light transition-all duration-300 flex flex-col justify-between shadow-dark-card">
            <div>
              <div
                onClick={() =>
                  setActiveLightbox({
                    url: assets.storyboard,
                    title: 'System Design Storyboard',
                    caption: 'Visual workflow planning user scenarios and architectural milestones.',
                  })
                }
                className="relative aspect-[4/3] bg-black/60 overflow-hidden cursor-zoom-in group border-b border-border"
              >
                <img
                  src={assets.storyboard}
                  alt="System Architecture Storyboard"
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-xl bg-black/80 text-white border border-border backdrop-blur-md">
                    <Maximize2 className="w-5 h-5 text-primary" />
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 text-primary border border-primary/20 backdrop-blur-sm">
                    Storyboarding
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <Layout className="w-4 h-4" />
                  Visual Narrative & Logic
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary">
                  Interactive System Storyboard
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  Before writing line-by-line implementation code, our team mapped the end-to-end user experience, decision gates, and data transfer protocols through visual storyboarding.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-background-secondary border border-border/70">
                  <span className="text-xs font-bold text-primary block mb-1">
                    Learning Reflection:
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed italic">
                    "Storyboarding forced us to anticipate operational edge cases, such as handling unrepairable e-waste components and designing transparent user status prompts."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 px-6 bg-background-secondary/50 border-t border-border flex items-center justify-between">
              <button
                onClick={() =>
                  setActiveLightbox({
                    url: assets.storyboard,
                    title: 'System Design Storyboard',
                    caption: 'Visual workflow planning user scenarios and architectural milestones.',
                  })
                }
                className="text-xs font-semibold text-text-secondary hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                Inspect Diagram
              </button>
              <button
                onClick={() => triggerDownload(assets.storyboard)}
                className="text-xs font-semibold text-text-secondary hover:text-primary flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
            </div>
          </div>

          {/* CARD B: PYTHON TUTORIAL DISCUSSION */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-border-light transition-all duration-300 flex flex-col justify-between shadow-dark-card">
            <div>
              <div
                onClick={() =>
                  setActiveLightbox({
                    url: assets.pythonDiscussion,
                    title: 'Python Tutorial Group Discussion',
                    caption: 'Classroom collaborative session focusing on PyBraille and accessibility.',
                  })
                }
                className="relative aspect-[4/3] bg-black/60 overflow-hidden cursor-zoom-in group border-b border-border"
              >
                <img
                  src={assets.pythonDiscussion}
                  alt="Python Tutorial Group Discussion"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-xl bg-black/80 text-white border border-border backdrop-blur-md">
                    <Maximize2 className="w-5 h-5 text-primary" />
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 text-primary border border-primary/20 backdrop-blur-sm">
                    Peer Tutorial
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  Collaborative Engineering
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary">
                  Tutorial Group Discussion
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  Collaborated with peer Dhanush Kumar G (23MID0141) on accessibility solutions to convert standard Python syntax and JavaScript web content into six-dot Grade 1 Braille patterns using <code className="text-primary font-mono">PyBraille</code>.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-background-secondary border border-border/70">
                  <span className="text-xs font-bold text-primary block mb-1">
                    Pedagogical Contribution:
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed italic">
                    "Presented our Braille compilation findings to the faculty and peers, demonstrating how open-source libraries can remove structural accessibility barriers."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 px-6 bg-background-secondary/50 border-t border-border flex items-center justify-between">
              <button
                onClick={() =>
                  setActiveLightbox({
                    url: assets.pythonDiscussion,
                    title: 'Python Tutorial Group Discussion',
                    caption: 'Classroom collaborative session focusing on PyBraille and accessibility.',
                  })
                }
                className="text-xs font-semibold text-text-secondary hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                View Photo
              </button>
              <button
                onClick={() => triggerDownload(assets.pythonDiscussionReport)}
                className="text-xs font-semibold text-primary hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Get Report PDF
              </button>
            </div>
          </div>

          {/* CARD C: CLASS QUIZ */}
          <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-border-light transition-all duration-300 flex flex-col justify-between shadow-dark-card">
            <div>
              <div
                onClick={() =>
                  setActiveLightbox({
                    url: assets.classQuiz,
                    title: 'In-Class Programming Assessment',
                    caption: 'Rigorous algorithmic assessment on Advanced Python syntax.',
                  })
                }
                className="relative aspect-[4/3] bg-black/60 overflow-hidden cursor-zoom-in group border-b border-border"
              >
                <img
                  src={assets.classQuiz}
                  alt="Class Quiz Evaluation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-3 rounded-xl bg-black/80 text-white border border-border backdrop-blur-md">
                    <Maximize2 className="w-5 h-5 text-primary" />
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 text-primary border border-primary/20 backdrop-blur-sm">
                    Assessment
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  Syntax & Logic Evaluation
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary">
                  In-Class Programming Quiz
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  Participated in timed classroom quizzes testing mastery of complex Python topics: generator memory profiles, dictionary comprehension optimizations, error handling hierarchies, and regex patterns.
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-background-secondary border border-border/70">
                  <span className="text-xs font-bold text-primary block mb-1">
                    Evaluator Assessment:
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed italic">
                    "Tested rapid diagnostic capability—tracing stack traces and solving algorithmic edge cases under strict evaluation conditions."
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 px-6 bg-background-secondary/50 border-t border-border flex items-center justify-between">
              <button
                onClick={() =>
                  setActiveLightbox({
                    url: assets.classQuiz,
                    title: 'In-Class Programming Assessment',
                    caption: 'Rigorous algorithmic assessment on Advanced Python syntax.',
                  })
                }
                className="text-xs font-semibold text-text-secondary hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                View Assessment
              </button>
              <button
                onClick={() => triggerDownload(assets.classQuiz)}
                className="text-xs font-semibold text-text-secondary hover:text-primary flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Save Image
              </button>
            </div>
          </div>

        </div>

        {/* ASSOCIATED TUTORIAL DISCUSSION REPORT PDF VIEWER */}
        <div className="mt-12">
          <DocumentViewer
            title="Python Tutorial Contribution Report: Braille Compilation with PyBraille"
            subtitle="Complete course report by Dhanush Kumar G (23MID0141) & Nideesh C G (23MIC0092) documenting Grade 1 Braille pattern translation algorithms."
            pdfUrl={assets.pythonDiscussionReport}
            totalPages={3}
            fileSize="234 KB"
            badge="TUTORIAL REPORT"
            previewHeight="450px"
          />
        </div>
      </div>

      {activeLightbox && (
        <ImageLightbox
          isOpen={!!activeLightbox}
          imageUrl={activeLightbox.url}
          title={activeLightbox.title}
          caption={activeLightbox.caption}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </section>
  );
};

