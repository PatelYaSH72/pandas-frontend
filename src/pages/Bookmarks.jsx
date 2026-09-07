
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { AIContext } from "../Context/AitoolsContext";
import {
  ExternalLink,
  MoveLeft,
  Star,
  Bookmark,
} from "lucide-react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const Bookmarks = () => {
  const { token, backendUrl } = useContext(AIContext);

  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const { data } = await axios.get(
          backendUrl + "/api/user/bookmarks-data",
          {
            headers: { token },
          }
        );

        if (data.success) {
          setBookmarks(data.data);
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchBookmarks();
    }
  }, [token, backendUrl]);

  // Average Rating
  const getAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return "0.0";

    const total = reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    return (total / reviews.length).toFixed(1);
  };

  // =========================
  // LOADING STATE
  // =========================

  if (loading) {
    return (
      <div className="min-h-screen bg-bg text-ink pt-28 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between mb-12">
            <div className="h-9 w-24 bg-accent-soft rounded-md animate-pulse" />

            <div className="h-8 w-52 bg-accent-soft rounded-md animate-pulse" />
          </div>

          {/* Content Skeleton */}
          <div className="space-y-5">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="border-b border-border pb-6 animate-pulse"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-md bg-accent-soft shrink-0" />

                  <div className="flex-1 space-y-3">
                    <div className="h-5 w-48 bg-accent-soft rounded" />
                    <div className="h-4 w-full max-w-xl bg-accent-soft rounded" />
                    <div className="h-3 w-32 bg-accent-soft rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================
  // EMPTY STATE
  // =========================

  if (bookmarks.length === 0) {
    return (
      <div className="min-h-screen bg-bg text-ink pt-28 px-5 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-soft text-accent flex items-center justify-center">
            <Bookmark size={28} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3">
            No bookmarks yet
          </h2>

          <p className="text-ink-soft text-sm md:text-base leading-relaxed mb-7">
            You haven't bookmarked any resources yet. Explore resources and
            save the ones you want to come back to later.
          </p>

          <button
            onClick={() => window.history.back()}
            className="
              inline-flex items-center gap-2
              px-5 py-2.5
              bg-accent text-white
              hover:bg-accent-hover
              rounded-md
              text-sm font-semibold
              transition-colors
            "
          >
            <MoveLeft size={17} />
            Back to Resources
          </button>
        </motion.div>
      </div>
    );
  }

  // =========================
  // MAIN PAGE
  // =========================

  return (
    <div className="min-h-screen bg-bg text-ink pt-28 pb-20 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-12">
          <button
            onClick={() => window.history.back()}
            className="
              inline-flex items-center gap-2
              w-fit
              text-sm font-semibold
              text-ink-soft
              hover:text-accent
              transition-colors
            "
          >
            <MoveLeft size={18} />
            Back
          </button>

          <div className="text-left sm:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-1">
              Your Library
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-ink">
              Bookmarked Resources
            </h1>
          </div>
        </div>

        {/* =========================
            RESOURCE LIST
        ========================= */}

        <div className="border-t border-border">
          {bookmarks.map((item, index) => {
            const IconComponent =
              Icons[item.icon] || Icons.HelpCircle;

            return (
              <motion.article
                key={item._id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                className="
                  group
                  py-7
                  border-b border-border
                  transition-colors
                  hover:bg-accent-soft/40
                  px-3 md:px-5
                  -mx-3 md:-mx-5
                "
              >
                <div className="flex flex-col md:flex-row md:items-center gap-5">

                  {/* =================
                      ICON
                  ================= */}

                  <div
                    className="
                      w-12 h-12
                      shrink-0
                      rounded-md
                      bg-accent-soft
                      text-accent
                      flex items-center justify-center
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  >
                    <IconComponent
                      size={24}
                      strokeWidth={2}
                    />
                  </div>

                  {/* =================
                      CONTENT
                  ================= */}

                  <div className="flex-1 min-w-0">

                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <h2
                        className="
                          text-lg
                          font-semibold
                          text-ink
                          group-hover:text-accent
                          transition-colors
                        "
                      >
                        {item.name}
                      </h2>

                      {item.pricing && (
                        <span
                          className="
                            text-[10px]
                            uppercase
                            tracking-wider
                            font-bold
                            text-accent
                            bg-accent-soft
                            px-2 py-1
                            rounded-sm
                          "
                        >
                          {item.pricing}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-ink-soft leading-relaxed max-w-3xl line-clamp-2">
                      {item.short_description || item.whatItDoes}
                    </p>

                    {/* Categories */}

                    {item.category?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.category.map((cat, i) => (
                          <span
                            key={i}
                            className="
                              text-[11px]
                              font-medium
                              text-ink-muted
                            "
                          >
                            #{cat.label || cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* =================
                      META + ACTION
                  ================= */}

                  <div className="flex items-center justify-between md:justify-end gap-5 md:min-w-[220px]">

                    {/* Rating */}

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-ink-soft">
                      <Star
                        size={15}
                        fill="currentColor"
                        className="text-accent"
                      />

                      <span>
                        {getAverageRating(item.reviews)}
                      </span>
                    </div>

                    {/* Bookmark Count */}

                    <div className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-ink-muted">
                      <Bookmark size={15} />
                      {item.bookmarksCount || 0}
                    </div>

                    {/* View Button */}

                    <a
                      href={`/resources/${item.slug}`}
                      className="
                        inline-flex items-center gap-2
                        px-4 py-2.5
                        rounded-md
                        bg-accent
                        text-white
                        text-xs
                        font-semibold
                        hover:bg-accent-hover
                        hover:gap-2.5
                        transition-all
                        shadow-sm
                        whitespace-nowrap
                      "
                    >
                      View Resource
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================
            FOOTER INFO
        ========================= */}

        <div className="flex items-center justify-between mt-8 text-xs text-ink-muted">
          <span>
            {bookmarks.length}{" "}
            {bookmarks.length === 1 ? "resource" : "resources"} saved
          </span>

          <div className="flex items-center gap-2">
            <Bookmark size={13} />
            <span>Your saved collection</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bookmarks;

