import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../config/portfolio';
import { openExternalLink, isValidUrl } from '../utils/linkHelpers';
import { 
  ExternalLink, 
  FileText, 
  Presentation, 
  Video, 
  Mic, 
  DollarSign, 
  TrendingUp, 
  Radio
} from 'lucide-react';

export const BusinessSection: React.FC = () => {
  const { links } = portfolioConfig;

  return (
    <section id="business" className="py-20 md:py-28 border-b border-border relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="ENTREPRENEURIAL STRATEGY"
          title="BEYOND CODE."
          highlight="INTO PRODUCT THINKING."
          subtitle="AUDIO RECORDING WEBSITE – BUSINESS THESIS: Synthesizing software engineering with commercial viability, revenue models, and market positioning."
        />

        {/* MAIN BUSINESS THESIS CARD */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-dark-card mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold font-mono uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5" />
                Product Strategy & Business Model
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-heading text-text-primary leading-tight">
                Audio Recording Web Platform: Commercial Viability Thesis
              </h3>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                Great software development extends beyond syntactic correctness into sustainable economic viability. This business thesis analyzes the market landscape for web-based, low-latency audio capture tools, examining creator economy monetization, storage unit economics, freemium tiering, and cloud infrastructure scalability.
              </p>

              {/* Core Strategic Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-background border border-border">
                  <span className="text-primary font-bold block mb-1 flex items-center gap-1 font-mono">
                    <DollarSign className="w-3.5 h-3.5" /> Unit Economics
                  </span>
                  <p className="text-text-muted text-[11px] leading-relaxed">
                    Analyzing cloud encoding and S3 audio egress costs versus recurring subscriber margins.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-background border border-border">
                  <span className="text-secondary font-bold block mb-1 flex items-center gap-1 font-mono">
                    <TrendingUp className="w-3.5 h-3.5" /> Growth Funnel
                  </span>
                  <p className="text-text-muted text-[11px] leading-relaxed">
                    Freemium conversion architecture targeting podcasters, musicians, and voiceover artists.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-background border border-border">
                  <span className="text-white font-bold block mb-1 flex items-center gap-1 font-mono">
                    <Mic className="w-3.5 h-3.5" /> Technical Edge
                  </span>
                  <p className="text-text-muted text-[11px] leading-relaxed">
                    Browser WebAudio API capture paired with Python cloud transcription and noise gate filters.
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS (WITH GRACEFUL MISSING-LINK HANDLING) */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-background border border-border flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block mb-1">
                  Thesis Resources
                </span>
                <h4 className="text-base font-bold text-white font-heading">
                  Executive Dossier
                </h4>
                <p className="text-xs text-text-secondary mt-1">
                  Access the primary research document and accompanying presentations.
                </p>
              </div>

              <div className="space-y-2.5">
                {/* 1. READ BUSINESS THESIS (Google Drive link provided) */}
                {isValidUrl(links.audioRecordingWebsite) && (
                  <button
                    onClick={() => openExternalLink(links.audioRecordingWebsite)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-orange-glow"
                  >
                    <FileText className="w-4 h-4" />
                    Read Business Thesis (Google Drive)
                  </button>
                )}

                {/* 2. VISIT WEBSITE (Configured / Graceful) */}
                {isValidUrl(links.audioRecordingLiveApp) ? (
                  <button
                    onClick={() => openExternalLink(links.audioRecordingLiveApp)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-card hover:bg-white/5 border border-border text-text-primary text-xs font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                    Visit Live Website
                  </button>
                ) : (
                  <div className="p-3 rounded-xl bg-card/60 border border-border/50 text-center">
                    <span className="text-[11px] text-text-muted">
                      Live App Deployment: Pending Public Release
                    </span>
                  </div>
                )}

                {/* 3. VIEW PRESENTATION (Configured / Graceful) */}
                {isValidUrl(links.audioRecordingPresentation) && (
                  <button
                    onClick={() => openExternalLink(links.audioRecordingPresentation)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white text-xs font-semibold transition-colors"
                  >
                    <Presentation className="w-4 h-4 text-secondary" />
                    View Slide Deck
                  </button>
                )}

                {/* 4. WATCH DEMO (Configured / Graceful) */}
                {isValidUrl(links.audioRecordingVideo) && (
                  <button
                    onClick={() => openExternalLink(links.audioRecordingVideo)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white text-xs font-semibold transition-colors"
                  >
                    <Video className="w-4 h-4 text-primary" />
                    Watch Audio Platform Demo
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
