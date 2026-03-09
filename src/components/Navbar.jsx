import React, { useContext, useState, useEffect } from "react";
import {
  UserPlus,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  BookmarkCheck,
  Search,
  Command
} from "lucide-react";
import * as Icons from "lucide-react";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import SearchPage from "./SearchPage.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, userData, setToken } = useContext(UserContext);

  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu when navigating
  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setShowProfileMenu(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/[0.05] bg-[#030508]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
          
          {/* LOGO */}
          <div onClick={() => navigate("/")} className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
              P
            </div>
            <span className="text-sm md:text-lg font-bold text-white uppercase tracking-[0.2em]">
              Pandas
            </span>
          </div>

          {/* CENTRAL SEARCH PILL (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center max-w-md">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="w-full flex items-center justify-between px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 text-slate-400">
                <Search size={16} className="group-hover:text-indigo-400 transition-colors" />
                <span className="text-sm font-medium tracking-wide">Quick Search...</span>
              </div>
              <div className="flex items-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                <Command size={12} className="text-slate-300" />
                <span className="text-[10px] font-bold text-slate-300">K</span>
              </div>
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden lg:flex items-center gap-8">
              {['Home', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="h-4 w-[1px] bg-white/10 hidden lg:block" />

            {/* Auth & Search Toggle */}
            <div className="flex items-center gap-2 md:gap-3">
              <button onClick={() => setIsSearchOpen(true)} className="md:hidden p-2 text-slate-400 hover:text-white transition-colors">
                <Search size={20} />
              </button>

              {!isLoggedIn ? (
                <button 
                  onClick={() => navigate("/sign-up")} 
                  className="bg-white text-black px-5 md:px-7 py-2 md:py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-indigo-50 transition-all active:scale-95"
                >
                  Join
                </button>
              ) : (
                <div className="relative">
                  <button 
                    onClick={() => setShowProfileMenu(!showProfileMenu)} 
                    className="flex items-center gap-2 p-1 rounded-full bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all"
                  >
                    <img src={userData.image} className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover" alt="Profile" />
                    <ChevronDown size={14} className={`text-slate-500 mr-1 transition-transform ${showProfileMenu ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {showProfileMenu && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-4 w-52 md:w-56 bg-[#0A0C10] border border-white/10 rounded-2xl shadow-2xl p-2 z-[110] backdrop-blur-3xl"
                      >
                        <button onClick={() => {navigate("/Deshboard"); closeAll();}} className="w-full flex items-center gap-3 px-3 py-3 text-[10px] font-black text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all uppercase tracking-widest">
                          <LayoutDashboard size={14} /> Dashboard
                        </button>
                        <button onClick={() => {navigate("/BookMarks"); closeAll();}} className="w-full flex items-center gap-3 px-3 py-3 text-[10px] font-black text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all uppercase tracking-widest">
                          <BookmarkCheck size={14} /> Bookmarks
                        </button>
                        <div className="my-2 border-t border-white/5" />
                        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-3 text-[10px] font-black text-red-500 hover:bg-red-500/10 rounded-xl transition-all uppercase tracking-widest">
                          <LogOut size={14} /> Log Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="lg:hidden p-2 text-slate-400 hover:text-white z-[120]"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* 📱 MOBILE NAVIGATION MENU */}
       <AnimatePresence>
  {isMobileMenuOpen && (
    <>
      {/* 1. Solid Dark Backdrop (No transparency) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsMobileMenuOpen(false)}
        className="fixed inset-0 bg-slate-950/90 z-[110] lg:hidden" // Thoda sa dim taaki drawer highlight ho
      />

      {/* 2. Professional Side Drawer - Solid Slate-900 */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed inset-y-0 right-0 w-[280px] h-96 bg-slate-900 border-l border-white/10 z-[120] flex flex-col lg:hidden"
      >
        {/* Header - Simple & Solid */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-slate-900">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400 p-1">
            <X size={20} />
          </button>
        </div>

        {/* Links List - Simple & Clean */}
        <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto bg-slate-900">
          {[
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
            { name: 'Tools', path: '/Ai-Tools' },
            { name: 'Contact', path: '/Contact' },
            { name: 'About', path: '/about' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-4 py-3 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-all text-sm font-semibold tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* User Actions at Bottom - No transparency */}
        <div className="p-4 border-t border-white/5 bg-slate-900">
          
          
          <p className="text-[9px] text-center text-slate-500 mt-5 uppercase tracking-[0.2em] font-medium">
            Pandas Included v1.0
          </p>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
      </nav>

      {/* 🔍 SEARCH OVERLAY - Fully Responsive */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[5vh] md:pt-[10vh] px-3 md:px-0 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[#030508]/95 backdrop-blur-md" onClick={() => setIsSearchOpen(false)} />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0A0C10] border border-white/10 rounded-[2rem] md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] md:max-h-[80vh]"
            >
              {/* Header inside Search Component handled by SearchPage, but close button is here */}
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-4 z-50 p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-500 hover:text-red-500 transition-all"
              >
                <X size={18} />
              </button>

              <div className="flex-1 overflow-y-auto custom-scrollbar pt-2">
                <SearchPage setIsSearchOpen={setIsSearchOpen} /> 
              </div>
              
              <div className="px-6 py-4 bg-black/40 flex items-center justify-between border-t border-white/5 shrink-0">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[9px]">ESC</kbd> Close
                  </span>
                </div>
                <span className="text-[10px] font-black text-indigo-500/60 uppercase tracking-[0.2em] hidden xs:block">
                  Pandas Command Center
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;