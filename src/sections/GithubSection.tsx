import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { portfolioConfig } from '../config/portfolio';
import { openExternalLink } from '../utils/linkHelpers';
import { triggerDownload } from '../utils/assetHelpers';
import { 
  Github, 
  ExternalLink, 
  FileSpreadsheet, 
  Code, 
  BookOpen, 
  FileText, 
  Download, 
  Cpu
} from 'lucide-react';

export const GithubSection: React.FC = () => {
  const { links, analytics, assets } = portfolioConfig;

  const repositories = [
    {
      title: "E-Waste Recovery System",
      desc: "Distributed two-application Python platform for electronic device collection and refurbishment intelligence.",
      type: "Capstone Major Repository",
      url: links.eWasteRepository,
      icon: Cpu,
      tags: ["Python", "FastAPI", "PostgreSQL", "Supabase", "Vercel"],
    },
    {
      title: "GitHub Developer Profile",
      desc: "Explore public codebases, repositories, course projects, and open-source contributions by Nideesh C G.",
      type: "Central Profile",
      url: links.githubProfile,
      icon: Github,
      tags: ["Data Science", "Python", "Full Stack", "IoT"],
    },
  ];

  const downloadableArtifacts = [
    {
      title: "Urban Tree Coverage Pivot Workbook",
      desc: "Multi-tab formatted Excel model featuring Raw, Cleaned, Pivot Summaries, and Analytical Insights.",
      format: "XLSX",
      size: "12 KB",
      action: () => triggerDownload(analytics.excelWorkbook, 'Urban_Tree_Coverage_Pivot_Analysis.xlsx'),
      icon: FileSpreadsheet,
    },
    {
      title: "Urban Tree Coverage Python Script",
      desc: "Complete executable Python script reproducing the pandas.pivot_table() workflow.",
      format: "PY",
      size: "5.1 KB",
      action: () => triggerDownload(analytics.pythonScript, 'urban_tree_coverage_analysis.py'),
      icon: Code,
    },
    {
      title: "Exploratory Jupyter Notebook",
      desc: "Fully annotated interactive notebook with narrative insights and Matplotlib charts.",
      format: "IPYNB",
      size: "8.1 KB",
      action: () => triggerDownload(analytics.notebook, 'urban_tree_coverage_pivot.ipynb'),
      icon: BookOpen,
    },
    {
      title: "E-Waste Project Systems Writeup",
      desc: "Complete 12-page technical architecture writeup and API contract specification.",
      format: "PDF",
      size: "387 KB",
      action: () => triggerDownload(assets.eWasteWriteup, 'Circular_E_Waste_Recovery_Project_Writeup.pdf'),
      icon: FileText,
    },
    {
      title: "Braille Tutorial Contribution Report",
      desc: "Collaborative research report on PyBraille and assistive six-dot Grade 1 code conversion.",
      format: "PDF",
      size: "234 KB",
      action: () => triggerDownload(assets.pythonDiscussionReport, 'python-group-discussion-report on braille.pdf'),
      icon: FileText,
    },
  ];

  return (
    <section id="github" className="py-20 md:py-28 relative bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="SOURCE CODE & REPOSITORIES"
          title="EXPLORE"
          highlight="MY WORK."
          subtitle="Direct access to verified code repositories, downloadable analytical models, Jupyter notebooks, and comprehensive course documentation."
        />

        {/* REPOSITORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {repositories.map((repo, idx) => {
            const Icon = repo.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-dark-card"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {repo.type}
                    </span>
                    <Icon className="w-5 h-5 text-text-muted" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-text-primary">
                    {repo.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {repo.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {repo.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-border text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <button
                    onClick={() => openExternalLink(repo.url)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-orange-glow"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open on GitHub
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* DOWNLOADABLE COURSE ARTIFACTS VAULT */}
        <div className="bg-background-secondary border border-border rounded-3xl p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-heading text-text-primary">
              Downloadable Academic Artifacts Vault
            </h3>
            <p className="text-xs text-text-secondary mt-1">
              Direct downloads for verified code, analytical workbooks, and documentation generated during the course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloadableArtifacts.map((art, idx) => {
              const Icon = art.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-border-light transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-primary border border-primary/20">
                        {art.format} • {art.size}
                      </span>
                      <Icon className="w-4 h-4 text-text-muted" />
                    </div>

                    <h4 className="text-sm font-bold font-heading text-text-primary">
                      {art.title}
                    </h4>
                    <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                      {art.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/60">
                    <button
                      onClick={art.action}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-primary hover:text-white border border-border text-xs font-semibold transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-primary" />
                      Download {art.format}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
