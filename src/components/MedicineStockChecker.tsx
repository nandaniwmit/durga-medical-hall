import React, { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, ShieldCheck, RefreshCw, MessageSquare } from 'lucide-react';
import stockData from '../data/medicineStock.json';
import { PHONE_NUMBER } from '../utils/whatsapp';

export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  brand: string;
  category: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: 'Available' | 'Limited Stock' | 'Out of Stock' | string;
  usageDescription: string;
}

interface MedicineStockCheckerProps {
  onOrderMedicine?: (medicineName: string) => void;
  title?: string;
  subtitle?: string;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onOrderMedicine,
  title = "Live Medicine Stock Checker",
  subtitle = "Search availability of genuine prescription drugs, OTC medicines, & health supplies at Durga Medical Hall"
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const medicines: MedicineItem[] = stockData as MedicineItem[];

  const categories = useMemo(() => {
    const cats = new Set(medicines.map(m => m.category));
    return ['All', ...Array.from(cats)];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter(med => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus, medicines]);

  const getStatusBadge = (status: string, qty: number) => {
    if (status === 'Available') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          Available ({qty} in stock)
        </span>
      );
    } else if (status === 'Limited Stock') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
          Limited Stock ({qty} left)
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
          <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
          Out of Stock
        </span>
      );
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
          <RefreshCw className="w-3.5 h-3.5 text-emerald-600 animate-spin-slow" /> Instant Store Inventory
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="space-y-4">
        {/* Main Search Input */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by medicine name (e.g. Dolo 650, Pan 40), salt composition, or brand..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white text-sm sm:text-base focus:border-emerald-500 dark:focus:border-emerald-400 outline-none transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-md"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Filter */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span>Showing <strong className="text-slate-900 dark:text-white">{filteredMedicines.length}</strong> items in store stock</span>
          <div className="flex items-center gap-2">
            <span>Filter Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2.5 py-1 rounded-lg font-medium border-0 outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="Available">Available</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Table / Cards Grid */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-emerald-500 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-slate-800/80 transition-all space-y-3 flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                      {med.category}
                    </span>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white mt-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {med.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                      ₹{med.mrp.toFixed(2)}
                    </span>
                    <p className="text-[10px] text-slate-400">MRP incl. taxes</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                  <strong>Salt / Active:</strong> {med.genericName}
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 italic">
                  "{med.usageDescription}"
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  <span>Brand: <strong className="text-slate-700 dark:text-slate-200">{med.brand}</strong></span>
                  <span>Exp: <strong className="text-slate-700 dark:text-slate-200">{med.expiry}</strong></span>
                </div>
              </div>

              {/* Status & Action */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-2">
                {getStatusBadge(med.status, med.availableQuantity)}

                <button
                  onClick={() => onOrderMedicine && onOrderMedicine(med.name)}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 space-y-3">
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            No exact matches found for "<span className="font-bold">{searchTerm}</span>".
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            We carry over 5,000+ medicines in store! Send us a message on WhatsApp or call us directly at <strong>{PHONE_NUMBER}</strong> and our pharmacist will check store shelves immediately.
          </p>
          <button
            onClick={() => onOrderMedicine && onOrderMedicine(searchTerm)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs shadow-md"
          >
            <MessageSquare className="w-4 h-4" /> Inquiry on WhatsApp
          </button>
        </div>
      )}

      {/* Bottom Store Note */}
      <div className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2">
        <p className="flex items-center justify-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Durga Medical Hall guarantees 100% genuine batch-verified medicines directly from stockists.
        </p>
      </div>
    </div>
  );
};
