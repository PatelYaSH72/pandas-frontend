import React, { useContext, useState } from "react";
import {
  UserPlus,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  BookmarkCheck,
  Plus,
} from "lucide-react";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setShowProfileMenu(false);
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
        <div className="mx-auto flex h-16 max-w-6xl items-center px-4 sm:px-6 lg:h-[72px] lg:px-8">

          {/* =====================================================
              LOGO
          ====================================================== */}
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

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div className="ml-8 hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeAll}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[#4B5C53] transition-all duration-150 hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="ml-auto flex items-center gap-2 md:gap-3">

            {/* ===================================================
                ADD TOOL
            ==================================================== */}
            <button
              type="button"
              onClick={() => {
                navigate("/Add-Tools");
                closeAll();
              }}
              className="hidden items-center gap-2 rounded-lg border border-[#E3E8E3] bg-white px-3.5 py-2 text-sm font-semibold text-[#141F19] transition-all duration-200 hover:border-[#3F7A5B] hover:text-[#3F7A5B] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2 sm:flex"
            >
              <Plus
                size={16}
                strokeWidth={2}
              />
              Add Tool
            </button>

            {/* ===================================================
                AUTH / PROFILE
            ==================================================== */}
            {!isLoggedIn ? (
              <button
                type="button"
                onClick={() => {
                  navigate("/sign-up");
                  closeAll();
                }}
                className="flex items-center gap-2 rounded-lg bg-[#3F7A5B] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#336249] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
              >
                <UserPlus
                  size={15}
                  className="hidden sm:block"
                />
                Sign up
              </button>
            ) : (
              <div className="relative">

                {/* PROFILE BUTTON */}
                <button
                  type="button"
                  onClick={() =>
                    setShowProfileMenu((prev) => !prev)
                  }
                  aria-expanded={showProfileMenu}
                  aria-haspopup="menu"
                  className="flex items-center gap-2 rounded-lg border border-[#E3E8E3] bg-white p-1 pr-2 transition-all duration-150 hover:border-[#C9D4CC] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
                >
                  {userData?.image ? (
                    <img
                      src={userData.image}
                      className="h-8 w-8 rounded-md object-cover"
                      alt="Profile"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E7F1EA] text-sm font-semibold text-[#3F7A5B]">
                      {userData?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}

                  <ChevronDown
                    size={15}
                    className={`text-[#8A988E] transition-transform duration-200 ${
                      showProfileMenu
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* PROFILE DROPDOWN */}
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
                      className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-[#E3E8E3] bg-white p-1.5 shadow-[0_8px_24px_rgba(20,31,25,0.08)]"
                    >
                      {/* ACCOUNT HEADER */}
                      <div className="px-3 py-2">
                        <p className="text-xs font-medium text-[#8A988E]">
                          Account
                        </p>

                        {userData?.name && (
                          <p className="mt-0.5 truncate text-sm font-semibold text-[#141F19]">
                            {userData.name}
                          </p>
                        )}
                      </div>

                      {/* DASHBOARD */}
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

                      {/* BOOKMARKS */}
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

                      {/* LOGOUT */}
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

            {/* ===================================================
                MOBILE MENU BUTTON
            ==================================================== */}
            <button
              type="button"
              onClick={() =>
                setIsMobileMenuOpen((prev) => !prev)
              }
              aria-label={
                isMobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2 lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X
                  size={21}
                  strokeWidth={1.8}
                />
              ) : (
                <Menu
                  size={21}
                  strokeWidth={1.8}
                />
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
              {/* BACKDROP */}
              <motion.button
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="fixed inset-0 top-16 z-[105] bg-[#141F19]/20 lg:hidden"
              />

              {/* DRAWER */}
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

                {/* DRAWER HEADER */}
                <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#E3E8E3] px-5">
                  <img
                    src="/logo-img.png"
                    alt="Pandas"
                    className="h-7 w-auto object-contain"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    aria-label="Close menu"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* NAVIGATION */}
                <div className="flex-1 overflow-y-auto px-4 py-5">

                  <p className="mb-2 px-3 text-xs font-medium text-[#8A988E]">
                    Explore
                  </p>

                  <div className="space-y-1">
                    {navLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() =>
                          setIsMobileMenuOpen(false)
                        }
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

                    {/* ABOUT */}
                    <Link
                      to="/about"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                    >
                      About
                    </Link>

                    {/* CONTACT */}
                    <Link
                      to="/contact"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="flex items-center rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B]"
                    >
                      Contact
                    </Link>

                    {/* ADD TOOL */}
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

                {/* =================================================
                    MOBILE FOOTER
                ================================================== */}
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

                      {/* DASHBOARD */}
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/Deshboard");
                          closeAll();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19]"
                      >
                        <LayoutDashboard size={16} />
                        Dashboard
                      </button>

                      {/* BOOKMARKS */}
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/BookMarks");
                          closeAll();
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#4B5C53] transition-colors hover:bg-[#FAFAF8] hover:text-[#141F19]"
                      >
                        <BookmarkCheck size={16} />
                        Bookmarks
                      </button>

                      {/* LOGOUT */}
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
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
    </>
  );
};

export default Navbar;