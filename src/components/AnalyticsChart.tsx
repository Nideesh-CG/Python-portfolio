import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Maximize2, Download } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';
import { ImageLightbox } from './ImageLightbox';

interface AnalyticsChartProps {
  summaryChart: string;
  distChart: string;
  contChart: string;
}

export const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  summaryChart,
  distChart,
  contChart,
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'continents' | 'distribution'>('summary');
  const [lightboxImg, setLightboxImg] = useState<{ url: string; title: string } | null>(null);

  const tabs = [
    {
      id: 'summary',
      name: 'Ranked City Overview',
      icon: BarChart3,
      url: summaryChart,
      title: 'Global Urban Tree Coverage – 34 World Cities Ranked',
      desc: 'Complete horizontal ranking color-coded by High, Moderate, and Low Canopy Tiers.',
    },
    {
      id: 'continents',
      name: 'Continental Pivot Summary',
      icon: TrendingUp,
      url: contChart,
      title: 'Continental Pivot Aggregation: Maximum, Mean, and Minimum GVI',
      desc: 'Visual representation of continental disparity and urban greenness spread.',
    },
    {
      id: 'distribution',
      name: 'Statistical Distribution',
      icon: PieChart,
      url: distChart,
      title: 'Exploratory Distribution & Density Boxplot',
      desc: 'Continental boxplots alongside global frequency histogram and mean/median indicators.',
    },
  ];

  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-dark-card">
      {/* Tab Switcher */}
      <div className="p-4 md:p-6 bg-background-secondary border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-white shadow-orange-glow'
                    : 'bg-card text-text-secondary hover:text-white hover:bg-white/5 border border-border'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLightboxImg({ url: current.url, title: current.title })}
            className="p-2 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
            title="Expand Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => triggerDownload(current.url)}
            className="p-2 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white transition-colors"
            title="Download Chart (PNG)"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chart Display Area */}
      <div className="p-4 md:p-8 bg-black/60 flex flex-col items-center justify-center">
        <div
          className="relative max-w-4xl w-full cursor-zoom-in group rounded-2xl overflow-hidden border border-border/80 bg-background"
          onClick={() => setLightboxImg({ url: current.url, title: current.title })}
        >
          <img
            src={current.url}
            alt={current.title}
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-4 py-2 rounded-xl bg-black/80 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-2 border border-border">
              <Maximize2 className="w-3.5 h-3.5 text-primary" /> Click to Expand
            </span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h4 className="text-base font-bold text-text-primary font-heading">
            {current.title}
          </h4>
          <p className="text-xs text-text-secondary mt-1">
            {current.desc}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <ImageLightbox
          isOpen={!!lightboxImg}
          imageUrl={lightboxImg.url}
          title={lightboxImg.title}
          caption="Generated via Matplotlib & Seaborn with custom dark-and-orange palette"
          onClose={() => setLightboxImg(null)}
        />
      )}
    </div>
  );
};

