import React, { useState } from 'react';
import { Maximize2, Download } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';
import { ImageLightbox } from './ImageLightbox';

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  description: string;
  reflection?: string;
  aspect?: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group bg-card border border-border rounded-3xl overflow-hidden hover:border-border-light transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image with zoom overlay */}
              <div
                onClick={() => setSelectedImg(item)}
                className="relative aspect-video bg-black/60 overflow-hidden cursor-zoom-in border-b border-border"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="p-2.5 rounded-xl bg-black/80 text-white border border-border backdrop-blur-md">
                    <Maximize2 className="w-4 h-4 text-primary" />
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 text-primary border border-primary/20 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-text-primary group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-text-muted mt-1 uppercase font-semibold">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                {item.reflection && (
                  <div className="mt-4 p-3 rounded-xl bg-background-secondary border border-border/60">
                    <span className="text-xs font-bold text-primary block mb-1">
                      Learning Reflection:
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed italic">
                      "{item.reflection}"
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="p-4 px-6 bg-background-secondary/50 border-t border-border flex items-center justify-between">
              <button
                onClick={() => setSelectedImg(item)}
                className="text-xs font-semibold text-text-secondary hover:text-white flex items-center gap-1 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-primary" />
                View Fullscreen
              </button>
              <button
                onClick={() => triggerDownload(item.imageUrl)}
                className="text-xs font-semibold text-text-secondary hover:text-primary flex items-center gap-1 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Save Image
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <ImageLightbox
          isOpen={!!selectedImg}
          imageUrl={selectedImg.imageUrl}
          title={selectedImg.title}
          caption={selectedImg.description}
          onClose={() => setSelectedImg(null)}
        />
      )}
    </div>
  );
};

