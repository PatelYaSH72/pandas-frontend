"use client";

import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as Icons from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Lock,
  ChevronRight,
  LayoutGrid,
  X,
} from "lucide-react";
import { MyContext } from "../Context/RsourcesContext";

export default function Resources() {
  const { token, backendUrl } = useContext(MyContext);

  const contentCache = useRef({});
  const navigate = useNavigate();

  const [techList, setTechList] = useState([]);
  const [active, setActive] = useState(null);
  const [activeData, setActiveData] = useState(null);
  const [contentLoading, setContentLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --------------------------------------------------
  // Fetch technology list
  // --------------------------------------------------
  useEffect(() => {
    let mounted = true;

    const fetchTechnologyList = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/user/list`, {
          headers: {
            token,
          },
        });

        const json = await response.json();
        const list = json.data || [];

        if (!mounted) return;

        setTechList(list);

        if (list.length > 0) {
          setActive(list[0]);
        }
      } catch (error) {
        console.error("List fetch error:", error);
      }
    };

    fetchTechnologyList();

    return () => {
      mounted = false;
    };
  }, [backendUrl, token]);

  // --------------------------------------------------
  // Fetch selected technology content
  // --------------------------------------------------
  useEffect(() => {
    if (!active?.slug) return;

    const fetchContent = async () => {
      // Cache hit
      if (contentCache.current[active.slug]) {
        setActiveData(contentCache.current[active.slug]);
        return;
      }

      setContentLoading(true);
      setActiveData(null);

      try {
        const response = await fetch(
          `${backendUrl}/api/user/${active.slug}`,
          {
            headers: {
              token,
            },
          }
        );

        const json = await response.json();

        contentCache.current[active.slug] = json.data;
        setActiveData(json.data);
      } catch (error) {
        console.error("Content fetch error:", error);
      } finally {
        setContentLoading(false);
      }
    };

    fetchContent();
  }, [active, backendUrl, token]);

  // --------------------------------------------------
  // Scroll top
  // --------------------------------------------------
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --------------------------------------------------
  // Select technology
  // --------------------------------------------------
  const handleSelect = (tech) => {
    if (!tech || active?.slug === tech.slug) return;

    setActive(tech);
    setIsMenuOpen(false);
  };

  // --------------------------------------------------
  // View complete roadmap
  // --------------------------------------------------
  const handleViewDetails = (slug) => {
    const savedToken = localStorage.getItem("token");

    if (!savedToken) {
      navigate("/login");
      return;
    }

    navigate(`/Resources/${slug}`);
  };

  // --------------------------------------------------
  // Loading state
  // --------------------------------------------------
  if (techList.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin" />
          <p className="text-sm font-medium text-ink-muted">
            Loading resources...
          </p>
        </div>
      </div>
    );
  }

  const ActiveIcon = active
    ? Icons[active.icon] || Icons.Code
    : Icons.Code;

  return (
    <div className="min-h-screen bg-bg text-ink pt-20 pb-16">

      {/* =====================================================
          MOBILE CURRENT TOPIC
      ====================================================== */}
      <div className="lg:hidden sticky top-[72px] z-40 px-4 pt-4 pb-3 bg-bg/95 backdrop-blur-md">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="
            w-full
            flex
            items-center
            justify-between
            py-3
            border-b
            border-border
            text-left
          "
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 shrink-0 rounded-md bg-accent-soft text-accent flex items-center justify-center">
              <ActiveIcon size={18} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                Technology
              </p>

              <p className="text-sm font-semibold text-ink truncate">
                {active?.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-ink-muted shrink-0">
            <span className="text-xs font-medium">Browse</span>
            <LayoutGrid size={16} />
          </div>
        </button>
      </div>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-ink/20 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="
                fixed
                inset-y-0
                left-0
                z-[100]
                w-[min(88vw,360px)]
                bg-surface
                border-r
                border-border
                lg:hidden
                flex
                flex-col
              "
            >
              {/* Drawer header */}
              <div className="px-5 py-5 border-b border-border flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-accent mb-1">
                    Resource Library
                  </p>

                  <h2 className="text-xl font-bold tracking-tight text-ink">
                    Technologies
                  </h2>
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    w-9
                    h-9
                    rounded-md
                    border
                    border-border
                    flex
                    items-center
                    justify-center
                    text-ink-soft
                    hover:bg-accent-soft
                    hover:text-accent
                    transition-colors
                  "
                >
                  <X size={18} />
                </button>
              </div>

              {/* Technology list */}
              <div className="flex-1 overflow-y-auto px-4 py-5">
                <div className="space-y-1">
                  {techList.map((cat) => {
                    const IconComponent =
                      Icons[cat.icon] || HelpCircle;

                    const isActive = active?.slug === cat.slug;

                    return (
                      <button
                        key={cat.slug}
                        onClick={() => handleSelect(cat)}
                        className={`
                          w-full
                          flex
                          items-center
                          gap-3
                          px-3
                          py-3
                          text-left
                          border-b
                          transition-colors
                          ${
                            isActive
                              ? "border-accent/20 bg-accent-soft text-accent"
                              : "border-transparent text-ink-soft hover:bg-bg hover:text-ink"
                          }
                        `}
                      >
                        <IconComponent size={17} />

                        <span className="text-sm font-medium flex-1">
                          {cat.name}
                        </span>

                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        )}
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
          MAIN LAYOUT
      ====================================================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[230px_minmax(0,1fr)] gap-12 xl:gap-20">

          {/* =================================================
              DESKTOP SIDEBAR
          ================================================== */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">

              {/* Sidebar heading */}
              <div className="mb-7">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-1.5">
                  Resource Library
                </p>

                <h2 className="text-lg font-bold tracking-tight text-ink">
                  Technologies
                </h2>
              </div>

              {/* Navigation */}
              <nav className="space-y-0.5">
                {techList.map((cat) => {
                  const IconComponent =
                    Icons[cat.icon] || HelpCircle;

                  const isActive = active?.slug === cat.slug;

                  return (
                    <button
                      key={cat.slug}
                      onClick={() => handleSelect(cat)}
                      className={`
                        w-full
                        flex
                        items-center
                        gap-3
                        px-3
                        py-2.5
                        text-left
                        border-l-2
                        transition-all
                        ${
                          isActive
                            ? "border-accent bg-accent-soft text-accent"
                            : "border-transparent text-ink-soft hover:border-border hover:bg-surface hover:text-ink"
                        }
                      `}
                    >
                      <IconComponent size={16} />

                      <span className="text-sm font-medium truncate">
                        {cat.name}
                      </span>

                      {isActive && (
                        <ChevronRight
                          size={14}
                          className="ml-auto"
                        />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* =================================================
              CONTENT
          ================================================== */}
          <main className="min-w-0 pt-5 lg:pt-8">

            {/* Back */}
            <button
              onClick={() => navigate("/")}
              className="
                hidden
                md:inline-flex
                items-center
                gap-2
                mb-10
                text-xs
                font-semibold
                text-ink-muted
                hover:text-accent
                transition-colors
              "
            >
              <ArrowLeft size={14} />
              Back to Home
            </button>

            {/* Loading */}
            {contentLoading ? (
              <div className="min-h-[500px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin" />

                  <p className="text-sm text-ink-muted">
                    Loading {active?.name}...
                  </p>
                </div>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                {activeData && (
                  <motion.article
                    key={activeData.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28 }}
                  >

                    {/* =================================================
                        ARTICLE HEADER
                    ================================================== */}
                    <header className="max-w-4xl pb-10 border-b border-border">

                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-md bg-accent-soft text-accent flex items-center justify-center">
                          <ActiveIcon size={20} />
                        </div>

                        <div className="flex items-center gap-2 text-accent">
                          <Sparkles size={13} />

                          <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                            Learning Guide
                          </span>
                        </div>
                      </div>

                      <h1 className="
                        text-4xl
                        sm:text-5xl
                        lg:text-6xl
                        font-bold
                        tracking-[-0.035em]
                        leading-[1.05]
                        text-ink
                        mb-6
                      ">
                        {activeData?.name}
                      </h1>

                      <p className="
                        max-w-3xl
                        text-base
                        md:text-lg
                        leading-8
                        text-ink-soft
                      ">
                        {activeData?.detailed_description}
                      </p>
                    </header>

                    {/* =================================================
                        CONTENT SECTIONS
                    ================================================== */}
                    <div className="max-w-4xl">

                      {/* Key Concepts */}
                      {activeData?.key_concepts?.length > 0 && (
                        <section className="py-10 border-b border-border">

                          <div className="
                            grid
                            md:grid-cols-[170px_minmax(0,1fr)]
                            gap-6
                            md:gap-10
                          ">

                            <div>
                              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
                                Key Concepts
                              </h2>

                              <p className="text-xs text-ink-muted mt-1.5 leading-5">
                                Core topics to understand
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-x-2 gap-y-2">
                              {activeData.key_concepts.map(
                                (item, index) => (
                                  <span
                                    key={index}
                                    className="
                                      inline-flex
                                      items-center
                                      px-3
                                      py-1.5
                                      rounded-md
                                      bg-surface
                                      border
                                      border-border
                                      text-sm
                                      font-medium
                                      text-ink-soft
                                    "
                                  >
                                    {item}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </section>
                      )}

                      {/* =================================================
                          ROADMAP CTA
                      ================================================== */}
                      <section className="py-12">

                        <div className="
                          relative
                          overflow-hidden
                          border-t
                          border-b
                          border-accent/20
                          py-10
                          md:py-12
                        ">

                          {/* subtle accent */}
                          <div className="
                            absolute
                            left-0
                            top-0
                            bottom-0
                            w-1
                            bg-accent
                          " />

                          <div className="pl-6 md:pl-8">

                            <div className="flex items-center gap-2 text-accent mb-4">
                              <Lock size={15} />

                              <span className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                              ">
                                Curated Roadmap
                              </span>
                            </div>

                            <h2 className="
                              text-2xl
                              md:text-4xl
                              font-bold
                              tracking-tight
                              text-ink
                              max-w-2xl
                              leading-tight
                              mb-4
                            ">
                              Ready to go deeper into{" "}
                              <span className="text-accent">
                                {activeData.name}
                              </span>
                              ?
                            </h2>

                            <p className="
                              text-sm
                              md:text-base
                              leading-7
                              text-ink-soft
                              max-w-xl
                              mb-7
                            ">
                              Explore the complete learning roadmap,
                              concepts, resources and practical guidance
                              for this technology.
                            </p>

                            <button
                              onClick={() =>
                                handleViewDetails(activeData?.slug)
                              }
                              className="
                                inline-flex
                                items-center
                                gap-2.5
                                px-5
                                py-3
                                rounded-md
                                bg-accent
                                text-white
                                text-sm
                                font-semibold
                                hover:bg-accent-hover
                                transition-colors
                              "
                            >
                              View Full Roadmap
                              <ArrowRight size={16} />
                            </button>

                          </div>
                        </div>
                      </section>

                    </div>
                  </motion.article>
                )}
              </AnimatePresence>
            )}
          </main>
        </div>
      </div>

      <style jsx>{`
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