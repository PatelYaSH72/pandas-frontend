import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ExternalLink,
  Heart,
  BookOpen,
  PlayCircle,
  Github,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  User,
  Send,
  Share2,
  Flag,
  Info,
  Save,
} from "lucide-react";
import { AIContext } from "../Context/AitoolsContext";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";

// --- MULTIPLE MOCK DATA (As requested) ---


// --- SUB-COMPONENTS ---

const Badge = ({ children, variant = "indigo" }) => {
  const styles = {
    indigo:
      "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800",
    emerald:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800",
    slate:
      "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700",
  };
  return (
    <span
      className={`px-3 py-1 text-[11px] font-bold uppercase rounded-full border tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
};

const ResourceLink = ({ icon: Icon, label, href }) => {
  const isDisabled = !href || href === "N/A" || href === "";
  return (
    <a
      href={isDisabled ? undefined : href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
        isDisabled
          ? "bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 opacity-50 cursor-not-allowed"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-500 hover:shadow-md cursor-pointer active:scale-95"
      }`}
      onClick={(e) => isDisabled && e.preventDefault()}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={18}
          className={isDisabled ? "text-slate-400" : "text-indigo-600"}
        />
        <span
          className={`font-semibold ${
            isDisabled ? "text-slate-400" : "text-slate-700 dark:text-slate-200"
          }`}
        >
          {label}
        </span>
      </div>
      {!isDisabled && <ExternalLink size={14} className="text-slate-400" />}
    </a>
  );
};

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


// --- MAIN PAGE ---

export default function AiToolDetails() {


  const { getAIToolsData, token, backendUrl } = useContext(AIContext);
  


  // const [toolData, setToolData] = useState(null);
  const [toolData, setToolData] = useState(null);
  const [AIToolsData, setAiallData] = useState([]);

  const [isFavorite, setIsFavorite] = useState(false);
const [isSaved, setIsSaved] = useState(false);

const toggleFavorite = async () => {
  try {
    const res = await axios.post(
      `${backendUrl}/api/user/toggle-favorite`,
      { toolId: id },
      { headers: { token: token } }
    );

    setIsFavorite(res.data.isFavorite);

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

const toggleSave = async () => {
  try {
    const res = await axios.post(
      `${backendUrl}/api/user/toggle-save`,
      { toolId: id },
      { headers: { token: token } }
    );

    setIsSaved(res.data.isSaved);

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};


  useEffect(() => {
    if (!id || !token) return;

    const AiData = async () => {
      try {
        const res = await axios.post(
          `${backendUrl}/api/user/get-AiTool`,
          { toolId: id },
          { headers: { token } },
        );

        // console.log("API RESPONSE:", res.data);
        // setAiallData(res.data.data);
        setToolData(res.data.data);

        setReviews(res.data.data.reviews || []);

        setIsFavorite(res.data.data.isFavorite || false);
      setIsSaved(res.data.data.isSaved || false);

      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };

    AiData();
  }, [token]);

  
  const tool = AIToolsData;

  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [userReview, setUserReview] = useState({ rating: 5, comment: "" });
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getAIToolsData();
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out ${toolData.name} on Pandas AI`,
          text: toolData.whatItDoes,
          url: window.location.href, // Current page URL
        });
        console.log("Successfully shared");
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: Agar browser share support nahi karta to URL copy ho jayega
      navigator.clipboard.writeText(window.location.href);
      alert(
        "Link copied to clipboard! (Your browser doesn't support direct sharing)",
      );
    }
  };
 const submitReview = async (e) => {
  e.preventDefault();
  if (!userReview.comment.trim()) return;

  try {
    const res = await axios.post(
      `${backendUrl}/api/user/add-review`,
      {
        toolId: id,
        rating: userReview.rating,
        comment: userReview.comment,
      },
      {
        headers: { token },
      }
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
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};


  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-20">
      {/* NAVIGATION */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          to={"/Ai-Tools"}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />{" "}
          Back to Pandas
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Powered by Pandas AI
          </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-10">
          {/* HEADER SECTION */}
          <section className="bg-white dark:bg-slate-900 rounded-[32px] p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -mr-10 -mt-10"></div>

            <div className="flex flex-col md:flex-row gap-10 relative z-10">
              <div className="w-full md:w-72 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src={toolData?.image}
                  alt={toolData?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-5">
                <div className="flex flex-wrap items-center gap-4">
                  <h1 className="text-4xl font-black text-slate-900 dark:text-white leading-none">
                    {toolData?.name}
                  </h1>
                  <div className="flex items-center gap-1.5 bg-amber-400/10 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full border border-amber-200/50">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-black">
                      {toolData?.rating?.toFixed(1)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="emerald">{toolData?.pricing}</Badge>
                  {toolData?.category.map((cat, i) => (
                    <Badge key={i} variant="indigo">
                      {cat}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-6">
                  <a
                    href={toolData?.officialLink}
                    target="_blank"
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
                  >
                    Visit Website <ExternalLink size={20} />
                  </a>
                  <button
  onClick={toggleFavorite}
  className={`p-4 rounded-2xl border transition-all ${
    isFavorite
      ? "bg-pink-50 border-pink-300 text-pink-500"
      : "bg-white border-slate-300 text-slate-400"
  }`}
>
  <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
</button>

                  <button
  onClick={toggleSave}
  className={`p-4 rounded-2xl border transition-all ${
    isSaved
      ? "bg-indigo-50 border-indigo-300 text-indigo-600"
      : "bg-white border-slate-300 text-slate-400"
  }`}
>
  <Save size={24} fill={isSaved ? "currentColor" : "none"} />
</button>

                  <button
                    onClick={handleShare}
                    title="Share this tool"
                    className="p-4 rounded-2xl border bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-indigo-600 hover:border-indigo-300 transition-colors active:scale-90"
                  >
                    <Share2 size={24} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT IT DOES */}
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                <Info className="text-indigo-600" size={20} />
              </div>
              What It Does
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
              {toolData?.whatItDoes}
            </p>
          </section>

          {/* HOW TO USE */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold px-2">How to Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {toolData?.howToUse.map((step, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition-colors"
                >
                  <span className="text-3xl font-black text-indigo-600/20 group-hover:text-indigo-600/40 transition-colors leading-none">
                    {i + 1}
                  </span>
                  <p className="font-bold text-slate-700 dark:text-slate-300 pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* PROS & CONS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50/30 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-3xl p-8">
              <h3 className="text-emerald-700 dark:text-emerald-400 font-black mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                <CheckCircle2 size={18} /> Top Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Saves 80% design time",
                  "Seamless team collaboration",
                  "Export in multiple formats",
                ].map((pro, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-bold text-emerald-900/70 dark:text-emerald-300/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>{" "}
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8">
              <h3 className="text-slate-500 dark:text-slate-400 font-black mb-6 flex items-center gap-2 uppercase tracking-widest text-xs">
                <AlertCircle size={18} /> Limitations
              </h3>
              <ul className="space-y-4">
                {["Occasional AI glitches", "Premium price for teams"].map(
                  (con, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-bold text-slate-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>{" "}
                      {con}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
            <h3 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {tool?.techRelevance?.map((tech, i) => (
                <Badge key={i} variant="slate">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="font-black text-xs uppercase tracking-widest text-slate-400 px-2 mb-4">
              Official Resources
            </h3>
            {/* Yahan aapke keys mismatch the, unhe toolData se connect kar diya hai */}
            <ResourceLink
              icon={BookOpen}
              label="Docs & API"
              href={toolData?.docLink}
            />
            <ResourceLink
              icon={PlayCircle}
              label="Video Tutorials"
              href={toolData?.tutorialLink}
            />
            <ResourceLink
              icon={Github}
              label="Source Code"
              href={toolData?.githubLink}
            />
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-2xl font-black">User Reviews</h2>
              <button
                onClick={() => setIsReviewOpen(!isReviewOpen)}
                className="text-sm font-bold text-indigo-600 hover:underline"
              >
                {isReviewOpen ? "Cancel" : "Write a Review"}
              </button>
            </div>

            <AnimatePresence>
              {isReviewOpen && (
                <motion.form
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  onSubmit={submitReview}
                  className="bg-white dark:bg-slate-900 p-6 rounded-3xl border-2 border-indigo-500/20 space-y-4 shadow-lg overflow-hidden"
                >
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <Star
                        key={num}
                        size={24}
                        className={`cursor-pointer transition-colors ${
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
                    placeholder="Write your experience..."
                    className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border-none outline-none ring-2 ring-transparent focus:ring-indigo-500 transition-all"
                    value={userReview.comment}
                    onChange={(e) =>
                      setUserReview({ ...userReview, comment: e.target.value })
                    }
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
                  >
                    Submit Review <Send size={18} />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white dark:bg-slate-900 p-6 rounded-[24px] border border-slate-200 dark:border-slate-800 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-400">
                    <User />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold">{rev.name}</h4>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">
                        {timeAgo(rev.date)}
                      </span>
                    </div>
                    <div className="flex text-amber-400 my-1">
                      {[...Array(Math.floor(rev.rating))].map((_, i) => (
  <Star key={i} size={12} fill="currentColor" />
))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {rev.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <button className="w-full flex items-center justify-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-tighter hover:text-red-500 transition-colors py-4">
            <Flag size={12} /> Incorrect Data? Report Here
          </button>
        </aside>
      </main>

      {/* SIMILAR TOOLS SECTION */}
      {/* <section className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="text-2xl font-black mb-10 text-slate-900 dark:text-white">
          You might also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.isArray(AIToolsData) &&
            AIToolsData.slice(0, 4).map((item, i) => (
              <motion.div
                key={item.id || i}
                onClick={() => {
                  navigate(`/Ai-Tools/${item._id}`);
                  window.scrollTo({ top: 0, behavior: "smooth" }); // Page ko upar le jayega smoothly
                }}
                whileHover={{ y: -8 }}
                className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[24px] overflow-hidden shadow-sm cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-1 group-hover:text-indigo-600 transition-colors">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs font-black text-amber-500">
                    <Star size={14} fill="currentColor" /> {item.rating}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section> */}
    </div>
  );
}
