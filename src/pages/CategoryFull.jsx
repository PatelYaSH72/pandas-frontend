"use client";
import React, { useContext, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Star,
  LayoutGrid,
  CheckCircle2,
  Search,
  Filter,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AIContext } from "../Context/AitoolsContext";
import { MyContext } from "../Context/RsourcesContext";
import { useEffect } from "react";

const CategoryFull = () => {
  const { AIToolsData } = useContext(AIContext);
    
  const [AiToolData, setAIToolData] = useState(null)
  
  const { TechnologyesName } = useContext(MyContext);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    setAIToolData(AIToolsData)
  },[AIToolsData])

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // Filter Categories based on search
  const filteredCategories = useMemo(() => {
    return TechnologyesName.filter((cat) =>
      cat.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [TechnologyesName, searchQuery]);

  // Filter Tools based on selected category
  const filteredTools = selectedCategory
    ? AiToolData?.filter((tool) => tool.category.includes(selectedCategory))
    : AiToolData;

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pt-20">
      {/* --- SIDEBAR: Fixed on Desktop, Hidden on Mobile (Optional Toggle) --- */}
      <aside className="w-80 hidden lg:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl sticky top-0 h-screen p-6">
        <div className="flex items-center gap-2 mb-8 px-2">
          <Filter className="text-indigo-600" size={20} />
          <h2 className="font-bold text-xl tracking-tight text-slate-100">
            Filters
          </h2>
        </div>

        {/* Category Search */}
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full bg-slate-100 text-slate-100 dark:bg-slate-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category List */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="space-y-1">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                !selectedCategory
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              }`}
            >
              <span>All Resources</span>
              <span className="opacity-60">{AiToolData?.length}</span>
            </button>

            {filteredCategories.map((cat) => {
              const count = AiToolData?.filter((t) =>
                t.category.includes(cat)
              ).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <span className="truncate">{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                      selectedCategory === cat
                        ? "bg-white/20"
                        : "bg-slate-200 dark:bg-slate-800"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-6 cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest text-xs uppercase">
              Curated Collection
            </span>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mt-2">
              {selectedCategory || "Explore All Tools"}
            </h1>
          </div>

          <AnimatePresence>
            {selectedCategory && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={() => setSelectedCategory(null)}
                className="group flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all text-sm font-bold text-slate-600 dark:text-slate-300"
              >
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Reset View
              </motion.button>
            )}
          </AnimatePresence>
        </header>

        {/* Tools Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools?.map((tool) => (
              <motion.div
                key={tool._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-colors group"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-medium">
                      Click to view details
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold group-hover:text-indigo-600 transition-colors text-slate-100">
                    {tool.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 leading-relaxed line-clamp-2">
                    {tool.whatItDoes}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-1.5">
                      <Star
                        size={14}
                        className="text-orange-400 fill-orange-400"
                      />
                      <span className="text-sm font-bold text-slate-100">
                        {tool.rating}
                      </span>
                    </div>
                    <Link
                      to={`/Ai-Tools/${tool._id}`}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2 text-slate-100"
                    >
                      Detail <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredTools?.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-slate-400">
            <LayoutGrid size={64} strokeWidth={1} className="mb-4 opacity-20" />
            <p className="text-xl font-medium">
              No results found in this category
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryFull;
