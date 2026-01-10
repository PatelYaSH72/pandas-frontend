"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import {
  Globe,
  Cpu,
  Database,
  Smartphone,
  Shield,
  ArrowLeft,
  ArrowRight,
  Code,
} from "lucide-react";
import { MyContext } from "../Context/RsourcesContext";

const RESOURCES = [
  {
    key: "web-development",
    technology: "Web Development",
    slug: "web-development",
    icon: Code,
    color: "text-pink-500",

    short_description:
      "Websites, web apps aur modern online systems banane ka complete process.",

    detailed_description:
      "Frontend, backend, databases, APIs, deployment aur performance optimization ka complete ecosystem.",

    key_concepts: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Databases",
      "APIs",
      "Deployment",
    ],

    resources: {
      youtube: ["CodeWithHarry", "Hitesh Choudhary", "Traversy Media"],
      documentation: ["developer.mozilla.org", "react.dev", "nodejs.org"],
      courses: ["FreeCodeCamp Web Dev", "Udemy MERN Stack"],
    },
  },

  {
    key: "ai-ml",
    technology: "AI & Machine Learning",
    slug: "ai-ml",
    icon: Cpu,
    color: "text-purple-500",
    short_description:
      "Machine learning aur AI ke fundamentals, models aur practice.",
    detailed_description:
      "Python, algorithms, datasets aur real-world AI use cases.",
    key_concepts: [
      "Python",
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Model Training",
    ],
    resources: {
      youtube: ["StatQuest", "FreeCodeCamp"],
      documentation: ["scikit-learn.org"],
      courses: ["ML by Andrew Ng"],
    },
  },
];

/* ================= PAGE ================= */
export default function Resources() {
  const navigate = useNavigate();
  const [active, setActive] = useState(RESOURCES[0]);
  const {Technologyes_Data} = useContext(MyContext)


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[280px_1fr] gap-12">
        {/* ========== LEFT SIDEBAR (CATEGORIES) ========== */}
        <aside className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 h-fit sticky top-8">
          <h3 className="font-extrabold mb-6 text-lg">Categories</h3>

          <div className="space-y-2">
            {Technologyes_Data.map((cat) => {
              const Icon = cat.icon;

              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition
                    ${
                      active.key === cat.key
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                >
                  <Icon size={18} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </aside>

        {/* ========== RIGHT CONTENT ========== */}
        <div>
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-6"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <h1 className="text-4xl font-extrabold mb-4">{active.name}</h1>

          <p className="text-slate-500 max-w-3xl mb-10">
            {active.detailed_description}
          </p>

          {/* ===== PREVIEW SECTIONS ===== */}
          <div className="space-y-10">
            {/* KEY CONCEPTS */}
            <section>
              <h2 className="text-xl font-extrabold mb-4">Key Concepts</h2>
              <div className="flex flex-wrap gap-3">
                {active.key_concepts.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-indigo-50 dark:bg-slate-800 text-sm font-bold text-indigo-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* LEARNING RESOURCES */}
            <section>
              <h2 className="text-xl font-extrabold mb-4">
                Learning Resources (Preview)
              </h2>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Object.entries(active.resources).map(([type, list], i) =>
                  list.slice(0, 2).map((name, index) => (
                    <motion.div
                      key={`${type}-${index}`}
                      whileHover={{ y: -6 }}
                      className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all"
                    >
                      <span className="text-xs font-bold uppercase text-indigo-600">
                        {type}
                      </span>
                      <h3 className="mt-2 font-extrabold text-lg">{name}</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        Beginner friendly learning resource.
                      </p>
                    </motion.div>
                  ))
                )}
              </div>
            </section>

            {/* VIEW ALL BUTTON */}
            <div>
              <button
                onClick={() => navigate(`/Resources/${active.slug}`)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition"
              >
                View all {active.name} resources
                <ArrowRight size={18} />
              </button>
              <p className="text-xs text-slate-400 mt-2">
                (Future route: /resources/{active.key})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
