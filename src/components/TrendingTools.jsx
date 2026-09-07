
import {
  ArrowUpRight,
  TrendingUp,
  Star,
  Bookmark,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TrendingTools = () => {
  const [trendingTools, setTrendingTools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingTools = async () => {
      try {
        const res = await fetch(
          `${backendUrl}/api/user/AiTooltranding-data`
        );

        const data = await res.json();

        if (data.success) {
          setTrendingTools(data.data);
        }
      } catch (error) {
        console.error("Trending Fetch Error:", error);
      }
    };

    fetchTrendingTools();
  }, []);

  const featuredTool = trendingTools[0];
  const rankedTools = trendingTools.slice(1, 6);

  const getCategory = (tool) => {
    if (Array.isArray(tool.category)) {
      return tool.category[0];
    }

    return tool.category;
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-[#E3E8E3] pb-6">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-medium text-[#3F7A5B]">
              <TrendingUp size={15} strokeWidth={1.8} />
              <span>What people are exploring</span>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#141F19] sm:text-4xl">
              Trending tools
            </h2>
          </div>

          <button
            type="button"
            onClick={() => navigate("/Ai-Tools")}
            className="group hidden items-center gap-1.5 text-sm font-medium text-[#4B5C53] transition-colors hover:text-[#3F7A5B] sm:flex"
          >
            View directory
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* =====================================================
            FEATURED TOOL
        ====================================================== */}
        {featuredTool && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() =>
              navigate(`/Ai-Tools/${featuredTool._id}`)
            }
            className="group mb-12 cursor-pointer border-b border-[#E3E8E3] pb-12"
          >
            <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">

              {/* Rank */}
              <div className="hidden text-[72px] font-semibold leading-none tracking-[-0.07em] text-[#E3E8E3] md:block">
                01
              </div>

              {/* Logo */}
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E3E8E3] bg-white">
                  {featuredTool.image ? (
                    <img
                      src={featuredTool.image}
                      alt={`${featuredTool.name} logo`}
                      className="h-full w-full object-contain p-3"
                    />
                  ) : (
                    <span className="text-xl font-semibold text-[#3F7A5B]">
                      {featuredTool.name?.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-[#E7F1EA] px-2 py-1 text-[11px] font-medium text-[#3F7A5B]">
                      Trending
                    </span>

                    {getCategory(featuredTool) && (
                      <span className="text-xs text-[#8A988E]">
                        {getCategory(featuredTool)}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#141F19] transition-colors duration-200 group-hover:text-[#3F7A5B] sm:text-3xl">
                    {featuredTool.name}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4B5C53]">
                    {featuredTool.description}
                  </p>

                  {/* Metadata */}
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#8A988E]">

                    {featuredTool.rating !== undefined &&
                      featuredTool.rating !== null && (
                        <span className="flex items-center gap-1.5 text-[#4B5C53]">
                          <Star
                            size={13}
                            className="text-[#3F7A5B]"
                            fill="currentColor"
                          />
                          {featuredTool.rating}
                        </span>
                      )}

                    {featuredTool.savedCount !== undefined &&
                      featuredTool.savedCount !== null && (
                        <span className="flex items-center gap-1.5">
                          <Bookmark size={13} />
                          {featuredTool.savedCount} saved
                        </span>
                      )}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="hidden h-10 w-10 items-center justify-center rounded-lg border border-[#E3E8E3] bg-white text-[#8A988E] transition-all duration-200 group-hover:border-[#3F7A5B] group-hover:text-[#3F7A5B] md:flex">
                <ArrowUpRight size={17} />
              </div>
            </div>
          </motion.div>
        )}

        {/* =====================================================
            RANKED LIST
        ====================================================== */}
        {rankedTools.length > 0 && (
          <div>

            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-medium text-[#8A988E]">
                More tools worth exploring
              </p>

              <span className="text-xs text-[#8A988E]">
                Updated from directory data
              </span>
            </div>

            <div className="border-t border-[#E3E8E3]">
              {rankedTools.map((tool, index) => (
                <motion.button
                  key={tool._id || index}
                  type="button"
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  onClick={() =>
                    navigate(`/Ai-Tools/${tool._id}`)
                  }
                  className="group grid w-full grid-cols-[40px_auto_1fr_auto] items-center gap-4 border-b border-[#E3E8E3] py-5 text-left transition-colors duration-200 hover:bg-white sm:grid-cols-[48px_auto_1fr_auto_auto]"
                >

                  {/* Rank */}
                  <span className="text-sm font-medium tabular-nums text-[#8A988E]">
                    {String(index + 2).padStart(2, "0")}
                  </span>

                  {/* Logo */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#E3E8E3] bg-white">
                    {tool.image ? (
                      <img
                        src={tool.image}
                        alt={`${tool.name} logo`}
                        className="h-full w-full object-contain p-2"
                      />
                    ) : (
                      <span className="text-sm font-semibold text-[#3F7A5B]">
                        {tool.name?.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Tool info */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="truncate text-sm font-semibold text-[#141F19] transition-colors group-hover:text-[#3F7A5B] sm:text-base">
                        {tool.name}
                      </h4>

                      {getCategory(tool) && (
                        <span className="hidden rounded-md bg-[#FAFAF8] px-2 py-1 text-[11px] text-[#8A988E] sm:inline-block">
                          {getCategory(tool)}
                        </span>
                      )}
                    </div>

                    <p className="mt-1 truncate text-xs text-[#8A988E]">
                      {tool.description}
                    </p>
                  </div>

                  {/* Rating */}
                  {tool.rating !== undefined &&
                  tool.rating !== null ? (
                    <div className="hidden items-center gap-1.5 text-xs text-[#4B5C53] sm:flex">
                      <Star
                        size={12}
                        className="text-[#3F7A5B]"
                        fill="currentColor"
                      />
                      {tool.rating}
                    </div>
                  ) : (
                    <div className="hidden sm:block" />
                  )}

                  {/* Reviews */}
                  {tool.reviewsCount !== undefined &&
                  tool.reviewsCount !== null ? (
                    <span className="hidden text-xs text-[#8A988E] md:block">
                      {tool.reviewsCount} reviews
                    </span>
                  ) : (
                    <span className="hidden md:block" />
                  )}

                  {/* Arrow */}
                  <ArrowUpRight
                    size={16}
                    className="text-[#B0BAB3] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#3F7A5B]"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================
            MOBILE CTA
        ====================================================== */}
        <div className="mt-8 sm:hidden">
          <button
            type="button"
            onClick={() => navigate("/Ai-Tools")}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E3E8E3] bg-white px-4 py-3 text-sm font-medium text-[#3F7A5B] transition-colors duration-200 hover:border-[#3F7A5B]"
          >
            View all tools
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingTools;

