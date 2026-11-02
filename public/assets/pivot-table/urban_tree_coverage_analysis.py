"""
DATA STORIES: EXPLORING GLOBAL URBAN TREE COVERAGE
Transforming Urban Data into Meaningful Insights

Student: NIDEESH C G (Reg. No: 23MIC0092)
Course: CSI3007 - Advanced Python Programming
Activity: Data Processing and Pivot Table Analysis

Source Attribution:
- Secondary Source: Visual Capitalist ("Ranked: The World's Cities With the Most Tree Coverage")
  URL: https://www.visualcapitalist.com/ranked-the-worlds-cities-with-the-most-tree-coverage/
- Primary Source: MIT Senseable City Lab Treepedia, in collaboration with the World Economic Forum.
- Metric: Green View Index (GVI %), measuring pedestrian street-level tree canopy perception.

Transparency Notice:
Reconstructed Demonstration – Recreated from the original course activity using
the cited data source. Original submission files were unavailable.
"""

import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

def main():
    print("=" * 70)
    print("CSI3007 - ADVANCED PYTHON PROGRAMMING: PIVOT TABLE ANALYSIS")
    print("Project: Exploring Global Urban Tree Coverage (Treepedia GVI)")
    print("=" * 70)

    # 1. Load Raw Dataset
    raw_path = "urban_tree_coverage_data.csv"
    if not os.path.exists(raw_path):
        raw_path = os.path.join("public/assets/pivot-table", "urban_tree_coverage_data.csv")
    
    df_raw = pd.read_csv(raw_path)
    print(f"\n[1] Successfully loaded raw dataset with {len(df_raw)} records.")
    print("Columns:", list(df_raw.columns))

    # 2. Data Cleaning & Type Conversion
    print("\n[2] Executing Data Preprocessing Pipeline...")
    df = df_raw.copy()
    df['City'] = df['City_Raw']
    df['Green_View_Index_Pct'] = df['Green_View_Index_Raw'].str.rstrip('%').astype(float)
    
    country_map = {
        'US': ('United States', 'North America'),
        'NL': ('Netherlands', 'Europe'),
        'SG': ('Singapore', 'Asia'),
        'NO': ('Norway', 'Europe'),
        'AU': ('Australia', 'Oceania'),
        'CA': ('Canada', 'North America'),
        'MX': ('Mexico', 'Latin America'),
        'ZA': ('South Africa', 'Africa'),
        'DE': ('Germany', 'Europe'),
        'CH': ('Switzerland', 'Europe'),
        'IL': ('Israel', 'Asia'),
        'IT': ('Italy', 'Europe'),
        'AR': ('Argentina', 'South America'),
        'BR': ('Brazil', 'South America'),
        'GB': ('United Kingdom', 'Europe'),
        'EC': ('Ecuador', 'South America'),
        'JP': ('Japan', 'Asia'),
        'FR': ('France', 'Europe')
    }
    
    df['Country'] = df['Country_Code'].map(lambda c: country_map[c][0])
    df['Continent'] = df['Country_Code'].map(lambda c: country_map[c][1])
    
    def get_tier(val):
        if val >= 25.0:
            return 'High (>25%)'
        elif val >= 15.0:
            return 'Moderate (15-25%)'
        else:
            return 'Low (<15%)'
            
    df['Canopy_Tier'] = df['Green_View_Index_Pct'].apply(get_tier)
    print(f"Data types validated: Green_View_Index_Pct -> float64. Missing values: {df.isnull().sum().sum()}.")

    # 3. Pivot Table Analysis using pandas.pivot_table()
    print("\n[3] Implementing Pivot Table Summaries (pandas.pivot_table):")
    
    # Pivot 1: Continent Multi-Aggregation
    pivot_continent = pd.pivot_table(
        df,
        index='Continent',
        values='Green_View_Index_Pct',
        aggfunc=['count', 'mean', 'median', 'max', 'min', 'std']
    )
    pivot_continent.columns = ['Count', 'Mean GVI', 'Median GVI', 'Max GVI', 'Min GVI', 'Std Dev']
    pivot_continent = pivot_continent.sort_values('Mean GVI', ascending=False)
    print("\n--- A. Continent-Level Pivot Summary ---")
    print(pivot_continent.round(2))

    # Pivot 2: Country Aggregation
    pivot_country = pd.pivot_table(
        df,
        index=['Continent', 'Country'],
        values='Green_View_Index_Pct',
        aggfunc=['count', 'mean', 'max']
    )
    pivot_country.columns = ['Count', 'Mean GVI', 'Max GVI']
    print("\n--- B. Country-Level Pivot Summary (Top 8) ---")
    print(pivot_country.sort_values('Mean GVI', ascending=False).head(8).round(2))

    # Pivot 3: Cross-tabulation (Continent vs Canopy Tier)
    pivot_crosstab = pd.pivot_table(
        df,
        index='Continent',
        columns='Canopy_Tier',
        values='City',
        aggfunc='count',
        fill_value=0
    )
    print("\n--- C. Cross-Tabulation: Continent vs Canopy Tier ---")
    print(pivot_crosstab)

    # 4. Key Analytical Insights
    print("\n[4] Core Analytical Findings:")
    print("1. Tampa (USA) leads the global index with 36.1% GVI, 6.8 points ahead of Breda and Singapore (29.3%).")
    print("2. 8 of the 34 cities (23.5%) maintain High Canopy Tier status (>= 25%).")
    print("3. North America has the largest presence among top performers (5 of top 12).")
    print("4. Street-level computer vision measures what pedestrians actually perceive, contrasting with satellite NDVI.")

    print("\n[SUCCESS] Pivot Table Analysis workflow completed successfully.")

if __name__ == '__main__':
    main()
