import { motion } from "framer-motion";
import Card from "./Card";
import React, { useContext } from "react";
import { MyContext } from "../Context/RsourcesContext";
import { useNavigate } from "react-router";
import * as Icons from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();
  const { Technologyes_Data } = useContext(MyContext);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight uppercase">
            Popular Categories
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Tailored resources for every tech field
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {Technologyes_Data?.slice(0, 6).map((cat, i) => {
          const IconComponent = Icons[cat.icon] || Icons.HelpCircle;

          return (
            <motion.div
              key={cat.id || i}
              whileHover={{ y: -10 }}
              onClick={() => navigate(`/Resources`)}
              className="cursor-pointer group"
            >
              {/* h-64 fix height hai jo box ko change nahi hone degi */}
              <Card className="flex flex-col items-center justify-center h-64 p-6 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] group-hover:border-indigo-500/40 border-slate-100 dark:border-slate-800 rounded-[2.5rem] bg-white dark:bg-slate-900 relative overflow-hidden">
                
                {/* Background Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Dynamic Icon */}
                <div className={`mb-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white`}>
                  <IconComponent 
                    size={30} 
                    strokeWidth={2.2}
                    className={`${cat.color || 'text-indigo-600'} group-hover:text-white transition-colors duration-500`} 
                  />
                </div>

                {/* Category Name - Height fixed to keep alignment same */}
                <div className="h-12 flex items-center justify-center text-center">
                  <span className="font-black text-xs md:text-sm text-slate-800 dark:text-slate-200 uppercase tracking-widest line-clamp-2 px-2">
                    {cat.name}
                  </span>
                </div>
                
                {/* Decorative Indicator */}
                <div className="mt-4 flex gap-1">
                  <div className="w-1 h-1 bg-indigo-500 rounded-full group-hover:w-6 transition-all duration-500" />
                  <div className="w-1 h-1 bg-indigo-300 rounded-full" />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* ACTION BUTTONS (Dono Buttons Yahan Hain) */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-20">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/Category")}
          className="w-full sm:w-auto px-10 py-5 cursor-pointer rounded-2xl bg-indigo-600 text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
        >
          Explore All Categories
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/Compare-tools")} 
          className="w-full sm:w-auto px-10 py-5 cursor-pointer rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
        >
          Compare Tools
        </motion.button>
      </div>
    </section>
  );
};

export default Categories;