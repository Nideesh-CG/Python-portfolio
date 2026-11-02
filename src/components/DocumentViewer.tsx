import React, { useState } from 'react';
import { FileText, Download, ExternalLink, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';

interface DocumentViewerProps {
  title: string;
  subtitle?: string;
  pdfUrl: string;
  totalPages?: number;
  fileSize?: string;
  badge?: string;
  previewHeight?: string;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  title,
  subtitle,
  pdfUrl,
  totalPages,
  fileSize,
  badge = 'PDF DOCUMENT',
  previewHeight = '500px',
}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-border-light transition-all duration-300">
      <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-background-secondary/40 border-b border-border/60">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-primary border border-primary/20">
                {badge}
              </span>
              {totalPages && (
                <span className="text-xs text-text-muted">
                  • {totalPages} Pages
                </span>
              )}
              {fileSize && (
                <span className="text-xs text-text-muted">
                  • {fileSize}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold font-heading text-text-primary">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-text-secondary mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-text-primary border border-border transition-colors"
          >
            <Eye className="w-4 h-4 text-primary" />
            {showPreview ? 'Hide Preview' : 'Preview Document'}
            {showPreview ? <ChevronUp className="w-3.5 h-3.5 ml-1" /> : <ChevronDown className="w-3.5 h-3.5 ml-1" />}
          </button>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-text-secondary hover:text-white border border-border transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open Tab
          </a>

          <button
            onClick={() => triggerDownload(pdfUrl)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </button>
        </div>
      </div>

      {showPreview && (
        <div className="p-4 bg-background border-t border-border/80">
          <div className="rounded-xl overflow-hidden border border-border bg-black/60" style={{ height: previewHeight }}>
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              title={title}
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

