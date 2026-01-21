"use client";
import React, { useState, useEffect, useContext } from "react";
import {
  Star,
  ExternalLink,
  Github,
  Heart,
  Menu,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import ResourceList from "../components/ResourceList";
import { useNavigate } from "react-router";
import { MyContext } from "../Context/RsourcesContext";
import { useParams } from "react-router";

/* ================= COMPONENT ================= */
export default function ReasourcesAll() {

  const {slug} = useParams()

  const [resorceData, SetResorceData] = useState(null)

  console.log(slug);
  

  const {Technologyes_Data} = useContext(MyContext)

  const technologyData = Technologyes_Data?.find(
  (item) => item.slug === slug
);

  useEffect(() => {
  const technologyData = Technologyes_Data?.find((item) => item.slug === slug);
  if (technologyData) {
    SetResorceData(technologyData);
  }
}, [slug, Technologyes_Data]);

  console.log(Technologyes_Data[0].category);
  

  const [bookmarked, setBookmarked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTOC, setActiveTOC] = useState("");
  const [level, setLevel] = useState("beginner");
  const data = resorceData?.learningRoadmapData?.[level];
  const navigate = useNavigate();
 const stepData = resorceData?.detailedStepByStepLearning?.[level];



  //  ----- slug req me jayega slug se data aayega ohk -----
  // console.log(learningRoadmapData)

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarked(bookmarks.includes(resorceData?.id));
  }, []);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const updated = bookmarked
      ? bookmarks.filter((id) => id !== resorceData?.id)
      : [...bookmarks, resorceData?.id];
    localStorage.setItem("bookmarks", JSON.stringify(updated));
    setBookmarked(!bookmarked);
  };

  const copyPrompt = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) setActiveTOC(sec.id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-500`}>
      {/* TOC Floating */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-20 left-5 hidden md:block z-50"
      >
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border shadow-lg space-y-2 w-40">
          <h4 className="font-bold mb-2 text-indigo-600">Contents</h4>
          {[
            "hero",
            "how-to-use",
            "roadmap",
            "related-tools",
            "resources",
            "use-cases",
            "reviews",
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block text-sm hover:text-green-500 flex items-center gap-1 transition-colors ${
                activeTOC === id
                  ? "text-green-500 font-semibold"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              <ChevronRight size={14} /> {id.replace("-", " ").toUpperCase()}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Dark Mode Toggle */}
      <div
        className="fixed top-5 right-5 flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded-2xl shadow-lg cursor-pointer z-50 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        <Menu size={20} className="text-indigo-600" />
        <span className="text-sm">{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </div>

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 px-6 py-14">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex items-center mb-8">
            <button
              onClick={() => navigate("/Resources")}
              className="flex items-center gap-2 text-sm font-semibold
               text-slate-600 dark:text-slate-300
               hover:text-indigo-600 transition-all"
            >
              <ArrowLeft size={18} />
              Back
            </button>
          </div>

          {/* HERO */}
          <motion.section
            id="hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600">
                {resorceData?.name}
              </h1>
              <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
                {resorceData?.whatItDoes}
              </p>

              <div className="flex flex-wrap gap-3 mt-4 items-center">
                <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                  <Star size={16} /> {resorceData?.rating}
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-medium">
                  {resorceData?.pricing}
                </span>
                {resorceData?.category?.map((cat, i) => (
                  <span
                    key={cat.name}
                    className="px-3 py-1 rounded-full bg-green-100 text-green-600 cursor-pointer hover:bg-green-200 hover:text-green-700 transition"
                  >
                    {cat.label} 
                  </span>
                ))}
                <button
                  onClick={toggleBookmark}
                  className="ml-auto text-red-500 flex items-center gap-1 transition hover:scale-105"
                >
                  <Heart className={`${bookmarked ? "fill-red-500" : ""}`} />{" "}
                  {bookmarked ? "Bookmarked" : "Bookmark"}
                </button>
              </div>

              <div className="mt-4 flex gap-4 flex-wrap">
                {resorceData?.officialLink !== "N/A" ? (
                  <a
                    href={resorceData?.officialLink}
                    target="_blank"
                    className="flex items-center gap-1 px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition shadow-md"
                  >
                    <ExternalLink /> Visit Official
                  </a>
                ) : (
                  <span className="px-5 py-2 rounded-xl bg-gray-300 text-gray-600 font-medium">
                    Official Coming Soon
                  </span>
                )}
                {resorceData?.githubLink !== "N/A" ? (
                  <a
                    href={resorceData?.githubLink}
                    target="_blank"
                    className="flex items-center gap-1 px-5 py-2 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-900 transition shadow-md"
                  >
                    <Github /> GitHub
                  </a>
                ) : (
                  <span className="px-5 py-2 rounded-xl bg-gray-300 text-gray-600 font-medium">
                    GitHub Coming Soon
                  </span>
                )}
              </div>
            </div>
          </motion.section>

          {/* HOW TO USE - 3 Steps */}
          <motion.section
            id="how-to-use"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-purple-600">
              How to Use
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <motion.details
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <summary className="font-semibold text-lg cursor-pointer">
                  Step 1: Define Your Goal & Craft an Effective Prompt
                </summary>
                <ul className="mt-3 pl-6 list-decimal text-slate-700 dark:text-slate-300 space-y-3">
                  <li>
                    <strong>Clarify Your Objective:</strong> Know exactly what
                    you want the AI to do. Specify task type: writing,
                    summarizing, coding, content creation, etc.
                  </li>
                  <li>
                    <strong>Be Specific:</strong> Include context, audience,
                    tone, and format. Example: "Write a 500-word blog on AI in
                    healthcare with examples."
                  </li>
                  <li>
                    <strong>Break Complex Tasks:</strong> Split multi-part tasks
                    into smaller instructions for better AI performance.
                  </li>
                  <li>
                    <strong>Provide Examples:</strong> Giving example outputs
                    improves accuracy and clarity.
                  </li>
                </ul>
              </motion.details>

              {/* Step 2 */}
              <motion.details
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <summary className="font-semibold text-lg cursor-pointer">
                  Step 2: Generate & Review Output
                </summary>
                <ul className="mt-3 pl-6 list-decimal text-slate-700 dark:text-slate-300 space-y-3">
                  <li>
                    <strong>Generate the Output:</strong> Click 'Generate' or
                    equivalent action in the AI tool.
                  </li>
                  <li>
                    <strong>Careful Review:</strong> Check for errors,
                    inconsistencies, missing info, or improvements.
                  </li>
                  <li>
                    <strong>Iterate:</strong> Modify the prompt or settings if
                    the output isn’t satisfactory. Repeat until you get desired
                    quality.
                  </li>
                  <li>
                    <strong>Export & Save:</strong> Save results in desired
                    format (text, Markdown, JSON, code). Keep track of effective
                    prompts for future reuse.
                  </li>
                </ul>
              </motion.details>

              {/* Step 3 */}
              <motion.details
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl border shadow-md hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <summary className="font-semibold text-lg cursor-pointer">
                  Step 3: Choose Model & Settings
                </summary>
                <p className="mt-2 text-slate-700 dark:text-slate-300 mb-3">
                  Selecting the right AI model and configuring its settings
                  properly is crucial for high-quality results.
                </p>
                <ul className="list-decimal pl-6 space-y-3 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>Choose the Appropriate Model:</strong> Match model
                    to task: creative, coding, or reasoning tasks. High
                    creativity for blogs, accuracy for coding.
                  </li>
                  <li>
                    <strong>Adjust Creativity (Temperature):</strong> Higher
                    values = more creative/unpredictable. Lower = precise &
                    logical.
                  </li>
                  <li>
                    <strong>Set Response Length & Format:</strong> Decide max
                    length, format (bullet points, code, Markdown, JSON) for
                    structured output.
                  </li>
                  <li>
                    <strong>Enable Advanced Features:</strong> Multi-step
                    reasoning, workflow automation, API integrations for complex
                    tasks.
                  </li>
                  <li>
                    <strong>Use Context & Examples:</strong> More context
                    improves results. Example: “Generate JS function to sort
                    objects by age, with comments.”
                  </li>
                  <li>
                    <strong>Iterate & Refine:</strong> Review output, tweak
                    prompts, try different models if needed.
                  </li>
                  <li>
                    <strong>Save & Export:</strong> Export in desired format,
                    track effective prompts, and optimize workflow for
                    productivity.
                  </li>
                </ul>
                <p className="mt-4 text-slate-600 dark:text-slate-400 italic">
                  Tip: Start simple and gradually increase complexity.
                  Experiment with multiple models and settings to understand AI
                  behavior.
                </p>
              </motion.details>
            </div>
          </motion.section>

          {/* ROADMAP */}

          {/* REVIEWS */}
          <section id="reviews">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-purple-600">
              User Reviews
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              No reviews yet. Coming Soon!
            </p>
          </section>

          {/* ================= LEARNING ROADMAP (NEW) ================= */}
          <section className="mt-20">
            <h2 className="text-3xl font-extrabold text-indigo-600 mb-6">
              {resorceData?.name} Learning Roadmap
            </h2>

            {/* Level Selector */}
            <section className="mt-20" id="roadmap">
              <div className="flex flex-wrap gap-4 mb-10">
                {["beginner", "intermediate", "advanced"].map((lvl) => (
                  <motion.button
                    key={lvl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLevel(lvl)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300
        ${
          level === lvl
            ? "bg-indigo-600 text-white shadow-lg"
            : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
        }`}
                  >
                    {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </motion.button>
                ))}
              </div>
            </section>

            <motion.div
              key={level}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-900 px-10 py-12 rounded-[2.5rem] shadow-2xl space-y-14"
            >
              {/* TITLE */}
              <div>
                <h3 className="text-3xl font-extrabold text-indigo-600 tracking-tight">
                  {data?.title} Level
                </h3>
                <div className="w-16 h-1 bg-indigo-500 rounded-full mt-3" />
              </div>

              {/* WHO SHOULD USE */}
              <section className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  🎯 Who should use this?
                </h4>
                <ul className="pl-6 space-y-2 text-slate-600 dark:text-slate-300 list-disc">
                  {data?.whoShouldUse.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* STEP BY STEP LEARNING */}
             {stepData && (
  <section className="space-y-6">
    <h4 className="text-xl font-semibold flex items-center gap-2">
      🪜 Step-by-Step Learning (Detailed)
    </h4>

    {stepData.map((step, i) => (
      <details
        key={i}
        className="group rounded-2xl bg-indigo-50 dark:bg-slate-800 p-5"
      >
        <summary className="cursor-pointer flex items-center justify-between font-semibold text-indigo-700 dark:text-indigo-300">
          <span>
            Step {step.step}: {step.title}
          </span>
          <span className="group-open:rotate-180 transition">⬇️</span>
        </summary>

        <ul className="mt-4 pl-6 space-y-2 list-disc text-slate-700 dark:text-slate-300">
          {step.details.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ul>
      </details>
    ))}
  </section>
)}



              {/* AI TOOLS */}
              <section className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  🤖 Related AI Tools
                </h4>
                <div className="flex flex-wrap gap-4">
                  {data?.tools.map((tool, i) => (
                    <a
                      key={i}
                      href={tool.link}
                      target="_blank"
                      className="px-6 py-3 rounded-full text-sm font-medium
                     bg-gradient-to-r from-indigo-500 to-purple-500
                     text-white shadow-md hover:scale-105 transition"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              </section>

              {/* LEARNING RESOURCES */}
              <section className="space-y-8">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  📚 Learning Resources
                </h4>

                {/* Docs */}
                <ResourceList
                  title="📘 Documentation"
                  items={data?.resources.documentation}
                />

                {/* Tutorials */}
                <ResourceList
                  title="🎥 Tutorials"
                  items={data?.resources.tutorials}
                />

                {/* GitHub */}
                <ResourceList
                  title="🐙 GitHub Repositories"
                  items={data?.resources.github}
                />

                {/* Prompts */}
                <div>
                  <p className="font-medium mb-2">⚡ Prompts / Snippets</p>
                  <ul className="pl-6 space-y-1 text-slate-600 dark:text-slate-300 list-disc">
                    {data?.resources.prompts.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* PROJECT IDEAS */}
              <section className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  🚀 Project Ideas
                </h4>
                <ul className="pl-6 space-y-2 text-slate-600 dark:text-slate-300 list-disc">
                  {data?.projects.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </section>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
