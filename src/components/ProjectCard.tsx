import React from 'react';
import { ExternalLink, Github, FileText, CheckCircle2 } from 'lucide-react';
import { openExternalLink } from '../utils/linkHelpers';

interface ProjectCardProps {
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  docUrl?: string;
  image?: string;
  onImageClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  badge,
  subtitle,
  description,
  features,
  techStack,
  githubUrl,
  liveUrl,
  docUrl,
  image,
  onImageClick,
}) => {
  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-border-light transition-all duration-300 shadow-dark-card flex flex-col">
      {image && (
        <div
          onClick={onImageClick}
          className="relative aspect-video bg-black/60 overflow-hidden cursor-zoom-in group border-b border-border"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <span className="text-xs text-white bg-black/70 px-3 py-1.5 rounded-lg border border-border backdrop-blur-sm">
              Click to Enlarge
            </span>
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              {badge}
            </span>
          </div>

          <h3 className="text-2xl font-bold font-heading text-text-primary">
            {title}
          </h3>
          <p className="text-xs font-semibold text-secondary uppercase tracking-wider mt-1">
            {subtitle}
          </p>

          <p className="mt-4 text-text-secondary text-sm leading-relaxed">
            {description}
          </p>

          {/* Key Features List */}
          <div className="mt-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-2">
              Core Capabilities:
            </span>
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-border text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-3">
          {liveUrl && (
            <button
              onClick={() => openExternalLink(liveUrl)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-colors shadow-orange-glow"
            >
              <ExternalLink className="w-4 h-4" />
              Live Deployment
            </button>
          )}

          {githubUrl && (
            <button
              onClick={() => openExternalLink(githubUrl)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card hover:bg-white/5 border border-border hover:border-primary text-text-primary text-xs font-semibold transition-colors"
            >
              <Github className="w-4 h-4 text-primary" />
              Source Code
            </button>
          )}

          {docUrl && (
            <button
              onClick={() => openExternalLink(docUrl)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card hover:bg-white/5 border border-border hover:border-secondary text-text-secondary hover:text-white text-xs font-semibold transition-colors"
            >
              <FileText className="w-4 h-4 text-secondary" />
              Documentation
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

