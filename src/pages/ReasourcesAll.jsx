"use client";
import React, { useState, useEffect, useContext } from "react";
import {
  Star,
  ArrowLeft,
  Bookmark,
  User,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ResourceList from "../components/ResourceList";
import { useNavigate } from "react-router";
import { MyContext } from "../Context/RsourcesContext";
import { useParams } from "react-router";
import axios from "axios";

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (let i of intervals) {
    const count = Math.floor(seconds / i.seconds);
    if (count >= 1) {
      return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "Just now";
};

/* ================= COMPONENT ================= */
export default function ReasourcesAll() {
  const { slug } = useParams();

  const [resorceData, SetResorceData] = useState(null);

  console.log(slug);

  const { Technologyes_Data, token, backendUrl } = useContext(MyContext);
  const REVIEWS_PER_PAGE = 4;

  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [userReview, setUserReview] = useState({ rating: 5, comment: "" });
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
const [bookmarkCount, setBookmarkCount] = useState(0);
const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);

  const visibleReviews = reviews.slice(0, visibleCount);

  const submitReview = async (e) => {
    e.preventDefault();
    if (!userReview.comment.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post(
        `${backendUrl}/api/user/addResource-review`,
        {
          resourceId: resorceData?._id,
          rating: userReview.rating,
          comment: userReview.comment,
        },
        {
          headers: { token },
        },
      );

      // ✅ UI instant update
      setReviews([
        {
          ...res.data.review,
          date: "Just now",
        },
        ...reviews,
      ]);

      setUserReview({ rating: 5, comment: "" });
      setIsReviewOpen(false);
      setLoading(false);
    } catch (error) {
      console.error(error.response?.data || error.message);
      setLoading(false);
    }
  };

  const toggleStepCompletion = (stepNumber) => {
    let updatedSteps;

    if (completedSteps.includes(stepNumber)) {
      updatedSteps = completedSteps.filter((s) => s !== stepNumber);
    } else {
      updatedSteps = [...completedSteps, stepNumber];
    }

    setCompletedSteps(updatedSteps);

    localStorage.setItem(
      `progress-${slug}-${level}`,
      JSON.stringify(updatedSteps),
    );
  };

  useEffect(() => {
    const technologyData = Technologyes_Data?.find(
      (item) => item.slug === slug,
    );
    if (technologyData) {
      // SetResorceData(technologyData);
    }
  }, [slug, Technologyes_Data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}/api/user/resources-tool/${slug}`,
          {
            headers: { token: token },
          },
        );

        // yahan state set karo

        SetResorceData(res.data.data);
        
        setBookmarked(res.data.isBookmarked);
        setBookmarkCount(res.data.bookmarkCount);
        setReviews(res.data.data.reviews);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };

    if (slug && token) {
      fetchData();
    }
  }, [slug, token]);

 

  // console.log(Technologyes_Data[0].category);

  


const [bookmarkLoading, setBookmarkLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTOC, setActiveTOC] = useState("");
  const [level, setLevel] = useState("beginner");
  const data = resorceData?.learningRoadmapData?.[level];
  const navigate = useNavigate();
  const stepData = resorceData?.detailedStepByStepLearning?.[level];

  //  ----- slug req me jayega slug se data aayega ohk -----
  // console.log(learningRoadmapData)

 

  useEffect(() => {
  if (resorceData) {
    
    setIsInitialLoad(false); // Data load ho gaya
  }
}, [resorceData]);




const toggleBookmark = async () => {
  if (!token || !resorceData?._id || bookmarkLoading) return;

  setBookmarkLoading(true);
  
  // Optimistic UI update (pehle hi badal do)
  const prevStatus = bookmarked;
  // setBookmarked(!prevStatus);
  // setBookmarkCount(prev => prevStatus ? prev - 1 : prev + 1);

  try {
    const res = await axios.post(
      `${backendUrl}/api/user/toggle-bookmark`,
      { resourceId: resorceData._id },
      { headers: { token } }
    );

    if (res.data.success) {
      // Backend status se sync karein
      setBookmarked(res.data.bookmarked);
      setBookmarkCount(res.data.bookmarkCount);
    }
  } catch (error) {
    // Error aane par purana state wapas layein (Rollback)
    setBookmarked(prevStatus);
    setBookmarkCount(prev => prevStatus ? prev + 1 : prev - 1);
    console.error("Error bookmarking", error);
  } finally {
    setBookmarkLoading(false);
  }
};



// before API call




  // const toggleBookmark = () => {
  //   if (!resorceData?._id) return;

  //   const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

  //   const updated = bookmarked
  //     ? bookmarks.filter((id) => id !== resorceData._id)
  //     : [...bookmarks, resorceData._id];

  //   localStorage.setItem("bookmarks", JSON.stringify(updated));
  //   setBookmarked(!bookmarked);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (!slug || !level) return;

    const saved = JSON.parse(
      localStorage.getItem(`progress-${slug}-${level}`) || "[]",
    );
    setCompletedSteps(saved);
  }, [slug, level]);

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
    <div
      className={`${darkMode ? "dark" : ""} transition-colors  dark:bg-slate-900 duration-500 pt-10`}
    >
      <div className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-4 space-y-3">
          {[
            { id: "hero", label: "Overview" },
            { id: "how-to-use", label: "How to Use" },
            { id: "reviews", label: "Reviews" },
            { id: "roadmap", label: "Roadmap" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() =>
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`block text-sm font-semibold transition
        ${
          activeTOC === item.id
            ? "text-indigo-600"
            : "text-slate-400 hover:text-indigo-500"
        }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dark Mode Toggle */}

      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 px-6 py-14">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex items-center mb-8">
            <button
              onClick={() => navigate(-1)}
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative py-8 md:py-12 border-b border-slate-100/80 dark:border-slate-800/50"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* LEFT CONTENT */}
              <div className="space-y-4 flex-1">
                {/* Top Indicator */}
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black tracking-[0.2em] text-indigo-500 uppercase px-2 py-0.5 bg-indigo-50 dark:bg-indigo-500/10 rounded">
                    {resorceData?.pricing}
                  </span>

                  <div className="flex items-center gap-1 text-slate-400 text-xs font-bold">
                    <Star
                      size={12}
                      fill="currentColor"
                      className="text-amber-400"
                    />
                    {resorceData?.rating.toFixed(1)}
                  </div>
                </div>

                {/* Header */}
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                    {resorceData?.name}
                  </h1>

                  <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
                    {resorceData?.whatItDoes}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-4 pt-1">
                  {Array.isArray(resorceData?.category) &&
                    resorceData.category.map((cat, index) => (
                      <span
                        key={index}
                        className="text-[11px] font-bold text-slate-400/70 hover:text-indigo-500 transition"
                      >
                        #{typeof cat === "string" ? cat : cat.label}
                      </span>
                    ))}
                </div>

                {/* CTA BUTTONS ✅ */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <button
                    onClick={() =>
                      document
                        .getElementById("roadmap")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-7 py-3 rounded-2xl font-bold text-white
          bg-gradient-to-r from-indigo-600 to-purple-600
          hover:scale-105 transition shadow-lg"
                  >
                    🚀 Start Learning
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById("how-to-use")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="px-7 py-3 rounded-2xl font-bold
          bg-slate-100 dark:bg-slate-800
          hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                  >
                    How it works
                  </button>
                </div>
              </div>

              {/* BOOKMARK */}
              <div className="flex-shrink-0 pt-2">
  {isInitialLoad ? (
    /* Jab tak data fetch ho raha hai tabhi skeleton dikhao */
    <div className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse w-32 h-10" />
  ) : (
    /* Data aane ke baad button dikhao */
    <button
      onClick={toggleBookmark}
      disabled={bookmarkLoading}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95
        ${bookmarked 
          ? "bg-indigo-600 text-white" 
          : "bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200"}
      `}
    >
      <Bookmark size={18} className={bookmarked ? "fill-white" : ""} />
      {bookmarked ? "Saved" : "Bookmark"} · {bookmarkCount}
    </button>
  )}
</div>
            </div>
          </motion.section>

          {/* HOW TO USE*/}
          <motion.section
           
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20"
          >
            <div className="max-w-7xl mx-auto"  id="how-to-use">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* ================= LEFT : HOW IT WORKS ================= */}
                <motion.div >
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">
                    How it works
                  </h2>

                  <div className="relative pl-6 space-y-5">
                    {/* vertical line */}
                    <div className="absolute left-[13px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

                    {resorceData?.howToUse?.map((step, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="relative z-10">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center
                  bg-indigo-50 dark:bg-indigo-500/10
                  text-indigo-600 text-xs font-bold"
                          >
                            {index + 1}
                          </div>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* ================= RIGHT : REVIEWS ================= */}
                <motion.div
                  id="reviews"
                  className="bg-slate-50/70 dark:bg-slate-950/40
        border border-slate-200 dark:border-slate-800
        rounded-3xl p-6 md:p-8 space-y-6"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        User Reviews
                      </h3>
                      <p className="text-sm text-slate-500">
                        ⭐ {resorceData?.rating.toFixed(1)} / 5 · {reviews.length}{" "}
                        reviews
                      </p>
                    </div>

                    <button
                      onClick={() => setIsReviewOpen(!isReviewOpen)}
                      disabled={loading}
                      className="px-5 py-2.5 text-sm font-semibold
            border border-indigo-600 text-indigo-600
            rounded-xl hover:bg-indigo-50
            dark:hover:bg-indigo-500/10
            transition disabled:opacity-60"
                    >
                      {isReviewOpen ? "Cancel" : "Write Review"}
                    </button>
                  </div>

                  {/* Review Form */}
                  <AnimatePresence>
                    {isReviewOpen && (
                      <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onSubmit={submitReview}
                        className="bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-800
              rounded-2xl p-5 space-y-4"
                      >
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <Star
                              key={num}
                              size={20}
                              className={`cursor-pointer ${
                                num <= userReview.rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-slate-300"
                              }`}
                              onClick={() =>
                                setUserReview({ ...userReview, rating: num })
                              }
                            />
                          ))}
                        </div>

                        <textarea
                          required
                          placeholder="Share your experience"
                          value={userReview.comment}
                          onChange={(e) =>
                            setUserReview({
                              ...userReview,
                              comment: e.target.value,
                            })
                          }
                          className="w-full text-sm p-4 rounded-xl
                bg-slate-50 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <button
                          disabled={loading}
                          className="px-6 py-2.5 text-sm font-semibold
                bg-indigo-600 text-white rounded-xl
                hover:bg-indigo-700 transition disabled:opacity-60"
                        >
                          {loading ? "Submitting..." : "Submit Review"}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>

                  {/* Reviews List */}
                  <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
                    {visibleReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-800
              rounded-2xl p-5"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-slate-400" />
                            <span className="text-sm font-semibold">
                              {rev.name}
                            </span>
                            <span
                              className="text-[10px] px-2 py-0.5 rounded-full
                    bg-green-100 text-green-700 font-bold"
                            >
                              VERIFIED
                            </span>
                          </div>

                          <span className="text-xs text-slate-400">
                            {timeAgo(rev.date)}
                          </span>
                        </div>

                        <div className="flex text-amber-400 mb-2">
                          {[...Array(Math.floor(rev.rating))].map((_, i) => (
                            <Star key={i} size={12} fill="currentColor" />
                          ))}
                        </div>

                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {rev.comment}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Load More */}
                  {visibleCount < reviews.length && (
                    <div className="flex justify-center pt-2">
                      <button
                        onClick={() =>
                          setVisibleCount((prev) => prev + REVIEWS_PER_PAGE)
                        }
                        className="px-6 py-2.5 text-sm font-semibold
              border border-slate-300 dark:border-slate-700
              rounded-xl text-slate-700 dark:text-slate-300
              hover:bg-slate-100 dark:hover:bg-slate-800
              transition"
                      >
                        Load more reviews
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.section>

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

                  {/* 🔥 Progress Bar */}
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl">
                    <p className="text-sm font-bold mb-2">
                      Progress: {completedSteps.length} / {stepData.length}{" "}
                      steps completed
                    </p>

                    <div className="w-full h-3 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 transition-all duration-500"
                        style={{
                          width: `${(completedSteps.length / stepData.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {stepData.map((step, i) => {
                    const isCompleted = completedSteps.includes(step.step);

                    return (
                      <div
                        key={i}
                        className={`rounded-2xl p-5 transition border
        ${
          isCompleted
            ? "bg-green-50 dark:bg-green-900/20 border-green-400"
            : "bg-indigo-50 dark:bg-slate-800 border-transparent"
        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h5 className="font-semibold text-indigo-700 dark:text-indigo-300">
                            Step {step.step}: {step.title}
                          </h5>

                          <button
                            onClick={() => toggleStepCompletion(step.step)}
                            className={`text-xs font-bold px-3 py-1 rounded-full transition
            ${
              isCompleted
                ? "bg-green-600 text-white"
                : "bg-slate-200 dark:bg-slate-700 text-slate-600"
            }`}
                          >
                            {isCompleted ? "Completed ✓" : "Mark Complete"}
                          </button>
                        </div>

                        <ul className="mt-4 pl-6 space-y-2 list-disc text-slate-700 dark:text-slate-300">
                          {step.details.map((d, idx) => (
                            <li key={idx}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
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
