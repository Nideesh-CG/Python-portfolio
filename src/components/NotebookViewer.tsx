import React, { useState } from 'react';
import { BookOpen, Download, ChevronDown, ChevronUp, Terminal, Code2 } from 'lucide-react';
import { triggerDownload } from '../utils/assetHelpers';

interface NotebookViewerProps {
  notebookUrl: string;
}

export const NotebookViewer: React.FC<NotebookViewerProps> = ({ notebookUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const notebookCells = [
    {
      type: 'markdown',
      content: `### 🌿 DATA STORIES – EXPLORING GLOBAL URBAN TREE COVERAGE
#### Transforming Urban Data into Meaningful Insights with pandas.pivot_table()

**Student:** NIDEESH C G  
**Register Number:** 23MIC0092  
**Course:** CSI3007 – Advanced Python Programming  

> **Academic Transparency Notice:** Reconstructed Demonstration – Recreated from the original course activity using the cited data source (Visual Capitalist & MIT Senseable City Lab Treepedia).`,
    },
    {
      type: 'code',
      executionCount: 1,
      source: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os

print('Pandas version:', pd.__version__)
print('NumPy version:', np.__version__)`,
      output: `Pandas version: 2.2.2
NumPy version: 1.26.4`,
    },
    {
      type: 'markdown',
      content: `#### 1. Data Collection & Ingestion
Loading the empirical dataset containing 34 world cities, country codes, and raw Green View Index (GVI %) percentages from MIT Treepedia.`,
    },
    {
      type: 'code',
      executionCount: 2,
      source: `raw_path = 'urban_tree_coverage_data.csv'
df_raw = pd.read_csv(raw_path)
df_raw.head(5)`,
      output: `   Rank     City_Raw Country_Code Green_View_Index_Raw
0     1        Tampa           US                36.1%
1     2        Breda           NL                29.3%
2     3    Singapore           SG                29.3%
3     4         Oslo           NO                28.8%
4     5       Sydney           AU                25.9%`,
    },
    {
      type: 'markdown',
      content: `#### 2. Data Preprocessing & Feature Engineering
Converting strings to floats, mapping countries and continents, and segmenting into Canopy Tiers: High (>25%), Moderate (15-25%), Low (<15%).`,
    },
    {
      type: 'code',
      executionCount: 3,
      source: `df = df_raw.copy()
df['City'] = df['City_Raw']
df['Green_View_Index_Pct'] = df['Green_View_Index_Raw'].str.rstrip('%').astype(float)
df['Country'] = df['Country_Code'].map(lambda c: country_map[c][0])
df['Continent'] = df['Country_Code'].map(lambda c: country_map[c][1])
df['Canopy_Tier'] = df['Green_View_Index_Pct'].apply(get_tier)
df[['Rank', 'City', 'Country', 'Continent', 'Green_View_Index_Pct', 'Canopy_Tier']].head(5)`,
      output: `   Rank       City        Country      Continent  Green_View_Index_Pct     Canopy_Tier
0     1      Tampa  United States  North America                  36.1     High (>25%)
1     2      Breda    Netherlands         Europe                  29.3     High (>25%)
2     3  Singapore      Singapore           Asia                  29.3     High (>25%)
3     4       Oslo         Norway         Europe                  28.8     High (>25%)
4     5     Sydney      Australia        Oceania                  25.9     High (>25%)`,
    },
    {
      type: 'markdown',
      content: `#### 3. Pivot Table Analysis using pandas.pivot_table()
Multidimensional statistical aggregations comparing continental averages, extremes, and cross-tabulating canopy tiers.`,
    },
    {
      type: 'code',
      executionCount: 4,
      source: `# Pivot Table 1: Continental Multi-Metric Aggregation
pivot_cont = pd.pivot_table(
    df,
    index='Continent',
    values='Green_View_Index_Pct',
    aggfunc=['count', 'mean', 'median', 'max', 'min', 'std']
)
pivot_cont.columns = ['Count', 'Mean GVI (%)', 'Median GVI (%)', 'Max GVI (%)', 'Min GVI (%)', 'Std Dev (%)']
pivot_cont.sort_values('Mean GVI (%)', ascending=False).round(2)`,
      output: `               Count  Mean GVI (%)  Median GVI (%)  Max GVI (%)  Min GVI (%)  Std Dev (%)
Continent                                                                                
Oceania            1         25.90           25.90         25.9         25.9          NaN
North America     11         22.02           20.00         36.1         13.5         6.24
Africa             3         20.23           23.60         23.7         13.4         5.92
Europe             8         19.91           21.00         29.3          8.8         7.19
Latin America      4         19.80           19.35         24.0         16.5         3.53
Asia               3         18.73           17.50         29.3          9.4        10.01
South America      4         12.68           12.70         14.5         10.8         1.72`,
    },
    {
      type: 'code',
      executionCount: 5,
      source: `# Pivot Table 2: Cross-tabulation of Continents vs Canopy Tiers
pivot_tiers = pd.pivot_table(
    df,
    index='Continent',
    columns='Canopy_Tier',
    values='City',
    aggfunc='count',
    fill_value=0
)
pivot_tiers`,
      output: `Canopy_Tier    High (>25%)  Low (<15%)  Moderate (15-25%)
Continent                                                
Africa                   0           1                  2
Asia                     1           1                  1
Europe                   2           2                  4
Latin America            0           0                  4
North America            4           1                  6
Oceania                  1           0                  0
South America            0           4                  0`,
    },
    {
      type: 'markdown',
      content: `#### 4. Analytical Findings & Academic Conclusions
1. **Tampa Leads Globally (36.1%):** Proactive municipal tree preservation and sapling planting ordinances maintain superior street-level canopy presence.
2. **Pedestrian Perspective:** Computer vision analyses Street View panoramas from eye level, capturing what pedestrians experience rather than remote satellite vegetation indexes.`,
    },
  ];

  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-dark-card">
      {/* Header Bar */}
      <div className="p-6 bg-background-secondary border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-mono">
                Jupyter Notebook Preview (.ipynb)
              </span>
              <span className="text-xs text-text-muted">
                • 12 Executed Cells
              </span>
            </div>
            <h3 className="text-xl font-bold font-heading text-text-primary">
              urban_tree_coverage_pivot.ipynb
            </h3>
            <p className="text-xs text-text-secondary mt-0.5">
              Interactive notebook documenting data preprocessing, multi-metric aggregations, and empirical findings.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-text-primary border border-border transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-primary" />
            {isExpanded ? 'Collapse Notebook' : 'Expand Full Notebook'}
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 ml-1" /> : <ChevronDown className="w-3.5 h-3.5 ml-1" />}
          </button>

          <button
            onClick={() => triggerDownload(notebookUrl, 'urban_tree_coverage_pivot.ipynb')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-primary hover:bg-primary-hover text-white transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Download .ipynb
          </button>
        </div>
      </div>

      {/* Notebook Content Stream */}
      {isExpanded ? (
        <div className="p-4 md:p-8 space-y-6 bg-[#0B0B0B] font-sans">
          {notebookCells.map((cell, idx) => (
            <div key={idx} className="space-y-2">
              {cell.type === 'markdown' ? (
                <div className="p-4 rounded-xl bg-card/60 border border-border/60 text-sm text-text-secondary leading-relaxed prose prose-invert max-w-none">
                  {(cell.content || '').split('\n').map((line, lidx) => (
                    <p key={lidx} className="my-1 whitespace-pre-line font-sans">
                      {line.startsWith('#') ? (
                        <strong className="text-white text-base block font-heading">{line.replace(/#/g, '').trim()}</strong>
                      ) : line.startsWith('>') ? (
                        <span className="block pl-3 border-l-2 border-primary text-text-muted italic">{line.replace('>', '').trim()}</span>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-border overflow-hidden bg-black/90">
                  {/* Code Input */}
                  <div className="p-3 bg-black flex items-start gap-3 border-b border-border/50">
                    <span className="text-[11px] font-mono font-bold text-primary select-none shrink-0 pt-0.5">
                      In [{cell.executionCount}]:
                    </span>
                    <pre className="font-mono text-xs text-white overflow-x-auto leading-relaxed flex-1">
                      {cell.source}
                    </pre>
                  </div>

                  {/* Code Output */}
                  {cell.output && (
                    <div className="p-3 bg-[#111111] flex items-start gap-3 text-xs font-mono text-text-secondary border-t border-border/30 overflow-x-auto">
                      <span className="text-[11px] font-mono font-bold text-text-muted select-none shrink-0 pt-0.5">
                        Out [{cell.executionCount}]:
                      </span>
                      <pre className="text-gray-300 leading-relaxed flex-1">
                        {cell.output}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Collapsed Summary Banner */
        <div className="p-6 bg-background flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Code2 className="w-5 h-5 text-primary shrink-0" />
            <p className="text-xs text-text-secondary">
              Notebook contains 12 verified executable cells with complete outputs and markdown narratives. Click <strong>Expand Full Notebook</strong> to inspect directly in your browser.
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(true)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-primary border border-border transition-colors whitespace-nowrap"
          >
            Inspect Notebook Cells
          </button>
        </div>
      )}
    </div>
  );
};
