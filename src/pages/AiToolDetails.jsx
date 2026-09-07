import React, { useContext, useEffect, useState } from "react";
import {
  Star,
  ExternalLink,
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
  ArrowUpRight,
  Clock3,
  Tag,
  Sparkles,
} from "lucide-react";

import { AIContext } from "../Context/AitoolsContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   BADGE
========================================================= */

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    accent:
      "bg-[#E7F1EA] text-[#3F7A5B] border-[#D5E5D9]",

    neutral:
      "bg-[#F4F6F4] text-[#4B5C53] border-[#E3E8E3]",

    warning:
      "bg-[#FBF4E7] text-[#9A6A22] border-[#F0DFC0]",

    default:
      "bg-white text-[#4B5C53] border-[#E3E8E3]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-[11px] font-semibold tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

/* =========================================================
   RESOURCE LINK
========================================================= */

const ResourceLink = ({ icon: Icon, label, href }) => {
  const disabled = !href || href === "N/A";

  return (
    <a
      href={disabled ? undefined : href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (disabled) e.preventDefault();
      }}
      className={`group flex items-center justify-between rounded-xl border p-4 transition-all duration-200 ${
        disabled
          ? "cursor-not-allowed border-[#E3E8E3] bg-[#F7F8F6] opacity-50"
          : "border-[#E3E8E3] bg-white hover:border-[#BFD3C5] hover:bg-[#FAFAF8]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            disabled
              ? "bg-[#EEF0EE] text-[#8A988E]"
              : "bg-[#E7F1EA] text-[#3F7A5B]"
          }`}
        >
          <Icon size={17} strokeWidth={1.8} />
        </div>

        <span
          className={`text-sm font-semibold ${
            disabled ? "text-[#8A988E]" : "text-[#141F19]"
          }`}
        >
          {label}
        </span>
      </div>

      {!disabled && (
        <ArrowUpRight
          size={16}
          className="text-[#8A988E] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#3F7A5B]"
        />
      )}
    </a>
  );
};

/* =========================================================
   TIME AGO
========================================================= */

const timeAgo = (date) => {
  if (!date) return "Just now";

  const seconds = Math.floor(
    (new Date() - new Date(date)) / 1000
  );

  if (Number.isNaN(seconds) || seconds < 0) {
    return "Just now";
  }

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);

    if (count >= 1) {
      return `${count} ${interval.label}${
        count > 1 ? "s" : ""
      } ago`;
    }
  }

  return "Just now";
};

/* =========================================================
   SECTION HEADER
========================================================= */

const SectionHeader = ({
  eyebrow,
  title,
  icon: Icon,
}) => {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-2 text-[#3F7A5B]">
        {Icon && <Icon size={15} strokeWidth={1.8} />}

        <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#141F19]">
        {title}
      </h2>
    </div>
  );
};

/* =========================================================
   MAIN
========================================================= */

export default function AiToolDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    token,
    backendUrl,
  } = useContext(AIContext);

  const [toolData, setToolData] = useState(null);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const [reviews, setReviews] = useState([]);

  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const [userReview, setUserReview] = useState({
    rating: 5,
    comment: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  /* =========================================================
     FETCH TOOL
  ========================================================= */

  useEffect(() => {
    if (!id || !token || !backendUrl) return;

    const fetchTool = async () => {
      try {
        setLoading(true);

        const res = await axios.post(
          `${backendUrl}/api/user/get-AiTool`,
          {
            toolId: id,
          },
          {
            headers: {
              token,
            },
          }
        );

        const data = res.data?.data;

        setToolData(data || null);
        setReviews(data?.reviews || []);
        setIsFavorite(data?.isFavorite || false);
        setIsSaved(data?.isSaved || false);
      } catch (error) {
        console.error(
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTool();
  }, [id, token, backendUrl]);

  /* =========================================================
     SCROLL TOP
  ========================================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [id]);

  /* =========================================================
     SAVE
  ========================================================= */

  const toggleSave = async () => {
    if (!token || !id || saving) return;

    try {
      setSaving(true);

      const res = await axios.post(
        `${backendUrl}/api/user/toggle-save`,
        {
          toolId: id,
        },
        {
          headers: {
            token,
          },
        }
      );

      setIsSaved(res.data?.isSaved ?? !isSaved);
    } catch (error) {
      console.error(
        error.response?.data || error.message
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================================================
     SHARE
  ========================================================= */

  const handleShare = async () => {
    if (!toolData) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out ${toolData.name}`,
          text: toolData.whatItDoes,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled share.
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          window.location.href
        );

        alert("Link copied to clipboard.");
      } catch (error) {
        console.error(error);
      }
    }
  };

  /* =========================================================
     REVIEW
  ========================================================= */

  const submitReview = async (e) => {
    e.preventDefault();

    if (!userReview.comment.trim()) return;

    try {
      const res = await axios.post(
        `${backendUrl}/api/user/add-review`,
        {
          toolId: id,
          rating: userReview.rating,
          comment: userReview.comment.trim(),
        },
        {
          headers: {
            token,
          },
        }
      );

      const newReview = {
        ...res.data.review,
        date: new Date(),
      };

      setReviews((prev) => [
        newReview,
        ...prev,
      ]);

      setUserReview({
        rating: 5,
        comment: "",
      });

      setIsReviewOpen(false);
    } catch (error) {
      console.error(
        error.response?.data || error.message
      );
    }
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="animate-pulse">
            <div className="mb-8 h-4 w-32 rounded bg-[#E3E8E3]" />

            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div className="rounded-[20px] border border-[#E3E8E3] bg-white p-8">
                <div className="h-10 w-1/2 rounded bg-[#E8ECE8]" />
                <div className="mt-6 h-5 w-3/4 rounded bg-[#EEF1EE]" />
                <div className="mt-10 h-64 rounded-[16px] bg-[#F0F2F0]" />
              </div>

              <div className="h-72 rounded-[20px] border border-[#E3E8E3] bg-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     NOT FOUND
  ========================================================= */

  if (!toolData) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] px-6 pt-32">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7F1EA] text-[#3F7A5B]">
            <Info size={24} />
          </div>

          <h1 className="mt-5 text-2xl font-semibold text-[#141F19]">
            Tool not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-[#8A988E]">
            We couldn't find the AI tool you're looking for.
          </p>

          <button
            onClick={() => navigate("/Ai-Tools")}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#3F7A5B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#336249]"
          >
            <ArrowLeft size={16} />
            Back to tools
          </button>
        </div>
      </div>
    );
  }

  const categories = Array.isArray(toolData.category)
    ? toolData.category
    : [];

  const technologies = Array.isArray(
    toolData.techRelevance
  )
    ? toolData.techRelevance
    : [];

  const howToUse = Array.isArray(toolData.howToUse)
    ? toolData.howToUse
    : [];

  const rating =
    typeof toolData.rating === "number"
      ? toolData.rating.toFixed(1)
      : "—";

  return (
    <div className="min-h-screen bg-[#FAFAF8] pb-24 pt-24 text-[#141F19]">
      {/* =====================================================
          TOP NAV
      ====================================================== */}

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between border-b border-[#E3E8E3] pb-5">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#4B5C53] transition-colors hover:text-[#3F7A5B]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to tools
          </button>

          <div className="hidden items-center gap-2 text-xs text-[#8A988E] sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3F7A5B]" />
            Curated AI directory
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="mx-auto mt-8 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="space-y-8">

            {/* =================================================
                TOOL HEADER
            ================================================= */}

            <section className="overflow-hidden rounded-[20px] border border-[#E3E8E3] bg-white">
              <div className="p-6 sm:p-8">

                {/* Breadcrumb / label */}

                <div className="mb-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A988E]">
                  <span>AI Tool</span>
                  <span className="text-[#C5CDC7]">/</span>
                  <span className="text-[#3F7A5B]">
                    {categories[0] || "Directory"}
                  </span>
                </div>

                <div className="grid gap-8 md:grid-cols-[180px_minmax(0,1fr)]">

                  {/* IMAGE */}

                  <div className="h-44 overflow-hidden rounded-[16px] border border-[#E3E8E3] bg-[#F4F6F4]">
                    {toolData.image ? (
                      <img
                        src={toolData.image}
                        alt={toolData.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[#8A988E]">
                        <Sparkles size={28} />
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h1 className="text-3xl font-semibold tracking-[-0.035em] text-[#141F19] sm:text-4xl">
                          {toolData.name}
                        </h1>

                        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#4B5C53]">
                          {toolData.whatItDoes}
                        </p>
                      </div>

                      {/* RATING */}

                      <div className="flex shrink-0 items-center gap-2 rounded-xl border border-[#E3E8E3] bg-[#FAFAF8] px-3 py-2">
                        <Star
                          size={15}
                          fill="currentColor"
                          className="text-[#3F7A5B]"
                        />

                        <span className="text-sm font-semibold text-[#141F19]">
                          {rating}
                        </span>
                      </div>
                    </div>

                    {/* BADGES */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {toolData.pricing && (
                        <Badge variant="accent">
                          {toolData.pricing}
                        </Badge>
                      )}

                      {categories.map((cat, index) => (
                        <Badge
                          key={`${cat}-${index}`}
                          variant="neutral"
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>

                    {/* ACTIONS */}

                    <div className="mt-7 flex flex-wrap gap-2.5">

                      {toolData.officialLink && (
                        <a
                          href={toolData.officialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3F7A5B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#336249]"
                        >
                          Visit website
                          <ExternalLink size={15} />
                        </a>
                      )}

                      <button
                        onClick={toggleSave}
                        disabled={saving}
                        className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                          isSaved
                            ? "border-[#BFD3C5] bg-[#E7F1EA] text-[#3F7A5B]"
                            : "border-[#E3E8E3] bg-white text-[#4B5C53] hover:border-[#BFD3C5] hover:text-[#3F7A5B]"
                        }`}
                      >
                        <Save
                          size={16}
                          fill={
                            isSaved
                              ? "currentColor"
                              : "none"
                          }
                        />

                        {isSaved ? "Saved" : "Save"}
                      </button>

                      <button
                        onClick={handleShare}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E3E8E3] bg-white px-4 py-3 text-sm font-semibold text-[#4B5C53] transition-colors hover:border-[#BFD3C5] hover:text-[#3F7A5B]"
                      >
                        <Share2 size={16} />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* META BAR */}

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#E3E8E3] bg-[#FAFAF8] px-6 py-4 text-xs text-[#8A988E] sm:px-8">
                <div className="flex items-center gap-2">
                  <Tag size={14} />
                  {categories.length || 0} categories
                </div>

                <div className="h-3 w-px bg-[#D9E0DA]" />

                <div className="flex items-center gap-2">
                  <Clock3 size={14} />
                  Compare before choosing
                </div>
              </div>
            </section>

            {/* =================================================
                WHAT IT DOES
            ================================================= */}

            <section className="rounded-[20px] border border-[#E3E8E3] bg-white p-6 sm:p-8">
              <SectionHeader
                eyebrow="Overview"
                title="What it does"
                icon={Info}
              />

              <p className="max-w-3xl text-[15px] leading-8 text-[#4B5C53]">
                {toolData.whatItDoes ||
                  "Information about this tool is currently unavailable."}
              </p>
            </section>

            {/* =================================================
                HOW TO USE
            ================================================= */}

            {howToUse.length > 0 && (
              <section>
                <SectionHeader
                  eyebrow="Getting started"
                  title="How to use it"
                  icon={Sparkles}
                />

                <div className="grid gap-3 md:grid-cols-2">
                  {howToUse.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="group rounded-[16px] border border-[#E3E8E3] bg-white p-5 transition-colors hover:border-[#C8D8CD]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E7F1EA] text-xs font-bold text-[#3F7A5B]">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </div>

                        <p className="pt-1 text-sm font-medium leading-6 text-[#4B5C53]">
                          {step}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* =================================================
                BENEFITS / LIMITATIONS
            ================================================= */}

            <section className="grid gap-4 md:grid-cols-2">

              {/* BENEFITS */}

              <div className="rounded-[20px] border border-[#DDE9E0] bg-[#F6FAF7] p-6">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E7F1EA] text-[#3F7A5B]">
                    <CheckCircle2 size={16} />
                  </div>

                  <h3 className="text-sm font-semibold text-[#141F19]">
                    What stands out
                  </h3>
                </div>

                <ul className="space-y-3">
                  {[
                    "Useful for reducing repetitive work",
                    "Designed around practical workflows",
                    "Can fit into an existing toolkit",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-[#4B5C53]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3F7A5B]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LIMITATIONS */}

              <div className="rounded-[20px] border border-[#E3E8E3] bg-white p-6">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4F6F4] text-[#8A988E]">
                    <AlertCircle size={16} />
                  </div>

                  <h3 className="text-sm font-semibold text-[#141F19]">
                    Keep in mind
                  </h3>
                </div>

                <ul className="space-y-3">
                  {[
                    "Results can vary by workflow",
                    "Some features may require a paid plan",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm leading-6 text-[#8A988E]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#AAB4AD]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* =================================================
                REVIEWS
            ================================================= */}

            <section className="rounded-[20px] border border-[#E3E8E3] bg-white p-6 sm:p-8">

              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E3E8E3] pb-6">

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#141F19]">
                      User reviews
                    </h2>

                    <span className="rounded-lg bg-[#F4F6F4] px-2 py-1 text-xs font-semibold text-[#8A988E]">
                      {reviews.length}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-[#8A988E]">
                    Experiences from people who have tried this tool.
                  </p>
                </div>

                <button
                  onClick={() =>
                    setIsReviewOpen(!isReviewOpen)
                  }
                  className="text-sm font-semibold text-[#3F7A5B] transition-colors hover:text-[#336249]"
                >
                  {isReviewOpen
                    ? "Cancel"
                    : "Write a review"}
                </button>
              </div>

              {/* REVIEW FORM */}

              <AnimatePresence>
                {isReviewOpen && (
                  <motion.form
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    onSubmit={submitReview}
                    className="overflow-hidden"
                  >
                    <div className="my-6 rounded-[16px] border border-[#D9E5DC] bg-[#F7FAF8] p-5">

                      <div className="mb-5">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A988E]">
                          Your rating
                        </p>

                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map(
                            (number) => (
                              <button
                                key={number}
                                type="button"
                                onClick={() =>
                                  setUserReview({
                                    ...userReview,
                                    rating: number,
                                  })
                                }
                                className="p-1"
                              >
                                <Star
                                  size={21}
                                  className={
                                    number <=
                                    userReview.rating
                                      ? "text-[#3F7A5B]"
                                      : "text-[#C7CEC9]"
                                  }
                                  fill={
                                    number <=
                                    userReview.rating
                                      ? "currentColor"
                                      : "none"
                                  }
                                />
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      <textarea
                        required
                        value={userReview.comment}
                        onChange={(e) =>
                          setUserReview({
                            ...userReview,
                            comment: e.target.value,
                          })
                        }
                        placeholder="What did you think about this tool?"
                        className="min-h-[120px] w-full resize-none rounded-xl border border-[#E3E8E3] bg-white p-4 text-sm text-[#141F19] outline-none transition-all placeholder:text-[#A0AAA3] focus:border-[#3F7A5B] focus:ring-4 focus:ring-[#E7F1EA]"
                      />

                      <button
                        type="submit"
                        className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#3F7A5B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#336249]"
                      >
                        Submit review
                        <Send size={15} />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* REVIEWS */}

              <div className="mt-6 space-y-3">
                {reviews.length === 0 ? (
                  <div className="rounded-[16px] border border-dashed border-[#DCE3DE] bg-[#FAFAF8] px-6 py-10 text-center">
                    <User
                      size={24}
                      className="mx-auto text-[#AAB4AD]"
                    />

                    <p className="mt-3 text-sm font-medium text-[#4B5C53]">
                      No reviews yet.
                    </p>

                    <p className="mt-1 text-xs text-[#8A988E]">
                      Be the first to share your experience.
                    </p>
                  </div>
                ) : (
                  reviews.map((review, index) => (
                    <div
                      key={
                        review.id ||
                        review._id ||
                        index
                      }
                      className="rounded-[16px] border border-[#E3E8E3] bg-white p-5"
                    >
                      <div className="flex items-start gap-4">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7F1EA] text-[#3F7A5B]">
                          <User size={17} />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-sm font-semibold text-[#141F19]">
                              {review.name ||
                                "Anonymous user"}
                            </h4>

                            <span className="text-[11px] text-[#8A988E]">
                              {timeAgo(
                                review.date
                              )}
                            </span>
                          </div>

                          <div className="mt-2 flex items-center gap-0.5 text-[#3F7A5B]">
                            {[
                              1,
                              2,
                              3,
                              4,
                              5,
                            ].map((star) => (
                              <Star
                                key={star}
                                size={12}
                                fill={
                                  star <=
                                  Math.floor(
                                    review.rating || 0
                                  )
                                    ? "currentColor"
                                    : "none"
                                }
                              />
                            ))}
                          </div>

                          <p className="mt-3 text-sm leading-6 text-[#4B5C53]">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">

            {/* QUICK SUMMARY */}

            <section className="rounded-[20px] border border-[#E3E8E3] bg-white p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A988E]">
                Quick summary
              </p>

              <div className="mt-5 space-y-4">

                <div className="flex items-center justify-between border-b border-[#EEF1EE] pb-4">
                  <span className="text-sm text-[#8A988E]">
                    Pricing
                  </span>

                  <span className="text-sm font-semibold text-[#141F19]">
                    {toolData.pricing || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EEF1EE] pb-4">
                  <span className="text-sm text-[#8A988E]">
                    Rating
                  </span>

                  <span className="flex items-center gap-1.5 text-sm font-semibold text-[#141F19]">
                    <Star
                      size={14}
                      fill="currentColor"
                      className="text-[#3F7A5B]"
                    />

                    {rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#8A988E]">
                    Reviews
                  </span>

                  <span className="text-sm font-semibold text-[#141F19]">
                    {reviews.length}
                  </span>
                </div>
              </div>
            </section>

            {/* TECHNOLOGIES */}

            {technologies.length > 0 && (
              <section className="rounded-[20px] border border-[#E3E8E3] bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A988E]">
                  Technologies
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {technologies.map(
                    (technology, index) => (
                      <Badge
                        key={`${technology}-${index}`}
                        variant="neutral"
                      >
                        {technology}
                      </Badge>
                    )
                  )}
                </div>
              </section>
            )}

            {/* OFFICIAL RESOURCES */}

            <section className="rounded-[20px] border border-[#E3E8E3] bg-white p-6">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A988E]">
                Official resources
              </p>

              <div className="space-y-2">
                <ResourceLink
                  icon={BookOpen}
                  label="Documentation & API"
                  href={toolData.docLink}
                />

                <ResourceLink
                  icon={PlayCircle}
                  label="Video tutorials"
                  href={toolData.tutorialLink}
                />

                <ResourceLink
                  icon={Github}
                  label="Source code"
                  href={toolData.githubLink}
                />
              </div>
            </section>

            {/* REPORT */}

            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-transparent px-4 py-3 text-xs font-medium text-[#8A988E] transition-colors hover:border-[#E3E8E3] hover:bg-white hover:text-[#3F7A5B]">
              <Flag size={13} />
              Report incorrect information
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}