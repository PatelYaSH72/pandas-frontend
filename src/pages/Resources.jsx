"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
// Saare icons ko as a library import kiya
import * as Icons from "lucide-react";
import { ArrowLeft, ArrowRight, HelpCircle, Sparkles, Lock } from "lucide-react";
import { MyContext } from "../Context/RsourcesContext";

export default function Resources() {
  const navigate = useNavigate();
  const { Technologyes_Data } = useContext(MyContext);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (Technologyes_Data && Technologyes_Data.length > 0 && !active) {
      setActive(Technologyes_Data[0]);
    }
  }, [Technologyes_Data, active]);

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

  // Active category ka icon component nikalne ke liye
  const ActiveIcon = Icons[active.icon] || Icons.Code;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[280px_1fr] gap-12">
        
        {/* ========== LEFT SIDEBAR ========== */}
        <aside className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 h-fit sticky top-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
          <h3 className="font-extrabold mb-6 text-lg tracking-tight">Tech Categories</h3>
          <div className="space-y-2">
            {Technologyes_Data.map((cat) => {
              // Yahan String to Component convert ho raha hai
              const IconComponent = Icons[cat.icon] || HelpCircle;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActive(cat)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300
                    ${
                      active?.name === cat.name
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none translate-x-1"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                >
                  <IconComponent size={18} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </aside>

        {/* ========== RIGHT CONTENT ========== */}
        <div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-indigo-600 mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl font-black mb-4 tracking-tighter text-slate-900 dark:text-white uppercase">
              {active?.name}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-3xl mb-12 leading-relaxed">
              {active?.detailed_description}
            </p>

            <div className="space-y-16">
              {/* CHECKLIST SECTION */}
              {active?.key_concepts?.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="text-amber-500" size={20} />
                    <h2 className="text-xl font-extrabold">Mastery Checklist</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {active.key_concepts.map((item, i) => (
                      <span
                        key={i}
                        className="px-5 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-700 dark:text-slate-300 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* ROADMAP CARD */}
              <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 to-violet-700 p-8 text-white shadow-2xl">
                <div className="relative z-10 md:flex items-center justify-between gap-8">
                  <div className="max-w-md">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-4">
                      <Lock size={12} />
                      FULL ACCESS REQUIRED
                    </div>
                    <h2 className="text-3xl font-black mb-4 tracking-tight">
                      Detailed Step-by-Step Learning Path
                    </h2>
                    <p className="text-indigo-100 mb-6 font-medium">
                      Humne is category ke liye Beginner se Advanced tak ka 
                      complete interactive roadmap design kiya hai.
                    </p>
                    <button
                      onClick={() => navigate(`/Resources/${active?.slug}`)}
                      className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-indigo-600 font-black hover:bg-indigo-50 transition-all shadow-xl hover:scale-105"
                    >
                      Unlock Full Roadmap
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </section>

              {/* QUICK LINKS SECTION */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black tracking-tight">Quick Links</h2>
                  <span className="text-sm font-bold text-indigo-600">Top Picks &rarr;</span>
                </div>
                
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {active?.resources_list ? (
                    Object.entries(active.resources_list).map(([type, list]) =>
                      Array.isArray(list) &&
                      list.slice(0, 1).map((name, index) => (
                        <motion.div
                          key={`${type}-${index}`}
                          whileHover={{ y: -6 }}
                          className="group bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                            {/* Yahan humne dynamic icon use kiya hai */}
                            <ActiveIcon className="text-indigo-600" size={20} />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600/60">
                            PREVIEW {type}
                          </span>
                          <h3 className="mt-2 font-extrabold text-lg group-hover:text-indigo-600 transition-colors line-clamp-1">{name}</h3>
                          <p className="mt-2 text-sm text-slate-400 font-medium leading-relaxed">
                            Start your journey with this hand-picked {type} source.
                          </p>
                        </motion.div>
                      ))
                    )
                  ) : (
                    <div className="col-span-full py-12 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
                      <p className="text-slate-400 font-bold">No previews available.</p>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}