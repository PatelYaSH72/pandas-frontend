import { ArrowRight, Slice, TrendingUp } from "lucide-react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AIContext } from "../Context/AitoolsContext";
import { useNavigate } from "react-router";

const TrendingTools = () => {

  const {AIToolsData} = useContext(AIContext)

  const navigate = useNavigate()


  const tools = [
    { name: "Claude 3.5", cat: "LLM", img: "C" },
    { name: "Midjourney", cat: "Design", img: "M" },
    { name: "Supabase", cat: "Backend", img: "S" },
    { name: "Vercel AI", cat: "DevTools", img: "V" },
    { name: "Framers", cat: "No-Code", img: "F" },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-10">
          <TrendingUp className="text-indigo-600" />
          <h2 className="text-3xl font-bold">Trending Now</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {AIToolsData.slice(0,8).map((tool, i) => (
            <motion.div key={i} className="min-w-[280px] snap-start">
              <Card className="hover:border-indigo-500/50 group">
                <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:rotate-12 transition-transform">
                 <img src={tool.image} alt="" /> 
                </div>
                <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{tool.category[0]}</p>
                <div onClick={()=>navigate(`/Ai-Tools/${tool.id}`)} className="flex items-center text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all cursor-pointer">
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

export default TrendingTools