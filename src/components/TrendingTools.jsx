import { ArrowRight, TrendingUp } from "lucide-react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const TrendingTools = () => {
  const [trendingTools, setTrendingTools] = useState([]);
  const navigate = useNavigate();

  // 🔥 Fetch Trending Tools from Backend
  useEffect(() => {
    const fetchTrendingTools = async () => {
      try {
        const res = await fetch(
          `${backendUrl}/api/user/AiTooltranding-data`
        );

        const data = await res.json();

        if (data.success) {
          setTrendingTools(data.data); // already sorted & top 6
        }
      } catch (error) {
        console.error("Trending Fetch Error:", error);
      }
    };

    fetchTrendingTools();
  }, []);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-10">
          <TrendingUp className="text-indigo-600" />
          <h2 className="text-3xl font-bold">Trending Now</h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {trendingTools.map((tool) => (
            <motion.div
              key={tool._id}
              className="min-w-[280px] snap-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="hover:border-indigo-500/50 group relative">

                {/* 🔥 Trending Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded-full">
                  🔥 Trending
                </span>

                <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold mb-1">{tool.name}</h3>

                <p className="text-slate-500 text-sm mb-2">
                  {tool.category?.[0]}
                </p>

                <p className="text-xs text-slate-400 mb-2">
                  ⭐ {(tool.rating || 0).toFixed(1)} | 
                  Reviews: {tool.reviewsCount || 0} | 
                  Saved: {tool.savedCount || 0}
                </p>

                <div
                  onClick={() => navigate(`/Ai-Tools/${tool._id}`)}
                  className="flex items-center text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all cursor-pointer"
                >
                  View Details <ArrowRight size={16} />
                </div>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTools;