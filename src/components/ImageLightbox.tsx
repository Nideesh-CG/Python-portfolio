import React, { useEffect } from 'react';
import { X, Download, Maximize2 } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';

interface ImageLightboxProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  caption?: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  imageUrl,
  title,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl max-h-[92vh] w-full bg-card border border-border rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background-secondary/80">
          <div>
            <h3 className="text-lg font-bold text-text-primary font-heading flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-primary" />
              {title}
            </h3>
            {caption && <p className="text-xs text-text-secondary mt-0.5">{caption}</p>}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => triggerDownload(imageUrl)}
              className="p-2 text-text-secondary hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
              title="Download Image"
            >
              <Download className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/60 min-h-[300px]">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg border border-border/50 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

