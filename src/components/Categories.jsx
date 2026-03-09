import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as Icons from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${backendUrl}/api/user/categoryranking-data`);
        const data = await res.json();
        if (data.success) setCategories(data.data);
      } catch (error) {
        console.error("Category Fetch Error:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleNavigate = (slug) => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
    navigate(`/Resources/${slug}`);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col mb-16">
        <h2 className="text-[10px] font-black text-indigo-500 tracking-[0.4em] uppercase mb-4">
          Tailored innovation for every tech field
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
          Popular Categories
        </h3>
      </div>

      {/* 🛠️ REDESIGNED GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        {/* 🔥 LARGE FEATURED CARD (First Item) */}
        {categories[0] && (
          <motion.div
            whileHover={{ y: -8 }}
            onClick={() => handleNavigate(categories[0].slug)}
            className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-[3rem] bg-[#0A0C10] border border-white/5 p-12 flex flex-col justify-between min-h-[500px]"
          >
            {/* Ambient Background Graphic */}
            <div className="absolute right-[-10%] top-[-5%] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
               {React.createElement(Icons[categories[0].icon] || Icons.Zap, { size: 450 })}
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 mb-10 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                {React.createElement(Icons[categories[0].icon] || Icons.Zap, { size: 40 })}
              </div>
              <h4 className="text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                {categories[0].name}
              </h4>
              <p className="text-slate-500 text-lg font-medium tracking-wide max-w-sm">
                Explore curated {categories[0].name} roadmaps, tools, and advanced learning paths.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-6">
               <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-black text-slate-300 uppercase tracking-widest">
                  <Icons.Star size={14} className="text-amber-400 fill-amber-400" />
                  {categories[0].averageRating} / 5
               </div>
               <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                 View Path →
               </span>
            </div>
          </motion.div>
        )}

        {/* 🛠️ COMPACT GRID CARDS (Remaining Items) */}
        {categories.slice(1, 7).map((cat, i) => {
          const IconComponent = Icons[cat.icon] || Icons.HelpCircle;
          return (
            <motion.div
              key={cat._id || i}
              whileHover={{ y: -8, borderColor: "rgba(99, 102, 241, 0.3)" }}
              onClick={() => handleNavigate(cat.slug)}
              className="group cursor-pointer bg-[#0A0C10] border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-6 p-5 rounded-2xl bg-white/[0.03] text-slate-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                <IconComponent size={32} strokeWidth={1.5} />
              </div>
              <span className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-4 leading-tight">
                {cat.name}
              </span>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <Icons.Star size={12} className="text-amber-500/50" />
                {cat.averageRating} Rating
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-24">
        <button 
          onClick={() => navigate("/Category")}
          className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
        >
          Explore All Categories
        </button>
        <button 
          onClick={() => navigate("/Compare-tools")}
          className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl transition-all"
        >
          Compare Tools
        </button>
      </div>
    </section>
  );
};

export default Categories;