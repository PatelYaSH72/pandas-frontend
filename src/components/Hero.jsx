import { useEffect, useRef, useState, useContext } from 'react';
import {
  Search,
  ArrowRight,
  Sparkles,
  Command,
  Star,
  X,
  Loader2,
  Cpu,
  BookOpen,
  HelpCircle,
  ArrowUpRight,
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { semanticSearch } from '../api/searchApi';
import { AIContext } from '../Context/AitoolsContext';

import Button from './Button.jsx';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const { backendUrl } = useContext(AIContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchStarted, setSearchStarted] = useState(false);
  const [error, setError] = useState('');

  const popularSearches = [
    'AI writing',
    'Video generation',
    'Developer tools',
    'Image generation',
  ];

  /*
   * Resource icons
   *
   * IMPORTANT:
   * Do not use require() here.
   * Vite/React browser environment does not provide require().
   */
  const resourceIcons = {
    Search,
    BookOpen,
    Cpu,
    HelpCircle,
    Sparkles,
    ArrowRight,
  };

  /*
   * ---------------------------------------------------------
   * GSAP ANIMATIONS
   * ---------------------------------------------------------
   */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      });

      intro
        .from('.hero-eyebrow', {
          y: 16,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          '.hero-title',
          {
            y: 28,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.25'
        )
        .from(
          '.hero-description',
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-search',
          {
            y: 18,
            opacity: 0,
            scale: 0.98,
            duration: 0.65,
          },
          '-=0.25'
        )
        .from(
          '.hero-popular',
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.25'
        )
        .from(
          '.hero-actions',
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
          },
          '-=0.3'
        );

      gsap.from('.hero-followup', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hero-followup',
          start: 'top 85%',
          once: true,
        },
      });

      ScrollTrigger.refresh();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /*
   * ---------------------------------------------------------
   * SEARCH FUNCTION
   * ---------------------------------------------------------
   */
  const performSearch = async (value) => {
    const query = value?.trim();

    if (!query) {
      setResults([]);
      setSearchStarted(false);
      setError('');
      return;
    }

    setLoading(true);
    setSearchStarted(true);
    setError('');

    try {
      const data = await semanticSearch(query, backendUrl);

      const mergedResults = [
        ...(data?.resources || []).map((resource) => ({
          ...resource,
          type: 'resource',
        })),

        ...(data?.tools || []).map((tool) => ({
          ...tool,
          type: 'tool',
        })),
      ];

      setResults(mergedResults);
    } catch (err) {
      console.error('Hero search error:', err);

      setResults([]);
      setError(
        'Something went wrong while searching. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  /*
   * ---------------------------------------------------------
   * DEBOUNCED SEARCH
   *
   * User types -> wait 500ms -> search
   * ---------------------------------------------------------
   */
  useEffect(() => {
    const query = searchQuery.trim();

    if (!query) {
      setResults([]);
      setSearchStarted(false);
      setError('');
      return;
    }

    const timeout = setTimeout(() => {
      performSearch(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery, backendUrl]);

  /*
   * ---------------------------------------------------------
   * FORM SEARCH
   * ---------------------------------------------------------
   */
  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    performSearch(query);
  };

  /*
   * ---------------------------------------------------------
   * POPULAR SEARCH
   * ---------------------------------------------------------
   */
  const handlePopularSearch = (query) => {
    setSearchQuery(query);

    /*
     * Search immediately instead of waiting for debounce.
     */
    performSearch(query);
  };

  /*
   * ---------------------------------------------------------
   * CLEAR SEARCH
   * ---------------------------------------------------------
   */
  const clearSearch = () => {
    setSearchQuery('');
    setResults([]);
    setSearchStarted(false);
    setLoading(false);
    setError('');
  };

  /*
   * ---------------------------------------------------------
   * RESULT TYPES
   * ---------------------------------------------------------
   */
  const tools = results.filter(
    (item) => item.type === 'tool'
  );

  const resources = results.filter(
    (item) => item.type === 'resource'
  );

  /*
   * ---------------------------------------------------------
   * RESOURCE ICON
   * ---------------------------------------------------------
   */
  const getResourceIcon = (iconName) => {
    if (!iconName) return HelpCircle;

    return resourceIcons[iconName] || HelpCircle;
  };

  /*
   * ---------------------------------------------------------
   * RESULT EXISTENCE
   * ---------------------------------------------------------
   */
  const hasResults = tools.length > 0 || resources.length > 0;

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#FAFAF8]"
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* ---------------------------------------------------
              EYEBROW
          ---------------------------------------------------- */}
          <div className="hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-lg bg-[#E7F1EA] px-3 py-1.5 text-xs font-medium text-[#3F7A5B]">
            <Sparkles
              size={13}
              strokeWidth={1.8}
            />

            <span>
              AI tools & resources
            </span>
          </div>

          {/* ---------------------------------------------------
              HEADING
          ---------------------------------------------------- */}
          <h1 className="hero-title max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#141F19] sm:text-[56px] md:text-[64px] lg:text-[72px]">
            Find the right AI tool
            <br className="hidden sm:block" />
            {' '}for the job.
          </h1>

          {/* ---------------------------------------------------
              DESCRIPTION
          ---------------------------------------------------- */}
          <p className="hero-description mt-6 max-w-2xl text-base leading-7 text-[#4B5C53] sm:text-lg">
            Discover AI tools and learning resources by what they
            help you accomplish — not just by what's trending.
          </p>

          {/* =====================================================
              SEARCH BAR
          ====================================================== */}

          <form
            onSubmit={handleSearch}
            className="hero-search mt-9 w-full max-w-2xl"
          >
            <label
              htmlFor="hero-search"
              className="sr-only"
            >
              Search AI tools
            </label>

            <div
              className="
                group flex min-h-[60px] items-center
                rounded-xl
                border border-[#D9E1DB]
                bg-white
                p-1.5
                shadow-[0_1px_2px_rgba(20,31,25,0.04)]
                transition-all duration-200
                hover:border-[#C9D4CC]
                focus-within:border-[#3F7A5B]
                focus-within:ring-4
                focus-within:ring-[#E7F1EA]
              "
            >
              {/* Search icon */}

              <Search
                size={21}
                strokeWidth={1.8}
                className="
                  ml-3.5
                  shrink-0
                  text-[#8A988E]
                  transition-colors
                  group-focus-within:text-[#3F7A5B]
                "
              />

              {/* Input */}

              <input
                id="hero-search"
                name="search"
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="What are you looking for?"
                autoComplete="off"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3
                  text-sm
                  text-[#141F19]
                  outline-none
                  placeholder:text-[#8A988E]
                  sm:text-base
                "
              />

              {/* Clear button */}

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="
                    mr-1
                    flex h-8 w-8
                    shrink-0
                    items-center justify-center
                    rounded-lg
                    text-[#8A988E]
                    transition-colors
                    hover:bg-[#FAFAF8]
                    hover:text-[#141F19]
                  "
                >
                  <X size={16} />
                </button>
              )}

              {/* Keyboard shortcut */}

              <div
                className="
                  mr-1
                  hidden
                  items-center
                  gap-1
                  rounded-lg
                  border border-[#E3E8E3]
                  bg-[#FAFAF8]
                  px-2 py-1
                  text-xs
                  text-[#8A988E]
                  sm:flex
                "
              >
                <Command size={12} />
                <span>K</span>
              </div>

              {/* Search button */}

              <Button
                type="submit"
                className="
                  flex h-11
                  shrink-0
                  items-center
                  gap-2
                  rounded-lg
                  border-none
                  bg-[#3F7A5B]
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  duration-200
                  hover:bg-[#336249]
                "
              >
                Search

                <ArrowRight size={16} />
              </Button>
            </div>
          </form>

          {/* =====================================================
              INLINE SEARCH RESULTS

              IMPORTANT:
              This is DIRECTLY below the search bar.
              No SearchPage component.
              No second input.
              No modal.
              No new page.
          ====================================================== */}

          {searchStarted && (
            <div className="mt-5 w-full max-w-2xl text-left">

              {/* -------------------------------------------------
                  LOADING
              -------------------------------------------------- */}

              {loading && (
                <div
                  className="
                    overflow-hidden
                    rounded-xl
                    border border-[#D9E1DB]
                    bg-white
                    px-6 py-8
                    shadow-[0_1px_2px_rgba(20,31,25,0.04)]
                  "
                >
                  <div className="flex items-center justify-center gap-3">

                    <Loader2
                      size={20}
                      className="animate-spin text-[#3F7A5B]"
                    />

                    <p className="text-sm font-medium text-[#4B5C53]">
                      Finding the best matches...
                    </p>

                  </div>
                </div>
              )}

              {/* -------------------------------------------------
                  ERROR
              -------------------------------------------------- */}

              {!loading && error && (
                <div
                  className="
                    rounded-xl
                    border border-[#E3E8E3]
                    bg-white
                    px-6 py-7
                    text-center
                    shadow-[0_1px_2px_rgba(20,31,25,0.04)]
                  "
                >
                  <p className="text-sm text-[#6B7770]">
                    {error}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      performSearch(searchQuery)
                    }
                    className="
                      mt-4
                      text-sm
                      font-semibold
                      text-[#3F7A5B]
                      hover:text-[#336249]
                    "
                  >
                    Try again
                  </button>
                </div>
              )}

              {/* -------------------------------------------------
                  RESULTS
              -------------------------------------------------- */}

              {!loading &&
                !error &&
                hasResults && (
                  <div
                    className="
                      overflow-hidden
                      rounded-xl
                      border border-[#D9E1DB]
                      bg-white
                      shadow-[0_4px_16px_rgba(20,31,25,0.05)]
                    "
                  >

                    {/* Result header */}

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        border-b
                        border-[#E3E8E3]
                        bg-[#FAFAF8]
                        px-5 py-4
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-[#8A988E]
                          "
                        >
                          Search results
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#141F19]">
                          Results for "{searchQuery}"
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          navigate(
                            `/Ai-Tools?search=${encodeURIComponent(
                              searchQuery.trim()
                            )}`
                          )
                        }
                        className="
                          hidden
                          items-center
                          gap-1
                          text-xs
                          font-semibold
                          text-[#3F7A5B]
                          transition-colors
                          hover:text-[#336249]
                          sm:flex
                        "
                      >
                        View all

                        <ArrowRight size={14} />
                      </button>
                    </div>

                    {/* =================================================
                        AI TOOLS
                    ================================================== */}

                    {tools.length > 0 && (
                      <div className="px-4 py-4 sm:px-5">

                        {/* Section heading */}

                        <div className="mb-3 flex items-center gap-3">

                          <div className="flex items-center gap-2 text-[#3F7A5B]">

                            <Cpu size={14} />

                            <span
                              className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                              "
                            >
                              AI Tools
                            </span>

                          </div>

                          <div className="h-px flex-1 bg-[#E3E8E3]" />

                          <span className="text-[10px] text-[#8A988E]">
                            {tools.length}{' '}
                            {tools.length === 1
                              ? 'match'
                              : 'matches'}
                          </span>

                        </div>

                        {/* Tools */}

                        <div className="grid gap-2.5 md:grid-cols-2">

                          {tools.slice(0, 6).map(
                            (tool, index) => (
                              <div
                                key={
                                  tool._id ||
                                  tool.id ||
                                  tool.name ||
                                  index
                                }
                                className="
                                  group
                                  flex
                                  min-w-0
                                  items-center
                                  justify-between
                                  gap-3
                                  rounded-xl
                                  border
                                  border-[#E3E8E3]
                                  bg-white
                                  p-3
                                  transition-all
                                  duration-200
                                  hover:border-[#BFD0C4]
                                  hover:bg-[#FAFAF8]
                                  hover:shadow-[0_2px_8px_rgba(20,31,25,0.04)]
                                "
                              >

                                {/* Tool info */}

                                <div className="flex min-w-0 items-center gap-3">

                                  {/* Logo */}

                                  {tool.image ? (
                                    <img
                                      src={tool.image}
                                      alt={tool.name}
                                      className="
                                        h-11
                                        w-11
                                        shrink-0
                                        rounded-lg
                                        border
                                        border-[#E3E8E3]
                                        bg-white
                                        object-cover
                                      "
                                    />
                                  ) : (
                                    <div
                                      className="
                                        flex
                                        h-11 w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-[#E3E8E3]
                                        bg-[#E7F1EA]
                                        text-sm
                                        font-bold
                                        text-[#3F7A5B]
                                      "
                                    >
                                      {tool.name
                                        ?.charAt(0)
                                        ?.toUpperCase() || 'A'}
                                    </div>
                                  )}

                                  {/* Name + description */}

                                  <div className="min-w-0">

                                    <h3
                                      className="
                                        truncate
                                        text-sm
                                        font-semibold
                                        text-[#141F19]
                                        transition-colors
                                        group-hover:text-[#3F7A5B]
                                      "
                                    >
                                      {tool.name}
                                    </h3>

                                    <p
                                      className="
                                        mt-0.5
                                        line-clamp-1
                                        text-[11px]
                                        leading-5
                                        text-[#8A988E]
                                      "
                                    >
                                      {tool.whatItDoes ||
                                        tool.description ||
                                        'AI tool for your workflow.'}
                                    </p>

                                  </div>
                                </div>

                                {/* View */}

                                <button
                                  type="button"
                                  onClick={() =>
                                    navigate(
                                      `/Ai-tools/${tool._id}`
                                    )
                                  }
                                  className="
                                    flex
                                    shrink-0
                                    items-center
                                    gap-1
                                    rounded-lg
                                    bg-[#3F7A5B]
                                    px-3
                                    py-2
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    text-white
                                    transition-colors
                                    hover:bg-[#336249]
                                  "
                                >
                                  View

                                  <ArrowRight size={12} />
                                </button>

                              </div>
                            )
                          )}

                        </div>
                      </div>
                    )}

                    {/* =================================================
                        RESOURCES
                    ================================================== */}

                    {resources.length > 0 && (
                      <div
                        className="
                          border-t
                          border-[#E3E8E3]
                          px-4 py-4
                          sm:px-5
                        "
                      >

                        {/* Section heading */}

                        <div className="mb-3 flex items-center gap-3">

                          <div className="flex items-center gap-2 text-[#3F7A5B]">

                            <BookOpen size={14} />

                            <span
                              className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                              "
                            >
                              Learning Resources
                            </span>

                          </div>

                          <div className="h-px flex-1 bg-[#E3E8E3]" />

                        </div>

                        {/* Resource list */}

                        <div className="space-y-2">

                          {resources
                            .slice(0, 6)
                            .map((resource, index) => {
                              const IconComponent =
                                getResourceIcon(
                                  resource.icon
                                );

                              return (
                                <div
                                  key={
                                    resource._id ||
                                    resource.id ||
                                    resource.slug ||
                                    resource.name ||
                                    index
                                  }
                                  className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    gap-3
                                    rounded-xl
                                    border
                                    border-[#E3E8E3]
                                    bg-white
                                    p-3
                                    transition-all
                                    duration-200
                                    hover:border-[#BFD0C4]
                                    hover:bg-[#FAFAF8]
                                  "
                                >

                                  {/* Resource info */}

                                  <div className="flex min-w-0 items-center gap-3">

                                    <div
                                      className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-[#E7F1EA]
                                        text-[#3F7A5B]
                                        transition-colors
                                        group-hover:bg-[#3F7A5B]
                                        group-hover:text-white
                                      "
                                    >
                                      <IconComponent size={17} />
                                    </div>

                                    <div className="min-w-0">

                                      <h3
                                        className="
                                          truncate
                                          text-sm
                                          font-semibold
                                          text-[#141F19]
                                        "
                                      >
                                        {resource.name}
                                      </h3>

                                      <p
                                        className="
                                          mt-0.5
                                          line-clamp-1
                                          text-[10px]
                                          text-[#8A988E]
                                        "
                                      >
                                        {resource.short_description ||
                                          resource.description ||
                                          'Learning resource'}
                                      </p>

                                    </div>

                                  </div>

                                  {/* Resource link */}

                                  <button
                                    type="button"
                                    onClick={() =>
                                      navigate(
                                        `/resources/${resource.slug}`
                                      )
                                    }
                                    className="
                                      flex
                                      h-9
                                      w-9
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-lg
                                      bg-[#F1F5F2]
                                      text-[#3F7A5B]
                                      transition-all
                                      hover:bg-[#3F7A5B]
                                      hover:text-white
                                    "
                                    aria-label={`Open ${resource.name}`}
                                  >
                                    <ArrowUpRight size={16} />
                                  </button>

                                </div>
                              );
                            })}

                        </div>
                      </div>
                    )}

                    {/* -------------------------------------------------
                        MOBILE VIEW ALL
                    -------------------------------------------------- */}

                    <div
                      className="
                        border-t
                        border-[#E3E8E3]
                        bg-[#FAFAF8]
                        px-5 py-3
                      "
                    >
                      <button
                        type="button"
                        onClick={() =>
                          navigate(
                            `/Ai-Tools?search=${encodeURIComponent(
                              searchQuery.trim()
                            )}`
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2
                          text-xs
                          font-semibold
                          text-[#3F7A5B]
                          transition-colors
                          hover:text-[#336249]
                        "
                      >
                        Explore all search results

                        <ArrowRight size={14} />
                      </button>
                    </div>

                  </div>
                )}

              {/* -------------------------------------------------
                  NO RESULTS
              -------------------------------------------------- */}

              {!loading &&
                !error &&
                searchStarted &&
                !hasResults && (
                  <div
                    className="
                      rounded-xl
                      border border-[#D9E1DB]
                      bg-white
                      px-6 py-9
                      text-center
                      shadow-[0_1px_2px_rgba(20,31,25,0.04)]
                    "
                  >
                    <div
                      className="
                        mx-auto
                        mb-3
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#E7F1EA]
                        text-[#3F7A5B]
                      "
                    >
                      <Search size={18} />
                    </div>

                    <p className="text-sm font-semibold text-[#141F19]">
                      No results found
                    </p>

                    <p className="mt-1 text-xs text-[#8A988E]">
                      We couldn't find anything for "
                      {searchQuery}"
                    </p>
                  </div>
                )}

            </div>
          )}

          {/* =====================================================
              POPULAR SEARCHES

              These remain below the search/results area.
          ====================================================== */}

          <div className="hero-popular mt-5 flex flex-wrap items-center justify-center gap-2">

            <span className="mr-1 text-xs text-[#8A988E]">
              Popular
            </span>

            {popularSearches.map((query) => (
              <button
                key={query}
                type="button"
                onClick={() =>
                  handlePopularSearch(query)
                }
                className="
                  rounded-lg
                  border
                  border-[#E3E8E3]
                  bg-white
                  px-3 py-1.5
                  text-xs
                  font-medium
                  text-[#4B5C53]
                  transition-colors
                  duration-150
                  hover:border-[#3F7A5B]
                  hover:text-[#3F7A5B]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#3F7A5B]
                  focus:ring-offset-2
                "
              >
                {query}
              </button>
            ))}

          </div>

          {/* =====================================================
              ACTIONS
          ====================================================== */}

          <div className="hero-actions mt-7 flex flex-wrap items-center justify-center gap-5 text-sm">

            <button
              type="button"
              onClick={() => navigate('/Ai-Tools')}
              className="
                group
                inline-flex
                items-center
                gap-1.5
                font-medium
                text-[#3F7A5B]
                transition-colors
                hover:text-[#336249]
                focus:outline-none
              "
            >
              Explore all tools

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                "
              />
            </button>

            <button
              type="button"
              onClick={() =>
                navigate('/Categories')
              }
              className="
                font-medium
                text-[#4B5C53]
                transition-colors
                hover:text-[#141F19]
              "
            >
              Browse categories
            </button>

            <button
              type="button"
              onClick={() =>
                navigate('/Resources')
              }
              className="
                font-medium
                text-[#4B5C53]
                transition-colors
                hover:text-[#141F19]
              "
            >
              Learning resources
            </button>

          </div>
        </div>

        {/* =====================================================
            DEFAULT DIRECTORY PREVIEW

            Only show when user hasn't searched.
        ====================================================== */}

        {!searchStarted && (
          <div className="hero-preview mx-auto mt-16 max-w-3xl sm:mt-20">

            <div className="hero-preview-inner">

              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E3E8E3]
                  bg-white
                  shadow-[0_1px_2px_rgba(20,31,25,0.04)]
                "
              >

                {/* Preview header */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#E3E8E3]
                    px-5 py-4
                    sm:px-6
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-8 w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#E7F1EA]
                        text-[#3F7A5B]
                      "
                    >
                      <Search
                        size={15}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="text-left">

                      <p className="text-sm font-semibold text-[#141F19]">
                        Search results
                      </p>

                      <p className="mt-0.5 text-xs text-[#8A988E]">
                        Tools matching your workflow
                      </p>

                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      navigate('/Ai-Tools')
                    }
                    className="
                      hidden
                      items-center
                      gap-1.5
                      text-xs
                      font-medium
                      text-[#3F7A5B]
                      transition-colors
                      hover:text-[#336249]
                      sm:flex
                    "
                  >
                    View all

                    <ArrowRight size={14} />
                  </button>

                </div>

                {/* Preview tools */}

                <div className="divide-y divide-[#E3E8E3]">

                  {[
                    {
                      name: 'ChatGPT',
                      description:
                        'AI assistant for writing, coding, research and more.',
                      category: 'AI Assistant',
                      pricing: 'Freemium',
                      initials: 'C',
                      rating: '4.8',
                    },
                    {
                      name: 'GitHub Copilot',
                      description:
                        'AI-powered coding assistant for developers.',
                      category: 'Developer Tools',
                      pricing: 'Paid',
                      initials: 'G',
                      rating: '4.7',
                    },
                    {
                      name: 'Canva',
                      description:
                        'Design platform with AI-powered creative tools.',
                      category: 'Design',
                      pricing: 'Freemium',
                      initials: 'C',
                      rating: '4.6',
                    },
                  ].map((tool) => (
                    <button
                      key={tool.name}
                      type="button"
                      onClick={() =>
                        navigate(
                          `/Ai-Tools?search=${encodeURIComponent(
                            tool.name
                          )}`
                        )
                      }
                      className="
                        group
                        flex
                        w-full
                        items-center
                        gap-4
                        px-5 py-4
                        text-left
                        transition-colors
                        duration-150
                        hover:bg-[#FAFAF8]
                        sm:px-6
                      "
                    >

                      {/* Logo */}

                      <div
                        className="
                          flex
                          h-11 w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-[#E3E8E3]
                          bg-white
                          text-sm
                          font-semibold
                          text-[#3F7A5B]
                        "
                      >
                        {tool.initials}
                      </div>

                      {/* Content */}

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center gap-3">

                          <h3
                            className="
                              truncate
                              text-sm
                              font-semibold
                              text-[#141F19]
                              transition-colors
                              group-hover:text-[#3F7A5B]
                              sm:text-base
                            "
                          >
                            {tool.name}
                          </h3>

                          <span
                            className="
                              hidden
                              rounded-md
                              bg-[#E7F1EA]
                              px-2 py-1
                              text-[11px]
                              font-medium
                              text-[#3F7A5B]
                              sm:inline-flex
                            "
                          >
                            {tool.category}
                          </span>

                        </div>

                        <p
                          className="
                            mt-1
                            line-clamp-1
                            text-xs
                            leading-5
                            text-[#8A988E]
                            sm:text-sm
                          "
                        >
                          {tool.description}
                        </p>

                      </div>

                      {/* Metadata */}

                      <div
                        className="
                          hidden
                          shrink-0
                          items-center
                          gap-4
                          sm:flex
                        "
                      >

                        <span className="text-xs text-[#8A988E]">
                          {tool.pricing}
                        </span>

                        <span
                          className="
                            flex
                            items-center
                            gap-1
                            text-xs
                            text-[#4B5C53]
                          "
                        >
                          <Star
                            size={12}
                            className="text-[#3F7A5B]"
                            fill="currentColor"
                          />

                          {tool.rating}
                        </span>

                        <ArrowRight
                          size={15}
                          className="
                            text-[#8A988E]
                            transition-all
                            group-hover:translate-x-1
                            group-hover:text-[#3F7A5B]
                          "
                        />

                      </div>

                      {/* Mobile arrow */}

                      <ArrowRight
                        size={16}
                        className="
                          shrink-0
                          text-[#8A988E]
                          sm:hidden
                        "
                      />

                    </button>
                  ))}

                </div>

                {/* Preview bottom */}

                <div
                  className="
                    border-t
                    border-[#E3E8E3]
                    bg-[#FAFAF8]
                    px-5 py-3
                    sm:px-6
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      navigate('/Ai-Tools')
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      text-xs
                      font-medium
                      text-[#3F7A5B]
                      transition-colors
                      hover:text-[#336249]
                      sm:text-sm
                    "
                  >
                    Explore the full directory

                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>

              {/* Preview caption */}

              <div
                className="
                  mt-4
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  text-center
                  text-xs
                  text-[#8A988E]
                  sm:flex-row
                  sm:gap-2
                "
              >
                <span>
                  Search by task, category, pricing or platform.
                </span>

                <span className="hidden text-[#C3CCC5] sm:block">
                  ·
                </span>

                <span>
                  Compare before you choose.
                </span>
              </div>

            </div>
          </div>
        )}

        {/* =====================================================
            FOLLOW UP
        ====================================================== */}

        <div
          className="
            hero-followup
            mx-auto
            mt-16
            max-w-2xl
            border-t
            border-[#E3E8E3]
            pt-8
            text-center
            sm:mt-20
          "
        >
          <p className="text-sm leading-6 text-[#8A988E]">
            A focused directory for discovering useful AI tools,
            comparing options, and finding resources to learn.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;