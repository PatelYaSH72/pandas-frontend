"use client";
import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Star, ExternalLink, Scale, Search, Trash2, ArrowLeft } from 'lucide-react';
import { AIContext } from '../Context/AitoolsContext';
import { useNavigate } from 'react-router';

const Compare = () => {
  const { AIToolsData } = useContext(AIContext);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [AiData, setAIData] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(()=>{
    setAIData(AIToolsData)
  },[AIToolsData])

  const toggleTool = (_id) => {
    if (selectedIds.includes(_id)) {
      setSelectedIds(selectedIds.filter(item => item !== _id));
    } else {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, _id]);
        setSearchQuery("");
      } else {
        alert("Max 4 tools allowed");
      }
    }
  };

  const selectedTools = AiData?.filter(tool => selectedIds.includes(tool._id));
  
  const searchResults = searchQuery.length > 1 
    ? AiData?.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !selectedIds.includes(tool._id)
      ).slice(0, 5) 
    : [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 pt-10">
      
      {/* --- Top Section --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
       <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <ArrowLeft size={18} /> Back
        </button>
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-widest mb-4"
          >
            <Scale size={14} /> TOOL COMPARISON
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Analyze <span className="text-indigo-600">AI Side-by-Side</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Select up to 4 tools to compare their pricing, features, and capabilities instantly.
          </p>
        </div>

        {/* --- Search Box --- */}
        <div className="max-w-xl mx-auto relative z-50 px-2">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search tools (e.g. Napkin AI, ChatGPT)..."
              className="w-full h-14 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all text-slate-900 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Dropdown Results */}
          <AnimatePresence>
            {searchResults.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                className="absolute w-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800"
              >
                {searchResults.map(tool => (
                  <button 
                    key={tool._id}
                    onClick={() => toggleTool(tool._id)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left"
                  >
                    <img src={tool.image} alt={tool.name} className="w-10 h-10 rounded-lg object-cover bg-slate-200" />
                    <div className="flex-1">
                      <p className="font-bold text-sm text-slate-900 dark:text-white">{tool.name}</p>
                      <p className="text-xs text-slate-500">{tool.pricing}</p>
                    </div>
                    <Plus size={18} className="text-indigo-600" />
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- Active Selection Pills --- */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {selectedTools?.map(tool => (
            <div key={tool._id} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md text-sm font-semibold">
              {tool.name}
              <button onClick={() => toggleTool(tool._id)} className="hover:bg-indigo-500 rounded-full p-0.5">
                <X size={14} />
              </button>
            </div>
          ))}
          {selectedIds.length > 0 && (
            <button 
              onClick={() => setSelectedIds([])}
              className="flex items-center gap-1 px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-full text-xs font-bold transition-all"
            >
              <Trash2 size={14} /> Clear All
            </button>
          )}
        </div>
      </section>

      {/* --- Comparison Table --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        {selectedIds.length > 0 ? (
          <div className="relative overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  {/* Left Column (Sticky) */}
                  <th className="sticky left-0 z-10 p-6 md:p-8 text-left bg-slate-50 dark:bg-slate-900 min-w-[150px] md:min-w-[200px]">
                    <span className="text-indigo-600 font-black text-sm uppercase tracking-wider">Features</span>
                  </th>
                  {/* Tools Header */}
                  {selectedTools.map(tool => (
                    <th key={tool.id} className="p-6 md:p-8 text-center min-w-[220px] md:min-w-[280px]">
                      <div className="relative inline-block mb-4">
                        <img src={tool.image} alt="" className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-md mx-auto" />
                        <button 
                          onClick={() => toggleTool(tool._id)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg"
                        >
                          <X size={12} />
                        </button>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">{tool.name}</h3>
                      <div className="flex items-center justify-center gap-1.5 mt-2 text-amber-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-sm font-bold text-slate-600 dark:text-slate-400">{tool.rating}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* --- Pricing Row --- */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="sticky left-0 z-10 p-6 font-bold text-sm bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400">Pricing Model</td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="p-6 text-center font-bold text-emerald-600 dark:text-emerald-400">
                      {tool.pricing}
                    </td>
                  ))}
                </tr>

                {/* --- Summary Row --- */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="sticky left-0 z-10 p-6 font-bold text-sm bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400">What it does</td>
                  {selectedTools.map(tool => (
                    <td key={tool.id} className="p-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-center px-8">
                      {tool.whatItDoes}
                    </td>
                  ))}
                </tr>

                {/* --- Category Row --- */}
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="sticky left-0 z-10 p-6 font-bold text-sm bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400">Categories</td>
                  {selectedTools.map(tool => (
                    <td key={tool._id} className="p-6 text-center">
                      <div className="flex flex-wrap justify-center gap-2">
                        {tool.category.slice(0, 2).map(cat => (
                          <span key={cat} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-semibold text-slate-500">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* --- Action Row --- */}
                <tr className="bg-slate-50/30 dark:bg-slate-800/10">
                  <td className="sticky left-0 z-10 p-6 font-bold text-sm bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 italic">Action</td>
                  {selectedTools.map(tool => (
                    <td key={tool._id} className="p-8 text-center">
                      <div 

                        onClick={()=>navigate(`/Ai-tools/${tool._id}`)} 
                        rel="noreferrer"
                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all inline-flex items-center gap-2 shadow-lg shadow-indigo-200 dark:shadow-none cursor-pointer"
                      >
                        View more detail <ExternalLink size={14} />
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 md:py-32 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[3rem] text-center px-6"
          >
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6 text-slate-400">
               <Scale size={32} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Ready to compare?</h2>
            <p className="text-slate-500 max-w-xs">Start by searching for AI tools in the box above. You can add up to 4 tools.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Compare;