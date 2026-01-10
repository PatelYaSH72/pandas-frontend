"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, ShieldCheck, Zap, Globe, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const AboutPage = () => {

  const navigate = useNavigate()

  const features = [
    {
      icon: <Target className="text-indigo-400" size={24} />,
      title: "Our Vision",
      desc: "To create the world's most accessible ecosystem where AI and Human creativity merge seamlessly."
    },
    {
      icon: <Rocket className="text-purple-400" size={24} />,
      title: "Our Mission",
      desc: "Empowering developers and creators by providing high-performance tools that eliminate repetitive tasks."
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={24} />,
      title: "Why Pandas?",
      desc: "Because we prioritize speed, security, and a 'developer-first' experience in everything we build."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden pt-24 pb-20">

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <motion.button
          onClick={() => navigate(-1)} // Pichhle page par jane ke liye
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5 }}
          className="group flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all shadow-sm"
        >
          <div className="p-1 rounded-lg bg-white dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <ArrowLeft size={18} />
          </div>
          <span className="text-sm font-black uppercase tracking-widest">Back</span>
        </motion.button>
      </div>
      {/* Decorative Background Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HERO SECTION --- */}
       <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-indigo-100 dark:border-indigo-800"
          >
            <Sparkles size={14} /> The Future is Here
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:to-slate-500"
          >
            We Build Tools for <br /> the Next Billion.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Pandas is more than just a toolkit. It's a platform designed to simplify complex workflows, making technology feel like magic.
          </motion.p>
        </div>

        {/* --- CARDS SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/60 rounded-[2.5rem] p-10 group hover:bg-white dark:hover:bg-slate-800/40 transition-all hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- STATS SECTION (Contrast Fix) --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-slate-900 dark:bg-indigo-600 rounded-[3rem] text-white shadow-2xl"
        >
          {[
            { label: "Requests", val: "50M+" },
            { label: "Users", val: "10k+" },
            { label: "Uptime", val: "99.9%" },
            { label: "Support", val: "24/7" }
          ].map((stat, i) => (
            <div key={i} className={`text-center py-6 ${i !== 3 ? 'border-r border-white/10' : ''}`}>
              <h4 className="text-4xl font-black mb-1 text-white">{stat.val}</h4>
              <p className="text-[10px] uppercase font-bold tracking-widest text-indigo-100/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* --- FOOTER CONTENT --- */}
        <div className="mt-32 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-black tracking-tight italic text-slate-900 dark:text-slate-100">Rooted in Performance.</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg leading-relaxed">
              We believe that the best software is the one that disappears. Our core values revolve around speed, intuitive UI, and a community-led development process.
            </p>
            
            <div className="flex gap-4 items-center">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 shadow-xl" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="user" />
                 ))}
               </div>
               <div className="text-sm font-bold flex flex-col">
                 <span className="text-slate-800 dark:text-slate-200">Trusted by 500+ developers</span>
                 <span className="text-indigo-600 dark:text-indigo-400 text-[10px] uppercase tracking-widest">Join the community</span>
               </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="h-64 bg-indigo-600 rounded-[3rem] p-8 flex flex-col justify-end text-white shadow-xl shadow-indigo-500/20">
               <Zap size={32} className="text-white" />
               <p className="mt-4 font-black text-lg">Lightning Fast Execution</p>
            </div>
            <div className="h-64 bg-slate-100 dark:bg-slate-900 rounded-[3rem] p-8 flex flex-col justify-end shadow-xl border border-transparent dark:border-slate-800 mt-8">
               <Globe size={32} className="text-indigo-500" />
               <p className="mt-4 font-black text-lg text-slate-900 dark:text-slate-100">Global Edge Network</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;