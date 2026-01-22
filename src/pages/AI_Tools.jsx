import React, { useState, useEffect, useMemo, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, Zap, ExternalLink, 
  ChevronDown, LayoutGrid, List, SlidersHorizontal, 
  Slice,ArrowLeft,
} from 'lucide-react';
import { AIContext } from '../Context/AitoolsContext';
import { Link, useNavigate } from 'react-router';


// --- SUB-COMPONENTS ---

const Badge = ({ children, color = "indigo" }) => (
  <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md bg-${color}-50 text-${color}-600 dark:bg-${color}-900/30 dark:text-${color}-400 border border-${color}-100 dark:border-${color}-800`}>
    {children}
  </span>
);

const ToolCard = ({ tool }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -5 }}
    className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4">
      {/* Image replaced Logo placeholder */}
      <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden shadow-lg group-hover:rotate-6 transition-transform">
        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-1 text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg">
        <Star size={14} fill="currentColor" />
        <span className="text-xs font-bold">{tool.rating}</span>
      </div>
    </div>
    
    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
      {tool.name}
    </h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mt-1 mb-4">
      {tool.whatItDoes}
    </p>
    
    <div className="flex flex-col gap-2 mb-4">
  {/* Isse dono badges alag-alag line mein aayenge */}
  <div className="flex">
    <Badge color="indigo">{tool.category[0]}</Badge>
  </div>
  <div className="flex">
    <Badge color="emerald">{tool.pricing}</Badge>
  </div>
</div>

    <Link 
      to={`/Ai-Tools/${tool._id}`} 
      
      rel="noreferrer"
      className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-50 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white rounded-xl text-sm font-semibold transition-all"
    >
      View Details <ExternalLink size={14} />
    </Link>
  </motion.div>
);

// --- MAIN PAGE ---

export default function Ai_Tools() {

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isScrolled, setIsScrolled] = useState(false);


  const navigate = useNavigate();
  const { AIToolsData } = useContext(AIContext);

  // ✅ useMemo HAMESHA upar
  const filteredTools = useMemo(() => {
    if (!Array.isArray(AIToolsData)) return [];

    return AIToolsData.filter(tool => {
      const matchesSearch = tool.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCat =
        activeCategory === "All" ||
        tool.category?.some(cat => cat.includes(activeCategory));

      return matchesSearch && matchesCat;
    });
  }, [AIToolsData, search, activeCategory]);

  // ✅ return baad me
  if (!AIToolsData || AIToolsData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400 font-bold">
        Loading AI Tools...
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
     <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
  isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
}`}>
  <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-4">
    
    {/* Top Row: Back Button + Search/Filter Title (Mobile Responsive) */}
    <div className="flex items-center justify-between gap-4">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm font-bold shadow-sm group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="hidden sm:inline">Back</span>
      </button>

      {/* Pricing Select & Filter Icon (Right Side) */}
      <div className="flex items-center gap-2">
        <select className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs md:text-sm outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm cursor-pointer">
          <option>Price: All</option>
          <option>Free</option>
          <option>Paid</option>
          <option>Freemium</option>
        </select>
        <button className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm">
          <SlidersHorizontal size={18} className="text-slate-600 dark:text-slate-400" />
        </button>
      </div>
    </div>

    {/* Bottom Row: Category Pills (Scrollable on mobile) */}
    <div className="w-full">
      {/* <div className="flex bg-white/50 dark:bg-slate-800/50 p-1 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner overflow-x-auto no-scrollbar">
        <div className="flex gap-1">
          {["All", "Artificial Intelligence", "Educational Technology", "Information Technology"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? "bg-indigo-600 text-white shadow-md scale-100" 
                  : "text-slate-500 hover:text-indigo-600 hover:bg-white dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div> */}
    </div>
    
  </div>
</header>

      <main className="max-w-7xl mx-auto px-6 pt-8 pb-24">
        
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search className="text-slate-400" size={20} />
          </div>
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search AI tools..."
            className="w-full pl-14 pr-6 py-5 bg-white dark:bg-slate-900 border-2 border-transparent shadow-xl rounded-2xl focus:border-indigo-500 outline-none text-lg transition-all"
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">
            Showing {filteredTools.length} Tools
          </h2>
          <div className="flex gap-2">
            <button className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><LayoutGrid size={18}/></button>
            <button className="p-2 text-slate-400 rounded-lg"><List size={18}/></button>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredTools.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredTools.slice(0,visibleCount).map((tool) => (
                <ToolCard key={tool._id} tool={tool} />
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800"
            >
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold">No tools found</h3>
              <p className="text-slate-500">Try adjusting your search or filters.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-20 flex flex-col items-center gap-4">
          <p className="text-sm text-slate-500 italic">Showing {filteredTools.length} curated resources</p>
       <div className=' flex gap-4'> 
        {visibleCount < filteredTools.length && (
  <button
    onClick={() => setVisibleCount(prev => prev + 6)}
    className="px-6 py-2 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-colors"
  >
    Load More Tools
  </button>
)}
          {visibleCount > 6 && (
  <button
    onClick={() => setVisibleCount(prev => prev - 6)}
    className="px-6 py-2 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-colors"
  >
    Less Tools
  </button>
)}
       </div>
          
        </div>
      </main>
    </div>
  );
}