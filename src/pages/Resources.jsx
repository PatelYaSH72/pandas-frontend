"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Lock,
  ChevronRight,
  LayoutGrid,
  X,
  Search // Search icon for better UX
} from "lucide-react";
import { MyContext } from "../Context/RsourcesContext";

export default function Resources() {
  const navigate = useNavigate();
  const { Technologyes_Data, toolname, setToolname } = useContext(MyContext);
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (Technologyes_Data && Technologyes_Data.length > 0 && !active) {
      setActive(Technologyes_Data[0]);
      setToolname((prev) => {
        const newNames = Technologyes_Data
          .map((tech) => tech.name)
          .filter((name) => !prev.includes(name));
        return [...prev, ...newNames];
      });
    }
  }, [Technologyes_Data, active, setToolname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!active) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const handleViewDetails = (slug) => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
    else navigate(`/Resources/${slug}`);
  };

  const ActiveIcon = Icons[active.icon] || Icons.Code;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-20 pb-10">
      
      {/* ========== MOBILE SELECTOR BUTTON ========== */}
      <div className="lg:hidden sticky top-[72px] z-40 px-4 mb-6">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="w-full flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 rounded-2xl shadow-xl shadow-indigo-500/10 active:scale-[0.98] transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-600/30">
              <ActiveIcon size={20} />
            </div>
            <div className="text-left">
              <p className="text-[9px] font-black uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400">Current Category</p>
              <p className="text-sm font-extrabold tracking-tight">{active.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[10px] font-bold">Browse All</span>
            <LayoutGrid size={18} />
          </div>
        </button>
      </div>

      {/* ========== MOBILE DRAWER MENU ========== */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-slate-950 lg:hidden flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
              <div>
                <h2 className="text-xl font-black tracking-tight">Tech Library</h2>
                <p className="text-xs text-slate-500 font-bold">Select a topic to start</p>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-slate-200 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-300 active:scale-90 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 gap-2 no-scrollbar">
              {Technologyes_Data.map((cat) => {
                const IconComponent = Icons[cat.icon] || HelpCircle;
                const isActive = active?.name === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => {
                      setActive(cat);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all
                      ${isActive 
                        ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20" 
                        : "bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400"}`}
                  >
                    <div className={`p-2.5 rounded-xl ${isActive ? "bg-white/20" : "bg-white dark:bg-slate-800 shadow-sm"}`}>
                      <IconComponent size={20} className={isActive ? "text-white" : "text-indigo-600"} />
                    </div>
                    <span className="font-bold text-sm tracking-tight">{cat.name}</span>
                    {isActive && <motion.div layoutId="activeDot" className="ml-auto w-2 h-2 bg-white rounded-full" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-[280px_1fr] gap-10">
        
        {/* ========== DESKTOP SIDEBAR ========== */}
        <aside className="hidden lg:block h-[calc(100vh-140px)] sticky top-28 overflow-y-auto no-scrollbar pr-2">
          <div className="space-y-6">
            <div className="px-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-600 mb-1">
                Technology
              </h3>
              <p className="text-xl font-black tracking-tighter">Explorer</p>
            </div>

            <div className="space-y-1.5">
              {Technologyes_Data.map((cat) => {
                const IconComponent = Icons[cat.icon] || HelpCircle;
                const isActive = active?.name === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActive(cat)}
                    className={`w-full flex items-center justify-between group px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200
                      ${isActive
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 translate-x-1"
                        : "hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-slate-500 dark:text-slate-400 hover:text-indigo-600"
                      }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-white/20" : "bg-slate-100 dark:bg-slate-800 group-hover:bg-white"}`}>
                        <IconComponent size={18} className={isActive ? "text-white" : "text-indigo-500"} />
                      </div>
                      <span className="tracking-tight">{cat.name}</span>
                    </div>
                    <ChevronRight size={14} className={`transition-transform duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ========== MAIN CONTENT AREA ========== */}
        <main className="min-w-0 pt-9">
          <button
            onClick={() => navigate("/")}
            className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Header */}
              <div className="mb-14">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-[2rem] bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-600/40">
                    <ActiveIcon size={32} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-indigo-600 mb-1">
                      <Sparkles size={14} />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Mastery Path</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                      {active?.name}
                    </h1>
                  </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                  {active?.detailed_description}
                </p>
              </div>

              {/* Your existing sections (Checklist, Roadmap, Quicklinks) stay here */}
              <div className="space-y-16">
                 {/* Checklist Section */}
                 {active?.key_concepts?.length > 0 && (
                   <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
                      <div className="pt-2">
                        <h2 className="text-sm font-black uppercase tracking-widest text-slate-400">Key Concepts</h2>
                        <p className="text-xs font-bold text-slate-400/60 mt-1">Must learn topics</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {active.key_concepts.map((item, i) => (
                          <span key={i} className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-bold shadow-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                   </div>
                 )}

                 {/* Premium Roadmap Section */}
                 <section className="relative group overflow-hidden rounded-[3rem] bg-indigo-600 p-1 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                    <div className="bg-slate-950 rounded-[2.9rem] p-10 md:p-16 overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/30 blur-[80px] -mr-20 -mt-20 group-hover:bg-indigo-600/50 transition-all duration-700" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 text-indigo-500 mb-6">
                          <Lock size={16} />
                          <span className="text-xs font-black uppercase tracking-[0.3em]">Curated Content</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter max-w-md leading-none">
                          Ready to master {active.name}?
                        </h2>
                        <button 
                          onClick={() => handleViewDetails(active?.slug)}
                          className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-indigo-600 text-white font-black hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-600/20"
                        >
                          View Full Roadmap
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                 </section>

              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}