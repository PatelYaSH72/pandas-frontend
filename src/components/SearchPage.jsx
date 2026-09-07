import { useState, useContext, useEffect } from "react";
import { semanticSearch } from "../api/searchApi";
import { AIContext } from "../Context/AitoolsContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function SearchPage({
  setIsSearchOpen,
  initialQuery = "",
  hideInput = false,
}) {
  const { backendUrl } = useContext(AIContext);

  const [query, setQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = async (searchValue = query) => {
    const trimmedQuery = searchValue.trim();

    if (!trimmedQuery) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const data = await semanticSearch(trimmedQuery, backendUrl);

      const mergedResults = [
        ...(data.resources || []).map((res) => ({
          ...res,
          type: "resource",
        })),
        ...(data.tools || []).map((tool) => ({
          ...tool,
          type: "tool",
        })),
      ];

      setResults(mergedResults);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const tools = results.filter((item) => item.type === "tool");
  const resources = results.filter((item) => item.type === "resource");

  useEffect(() => {
    setQuery(initialQuery);

    if (initialQuery?.trim()) {
      handleSearch(initialQuery);
    } else {
      setResults([]);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      handleSearch(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="w-full bg-transparent flex flex-col">

      {/* Search input - Navbar me visible, Hero me hidden */}
      {!hideInput && (
        <div className="relative group px-6 py-4">
          <div className="absolute left-11 top-1/2 -translate-y-1/2 text-[#3F7A5B] z-10 pointer-events-none">
            <Icons.Search size={22} strokeWidth={2} />
          </div>

          <input
            autoFocus
            type="text"
            placeholder="Search AI tools, resources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full py-5 pl-14 pr-5 rounded-xl
              bg-[#FAFAF8]
              border border-[#E3E8E3]
              text-[#141F19]
              placeholder:text-[#8A988E]
              focus:outline-none
              focus:border-[#3F7A5B]
              focus:ring-4
              focus:ring-[#E7F1EA]
              transition-all duration-200
              text-lg tracking-tight
            "
          />
        </div>
      )}

      {/* RESULTS */}
      <div
        className={
          hideInput
            ? "overflow-hidden"
            : "max-h-[60vh] overflow-y-auto overflow-x-hidden px-6 pb-8"
        }
      >

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center gap-3 py-10">
            <Icons.Loader2
              size={28}
              className="animate-spin text-[#3F7A5B]"
            />

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8A988E]">
              Curating best matches...
            </p>
          </div>
        )}

        {/* TOOLS */}
        {!loading && tools.length > 0 && (
          <div className="p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A988E]">
                <Icons.Cpu
                  size={14}
                  className="text-[#3F7A5B]"
                />
                AI Tools
              </h2>

              <div className="h-px flex-1 bg-[#E3E8E3]" />

              <span className="text-[10px] font-medium text-[#8A988E]">
                {tools.length} matches
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {tools.slice(0, 5).map((tool, idx) => (
                <motion.div
                  key={tool._id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="
                    group flex items-center justify-between gap-3
                    rounded-xl border border-[#E3E8E3]
                    bg-white p-3
                    transition-all duration-200
                    hover:border-[#C9D4CC]
                    hover:bg-[#FAFAF8]
                  "
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="h-11 w-11 shrink-0 rounded-lg border border-[#E3E8E3] object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-[#141F19] transition-colors group-hover:text-[#3F7A5B]">
                        {tool.name}
                      </h3>

                      <p className="mt-0.5 line-clamp-1 max-w-[190px] text-[11px] text-[#8A988E]">
                        {tool.whatItDoes}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/Ai-tools/${tool._id}`}
                    onClick={() => setIsSearchOpen?.(false)}
                    className="
                      shrink-0 rounded-lg
                      bg-[#3F7A5B]
                      px-3 py-2
                      text-[10px] font-bold uppercase tracking-wider
                      text-white
                      transition-colors
                      hover:bg-[#336249]
                    "
                  >
                    View
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* RESOURCES */}
        {!loading && resources.length > 0 && (
          <div className="border-t border-[#E3E8E3] p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A988E]">
                <Icons.BookOpen
                  size={14}
                  className="text-[#3F7A5B]"
                />
                Learning Resources
              </h2>

              <div className="h-px flex-1 bg-[#E3E8E3]" />

              <span className="text-[10px] font-medium text-[#8A988E]">
                {resources.length} matches
              </span>
            </div>

            <div className="space-y-2">
              {resources.slice(0, 5).map((res, idx) => {
                const IconComponent =
                  Icons[res.icon] || Icons.HelpCircle;

                return (
                  <motion.div
                    key={res._id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className="
                      group flex items-center justify-between gap-3
                      rounded-xl border border-[#E3E8E3]
                      bg-white p-3
                      transition-all duration-200
                      hover:border-[#C9D4CC]
                      hover:bg-[#FAFAF8]
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-lg bg-[#E7F1EA]
                        text-[#3F7A5B]
                        transition-colors
                        group-hover:bg-[#3F7A5B]
                        group-hover:text-white
                      ">
                        <IconComponent size={17} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-[#141F19]">
                          {res.name}
                        </h3>

                        <p className="mt-0.5 line-clamp-1 text-[10px] font-medium uppercase text-[#8A988E]">
                          {res.short_description}
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/resources/${res.slug}`}
                      onClick={() => setIsSearchOpen?.(false)}
                      className="
                        shrink-0 rounded-lg
                        border border-[#E3E8E3]
                        bg-white p-2
                        text-[#8A988E]
                        transition-all
                        hover:border-[#3F7A5B]
                        hover:bg-[#E7F1EA]
                        hover:text-[#3F7A5B]
                      "
                    >
                      <Icons.ArrowUpRight size={17} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* EMPTY */}
        {!loading && query && results.length === 0 && (
          <div className="px-5 py-10 text-center">
            <div className="
              mx-auto mb-3 flex h-11 w-11
              items-center justify-center
              rounded-xl bg-[#FAFAF8]
              text-[#8A988E]
            ">
              <Icons.SearchX size={22} />
            </div>

            <p className="text-sm font-medium text-[#4B5C53]">
              No results found for "{query}"
            </p>

            <p className="mt-1 text-xs text-[#8A988E]">
              Try another keyword or search by task.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}