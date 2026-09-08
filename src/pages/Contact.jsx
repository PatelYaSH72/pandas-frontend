"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MessageSquare,
  Bug,
  Send,
  ArrowLeft,
  CheckCircle2,
  Mail,
  Sparkles,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

const ContactPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // =========================================================
  // FORM STATE
  // =========================================================

  const [formData, setFormData] = useState({
    type: "feedback",
    name: "",
    email: "",
    severity: "low",
    subject: "",
    message: "",
  });

  // =========================================================
  // INPUT HANDLER
  // =========================================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // TYPE SWITCH
  // =========================================================

  const handleTypeChange = (newType) => {
    setFormData((prev) => ({
      ...prev,
      type: newType,
    }));
  };

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("token")) {
      return navigate("/login");
    }

    const payload = {
      name: formData.name,
      type: formData.type,
      email: formData.email,
      severity: formData.type === "bug" ? formData.severity : "N/A",
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/send-email",
        payload,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      const data = await res.data;

      if (data.success) {
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert("Email failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  // =========================================================
  // STYLES
  // =========================================================

  const inputClasses = `
    w-full
    rounded-[12px]
    border border-[#E3E8E3]
    bg-white
    px-4 py-3.5
    text-sm
    font-medium
    text-[#141F19]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#8A988E]
    hover:border-[#C9D4CC]
    focus:border-[#3F7A5B]
    focus:ring-4
    focus:ring-[#E7F1EA]
  `;

  const labelClasses = `
    mb-2
    ml-1
    block
    text-[11px]
    font-bold
    uppercase
    tracking-[0.14em]
    text-[#4B5C53]
  `;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAFAF8] pt-24 pb-16 sm:pt-28 sm:pb-24">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[420px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#E7F1EA]/70
            blur-[100px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.35]
            [background-image:linear-gradient(#E3E8E3_1px,transparent_1px),linear-gradient(90deg,#E3E8E3_1px,transparent_1px)]
            [background-size:64px_64px]
            [mask-image:linear-gradient(to_bottom,black,transparent_70%)]
          "
        />
      </div>

      {/* =====================================================
          PAGE CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TOP NAV / BACK
        ====================================================== */}

        <motion.button
          type="button"
          onClick={() => navigate(-1)}
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.98 }}
          className="
            group
            mb-10
            inline-flex
            items-center
            gap-2
            rounded-[12px]
            border border-[#E3E8E3]
            bg-white
            px-3.5 py-2.5
            text-sm
            font-semibold
            text-[#4B5C53]
            shadow-[0_1px_2px_rgba(20,31,25,0.04)]
            transition-all
            duration-200
            hover:border-[#C9D4CC]
            hover:bg-[#FDFDFC]
            hover:text-[#141F19]
            sm:mb-14
          "
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:-translate-x-0.5"
          />

          <span>Go back</span>
        </motion.button>

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          {/* Eyebrow */}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-[#D9E4DC]
              bg-[#E7F1EA]
              px-3 py-1.5
              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#3F7A5B]
            "
          >
            <Sparkles size={13} strokeWidth={1.8} />

            <span>We're listening</span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="
              text-[42px]
              font-semibold
              leading-[1.02]
              tracking-[-0.045em]
              text-[#141F19]
              sm:text-[54px]
              lg:text-[64px]
            "
          >
            Let's make Pandas
            <span className="block text-[#3F7A5B]">
              better together.
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-[#4B5C53]
              sm:text-base
              sm:leading-7
            "
          >
            Have feedback, found something broken, or simply want
            to suggest an improvement? Send us a message and we'll
            take a look.
          </motion.p>
        </div>

        {/* =====================================================
            TYPE SELECTOR
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-9 max-w-xl"
        >
          <div
            className="
              rounded-[16px]
              border border-[#E3E8E3]
              bg-white
              p-1.5
              shadow-[0_4px_20px_rgba(20,31,25,0.04)]
            "
          >
            <div className="grid grid-cols-2 gap-1">

              {/* FEEDBACK */}

              <button
                type="button"
                onClick={() => handleTypeChange("feedback")}
                className={`
                  relative
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[12px]
                  px-3
                  py-3
                  text-xs
                  font-bold
                  transition-all
                  duration-200
                  sm:text-sm
                  ${
                    formData.type === "feedback"
                      ? "bg-[#E7F1EA] text-[#3F7A5B] shadow-sm"
                      : "text-[#8A988E] hover:bg-[#FAFAF8] hover:text-[#4B5C53]"
                  }
                `}
              >
                <MessageSquare size={16} strokeWidth={1.8} />

                <span>Share feedback</span>
              </button>

              {/* BUG */}

              <button
                type="button"
                onClick={() => handleTypeChange("bug")}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[12px]
                  px-3
                  py-3
                  text-xs
                  font-bold
                  transition-all
                  duration-200
                  sm:text-sm
                  ${
                    formData.type === "bug"
                      ? "bg-[#F1F5F2] text-[#3F7A5B] shadow-sm"
                      : "text-[#8A988E] hover:bg-[#FAFAF8] hover:text-[#4B5C53]"
                  }
                `}
              >
                <Bug size={16} strokeWidth={1.8} />

                <span>Report a bug</span>
              </button>

            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FORM CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          layout
          className="
            mx-auto
            mt-5
            max-w-3xl
            overflow-hidden
            rounded-[20px]
            border border-[#E3E8E3]
            bg-white
            shadow-[0_12px_40px_rgba(20,31,25,0.06)]
          "
        >

          {/* =================================================
              CARD HEADER
          ================================================== */}

          <div
            className="
              border-b
              border-[#E3E8E3]
              bg-[#FDFDFC]
              px-6
              py-5
              sm:px-8
            "
          >
            <div className="flex items-start gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-[12px]
                  bg-[#E7F1EA]
                  text-[#3F7A5B]
                "
              >
                {formData.type === "bug" ? (
                  <Bug size={18} strokeWidth={1.8} />
                ) : (
                  <MessageSquare size={18} strokeWidth={1.8} />
                )}
              </div>

              <div>

                <p className="text-sm font-semibold text-[#141F19]">
                  {formData.type === "bug"
                    ? "Report an issue"
                    : "Send us your feedback"}
                </p>

                <p className="mt-0.5 text-xs leading-5 text-[#8A988E]">
                  {formData.type === "bug"
                    ? "Help us identify and fix something that isn't working."
                    : "Tell us what you like, what could improve, or what you'd like to see."}
                </p>

              </div>

            </div>
          </div>

          {/* =================================================
              FORM / SUCCESS
          ================================================== */}

          <div className="p-6 sm:p-8 lg:p-10">

            <AnimatePresence mode="wait">

              {!submitted ? (

                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* =================================================
                      NAME + EMAIL
                  ================================================== */}

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* NAME */}

                    <div>
                      <label
                        htmlFor="name"
                        className={labelClasses}
                      >
                        Full name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={inputClasses}
                        required
                      />
                    </div>

                    {/* EMAIL */}

                    <div>
                      <label
                        htmlFor="email"
                        className={labelClasses}
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={inputClasses}
                        required
                      />
                    </div>

                  </div>

                  {/* =================================================
                      BUG SEVERITY
                  ================================================== */}

                  <AnimatePresence initial={false}>

                    {formData.type === "bug" && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                          marginTop: -10,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          marginTop: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          marginTop: -10,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-1">

                          <label
                            htmlFor="severity"
                            className={labelClasses}
                          >
                            Severity level
                          </label>

                          <div className="relative">

                            <AlertCircle
                              size={17}
                              className="
                                pointer-events-none
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-[#8A988E]
                              "
                            />

                            <select
                              id="severity"
                              name="severity"
                              value={formData.severity}
                              onChange={handleInputChange}
                              className={`
                                ${inputClasses}
                                appearance-none
                                pl-11
                                pr-10
                              `}
                            >
                              <option value="low">
                                Low — Visual or minor issue
                              </option>

                              <option value="medium">
                                Medium — Feature not working
                              </option>

                              <option value="high">
                                High — App crashing or blocked
                              </option>
                            </select>

                            <div
                              className="
                                pointer-events-none
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                text-[#8A988E]
                              "
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                  {/* =================================================
                      SUBJECT
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="subject"
                      className={labelClasses}
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={
                        formData.type === "bug"
                          ? "What went wrong?"
                          : "What would you like to tell us?"
                      }
                      className={inputClasses}
                      required
                    />
                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================== */}

                  <div>
                    <label
                      htmlFor="message"
                      className={labelClasses}
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={
                        formData.type === "bug"
                          ? "Tell us what happened, what you expected, and how we can reproduce it..."
                          : "Share your thoughts, ideas, or suggestions..."
                      }
                      className={`
                        ${inputClasses}
                        min-h-[150px]
                        resize-y
                        leading-6
                      `}
                      required
                    />
                  </div>

                  {/* =================================================
                      BOTTOM ACTION
                  ================================================== */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      border-t
                      border-[#E3E8E3]
                      pt-6
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >

                    {/* Security note */}

                    <div className="flex items-center gap-2">

                      <ShieldCheck
                        size={16}
                        className="shrink-0 text-[#3F7A5B]"
                      />

                      <p className="text-xs leading-5 text-[#8A988E]">
                        Your message is sent securely to our team.
                      </p>

                    </div>

                    {/* Submit */}

                    <button
                      type="submit"
                      className="
                        group
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2.5
                        rounded-[12px]
                        bg-[#3F7A5B]
                        px-6
                        py-3.5
                        text-sm
                        font-bold
                        text-white
                        shadow-[0_4px_12px_rgba(63,122,91,0.18)]
                        transition-all
                        duration-200
                        hover:bg-[#336249]
                        hover:shadow-[0_6px_18px_rgba(63,122,91,0.22)]
                        active:scale-[0.98]
                        sm:w-auto
                      "
                    >
                      <span>
                        Send{" "}
                        {formData.type === "bug"
                          ? "report"
                          : "feedback"}
                      </span>

                      <Send
                        size={16}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-x-0.5
                        "
                      />
                    </button>

                  </div>

                </motion.form>

              ) : (

                /* =================================================
                   SUCCESS STATE
                ================================================== */

                <motion.div
                  key="success"
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  className="py-12 text-center sm:py-16"
                >

                  {/* Icon */}

                  <div
                    className="
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E7F1EA]
                      text-[#3F7A5B]
                      shadow-[0_0_0_8px_rgba(231,241,234,0.55)]
                    "
                  >
                    <CheckCircle2
                      size={32}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Heading */}

                  <h2
                    className="
                      mt-7
                      text-2xl
                      font-semibold
                      tracking-[-0.025em]
                      text-[#141F19]
                      sm:text-3xl
                    "
                  >
                    Thanks for reaching out.
                  </h2>

                  {/* Description */}

                  <p
                    className="
                      mx-auto
                      mt-3
                      max-w-md
                      text-sm
                      leading-6
                      text-[#8A988E]
                    "
                  >
                    Your{" "}
                    {formData.type === "bug"
                      ? "bug report"
                      : "feedback"}{" "}
                    has been sent successfully. We appreciate you
                    helping us improve Pandas.
                  </p>

                  {/* Actions */}

                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-[12px]
                        border border-[#E3E8E3]
                        bg-white
                        px-5 py-2.5
                        text-sm
                        font-semibold
                        text-[#4B5C53]
                        transition-all
                        hover:border-[#C9D4CC]
                        hover:bg-[#FAFAF8]
                        hover:text-[#141F19]
                      "
                    >
                      Send another
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate("/")}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-[12px]
                        bg-[#3F7A5B]
                        px-5 py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        hover:bg-[#336249]
                      "
                    >
                      Back to Pandas
                    </button>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM INFO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="
            mx-auto
            mt-7
            flex
            max-w-3xl
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:flex-row
            sm:gap-6
          "
        >

          <div className="flex items-center gap-2 text-xs text-[#8A988E]">
            <Mail
              size={14}
              className="text-[#3F7A5B]"
            />
            <span>We read every message</span>
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-[#C9D4CC] sm:block" />

          <div className="flex items-center gap-2 text-xs text-[#8A988E]">
            <ShieldCheck
              size={14}
              className="text-[#3F7A5B]"
            />
            <span>Your information stays private</span>
          </div>

        </motion.div>

      </div>
    </main>
  );
};

export default ContactPage;