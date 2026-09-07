
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
  Command,
  Plus,
} from "lucide-react";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import SearchPage from "./SearchPage.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();

  const {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setToken,
  } = useContext(UserContext);

  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
    setShowProfileMenu(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
        setIsMobileMenuOpen(false);
      }

      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setShowProfileMenu(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setShowProfileMenu(false);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    {
      name: "Discover",
      path: "/Ai-Tools",
    },
    {
      name: "Categories",
      path: "/Category",
    },
    {
      name: "Resources",
      path: "/Resources",
    },
    {
      name: "Compare",
      path: "/Compare-tools",
    },
  ];

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================== */}
      <nav className="fixed left-0 top-0 z-[100] w-full border-b border-[#E3E8E3] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8">

          {/* LOGO */}
          <button
            type="button"
            onClick={() => {
              navigate("/");
              closeAll();
            }}
            aria-label="Go to Pandas home"
            className="group flex shrink-0 items-center"
          >
            <img
              src="/logo-img.png"
              alt="Pandas"
              className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] md:h-9"
            />
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#4B5C53] transition-colors duration-150 hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP SEARCH */}
          <div className="hidden flex-1 justify-center px-4 md:flex">
            <button
              type="button"
              onClick={openSearch}
              aria-label="Open search"
              className="group flex h-10 w-full max-w-[360px] items-center justify-between rounded-lg border border-[#E3E8E3] bg-[#FAFAF8] px-3.5 transition-all duration-200 hover:border-[#C9D4CC] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
            >
              <span className="flex items-center gap-2.5 text-sm text-[#8A988E]">
                <Search
                  size={17}
                  strokeWidth={1.8}
                  className="transition-colors group-hover:text-[#3F7A5B]"
                />
                <span>Search tools and resouces</span>
              </span>

              <span className="hidden items-center gap-1 rounded-md border border-[#E3E8E3] bg-white px-1.5 py-1 text-[11px] font-medium text-[#8A988E] sm:flex">
                <Command size={11} />
                <span>K</span>
              </span>
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="ml-auto flex items-center gap-2 md:gap-3">

            {/* MOBILE SEARCH */}
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#3F7A5B] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2 md:hidden"
            >
              <Search size={19} strokeWidth={1.8} />
            </button>

            {/* ADD TOOL */}
            <button
              type="button"
              onClick={() => {
                navigate("/Add-Tools");
                closeAll();
              }}
              className="hidden items-center gap-2 rounded-lg border border-[#E3E8E3] bg-white px-3.5 py-2 text-sm font-semibold text-[#141F19] transition-all duration-200 hover:border-[#3F7A5B] hover:text-[#3F7A5B] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2 sm:flex"
            >
              <Plus size={16} strokeWidth={2} />
              Add Tool
            </button>

            {/* AUTH / PROFILE */}
            {!isLoggedIn ? (
              <button
                type="button"
                onClick={() => navigate("/sign-up")}
                className="flex items-center gap-2 rounded-lg bg-[#3F7A5B] px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#336249] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
              >
                <UserPlus size={15} className="hidden sm:block" />
                Sign up
              </button>
            ) : (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowProfileMenu((prev) => !prev)}
                  aria-expanded={showProfileMenu}
                  aria-haspopup="menu"
                  className="flex items-center gap-2 rounded-lg border border-[#E3E8E3] bg-white p-1 pr-2 transition-colors duration-150 hover:border-[#C9D4CC] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
                >
                  <img
                    src={userData?.image}
                    className="h-8 w-8 rounded-md object-cover"
                    alt="Profile"
                  />

                  <ChevronDown
                    size={15}
                    className={`text-[#8A988E] transition-transform duration-200 ${
                      showProfileMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 6,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 6,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.16,
                      }}
                      role="menu"
                      className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-[#E3E8E3] bg-white p-1.5 shadow-[0_4px_12px_rgba(20,31,25,0.06)]"
                    >
                      <div className="px-3 py-2">
                        <p className="text-xs font-medium text-[#8A988E]">
                          Account
                        </p>
                      </div>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          navigate("/Deshboard");
                          closeAll();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                      >
                        <LayoutDashboard size={16} />
                        Dashboard
                      </button>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          navigate("/BookMarks");
                          closeAll();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                      >
                        <BookmarkCheck size={16} />
                        Bookmarks
                      </button>

                      <div className="my-1.5 border-t border-[#E3E8E3]" />

                      <button
                        type="button"
                        role="menuitem"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <LogOut size={16} />
                        Log out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2 lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X size={21} strokeWidth={1.8} />
              ) : (
                <Menu size={21} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {/* =========================================================
            MOBILE MENU
        ========================================================== */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.button
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 top-16 z-[105] bg-[#141F19]/20 lg:hidden"
              />

              {/* Drawer */}
              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.22,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="fixed inset-y-0 right-0 z-[120] flex w-[min(320px,88vw)] flex-col border-l border-[#E3E8E3] bg-white lg:hidden"
              >
                {/* Drawer Header */}
                <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#E3E8E3] px-5">
                  <div className="flex items-center gap-2">
                    <img
                      src="/logo-img.png"
                      alt="Pandas"
                      className="h-7 w-auto object-contain"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Search */}
                <div className="border-b border-[#E3E8E3] p-4">
                  <button
                    type="button"
                    onClick={openSearch}
                    className="flex h-11 w-full items-center gap-3 rounded-lg border border-[#E3E8E3] bg-[#FAFAF8] px-3 text-left text-sm text-[#8A988E] transition-colors hover:border-[#C9D4CC] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-1"
                  >
                    <Search size={17} />
                    Search tools...
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-4 py-5">
                  <p className="mb-2 px-3 text-xs font-medium text-[#8A988E]">
                    Explore
                  </p>

                  <div className="space-y-1">
                    {navLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="my-5 border-t border-[#E3E8E3]" />

                  <p className="mb-2 px-3 text-xs font-medium text-[#8A988E]">
                    More
                  </p>

                  <div className="space-y-1">
                    <Link
                      to="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                    >
                      About
                    </Link>

                    <Link
                      to="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                    >
                      Contact
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        navigate("/AddTool");
                        closeAll();
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-[#3F7A5B] transition-colors hover:bg-[#E7F1EA] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                    >
                      <Plus size={16} />
                      Add a tool
                    </button>
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="shrink-0 border-t border-[#E3E8E3] p-4">
                  {!isLoggedIn ? (
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/sign-up");
                        closeAll();
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#3F7A5B] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#336249] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
                    >
                      <UserPlus size={16} />
                      Create account
                    </button>
                  ) : (
                    <div className="space-y-1">
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/Deshboard");
                          closeAll();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] hover:bg-[#FAFAF8] hover:text-[#141F19]"
                      >
                        <LayoutDashboard size={16} />
                        Dashboard
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          navigate("/BookMarks");
                          closeAll();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] hover:bg-[#FAFAF8] hover:text-[#141F19]"
                      >
                        <BookmarkCheck size={16} />
                        Bookmarks
                      </button>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
                      >
                        <LogOut size={16} />
                        Log out
                      </button>
                    </div>
                  )}

                  <p className="mt-4 text-center text-[11px] text-[#8A988E]">
                    Pandas · AI tools & resources
                  </p>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* =========================================================
          SEARCH OVERLAY
      ========================================================== */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center px-3 pt-[6vh] sm:px-5 md:pt-[10vh]"
          >
            {/* Overlay */}
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setIsSearchOpen(false)}
              className="absolute inset-0 cursor-default bg-[#141F19]/25 backdrop-blur-[2px]"
            />

            {/* Search panel */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.18,
              }}
              className="relative flex max-h-[86vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-[#E3E8E3] bg-white shadow-[0_4px_12px_rgba(20,31,25,0.06)]"
            >
              {/* Search header */}
              <div className="flex h-14 shrink-0 items-center justify-between border-b border-[#E3E8E3] px-5">
                <div className="flex items-center gap-2.5">
                  <Search
                    size={18}
                    className="text-[#3F7A5B]"
                    strokeWidth={1.8}
                  />

                  <span className="text-sm font-semibold text-[#141F19]">
                    Search Pandas
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8A988E] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Search content */}
              <div className="min-h-0 flex-1 overflow-y-auto">
                <SearchPage setIsSearchOpen={setIsSearchOpen} />
              </div>

              {/* Search footer */}
              <div className="flex shrink-0 items-center justify-between border-t border-[#E3E8E3] bg-[#FAFAF8] px-5 py-3">
                <span className="flex items-center gap-2 text-xs text-[#8A988E]">
                  <kbd className="rounded-md border border-[#E3E8E3] bg-white px-1.5 py-0.5 text-[10px] font-medium text-[#4B5C53]">
                    ESC
                  </kbd>
                  Close
                </span>

                <span className="hidden items-center gap-1.5 text-xs text-[#8A988E] sm:flex">
                  <Command size={12} />
                  <span>K</span>
                  <span>to search</span>
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

