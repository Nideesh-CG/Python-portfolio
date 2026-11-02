import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, CheckCircle, Sparkles, Download } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title: string;
  description: string;
  duration?: string;
  compressedSize?: string;
  originalSize?: string;
  compressionRatio?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  title,
  description,
  duration = "12:13",
  compressedSize = "18.5 MB",
  originalSize = "815.4 MB",
  compressionRatio = "97.8%",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(current);
    setProgress((current / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setVideoDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const targetTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
      {/* Video Container */}
      <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          preload="metadata"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-contain cursor-pointer"
          onClick={togglePlay}
          playsInline
        />

        {/* Big play button overlay when paused */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-orange-glow hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Play Video"
          >
            <Play className="w-8 h-8 fill-current ml-1" />
          </button>
        )}

        {/* Custom Video Controls Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          {/* Progress bar */}
          <div className="relative w-full mb-3 flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 text-white hover:text-primary transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 text-white hover:text-primary transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <span className="text-xs text-text-secondary font-mono">
                {formatTime(currentTime)} / {formatTime(videoDuration || 733)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                  }
                }}
                className="p-2 text-text-secondary hover:text-white transition-colors"
                title="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={handleFullscreen}
                className="p-2 text-text-secondary hover:text-white transition-colors"
                title="Fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Details & Optimization Specs */}
      <div className="p-6 md:p-8 bg-background-secondary border-t border-border">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Course Major Project Video Demonstration
            </div>
            <h3 className="text-2xl font-bold font-heading text-text-primary">
              {title}
            </h3>
            <p className="mt-2 text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => triggerDownload(videoUrl, 'python-project-video-compressed.mp4')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card hover:bg-white/5 border border-border hover:border-primary text-text-primary text-sm font-semibold transition-colors"
            >
              <Download className="w-4 h-4 text-primary" />
              Download MP4
            </button>
          </div>
        </div>

        {/* Technical Video Optimisation Banner */}
        <div className="mt-6 pt-6 border-t border-border/60 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card/60 p-3.5 rounded-xl border border-border/50">
            <span className="text-[11px] uppercase tracking-wider text-text-muted block">Duration</span>
            <span className="text-sm font-bold font-mono text-text-primary mt-0.5 block">{duration} (Full Screenplay)</span>
          </div>
          <div className="bg-card/60 p-3.5 rounded-xl border border-border/50">
            <span className="text-[11px] uppercase tracking-wider text-text-muted block">Original Size</span>
            <span className="text-sm font-bold font-mono text-text-muted mt-0.5 line-through block">{originalSize}</span>
          </div>
          <div className="bg-card/60 p-3.5 rounded-xl border border-border/50">
            <span className="text-[11px] uppercase tracking-wider text-primary block">Optimised Size</span>
            <span className="text-sm font-bold font-mono text-primary mt-0.5 block">{compressedSize}</span>
          </div>
          <div className="bg-card/60 p-3.5 rounded-xl border border-primary/20 bg-primary/5">
            <span className="text-[11px] uppercase tracking-wider text-primary block flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Size Reduction
            </span>
            <span className="text-sm font-bold font-mono text-white mt-0.5 block">{compressionRatio} Saved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

