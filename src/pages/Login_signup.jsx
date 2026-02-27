"use client";
import React, { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Github,
  Chrome,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { UserContext } from "../Context/UserContext";
import axios from "axios";

const Login_signup = () => {
  const { isLoggedIn, setIsLoggedIn, backendUrl, token, setToken, setUserData } =
    useContext(UserContext);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { slug } = useParams(); // 'login' or 'signup'
  const navigate = useNavigate();
  const isLogin = slug === "login";

  // 2. Input Handlers
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  // 3. Form Submit Logic (Backend Ready)
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let response;

    if (isLogin) {
      // LOGIN
      response = await axios.post(
        backendUrl + "/api/user/userLogin",
        loginData,{headers:{token:token}}
      );
    } else {
      // SIGNUP
      response = await axios.post(
        backendUrl + "/api/user/userSignUp",
        signupData
      );
    }

    const { data } = response;

    if (data.success) {
      setToken(data.token);
      setUserData(data.user)
      setIsLoggedIn(true);
      console.log(data)
      navigate(-1);
    }

  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-6 transition-colors duration-500 pt-30">
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.button
  initial={{ opacity: 0, x: -10 }}
  animate={{ opacity: 1, x: 0 }}
  onClick={() => navigate('/')}
  className="
    fixed top-23 left-6 
    flex items-center gap-2 
    px-5 py-2.5 
    text-xs font-black uppercase tracking-widest 
    text-slate-500 dark:text-slate-400 
    hover:text-indigo-600 dark:hover:text-indigo-400 
    transition-all 
    bg-white dark:bg-slate-900 
    rounded-2xl 
    border border-slate-200 dark:border-slate-800 
    shadow-lg hover:shadow-xl 
    z-[999]
  "
>
  <ArrowLeft
    size={16}
    className="group-hover:-translate-x-1 transition-transform"
  />
  Back
</motion.button>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl p-8 md:p-10 overflow-hidden">
          {/* Header */}
          <header className="text-center mb-10">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-indigo-500/20">
              <Sparkles size={24} />
            </div>
            <h1 className="text-3xl font-black tracking-tight mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              {isLogin
                ? "Enter your credentials to access your tools."
                : "Join the pandas ecosystem today."}
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1"
                >
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      name="name"
                      type="text"
                      required
                      value={signupData.name}
                      onChange={handleSignupChange}
                      placeholder="John Doe"
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500/50 rounded-2xl p-4 pl-12 outline-none transition-all font-medium"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  name="email"
                  type="email"
                  required
                  value={isLogin ? loginData.email : signupData.email}
                  onChange={isLogin ? handleLoginChange : handleSignupChange}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500/50 rounded-2xl p-4 pl-12 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  name="password"
                  type="password"
                  required
                  value={isLogin ? loginData.password : signupData.password}
                  onChange={isLogin ? handleLoginChange : handleSignupChange}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-transparent focus:border-indigo-500/50 rounded-2xl p-4 pl-12 outline-none transition-all font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-500/20 active:scale-95 group"
            >
              {isLogin ? "Sign In" : "Get Started"}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
            </div>
            <span className="relative bg-white dark:bg-slate-900 px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Or continue with
            </span>
          </div>

          {/* Social Logins */}
          

          {/* Toggle Link */}
          <p className="text-center mt-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => navigate(`/${isLogin ? "sign-up" : "login"}`)}
              className="ml-2 text-indigo-600 font-bold hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login_signup;
