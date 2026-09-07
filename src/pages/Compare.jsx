"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
X,
Plus,
Star,
ExternalLink,
Scale,
Search,
Trash2,
ArrowLeft,
} from "lucide-react";
import { AIContext } from "../Context/AitoolsContext";
import { useNavigate } from "react-router-dom";

const Compare = () => {
const { AIToolsData } = useContext(AIContext);
const navigate = useNavigate();

const [selectedIds, setSelectedIds] = useState([]);
const [searchQuery, setSearchQuery] = useState("");

useEffect(() => {
window.scrollTo(0, 0);
}, []);

/*

* ---
* DATA
* ---

*/

const tools = useMemo(() => {
return Array.isArray(AIToolsData) ? AIToolsData : [];
}, [AIToolsData]);

/*

* ---
* SELECTED TOOLS
* ---

*/

const selectedTools = useMemo(() => {
return tools.filter((tool) => selectedIds.includes(tool._id));
}, [tools, selectedIds]);

/*

* ---
* SEARCH
* ---

*/

const searchResults = useMemo(() => {
const query = searchQuery.trim().toLowerCase();


if (!query || query.length < 2) {
  return [];
}

return tools
  .filter((tool) => {
    const name = String(tool?.name || "").toLowerCase();

    return (
      name.includes(query) &&
      !selectedIds.includes(tool._id)
    );
  })
  .slice(0, 6);


}, [tools, searchQuery, selectedIds]);

/*

* ---
* ADD / REMOVE TOOL
* ---

*/

const toggleTool = (toolId) => {
if (!toolId) return;


setSelectedIds((currentIds) => {
  const alreadySelected = currentIds.includes(toolId);

  if (alreadySelected) {
    return currentIds.filter((id) => id !== toolId);
  }

  if (currentIds.length >= 4) {
    window.alert("You can compare a maximum of 4 tools.");
    return currentIds;
  }

  return [...currentIds, toolId];
});

setSearchQuery("");


};

/*

* ---
* REMOVE TOOL
* ---

*/

const removeTool = (toolId) => {
setSelectedIds((currentIds) =>
currentIds.filter((id) => id !== toolId)
);
};

/*

* ---
* CLEAR ALL
* ---

*/

const clearAll = () => {
setSelectedIds([]);
setSearchQuery("");
};

/*

* ---
* VIEW TOOL
* ---

*/

const viewTool = (toolId) => {
if (!toolId) return;


navigate(`/Ai-tools/${toolId}`);


};

return ( <div className="min-h-screen bg-[#FAFAF8] text-[#141F19]">
{/* =========================================================
HEADER
========================================================== */}

```
  <section className="mx-auto max-w-7xl px-5 pb-14 pt-24 md:px-8 md:pt-32">
    {/* Back Button */}

    <motion.button
      type="button"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={() => navigate(-1)}
      className="group mb-14 inline-flex items-center gap-2 text-sm font-semibold text-[#4B5C53] transition-colors hover:text-[#3F7A5B]"
    >
      <ArrowLeft
        size={17}
        className="transition-transform group-hover:-translate-x-1"
      />

      Back
    </motion.button>

    {/* Hero */}

    <div className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E3E8E3] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3F7A5B]"
      >
        <Scale size={13} />

        Compare AI tools
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06, duration: 0.5 }}
        className="text-4xl font-black tracking-[-0.045em] md:text-6xl lg:text-7xl"
      >
        Compare tools.
        <br />

        <span className="text-[#3F7A5B]">
          Choose smarter.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.5 }}
        className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#4B5C53] md:text-base"
      >
        Put up to four AI tools side-by-side and quickly
        understand their pricing, capabilities, categories,
        and key differences.
      </motion.p>
    </div>

    {/* =========================================================
        SEARCH
    ========================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 }}
      className="relative z-50 mx-auto mt-12 max-w-2xl"
    >
      <div className="relative">
        <Search
          size={19}
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#8A988E]"
        />

        <input
          type="text"
          value={searchQuery}
          onChange={(event) =>
            setSearchQuery(event.target.value)
          }
          placeholder="Search an AI tool..."
          className="h-14 w-full rounded-[12px] border border-[#E3E8E3] bg-white pl-13 pr-12 text-sm font-medium text-[#141F19] outline-none transition-all placeholder:text-[#8A988E] focus:border-[#3F7A5B] focus:ring-4 focus:ring-[#3F7A5B]/10"
        />

        {searchQuery.length > 0 && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1.5 text-[#8A988E] transition-colors hover:bg-[#E7F1EA] hover:text-[#3F7A5B]"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Search Results */}

      <AnimatePresence>
        {searchResults.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
            }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-[12px] border border-[#E3E8E3] bg-white shadow-[0_18px_50px_-25px_rgba(20,31,25,0.35)]"
          >
            {searchResults.map((tool, index) => (
              <button
                key={tool._id}
                type="button"
                onClick={() => toggleTool(tool._id)}
                className={`flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[#E7F1EA] ${
                  index !== searchResults.length - 1
                    ? "border-b border-[#E3E8E3]"
                    : ""
                }`}
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="h-11 w-11 rounded-[8px] border border-[#E3E8E3] bg-[#FAFAF8] object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-[#141F19]">
                    {tool.name}
                  </p>

                  <p className="mt-0.5 text-xs text-[#8A988E]">
                    {tool.pricing || "Pricing unavailable"}
                  </p>
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E7F1EA] text-[#3F7A5B]">
                  <Plus size={16} />
                </span>
              </button>
            ))}
          </motion.div>
        )}

        {searchQuery.trim().length >= 2 &&
          searchResults.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="absolute left-0 right-0 top-[calc(100%+8px)] rounded-[12px] border border-[#E3E8E3] bg-white px-5 py-6 text-center shadow-[0_18px_50px_-25px_rgba(20,31,25,0.35)]"
            >
              <p className="text-sm font-semibold text-[#4B5C53]">
                No tools found
              </p>

              <p className="mt-1 text-xs text-[#8A988E]">
                Try another tool name.
              </p>
            </motion.div>
          )}
      </AnimatePresence>
    </motion.div>

    {/* =========================================================
        SELECTED TOOLS
    ========================================================== */}

    <AnimatePresence>
      {selectedTools.length > 0 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {selectedTools.map((tool) => (
            <motion.div
              layout
              key={tool._id}
              className="flex items-center gap-2 rounded-full border border-[#CFE0D4] bg-[#E7F1EA] px-4 py-2 text-xs font-bold text-[#336249]"
            >
              <span>{tool.name}</span>

              <button
                type="button"
                onClick={() => removeTool(tool._id)}
                className="flex h-5 w-5 items-center justify-center rounded-full transition-colors hover:bg-[#3F7A5B] hover:text-white"
                aria-label={`Remove ${tool.name}`}
              >
                <X size={12} />
              </button>
            </motion.div>
          ))}

          <button
            type="button"
            onClick={clearAll}
            className="ml-1 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-[#8A988E] transition-colors hover:bg-[#F3E8E6] hover:text-[#A34E43]"
          >
            <Trash2 size={13} />

            Clear
          </button>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Counter */}

    <div className="mt-5 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A988E]">
      {selectedTools.length} / 4 tools selected
    </div>
  </section>

  {/* =========================================================
      COMPARISON
  ========================================================== */}

  <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
    {selectedTools.length > 0 ? (
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="overflow-hidden rounded-[20px] border border-[#E3E8E3] bg-white"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse">
            {/* HEADER */}

            <thead>
              <tr className="border-b border-[#E3E8E3]">
                <th className="sticky left-0 z-20 w-[190px] bg-white px-6 py-8 text-left align-top md:w-[230px]">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8A988E]">
                    Compare
                  </span>

                  <p className="mt-2 text-sm font-bold text-[#141F19]">
                    Key details
                  </p>
                </th>

                {selectedTools.map((tool) => (
                  <th
                    key={tool._id}
                    className="min-w-[220px] px-6 py-8 text-center align-top md:min-w-[260px]"
                  >
                    <div className="relative mx-auto mb-4 w-fit">
                      <img
                        src={tool.image}
                        alt={tool.name}
                        className="h-16 w-16 rounded-[12px] border border-[#E3E8E3] bg-[#FAFAF8] object-cover md:h-20 md:w-20"
                      />

                      <button
                        type="button"
                        onClick={() => removeTool(tool._id)}
                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#141F19] text-white transition-colors hover:bg-[#A34E43]"
                        aria-label={`Remove ${tool.name}`}
                      >
                        <X size={12} />
                      </button>
                    </div>

                    <h3 className="text-base font-black tracking-tight text-[#141F19] md:text-lg">
                      {tool.name}
                    </h3>

                    <div className="mt-2 flex items-center justify-center gap-1.5">
                      <Star
                        size={14}
                        fill="currentColor"
                        className="text-[#C68A3A]"
                      />

                      <span className="text-xs font-bold text-[#4B5C53]">
                        {tool.rating ?? "—"}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* PRICING */}

              <tr className="border-b border-[#E3E8E3]">
                <td className="sticky left-0 z-10 bg-[#FAFAF8] px-6 py-7 align-top">
                  <span className="text-sm font-bold text-[#4B5C53]">
                    Pricing
                  </span>
                </td>

                {selectedTools.map((tool) => (
                  <td
                    key={tool._id}
                    className="px-6 py-7 text-center align-top"
                  >
                    <span className="inline-flex rounded-full bg-[#E7F1EA] px-3 py-1.5 text-xs font-bold text-[#3F7A5B]">
                      {tool.pricing || "Not specified"}
                    </span>
                  </td>
                ))}
              </tr>

              {/* WHAT IT DOES */}

              <tr className="border-b border-[#E3E8E3]">
                <td className="sticky left-0 z-10 bg-[#FAFAF8] px-6 py-7 align-top">
                  <span className="text-sm font-bold text-[#4B5C53]">
                    What it does
                  </span>
                </td>

                {selectedTools.map((tool) => (
                  <td
                    key={tool._id}
                    className="px-7 py-7 text-left align-top"
                  >
                    <p className="text-sm leading-7 text-[#4B5C53]">
                      {tool.whatItDoes ||
                        "No description available."}
                    </p>
                  </td>
                ))}
              </tr>

              {/* CATEGORIES */}

              <tr className="border-b border-[#E3E8E3]">
                <td className="sticky left-0 z-10 bg-[#FAFAF8] px-6 py-7 align-top">
                  <span className="text-sm font-bold text-[#4B5C53]">
                    Categories
                  </span>
                </td>

                {selectedTools.map((tool) => (
                  <td
                    key={tool._id}
                    className="px-6 py-7 align-top"
                  >
                    <div className="flex flex-wrap justify-center gap-2">
                      {(Array.isArray(tool.category)
                        ? tool.category
                        : []
                      )
                        .slice(0, 4)
                        .map((category) => (
                          <span
                            key={category}
                            className="rounded-full border border-[#E3E8E3] bg-[#FAFAF8] px-3 py-1.5 text-[10px] font-bold text-[#4B5C53]"
                          >
                            {category}
                          </span>
                        ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* RATING */}

              <tr className="border-b border-[#E3E8E3]">
                <td className="sticky left-0 z-10 bg-[#FAFAF8] px-6 py-7 align-top">
                  <span className="text-sm font-bold text-[#4B5C53]">
                    Rating
                  </span>
                </td>

                {selectedTools.map((tool) => (
                  <td
                    key={tool._id}
                    className="px-6 py-7 text-center align-top"
                  >
                    <div className="inline-flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F1E7] text-[#C68A3A]">
                        <Star
                          size={14}
                          fill="currentColor"
                        />
                      </span>

                      <span className="text-sm font-black text-[#141F19]">
                        {tool.rating ?? "—"}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* ACTION */}

              <tr>
                <td className="sticky left-0 z-10 bg-white px-6 py-8">
                  <span className="text-sm font-bold text-[#4B5C53]">
                    Explore
                  </span>
                </td>

                {selectedTools.map((tool) => (
                  <td
                    key={tool._id}
                    className="px-6 py-8 text-center"
                  >
                    <button
                      type="button"
                      onClick={() => viewTool(tool._id)}
                      className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-[#3F7A5B] px-5 py-3 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#336249] active:translate-y-0"
                    >
                      View details

                      <ExternalLink size={14} />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    ) : (
      /* EMPTY */

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="border-y border-[#E3E8E3] py-24 text-center md:py-32"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F1EA] text-[#3F7A5B]">
          <Scale size={25} />
        </div>

        <h2 className="mt-6 text-2xl font-black tracking-tight text-[#141F19] md:text-3xl">
          Ready to compare?
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#8A988E]">
          Search for AI tools above and add up to four
          products to see their differences side-by-side.
        </p>

        <div className="mt-6 text-xs font-semibold text-[#8A988E]">
          Search a tool above to get started.
        </div>
      </motion.div>
    )}
  </section>
</div>


);
};

export default Compare;
