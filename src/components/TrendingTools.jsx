import { ArrowRight, TrendingUp } from "lucide-react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useContext, useMemo } from "react";
import { AIContext } from "../Context/AitoolsContext";
import { useNavigate } from "react-router";

const TrendingTools = () => {
  const { AIToolsData } = useContext(AIContext);
  const navigate = useNavigate();

  // 🔥 TRENDING LOGIC (rating + reviews)
  const trendingTools = useMemo(() => {
    if (!AIToolsData) return [];

    return [...AIToolsData]
      .sort((a, b) => {
        const scoreA = (a.rating || 0) * 2 + (a.reviews?.length || 0);
        const scoreB = (b.rating || 0) * 2 + (b.reviews?.length || 0);
        return scoreB - scoreA;
      })
      .slice(0, 8);
  }, [AIToolsData]);

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
                <p className="text-slate-500 text-sm mb-4">
                  {tool.category?.[0]}
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
