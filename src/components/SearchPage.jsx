import { useState, useContext, useEffect } from "react";
import { semanticSearch } from "../api/searchApi";
import { AIContext } from "../Context/AitoolsContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    })),...(data.tools || []).map((tool) => ({
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
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search AI tools, resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700
            shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            transition-all duration-200
          "
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
          Searching smartly 🧠...
        </p>
      )}

      {/* Tools Grid */}
      {/* Tools Grid */}
{tools.length > 0 && (
  <>
    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      🔧 AI Tools
    </h2>

    <div className="grid md:grid-cols-2 gap-6 mb-10">
      {tools.slice(0, 6).map((tool) => (
        <motion.div
          key={tool._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold">{tool.name}</h3>
              <p className="text-gray-500 mt-1">{tool.whatItDoes}</p>
            </div>

            <Link
              to={`/Ai-tools/${tool._id}`}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              View
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </>
)}

{resources.length > 0 && (
  <>
    <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
      📚 Learning Resources
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {resources.slice(0, 6).map((res) => (
        <motion.div
          key={res._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold">{res.name}</h3>
              <p className="text-gray-500 mt-1">{res.short_description}</p>
            </div>

            <Link
              to={`/resources/${res.slug}`}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
            >
              View
            </Link>
          </div>
        </motion.div>
      ))}
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
