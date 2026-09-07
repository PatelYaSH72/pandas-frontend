
"use client";

import React, { useState, useEffect, useContext } from "react";
import { Star, ArrowLeft, Bookmark, User, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ResourceList from "../components/ResourceList";
import { useNavigate, useParams } from "react-router";
import { MyContext } from "../Context/RsourcesContext";
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

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);

    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};

/* -------------------------------------------------------
   LOADING STATE
------------------------------------------------------- */

const ResourceLoading = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#141F19] pt-28">
      <div className="max-w-6xl mx-auto px-6 pb-20 animate-pulse">
        <div className="h-5 w-20 bg-[#E3E8E3] rounded mb-12" />

        <div className="border-b border-[#E3E8E3] pb-12">
          <div className="h-4 w-24 bg-[#E3E8E3] rounded mb-5" />
          <div className="h-12 w-2/3 bg-[#E3E8E3] rounded mb-5" />
          <div className="h-5 w-full max-w-2xl bg-[#E3E8E3] rounded mb-3" />
          <div className="h-5 w-3/4 max-w-xl bg-[#E3E8E3] rounded" />

          <div className="flex gap-3 mt-7">
            <div className="h-9 w-24 bg-[#E3E8E3] rounded-lg" />
            <div className="h-9 w-24 bg-[#E3E8E3] rounded-lg" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-16 py-14">
          <div className="space-y-8">
            <div className="h-6 w-32 bg-[#E3E8E3] rounded" />
            <div className="h-20 bg-[#E3E8E3] rounded-lg" />
            <div className="h-20 bg-[#E3E8E3] rounded-lg" />
            <div className="h-20 bg-[#E3E8E3] rounded-lg" />
          </div>

          <div className="space-y-5">
            <div className="h-7 w-36 bg-[#E3E8E3] rounded" />
            <div className="h-24 bg-[#E3E8E3] rounded-lg" />
            <div className="h-24 bg-[#E3E8E3] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------
   COMPONENT
------------------------------------------------------- */

export default function ReasourcesAll() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { token, backendUrl } = useContext(MyContext);

  const REVIEWS_PER_PAGE = 4;

  const [resorceData, SetResorceData] = useState(null);

  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [userReview, setUserReview] = useState({
    rating: 5,
    comment: "",
  });

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [completedSteps, setCompletedSteps] = useState([]);

  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [bookmarkLoading, setBookmarkLoading] = useState(false);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);

  const [activeTOC, setActiveTOC] = useState("");
  const [level, setLevel] = useState("beginner");

  const visibleReviews = reviews.slice(0, visibleCount);

  const data = resorceData?.learningRoadmapData?.[level];
  const stepData = resorceData?.detailedStepByStepLearning?.[level];

  /* -------------------------------------------------------
     FETCH RESOURCE
  ------------------------------------------------------- */

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsInitialLoad(true);

        const res = await axios.get(
          `${backendUrl}/api/user/resources-tool/${slug}`,
          {
            headers: {
              token,
            },
          }
        );

        SetResorceData(res.data.data);
        setBookmarked(res.data.isBookmarked);
        setBookmarkCount(res.data.bookmarkCount);
        setReviews(res.data.data.reviews || []);
      } catch (error) {
        console.error(
          error.response?.data || error.message
        );
      } finally {
        setIsInitialLoad(false);
      }
    };

    if (slug && token) {
      fetchData();
    }
  }, [slug, token, backendUrl]);

  /* -------------------------------------------------------
     SCROLL TOP
  ------------------------------------------------------- */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* -------------------------------------------------------
     PROGRESS
  ------------------------------------------------------- */

  useEffect(() => {
    if (!slug || !level) return;

    const saved = JSON.parse(
      localStorage.getItem(`progress-${slug}-${level}`) || "[]"
    );

    setCompletedSteps(saved);
  }, [slug, level]);

  const toggleStepCompletion = (stepNumber) => {
    let updatedSteps;

    if (completedSteps.includes(stepNumber)) {
      updatedSteps = completedSteps.filter(
        (step) => step !== stepNumber
      );
    } else {
      updatedSteps = [...completedSteps, stepNumber];
    }

    setCompletedSteps(updatedSteps);

    localStorage.setItem(
      `progress-${slug}-${level}`,
      JSON.stringify(updatedSteps)
    );
  };

  /* -------------------------------------------------------
     BOOKMARK
  ------------------------------------------------------- */

  const toggleBookmark = async () => {
    if (!token || !resorceData?._id || bookmarkLoading) return;

    setBookmarkLoading(true);

    const previousStatus = bookmarked;
    const previousCount = bookmarkCount;

    try {
      const res = await axios.post(
        `${backendUrl}/api/user/toggle-bookmark`,
        {
          resourceId: resorceData._id,
        },
        {
          headers: {
            token,
          },
        }
      );

      if (res.data.success) {
        setBookmarked(res.data.bookmarked);
        setBookmarkCount(res.data.bookmarkCount);
      }
    } catch (error) {
      setBookmarked(previousStatus);
      setBookmarkCount(previousCount);

      console.error(
        "Error bookmarking:",
        error.response?.data || error.message
      );
    } finally {
      setBookmarkLoading(false);
    }
  };

  /* -------------------------------------------------------
     REVIEW
  ------------------------------------------------------- */

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
          headers: {
            token,
          },
        }
      );

      setReviews((prev) => [
        {
          ...res.data.review,
          date: new Date().toISOString(),
        },
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
    } finally {
      setLoading(false);
    }
  };

  /* -------------------------------------------------------
     ACTIVE TOC
  ------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveTOC(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------------
     HELPERS
  ------------------------------------------------------- */

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  if (isInitialLoad || !resorceData) {
    return <ResourceLoading />;
  }

  const rating = Number(resorceData?.rating || 0).toFixed(1);

  const progress =
    stepData?.length > 0
      ? (completedSteps.length / stepData.length) * 100
      : 0;

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#141F19] font-sans pt-24">
      {/* -------------------------------------------------------
          DESKTOP SIDE NAV
      ------------------------------------------------------- */}

      <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-30">
        <div className="border-l border-[#E3E8E3] pl-5 space-y-4">
          {[
            {
              id: "hero",
              label: "Overview",
            },
            {
              id: "how-to-use",
              label: "How to Use",
            },
            {
              id: "reviews",
              label: "Reviews",
            },
            {
              id: "roadmap",
              label: "Roadmap",
            },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block text-left text-xs font-semibold transition-colors ${
                activeTOC === item.id
                  ? "text-[#3F7A5B]"
                  : "text-[#8A988E] hover:text-[#3F7A5B]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        {/* -------------------------------------------------------
            BACK
        ------------------------------------------------------- */}

        <div className="mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4B5C53] hover:text-[#3F7A5B] transition-colors"
          >
            <ArrowLeft size={17} />
            Back
          </button>
        </div>

        {/* -------------------------------------------------------
            HERO
        ------------------------------------------------------- */}

        <motion.section
          id="hero"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="border-b border-[#E3E8E3] pb-12"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="max-w-3xl">
              {/* Meta */}

              <div className="flex items-center gap-4 mb-5">
                <span className="inline-flex px-2.5 py-1 bg-[#E7F1EA] text-[#3F7A5B] text-[11px] font-bold uppercase tracking-wide rounded-md">
                  {resorceData?.pricing}
                </span>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#4B5C53]">
                  <Star
                    size={14}
                    fill="currentColor"
                    className="text-[#3F7A5B]"
                  />
                  {rating}
                </div>
              </div>

              {/* Title */}

              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#141F19] leading-tight">
                {resorceData?.name}
              </h1>

              <p className="mt-5 text-base md:text-lg leading-8 text-[#4B5C53] max-w-2xl">
                {resorceData?.whatItDoes}
              </p>

              {/* Categories */}

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
                {Array.isArray(resorceData?.category) &&
                  resorceData.category.map((cat, index) => (
                    <span
                      key={index}
                      className="text-xs font-semibold text-[#8A988E]"
                    >
                      #
                      {typeof cat === "string"
                        ? cat
                        : cat.label}
                    </span>
                  ))}
              </div>

              {/* CTA */}

              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  onClick={() =>
                    scrollToSection("roadmap")
                  }
                  className="px-5 py-2.5 rounded-md bg-[#3F7A5B] text-white text-sm font-bold hover:bg-[#336249] transition-colors"
                >
                  Start Learning
                </button>

                <button
                  onClick={() =>
                    scrollToSection("how-to-use")
                  }
                  className="px-5 py-2.5 rounded-md border border-[#E3E8E3] bg-white text-[#4B5C53] text-sm font-semibold hover:border-[#3F7A5B] hover:text-[#3F7A5B] transition-colors"
                >
                  How it works
                </button>
              </div>
            </div>

            {/* Bookmark */}

            <div className="flex-shrink-0">
              <button
                onClick={toggleBookmark}
                disabled={bookmarkLoading}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-md border text-sm font-bold transition-colors ${
                  bookmarked
                    ? "bg-[#3F7A5B] border-[#3F7A5B] text-white"
                    : "bg-white border-[#E3E8E3] text-[#4B5C53] hover:border-[#3F7A5B] hover:text-[#3F7A5B]"
                } disabled:opacity-60`}
              >
                <Bookmark
                  size={17}
                  className={
                    bookmarked ? "fill-current" : ""
                  }
                />

                {bookmarked ? "Saved" : "Save"}

                <span className="text-xs opacity-70">
                  {bookmarkCount}
                </span>
              </button>
            </div>
          </div>
        </motion.section>

        {/* -------------------------------------------------------
            HOW TO USE + REVIEWS
        ------------------------------------------------------- */}

        <section
          id="how-to-use"
          className="py-16 border-b border-[#E3E8E3]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">
            {/* HOW IT WORKS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#3F7A5B] mb-2">
                  Getting Started
                </p>

                <h2 className="text-2xl font-black">
                  How it works
                </h2>
              </div>

              <div className="divide-y divide-[#E3E8E3]">
                {resorceData?.howToUse?.map(
                  (step, index) => (
                    <div
                      key={index}
                      className="flex gap-5 py-5 first:pt-0 last:pb-0"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#E7F1EA] text-[#3F7A5B] flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-7 text-[#4B5C53]">
                        {step}
                      </p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* REVIEWS */}

            <motion.div
              id="reviews"
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-7">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#3F7A5B] mb-2">
                    Community
                  </p>

                  <h2 className="text-2xl font-black">
                    Reviews
                  </h2>

                  <p className="text-sm text-[#8A988E] mt-1">
                    {rating} / 5 · {reviews.length} reviews
                  </p>
                </div>

                <button
                  onClick={() =>
                    setIsReviewOpen(!isReviewOpen)
                  }
                  disabled={loading}
                  className="text-xs font-bold text-[#3F7A5B] hover:text-[#336249] transition-colors whitespace-nowrap"
                >
                  {isReviewOpen
                    ? "Cancel"
                    : "Write review"}
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
                    className="border-y border-[#E3E8E3] py-6 mb-5 overflow-hidden"
                  >
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map(
                        (num) => (
                          <button
                            type="button"
                            key={num}
                            onClick={() =>
                              setUserReview({
                                ...userReview,
                                rating: num,
                              })
                            }
                          >
                            <Star
                              size={18}
                              className={
                                num <=
                                userReview.rating
                                  ? "text-[#3F7A5B] fill-[#3F7A5B]"
                                  : "text-[#E3E8E3]"
                              }
                            />
                          </button>
                        )
                      )}
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
                      placeholder="Share your experience..."
                      className="w-full min-h-28 resize-none bg-white border border-[#E3E8E3] rounded-md p-3 text-sm text-[#141F19] placeholder:text-[#8A988E] focus:outline-none focus:border-[#3F7A5B]"
                    />

                    <button
                      disabled={loading}
                      className="mt-3 px-4 py-2.5 bg-[#3F7A5B] text-white rounded-md text-sm font-bold hover:bg-[#336249] transition-colors disabled:opacity-60"
                    >
                      {loading
                        ? "Submitting..."
                        : "Submit Review"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* REVIEWS */}

              <div className="divide-y divide-[#E3E8E3]">
                {visibleReviews.length > 0 ? (
                  visibleReviews.map((rev) => (
                    <div
                      key={
                        rev.id ||
                        rev._id ||
                        `${rev.name}-${rev.date}`
                      }
                      className="py-5 first:pt-0"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <User
                            size={15}
                            className="text-[#8A988E]"
                          />

                          <span className="text-sm font-bold">
                            {rev.name}
                          </span>

                          <span className="text-[9px] font-bold tracking-wide text-[#3F7A5B] bg-[#E7F1EA] px-2 py-0.5 rounded">
                            VERIFIED
                          </span>
                        </div>

                        <span className="text-[11px] text-[#8A988E]">
                          {timeAgo(rev.date)}
                        </span>
                      </div>

                      <div className="flex gap-0.5 mb-2">
                        {[...Array(Math.floor(rev.rating))].map(
                          (_, i) => (
                            <Star
                              key={i}
                              size={12}
                              fill="currentColor"
                              className="text-[#3F7A5B]"
                            />
                          )
                        )}
                      </div>

                      <p className="text-sm leading-6 text-[#4B5C53]">
                        {rev.comment}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-[#8A988E] py-5">
                    No reviews yet. Be the first to
                    review this resource.
                  </p>
                )}
              </div>

              {visibleCount < reviews.length && (
                <button
                  onClick={() =>
                    setVisibleCount(
                      (prev) =>
                        prev + REVIEWS_PER_PAGE
                    )
                  }
                  className="mt-5 text-sm font-bold text-[#3F7A5B] hover:text-[#336249]"
                >
                  Load more reviews →
                </button>
              )}
            </motion.div>
          </div>
        </section>

        {/* -------------------------------------------------------
            ROADMAP
        ------------------------------------------------------- */}

        <section
          id="roadmap"
          className="pt-16"
        >
          <div className="border-b border-[#E3E8E3] pb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#3F7A5B] mb-2">
              Learning Path
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              {resorceData?.name} roadmap
            </h2>

            <p className="text-[#4B5C53] mt-3 max-w-2xl">
              Follow the learning path step by step and
              track your progress as you go.
            </p>
          </div>

          {/* LEVELS */}

          <div className="flex flex-wrap gap-2 py-7 border-b border-[#E3E8E3]">
            {[
              "beginner",
              "intermediate",
              "advanced",
            ].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`px-4 py-2 rounded-md text-sm font-bold capitalize transition-colors ${
                  level === lvl
                    ? "bg-[#3F7A5B] text-white"
                    : "bg-white border border-[#E3E8E3] text-[#4B5C53] hover:border-[#3F7A5B] hover:text-[#3F7A5B]"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={level}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="pt-10"
            >
              {/* LEVEL TITLE */}

              <div className="mb-12">
                <h3 className="text-2xl font-black capitalize">
                  {data?.title || level} level
                </h3>

                <p className="text-sm text-[#8A988E] mt-2">
                  {data?.description}
                </p>
              </div>

              {/* WHO SHOULD USE */}

              {data?.whoShouldUse?.length > 0 && (
                <section className="pb-12 border-b border-[#E3E8E3]">
                  <h4 className="text-lg font-black mb-5">
                    Who should use this?
                  </h4>

                  <ul className="space-y-3">
                    {data.whoShouldUse.map(
                      (item, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-sm text-[#4B5C53] leading-6"
                        >
                          <span className="text-[#3F7A5B] font-bold">
                            ✓
                          </span>

                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </section>
              )}

              {/* STEP BY STEP */}

              {stepData && (
                <section className="py-12 border-b border-[#E3E8E3]">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
                    <div>
                      <h4 className="text-lg font-black">
                        Step-by-step learning
                      </h4>

                      <p className="text-sm text-[#8A988E] mt-1">
                        {completedSteps.length} of{" "}
                        {stepData.length} steps
                        completed
                      </p>
                    </div>

                    <span className="text-sm font-bold text-[#3F7A5B]">
                      {Math.round(progress)}%
                    </span>
                  </div>

                  {/* PROGRESS */}

                  <div className="w-full h-2 bg-[#E7F1EA] rounded-full overflow-hidden mb-10">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${progress}%`,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="h-full bg-[#3F7A5B]"
                    />
                  </div>

                  {/* STEPS */}

                  <div className="relative">
                    <div className="absolute left-[15px] top-4 bottom-4 w-px bg-[#E3E8E3]" />

                    <div className="space-y-8">
                      {stepData.map(
                        (step, index) => {
                          const isCompleted =
                            completedSteps.includes(
                              step.step
                            );

                          return (
                            <motion.div
                              key={index}
                              initial={{
                                opacity: 0,
                              }}
                              whileInView={{
                                opacity: 1,
                              }}
                              viewport={{
                                once: true,
                              }}
                              className="relative flex gap-5"
                            >
                              {/* NUMBER */}

                              <div
                                className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${
                                  isCompleted
                                    ? "bg-[#3F7A5B] border-[#3F7A5B] text-white"
                                    : "bg-[#FAFAF8] border-[#E3E8E3] text-[#3F7A5B]"
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle2
                                    size={16}
                                  />
                                ) : (
                                  step.step
                                )}
                              </div>

                              <div className="flex-1 pb-2">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                  <h5 className="font-bold text-[#141F19]">
                                    {step.title}
                                  </h5>

                                  <button
                                    onClick={() =>
                                      toggleStepCompletion(
                                        step.step
                                      )
                                    }
                                    className={`text-xs font-bold px-3 py-1.5 rounded-md transition-colors ${
                                      isCompleted
                                        ? "bg-[#E7F1EA] text-[#3F7A5B]"
                                        : "bg-white border border-[#E3E8E3] text-[#4B5C53] hover:border-[#3F7A5B] hover:text-[#3F7A5B]"
                                    }`}
                                  >
                                    {isCompleted
                                      ? "Completed"
                                      : "Mark complete"}
                                  </button>
                                </div>

                                <ul className="mt-3 space-y-2">
                                  {step.details?.map(
                                    (
                                      detail,
                                      detailIndex
                                    ) => (
                                      <li
                                        key={
                                          detailIndex
                                        }
                                        className="text-sm leading-6 text-[#4B5C53] flex gap-2"
                                      >
                                        <span className="text-[#8A988E]">
                                          •
                                        </span>
                                        <span>
                                          {detail}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </motion.div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </section>
              )}

              {/* RELATED AI TOOLS */}

              {data?.tools?.length > 0 && (
                <section className="py-12 border-b border-[#E3E8E3]">
                  <h4 className="text-lg font-black mb-5">
                    Related AI tools
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {data.tools.map(
                      (tool, index) => (
                        <a
                          key={index}
                          href={tool.link}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-md border border-[#E3E8E3] bg-white text-sm font-semibold text-[#4B5C53] hover:border-[#3F7A5B] hover:text-[#3F7A5B] transition-colors"
                        >
                          {tool.name}
                        </a>
                      )
                    )}
                  </div>
                </section>
              )}

              {/* LEARNING RESOURCES */}

              {data?.resources && (
                <section className="py-12 border-b border-[#E3E8E3]">
                  <h4 className="text-lg font-black mb-8">
                    Learning resources
                  </h4>

                  <div className="space-y-10">
                    <ResourceList
                      title="Documentation"
                      items={
                        data.resources
                          .documentation
                      }
                    />

                    <ResourceList
                      title="Tutorials"
                      items={
                        data.resources
                          .tutorials
                      }
                    />

                    <ResourceList
                      title="GitHub Repositories"
                      items={
                        data.resources.github
                      }
                    />

                    {data.resources.prompts
                      ?.length > 0 && (
                      <div>
                        <p className="font-bold text-sm mb-3">
                          Prompts / Snippets
                        </p>

                        <ul className="space-y-2">
                          {data.resources.prompts.map(
                            (prompt, index) => (
                              <li
                                key={index}
                                className="text-sm text-[#4B5C53] leading-6"
                              >
                                <span className="text-[#3F7A5B] mr-2">
                                  •
                                </span>
                                {prompt}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* PROJECT IDEAS */}

              {data?.projects?.length > 0 && (
                <section className="pt-12">
                  <h4 className="text-lg font-black mb-5">
                    Project ideas
                  </h4>

                  <ul className="space-y-3">
                    {data.projects.map(
                      (project, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-sm text-[#4B5C53] leading-6"
                        >
                          <span className="text-[#3F7A5B] font-bold">
                            →
                          </span>

                          {project}
                        </li>
                      )
                    )}
                  </ul>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}

