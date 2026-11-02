import React from 'react';
import { ArrowRight, Github, BookOpen, Terminal, Code2, Database, ShieldCheck, Cpu } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';
import { openExternalLink } from '../utils/linkHelpers';

export const Hero: React.FC = () => {
  const { personal, links } = portfolioConfig;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-border">
      {/* Background subtle glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            {/* PROMINENT NAME HIGHLIGHT */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono font-bold text-primary tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                HELLO, I'M
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-wide block">
                <span className="text-white border-b-4 border-primary pb-1 shadow-sm">
                  {personal.name}
                </span>
                <span className="text-primary ml-2 font-mono text-base font-normal">({personal.regNo})</span>
              </h2>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-white leading-[1.08]">
              EXPLORING <br />
              THE <span className="text-primary">WORLD</span> <br />
              OF <span className="text-primary">PYTHON.</span>
            </h1>

            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
              {personal.bio}
            </p>

            <div className="p-4 rounded-2xl bg-card/80 border border-border/80 max-w-xl">
              <span className="text-xs uppercase tracking-wider text-primary font-bold block mb-1">
                Guiding Philosophy
              </span>
              <p className="text-sm font-medium text-text-primary italic">
                "{personal.tagline}"
              </p>
            </div>

            {/* Buttons & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('journey')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all duration-300 shadow-orange-glow hover:scale-[1.02]"
              >
                EXPLORE MY JOURNEY
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('ewaste')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-white font-semibold text-sm border border-border hover:border-primary transition-all duration-300"
              >
                VIEW MY PROJECTS
              </button>

              {/* Social icons */}
              <div className="flex items-center gap-2 pl-2">
                {links.githubProfile && (
                  <button
                    onClick={() => openExternalLink(links.githubProfile)}
                    className="p-3 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </button>
                )}

                {links.mediumBlog && (
                  <button
                    onClick={() => openExternalLink(links.mediumBlog)}
                    className="p-3 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
                    title="Medium Publication"
                  >
                    <BookOpen className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ELEGANT PYTHON-INSPIRED ABSTRACT VISUAL */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl p-6 md:p-8 bg-card/90 border border-border shadow-2xl backdrop-blur-md overflow-hidden">
                {/* Background geometric grid pattern */}
                <div className="absolute inset-0 bg-subtle-mesh opacity-40 pointer-events-none" />

                {/* Header code bar */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-text-muted">pythonverse_runtime.py</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    CSI3007 Active
                  </span>
                </div>

                {/* Animated visual Python modules stack */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-background border border-border/80 flex items-center justify-between hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Terminal className="w-4 h-4 text-primary" />
                      <div>
                        <span className="text-white font-semibold">Circular E-Waste Architecture</span>
                        <span className="block text-[10px] text-text-muted">FastAPI + Supabase PostgreSQL</span>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 font-semibold">Production</span>
                  </div>

                  <div className="p-3 rounded-xl bg-background border border-border/80 flex items-center justify-between hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Database className="w-4 h-4 text-secondary" />
                      <div>
                        <span className="text-white font-semibold">pandas.pivot_table() Engine</span>
                        <span className="block text-[10px] text-text-muted">Global Urban Tree Coverage (GVI)</span>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">Reconstructed</span>
                  </div>

                  <div className="p-3 rounded-xl bg-background border border-border/80 flex items-center justify-between hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-primary" />
                      <div>
                        <span className="text-white font-semibold">IoT Visual Impairment Suite</span>
                        <span className="block text-[10px] text-text-muted">PyBraille + Assistive Hardware</span>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 font-semibold">Accessibility</span>
                  </div>

                  <div className="p-3 rounded-xl bg-background border border-border/80 flex items-center justify-between hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-text-secondary" />
                      <div>
                        <span className="text-white font-semibold">Python Pedagogical Tutorial</span>
                        <span className="block text-[10px] text-text-muted">Medium Article & Collaborative Report</span>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-semibold">Published</span>
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs text-text-muted">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span>Reg.No: {personal.regNo}</span>
                  </div>
                  <span className="font-mono text-text-secondary">{personal.courseCode}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM HIGHLIGHTS CARDS (STRICTLY REQUIRED: LEARN, ANALYSE, BUILD - NO INVENTED STATS) */}
        <div className="mt-16 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="text-xs font-bold uppercase tracking-wider text-primary font-mono mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              PILLAR 01
            </div>
            <h3 className="text-xl font-bold font-heading text-text-primary">
              LEARN
            </h3>
            <p className="mt-2 text-text-secondary text-sm leading-relaxed">
              Classroom activities, storyboards, collaborative Braille tutorials, and programming quizzes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="text-xs font-bold uppercase tracking-wider text-secondary font-mono mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              PILLAR 02
            </div>
            <h3 className="text-xl font-bold font-heading text-text-primary">
              ANALYSE
            </h3>
            <p className="mt-2 text-text-secondary text-sm leading-relaxed">
              Data processing, pivot table engineering, multi-dimensional aggregations, and empirical visualisations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
            <div className="text-xs font-bold uppercase tracking-wider text-primary font-mono mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              PILLAR 03
            </div>
            <h3 className="text-xl font-bold font-heading text-text-primary">
              BUILD
            </h3>
            <p className="mt-2 text-text-secondary text-sm leading-relaxed">
              Accessibility innovation, circular e-waste intelligence architecture, and real-world software deployments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
