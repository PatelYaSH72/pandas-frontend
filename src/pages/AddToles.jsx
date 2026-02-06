"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Plus,
  X,
  Globe,
  Info,
  Tag,
  DollarSign,
  BookOpen,
  Code,
  Image as ImageIcon,
  CheckCircle,
  Sparkles,
  ArrowLeft,
  Link2,
  Github,
  Youtube,
  FileText,
  Cpu,
  Check,
  Wand2,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AIContext } from "../Context/AitoolsContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddToles = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { token, backendUrl } = useContext(AIContext);

  const aiCategoriesList = [
    "Information Technology",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Mobile App Development",
    "Cloud Computing",
    "Cybersecurity",
    "Internet of Things (IoT)",
    "Robotics",
    "Blockchain",
    "Biotechnology",
    "Medical & Health Technology",
    "Environmental Technology",
    "Space Technology",
    "Agricultural Technology",
    "Educational Technology (EdTech)",
    "Financial Technology (FinTech)",
    "Computer Science / Software Development",
    "Networking / Telecommunications",
    "Automation & Control Systems",
    "Civil Engineering & Construction Technology",
    "Energy / Sustainable Technology",
    "Transportation Technology",
    "Media & Entertainment Technology",
    "Manufacturing / Industrial Technology",
    "Quantum Computing",
    "Clean / Green Technology",
  ];

  const [formData, setFormData] = useState({
    name: "",
    rating: 5.0,
    pricing: "Free",
    category: [],
    whatItDoes: "",
    howToUse: [""],
    techRelevance: [""],
    image:
      "" ||
      "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?semt=ais_hybrid&w=740&q=80",
    officialLink: "",
    docLink: "",
    tutorialLink: "",
    githubLink: "",
  });

  // --- LOGIC CHANGE ONLY: NOW INCLUDES RATING AUTO-SET ---
  const autoFillEverything = () => {
    if (!formData.officialLink) return;
    setIsAnalyzing(true);

    setTimeout(() => {
      const url = formData.officialLink.toLowerCase();

      // Brand Name extraction
      const domainMatch = url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/.]+)/);
      const brand = domainMatch ? domainMatch[1] : "tool";
      const cleanUrl = url.replace(/\/$/, "");

      // 1. AI RATING LOGIC (Randomly sets between 4.4 and 5.0 based on link keywords)
      let aiRating = 4.5;
      if (url.includes("ai") || url.includes("gpt") || url.includes("org")) {
        aiRating = (Math.random() * (5.0 - 4.7) + 4.7).toFixed(1);
      } else {
        aiRating = (Math.random() * (4.7 - 4.2) + 4.2).toFixed(1);
      }

      // 2. Category logic
      let suggestedCats = [];
      if (url.includes("ai") || url.includes("gpt"))
        suggestedCats.push("Artificial Intelligence", "Machine Learning");
      if (url.includes("web") || url.includes(".io"))
        suggestedCats.push("Web Development");
      if (suggestedCats.length === 0)
        suggestedCats.push("Information Technology");

      // UPDATING STATE WITHOUT CHANGING FIELD STRUCTURE
      setFormData((prev) => ({
        ...prev,
        name: prev.name || brand.charAt(0).toUpperCase() + brand.slice(1),
        rating: parseFloat(aiRating), // Rating auto-set logic added here
        docLink: prev.docLink || `${cleanUrl}/docs`,
        githubLink: prev.githubLink || `https://github.com/${brand}/${brand}`,
        tutorialLink:
          prev.tutorialLink ||
          `https://www.youtube.com/results?search_query=${brand}+tutorial`,
        image: prev.image || `https://logo.clearbit.com/${brand}.com`,
        category: Array.from(new Set([...prev.category, ...suggestedCats])),
      }));

      setIsAnalyzing(false);
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const handleRemoveField = (field, index) => {
    const list = [...formData[field]];
    list.splice(index, 1);
    setFormData({ ...formData, [field]: list });
  };

  const handleInputChange = (field, index, value) => {
    const list = [...formData[field]];
    list[index] = value;
    setFormData({ ...formData, [field]: list });
  };

  const toggleCategory = (cat) => {
    if (formData.category.includes(cat)) {
      setFormData({
        ...formData,
        category: formData.category.filter((c) => c !== cat),
      });
    } else {
      setFormData({ ...formData, category: [...formData.category, cat] });
    }
  };

  const isValidUrl = (url) => {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch (err) {
    return false;
  }
};


  const handleSubmit = async (e) => {
    
    e.preventDefault();

//     if (
//   formData.githubLink &&
//   !formData.githubLink.includes("github.com")
// ) {
//   toast.error("Please enter a valid GitHub repository link");
//   return;
// }

// if (
//   formData.tutorialLink &&
//   !(
//     formData.tutorialLink.includes("youtube.com") ||
//     formData.tutorialLink.includes("youtu.be")
//   )
// ) {
//   toast.error("Please enter a valid YouTube link");
//   return;
// }




    const linkFields = [
    { key: "officialLink", label: "Official Website" },
    { key: "docLink", label: "Documentation" },
    { key: "tutorialLink", label: "Tutorial" },
    { key: "githubLink", label: "Github" },
  ];

  for (const field of linkFields) {
    const value = formData[field.key];

    if (value && !isValidUrl(value)) {
      toast.error(`${field.label} link is not a valid URL`);
      return; // ❌ stop submit
    }
  }

    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/submit",
        formData,
        {
          headers: {
            token: token,
          },
        },
      );

      if (res.data && res.data.success === false) {
        toast.error(res.data.message || "Submission failed!");
        return;
      }
      console.log("Backend Response:", res.data);
      setShowSuccess(true);
      toast.success("Tool submitted successfully!");
    } catch (err) {
      console.error("Request failed:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Error submitting tool!");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleButtonClick = (e) => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Agar token nahi hai, to submit hone se roko aur login par bhejo
      e.preventDefault();
      navigate("/login");
    }
    // Agar token hai, to form automatically submit ho jayega (ya aap apna logic yahan likh sakte hain)
  };

  const Label = ({ children, icon: Icon }) => (
    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 mb-2 ml-1">
      {Icon && <Icon size={12} className="text-indigo-500" />}
      {children}
    </label>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] text-slate-900 dark:text-slate-100 pb-20 transition-colors duration-500 pt-30">
      <nav className="sticky top-0 z-[60] bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl   ">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-sm font-bold hover:text-indigo-600 transition-colors"
          >
            <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <ArrowLeft size={18} />
            </div>
            <span>Cancel</span>
          </button>
          <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full border border-indigo-100 dark:border-indigo-800/50">
            <Sparkles size={14} className="text-indigo-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-tighter text-indigo-600 dark:text-indigo-400">
              AI Tool Submission
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 mt-3">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black tracking-tightest mb-4"
          >
            List Your <span className="text-indigo-600 italic">Project</span>
          </motion.h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg italic">
            The AI neural network is ready to index your tool.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">
          <section className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg font-bold italic">
                01
              </div>
              <h2 className="text-2xl font-black italic">
                Identity & Taxonomy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-1">
                <Label icon={Info}>Tool Identity</Label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                  placeholder="Enter Tool Name..."
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500/50 rounded-[1.5rem] p-5 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-1">
                <Label icon={Star}>Rating</Label>
                <input
                  step="0.1"
                  max="5"
                  min="1"
                  required
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  type="number"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500/50 rounded-[1.5rem] p-5 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-1 mb-8">
              <Label icon={Link2}>Official Website Link</Label>
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  required
                  value={formData.officialLink}
                  onChange={(e) =>
                    setFormData({ ...formData, officialLink: e.target.value })
                  }
                  type="url"
                  placeholder="https://..."
                  className="flex-1 bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500/50 rounded-2xl p-5 outline-none transition-all font-medium"
                />
                {/* <button
                  type="button"
                  onClick={autoFillEverything}
                  disabled={!formData.officialLink || isAnalyzing}
                  className="bg-indigo-600 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 disabled:opacity-50 transition-all shadow-lg min-w-[140px]"
                >
                  {isAnalyzing ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Wand2 size={18} />
                  )}
                  <span className="text-xs uppercase tracking-widest">
                    {isAnalyzing ? "Analyzing" : "Auto Fill"}
                  </span>
                </button> */}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-1">
                <Label icon={DollarSign}>Pricing Tier</Label>
                <select
                  value={formData.pricing}
                  onChange={(e) =>
                    setFormData({ ...formData, pricing: e.target.value })
                  }
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500/50 rounded-[1.5rem] p-5 outline-none transition-all font-medium appearance-none"
                >
                  <option>Free</option>
                  <option>Freemium</option>
                  <option>Paid</option>
                  <option>Open Source</option>
                </select>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Label icon={Tag}>Category Selection</Label>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[2rem] border-2 border-transparent focus-within:border-indigo-500/50 transition-all max-h-[300px] overflow-y-auto custom-scrollbar">
                <div className="flex flex-wrap gap-2">
                  {aiCategoriesList.map((cat, i) => {
                    const isSelected = formData.category.includes(cat);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleCategory(cat)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                          isSelected
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                            : "bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-500"
                        }`}
                      >
                        {isSelected && <Check size={14} />}
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-1">
              <Label icon={Globe}>Executive Summary</Label>
              <textarea
                required
                value={formData.whatItDoes}
                onChange={(e) =>
                  setFormData({ ...formData, whatItDoes: e.target.value })
                }
                placeholder="Describe the core value proposition..."
                rows="4"
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500/50 rounded-[1.5rem] p-5 outline-none resize-none font-medium"
              ></textarea>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg italic">
                02
              </div>
              <h2 className="text-2xl font-black italic">Technical Scope</h2>
            </div>
            <div className="space-y-6 mb-12">
              <Label icon={BookOpen}>Step-by-Step Guide</Label>
              {formData.howToUse.map((step, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <span className="text-[10px] font-black text-slate-400 w-4 italic">
                    0{index + 1}
                  </span>
                  <input
                    value={step}
                    onChange={(e) =>
                      handleInputChange("howToUse", index, e.target.value)
                    }
                    placeholder="Actionable step..."
                    className="flex-1 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 outline-none font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveField("howToUse", index)}
                    className="p-2 text-slate-400 hover:text-red-500"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddField("howToUse")}
                className="text-xs font-black text-indigo-600 ml-8"
              >
                + Add Step
              </button>
            </div>

            <div className="space-y-6">
              <Label icon={Cpu}>Tech Relevance / Stack</Label>
              {formData.techRelevance.map((tech, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <span className="text-[10px] font-black text-slate-400 w-4 italic">
                    #
                  </span>
                  <input
                    value={tech}
                    onChange={(e) =>
                      handleInputChange("techRelevance", index, e.target.value)
                    }
                    placeholder="e.g. React..."
                    className="flex-1 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 outline-none font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveField("techRelevance", index)}
                    className="p-2 text-slate-400 hover:text-red-500"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddField("techRelevance")}
                className="text-xs font-black text-indigo-600 ml-8"
              >
                + Add Tech
              </button>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-lg italic">
                03
              </div>
              <h2 className="text-2xl font-black italic">Assets & Links</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-1">
                <Label icon={ImageIcon}>Cover Image URL</Label>
                <input
                  value={formData.image}
                  placeholder="https://..."
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  type="url"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>
              <div className="space-y-1">
                <Label icon={FileText}>Documentation</Label>
                <input
                  value={formData.docLink}
                  placeholder="https://..."
                  onChange={(e) =>
                    setFormData({ ...formData, docLink: e.target.value })
                  }
                  type="url"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>
              <div className="space-y-1">
                <Label icon={Youtube}>Video Tutorial</Label>
                <input
                  value={formData.tutorialLink}
                  placeholder="https://..."
                  onChange={(e) =>
                    setFormData({ ...formData, tutorialLink: e.target.value })
                  }
                  type="url"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>
              <div className="space-y-1">
                <Label icon={Github}>Github Repository</Label>
                <input
                  value={formData.githubLink}
                  placeholder="https://..."
                  onChange={(e) =>
                    setFormData({ ...formData, githubLink: e.target.value })
                  }
                  type="url"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 font-medium"
                />
              </div>
            </div>
          </section>

          <div className="flex flex-col items-center py-10">
            <button
              type="submit" // Form submit karne ke liye
              onClick={handleButtonClick} // Check karne ke liye
              disabled={isSubmitting}
              className="group relative px-20 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-black uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-all overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center gap-3">
                {isSubmitting ? (
                  <Sparkles className="animate-spin" size={20} />
                ) : (
                  <Send size={20} />
                )}
                {isSubmitting ? "Processing..." : "Dispatch Tool"}
              </span>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </form>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-6 text-center"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-white dark:bg-slate-900 p-12 rounded-[4rem] max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl"
              >
                <div className="w-20 h-20 bg-emerald-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/20">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-black mb-4 tracking-tight italic">
                  DATA DISPATCHED
                </h2>
                <button
                  onClick={() => navigate("/")}
                  className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black uppercase tracking-widest shadow-lg shadow-indigo-500/30"
                >
                  Continue
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AddToles;
