import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Download, Presentation, Eye } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';
import { ImageLightbox } from './ImageLightbox';

interface PresentationViewerProps {
  title: string;
  subtitle: string;
  pptxUrl: string;
  pdfUrl?: string;
  totalSlides?: number;
}

export const PresentationViewer: React.FC<PresentationViewerProps> = ({
  title,
  subtitle,
  pptxUrl,
  pdfUrl,
  totalSlides = 13,
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);
  const [viewMode, setViewMode] = useState<'slides' | 'pdf'>('slides');

  const slideImgUrl = `/assets/ppt-slides/slide_${currentSlide}.png`;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-dark-card">
      {/* Header Bar */}
      <div className="p-6 bg-background-secondary border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 flex items-center gap-1 font-mono">
              <Presentation className="w-3.5 h-3.5" />
              Interactive PPT Slide Deck
            </span>
            <span className="text-xs text-text-muted">
              • {totalSlides} Slides Total
            </span>
          </div>
          <h3 className="text-xl font-bold font-heading text-text-primary">
            {title}
          </h3>
          <p className="text-xs text-text-secondary mt-1">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {pdfUrl && (
            <button
              onClick={() => setViewMode(viewMode === 'slides' ? 'pdf' : 'slides')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-text-primary border border-border transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-primary" />
              {viewMode === 'slides' ? 'Switch to PDF Mode' : 'Switch to Slides Mode'}
            </button>
          )}

          <button
            onClick={() => triggerDownload(pptxUrl, 'Circular_EWaste_Final_Review_Presentation.pptx')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-primary hover:bg-primary-hover text-white transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download PPTX
          </button>
        </div>
      </div>

      {/* Main Presentation Viewport */}
      {viewMode === 'slides' ? (
        <div className="p-4 md:p-8 bg-black/80 flex flex-col items-center">
          {/* Slide Screen Frame */}
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-black group">
            <img
              src={slideImgUrl}
              alt={`Presentation Slide ${currentSlide}`}
              className="w-full h-full object-contain cursor-zoom-in"
              onClick={() => setShowLightbox(true)}
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-primary text-white border border-border/80 flex items-center justify-center transition-all opacity-80 hover:opacity-100 group-hover:scale-105"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-primary text-white border border-border/80 flex items-center justify-center transition-all opacity-80 hover:opacity-100 group-hover:scale-105"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Fullscreen Expand Trigger */}
            <button
              onClick={() => setShowLightbox(true)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-black/70 hover:bg-primary text-white border border-border/80 transition-colors opacity-0 group-hover:opacity-100"
              title="Expand Slide"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Slide Index Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 border border-border text-xs font-mono font-bold text-white backdrop-blur-md">
              Slide {currentSlide} of {totalSlides}
            </div>
          </div>

          {/* Slide Navigation Thumbnails Scroller */}
          <div className="mt-6 w-full max-w-5xl flex items-center gap-2 overflow-x-auto pb-2">
            {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentSlide(num)}
                className={`relative shrink-0 w-20 aspect-video rounded-lg overflow-hidden border transition-all ${
                  currentSlide === num
                    ? 'border-primary ring-2 ring-primary/40 scale-105'
                    : 'border-border/60 opacity-60 hover:opacity-100 hover:border-border-light'
                }`}
              >
                <img
                  src={`/assets/ppt-slides/slide_${num}.png`}
                  alt={`Thumbnail ${num}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-white bg-black/80 px-1 rounded">
                  {num}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Embedded PDF Presentation Mode */
        <div className="p-4 bg-background">
          <div className="rounded-2xl overflow-hidden border border-border bg-black" style={{ height: '550px' }}>
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              title="Presentation PDF Preview"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

      {/* Lightbox for Current Slide */}
      {showLightbox && (
        <ImageLightbox
          isOpen={showLightbox}
          imageUrl={slideImgUrl}
          title={`Presentation Review – Slide ${currentSlide} of ${totalSlides}`}
          caption={title}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </div>
  );
};

