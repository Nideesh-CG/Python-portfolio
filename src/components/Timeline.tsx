import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Layout, 
  Users, 
  CheckSquare, 
  Table, 
  Eye, 
  BookOpen, 
  Cpu, 
  Briefcase,
  ChevronRight
} from 'lucide-react';

interface Milestone {
  id: number;
  title: string;
  category: string;
  description: string;
  impact: string;
  icon: any;
  assetLabel?: string;
  assetLink?: string;
  targetSection?: string;
}

const MILESTONES: Milestone[] = [
  {
    id: 1,
    title: "Python Programming Foundations",
    category: "Core Competency",
    description: "Mastered Python core data structures, object-oriented programming paradigms, list comprehensions, functional constructs, and Pythonic best practices.",
    impact: "Formed the foundational computational thinking needed for scalable scripting.",
    icon: Code2,
  },
  {
    id: 2,
    title: "Advanced Python Concepts",
    category: "Architecture",
    description: "Explored advanced metaclasses, decorators, generators, context managers, asynchronous execution (`asyncio`), and high-performance library design.",
    impact: "Enabled writing decoupled, modular, and optimized Python applications.",
    icon: Terminal,
  },
  {
    id: 3,
    title: "Storyboarding & Classroom Discussions",
    category: "System Design",
    description: "Created comprehensive visual storyboards outlining user journeys, architectural workflows, and real-world system problem statements.",
    impact: "Visualized multi-tier software engineering before writing deployment code.",
    icon: Layout,
    assetLabel: "View Storyboard",
    targetSection: "classroom",
  },
  {
    id: 4,
    title: "Python Tutorial & Collaborative Learning",
    category: "Collaboration",
    description: "Collaborated on translating computer programming educational materials into accessible Braille using `PyBraille` and JavaScript Node modules.",
    impact: "Bridged the digital accessibility divide for visually impaired learners.",
    icon: Users,
    assetLabel: "Explore Tutorial Report",
    targetSection: "classroom",
  },
  {
    id: 5,
    title: "Programming Quizzes & Assessments",
    category: "Evaluation",
    description: "Demonstrated real-time algorithmic problem solving, syntax fluency, and conceptual debugging across interactive class quizzes and evaluations.",
    impact: "Validated rigorous algorithmic comprehension under competitive time constraints.",
    icon: CheckSquare,
    assetLabel: "View Quiz Assessment",
    targetSection: "classroom",
  },
  {
    id: 6,
    title: "Data Processing & Pivot Table Analysis",
    category: "Data Analytics",
    description: "Synthesized raw urban street canopy data from Visual Capitalist/Treepedia into multi-dimensional aggregation summaries using `pandas.pivot_table()` and OpenPyXL.",
    impact: "Uncovered municipal tree preservation patterns across 34 global metropolitan cores.",
    icon: Table,
    assetLabel: "Explore Pivot Analytics",
    targetSection: "analytics",
  },
  {
    id: 7,
    title: "Accessibility-Focused IoT Innovation",
    category: "Applied Research",
    description: "Architected an IoT-integrated Python application for visual impairment evaluation, connecting sensor inputs with real-time analytics workflows.",
    impact: "Pioneered physical-computing accessibility prototypes for healthcare and assessment.",
    icon: Eye,
    assetLabel: "Inspect IoT Architecture",
    targetSection: "accessibility",
  },
  {
    id: 8,
    title: "Technical Knowledge Sharing",
    category: "Publishing",
    description: "Authored an in-depth technical article on Medium titled 'Everyone Deserves to Code: Making Python Accessible to Braille Learners'.",
    impact: "Reached the global developer community with open-source inclusive coding guides.",
    icon: BookOpen,
    assetLabel: "Read Medium Publication",
    targetSection: "blog",
  },
  {
    id: 9,
    title: "Circular E-Waste Intelligence System",
    category: "Capstone Major Project",
    description: "Architected and deployed a connected two-application distributed system connecting electronic-waste collection operations with device assessment and refurbishment.",
    impact: "Solved real-world circular economy bottlenecks with Supabase PostgreSQL and live Vercel deployment.",
    icon: Cpu,
    assetLabel: "Explore Capstone Project",
    targetSection: "ewaste",
  },
  {
    id: 10,
    title: "Business Thesis & Website Development",
    category: "Product Strategy",
    description: "Formulated a business and technological thesis for an audio recording enterprise, analyzing commercial viability, technical stack, and market strategy.",
    impact: "Combined full-stack software development with commercial monetization models.",
    icon: Briefcase,
    assetLabel: "Read Business Thesis",
    targetSection: "business",
  },
];

export const Timeline: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(9); // Default to major project

  const scrollToSection = (id?: string) => {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Vertical line indicator */}
      <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-border -translate-x-1/2 hidden md:block" />

      <div className="space-y-8 relative">
        {MILESTONES.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;
          const isActive = activeId === item.id;

          return (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              onMouseEnter={() => setActiveId(item.id)}
            >
              {/* Content Card */}
              <div
                className={`w-full md:w-1/2 p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-card border-primary shadow-orange-glow'
                    : 'bg-card/70 border-border hover:border-border-light'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono">
                    Milestone 0{item.id}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-border text-text-secondary">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold font-heading text-text-primary">
                  {item.title}
                </h3>

                <p className="mt-3 text-text-secondary text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-text-muted">
                    <span className="text-primary font-semibold">Key Impact:</span> {item.impact}
                  </div>

                  {item.assetLabel && (
                    <button
                      onClick={() => scrollToSection(item.targetSection)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-white transition-colors whitespace-nowrap self-start sm:self-auto"
                    >
                      {item.assetLabel}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Node Center Marker */}
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 z-10 transition-transform duration-300 ${
                  isActive
                    ? 'bg-primary border-white text-white scale-125 shadow-orange-glow'
                    : 'bg-background-secondary border-border text-text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              {/* Spacer on desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
