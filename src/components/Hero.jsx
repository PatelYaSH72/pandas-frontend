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
  CornerDownLeft,
  MousePointer2,
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
  const [activeScope, setActiveScope] = useState('all');

  const popularSearches = [
    'AI writing',
    'Video generation',
    'Developer tools',
    'Image generation',
  ];

  const resourceIcons = {
    Search,
    BookOpen,
    Cpu,
    HelpCircle,
    Sparkles,
    ArrowRight,
  };

  /*
   * =========================================================
   * GSAP
   * =========================================================
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
   * =========================================================
   * SEARCH
   * =========================================================
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
   * =========================================================
   * DEBOUNCE
   * =========================================================
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
   * =========================================================
   * KEYBOARD SHORTCUT
   * =========================================================
   */
  useEffect(() => {
    const handleKeyboard = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();

        const input = document.getElementById('hero-search');

        if (input) {
          input.focus();
        }
      }

      if (event.key === 'Escape' && searchQuery) {
        clearSearch();
      }
    };

    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [searchQuery]);

  /*
   * =========================================================
   * FORM SEARCH
   * =========================================================
   */
  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    performSearch(query);
  };

  /*
   * =========================================================
   * POPULAR SEARCH
   * =========================================================
   */
  const handlePopularSearch = (query) => {
    setSearchQuery(query);
    setActiveScope('all');
    performSearch(query);
  };

  /*
   * =========================================================
   * CLEAR
   * =========================================================
   */
  const clearSearch = () => {
    setSearchQuery('');
    setResults([]);
    setSearchStarted(false);
    setLoading(false);
    setError('');
    setActiveScope('all');
  };

  /*
   * =========================================================
   * RESULTS
   * =========================================================
   */
  const tools = results.filter(
    (item) => item.type === 'tool'
  );

  const resources = results.filter(
    (item) => item.type === 'resource'
  );

  const hasResults =
    tools.length > 0 || resources.length > 0;

  const filteredResults =
    activeScope === 'tools'
      ? tools
      : activeScope === 'resources'
        ? resources
        : results;

  /*
   * =========================================================
   * RESOURCE ICON
   * =========================================================
   */
  const getResourceIcon = (iconName) => {
    if (!iconName) return HelpCircle;

    return resourceIcons[iconName] || HelpCircle;
  };

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#FAFAF8]
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
          [background-image:linear-gradient(#E8EDE9_1px,transparent_1px),linear-gradient(90deg,#E8EDE9_1px,transparent_1px)]
          [background-size:72px_72px]
          [mask-image:linear-gradient(to_bottom,black,transparent_80%)]
        "
      />

      {/* Soft green glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#DCEDE2]
          opacity-40
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-4
          pb-16
          pt-28
          sm:px-6
          sm:pb-20
          sm:pt-32
          lg:px-8
          lg:pb-24
          lg:pt-36
        "
      >
        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

          {/* EYEBROW */}

          <div
            className="
              hero-eyebrow
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D9E5DC]
              bg-white/80
              px-3.5
              py-1.5
              text-xs
              font-medium
              text-[#3F7A5B]
              shadow-[0_1px_2px_rgba(20,31,25,0.03)]
              backdrop-blur-sm
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-[#E7F1EA]
              "
            >
              <Sparkles size={11} />
            </span>

            <span>AI tools & resources</span>
          </div>

          {/* TITLE */}

          <h1
            className="
              hero-title
              max-w-4xl
              text-[44px]
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              text-[#141F19]
              sm:text-[58px]
              md:text-[68px]
              lg:text-[78px]
            "
          >
            Find the right AI tool
            <br className="hidden sm:block" />

            <span className="text-[#829087]">
              {' '}for the job.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              hero-description
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-[#5E6B63]
              sm:text-base
              sm:leading-7
            "
          >
            Discover AI tools and learning resources by what
            they help you accomplish — not just by what's
            trending.
          </p>

          {/* =================================================
              HERO COMMAND PALETTE
          ================================================== */}

          <div
            className="
              hero-search
              mt-9
              w-full
              max-w-2xl
            "
          >
            <form onSubmit={handleSearch}>
              <div
                className={`
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                  text-left
                  shadow-[0_18px_50px_rgba(20,31,25,0.08)]
                  transition-all
                  duration-300
                  ${
                    searchStarted
                      ? 'border-[#BFD0C4] shadow-[0_20px_60px_rgba(63,122,91,0.10)]'
                      : 'border-[#D9E1DB]'
                  }
                `}
              >
                {/* Reduced-motion-safe shimmer */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-[#E7F1EA]/50
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    motion-safe:animate-[shimmer_3s_infinite]
                    group-focus-within:opacity-100
                  "
                />

                {/* SEARCH INPUT */}

                <div
                  className="
                    group
                    relative
                    flex
                    min-h-[62px]
                    items-center
                    px-3
                    sm:px-4
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F1F5F2]
                      text-[#7D8C83]
                      transition-colors
                      group-focus-within:bg-[#E7F1EA]
                      group-focus-within:text-[#3F7A5B]
                    "
                  >
                    <Search
                      size={18}
                      strokeWidth={1.8}
                    />
                  </div>

                  <input
                    id="hero-search"
                    name="search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(event.target.value)
                    }
                    placeholder="Search AI tools, tasks, or resources..."
                    autoComplete="off"
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      px-3
                      text-sm
                      font-medium
                      text-[#141F19]
                      outline-none
                      placeholder:text-[#8A988E]
                      sm:text-base
                    "
                  />

                  {/* CLEAR */}

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      aria-label="Clear search"
                      className="
                        mr-2
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-[#89958E]
                        transition-colors
                        hover:bg-[#F1F5F2]
                        hover:text-[#141F19]
                      "
                    >
                      <X size={16} />
                    </button>
                  )}

                  {/* COMMAND KEY */}

                  <div
                    className="
                      mr-1
                      hidden
                      items-center
                      gap-1
                      rounded-md
                      border
                      border-[#E1E7E3]
                      bg-[#FAFAF8]
                      px-2
                      py-1
                      text-[10px]
                      font-medium
                      text-[#8A988E]
                      sm:flex
                    "
                  >
                    <Command size={11} />
                    <span>K</span>
                  </div>

                  {/* SEARCH BUTTON */}

                  <Button
                    type="submit"
                    className="
                      flex
                      h-10
                      shrink-0
                      items-center
                      gap-1.5
                      rounded-lg
                      border-none
                      bg-[#3F7A5B]
                      px-4
                      text-xs
                      font-semibold
                      text-white
                      shadow-sm
                      transition-all
                      duration-200
                      hover:bg-[#336249]
                      hover:shadow-md
                      sm:px-5
                      sm:text-sm
                    "
                  >
                    Search
                    <ArrowRight size={14} />
                  </Button>
                </div>

                {/* =================================================
                    COMMAND PALETTE SCOPE BAR
                ================================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#E8EDE9]
                    bg-[#FCFDFC]
                    px-3
                    py-2
                    sm:px-4
                  "
                >
                  <div className="flex items-center gap-1">
                    {[
                      {
                        id: 'all',
                        label: 'All',
                        count: results.length,
                      },
                      {
                        id: 'tools',
                        label: 'AI Tools',
                        count: tools.length,
                      },
                      {
                        id: 'resources',
                        label: 'Resources',
                        count: resources.length,
                      },
                    ].map((scope) => (
                      <button
                        key={scope.id}
                        type="button"
                        onClick={() =>
                          setActiveScope(scope.id)
                        }
                        className={`
                          rounded-md
                          px-2.5
                          py-1.5
                          text-[10px]
                          font-medium
                          transition-all
                          sm:text-[11px]
                          ${
                            activeScope === scope.id
                              ? 'bg-[#E7F1EA] text-[#3F7A5B]'
                              : 'text-[#7D8982] hover:bg-[#F1F5F2] hover:text-[#3F7A5B]'
                          }
                        `}
                      >
                        {scope.label}

                        {searchStarted && (
                          <span className="ml-1 opacity-60">
                            {scope.count}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>

                  <div
                    className="
                      hidden
                      items-center
                      gap-1.5
                      text-[10px]
                      text-[#9AA49E]
                      sm:flex
                    "
                  >
                    <CornerDownLeft size={11} />
                    <span>Search</span>
                  </div>
                </div>

                {/* =================================================
                    ATTACHED RESULTS
                ================================================== */}

                {searchStarted && (
                  <div
                    className="
                      border-t
                      border-[#E8EDE9]
                      bg-white
                    "
                  >
                    {/* LOADING */}

                    {loading && (
                      <div className="px-5 py-8">
                        <div className="flex items-center justify-center gap-3">
                          <Loader2
                            size={18}
                            className="animate-spin text-[#3F7A5B]"
                          />

                          <span className="text-xs font-medium text-[#65736A]">
                            Finding the best matches...
                          </span>
                        </div>
                      </div>
                    )}

                    {/* ERROR */}

                    {!loading && error && (
                      <div className="px-5 py-8 text-center">
                        <p className="text-xs text-[#6B7770]">
                          {error}
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            performSearch(searchQuery)
                          }
                          className="
                            mt-3
                            text-xs
                            font-semibold
                            text-[#3F7A5B]
                            hover:text-[#336249]
                          "
                        >
                          Try again
                        </button>
                      </div>
                    )}

                    {/* RESULTS */}

                    {!loading &&
                      !error &&
                      hasResults && (
                        <div className="p-2.5 sm:p-3">

                          {/* RESULTS LABEL */}

                          <div className="mb-2 flex items-center justify-between px-2">
                            <span
                              className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-[#8A988E]
                              "
                            >
                              Top results
                            </span>

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
                                text-[10px]
                                font-semibold
                                text-[#3F7A5B]
                                hover:text-[#336249]
                                sm:flex
                              "
                            >
                              View all
                              <ArrowRight size={12} />
                            </button>
                          </div>

                          {/* ALL / TOOLS */}

                          {filteredResults
                            .slice(0, 6)
                            .map((item, index) => {
                              const isTool =
                                item.type === 'tool';

                              const ResourceIcon =
                                getResourceIcon(
                                  item.icon
                                );

                              return (
                                <button
                                  key={
                                    item._id ||
                                    item.id ||
                                    item.slug ||
                                    item.name ||
                                    index
                                  }
                                  type="button"
                                  onClick={() => {
                                    if (isTool) {
                                      navigate(
                                        `/Ai-tools/${item._id}`
                                      );
                                    } else {
                                      navigate(
                                        `/resources/${item.slug}`
                                      );
                                    }
                                  }}
                                  className="
                                    group
                                    flex
                                    w-full
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-2.5
                                    py-2.5
                                    text-left
                                    transition-all
                                    duration-150
                                    hover:bg-[#F7F9F7]
                                  "
                                >
                                  {/* ICON */}

                                  {isTool ? (
                                    item.image ? (
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="
                                          h-9
                                          w-9
                                          shrink-0
                                          rounded-lg
                                          border
                                          border-[#E3E8E3]
                                          object-cover
                                        "
                                      />
                                    ) : (
                                      <div
                                        className="
                                          flex
                                          h-9
                                          w-9
                                          shrink-0
                                          items-center
                                          justify-center
                                          rounded-lg
                                          border
                                          border-[#DCE6DF]
                                          bg-[#E7F1EA]
                                          text-xs
                                          font-bold
                                          text-[#3F7A5B]
                                        "
                                      >
                                        {item.name
                                          ?.charAt(0)
                                          ?.toUpperCase() ||
                                          'A'}
                                      </div>
                                    )
                                  ) : (
                                    <div
                                      className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-[#E7F1EA]
                                        text-[#3F7A5B]
                                      "
                                    >
                                      <ResourceIcon
                                        size={16}
                                      />
                                    </div>
                                  )}

                                  {/* CONTENT */}

                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                      <p
                                        className="
                                          truncate
                                          text-xs
                                          font-semibold
                                          text-[#202A24]
                                          transition-colors
                                          group-hover:text-[#3F7A5B]
                                          sm:text-sm
                                        "
                                      >
                                        {item.name}
                                      </p>

                                      <span
                                        className="
                                          hidden
                                          rounded
                                          bg-[#F1F5F2]
                                          px-1.5
                                          py-0.5
                                          text-[9px]
                                          text-[#7A877F]
                                          sm:inline-block
                                        "
                                      >
                                        {isTool
                                          ? 'AI Tool'
                                          : 'Resource'}
                                      </span>
                                    </div>

                                    <p
                                      className="
                                        mt-0.5
                                        truncate
                                        text-[10px]
                                        text-[#8A988E]
                                        sm:text-[11px]
                                      "
                                    >
                                      {isTool
                                        ? item.whatItDoes ||
                                          item.description ||
                                          'AI tool for your workflow.'
                                        : item.short_description ||
                                          item.description ||
                                          'Learning resource'}
                                    </p>
                                  </div>

                                  {/* RIGHT */}

                                  <div className="flex shrink-0 items-center gap-2">
                                    <span
                                      className="
                                        hidden
                                        text-[9px]
                                        text-[#9AA49E]
                                        sm:block
                                      "
                                    >
                                      {isTool
                                        ? 'Tool'
                                        : 'Learn'}
                                    </span>

                                    <ArrowUpRight
                                      size={14}
                                      className="
                                        text-[#A0AAA4]
                                        transition-all
                                        group-hover:translate-x-0.5
                                        group-hover:-translate-y-0.5
                                        group-hover:text-[#3F7A5B]
                                      "
                                    />
                                  </div>
                                </button>
                              );
                            })}

                          {/* VIEW ALL */}

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
                              mt-1
                              flex
                              w-full
                              items-center
                              justify-center
                              gap-2
                              border-t
                              border-[#E8EDE9]
                              px-3
                              pt-3
                              text-[10px]
                              font-semibold
                              text-[#3F7A5B]
                              hover:text-[#336249]
                            "
                          >
                            Explore all results
                            <ArrowRight size={12} />
                          </button>
                        </div>
                      )}

                    {/* NO RESULTS */}

                    {!loading &&
                      !error &&
                      searchStarted &&
                      !hasResults && (
                        <div className="px-5 py-8 text-center">
                          <div
                            className="
                              mx-auto
                              mb-3
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-full
                              bg-[#E7F1EA]
                              text-[#3F7A5B]
                            "
                          >
                            <Search size={16} />
                          </div>

                          <p className="text-xs font-semibold text-[#202A24]">
                            No results found
                          </p>

                          <p className="mt-1 text-[10px] text-[#8A988E]">
                            Nothing matched "{searchQuery}"
                          </p>
                        </div>
                      )}
                  </div>
                )}
              </div>
            </form>

            {/* =================================================
                COMMAND HINT
            ================================================== */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-2
                text-[10px]
                text-[#8A988E]
              "
            >
              <span className="flex items-center gap-1">
                <span
                  className="
                    flex
                    h-5
                    min-w-5
                    items-center
                    justify-center
                    rounded
                    border
                    border-[#DCE4DE]
                    bg-white
                    px-1
                    font-medium
                  "
                >
                  <Command size={9} />
                </span>

                <span>K</span>
              </span>

              <span>to focus search</span>

              <span className="text-[#C8D0CB]">•</span>

              <span>Search by task, tool or category</span>
            </div>
          </div>

          {/* =====================================================
              POPULAR SEARCHES
          ====================================================== */}

          <div
            className="
              hero-popular
              mt-6
              flex
              max-w-2xl
              flex-wrap
              items-center
              justify-center
              gap-2
            "
          >
            <span className="mr-1 text-[11px] text-[#8A988E]">
              Try
            </span>

            {popularSearches.map((query) => (
              <button
                key={query}
                type="button"
                onClick={() =>
                  handlePopularSearch(query)
                }
                className="
                  rounded-full
                  border
                  border-[#DFE6E1]
                  bg-white
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  text-[#526158]
                  shadow-[0_1px_2px_rgba(20,31,25,0.02)]
                  transition-all
                  duration-150
                  hover:-translate-y-0.5
                  hover:border-[#BFD0C4]
                  hover:bg-[#F7FAF8]
                  hover:text-[#3F7A5B]
                "
              >
                {query}
              </button>
            ))}
          </div>

          {/* =====================================================
              ACTIONS
          ====================================================== */}

          <div
            className="
              hero-actions
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-3
              text-xs
            "
          >
            <button
              type="button"
              onClick={() => navigate('/Ai-Tools')}
              className="
                group
                inline-flex
                items-center
                gap-1.5
                font-semibold
                text-[#3F7A5B]
                transition-colors
                hover:text-[#336249]
              "
            >
              Explore all tools

              <ArrowRight
                size={14}
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
                text-[#647169]
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
                text-[#647169]
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
            HIDDEN AFTER SEARCH
        ====================================================== */}

        {!searchStarted && (
          <div
            className="
              hero-preview
              mx-auto
              mt-14
              max-w-3xl
              sm:mt-16
            "
          >
            <div className="hero-preview-inner">

              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E1E8E3]
                  bg-white/90
                  shadow-[0_16px_45px_rgba(20,31,25,0.06)]
                  backdrop-blur-sm
                "
              >
                {/* HEADER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#E5EAE6]
                    px-4
                    py-3.5
                    sm:px-5
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#E7F1EA]
                        text-[#3F7A5B]
                      "
                    >
                      <Search size={14} />
                    </div>

                    <div className="text-left">
                      <p className="text-xs font-semibold text-[#202A24]">
                        AI tool directory
                      </p>

                      <p className="mt-0.5 text-[10px] text-[#8A988E]">
                        Discover tools for your workflow
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
                      gap-1
                      text-[10px]
                      font-semibold
                      text-[#3F7A5B]
                      sm:flex
                    "
                  >
                    View all
                    <ArrowRight size={12} />
                  </button>
                </div>

                {/* TOOLS */}

                <div className="divide-y divide-[#E8EDE9]">
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
                        gap-3
                        px-4
                        py-3.5
                        text-left
                        transition-colors
                        hover:bg-[#FAFAF8]
                        sm:gap-4
                        sm:px-5
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-[#E1E8E3]
                          bg-white
                          text-xs
                          font-semibold
                          text-[#3F7A5B]
                        "
                      >
                        {tool.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3
                            className="
                              truncate
                              text-xs
                              font-semibold
                              text-[#202A24]
                              group-hover:text-[#3F7A5B]
                              sm:text-sm
                            "
                          >
                            {tool.name}
                          </h3>

                          <span
                            className="
                              hidden
                              rounded
                              bg-[#E7F1EA]
                              px-1.5
                              py-0.5
                              text-[9px]
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
                            mt-0.5
                            truncate
                            text-[10px]
                            text-[#8A988E]
                            sm:text-xs
                          "
                        >
                          {tool.description}
                        </p>
                      </div>

                      <div
                        className="
                          hidden
                          shrink-0
                          items-center
                          gap-3
                          sm:flex
                        "
                      >
                        <span className="text-[10px] text-[#8A988E]">
                          {tool.pricing}
                        </span>

                        <span
                          className="
                            flex
                            items-center
                            gap-1
                            text-[10px]
                            text-[#59675F]
                          "
                        >
                          <Star
                            size={10}
                            className="text-[#3F7A5B]"
                            fill="currentColor"
                          />
                          {tool.rating}
                        </span>

                        <ArrowRight
                          size={13}
                          className="
                            text-[#9AA49E]
                            transition-all
                            group-hover:translate-x-1
                            group-hover:text-[#3F7A5B]
                          "
                        />
                      </div>

                      <ArrowRight
                        size={14}
                        className="
                          shrink-0
                          text-[#9AA49E]
                          sm:hidden
                        "
                      />
                    </button>
                  ))}
                </div>

                {/* FOOTER */}

                <div
                  className="
                    border-t
                    border-[#E5EAE6]
                    bg-[#FAFAF8]
                    px-4
                    py-3
                    sm:px-5
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
                      text-[10px]
                      font-semibold
                      text-[#3F7A5B]
                      sm:text-xs
                    "
                  >
                    Explore the full directory
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* CAPTION */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-center
                  text-[10px]
                  text-[#8A988E]
                "
              >
                <MousePointer2 size={11} />

                <span>
                  Search by task, category, pricing or platform.
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
            mt-14
            max-w-2xl
            border-t
            border-[#E3E8E3]
            pt-7
            text-center
            sm:mt-16
          "
        >
          <p className="text-xs leading-6 text-[#8A988E] sm:text-sm">
            A focused directory for discovering useful AI tools,
            comparing options, and finding resources to learn.
          </p>
        </div>
      </div>

      {/* SHIMMER KEYFRAMES */}

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          50% {
            opacity: 1;
          }

          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;