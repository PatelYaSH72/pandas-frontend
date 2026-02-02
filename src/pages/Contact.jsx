"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Bug, Send, ArrowLeft, CheckCircle2, Paperclip } from 'lucide-react';
import axios from 'axios';


const ContactPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // --- SINGLE UNIFIED STATE FOR ALL DATA ---
  const [formData, setFormData] = useState({
    type: "feedback", // feedback or bug
    name: "",
    email: "",
    severity: "low",
    subject: "",
    message: ""
  });

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Switch Toggle Logic
  const handleTypeChange = (newType) => {
    setFormData((prev) => ({ ...prev, type: newType }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!localStorage.getItem("token")) return navigate("/login");

  const payload = {
    name: formData.name,
    type: formData.type,
    email: formData.email,
    severity: formData.type === "bug" ? formData.severity : "N/A",
    subject: formData.subject,
    message: formData.message,
  };

  console.log(payload);
  

  try {
    // const res = await fetch("http://localhost:4000/api/user/send-email", {
    //   method: "POST",
    //   headers: {
    //     token: localStorage.getItem("token"),
    //   },
    //   body: JSON.stringify(payload),
    // });

    const res = await axios.post(
      "http://localhost:4000/api/user/send-email",
      payload,{headers:{ token: localStorage.getItem("token") }})

    const data = await res.data;

    if (data.success) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      alert("Email failed");
    }
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};



  const inputClasses = "w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 ring-indigo-500/20 focus:border-indigo-500/50 transition-all font-medium placeholder:text-slate-400";

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] pt-24 pb-20 overflow-x-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ x: -5 }}
          className="group flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 mb-12 shadow-sm"
        >
          <ArrowLeft size={18} className="group-hover:text-indigo-500 transition-colors" />
          <span className="text-sm font-black uppercase tracking-widest">Go Back</span>
        </motion.button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
            Get in <span className="text-indigo-600 italic">Touch.</span>
          </h1>
        </div>

        {/* --- TOGGLE SWITCH (Updates 'type' in State) --- */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-[2rem] flex gap-2 border border-slate-200 dark:border-slate-800">
            <button 
              type="button"
              onClick={() => handleTypeChange('feedback')}
              className={`flex items-center gap-2 px-8 py-3 rounded-[1.5rem] text-xs font-black uppercase tracking-widest transition-all ${formData.type === 'feedback' ? 'bg-white dark:bg-slate-800 text-indigo-600 shadow-xl' : 'text-slate-400'}`}
            >
              <MessageSquare size={16} /> Feedback
            </button>
            <button 
              type="button"
              onClick={() => handleTypeChange('bug')}
              className={`flex items-center gap-2 px-8 py-3 rounded-[1.5rem] text-xs font-black uppercase tracking-widest transition-all ${formData.type === 'bug' ? 'bg-white dark:bg-slate-800 text-rose-500 shadow-xl' : 'text-slate-400'}`}
            >
              <Bug size={16} /> Bug Report
            </button>
          </div>
        </div>

        {/* --- FORM SECTION --- */}
        <motion.div layout className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onSubmit={handleSubmit} className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest text-white">Full Name</label>
                    <input name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className={inputClasses} required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest text-white">Email Address</label>
                    <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className={inputClasses} required />
                  </div>
                </div>

                {/* Conditional Field: Severity (Only for Bug) */}
                {formData.type === 'bug' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-rose-500 ml-2 tracking-widest">Severity Level</label>
                    <select name="severity" value={formData.severity} onChange={handleInputChange} className={inputClasses}>
                      <option value="low">Low - Visual glitch</option>
                      <option value="medium">Medium - Functional issue</option>
                      <option value="high">High - App crashing</option>
                    </select>
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest text-white">Subject</label>
                  <input name="subject" type="text" value={formData.subject} onChange={handleInputChange} placeholder="What is this about?" className={inputClasses} required />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2 tracking-widest text-white">Message</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleInputChange} placeholder="Tell us more..." className={inputClasses} required></textarea>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-4">
                  <button 
                    type="submit"
                    className={`w-full md:w-auto px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${formData.type === 'bug' ? 'bg-rose-600 text-white' : 'bg-indigo-600 text-white'}`}
                  >
                    Send {formData.type} <Send size={16} />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 space-y-6">
                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white">Submission Successful!</h2>
                <button onClick={() => setSubmitted(false)} className="text-indigo-600 font-bold hover:underline">Send another one</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;