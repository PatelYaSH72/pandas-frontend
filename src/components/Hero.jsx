import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, BookOpenCheck, Users, Star, Cpu, Command, Globe, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button.jsx';
import shaper from '../assets/shaper.webp'

const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-element", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15
      })
      .from(".visual-card", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        scale: 0.9
      }, "-=0.8");

      gsap.to(".floating", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.3, from: "random" }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#030508]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-600/10 blur-[100px] md:blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-indigo-900/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Content: 7 Columns for better text flow */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 md:space-y-10">
          <div className="hero-element inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-xl">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-300">
              The Ultimate AI Hub
            </span>
          </div>

          <h1 className="hero-element text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] md:leading-[1.05]">
            Discover 200+ <br />
            <span className="text-indigo-500">AI Tools</span> <br className="hidden md:block" /> 
            & Resources
          </h1>

          <p className="hero-element text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
            Web Development, AI, ML, Data Science, and Design — curated in one high-performance platform for builders.
          </p>

          <div className="hero-element flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-2">
            <Button 
              onClick={() => navigate('/Ai-Tools')} 
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 md:px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 border-none w-full sm:w-auto"
            >
              Explore All <ArrowRight size={18} />
            </Button>
            
            <Button 
              variant="secondary" 
              onClick={() => navigate('/Resources')} 
              className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 md:px-10 py-4 rounded-full font-bold backdrop-blur-lg transition-all w-full sm:w-auto text-center"
            >
              Browse Library
            </Button>
          </div>
        </div>

        {/* Right Side Visual: 5 Columns for the 3D set-up */}
        <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center min-h-[600px]">
          <motion.div 
            style={{ perspective: 1200, rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full flex items-center justify-center"
          >
            {/* Main 3D Card */}
            <div className="visual-card floating relative w-[280px] h-[400px] bg-slate-900 border border-white/10 rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <img 
                src={shaper}
                className="absolute top-10 -right-20 w-[350px] h-[350px] object-contain mix-blend-screen opacity-50 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000" 
                alt="AI Core" 
              />

              <div className="absolute bottom-10 left-8">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 shadow-xl shadow-indigo-600/30">
                  <Cpu size={20} />
                </div>
                <h3 className="text-white font-black text-2xl tracking-tighter uppercase leading-none">Neural <br /> Engine</h3>
              </div>
            </div>

            {/* Orbiting Element 1: Top Right */}
            <div className="visual-card absolute top-0 -right-4 w-44 h-44 bg-[#0A0C10]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-30 p-6 flex flex-col justify-between shadow-2xl transition-colors">
              <div className="flex justify-between items-start">
                <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-500">
                  <Command size={18} />
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                </div>
              </div>
              <div>
                <p className="text-3xl font-black text-white tracking-tighter leading-none">200+</p>
                <p className="text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em] mt-1">Tools Synced</p>
              </div>
            </div>

            {/* Orbiting Element 2: Bottom Left */}
            <div className="visual-card absolute bottom-4 -left-12 w-56 h-28 bg-indigo-600 border border-white/20 rounded-[2.2rem] z-30 p-5 flex items-center gap-4 shadow-xl rotate-[-6deg]">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-[9px] font-black text-indigo-100 uppercase tracking-widest opacity-80 leading-none">Status</p>
                <p className="text-white font-bold text-lg tracking-tight mt-1">Global Hub</p>
              </div>
            </div>

            {/* Orbiting Element 3: Top Left */}
            <div className="visual-card absolute top-12 left-0 w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl z-10 flex items-center justify-center text-slate-400 rotate-12">
              <Box size={18} />
            </div>

            {/* Background Rings - Centered behind the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-dashed border-white/10 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;