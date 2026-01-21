import React, { useContext, useState } from "react";
import {
  Search,
  Code,
  Brain,
  Database,
  Smartphone,
  Palette,
  ShieldCheck,
  ArrowRight,
  Plus,
  Github,
  Twitter,
  ExternalLink,
  TrendingUp,
  LogIn,
  UserPlus,
  User,
  Info,
  MessageSquare,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn, userData, setToken } =
    useContext(UserContext);

  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    navigate("/");
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-2xl group-hover:rotate-6 transition-transform">
            P
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Pandas
          </span>
        </div>

        {/* 2. Desktop Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 font-bold text-xs lg:text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Link
            to="/about"
            className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
          >
            <Info size={16} /> About
          </Link>
          <Link
            to="/Contact"
            className="flex items-center gap-2 hover:text-indigo-600 transition-colors"
          >
            <MessageSquare size={16} /> Contact
          </Link>
        </div>

        {/* 3. Auth & Profile + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          {!isLoggedIn ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => navigate("/login")}
                className="px-3 sm:px-5 py-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-all"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/sign-up")}
                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 sm:px-6 py-2.5 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                <UserPlus size={16} className="hidden xs:block" />
                Sign Up
              </button>
            </div>
          ) : (
            /* User Profile Logic */
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 sm:pl-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all"
              >
                <div className="flex flex-col items-end hidden md:block">
                  <span className="text-xs font-black tracking-tight">
                    {userData.name}
                  </span>
                  <span className="text-[9px] text-indigo-500 font-black uppercase tracking-tighter">
                    Developer
                  </span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg">
                  <User size={18} />
                </div>
                <ChevronDown
                  size={14}
                  className={`text-slate-400 transition-transform ${showProfileMenu ? "rotate-180" : ""}`}
                />
              </button>

              {/* Profile Dropdown Menu */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-2xl p-3 z-[100]">
                  <div className="px-4 py-3 mb-2 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                      Signed in as
                    </p>
                    <p className="text-sm font-bold truncate">
                      {userData.email}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <button
                      onClick={() => navigate("/Deshboard")}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 rounded-xl transition-all"
                    >
                      <LayoutDashboard size={18} /> Dashboard
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 rounded-xl transition-all">
                      <Heart size={18} /> Favorites
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 rounded-xl transition-all">
                      <Settings size={18} /> Settings
                    </button>
                  </div>
                  <div className="my-2 border-t border-slate-100 dark:border-slate-800"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
                  >
                    <LogOut size={18} /> Log Out
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Navigation Menu (Overlay) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <a
            href="/tools"
            className="block text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600"
          >
            Tools
          </a>
          <a
            href="/about"
            className="flex items-center gap-3 text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600"
          >
            <Info size={20} /> About
          </a>
          <a
            href="/contact"
            className="flex items-center gap-3 text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600"
          >
            <MessageSquare size={20} /> Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
