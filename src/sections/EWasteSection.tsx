import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { DocumentViewer } from '../components/DocumentViewer';
import { PresentationViewer } from '../components/PresentationViewer';
import { portfolioConfig } from '../config/portfolio';
import { openExternalLink } from '../utils/linkHelpers';
import { triggerDownload } from '../utils/assetHelpers';
import { 
  ExternalLink, 
  Github, 
  Presentation, 
  Layers, 
  ShieldCheck, 
  RefreshCw, 
  Database
} from 'lucide-react';

export const EWasteSection: React.FC = () => {
  const { assets, links, personal } = portfolioConfig;

  return (
    <section id="ewaste" className="py-20 md:py-28 border-b border-border relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="CAPSTONE MAJOR PROJECT"
          title="BUILDING SOLUTIONS FOR"
          highlight="REAL-WORLD PROBLEMS."
          subtitle="CIRCULAR E-WASTE RECOVERY & REFURBISHMENT INTELLIGENCE SYSTEM: A distributed, two-application Python platform connecting collection logistics with refurbishment intelligence."
        />

        {/* HERO PROJECT BANNER */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-dark-card mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold font-mono uppercase tracking-wider">
                <RefreshCw className="w-3.5 h-3.5" />
                CSI3007 Capstone Software System
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-heading text-text-primary leading-tight">
                Circular E-Waste Recovery & Refurbishment Intelligence Platform
              </h3>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                The Global E-waste Monitor reports that over <strong className="text-white">62 million tonnes</strong> of e-waste were generated globally in 2022, with only 22.3% formally documented as recycled. This capstone engineering project delivers a connected, cloud-native digital workflow bridging electronic device collection triage with deep refurbishment diagnostics.
              </p>

              {/* Roles & Team */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-background border-2 border-primary/50 shadow-orange-glow">
                  <span className="text-primary block text-[10px] font-bold uppercase tracking-wider">Application 1: Collection & Recovery (Lead)</span>
                  <span className="text-white font-extrabold text-base block mt-0.5 tracking-wide">{personal.name} <span className="text-primary font-mono text-xs">({personal.regNo})</span></span>
                </div>
                <div className="p-3 rounded-xl bg-background border border-border">
                  <span className="text-text-muted block text-[10px] uppercase">Application 2: Refurbishment Intelligence</span>
                  <span className="text-white font-bold text-sm block mt-0.5">Dharma S (23MIC0104)</span>
                </div>
              </div>
            </div>

            {/* Live CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {links.eWasteLiveApp && (
                <button
                  onClick={() => openExternalLink(links.eWasteLiveApp)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-all shadow-orange-glow hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Web Application
                </button>
              )}

              {links.eWasteRepository && (
                <button
                  onClick={() => openExternalLink(links.eWasteRepository)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-card hover:bg-white/5 border border-border hover:border-primary text-text-primary text-sm font-semibold transition-colors"
                >
                  <Github className="w-4 h-4 text-primary" />
                  GitHub Repository
                </button>
              )}

              <button
                onClick={() => triggerDownload(assets.eWastePresentation, 'Circular_EWaste_Final_Review_Presentation.pptx')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-card hover:bg-white/5 border border-border hover:border-secondary text-text-secondary hover:text-white text-sm font-semibold transition-colors"
              >
                <Presentation className="w-4 h-4 text-secondary" />
                Download Final Slides (.pptx)
              </button>
            </div>
          </div>
        </div>

        {/* ARCHITECTURE & FUNCTIONAL CAPABILITIES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 md:p-8 rounded-3xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-heading text-text-primary">
              Independent Modular Architecture
            </h4>
            <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed">
              Two decoupled Python applications communicating through a bidirectional authenticated REST API contract. Each microservice maintains independent deployment cycles and state isolation.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-heading text-text-primary">
              Cloud Persistence & File Vault
            </h4>
            <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed">
              Stores device lifecycles, intake logs, and transfer tokens (e.g. TRF-64D75A8D) in Supabase PostgreSQL, while utilizing Supabase Storage for high-resolution hardware condition photography and diagnostic PDF reports.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-card border border-border">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold font-heading text-text-primary">
              Recovery Decision Intelligence
            </h4>
            <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed">
              Automated score algorithms calculate repairability ratings, battery health degradation, and component salvage potential to determine whether a device is earmarked for resale, parts harvest, or certified smelting.
            </p>
          </div>
        </div>

        {/* TECHNICAL STACK TAGS */}
        <div className="p-6 rounded-2xl bg-background-secondary border border-border mb-12 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono">
            Platform Technology Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {['Python 3', 'FastAPI', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage', 'REST API', 'JSON Contract', 'Vercel Deployment', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-card border border-border text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* PRESENTATION SLIDES INTERACTIVE PREVIEW */}
        <div className="mb-12">
          <PresentationViewer
            title="Circular E-Waste Platform – Final Review Slide Deck"
            subtitle="Complete 13-slide technical presentation reviewing application architecture, API workflows, Supabase database, and recovery analytics."
            pptxUrl={assets.eWastePresentation}
            pdfUrl="/assets/e-waste-presentation.pdf"
            totalSlides={13}
          />
        </div>

        {/* PROJECT DOCUMENTATION (PDF PREVIEW & DOWNLOAD) */}
        <div>
          <DocumentViewer
            title="Circular E-Waste Recovery & Refurbishment Platform: Comprehensive Technical Writeup"
            subtitle="Complete 12-page systems architecture documentation by Nideesh C G (23MIC0092) & Dharma S (23MIC0104) covering user layers, database schemas, and API contracts."
            pdfUrl={assets.eWasteWriteup}
            totalPages={12}
            fileSize="387 KB"
            badge="CAPSTONE DOCUMENTATION"
            previewHeight="550px"
          />
        </div>

      </div>
    </section>
  );
};
