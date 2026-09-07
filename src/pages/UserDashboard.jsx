
"use client";

import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bookmark,
  Send,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
  Camera,
  Pencil,
  Save,
  X,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router";
import axios from "axios";
import { AIContext } from "../Context/AitoolsContext";
import { UserContext } from "../Context/UserContext";

const UserDashboard = () => {
  const navigate = useNavigate();

  const { token, backendUrl } = useContext(AIContext);
  const { getUserData } = useContext(UserContext);

  const [activeTab, setActiveTab] = useState("saved");
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    joined: "",
    image: "",
    totalSaved: 0,
    totalSubmitted: 0,
    submittedTools: [],
    savedTools: [],
  });

  const [tempData, setTempData] = useState(userData);

  // -----------------------------
  // Fetch dashboard data
  // -----------------------------
  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const { data } = await axios.get(
        `${backendUrl}/api/user/dashBoradData`,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        setUserData(data);
        setTempData(data);
      }
    } catch (error) {
      console.error(
        "Dashboard API Error:",
        error.response?.data?.message || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchDashboardData();
    }
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // -----------------------------
  // Helpers
  // -----------------------------
  const formatJoinedDate = (dateString) => {
    if (!dateString) return "—";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) return "—";

    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const timeAgo = (dateString) => {
    if (!dateString) return "Just now";

    const now = new Date();
    const past = new Date(dateString);
    const seconds = Math.floor((now - past) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);

      if (count >= 1) {
        return `${count} ${interval.label}${
          count > 1 ? "s" : ""
        } ago`;
      }
    }

    return "Just now";
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return {
          wrapper:
            "bg-[#E7F1EA] text-[#3F7A5B] border-[#CFE3D5]",
          icon: <CheckCircle2 size={13} />,
        };

      case "Pending":
        return {
          wrapper:
            "bg-[#FFF7E6] text-[#A56A00] border-[#F3DDAA]",
          icon: <Clock size={13} />,
        };

      case "Rejected":
        return {
          wrapper:
            "bg-[#FCECEC] text-[#B54747] border-[#E8CACA]",
          icon: <AlertCircle size={13} />,
        };

      default:
        return {
          wrapper:
            "bg-[#F2F4F2] text-[#6C786F] border-[#E1E5E1]",
          icon: null,
        };
    }
  };

  // -----------------------------
  // Input change
  // -----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTempData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------
  // Image select
  // -----------------------------
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  // -----------------------------
  // Save profile
  // -----------------------------
  const handleSave = async () => {
    try {
      setSaving(true);

      const formData = new FormData();

      formData.append("name", tempData.name);
      formData.append("email", tempData.email);

      if (selectedImage) {
        formData.append("image", selectedImage);
      }

      const { data } = await axios.put(
        `${backendUrl}/api/user/upate-data`,
        formData,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        await getUserData();

        setSelectedImage(null);
        setIsEditMode(false);

        await fetchDashboardData();
      }
    } catch (error) {
      console.error(
        "Profile Update Error:",
        error.response?.data?.message || error.message
      );
    } finally {
      setSaving(false);
    }
  };

  // -----------------------------
  // Cancel edit
  // -----------------------------
  const handleCancel = () => {
    setTempData({ ...userData });
    setSelectedImage(null);
    setIsEditMode(false);
  };

  // -----------------------------
  // Loading
  // -----------------------------
  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center pt-20">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin" />
          <p className="text-sm text-ink-muted">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  const avatarPreview = selectedImage
    ? URL.createObjectURL(selectedImage)
    : userData?.image;

  return (
    <div className="min-h-screen bg-bg text-ink pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="
            inline-flex items-center gap-2
            mb-8
            text-sm font-medium
            text-ink-soft
            hover:text-accent
            transition-colors
          "
        >
          <ArrowLeft size={17} />
          Back
        </button>

        {/* Page Header */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent mb-2">
            Account
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            Your Dashboard
          </h1>

          <p className="mt-2 text-sm md:text-base text-ink-soft">
            Manage your profile, saved tools and submissions.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">

          {/* =====================================
              PROFILE
          ====================================== */}
          <aside>
            <div className="bg-surface border border-border rounded-lg p-6">

              {/* Avatar */}
              <div className="flex flex-col items-center">

                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-accent-soft border border-border">
                    {avatarPreview ? (
                      <img
                        src={avatarPreview}
                        alt={userData?.name || "Profile"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-accent">
                        {userData?.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                    )}
                  </div>

                  {isEditMode && (
                    <>
                      <input
                        type="file"
                        accept="image/*"
                        id="avatarUpload"
                        className="hidden"
                        onChange={handleImageChange}
                      />

                      <button
                        onClick={() =>
                          document
                            .getElementById("avatarUpload")
                            .click()
                        }
                        className="
                          absolute bottom-0 right-0
                          w-8 h-8
                          rounded-full
                          bg-accent
                          text-white
                          flex items-center justify-center
                          border-2 border-surface
                          hover:bg-accent-hover
                          transition-colors
                        "
                      >
                        <Camera size={14} />
                      </button>
                    </>
                  )}
                </div>

                {/* Profile Details */}
                <div className="w-full mt-5">

                  {!isEditMode ? (
                    <div className="text-center">
                      <h2 className="text-lg font-semibold text-ink">
                        {userData?.name || "User"}
                      </h2>

                      {userData?.role && (
                        <p className="text-xs font-medium text-accent mt-1">
                          {userData.role}
                        </p>
                      )}

                      <p className="text-sm text-ink-muted mt-1 break-all">
                        {userData?.email}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">

                      <div>
                        <label className="block text-xs font-medium text-ink-soft mb-1.5">
                          Full name
                        </label>

                        <input
                          name="name"
                          value={tempData.name || ""}
                          onChange={handleChange}
                          className="
                            w-full
                            h-10
                            px-3
                            bg-bg
                            border border-border
                            rounded-md
                            text-sm text-ink
                            outline-none
                            focus:border-accent
                            focus:ring-2
                            focus:ring-accent/10
                          "
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-ink-soft mb-1.5">
                          Email
                        </label>

                        <input
                          name="email"
                          value={tempData.email || ""}
                          onChange={handleChange}
                          className="
                            w-full
                            h-10
                            px-3
                            bg-bg
                            border border-border
                            rounded-md
                            text-sm text-ink
                            outline-none
                            focus:border-accent
                            focus:ring-2
                            focus:ring-accent/10
                          "
                        />
                      </div>

                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="w-full mt-6 pt-5 border-t border-border grid grid-cols-3 divide-x divide-border">

                  <div className="text-center px-2">
                    <p className="text-[11px] text-ink-muted">
                      Joined
                    </p>
                    <p className="text-sm font-semibold text-ink mt-1">
                      {formatJoinedDate(userData?.joined)}
                    </p>
                  </div>

                  <div className="text-center px-2">
                    <p className="text-[11px] text-ink-muted">
                      Saved
                    </p>
                    <p className="text-sm font-semibold text-accent mt-1">
                      {userData?.totalSaved ?? 0}
                    </p>
                  </div>

                  <div className="text-center px-2">
                    <p className="text-[11px] text-ink-muted">
                      Submitted
                    </p>
                    <p className="text-sm font-semibold text-ink mt-1">
                      {userData?.totalSubmitted ?? 0}
                    </p>
                  </div>

                </div>

                {/* Edit / Save */}
                <div className="w-full mt-6">

                  {!isEditMode ? (
                    <button
                      onClick={() => {
                        setTempData({ ...userData });
                        setIsEditMode(true);
                      }}
                      className="
                        w-full
                        h-10
                        flex items-center justify-center gap-2
                        bg-ink
                        text-white
                        rounded-md
                        text-sm font-medium
                        hover:bg-accent
                        transition-colors
                      "
                    >
                      <Pencil size={14} />
                      Edit Profile
                    </button>
                  ) : (
                    <div className="flex gap-2">

                      <button
                        onClick={handleSave}
                        disabled={saving}
                        className="
                          flex-1
                          h-10
                          flex items-center justify-center gap-2
                          bg-accent
                          text-white
                          rounded-md
                          text-sm font-medium
                          hover:bg-accent-hover
                          disabled:opacity-60
                          transition-colors
                        "
                      >
                        {saving ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Saving
                          </>
                        ) : (
                          <>
                            <Save size={14} />
                            Save
                          </>
                        )}
                      </button>

                      <button
                        onClick={handleCancel}
                        disabled={saving}
                        className="
                          w-10 h-10
                          flex items-center justify-center
                          border border-border
                          rounded-md
                          text-ink-soft
                          hover:text-red-500
                          hover:border-red-200
                          transition-colors
                        "
                      >
                        <X size={17} />
                      </button>

                    </div>
                  )}

                </div>
              </div>
            </div>
          </aside>

          {/* =====================================
              MAIN CONTENT
          ====================================== */}
          <main className="min-w-0">

            {/* Tabs */}
            <div className="border-b border-border mb-8">

              <div className="flex gap-7">

                <button
                  onClick={() => setActiveTab("saved")}
                  className={`
                    relative
                    flex items-center gap-2
                    pb-3
                    text-sm font-medium
                    transition-colors
                    ${
                      activeTab === "saved"
                        ? "text-accent"
                        : "text-ink-muted hover:text-ink"
                    }
                  `}
                >
                  <Bookmark size={16} />
                  Saved Tools

                  {activeTab === "saved" && (
                    <motion.div
                      layoutId="dashboard-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("submitted")}
                  className={`
                    relative
                    flex items-center gap-2
                    pb-3
                    text-sm font-medium
                    transition-colors
                    ${
                      activeTab === "submitted"
                        ? "text-accent"
                        : "text-ink-muted hover:text-ink"
                    }
                  `}
                >
                  <Send size={16} />
                  Submissions

                  {activeTab === "submitted" && (
                    <motion.div
                      layoutId="dashboard-tab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </button>

              </div>
            </div>

            {/* =====================================
                SAVED TOOLS
            ====================================== */}
            <AnimatePresence mode="wait">

              {activeTab === "saved" && (
                <motion.div
                  key="saved"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-3"
                >

                  {userData?.savedTools?.length > 0 ? (
                    userData.savedTools.map((tool, index) => (
                      <motion.div
                        key={tool.id || tool._id || index}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        className="
                          group
                          bg-surface
                          border border-border
                          rounded-md
                          p-4
                          flex items-center gap-4
                          hover:border-accent/40
                          hover:bg-accent-soft/30
                          transition-all
                        "
                      >

                        <div className="w-12 h-12 shrink-0 rounded-md overflow-hidden bg-accent-soft">
                          {tool.image ? (
                            <img
                              src={tool.image}
                              alt={tool.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-accent font-semibold">
                              {tool.name?.charAt(0)?.toUpperCase()}
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">

                          <h3 className="
                            text-sm
                            font-semibold
                            text-ink
                            truncate
                            group-hover:text-accent
                            transition-colors
                          ">
                            {tool.name}
                          </h3>

                          <p className="text-xs text-ink-muted mt-1 truncate">
                            {Array.isArray(tool.category)
                              ? tool.category.join(" · ")
                              : tool.category || "AI Tool"}
                          </p>

                        </div>

                        <button
                          onClick={() =>
                            navigate(
                              `/Ai-tools/${tool.id || tool._id}`
                            )
                          }
                          className="
                            shrink-0
                            w-9 h-9
                            flex items-center justify-center
                            rounded-md
                            border border-border
                            text-ink-muted
                            hover:bg-accent
                            hover:border-accent
                            hover:text-white
                            transition-colors
                          "
                          aria-label="View tool"
                        >
                          <ExternalLink size={16} />
                        </button>

                      </motion.div>
                    ))
                  ) : (
                    <EmptyState
                      title="No saved tools"
                      description="Tools you save will appear here."
                    />
                  )}

                </motion.div>
              )}

              {/* =====================================
                  SUBMISSIONS
              ====================================== */}

              {activeTab === "submitted" && (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-3"
                >

                  {userData?.submittedTools?.length > 0 ? (
                    userData.submittedTools.map((tool, index) => {
                      const status = getStatusStyle(tool.status);

                      return (
                        <motion.div
                          key={tool.id || tool._id || index}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.04,
                          }}
                          className="
                            bg-surface
                            border border-border
                            rounded-md
                            px-5 py-4
                            flex flex-col sm:flex-row
                            sm:items-center
                            justify-between
                            gap-4
                            hover:border-accent/30
                            transition-colors
                          "
                        >

                          <div className="flex items-center gap-4 min-w-0">

                            <div className="
                              w-9 h-9
                              shrink-0
                              rounded-md
                              bg-accent-soft
                              text-accent
                              flex items-center justify-center
                              text-xs font-semibold
                            ">
                              {index + 1}
                            </div>

                            <div className="min-w-0">

                              <h3 className="text-sm font-semibold text-ink truncate">
                                {tool.name || "Untitled submission"}
                              </h3>

                              <p className="text-xs text-ink-muted mt-1">
                                Submitted {timeAgo(tool.date)}
                              </p>

                            </div>
                          </div>

                          <div
                            className={`
                              self-start sm:self-auto
                              px-3 py-1.5
                              rounded-md
                              border
                              text-[11px]
                              font-medium
                              flex items-center gap-1.5
                              ${status.wrapper}
                            `}
                          >
                            {status.icon}
                            {tool.status || "Pending"}
                          </div>

                        </motion.div>
                      );
                    })
                  ) : (
                    <EmptyState
                      title="No submissions yet"
                      description="Your submitted tools will appear here."
                    />
                  )}

                </motion.div>
              )}

            </AnimatePresence>

          </main>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------
// Empty State
// --------------------------------------
const EmptyState = ({ title, description }) => {
  return (
    <div className="py-16 text-center">
      <div className="
        w-12 h-12
        mx-auto mb-4
        rounded-full
        bg-accent-soft
        text-accent
        flex items-center justify-center
      ">
        <Bookmark size={20} />
      </div>

      <h3 className="text-base font-semibold text-ink">
        {title}
      </h3>

      <p className="text-sm text-ink-muted mt-1">
        {description}
      </p>
    </div>
  );
};

export default UserDashboard;
