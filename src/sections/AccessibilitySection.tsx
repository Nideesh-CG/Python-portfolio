import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ImageLightbox } from '../components/ImageLightbox';
import { portfolioConfig } from '../config/portfolio';
import { 
  Eye, 
  Volume2, 
  Cpu, 
  Maximize2, 
  CheckCircle, 
  Languages, 
  Coins, 
  FileSearch, 
  Download
} from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';

export const AccessibilitySection: React.FC = () => {
  const { assets } = portfolioConfig;
  const [showLightbox, setShowLightbox] = useState(false);

  const modules = [
    {
      title: "AI Text Reader (OCR)",
      icon: FileSearch,
      desc: "Extracts and verbalizes text from physical books, labels, medicine packaging, and municipal signboards using EasyOCR and Tesseract in English & Tamil.",
    },
    {
      title: "Real-Time Object Detection",
      icon: Eye,
      desc: "Detects indoor obstacles, furniture, pedestrians, and everyday objects using lightweight YOLO models to support safe navigation.",
    },
    {
      title: "Scene Understanding & Visual Q&A",
      icon: Cpu,
      desc: "Leverages Vision-Language Models (VLM) to generate contextual descriptions of surroundings and answer interactive questions about scenes.",
    },
    {
      title: "Currency & Product ID",
      icon: Coins,
      desc: "Classifies Indian currency denominations (₹10, ₹20, ₹50, ₹100, ₹200, ₹500), extracts expiry dates, and validates packaging authenticity.",
    },
    {
      title: "Voice-First Multilingual Assistant",
      icon: Volume2,
      desc: "Enables hands-free voice commands via Speech-to-Text and delivers natural spoken audio feedback in English and Tamil.",
    },
    {
      title: "Personalized Accessibility Settings",
      icon: Languages,
      desc: "Allows customizable reading speeds, preferred audio pitch, language toggling, and offline edge caching.",
    },
  ];

  return (
    <section id="accessibility" className="py-20 md:py-28 border-b border-border relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="ACCESSIBILITY & IOT RESEARCH"
          title="TECHNOLOGY FOR AN"
          highlight="INCLUSIVE WORLD."
          subtitle="IoT-Based Application for Impairment Assessment: Architecting AbilityAssist AI – an intelligent voice-first visual assistance system for the visually impaired."
        />

        {/* CORE ARCHITECTURE & OVERVIEW GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: INTERACTIVE ARCHITECTURE DIAGRAM */}
          <div className="lg:col-span-7 bg-card border border-border rounded-3xl overflow-hidden shadow-dark-card">
            <div className="p-4 md:p-6 bg-background-secondary border-b border-border flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block">
                  System Architecture Diagram
                </span>
                <h3 className="text-lg font-bold font-heading text-text-primary">
                  AbilityAssist AI Architecture
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowLightbox(true)}
                  className="p-2 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
                  title="Expand Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => triggerDownload(assets.impairmentArchitecture)}
                  className="p-2 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
                  title="Download Diagram"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              onClick={() => setShowLightbox(true)}
              className="relative aspect-[16/10] bg-black/70 cursor-zoom-in group p-4 flex items-center justify-center overflow-hidden"
            >
              <img
                src={assets.impairmentArchitecture}
                alt="IoT Impairment System Architecture Diagram"
                className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-xl bg-black/80 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-2 border border-border">
                  <Maximize2 className="w-4 h-4 text-primary" /> Click to Inspect Full Architecture
                </span>
              </div>
            </div>

            <div className="p-4 px-6 bg-background-secondary/40 border-t border-border flex items-center justify-between text-xs text-text-muted">
              <span>Client Layer (React) ➔ REST API ➔ FastAPI Python ➔ YOLO / VLM ➔ TTS Voice Output</span>
              <span className="text-primary font-mono font-semibold">Verified Architecture</span>
            </div>
          </div>

          {/* RIGHT: PROBLEM, OBJECTIVE & PROPOSED SOLUTION */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block mb-1">
                The Problem Statement
              </span>
              <h4 className="text-lg font-bold font-heading text-text-primary">
                The Visual Accessibility Gap
              </h4>
              <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed">
                Visually impaired individuals face daily barriers in recognizing paper currency, reading medication labels, deciphering signboards, and navigating dynamic physical surroundings without external sighted assistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary font-mono block mb-1">
                Project Objective
              </span>
              <h4 className="text-lg font-bold font-heading text-text-primary">
                Voice-First Independence
              </h4>
              <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed">
                Provide an AI-powered, voice-first web system that converts real-time visual information into natural spoken audio, granting users autonomous access to text, objects, currency, and spatial information in both English and regional Tamil.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block mb-1">
                Proposed Solution
              </span>
              <h4 className="text-lg font-bold font-heading text-text-primary">
                Connected IoT & Python AI Pipeline
              </h4>
              <p className="mt-2 text-xs md:text-sm text-text-secondary leading-relaxed">
                A decoupled client-server architecture combining smartphone/laptop/wearable camera inputs with a Python FastAPI intelligence layer orchestrating OCR, YOLO object detection, and Vision-Language models.
              </p>
            </div>
          </div>

        </div>

        {/* 6 SYSTEM CAPABILITY MODULES */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-heading text-text-primary mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-primary" />
            Core Architecture Modules
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold font-heading text-text-primary">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PYTHON & IOT INTEGRATION WORKFLOW */}
        <div className="p-8 rounded-3xl bg-background-secondary border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block mb-2">
                Engineering Implementation
              </span>
              <h3 className="text-2xl font-bold font-heading text-text-primary">
                Python Integration & Learning Outcomes
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                Developing AbilityAssist AI provided deep practical exposure to building low-latency computer vision pipelines in Python. By decoupling heavy image inference from client requests using FastAPI background tasks and Supabase persistence, the system delivers sub-second speech feedback.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-text-secondary">
                    <strong className="text-white">Python FastAPI Backend:</strong> High-performance async request routing, image preprocessing, and multi-model pipeline orchestration.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-text-secondary">
                    <strong className="text-white">Multi-Modal IoT Ingestion:</strong> Ingests frames from smartphone webcams and simulated wearable camera modules over secure HTTPS endpoints.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-text-secondary">
                    <strong className="text-white">Inclusive Voice UX:</strong> Integrated SpeechSynthesis APIs for bilingual voice guidance (English and Tamil) to ensure true hands-free accessibility.
                  </span>
                </div>
              </div>
            </div>

            {/* Workflow steps */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <span className="text-white font-bold block">Voice Command & Capture</span>
                  <span className="text-text-muted text-[11px]">User speaks command ➔ Image captured via camera</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <span className="text-white font-bold block">FastAPI Orchestration</span>
                  <span className="text-text-muted text-[11px]">Preprocessing, resizing, and task routing</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <span className="text-white font-bold block">AI Intelligence Inference</span>
                  <span className="text-text-muted text-[11px]">EasyOCR / YOLO / VLM returns structured JSON</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 font-bold flex items-center justify-center shrink-0">4</div>
                <div>
                  <span className="text-white font-bold block">Synthesized Spoken Feedback</span>
                  <span className="text-text-muted text-[11px]">Audible response in English / Tamil</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {showLightbox && (
        <ImageLightbox
          isOpen={showLightbox}
          imageUrl={assets.impairmentArchitecture}
          title="AbilityAssist AI – System Architecture Diagram"
          caption="Intelligent Visual Assistance System for Visual Impairment (CSI3007 Applied Innovation)"
          onClose={() => setShowLightbox(false)}
        />
      )}
    </section>
  );
};
