"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Star,
  LayoutGrid,
  Search,
  Filter,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AIContext } from "../Context/AitoolsContext";
import { MyContext } from "../Context/RsourcesContext";

const CategoryFull = () => {
  const { AIToolsData } = useContext(AIContext);
  const { Technologyes_Data } = useContext(MyContext);

  const [AiToolData, setAIToolData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [active, setActive] = useState([]);

  const navigate = useNavigate();

  /* -------------------- INITIAL DATA -------------------- */

  useEffect(() => {
    setAIToolData(AIToolsData || []);
  }, [AIToolsData]);

  useEffect(() => {
    if (Technologyes_Data?.length) {
      setActive(Technologyes_Data.map((tech) => tech.name));
    }
  }, [Technologyes_Data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* -------------------- CATEGORIES -------------------- */

  const filteredCategories = useMemo(() => {
    return active.filter((cat) =>
      cat.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [active, searchQuery]);

  /* -------------------- TOOLS -------------------- */

  const filteredTools = useMemo(() => {
    if (!selectedCategory) return AiToolData;

    return AiToolData?.filter((tool) =>
      tool.category?.includes(selectedCategory)
    );
  }, [AiToolData, selectedCategory]);

  /* -------------------- HANDLERS -------------------- */

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
  };

  const resetCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#141F19] pt-20">
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* =====================================================
            DESKTOP SIDEBAR
        ====================================================== */}

        <aside className="hidden lg:flex w-[280px] shrink-0 flex-col border-r border-[#E3E8E3] bg-white sticky top-20 h-[calc(100vh-80px)]">
          {/* Sidebar Header */}
          <div className="px-6 pt-7 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] bg-[#E7F1EA] flex items-center justify-center">
                <Filter size={17} className="text-[#3F7A5B]" />
              </div>

              <div>
                <h2 className="text-[15px] font-bold text-[#141F19]">
                  Categories
                </h2>
                <p className="text-xs text-[#8A988E] mt-0.5">
                  Browse AI tools
                </p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="px-5 pb-5">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A988E]"
              />

              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                  w-full
                  h-10
                  pl-10
                  pr-3
                  rounded-[10px]
                  bg-[#FAFAF8]
                  border border-[#E3E8E3]
                  text-sm
                  text-[#141F19]
                  placeholder:text-[#8A988E]
                  outline-none
                  transition
                  focus:border-[#3F7A5B]
                  focus:ring-2
                  focus:ring-[#3F7A5B]/10
                "
              />
            </div>
          </div>

          {/* Category List */}
          <div className="flex-1 overflow-y-auto px-4 pb-6">
            <div className="space-y-1">
              {/* All */}
              <button
                onClick={resetCategory}
                className={`
                  w-full
                  flex
                  items-center
                  justify-between
                  px-3.5
                  py-2.5
                  rounded-[10px]
                  text-sm
                  transition-all
                  ${
                    !selectedCategory
                      ? "bg-[#E7F1EA] text-[#336249] font-semibold"
                      : "text-[#4B5C53] hover:bg-[#FAFAF8]"
                  }
                `}
              >
                <span>All Resources</span>

                <span
                  className={`
                    text-[11px]
                    ${
                      !selectedCategory
                        ? "text-[#3F7A5B]"
                        : "text-[#8A988E]"
                    }
                  `}
                >
                  {AiToolData?.length || 0}
                </span>
              </button>

              {/* Categories */}
              {filteredCategories.map((cat) => {
                const count =
                  AiToolData?.filter((tool) =>
                    tool.category?.includes(cat)
                  ).length || 0;

                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`
                      w-full
                      flex
                      items-center
                      justify-between
                      gap-3
                      px-3.5
                      py-2.5
                      rounded-[10px]
                      text-sm
                      text-left
                      transition-all
                      ${
                        isActive
                          ? "bg-[#E7F1EA] text-[#336249] font-semibold"
                          : "text-[#4B5C53] hover:bg-[#FAFAF8]"
                      }
                    `}
                  >
                    <span className="truncate">{cat}</span>

                    <span
                      className={`
                        shrink-0
                        text-[11px]
                        ${
                          isActive
                            ? "text-[#3F7A5B]"
                            : "text-[#8A988E]"
                        }
                      `}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* =====================================================
            MOBILE FILTER
        ====================================================== */}

        <AnimatePresence>
          {isFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFilterOpen(false)}
                className="fixed inset-0 bg-[#141F19] z-40 lg:hidden"
              />

              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="
                  fixed
                  top-0
                  left-0
                  bottom-0
                  z-50
                  w-[300px]
                  bg-white
                  border-r
                  border-[#E3E8E3]
                  lg:hidden
                "
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-[#E3E8E3]">
                  <div>
                    <h2 className="font-bold text-[#141F19]">
                      Categories
                    </h2>
                    <p className="text-xs text-[#8A988E] mt-1">
                      Filter resources
                    </p>
                  </div>

                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-[#4B5C53]
                      hover:bg-[#FAFAF8]
                      transition
                    "
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-5">
                  {/* Search */}
                  <div className="relative mb-5">
                    <Search
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A988E]"
                    />

                    <input
                      type="text"
                      placeholder="Search categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="
                        w-full
                        h-10
                        pl-10
                        pr-3
                        rounded-[10px]
                        bg-[#FAFAF8]
                        border border-[#E3E8E3]
                        text-sm
                        text-[#141F19]
                        placeholder:text-[#8A988E]
                        outline-none
                        focus:border-[#3F7A5B]
                        focus:ring-2
                        focus:ring-[#3F7A5B]/10
                      "
                    />
                  </div>

                  <div className="space-y-1 overflow-y-auto max-h-[calc(100vh-180px)]">
                    <button
                      onClick={resetCategory}
                      className={`
                        w-full
                        flex
                        items-center
                        justify-between
                        px-3.5
                        py-2.5
                        rounded-[10px]
                        text-sm
                        ${
                          !selectedCategory
                            ? "bg-[#E7F1EA] text-[#336249] font-semibold"
                            : "text-[#4B5C53] hover:bg-[#FAFAF8]"
                        }
                      `}
                    >
                      <span>All Resources</span>
                      <span className="text-xs text-[#8A988E]">
                        {AiToolData?.length || 0}
                      </span>
                    </button>

                    {filteredCategories.map((cat) => {
                      const count =
                        AiToolData?.filter((tool) =>
                          tool.category?.includes(cat)
                        ).length || 0;

                      const isActive = selectedCategory === cat;

                      return (
                        <button
                          key={cat}
                          onClick={() => handleCategorySelect(cat)}
                          className={`
                            w-full
                            flex
                            items-center
                            justify-between
                            gap-3
                            px-3.5
                            py-2.5
                            rounded-[10px]
                            text-sm
                            text-left
                            ${
                              isActive
                                ? "bg-[#E7F1EA] text-[#336249] font-semibold"
                                : "text-[#4B5C53] hover:bg-[#FAFAF8]"
                            }
                          `}
                        >
                          <span className="truncate">{cat}</span>
                          <span className="text-xs text-[#8A988E]">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <main className="flex-1 min-w-0">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-7 lg:px-10 py-8 lg:py-10">
            {/* Top Navigation */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <button
                onClick={() => navigate("/")}
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
                <ArrowLeft size={16} />
                Back
              </button>

              <button
                onClick={() => setIsFilterOpen(true)}
                className="
                  lg:hidden
                  inline-flex
                  items-center
                  gap-2
                  h-9
                  px-3.5
                  rounded-[10px]
                  bg-white
                  border
                  border-[#E3E8E3]
                  text-sm
                  font-semibold
                  text-[#4B5C53]
                  shadow-sm
                "
              >
                <Filter size={16} />
                Filter
              </button>
            </div>

            {/* Page Heading */}
            <header className="mb-9">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-px bg-[#3F7A5B]" />

                    <span className="text-[#3F7A5B] font-bold tracking-[0.14em] text-[11px] uppercase">
                      Curated Collection
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-[42px] leading-tight font-bold tracking-[-0.03em] text-[#141F19]">
                    {selectedCategory || "Explore All Tools"}
                  </h1>

                  <p className="mt-3 text-sm sm:text-[15px] text-[#4B5C53] max-w-2xl leading-6">
                    Discover carefully selected AI tools and resources
                    organized by category.
                  </p>
                </div>

                <AnimatePresence>
                  {selectedCategory && (
                    <motion.button
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      onClick={resetCategory}
                      className="
                        shrink-0
                        inline-flex
                        items-center
                        gap-2
                        h-10
                        px-4
                        rounded-[10px]
                        border
                        border-[#E3E8E3]
                        bg-white
                        text-sm
                        font-semibold
                        text-[#4B5C53]
                        hover:border-[#3F7A5B]
                        hover:text-[#3F7A5B]
                        transition-all
                      "
                    >
                      <ArrowLeft size={15} />
                      Reset View
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </header>

            {/* =================================================
                TOOLS
            ================================================== */}

            <motion.div
              layout
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                gap-x-5
                gap-y-7
              "
            >
              <AnimatePresence mode="popLayout">
                {filteredTools?.map((tool) => (
                  <motion.article
                    key={tool._id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25 }}
                    className="
                      group
                      bg-white
                      border
                      border-[#E3E8E3]
                      rounded-[20px]
                      overflow-hidden
                      transition-all
                      duration-300
                      hover:border-[#B9CDBF]
                      hover:-translate-y-0.5
                      hover:shadow-[0_12px_35px_rgba(20,31,25,0.07)]
                    "
                  >
                    {/* Image */}
                    <Link
                      to={`/Ai-Tools/${tool._id}`}
                      className="block"
                    >
                      <div className="h-[190px] overflow-hidden bg-[#E7F1EA]">
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="
                            w-full
                            h-full
                            object-cover
                            group-hover:scale-[1.03]
                            transition-transform
                            duration-500
                          "
                        />
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="
                            text-[17px]
                            font-bold
                            text-[#141F19]
                            truncate
                            group-hover:text-[#3F7A5B]
                            transition-colors
                          ">
                            {tool.name}
                          </h3>

                          {tool.category?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {tool.category.slice(0, 2).map((cat) => (
                                <span
                                  key={cat}
                                  className="
                                    px-2
                                    py-1
                                    rounded-md
                                    bg-[#E7F1EA]
                                    text-[#336249]
                                    text-[10px]
                                    font-semibold
                                  "
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Rating */}
                        <div
                          className="
                            shrink-0
                            flex
                            items-center
                            gap-1
                            text-[#4B5C53]
                          "
                        >
                          <Star
                            size={14}
                            className="text-[#C78A35] fill-[#C78A35]"
                          />

                          <span className="text-xs font-bold">
                            {Number(tool.rating || 0).toFixed(1)}
                          </span>
                        </div>
                      </div>

                      <p className="
                        text-sm
                        text-[#4B5C53]
                        mt-3
                        leading-[1.65]
                        line-clamp-2
                      ">
                        {tool.whatItDoes}
                      </p>

                      {/* Bottom */}
                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#E3E8E3]">
                        <span className="text-xs text-[#8A988E]">
                          {tool.pricing || "Pricing unavailable"}
                        </span>

                        <Link
                          to={`/Ai-Tools/${tool._id}`}
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            text-sm
                            font-semibold
                            text-[#3F7A5B]
                            hover:text-[#336249]
                            transition-colors
                          "
                        >
                          View details
                          <ExternalLink size={13} />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* =================================================
                EMPTY STATE
            ================================================== */}

            {filteredTools?.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  min-h-[380px]
                  text-center
                  border
                  border-dashed
                  border-[#D5DED7]
                  rounded-[20px]
                  bg-white/50
                "
              >
                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#E7F1EA]
                  flex
                  items-center
                  justify-center
                  mb-5
                ">
                  <LayoutGrid
                    size={25}
                    strokeWidth={1.7}
                    className="text-[#3F7A5B]"
                  />
                </div>

                <h2 className="text-lg font-bold text-[#141F19]">
                  No tools found
                </h2>

                <p className="text-sm text-[#8A988E] mt-2 max-w-sm">
                  No resources are available in this category. Try
                  selecting another category.
                </p>

                {selectedCategory && (
                  <button
                    onClick={resetCategory}
                    className="
                      mt-5
                      px-4
                      h-9
                      rounded-[9px]
                      bg-[#3F7A5B]
                      text-white
                      text-sm
                      font-semibold
                      hover:bg-[#336249]
                      transition-colors
                    "
                  >
                    View all tools
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryFull;