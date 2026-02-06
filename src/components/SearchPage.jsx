import { useState, useContext, useEffect } from "react";
import { semanticSearch } from "../api/searchApi";
import { AIContext } from "../Context/AitoolsContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function SearchPage() {
  const { backendUrl } = useContext(AIContext);
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  // Search handler
  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!query.trim()) return;

    setLoading(true);

    const data = await semanticSearch(query, backendUrl);

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
    setLoading(false);
  };
  const tools = results.filter((item) => item.type === "tool");
  const resources = results.filter((item) => item.type === "resource");

  // Debounce search
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      handleSearch({ preventDefault: () => {} });
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="p-6 pt-0 max-w-5xl mx-auto">
      {/* Search Input */}
      {/* 🔍 Modern Search Bar */}
       <div className="relative mb-8">
    <input
      type="text"
      placeholder="Search AI tools, resources..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="
        w-full p-4 pl-12 rounded-2xl
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
        shadow-sm
        focus:ring-2 focus:ring-indigo-500
        focus:outline-none
        text-gray-800 dark:text-gray-100
        placeholder-gray-400
        transition-all duration-200
      "
    />

    {/* icon */}
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      🔍
    </span>
  </div>

  {/* loading */}
  {loading && (
    <p className="text-center text-gray-400 mb-6">
      Searching smartly...
    </p>
  )}

      {/* 🔧 AI TOOLS */}
      {tools.length > 0 && (
  <>
    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
      🔧 AI Tools
    </h2>

    <div className="grid md:grid-cols-2 gap-5 mb-10">
      {tools.slice(0,6).map((tool) => (
        <motion.div
          key={tool._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
        >
          <div className="
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-700
            rounded-2xl p-4
            shadow-sm hover:shadow-lg
            transition-all duration-300
            flex gap-4 items-center justify-between
          ">
            
            {/* LEFT */}
            <div className="flex gap-3 items-center">
              {/* IMAGE */}
              <img
                src={tool.image}
                alt={tool.name}
                className="w-14 h-14 rounded-xl object-cover border"
              />

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-1">
                  {tool.whatItDoes}
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <Link
              to={`/Ai-tools/${tool._id}`}
              className="
                px-4 py-2 text-sm
                bg-indigo-600 hover:bg-indigo-700
                text-white rounded-xl
                transition
              "
            >
              View
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </>
)}


      {/* 📚 RESOURCES */}
      {resources.length > 0 && (
  <>
    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
      📚 Learning Resources
    </h2>

    <div className="space-y-3">
      {resources.slice(0,5).map((res) => {
        const IconComponent = Icons[res.icon] || Icons.HelpCircle;

        return (
          <motion.div
            key={res._id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="
              flex items-center justify-between gap-4
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-700
              rounded-2xl p-4
              shadow-sm hover:shadow-lg
              transition-all duration-300
            ">
              
              {/* LEFT */}
              <div className="flex items-center gap-3">
                {/* icon */}
                <div className="
                  w-11 h-11 flex items-center justify-center
                  rounded-xl
                  bg-indigo-100 dark:bg-indigo-900/40
                  text-indigo-600
                ">
                  <IconComponent size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {res.name}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-1">
                    {res.short_description}
                  </p>
                </div>
              </div>

              {/* BTN */}
              <Link
                to={`/resources/${res.slug}`}
                className="
                  px-4 py-2 text-sm
                  bg-emerald-600 hover:bg-emerald-700
                  text-white rounded-xl
                  transition
                "
              >
                Open
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  </>
)}


      {/* No Results */}
      {!loading && query && results.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No tools or resources found for "{query}"
        </p>
      )}
    </div>
  );
}
