"use client";
import React, { useContext, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Sparkles } from 'lucide-react';
import { UserContext } from '../Context/UserContext';

const Login_signup = () => {

  const {isLoggedIn, setIsLoggedIn,  loginData, setLoginData,
    signupData, setSignupData} = useContext(UserContext)

  const { slug } = useParams(); // 'login' or 'signup'
  const navigate = useNavigate();
  const isLogin = slug === 'login';

  // 1. Separate States for Login and Signup
  

  // 2. Input Handlers
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  // 3. Form Submit Logic (Backend Ready)
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true)
    navigate('/')
    if (isLogin) {
      console.log("Login Dispatching:", loginData);
      // Yahan aapka axios.post('/api/login', loginData) aayega
    } else {
      console.log("Signup Dispatching:", signupData);
      // Yahan aapka axios.post('/api/signup', signupData) aayega
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center p-6 transition-colors duration-500">
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

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
              {isLogin ? "Enter your credentials to access your tools." : "Join the pandas ecosystem today."}
            </p>
          </header>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1"
                >
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
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
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
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
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
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
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100 dark:border-slate-800"></div></div>
            <span className="relative bg-white dark:bg-slate-900 px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Or continue with</span>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-bold text-sm">
              <Chrome size={18} className="text-red-500" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-bold text-sm">
              <Github size={18} /> Github
            </button>
          </div>

          {/* Toggle Link */}
          <p className="text-center mt-8 text-sm font-medium text-slate-500 dark:text-slate-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"} 
            <button 
              onClick={() => navigate(`/${isLogin ? 'sign-up' : 'login'}`)}
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