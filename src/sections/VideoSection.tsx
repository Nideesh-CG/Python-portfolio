import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { VideoPlayer } from '../components/VideoPlayer';
import { portfolioConfig } from '../config/portfolio';

export const VideoSection: React.FC = () => {
  const { assets } = portfolioConfig;

  return (
    <section id="video" className="py-20 md:py-28 border-b border-border relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="PROJECT DEMONSTRATION"
          title="THE JOURNEY"
          highlight="IN MOTION."
          subtitle="Watch the end-to-end technical demonstration of the Circular E-Waste Recovery & Refurbishment Intelligence System, compressed by 97.8% from 815 MB to 18.5 MB using FFmpeg for optimal web streaming."
        />

        <div className="mt-8">
          <VideoPlayer
            videoUrl={assets.pythonProjectVideo}
            posterUrl={assets.videoThumbnail}
            title="Circular E-Waste Recovery & Refurbishment Platform – Live Demonstration"
            description="Complete 12-minute academic and technical demonstration by Nideesh C G (Application 1: Collection & Recovery) and Dharma S (Application 2: Refurbishment Intelligence), showcasing the multi-application Python workflow, live REST API sync, and production deployment."
            duration="12:13"
            originalSize="815.4 MB"
            compressedSize="18.5 MB"
            compressionRatio="97.8%"
          />
        </div>
      </div>
    </section>
  );
};

