
"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Star,
  ExternalLink,
  ChevronDown,
  ArrowLeft,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { AIContext } from "../Context/AitoolsContext";
import { Link, useNavigate } from "react-router";

/* =========================================================
   SMALL UI COMPONENTS
========================================================= */

const PricingBadge = ({ pricing }) => {
  const styles = {
    Free: "bg-[#E7F1EA] text-[#3F7A5B] border-[#CFE2D5]",
    Paid: "bg-[#F3EEE6] text-[#806B4A] border-[#E4D9C8]",
    Freemium: "bg-[#EEF2ED] text-[#52665A] border-[#DCE5DE]",
  };

  const style =
    styles[pricing] ||
    "bg-[#F1F3F1] text-[#5F6C63] border-[#E1E5E1]";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full border text-[11px] font-semibold ${style}`}
    >
      {pricing || "Unknown"}
    </span>
  );
};

/* =========================================================
   IMAGE FALLBACK
========================================================= */

const ToolImage = ({ src, name }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="w-12 h-12 shrink-0 rounded-[10px] bg-[#E7F1EA] text-[#3F7A5B] flex items-center justify-center font-bold text-lg">
        {name?.charAt(0)?.toUpperCase() || "A"}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setHasError(true)}
      className="w-12 h-12 shrink-0 rounded-[10px] object-cover border border-[#E3E8E3]"
    />
  );
};

/* =========================================================
   TOOL CARD
   Different from Category page:
   Editorial horizontal-content style inside a clean grid.
========================================================= */


const ToolCard = ({ tool }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    navigate(`/Ai-Tools/${tool._id}`);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.25 }}
      className="
        group
        border-b border-[#E3E8E3]
        pb-6
        last:border-b-0
        md:last:border-b
        transition-all
        duration-300
      "
    >
      {/* Main content */}
      <div className="flex items-start gap-4">
        {/* Tool Image */}
        <div
          className="
            shrink-0
            transition-transform
            duration-300
            group-hover:scale-[1.04]
          "
        >
          <ToolImage
            src={tool.image}
            name={tool.name}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                className="
                  text-[17px]
                  font-semibold
                  text-[#141F19]
                  leading-snug
                  group-hover:text-[#3F7A5B]
                  transition-colors
                  duration-200
                  truncate
                "
              >
                {tool.name}
              </h3>

              <p className="mt-1 text-[13px] text-[#8A988E]">
                {tool.category?.[0] || "AI Tool"}
              </p>
            </div>

            {/* Rating */}
            <div
              className="
                flex
                items-center
                gap-1.5
                shrink-0
                text-[#806B4A]
              "
            >
              <Star
                size={14}
                fill="currentColor"
                strokeWidth={1.8}
              />

              <span className="text-xs font-semibold">
                {Number(tool.rating || 0).toFixed(1)}
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            className="
              mt-3
              text-sm
              leading-6
              text-[#4B5C53]
              line-clamp-2
              max-w-xl
            "
          >
            {tool.whatItDoes ||
              "Explore this AI tool and its capabilities."}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <PricingBadge pricing={tool.pricing} />

            {tool.category?.slice(0, 2).map((category) => (
              <span
                key={category}
                className="
                  inline-flex
                  items-center
                  px-2.5
                  py-1
                  rounded-full
                  border
                  border-[#E3E8E3]
                  bg-white
                  text-[11px]
                  font-medium
                  text-[#68766D]
                "
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom action */}
      <div className="mt-5 pl-16 flex items-center justify-between gap-4">
        <span
          className="
            text-[11px]
            text-[#8A988E]
            transition-colors
            duration-200
            group-hover:text-[#68766D]
          "
        >
          Curated resource
        </span>

        {/* Highlighted View Details CTA */}
        <button
          onClick={handleViewDetails}
          className="
            group/details
            inline-flex
            items-center
            gap-2
            px-3.5
            py-2
            rounded-[8px]
            bg-[#E7F1EA]
            border
            border-[#CFE2D5]
            text-[#3F7A5B]
            text-sm
            font-semibold
            transition-all
            duration-200
            hover:bg-[#3F7A5B]
            hover:border-[#3F7A5B]
            hover:text-white
            hover:shadow-[0_6px_18px_rgba(63,122,91,0.18)]
            active:scale-[0.97]
            cursor-pointer
          "
        >
          <span>View details</span>

          <ExternalLink
            size={14}
            className="
              transition-transform
              duration-200
              group-hover/details:translate-x-0.5
              group-hover/details:-translate-y-0.5
            "
          />
        </button>
      </div>
    </motion.article>
  );
};



/* =========================================================
   SKELETON
========================================================= */

const ToolSkeleton = () => {
  return (
    <div className="border-b border-[#E3E8E3] pb-6 animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-[10px] bg-[#E8ECE9] shrink-0" />

        <div className="flex-1">
          <div className="h-4 w-40 bg-[#E8ECE9] rounded mb-2" />
          <div className="h-3 w-24 bg-[#EEF1EF] rounded mb-4" />

          <div className="h-3 w-full max-w-lg bg-[#EEF1EF] rounded mb-2" />
          <div className="h-3 w-3/4 max-w-md bg-[#EEF1EF] rounded mb-5" />

          <div className="flex gap-2">
            <div className="h-6 w-16 bg-[#E8ECE9] rounded-full" />
            <div className="h-6 w-24 bg-[#EEF1EA] rounded-full" />
          </div>
        </div>
      </div>

      <div className="mt-5 ml-16 h-4 w-24 bg-[#EEF1EF] rounded" />
    </div>
  );
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function Ai_Tools() {
  const { AIToolsData } = useContext(AIContext);

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activePrice, setActivePrice] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  /* =========================================================
     PAGE SCROLL
  ========================================================= */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     CATEGORIES
  ========================================================= */

  const categories = useMemo(() => {
    if (!Array.isArray(AIToolsData)) return [];

    const allCategories = AIToolsData.flatMap(
      (tool) => tool.category || []
    );

    return ["All", ...new Set(allCategories)];
  }, [AIToolsData]);

  /* =========================================================
     FILTER
  ========================================================= */

  const filteredTools = useMemo(() => {
    if (!Array.isArray(AIToolsData)) return [];

    const normalizedSearch = search.trim().toLowerCase();

    return AIToolsData.filter((tool) => {
      const toolName = tool.name?.toLowerCase() || "";
      const description = tool.whatItDoes?.toLowerCase() || "";

      /* Search */
      const matchesSearch =
        !normalizedSearch ||
        toolName.includes(normalizedSearch) ||
        description.includes(normalizedSearch);

      /* Category */
      const matchesCategory =
        activeCategory === "All" ||
        tool.category?.some(
          (category) =>
            category.toLowerCase() === activeCategory.toLowerCase()
        );

      /* Pricing */
      const matchesPrice =
        activePrice === "All" ||
        tool.pricing?.toLowerCase() === activePrice.toLowerCase();

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice
      );
    });
  }, [
    AIToolsData,
    search,
    activeCategory,
    activePrice,
  ]);

  /* =========================================================
     RESET VISIBLE COUNT WHEN FILTER CHANGES
  ========================================================= */

  useEffect(() => {
    setVisibleCount(8);
  }, [search, activeCategory, activePrice]);

  /* =========================================================
     CLEAR FILTERS
  ========================================================= */

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setActivePrice("All");
    setVisibleCount(8);
  };

  const hasActiveFilters =
    search.trim() ||
    activeCategory !== "All" ||
    activePrice !== "All";

  /* =========================================================
     LOADING
  ========================================================= */

  const isLoading = !Array.isArray(AIToolsData);

  /* =========================================================
     UI
  ========================================================= */

  return (
    <div
      className="
        min-h-screen
        bg-[#FAFAF8]
        text-[#141F19]
        pt-20
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`
          sticky
          top-0
          z-40
          transition-all
          duration-300
          ${
            isScrolled
              ? "bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E3E8E3]"
              : "bg-[#FAFAF8]"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="h-[72px] flex items-center justify-between gap-4">
            {/* Back */}
            <button
              onClick={() => navigate(-1)}
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#4B5C53]
                hover:text-[#3F7A5B]
                transition-colors
              "
            >
              <ArrowLeft size={17} />
              <span className="hidden sm:inline">
                Back
              </span>
            </button>

            {/* Page label */}
            <div className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A988E]">
              <Sparkles size={14} className="text-[#3F7A5B]" />
              AI Tools Directory
            </div>

            {/* Mobile filters */}
            <button
              onClick={() =>
                setIsFilterOpen((prev) => !prev)
              }
              className="
                md:hidden
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[#3F7A5B]
              "
            >
              <SlidersHorizontal size={17} />
              Filters
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO / SEARCH
      ===================================================== */}

      <main className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
        <section className="pt-12 md:pt-16 pb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3F7A5B] mb-4">
              Curated collection
            </p>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-semibold
                tracking-[-0.045em]
                leading-[1.05]
                text-[#141F19]
              "
            >
              Find the right AI tool
              <span className="text-[#3F7A5B]">
                {" "}for the job.
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                md:text-lg
                leading-7
                text-[#4B5C53]
              "
            >
              Explore a curated collection of AI tools,
              compare their capabilities, and discover
              resources that fit the way you work.
            </p>
          </div>

          {/* Search */}
          <div className="mt-9 max-w-3xl">
            <div className="relative">
              <Search
                size={19}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#8A988E]
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search tools by name or capability..."
                className="
                  w-full
                  h-14
                  pl-11
                  pr-12
                  bg-white
                  border
                  border-[#E3E8E3]
                  rounded-[12px]
                  outline-none
                  text-[#141F19]
                  placeholder:text-[#9AA59D]
                  focus:border-[#3F7A5B]
                  focus:ring-4
                  focus:ring-[#3F7A5B]/10
                  transition-all
                "
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#8A988E]
                    hover:text-[#141F19]
                  "
                >
                  <X size={17} />
                </button>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            FILTER BAR
        ===================================================== */}

        <section
          className={`
            ${
              isFilterOpen
                ? "block"
                : "hidden md:block"
            }
            border-y
            border-[#E3E8E3]
            py-5
            mb-10
          `}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <span className="text-xs font-semibold text-[#8A988E] mr-1 shrink-0">
                Category
              </span>

              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`
                      shrink-0
                      px-3.5
                      py-2
                      rounded-full
                      text-xs
                      font-semibold
                      border
                      transition-all
                      ${
                        isActive
                          ? "bg-[#3F7A5B] border-[#3F7A5B] text-white"
                          : "bg-white border-[#E3E8E3] text-[#4B5C53] hover:border-[#3F7A5B] hover:text-[#3F7A5B]"
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-semibold text-[#8A988E]">
                Pricing
              </span>

              <div className="relative">
                <select
                  value={activePrice}
                  onChange={(e) =>
                    setActivePrice(e.target.value)
                  }
                  className="
                    appearance-none
                    bg-white
                    border
                    border-[#E3E8E3]
                    rounded-[8px]
                    pl-3
                    pr-9
                    py-2
                    text-xs
                    font-semibold
                    text-[#4B5C53]
                    outline-none
                    cursor-pointer
                    focus:border-[#3F7A5B]
                  "
                >
                  <option value="All">
                    All pricing
                  </option>
                  <option value="Free">
                    Free
                  </option>
                  <option value="Paid">
                    Paid
                  </option>
                  <option value="Freemium">
                    Freemium
                  </option>
                </select>

                <ChevronDown
                  size={14}
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    pointer-events-none
                    text-[#8A988E]
                  "
                />
              </div>
            </div>
          </div>

          {/* Active filters */}
          {hasActiveFilters && (
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-[#8A988E]">
                Filters applied
              </span>

              <button
                onClick={clearFilters}
                className="
                  text-xs
                  font-semibold
                  text-[#3F7A5B]
                  hover:text-[#336249]
                "
              >
                Clear all
              </button>
            </div>
          )}
        </section>

        {/* =====================================================
            RESULT HEADER
        ===================================================== */}

        <div className="flex items-end justify-between gap-4 mb-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A988E] mb-1">
              Directory
            </p>

            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-[#141F19]">
              {isLoading
                ? "Discover AI tools"
                : `${filteredTools.length} tools found`}
            </h2>
          </div>

          {!isLoading && filteredTools.length > 0 && (
            <span className="hidden sm:block text-xs text-[#8A988E]">
              Showing{" "}
              {Math.min(
                visibleCount,
                filteredTools.length
              )}{" "}
              of {filteredTools.length}
            </span>
          )}
        </div>

        {/* =====================================================
            TOOL LIST
        ===================================================== */}

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-7">
            {Array.from({ length: 8 }).map(
              (_, index) => (
                <ToolSkeleton key={index} />
              )
            )}
          </div>
        ) : filteredTools.length > 0 ? (
          <>
            <motion.div
              layout
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-x-12
                gap-y-7
              "
            >
              <AnimatePresence mode="popLayout">
                {filteredTools
                  .slice(0, visibleCount)
                  .map((tool) => (
                    <ToolCard
                      key={tool._id}
                      tool={tool}
                    />
                  ))}
              </AnimatePresence>
            </motion.div>

            {/* =================================================
                PAGINATION ACTION
            ================================================= */}

            <div className="mt-14 pt-8 border-t border-[#E3E8E3] flex flex-col items-center gap-4">
              <p className="text-xs text-[#8A988E]">
                Showing{" "}
                {Math.min(
                  visibleCount,
                  filteredTools.length
                )}{" "}
                of {filteredTools.length} curated tools
              </p>

              <div className="flex items-center gap-3">
                {visibleCount <
                  filteredTools.length && (
                  <button
                    onClick={() =>
                      setVisibleCount(
                        (prev) => prev + 8
                      )
                    }
                    className="
                      px-5
                      py-2.5
                      rounded-[8px]
                      bg-[#3F7A5B]
                      text-white
                      text-sm
                      font-semibold
                      hover:bg-[#336249]
                      transition-colors
                    "
                  >
                    Load more
                  </button>
                )}

                {visibleCount > 8 && (
                  <button
                    onClick={() =>
                      setVisibleCount((prev) =>
                        Math.max(8, prev - 8)
                      )
                    }
                    className="
                      px-5
                      py-2.5
                      rounded-[8px]
                      border
                      border-[#E3E8E3]
                      bg-white
                      text-[#4B5C53]
                      text-sm
                      font-semibold
                      hover:border-[#3F7A5B]
                      hover:text-[#3F7A5B]
                      transition-colors
                    "
                  >
                    Show less
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          /* =================================================
             EMPTY STATE
          ================================================= */

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              py-20
              border-y
              border-[#E3E8E3]
              text-center
            "
          >
            <div
              className="
                w-12
                h-12
                mx-auto
                mb-5
                rounded-[10px]
                bg-[#E7F1EA]
                text-[#3F7A5B]
                flex
                items-center
                justify-center
              "
            >
              <Search size={21} />
            </div>

            <h3 className="text-xl font-semibold text-[#141F19]">
              No tools found
            </h3>

            <p className="mt-2 text-sm text-[#8A988E] max-w-sm mx-auto">
              Try another search term or remove some
              filters to discover more tools.
            </p>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="
                  mt-6
                  text-sm
                  font-semibold
                  text-[#3F7A5B]
                  hover:text-[#336249]
                "
              >
                Clear filters
              </button>
            )}
          </motion.div>
        )}
      </main>

      {/* =====================================================
          LOCAL STYLES
      ===================================================== */}

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
