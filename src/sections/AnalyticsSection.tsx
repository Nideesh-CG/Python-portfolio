import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PivotTable } from '../components/PivotTable';
import { AnalyticsChart } from '../components/AnalyticsChart';
import { NotebookViewer } from '../components/NotebookViewer';
import { portfolioConfig } from '../config/portfolio';
import { triggerDownload } from '../utils/assetHelpers';
import { openExternalLink } from '../utils/linkHelpers';
import { 
  FileSpreadsheet, 
  Code, 
  BookOpen, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle, 
  TrendingUp, 
  Layers, 
  Sparkles,
  TreePine,
  Download
} from 'lucide-react';

export const AnalyticsSection: React.FC = () => {
  const { analytics } = portfolioConfig;
  const [showCode, setShowCode] = useState(false);

  return (
    <section id="analytics" className="py-20 md:py-28 border-b border-border relative bg-background-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="DATA ANALYTICS SHOWCASE"
          title="FROM RAW DATA TO"
          highlight="REAL INSIGHTS."
          subtitle="DATA STORIES – EXPLORING GLOBAL URBAN TREE COVERAGE: Reconstructing empirical urban canopy datasets using pandas.pivot_table() and OpenPyXL."
        />

        {/* ACADEMIC TRANSPARENCY BADGE */}
        <div className="p-4 md:p-5 rounded-2xl bg-card border border-primary/40 shadow-orange-glow mb-10 flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary shrink-0 mt-0.5">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono">
                Academic Transparency Declaration
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-text-primary">
                Faculty Requirement
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong className="text-white">Reconstructed Demonstration:</strong> Recreated from the original course activity using the cited data source (Visual Capitalist / MIT Senseable City Lab Treepedia). Original course submission files were lost; this workflow faithfully reproduces the exact exploratory and multi-dimensional Pivot Table analysis required for CSI3007 evaluation.
            </p>
          </div>
        </div>

        {/* PROJECT OVERVIEW & METRIC SUMMARY CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono flex items-center gap-1.5">
              <TreePine className="w-4 h-4 text-primary" /> Cities Analyzed
            </span>
            <span className="text-3xl font-bold font-heading text-text-primary mt-2 block">
              34 Cities
            </span>
            <span className="text-xs text-text-secondary mt-1 block">
              Global metropolitan sampling
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-primary" /> Top Performer
            </span>
            <span className="text-3xl font-bold font-heading text-primary mt-2 block">
              Tampa (36.1%)
            </span>
            <span className="text-xs text-text-secondary mt-1 block">
              +6.8% over Breda & Singapore
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-secondary" /> Global Mean GVI
            </span>
            <span className="text-3xl font-bold font-heading text-text-primary mt-2 block">
              19.4%
            </span>
            <span className="text-xs text-text-secondary mt-1 block">
              Street-level canopy visibility
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" /> High-Tier Share
            </span>
            <span className="text-3xl font-bold font-heading text-text-primary mt-2 block">
              23.5%
            </span>
            <span className="text-xs text-text-secondary mt-1 block">
              8 cities achieve GVI ≥ 25%
            </span>
          </div>
        </div>

        {/* ACTION BUTTONS TOOLBAR */}
        <div className="p-6 rounded-2xl bg-card border border-border flex flex-wrap items-center justify-between gap-4 mb-10">
          <div>
            <h3 className="text-base font-bold text-text-primary font-heading">
              Analytical Artifacts & Source Code
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Reproducible Python analysis pipeline, styled Excel workbook, and Jupyter notebook.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => triggerDownload(analytics.excelWorkbook, 'Urban_Tree_Coverage_Pivot_Analysis.xlsx')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-colors shadow-sm"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Download Excel Workbook
            </button>

            <button
              onClick={() => triggerDownload(analytics.pythonScript, 'urban_tree_coverage_analysis.py')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card hover:bg-white/5 border border-border hover:border-primary text-text-primary text-xs font-semibold transition-colors"
            >
              <Code className="w-4 h-4 text-primary" />
              Download Python Script
            </button>

            <button
              onClick={() => triggerDownload(analytics.notebook, 'urban_tree_coverage_pivot.ipynb')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card hover:bg-white/5 border border-border hover:border-secondary text-text-primary text-xs font-semibold transition-colors"
            >
              <BookOpen className="w-4 h-4 text-secondary" />
              Download Notebook (.ipynb)
            </button>

            <button
              onClick={() => triggerDownload(analytics.cleanedDataset, 'urban_tree_coverage_cleaned.csv')}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-card hover:bg-white/5 border border-border text-text-secondary hover:text-white text-xs font-semibold transition-colors"
            >
              <Download className="w-4 h-4" />
              CSV Data
            </button>

            <button
              onClick={() => openExternalLink(analytics.visualCapitalistSource)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-border text-text-secondary hover:text-white text-xs font-semibold transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Source Article
            </button>
          </div>
        </div>

        {/* SECTION 1: INTERACTIVE PIVOT TABLE DATA EXPLORER */}
        <div className="mb-12">
          <PivotTable />
        </div>

        {/* SECTION 2: CHARTS TAB VIEWER */}
        <div className="mb-12">
          <AnalyticsChart
            summaryChart={analytics.charts[0]}
            distChart={analytics.charts[1]}
            contChart={analytics.charts[2]}
          />
        </div>

        {/* JUPYTER NOTEBOOK INTERACTIVE PREVIEW */}
        <div className="mb-12">
          <NotebookViewer notebookUrl={analytics.notebook} />
        </div>

        {/* SECTION 3: PYTHON IMPLEMENTATION SNIPPET TOGGLE */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-primary mb-1">
                <Code className="w-4 h-4" />
                Script Implementation
              </div>
              <h4 className="text-xl font-bold font-heading text-text-primary">
                Multi-Dimensional `pandas.pivot_table()` Code
              </h4>
            </div>

            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 border border-border text-text-primary transition-colors self-start sm:self-auto"
            >
              {showCode ? 'Hide Source Code' : 'Inspect Python Code'}
            </button>
          </div>

          {showCode && (
            <div className="mt-6 rounded-2xl bg-black border border-border p-5 overflow-x-auto font-mono text-xs text-text-secondary leading-relaxed">
              <pre className="text-green-400"># Multi-metric continental aggregation</pre>
              <pre className="text-white">pivot_continent = pd.pivot_table(</pre>
              <pre className="text-white">    df,</pre>
              <pre className="text-white">    index='Continent',</pre>
              <pre className="text-white">    values='Green_View_Index_Pct',</pre>
              <pre className="text-orange-400">    aggfunc=['count', 'mean', 'median', 'max', 'min', 'std']</pre>
              <pre className="text-white">)</pre>
              <br />
              <pre className="text-green-400"># Cross-tabulation of Continents vs Canopy Tiers</pre>
              <pre className="text-white">pivot_crosstab = pd.pivot_table(</pre>
              <pre className="text-white">    df,</pre>
              <pre className="text-white">    index='Continent',</pre>
              <pre className="text-orange-400">    columns='Canopy_Tier',</pre>
              <pre className="text-white">    values='City',</pre>
              <pre className="text-orange-400">    aggfunc='count',</pre>
              <pre className="text-white">    fill_value=0</pre>
              <pre className="text-white">)</pre>
            </div>
          )}

          {/* KEY ANALYTICAL FINDINGS */}
          <div className="mt-8 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <h5 className="font-bold text-text-primary flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                1. Street-Level vs. Satellite Divergence
              </h5>
              <p className="text-xs text-text-secondary leading-relaxed pl-6">
                Unlike satellite NDVI which measures total canopy square-footage, Treepedia’s Green View Index evaluates pedestrian-level perception via Google Street View panoramas. Cities like Paris (8.8%) rank low because greenery is concentrated in peripheral woods rather than dense pedestrian corridors.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="font-bold text-text-primary flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                2. Municipal Preservation Mandates
              </h5>
              <p className="text-xs text-text-secondary leading-relaxed pl-6">
                Tampa’s top ranking (36.1%) stems not only from its humid subtropical climate but from strict municipal tree protection ordinances that fine non-permitted tree removals and require direct sapling replacement in sidewalk rights-of-way.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

