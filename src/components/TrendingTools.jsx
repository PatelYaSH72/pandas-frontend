import { ArrowRight, TrendingUp, Star, Bookmark } from "lucide-react";
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
        const res = await fetch(`${backendUrl}/api/user/AiTooltranding-data`);
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

  // First tool is featured, others go to the grid
  const featuredTool = trendingTools[0];
  const gridTools = trendingTools.slice(1, 5);

  return (
    <section className="py-24 bg-[#030508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Style from Image */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-indigo-500/10 rounded-lg">
            <TrendingUp className="text-indigo-500" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase italic">
            Trending Now
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* LEFT: Large Featured Card (Replit Style) */}
          {featuredTool && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 group cursor-pointer"
              onClick={() => navigate(`/Ai-Tools/${featuredTool._id}`)}
            >
              <div className="h-full bg-[#0A0C10] border border-white/10 rounded-[2.5rem] p-8 hover:border-indigo-500/40 transition-all duration-500 relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] -z-10" />
                
                <div className="flex justify-between items-start mb-8">
                   <div className="w-16 h-16 rounded-2xl bg-indigo-600 p-3 shadow-2xl shadow-indigo-600/20 group-hover:rotate-6 transition-transform">
                      <img src={featuredTool.image} alt="" className="w-full h-full object-contain" />
                   </div>
                   <span className="bg-orange-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white">
                     🔥 Trending
                   </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-white tracking-tighter uppercase">{featuredTool.name}</h3>
                  <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                    {featuredTool.description || "Next-generation software development and deployment platform."}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star size={14} fill="currentColor" /> {featuredTool.rating || 4.9}
                    </span>
                    <span>|</span>
                    <span className="flex items-center gap-1">
                      <Bookmark size={14} /> {featuredTool.savedCount || 0} Saved
                    </span>
                  </div>
                </div>

                {/* Bottom Decorative Image (Optional - mimicking the screenshot) */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                   <img src={featuredTool.image} className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="preview" />
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-indigo-400 font-bold uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                  View Details <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          )}

          {/* RIGHT: Small Cards Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {gridTools.map((tool, index) => (
              <motion.div
                key={tool._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/Ai-Tools/${tool._id}`)}
                className="bg-[#0A0C10] border border-white/5 p-6 rounded-[2rem] hover:bg-white/[0.02] hover:border-white/10 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <img src={tool.image} className="w-10 h-10 rounded-xl" alt="" />
                    <div className="bg-white/5 p-1.5 rounded-lg text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                  <h4 className="text-white font-bold tracking-tight mb-1">{tool.name}</h4>
                  <p className="text-slate-500 text-[11px] leading-tight mb-4 truncate">
                    {tool.category?.[0] || "AI Technology"}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[10px] font-bold text-amber-500 flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> {tool.rating || 4.7}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter italic">
                    {tool.reviewsCount || 0} Reviews
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrendingTools;