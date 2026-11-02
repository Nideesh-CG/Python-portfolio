# PYTHONVERSE

## The Advanced Python Programming Journey of Nideesh C G

**Portfolio Brand:** PYTHONVERSE  
**Student:** Nideesh C G (Reg. No: 23MIC0092)  
**Course:** CSI3007 – Advanced Python Programming  
**Degree Program:** Integrated M.Tech Computer Science and Engineering (Data Science)  
**School:** School of Computer Science and Engineering (SCOPE), Vellore Institute of Technology  

---

## 🌟 Executive Overview

**PYTHONVERSE** is a high-performance interactive digital exhibition documenting the complete progression through the Advanced Python Programming course. Designed with a bespoke black-and-orange executive aesthetic, this application bridges academic pedagogy, algorithmic evaluation, empirical data analytics, IoT accessibility engineering, and full-stack cloud software architecture.

---

## 🎨 Visual Design Architecture

Inspired by luxury editorial portfolio standards:
- **Background Base:** `#080808`
- **Secondary Background:** `#101010`
- **Card Surfaces:** `#171717`
- **Primary Accent Orange:** `#FF6500`
- **Secondary Accent Orange:** `#E85D04`
- **Typography:** *Space Grotesk* (Headings) paired with *Inter* (Body) and *Fira Code* (Monospace code)
- **Structure:** Rounded outer boundary container with subtle radial grid meshes, responsive split-screen hero, sticky active navigation, and modal image lightboxes.

---

## 🚀 Key Sections & Functional Features

1. **Hero Section:** Split-screen layout displaying brand *PYTHONVERSE*, Nideesh C G, guiding philosophy, and abstract computational architecture matrix.
2. **About My Journey:** Interactive milestone timeline covering 10 pivotal developmental phases from core foundational paradigms to distributed system deployments.
3. **Classroom Learning:** Interactive cards featuring the authentic course Storyboard, collaborative PyBraille group discussion photo & report PDF preview, and timed in-class programming assessment.
4. **Data Analytics – Reconstructed Pivot Table Showcase:**
   - **Academic Transparency Declaration:** Highlighting the rigorous reconstitution of lost coursework using primary empirical sources.
   - **Source Provenance:** Verified 34 global cities from Visual Capitalist (*Ranked: The World's Cities With the Most Tree Coverage*) and MIT Senseable City Lab Treepedia.
   - **Interactive Table:** Search, multi-tier filters (Canopy Tiers: High, Moderate, Low), continental filters, and sorting.
   - **Visualizations:** Dark-and-orange horizontal bar charts, continental boxplots, and frequency histograms.
   - **Downloadable Assets:** Formatted multi-tab OpenPyXL Excel workbook, reproducible Python script, and executable Jupyter Notebook (`.ipynb`).
5. **Accessibility Innovation (AbilityAssist AI):** IoT-based visual impairment assistance system featuring interactive architecture inspection, YOLO object detection, EasyOCR, and bilingual voice guidance (English & Tamil).
6. **Padlet Practical Assessments:** Interactive gallery of student-created algorithmic challenges, focusing on LeetCode 430: *Flatten a Multilevel Doubly Linked List*.
7. **Circular E-Waste Major Project:** Capstone two-application distributed architecture (Application 1: Collection & Recovery by Nideesh C G; Application 2: Refurbishment Intelligence by Dharma S) connected via authenticated REST APIs, Supabase PostgreSQL, and live Vercel hosting.
8. **Technical Blogging:** Editorial showcase linking to the verified Medium publication: *"Everyone Deserves to Code: Making Python Accessible to Braille Learners"*.
9. **Business Thesis & Strategy:** Economic and product architecture dossier exploring unit economics and SaaS monetization for web-based audio recording suites.
10. **The Journey in Motion (Video Showcase):** Responsive HTML5 video player streaming the 12-minute technical project review, compressed by **97.8%** from 815 MB to 18.5 MB with FFmpeg.
11. **GitHub & Documentation Vault:** Central download center for code repositories, data models, slide presentations, and technical PDF writeups.
12. **Contact & Academic Closing:** Executive footer, social links, and smooth back-to-top interaction.

---

## 📊 Reconstructed Pivot Table Activity Details

- **Dataset Metric:** Green View Index (GVI, %), measuring street-level pedestrian tree canopy perception.
- **Top City:** Tampa, USA (36.1% GVI), exceeding runner-ups Breda and Singapore (29.3%) by 6.8 percentage points.
- **Python Pipeline:**
  ```python
  # Multi-metric continental aggregation
  pivot_continent = pd.pivot_table(
      df,
      index='Continent',
      values='Green_View_Index_Pct',
      aggfunc=['count', 'mean', 'median', 'max', 'min', 'std']
  )

  # Cross-tabulation of Continents vs Canopy Tiers
  pivot_crosstab = pd.pivot_table(
      df,
      index='Continent',
      columns='Canopy_Tier',
      values='City',
      aggfunc='count',
      fill_value=0
  )
  ```
- **Generated Output Files (`public/assets/pivot-table/`):**
  - `urban_tree_coverage_data.csv` (Raw data)
  - `urban_tree_coverage_cleaned.csv` (Cleaned data)
  - `Urban_Tree_Coverage_Pivot_Analysis.xlsx` (OpenPyXL multi-tab styled workbook)
  - `urban_tree_coverage_analysis.py` (Standalone Python reproduction script)
  - `urban_tree_coverage_pivot.ipynb` (Executable Jupyter Notebook)
  - `urban_tree_coverage_summary.png` (Ranked city chart)
  - `urban_tree_coverage_distribution.png` (Boxplot & histogram distribution)
  - `urban_tree_coverage_continents.png` (Continental comparison chart)

---

## 🎬 Video Optimisation Engineering

The original raw demonstration video was 815.4 MB (1080p, 12 minutes 13 seconds), which would cause extreme bandwidth lag and violate Git/Vercel hosting limits.

Using FFmpeg with H.264 video compression, AAC audio encoding, and web streaming optimizations:
```bash
ffmpeg -i "python project vedio.mp4" \
  -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -preset fast -crf 28 \
  -pix_fmt yuv420p -c:a aac -b:a 96k \
  -movflags +faststart -map_metadata -1 \
  "public/assets/python-project-video-compressed.mp4"
```
- **Original Size:** 815,400,426 bytes (~815.4 MB)
- **Compressed Size:** 18,527,027 bytes (~18.5 MB)
- **Data Reduction:** **97.8% saved**
- **Quality & Duration:** Crisp 720p presentation clarity, 12 minutes 13 seconds duration fully preserved without dropping frames.
- **Git Safety:** The original 815 MB file is preserved locally and excluded via `.gitignore`.

---

## ⚙️ Central Configuration (`src/config/portfolio.ts`)

All external links, asset locations, and student details are centrally managed in `src/config/portfolio.ts`. Missing external links are left as empty strings and handled gracefully by the UI.

```typescript
export const portfolioConfig = {
  personal: {
    name: "NIDEESH C G",
    brand: "PYTHONVERSE",
    course: "Advanced Python Programming",
    courseCode: "CSI3007",
    regNo: "23MIC0092",
    // ...
  },
  links: {
    mediumBlog: "https://medium.com/@nidninja10/everyone-deserves-to-code-making-python-accessible-to-braille-learners-ade82b348912",
    githubProfile: "https://github.com/Nideesh-CG",
    eWasteRepository: "https://github.com/Nideesh-CG/E-waste-Recovery-System.git",
    audioRecordingWebsite: "https://drive.google.com/file/d/1Go9ogc3-RV4LjE77__FKC-MJiog7Rfq-/view?usp=sharing",
    eWasteLiveApp: "https://e-waste-recovery-system-sand.vercel.app/",
    // ...
  }
};
```

---

## 🛠️ Local Development & Build Instructions

### Prerequisites
- Node.js (v18+)
- Python 3.10+ (for analytics scripts)

### Installation
```bash
# Clone the repository
git clone https://github.com/Nideesh-CG/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

### Production Build
```bash
# Compile TypeScript and bundle with Vite
npm run build

# Output is generated in the /dist folder
```

---

## 🚀 Vercel Deployment Guide

1. Push the project repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete PYTHONVERSE interactive portfolio"
   git remote add origin https://github.com/Nideesh-CG/portfolio.git
   git push -u origin main
   ```
2. Import the project in [Vercel Dashboard](https://vercel.com):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Deploy! Vercel will automatically serve the single-page application with optimized caching configured in `vercel.json`.

---

**Developed with precision for CSI3007 – Advanced Python Programming.**  
*Nideesh C G • PYTHONVERSE*

