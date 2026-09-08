import React, { useContext, useEffect, useState } from "react";
import {
  UserPlus,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  BookmarkCheck,
  Plus,
  Compass,
  FolderTree,
  BookOpen,
  GitCompare,
  Contact
} from "lucide-react";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  {
    name: "Discover",
    path: "/Ai-Tools",
    icon: Compass,
  },
  {
    name: "Categories",
    path: "/Category",
    icon: FolderTree,
  },
  {
    name: "Resources",
    path: "/Resources",
    icon: BookOpen,
  },
  {
    name: "Compare",
    path: "/Compare-tools",
    icon: GitCompare,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Contact,
  },
];

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

  /* -------------------------------------------------------
     BODY SCROLL LOCK
  ------------------------------------------------------- */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* -------------------------------------------------------
     CLOSE MENU ON ESC
  ------------------------------------------------------- */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowProfileMenu(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* -------------------------------------------------------
     HELPERS
  ------------------------------------------------------- */
  const closeAll = () => {
    setShowProfileMenu(false);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setToken("");
    setIsLoggedIn(false);
    closeAll();
  };

  const goHome = () => {
    navigate("/");
    closeAll();
  };

  const goTo = (path) => {
    navigate(path);
    closeAll();
  };

  return (
    <>
      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ====================================================== */}
      <nav
        className="
          fixed
          left-0
          top-0
          z-[100]
          w-full
          border-b
          border-[#E3E8E3]
          bg-[#FFFFFF]/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[68px]
            w-full
            max-w-7xl
            items-center
            px-4
            sm:px-6
            lg:h-[74px]
            lg:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <button
            type="button"
            onClick={goHome}
            aria-label="Go to Pandas home"
            className="
              group
              flex
              shrink-0
              items-center
              border-0
              bg-transparent
              p-0
              outline-none
              focus:outline-none
            "
          >
            <img
              src="/logo-img.png"
              alt="Pandas"
              className="
                h-8
                w-auto
                object-contain
                transition-transform
                duration-200
                group-hover:scale-[1.02]
                sm:h-9
              "
            />
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <div
            className="
              ml-8
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {NAV_LINKS.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeAll}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    font-medium
                    text-[#4B5C53]
                    no-underline
                    outline-none
                    transition-all
                    duration-200
                    hover:bg-[#E7F1EA]
                    hover:text-[#3F7A5B]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#3F7A5B]/30
                  "
                >
                  <Icon
                    size={15}
                    strokeWidth={1.8}
                    className="
                      text-[#8A988E]
                      transition-colors
                      duration-200
                      group-hover:text-[#3F7A5B]
                    "
                  />

                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            {/* ADD TOOL */}
            <button
              type="button"
              onClick={() => goTo("/Add-Tools")}
              className="
                hidden
                h-10
                items-center
                gap-2
                rounded-lg
                border
                border-[#E3E8E3]
                bg-white
                px-3.5
                text-sm
                font-semibold
                text-[#141F19]
                outline-none
                transition-all
                duration-200
                hover:border-[#3F7A5B]
                hover:bg-[#E7F1EA]
                hover:text-[#3F7A5B]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#3F7A5B]/30
                sm:flex
              "
            >
              <Plus size={16} strokeWidth={2} />
              Add Tool
            </button>

            {/* =================================================
                AUTH
            ================================================== */}
            {!isLoggedIn ? (
              <button
                type="button"
                onClick={() => goTo("/sign-up")}
                className="
                  flex
                  h-10
                  items-center
                  gap-2
                  rounded-lg
                  bg-[#3F7A5B]
                  px-4
                  text-sm
                  font-semibold
                  text-white
                  outline-none
                  transition-all
                  duration-200
                  hover:bg-[#336249]
                  hover:shadow-[0_6px_18px_rgba(63,122,91,0.18)]
                  active:scale-[0.98]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#3F7A5B]/30
                "
              >
                <UserPlus
                  size={15}
                  strokeWidth={2}
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
                  className="
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-[#E3E8E3]
                    bg-white
                    p-1
                    pr-2
                    outline-none
                    transition-all
                    duration-200
                    hover:border-[#C9D4CC]
                    hover:bg-[#FAFAF8]
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#3F7A5B]/30
                  "
                >
                  {userData?.image ? (
                    <img
                      src={userData.image}
                      alt="Profile"
                      className="
                        h-8
                        w-8
                        rounded-md
                        object-cover
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-md
                        bg-[#E7F1EA]
                        text-sm
                        font-bold
                        text-[#3F7A5B]
                      "
                    >
                      {userData?.name
                        ?.charAt(0)
                        ?.toUpperCase() || "U"}
                    </div>
                  )}

                  <ChevronDown
                    size={15}
                    strokeWidth={1.8}
                    className={`
                      text-[#8A988E]
                      transition-transform
                      duration-200
                      ${
                        showProfileMenu
                          ? "rotate-180 text-[#3F7A5B]"
                          : ""
                      }
                    `}
                  />
                </button>

                {/* PROFILE DROPDOWN */}
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.16,
                        ease: "easeOut",
                      }}
                      role="menu"
                      className="
                        absolute
                        right-0
                        top-[calc(100%+8px)]
                        w-60
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#E3E8E3]
                        bg-white
                        p-1.5
                        shadow-[0_16px_40px_rgba(20,31,25,0.10)]
                      "
                    >
                      {/* ACCOUNT */}
                      <div className="px-3 py-2.5">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8A988E]">
                          Account
                        </p>

                        {userData?.name && (
                          <p className="mt-1 truncate text-sm font-bold text-[#141F19]">
                            {userData.name}
                          </p>
                        )}
                      </div>

                      {/* DASHBOARD */}
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => goTo("/Deshboard")}
                        className="
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-lg
                          px-3
                          py-2.5
                          text-left
                          text-sm
                          font-medium
                          text-[#4B5C53]
                          outline-none
                          transition-colors
                          hover:bg-[#E7F1EA]
                          hover:text-[#3F7A5B]
                          focus:outline-none
                          focus-visible:bg-[#E7F1EA]
                        "
                      >
                        <LayoutDashboard size={16} />
                        Dashboard
                      </button>

                      {/* BOOKMARKS */}
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => goTo("/BookMarks")}
                        className="
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-lg
                          px-3
                          py-2.5
                          text-left
                          text-sm
                          font-medium
                          text-[#4B5C53]
                          outline-none
                          transition-colors
                          hover:bg-[#E7F1EA]
                          hover:text-[#3F7A5B]
                          focus:outline-none
                          focus-visible:bg-[#E7F1EA]
                        "
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
                        className="
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-lg
                          px-3
                          py-2.5
                          text-left
                          text-sm
                          font-medium
                          text-red-600
                          outline-none
                          transition-colors
                          hover:bg-red-50
                          focus:outline-none
                          focus-visible:bg-red-50
                        "
                      >
                        <LogOut size={16} />
                        Log out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}
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
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-transparent
                bg-transparent
                text-[#4B5C53]
                outline-none
                transition-all
                duration-200
                hover:border-[#E3E8E3]
                hover:bg-[#FAFAF8]
                hover:text-[#3F7A5B]
                active:bg-[#E7F1EA]
                focus:outline-none
                focus-visible:border-[#C9D4CC]
                focus-visible:bg-[#E7F1EA]
                focus-visible:text-[#3F7A5B]
                lg:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                  >
                    <X
                      size={21}
                      strokeWidth={1.8}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                  >
                    <Menu
                      size={21}
                      strokeWidth={1.8}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                fixed
                inset-0
                z-[105]
                cursor-default
                border-0
                bg-[#141F19]/20
                p-0
                outline-none
                backdrop-blur-[2px]
                focus:outline-none
              "
            />

            {/* DRAWER */}
            <motion.aside
              initial={{
                x: "100%",
                opacity: 0.8,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: "100%",
                opacity: 0.8,
              }}
              transition={{
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="
                fixed
                right-0
                top-0
                z-[120]
                flex
                h-[100dvh]
                w-[min(360px,90vw)]
                flex-col
                overflow-hidden
                border-l
                border-[#E3E8E3]
                bg-[#FFFFFF]
                shadow-[-12px_0_40px_rgba(20,31,25,0.08)]
                lg:hidden
              "
            >
              {/* DRAWER HEADER */}
              <div
                className="
                  flex
                  h-[68px]
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-[#E3E8E3]
                  px-5
                "
              >
                <button
                  type="button"
                  onClick={goHome}
                  className="
                    border-0
                    bg-transparent
                    p-0
                    outline-none
                    focus:outline-none
                  "
                >
                  <img
                    src="/logo-img.png"
                    alt="Pandas"
                    className="h-8 w-auto object-contain"
                  />
                </button>

                {/* CLOSE BUTTON
                    IMPORTANT:
                    No blue focus ring
                */}
                <button
                  type="button"
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                  aria-label="Close menu"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-transparent
                    bg-transparent
                    text-[#4B5C53]
                    outline-none
                    transition-all
                    duration-200
                    hover:border-[#E3E8E3]
                    hover:bg-[#E7F1EA]
                    hover:text-[#3F7A5B]
                    active:bg-[#E7F1EA]
                    focus:outline-none
                    focus-visible:border-[#C9D4CC]
                    focus-visible:bg-[#E7F1EA]
                    focus-visible:text-[#3F7A5B]
                  "
                >
                  <X size={20} strokeWidth={1.8} />
                </button>
              </div>

              {/* DRAWER CONTENT */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-6">
                {/* EXPLORE */}
                <div>
                  <p
                    className="
                      mb-3
                      px-3
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#8A988E]
                    "
                  >
                    Explore
                  </p>

                  <div className="space-y-1">
                    {NAV_LINKS.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={closeAll}
                          className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            px-3
                            py-3.5
                            text-sm
                            font-semibold
                            text-[#4B5C53]
                            no-underline
                            outline-none
                            transition-all
                            duration-200
                            hover:bg-[#E7F1EA]
                            hover:text-[#3F7A5B]
                            focus:outline-none
                            focus-visible:bg-[#E7F1EA]
                            focus-visible:text-[#3F7A5B]
                          "
                        >
                          <span
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#FAFAF8]
                              text-[#8A988E]
                              transition-colors
                              group-hover:bg-white
                              group-hover:text-[#3F7A5B]
                            "
                          >
                            <Icon
                              size={17}
                              strokeWidth={1.8}
                            />
                          </span>

                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="my-6 border-t border-[#E3E8E3]" />

                {/* MORE */}
                <div>
                  <p
                    className="
                      mb-3
                      px-3
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#8A988E]
                    "
                  >
                    More
                  </p>

                  <div className="space-y-1">
                    <Link
                      to="/about"
                      onClick={closeAll}
                      className="
                        flex
                        items-center
                        rounded-xl
                        px-3
                        py-3.5
                        text-sm
                        font-medium
                        text-[#4B5C53]
                        no-underline
                        outline-none
                        transition-all
                        hover:bg-[#FAFAF8]
                        hover:text-[#141F19]
                        focus:outline-none
                        focus-visible:bg-[#E7F1EA]
                        focus-visible:text-[#3F7A5B]
                      "
                    >
                      About
                    </Link>

                    <Link
                      to="/contact"
                      onClick={closeAll}
                      className="
                        flex
                        items-center
                        rounded-xl
                        px-3
                        py-3.5
                        text-sm
                        font-medium
                        text-[#4B5C53]
                        no-underline
                        outline-none
                        transition-all
                        hover:bg-[#FAFAF8]
                        hover:text-[#141F19]
                        focus:outline-none
                        focus-visible:bg-[#E7F1EA]
                        focus-visible:text-[#3F7A5B]
                      "
                    >
                      Contact
                    </Link>

                    {/* ADD TOOL */}
                    <button
                      type="button"
                      onClick={() => goTo("/Add-Tools")}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        md:hidden
                        px-3
                        py-3.5
                        text-left
                        text-sm
                        font-semibold
                        text-[#3F7A5B]
                        outline-none
                        transition-all
                        hover:bg-[#E7F1EA]
                        focus:outline-none
                        focus-visible:bg-[#E7F1EA]
                      "
                    >
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#E7F1EA]
                        "
                      >
                        <Plus
                          size={17}
                          strokeWidth={2}
                        />
                      </span>

                      Add a tool
                    </button>
                  </div>
                </div>
              </div>

              {/* =================================================
                  MOBILE FOOTER
              ================================================== */}
              {/* <div
                className="
                  shrink-0
                  border-t
                  border-[#E3E8E3]
                  bg-[#FAFAF8]
                  p-4
                "
              >
                {!isLoggedIn ? (
                  <button
                    type="button"
                    onClick={() => goTo("/sign-up")}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#3F7A5B]
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      outline-none
                      transition-all
                      duration-200
                      hover:bg-[#336249]
                      hover:shadow-[0_8px_20px_rgba(63,122,91,0.16)]
                      active:scale-[0.99]
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#3F7A5B]/30
                    "
                  >
                    <UserPlus size={16} />
                    Create account
                  </button>
                ) : (
                  <div className="space-y-1">
                    <button
                      type="button"
                      onClick={() => goTo("/Deshboard")}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        text-sm
                        font-medium
                        text-[#4B5C53]
                        outline-none
                        transition-colors
                        hover:bg-white
                        hover:text-[#3F7A5B]
                        focus:outline-none
                        focus-visible:bg-[#E7F1EA]
                      "
                    >
                      <LayoutDashboard size={17} />
                      Dashboard
                    </button>

                    <button
                      type="button"
                      onClick={() => goTo("/BookMarks")}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        text-sm
                        font-medium
                        text-[#4B5C53]
                        outline-none
                        transition-colors
                        hover:bg-white
                        hover:text-[#3F7A5B]
                        focus:outline-none
                        focus-visible:bg-[#E7F1EA]
                      "
                    >
                      <BookmarkCheck size={17} />
                      Bookmarks
                    </button>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        text-sm
                        font-medium
                        text-red-600
                        outline-none
                        transition-colors
                        hover:bg-red-50
                        focus:outline-none
                        focus-visible:bg-red-50
                      "
                    >
                      <LogOut size={17} />
                      Log out
                    </button>
                  </div>
                )}

                <p
                  className="
                    mt-3
                    text-center
                    text-[10px]
                    font-medium
                    text-[#8A988E]
                  "
                >
                  Pandas · AI tools & resources
                </p>
              </div> */}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;