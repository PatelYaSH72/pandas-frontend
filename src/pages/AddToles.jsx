"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  X,
  Globe,
  Info,
  Tag,
  DollarSign,
  BookOpen,
  Image as ImageIcon,
  CheckCircle,
  Sparkles,
  ArrowLeft,
  Link2,
  Github,
  Youtube,
  FileText,
  Cpu,
  Check,
  Star,
  AlertCircle,
  Loader2,
  ExternalLink,
  ShieldCheck,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AIContext } from "../Context/AitoolsContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddToles = () => {
  const navigate = useNavigate();
  const { token: contextToken, backendUrl } = useContext(AIContext);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [imageError, setImageError] = useState(false);

  const aiCategoriesList = [
    "Information Technology",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Mobile App Development",
    "Cloud Computing",
    "Cybersecurity",
    "Internet of Things (IoT)",
    "Robotics",
    "Blockchain",
    "Biotechnology",
    "Medical & Health Technology",
    "Environmental Technology",
    "Space Technology",
    "Agricultural Technology",
    "Educational Technology (EdTech)",
    "Financial Technology (FinTech)",
    "Computer Science / Software Development",
    "Networking / Telecommunications",
    "Automation & Control Systems",
    "Civil Engineering & Construction Technology",
    "Energy / Sustainable Technology",
    "Transportation Technology",
    "Media & Entertainment Technology",
    "Manufacturing / Industrial Technology",
    "Quantum Computing",
    "Clean / Green Technology",
  ];

  const defaultImage =
    "https://img.freepik.com/free-vector/robotic-artificial-intelligence-technology-smart-lerning-from-bigdata_1150-48136.jpg?semt=ais_hybrid&w=740&q=80";

  const initialForm = {
    name: "",
    rating: 5,
    pricing: "Free",
    category: [],
    whatItDoes: "",
    howToUse: [""],
    techRelevance: [""],
    image: defaultImage,
    officialLink: "",
    docLink: "",
    tutorialLink: "",
    githubLink: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const authToken =
    contextToken || localStorage.getItem("token");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* -------------------------------------------------------
     Helpers
  ------------------------------------------------------- */

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const isValidUrl = (url) => {
    try {
      const parsed = new URL(url.trim());
      return ["http:", "https:"].includes(parsed.protocol);
    } catch {
      return false;
    }
  };

  const getDomainName = (url) => {
    try {
      const hostname = new URL(url)
        .hostname
        .replace(/^www\./, "")
        .split(".")[0];

      return hostname
        ? hostname.charAt(0).toUpperCase() + hostname.slice(1)
        : "";
    } catch {
      return "";
    }
  };

  /* -------------------------------------------------------
     Validation
  ------------------------------------------------------- */

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Tool name is required.";
    }

    if (!formData.officialLink.trim()) {
      newErrors.officialLink = "Official website is required.";
    } else if (!isValidUrl(formData.officialLink)) {
      newErrors.officialLink = "Enter a valid website URL.";
    }

    if (!formData.category.length) {
      newErrors.category = "Select at least one category.";
    }

    if (!formData.whatItDoes.trim()) {
      newErrors.whatItDoes = "Add a short description of the tool.";
    } else if (formData.whatItDoes.trim().length < 30) {
      newErrors.whatItDoes =
        "Description should be at least 30 characters.";
    }

    if (
      Number(formData.rating) < 1 ||
      Number(formData.rating) > 5
    ) {
      newErrors.rating = "Rating must be between 1 and 5.";
    }

    const optionalLinks = [
      ["docLink", "Documentation"],
      ["tutorialLink", "Tutorial"],
      ["githubLink", "GitHub"],
      ["image", "Image"],
    ];

    optionalLinks.forEach(([key, label]) => {
      if (formData[key] && !isValidUrl(formData[key])) {
        newErrors[key] = `${label} must be a valid URL.`;
      }
    });

    const cleanSteps = formData.howToUse.filter((item) =>
      item.trim()
    );

    if (!cleanSteps.length) {
      newErrors.howToUse = "Add at least one usage step.";
    }

    const cleanTech = formData.techRelevance.filter((item) =>
      item.trim()
    );

    if (!cleanTech.length) {
      newErrors.techRelevance =
        "Add at least one technology or relevant stack.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstError = Object.values(newErrors)[0];
      toast.error(firstError);
      return false;
    }

    return true;
  };

  /* -------------------------------------------------------
     Smart suggestion
  ------------------------------------------------------- */

  const suggestFromWebsite = () => {
    if (!formData.officialLink.trim()) {
      toast.info("Add the official website first.");
      return;
    }

    if (!isValidUrl(formData.officialLink)) {
      setErrors((prev) => ({
        ...prev,
        officialLink: "Enter a valid website URL first.",
      }));

      toast.error("Please enter a valid official website URL.");
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      const url = formData.officialLink.toLowerCase();
      const brand = getDomainName(formData.officialLink);

      const suggestedCategories = [];

      if (
        url.includes("ai") ||
        url.includes("gpt") ||
        url.includes("model") ||
        url.includes("machine")
      ) {
        suggestedCategories.push(
          "Artificial Intelligence"
        );
      }

      if (
        url.includes("code") ||
        url.includes("dev") ||
        url.includes("github")
      ) {
        suggestedCategories.push(
          "Computer Science / Software Development"
        );
      }

      if (
        url.includes("cloud") ||
        url.includes("deploy")
      ) {
        suggestedCategories.push("Cloud Computing");
      }

      if (
        url.includes("data") ||
        url.includes("analytics")
      ) {
        suggestedCategories.push("Data Science");
      }

      if (!suggestedCategories.length) {
        suggestedCategories.push("Information Technology");
      }

      setFormData((prev) => ({
        ...prev,
        name: prev.name || brand,
        category: [
          ...new Set([
            ...prev.category,
            ...suggestedCategories,
          ]),
        ],
      }));

      setIsAnalyzing(false);

      toast.success(
        "Basic details suggested from the website."
      );
    }, 900);
  };

  /* -------------------------------------------------------
     Dynamic fields
  ------------------------------------------------------- */

  const handleAddField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const handleRemoveField = (field, index) => {
    if (formData[field].length <= 1) {
      toast.info("At least one field is required.");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleInputChange = (
    field,
    index,
    value
  ) => {
    setFormData((prev) => {
      const updated = [...prev[field]];
      updated[index] = value;

      return {
        ...prev,
        [field]: updated,
      };
    });

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const toggleCategory = (category) => {
    setFormData((prev) => {
      const exists = prev.category.includes(category);

      return {
        ...prev,
        category: exists
          ? prev.category.filter(
              (item) => item !== category
            )
          : [...prev.category, category],
      };
    });

    setErrors((prev) => ({
      ...prev,
      category: "",
    }));
  };

  /* -------------------------------------------------------
     Submit
  ------------------------------------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!authToken) {
      toast.info(
        "Please login before submitting a tool."
      );
      navigate("/login");
      return;
    }

    if (isSubmitting) return;

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        rating: Number(formData.rating),
        howToUse: formData.howToUse.filter((item) =>
          item.trim()
        ),
        techRelevance:
          formData.techRelevance.filter((item) =>
            item.trim()
          ),
      };

      const response = await axios.post(
        `${backendUrl}/api/user/submit`,
        payload,
        {
          headers: {
            token: authToken,
          },
        }
      );

      if (response.data?.success === false) {
        throw new Error(
          response.data?.message ||
            "Unable to submit the tool."
        );
      }

      setShowSuccess(true);

      toast.success(
        "Tool submitted successfully."
      );
    } catch (error) {
      console.error(
        "Tool submission failed:",
        error.response?.data || error.message
      );

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Unable to submit the tool."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* -------------------------------------------------------
     Derived
  ------------------------------------------------------- */

  const descriptionLength =
    formData.whatItDoes.length;

  const completion = useMemo(() => {
    const checks = [
      Boolean(formData.name.trim()),
      Boolean(formData.officialLink.trim()),
      formData.category.length > 0,
      Boolean(formData.whatItDoes.trim()),
      formData.howToUse.some((item) => item.trim()),
      formData.techRelevance.some((item) =>
        item.trim()
      ),
      Boolean(formData.image.trim()),
    ];

    return Math.round(
      (checks.filter(Boolean).length /
        checks.length) *
        100
    );
  }, [formData]);

  /* -------------------------------------------------------
     UI helpers
  ------------------------------------------------------- */

  const Label = ({
    children,
    icon: Icon,
    required = false,
  }) => (
    <label className="mb-3 ml-0 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
      {Icon && (
        <Icon
          size={13}
          strokeWidth={2}
          className="text-[var(--color-accent)]"
        />
      )}

      {children}

      {required && (
        <span className="text-red-500">*</span>
      )}
    </label>
  );

  const ErrorText = ({ children }) => {
    if (!children) return null;

    return (
      <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-500">
        <AlertCircle size={13} />
        {children}
      </div>
    );
  };

  const inputClass = (field) => `
    w-full
    rounded-[var(--radius-md)]
    border
    px-4 py-3.5
    bg-[var(--color-surface)]
    text-[var(--color-ink)]
    placeholder:text-[var(--color-ink-muted)]
    outline-none
    font-medium
    transition-all
    duration-200
    ${
      errors[field]
        ? "border-red-300 focus:border-red-500"
        : "border-[var(--color-border)] focus:border-[var(--color-accent)]"
    }
  `;

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">

      {/* -------------------------------------------------
          Header / Navigation
      ------------------------------------------------- */}

      <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-sm font-semibold text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />

            <span>Back</span>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            <ShieldCheck
              size={15}
              className="text-[var(--color-accent)]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              Community submission
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[var(--color-border)] sm:w-28">
              <motion.div
                animate={{
                  width: `${completion}%`,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="h-full rounded-full bg-[var(--color-accent)]"
              />
            </div>

            <span className="min-w-[30px] text-right text-xs font-bold text-[var(--color-ink-soft)]">
              {completion}%
            </span>
          </div>
        </div>
      </nav>

      {/* -------------------------------------------------
          Main
      ------------------------------------------------- */}

      <main className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* Hero */}

        <header className="border-b border-[var(--color-border)] py-16 sm:py-20">

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]"
          >
            <Sparkles size={14} />
            Add to directory
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.05,
            }}
            className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl"
          >
            List your{" "}
            <span className="text-[var(--color-accent)]">
              project.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-ink-soft)] sm:text-lg"
          >
            Share a useful product with the community.
            Provide clear details so people can quickly
            understand what it does and where it fits.
          </motion.p>

        </header>

        <form
          onSubmit={handleSubmit}
          noValidate
        >

          {/* =================================================
              01 Identity
          ================================================= */}

          <motion.section
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="border-b border-[var(--color-border)] py-12 sm:py-16"
          >

            <div className="grid gap-10 lg:grid-cols-[220px_1fr]">

              {/* Section intro */}

              <div>
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  01
                </div>

                <h2 className="text-2xl font-semibold tracking-tight">
                  Identity
                </h2>

                <p className="mt-2 max-w-[220px] text-sm leading-6 text-[var(--color-ink-muted)]">
                  Basic information about your product.
                </p>
              </div>

              {/* Content */}

              <div>

                <div className="grid gap-7 md:grid-cols-2">

                  {/* Name */}

                  <div>
                    <Label
                      icon={Info}
                      required
                    >
                      Tool name
                    </Label>

                    <input
                      required
                      value={formData.name}
                      onChange={(e) =>
                        updateField(
                          "name",
                          e.target.value
                        )
                      }
                      type="text"
                      placeholder="e.g. Linear"
                      className={inputClass("name")}
                    />

                    <ErrorText>
                      {errors.name}
                    </ErrorText>
                  </div>

                  {/* Rating */}

                  <div>
                    <Label
                      icon={Star}
                      required
                    >
                      Rating
                    </Label>

                    <div className="relative">
                      <input
                        step="0.1"
                        max="5"
                        min="1"
                        required
                        value={formData.rating}
                        onChange={(e) =>
                          updateField(
                            "rating",
                            e.target.value
                          )
                        }
                        type="number"
                        className={`${inputClass(
                          "rating"
                        )} pr-14`}
                      />

                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-[var(--color-ink-muted)]">
                        / 5.0
                      </span>
                    </div>

                    <ErrorText>
                      {errors.rating}
                    </ErrorText>
                  </div>

                  {/* Official URL */}

                  <div className="md:col-span-2">
                    <Label
                      icon={Link2}
                      required
                    >
                      Official website
                    </Label>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input
                        required
                        value={formData.officialLink}
                        onChange={(e) =>
                          updateField(
                            "officialLink",
                            e.target.value
                          )
                        }
                        type="url"
                        placeholder="https://example.com"
                        className={inputClass(
                          "officialLink"
                        )}
                      />

                      <button
                        type="button"
                        onClick={
                          suggestFromWebsite
                        }
                        disabled={
                          isAnalyzing ||
                          !formData.officialLink
                        }
                        className="flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {isAnalyzing ? (
                          <Loader2
                            size={15}
                            className="animate-spin"
                          />
                        ) : (
                          <Sparkles size={15} />
                        )}

                        {isAnalyzing
                          ? "Checking..."
                          : "Suggest"}
                      </button>
                    </div>

                    <ErrorText>
                      {errors.officialLink}
                    </ErrorText>
                  </div>

                </div>

                {/* Pricing */}

                <div className="mt-9">

                  <Label icon={DollarSign}>
                    Pricing model
                  </Label>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Free",
                      "Freemium",
                      "Paid",
                    ].map((price) => {
                      const active =
                        formData.pricing === price;

                      return (
                        <button
                          key={price}
                          type="button"
                          onClick={() =>
                            updateField(
                              "pricing",
                              price
                            )
                          }
                          className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                            active
                              ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                              : "border-[var(--color-border)] bg-transparent text-[var(--color-ink-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                          }`}
                        >
                          {price}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Categories */}

                <div className="mt-10">

                  <div className="mb-3 flex items-center justify-between">
                    <Label
                      icon={Tag}
                      required
                    >
                      Categories
                    </Label>

                    <span className="text-xs font-semibold text-[var(--color-ink-muted)]">
                      {formData.category.length} selected
                    </span>
                  </div>

                  <div className="max-h-[300px] overflow-y-auto border-y border-[var(--color-border)] py-4">
                    <div className="flex flex-wrap gap-2">

                      {aiCategoriesList.map(
                        (category) => {
                          const selected =
                            formData.category.includes(
                              category
                            );

                          return (
                            <button
                              key={category}
                              type="button"
                              onClick={() =>
                                toggleCategory(
                                  category
                                )
                              }
                              className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all ${
                                selected
                                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                              }`}
                            >
                              {selected && (
                                <Check size={12} />
                              )}

                              {category}
                            </button>
                          );
                        }
                      )}

                    </div>
                  </div>

                  <ErrorText>
                    {errors.category}
                  </ErrorText>
                </div>

                {/* Description */}

                <div className="mt-10">

                  <div className="mb-3 flex items-center justify-between">
                    <Label
                      icon={Globe}
                      required
                    >
                      What does it do?
                    </Label>

                    <span
                      className={`text-xs font-semibold ${
                        descriptionLength < 30
                          ? "text-[var(--color-ink-muted)]"
                          : "text-[var(--color-accent)]"
                      }`}
                    >
                      {descriptionLength} chars
                    </span>
                  </div>

                  <textarea
                    required
                    value={formData.whatItDoes}
                    onChange={(e) =>
                      updateField(
                        "whatItDoes",
                        e.target.value
                      )
                    }
                    placeholder="Explain the main problem this product solves and who it is useful for..."
                    rows={6}
                    className={`${inputClass(
                      "whatItDoes"
                    )} resize-none`}
                  />

                  <ErrorText>
                    {errors.whatItDoes}
                  </ErrorText>
                </div>

              </div>
            </div>
          </motion.section>

          {/* =================================================
              02 How it works
          ================================================= */}

          <motion.section
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="border-b border-[var(--color-border)] py-12 sm:py-16"
          >

            <div className="grid gap-10 lg:grid-cols-[220px_1fr]">

              <div>
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  02
                </div>

                <h2 className="text-2xl font-semibold tracking-tight">
                  How it works
                </h2>

                <p className="mt-2 max-w-[220px] text-sm leading-6 text-[var(--color-ink-muted)]">
                  Give visitors enough context to get started.
                </p>
              </div>

              <div>

                {/* Usage steps */}

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <Label icon={BookOpen}>
                      Usage steps
                    </Label>

                    <button
                      type="button"
                      onClick={() =>
                        handleAddField(
                          "howToUse"
                        )
                      }
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                    >
                      <Plus size={14} />
                      Add step
                    </button>
                  </div>

                  <div className="space-y-3">

                    {formData.howToUse.map(
                      (step, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-bold text-[var(--color-accent)]">
                            {String(
                              index + 1
                            ).padStart(2, "0")}
                          </span>

                          <input
                            value={step}
                            onChange={(e) =>
                              handleInputChange(
                                "howToUse",
                                index,
                                e.target.value
                              )
                            }
                            placeholder="e.g. Create an account and connect your workspace..."
                            className={inputClass(
                              "howToUse"
                            )}
                          />

                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveField(
                                "howToUse",
                                index
                              )
                            }
                            className="shrink-0 rounded-full p-2 text-[var(--color-ink-muted)] transition-colors hover:bg-red-50 hover:text-red-500"
                            aria-label="Remove step"
                          >
                            <X size={17} />
                          </button>
                        </div>
                      )
                    )}

                  </div>

                  <ErrorText>
                    {errors.howToUse}
                  </ErrorText>
                </div>

                {/* Technology */}

                <div className="mt-12">

                  <div className="mb-4 flex items-center justify-between">
                    <Label icon={Cpu}>
                      Technology / stack
                    </Label>

                    <button
                      type="button"
                      onClick={() =>
                        handleAddField(
                          "techRelevance"
                        )
                      }
                      className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
                    >
                      <Plus size={14} />
                      Add tech
                    </button>
                  </div>

                  <div className="space-y-3">

                    {formData.techRelevance.map(
                      (tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent)]">
                            #
                          </span>

                          <input
                            value={tech}
                            onChange={(e) =>
                              handleInputChange(
                                "techRelevance",
                                index,
                                e.target.value
                              )
                            }
                            placeholder="e.g. React, Node.js, Python..."
                            className={inputClass(
                              "techRelevance"
                            )}
                          />

                          <button
                            type="button"
                            onClick={() =>
                              handleRemoveField(
                                "techRelevance",
                                index
                              )
                            }
                            className="shrink-0 rounded-full p-2 text-[var(--color-ink-muted)] transition-colors hover:bg-red-50 hover:text-red-500"
                            aria-label="Remove technology"
                          >
                            <X size={17} />
                          </button>
                        </div>
                      )
                    )}

                  </div>

                  <ErrorText>
                    {errors.techRelevance}
                  </ErrorText>
                </div>

              </div>
            </div>
          </motion.section>

          {/* =================================================
              03 Resources
          ================================================= */}

          <motion.section
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="border-b border-[var(--color-border)] py-12 sm:py-16"
          >

            <div className="grid gap-10 lg:grid-cols-[220px_1fr]">

              <div>
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                  03
                </div>

                <h2 className="text-2xl font-semibold tracking-tight">
                  Resources
                </h2>

                <p className="mt-2 max-w-[220px] text-sm leading-6 text-[var(--color-ink-muted)]">
                  Add useful links and visual assets.
                </p>
              </div>

              <div>

                <div className="grid gap-8 md:grid-cols-2">

                  {/* Image */}

                  <div>
                    <Label icon={ImageIcon}>
                      Cover image
                    </Label>

                    <input
                      value={formData.image}
                      onChange={(e) => {
                        setImageError(false);

                        updateField(
                          "image",
                          e.target.value
                        );
                      }}
                      placeholder="https://..."
                      type="url"
                      className={inputClass(
                        "image"
                      )}
                    />

                    <ErrorText>
                      {errors.image}
                    </ErrorText>

                    {formData.image &&
                      !imageError && (
                        <div className="mt-4 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                          <img
                            src={formData.image}
                            alt="Tool preview"
                            onError={() =>
                              setImageError(true)
                            }
                            className="h-44 w-full object-cover"
                          />
                        </div>
                      )}
                  </div>

                  {/* Documentation */}

                  <div>
                    <Label icon={FileText}>
                      Documentation
                    </Label>

                    <input
                      value={formData.docLink}
                      onChange={(e) =>
                        updateField(
                          "docLink",
                          e.target.value
                        )
                      }
                      placeholder="https://docs.example.com"
                      type="url"
                      className={inputClass(
                        "docLink"
                      )}
                    />

                    <ErrorText>
                      {errors.docLink}
                    </ErrorText>
                  </div>

                  {/* Tutorial */}

                  <div>
                    <Label icon={Youtube}>
                      Video tutorial
                    </Label>

                    <input
                      value={
                        formData.tutorialLink
                      }
                      onChange={(e) =>
                        updateField(
                          "tutorialLink",
                          e.target.value
                        )
                      }
                      placeholder="https://youtube.com/..."
                      type="url"
                      className={inputClass(
                        "tutorialLink"
                      )}
                    />

                    <ErrorText>
                      {errors.tutorialLink}
                    </ErrorText>
                  </div>

                  {/* Github */}

                  <div>
                    <Label icon={Github}>
                      GitHub repository
                    </Label>

                    <input
                      value={
                        formData.githubLink
                      }
                      onChange={(e) =>
                        updateField(
                          "githubLink",
                          e.target.value
                        )
                      }
                      placeholder="https://github.com/..."
                      type="url"
                      className={inputClass(
                        "githubLink"
                      )}
                    />

                    <ErrorText>
                      {errors.githubLink}
                    </ErrorText>
                  </div>

                </div>

              </div>
            </div>
          </motion.section>

          {/* =================================================
              Submit
          ================================================= */}

          <section className="py-14 sm:py-20">

            <div className="mx-auto max-w-2xl text-center">

              <div className="mb-6 flex items-center justify-center gap-2 text-sm text-[var(--color-ink-muted)]">
                <ShieldCheck
                  size={16}
                  className="text-[var(--color-accent)]"
                />

                Your submission will be reviewed before
                appearing publicly.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-[var(--radius-md)] bg-[var(--color-accent)] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[300px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Submit project
                  </>
                )}
              </button>

              <p className="mt-5 text-xs leading-5 text-[var(--color-ink-muted)]">
                Please verify your links and product
                information before submitting.
              </p>

            </div>
          </section>

        </form>
      </main>

      {/* =================================================
          Submission Loading
      ================================================= */}

      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-[var(--color-ink)]/60 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                scale: 0.96,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              className="w-full max-w-sm rounded-[var(--radius-lg)] border border-white/10 bg-[var(--color-surface)] p-8 text-center shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <Loader2
                  size={28}
                  className="animate-spin"
                />
              </div>

              <h3 className="text-xl font-semibold text-[var(--color-ink)]">
                Sending submission
              </h3>

              <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">
                We're securely sending your project
                information.
              </p>

              <div className="mt-6 h-1 overflow-hidden rounded-full bg-[var(--color-border)]">
                <motion.div
                  initial={{
                    x: "-100%",
                  }}
                  animate={{
                    x: "100%",
                  }}
                  transition={{
                    duration: 1.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-full w-1/2 rounded-full bg-[var(--color-accent)]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          Success Modal
      ================================================= */}

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-ink)]/60 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                scale: 0.95,
                opacity: 0,
                y: 15,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              className="w-full max-w-md rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center shadow-xl sm:p-10"
            >

              <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <CheckCircle size={40} />
              </div>

              <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                Submission received
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)]">
                You're all set.
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--color-ink-soft)]">
                Your project has been submitted successfully.
                Once reviewed, it can become part of the
                directory.
              </p>

              <div className="mt-8 grid gap-3">

                <button
                  type="button"
                  onClick={() =>
                    navigate("/")
                  }
                  className="flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-accent)] py-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[var(--color-accent-hover)]"
                >
                  Continue
                  <ExternalLink size={15} />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowSuccess(false);
                    setFormData(initialForm);
                    setErrors({});
                    setImageError(false);

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] py-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
                >
                  Submit another
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddToles;