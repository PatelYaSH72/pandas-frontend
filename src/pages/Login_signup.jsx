
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  ArrowLeft,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { UserContext } from "../Context/UserContext";
import axios from "axios";

const Login_signup = () => {
  const {
    setIsLoggedIn,
    backendUrl,
    token,
    setToken,
    setUserData,
  } = useContext(UserContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { slug } = useParams();
  const navigate = useNavigate();

  const isLogin = slug === "login";

  /* =========================================================
     INPUT HANDLERS
  ========================================================== */

  const handleLoginChange = (e) => {
    setErrorMessage("");

    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignupChange = (e) => {
    setErrorMessage("");

    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* =========================================================
     SUBMIT
  ========================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      let response;

      if (isLogin) {
        response = await axios.post(
          `${backendUrl}/api/user/userLogin`,
          loginData,
          {
            headers: {
              token: token,
            },
          }
        );
      } else {
        response = await axios.post(
          `${backendUrl}/api/user/userSignUp`,
          signupData
        );
      }

      const { data } = response;

      if (data.success) {
        setToken(data.token);
        setUserData(data.user);
        setIsLoggedIn(true);

        navigate(-1);
        return;
      }

      setErrorMessage(
        data.message ||
          (isLogin
            ? "Unable to sign in. Please check your details."
            : "Unable to create your account. Please try again.")
      );
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  /* =========================================================
     INPUT CLASSES
  ========================================================== */

  const inputClass =
    "w-full rounded-xl border border-[#E3E8E3] bg-white py-3.5 pl-11 pr-4 text-sm text-[#141F19] outline-none placeholder:text-[#8A988E] transition-all duration-200 hover:border-[#C9D4CC] focus:border-[#3F7A5B] focus:ring-4 focus:ring-[#E7F1EA] disabled:cursor-not-allowed disabled:bg-[#FAFAF8] disabled:text-[#8A988E]";

  const labelClass =
    "mb-2 block text-xs font-medium text-[#4B5C53]";

  return (
    <main className="min-h-screen bg-[#FAFAF8] px-6 pb-16 pt-28 sm:pt-32">
      <div className="mx-auto w-full max-w-md">

        {/* =====================================================
            BACK
        ====================================================== */}
        <motion.button
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          type="button"
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 rounded-lg text-sm font-medium text-[#4B5C53] transition-colors duration-150 hover:text-[#3F7A5B] focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2"
        >
          <ArrowLeft size={16} />
          Back to home
        </motion.button>

        {/* =====================================================
            AUTH CONTENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Brand / Context */}
          <div className="mb-8">
            <div className="mb-5 flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-[#E3E8E3] bg-white">
              <img
                src="/logo-img.png"
                alt="Pandas"
                className="h-7 w-auto object-contain"
              />
            </div>

            <h1 className="text-3xl font-semibold tracking-[-0.035em] text-[#141F19] sm:text-4xl">
              {isLogin
                ? "Welcome back."
                : "Create your account."}
            </h1>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#4B5C53]">
              {isLogin
                ? "Sign in to save tools, manage your account, and continue exploring."
                : "Create an account to save useful tools and keep your discoveries in one place."}
            </p>
          </div>

          {/* =====================================================
              FORM PANEL
          ====================================================== */}
          <div className="rounded-xl border border-[#E3E8E3] bg-white p-6 shadow-[0_1px_2px_rgba(20,31,25,0.04)] sm:p-8">

            {/* Error */}
            <AnimatePresence mode="wait">
              {errorMessage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    marginBottom: 20,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                  }}
                  role="alert"
                  className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700"
                >
                  <AlertCircle
                    size={17}
                    className="mt-0.5 shrink-0"
                  />

                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit}
              noValidate={false}
              className="space-y-5"
            >
              {/* =================================================
                  NAME
              ================================================== */}
              <AnimatePresence initial={false}>
                {!isLogin && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="overflow-hidden"
                  >
                    <label
                      htmlFor="signup-name"
                      className={labelClass}
                    >
                      Full name
                    </label>

                    <div className="relative">
                      <User
                        size={17}
                        strokeWidth={1.8}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A988E]"
                        aria-hidden="true"
                      />

                      <input
                        id="signup-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={signupData.name}
                        onChange={handleSignupChange}
                        placeholder="Your name"
                        disabled={isLoading}
                        className={inputClass}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  EMAIL
              ================================================== */}
              <div>
                <label
                  htmlFor="auth-email"
                  className={labelClass}
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    strokeWidth={1.8}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A988E]"
                    aria-hidden="true"
                  />

                  <input
                    id="auth-email"
                    name="email"
                    type="email"
                    required
                    autoComplete={
                      isLogin ? "email" : "email"
                    }
                    value={
                      isLogin
                        ? loginData.email
                        : signupData.email
                    }
                    onChange={
                      isLogin
                        ? handleLoginChange
                        : handleSignupChange
                    }
                    placeholder="you@example.com"
                    disabled={isLoading}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* =================================================
                  PASSWORD
              ================================================== */}
              <div>
                <label
                  htmlFor="auth-password"
                  className={labelClass}
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={17}
                    strokeWidth={1.8}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A988E]"
                    aria-hidden="true"
                  />

                  <input
                    id="auth-password"
                    name="password"
                    type="password"
                    required
                    autoComplete={
                      isLogin
                        ? "current-password"
                        : "new-password"
                    }
                    value={
                      isLogin
                        ? loginData.password
                        : signupData.password
                    }
                    onChange={
                      isLogin
                        ? handleLoginChange
                        : handleSignupChange
                    }
                    placeholder="Enter your password"
                    disabled={isLoading}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* =================================================
                  SUBMIT
              ================================================== */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#3F7A5B] px-5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#336249] focus:outline-none focus:ring-4 focus:ring-[#E7F1EA] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    {isLogin
                      ? "Signing in..."
                      : "Creating account..."}
                  </>
                ) : (
                  <>
                    {isLogin
                      ? "Sign in"
                      : "Create account"}

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </form>

            {/* =================================================
                MODE SWITCH
            ================================================== */}
            <div className="mt-6 border-t border-[#E3E8E3] pt-6 text-center">
              <p className="text-sm text-[#8A988E]">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <button
                  type="button"
                  disabled={isLoading}
                  onClick={() =>
                    navigate(
                      `/${isLogin ? "sign-up" : "login"}`
                    )
                  }
                  className="ml-1.5 font-medium text-[#3F7A5B] transition-colors hover:text-[#336249] hover:underline focus:outline-none focus:ring-2 focus:ring-[#3F7A5B] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>

          {/* =====================================================
              FOOTNOTE
          ====================================================== */}
          <p className="mt-6 text-center text-xs leading-5 text-[#8A988E]">
            Your account lets you save and manage the tools
            you find useful.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Login_signup;
