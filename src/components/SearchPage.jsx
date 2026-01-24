import { useState } from "react";
import { semanticSearch } from "../api/searchApi";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [tools, setTools] = useState([]);
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = await semanticSearch(query);

    setTools(data.tools || []);
    setResources(data.resources || []);
    setLoading(false);
  };

  return (
    <div className="p-6">
      {/* 🔍 Search Box */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search AI tools, resources..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded"
        />
      </form>

      {/* ⏳ Loading */}
      {loading && <p className="mt-4">Searching smartly 🧠...</p>}

      {/* 🧠 AI Tools */}
      {!loading && tools.length > 0 && (
        <>
          <h2 className="mt-6 text-xl font-bold">AI Tools</h2>
          {tools.map((tool) => (
            <div key={tool._id} className="p-3 border rounded mt-2">
              <h3 className="font-semibold">{tool.name}</h3>
              <p className="text-sm">{tool.whatItDoes}</p>
            </div>
          ))}
        </>
      )}

      {/* 📚 Resources */}
      {!loading && resources.length > 0 && (
        <>
          <h2 className="mt-6 text-xl font-bold">Resources</h2>
          {resources.map((res) => (
            <div key={res._id} className="p-3 border rounded mt-2">
              <h3 className="font-semibold">{res.name}</h3>
              <p className="text-sm">{res.short_description}</p>
            </div>
          ))}
        </>
      )}

      {/* 😶 Empty */}
      {!loading && query && tools.length === 0 && resources.length === 0 && (
        <p className="mt-6 text-gray-500">
          No smart results found 😕
        </p>
      )}
    </div>
  );
}
