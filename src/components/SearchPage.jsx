import { useState, useContext, useEffect } from "react";
import { semanticSearch } from "../api/searchApi";
import { AIContext } from "../Context/AitoolsContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";

export default function SearchPage({ setIsSearchOpen }) {
  const { backendUrl } = useContext(AIContext);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!query.trim()) return;
    setLoading(true);

    const data = await semanticSearch(query, backendUrl);
    const mergedResults = [
      ...(data.resources || []).map((res) => ({ ...res, type: "resource" })),
      ...(data.tools || []).map((tool) => ({ ...tool, type: "tool" })),
    ];

    setResults(mergedResults);
    setLoading(false);
  };

  const tools = results.filter((item) => item.type === "tool");
  const resources = results.filter((item) => item.type === "resource");

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const timeout = setTimeout(() => {
      handleSearch({ preventDefault: () => {} });
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="w-full bg-transparent flex flex-col">
      
      {/* 🔍 Search Input Area - Fixed at Top */}
      <div className="relative group px-6 py-4">
        <div className="absolute left-11 top-1/2 -translate-y-1/2 text-indigo-500 z-10 pointer-events-none group-focus-within:scale-110 transition-transform duration-300">
          <Icons.Search size={22} strokeWidth={2.5} />
        </div>

        <input
          autoFocus
          type="text"
          placeholder="Search AI tools, resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full py-5 pl-14 pr-14 rounded-2xl
            bg-white/[0.03] border border-white/10
            text-white placeholder:text-slate-500
            focus:outline-none focus:border-indigo-500/50 
            focus:bg-white/[0.06] focus:ring-4 focus:ring-indigo-500/10
            transition-all duration-500 text-lg tracking-tight
            backdrop-blur-sm
          "
        />
      </div>

      {/* 🚀 SCROLLABLE CONTENT AREA */}
      <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden px-6 pb-8 custom-scrollbar">
        
        {/* Loading Spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <Icons.Loader2 size={32} className="text-indigo-500 animate-spin" />
            <p className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">
              Curating best matches...
            </p>
          </div>
        )}

        {/* 🔧 AI TOOLS GRID */}
        {tools.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6 sticky top-0 bg-[#0A0C10]/80 backdrop-blur-md z-10 py-2">
              <h2 className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase flex items-center gap-2">
                <Icons.Cpu size={14} className="text-indigo-500" /> AI Tools
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {tools.slice(0,5).map((tool, idx) => (
                <motion.div
                  key={tool._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="group bg-white/[0.02] border border-white/5 rounded-2xl p-3 flex items-center justify-between hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex gap-3 items-center">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-12 h-12 rounded-xl object-cover border border-white/10"
                    />
                    <div>
                      <h3 className="font-bold text-white text-sm group-hover:text-indigo-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 line-clamp-1 max-w-[150px]">
                        {tool.whatItDoes}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/Ai-tools/${tool._id}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-indigo-600 text-white rounded-xl active:scale-95 transition-all"
                  >
                    View
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 📚 RESOURCES LIST */}
        {resources.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6 sticky top-0 bg-[#0A0C10]/80 backdrop-blur-md z-10 py-2">
              <h2 className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase flex items-center gap-2">
                <Icons.BookOpen size={14} className="text-emerald-500" /> Learning Path
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="space-y-2">
              {resources.slice(0,5).map((res, idx) => {
                const IconComponent = Icons[res.icon] || Icons.HelpCircle;
                return (
                  <motion.div
                    key={res._id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="group flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-emerald-500/20 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">{res.name}</h3>
                        <p className="text-[10px] text-slate-500 uppercase font-medium">
                          {res.short_description}
                        </p>
                      </div>
                    </div>
                    <Link
                      to={`/resources/${res.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="p-2 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white text-slate-400 transition-all"
                    >
                      <Icons.ArrowUpRight size={18} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && query && results.length === 0 && (
          <div className="text-center py-10">
            <Icons.SearchX size={40} className="mx-auto text-slate-700 mb-3" />
            <p className="text-slate-500 text-sm font-medium">No results found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
}