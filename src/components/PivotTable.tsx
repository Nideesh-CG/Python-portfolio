import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown, ChevronLeft, ChevronRight, Layers, Table } from 'lucide-react';

interface CityRecord {
  rank: number;
  city: string;
  country: string;
  continent: string;
  gvi: number;
  tier: 'High (>25%)' | 'Moderate (15-25%)' | 'Low (<15%)';
}

const CITIES_DATA: CityRecord[] = [
  { rank: 1, city: 'Tampa', country: 'United States', continent: 'North America', gvi: 36.1, tier: 'High (>25%)' },
  { rank: 2, city: 'Breda', country: 'Netherlands', continent: 'Europe', gvi: 29.3, tier: 'High (>25%)' },
  { rank: 3, city: 'Singapore', country: 'Singapore', continent: 'Asia', gvi: 29.3, tier: 'High (>25%)' },
  { rank: 4, city: 'Oslo', country: 'Norway', continent: 'Europe', gvi: 28.8, tier: 'High (>25%)' },
  { rank: 5, city: 'Sydney', country: 'Australia', continent: 'Oceania', gvi: 25.9, tier: 'High (>25%)' },
  { rank: 6, city: 'Vancouver', country: 'Canada', continent: 'North America', gvi: 25.9, tier: 'High (>25%)' },
  { rank: 7, city: 'Montreal', country: 'Canada', continent: 'North America', gvi: 25.5, tier: 'High (>25%)' },
  { rank: 8, city: 'Cambridge', country: 'United States', continent: 'North America', gvi: 25.3, tier: 'High (>25%)' },
  { rank: 9, city: 'Xalapa', country: 'Mexico', continent: 'Latin America', gvi: 24.0, tier: 'Moderate (15-25%)' },
  { rank: 10, city: 'Durban', country: 'South Africa', continent: 'Africa', gvi: 23.7, tier: 'Moderate (15-25%)' },
  { rank: 11, city: 'Johannesburg', country: 'South Africa', continent: 'Africa', gvi: 23.6, tier: 'Moderate (15-25%)' },
  { rank: 12, city: 'Sacramento', country: 'United States', continent: 'North America', gvi: 23.6, tier: 'Moderate (15-25%)' },
  { rank: 13, city: 'Frankfurt', country: 'Germany', continent: 'Europe', gvi: 21.5, tier: 'Moderate (15-25%)' },
  { rank: 14, city: 'Geneva', country: 'Switzerland', continent: 'Europe', gvi: 21.4, tier: 'Moderate (15-25%)' },
  { rank: 15, city: 'Veracruz', country: 'Mexico', continent: 'Latin America', gvi: 21.4, tier: 'Moderate (15-25%)' },
  { rank: 16, city: 'Amsterdam', country: 'Netherlands', continent: 'Europe', gvi: 20.6, tier: 'Moderate (15-25%)' },
  { rank: 17, city: 'Seattle', country: 'United States', continent: 'North America', gvi: 20.0, tier: 'Moderate (15-25%)' },
  { rank: 18, city: 'Toronto', country: 'Canada', continent: 'North America', gvi: 19.5, tier: 'Moderate (15-25%)' },
  { rank: 19, city: 'Miami', country: 'United States', continent: 'North America', gvi: 19.4, tier: 'Moderate (15-25%)' },
  { rank: 20, city: 'Boston', country: 'United States', continent: 'North America', gvi: 18.2, tier: 'Moderate (15-25%)' },
  { rank: 21, city: 'Tel Aviv', country: 'Israel', continent: 'Asia', gvi: 17.5, tier: 'Moderate (15-25%)' },
  { rank: 22, city: 'Guadalajara', country: 'Mexico', continent: 'Latin America', gvi: 17.3, tier: 'Moderate (15-25%)' },
  { rank: 23, city: 'León', country: 'Mexico', continent: 'Latin America', gvi: 16.5, tier: 'Moderate (15-25%)' },
  { rank: 24, city: 'Turin', country: 'Italy', continent: 'Europe', gvi: 16.2, tier: 'Moderate (15-25%)' },
  { rank: 25, city: 'Los Angeles', country: 'United States', continent: 'North America', gvi: 15.2, tier: 'Moderate (15-25%)' },
  { rank: 26, city: 'Buenos Aires', country: 'Argentina', continent: 'South America', gvi: 14.5, tier: 'Low (<15%)' },
  { rank: 27, city: 'Franca', country: 'Brazil', continent: 'South America', gvi: 13.7, tier: 'Low (<15%)' },
  { rank: 28, city: 'New York', country: 'United States', continent: 'North America', gvi: 13.5, tier: 'Low (<15%)' },
  { rank: 29, city: 'Cape Town', country: 'South Africa', continent: 'Africa', gvi: 13.4, tier: 'Low (<15%)' },
  { rank: 30, city: 'London', country: 'United Kingdom', continent: 'Europe', gvi: 12.7, tier: 'Low (<15%)' },
  { rank: 31, city: 'São Paulo', country: 'Brazil', continent: 'South America', gvi: 11.7, tier: 'Low (<15%)' },
  { rank: 32, city: 'Quito', country: 'Ecuador', continent: 'South America', gvi: 10.8, tier: 'Low (<15%)' },
  { rank: 33, city: 'Kobe', country: 'Japan', continent: 'Asia', gvi: 9.4, tier: 'Low (<15%)' },
  { rank: 34, city: 'Paris', country: 'France', continent: 'Europe', gvi: 8.8, tier: 'Low (<15%)' }
];

export const PivotTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedTier, setSelectedTier] = useState('All');
  const [sortBy, setSortBy] = useState<'rank' | 'gvi' | 'city'>('rank');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const continents = ['All', 'North America', 'Europe', 'Latin America', 'Africa', 'Asia', 'South America', 'Oceania'];
  const tiers = ['All', 'High (>25%)', 'Moderate (15-25%)', 'Low (<15%)'];

  const filteredData = useMemo(() => {
    return CITIES_DATA.filter((item) => {
      const matchesSearch =
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesContinent = selectedContinent === 'All' || item.continent === selectedContinent;
      const matchesTier = selectedTier === 'All' || item.tier === selectedTier;
      return matchesSearch && matchesContinent && matchesTier;
    }).sort((a, b) => {
      let comp = 0;
      if (sortBy === 'rank') comp = a.rank - b.rank;
      else if (sortBy === 'gvi') comp = a.gvi - b.gvi;
      else if (sortBy === 'city') comp = a.city.localeCompare(b.city);
      return sortOrder === 'asc' ? comp : -comp;
    });
  }, [searchTerm, selectedContinent, selectedTier, sortBy, sortOrder]);

  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage]);

  const handleSort = (field: 'rank' | 'gvi' | 'city') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-dark-card">
      {/* Top Header & Search Controls */}
      <div className="p-6 md:p-8 bg-background-secondary border-b border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              <Table className="w-4 h-4" />
              Verified Empirical Dataset Explorer
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-heading text-text-primary">
              Global Urban Tree Coverage (Treepedia GVI)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search city or country..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-9 pr-4 py-2 bg-background border border-border rounded-xl text-sm text-text-primary focus:outline-none focus:border-primary transition-colors w-full md:w-64"
              />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-text-muted uppercase tracking-wider mr-1">Continent:</span>
            {continents.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setSelectedContinent(c);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedContinent === c
                    ? 'bg-primary text-white font-semibold'
                    : 'bg-card text-text-secondary hover:text-white hover:bg-white/5 border border-border'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap mt-2 sm:mt-0">
            <span className="text-xs text-text-muted uppercase tracking-wider mr-1">Tier:</span>
            {tiers.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setSelectedTier(t);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedTier === t
                    ? 'bg-secondary text-white font-semibold'
                    : 'bg-card text-text-secondary hover:text-white hover:bg-white/5 border border-border'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-background/60 text-xs font-semibold uppercase tracking-wider text-text-secondary">
              <th className="py-4 px-6 cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort('rank')}>
                <div className="flex items-center gap-1">
                  Rank <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-4 px-6 cursor-pointer hover:text-primary transition-colors" onClick={() => handleSort('city')}>
                <div className="flex items-center gap-1">
                  City <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-4 px-6">Country</th>
              <th className="py-4 px-6">Continent</th>
              <th className="py-4 px-6 cursor-pointer hover:text-primary transition-colors text-right" onClick={() => handleSort('gvi')}>
                <div className="flex items-center justify-end gap-1">
                  Green View Index (%) <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-4 px-6 text-center">Canopy Tier</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 text-sm">
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => (
                <tr key={row.city} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="py-4 px-6 font-mono font-bold text-text-muted group-hover:text-primary transition-colors">
                    #{row.rank}
                  </td>
                  <td className="py-4 px-6 font-semibold text-text-primary">
                    {row.city}
                  </td>
                  <td className="py-4 px-6 text-text-secondary">
                    {row.country}
                  </td>
                  <td className="py-4 px-6 text-text-muted">
                    {row.continent}
                  </td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-text-primary">
                    <span className="inline-block px-2.5 py-1 rounded bg-background border border-border group-hover:border-primary/50 transition-colors">
                      {row.gvi.toFixed(1)}%
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        row.tier.includes('High')
                          ? 'bg-primary/20 text-primary border border-primary/40'
                          : row.tier.includes('Moderate')
                          ? 'bg-secondary/20 text-orange-400 border border-secondary/40'
                          : 'bg-white/5 text-text-muted border border-border'
                      }`}
                    >
                      {row.tier}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-12 text-center text-text-muted">
                  No cities found matching your filter criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="p-4 md:p-6 bg-background-secondary border-t border-border flex items-center justify-between text-xs text-text-secondary">
        <div>
          Showing <span className="text-text-primary font-semibold">{filteredData.length > 0 ? (currentPage - 1) * pageSize + 1 : 0}</span> to{' '}
          <span className="text-text-primary font-semibold">{Math.min(currentPage * pageSize, filteredData.length)}</span> of{' '}
          <span className="text-text-primary font-semibold">{filteredData.length}</span> verified cities
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg bg-card border border-border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 text-text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-3 py-1 font-mono text-text-primary">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg bg-card border border-border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 text-text-primary transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Educational Pivot Table Dimensions Guide */}
      <div className="p-6 md:p-8 bg-background border-t border-border">
        <h4 className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4" />
          Python Pivot Table Mechanics (`pandas.pivot_table`)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-card border border-border">
            <span className="font-bold text-white block mb-1 text-sm font-mono">Index</span>
            <p className="text-text-secondary leading-relaxed">
              `Continent`, `Country` – Grouping keys defining the table rows for hierarchical aggregation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <span className="font-bold text-white block mb-1 text-sm font-mono">Columns</span>
            <p className="text-text-secondary leading-relaxed">
              `Canopy_Tier` – Categorical dimensions expanding into column dimensions for cross-tabulation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <span className="font-bold text-white block mb-1 text-sm font-mono">Values</span>
            <p className="text-text-secondary leading-relaxed">
              `Green_View_Index_Pct` – Numerical measurement analyzed across all dimensions.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <span className="font-bold text-primary block mb-1 text-sm font-mono">AggFunc</span>
            <p className="text-text-secondary leading-relaxed">
              `['mean', 'max', 'min', 'count', 'std']` – Multi-metric statistical functions computed across cells.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
