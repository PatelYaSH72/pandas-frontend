import {
  Search,
  Code,
  Brain,
  Database,
  Smartphone,
  Palette,
  ShieldCheck,
  ArrowRight,
  Plus,
  Github,
  Twitter,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import Card from "./Card";
import React, { useContext } from "react";
import { MyContext } from "../Context/RsourcesContext";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate();

  const { Technologyes_Data } = useContext(MyContext);

  



  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Popular Categories
          </h2>
          <p className="text-slate-500">Tailored resources for every field</p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {Technologyes_Data.slice(0, 6).map((cat, i) => {
          const Icon = cat.img; // ✅ FIX HERE

          return (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cursor-pointer"
            >
              <Card className="flex flex-col items-center text-center gap-4 hover:border-indigo-200 dark:hover:border-indigo-800">
                {/* Icon */}
                <div
                  className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-800 ${cat.color}`}
                >
                  {Icon && <Icon size={32} />}
                </div>

                {/* Category Name */}
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {cat.name}
                </span>

                {/* Buttons */}
              </Card>
            </motion.div>
          );
        })}
        <div className="flex justify-center gap-4 mt-10 col-span-full">
          <button
            onClick={() => navigate("/Category")}
            className="w-full sm:w-auto text-lg px-8 py-3 cursor-pointer rounded-xl bg-indigo-600 text-white hover:scale-105 transition"
          >
            Explore Category
          </button>

          <button onClick={() => navigate("/Compare-tools")} className="w-full sm:w-auto text-lg px-8 py-3 cursor-pointer rounded-xl border border-indigo-500 text-indigo-600 hover:scale-105 transition">
            Compare Tools
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
