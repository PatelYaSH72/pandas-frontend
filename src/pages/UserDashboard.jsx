"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Bookmark, Send, Settings, ExternalLink, 
  CheckCircle2, Clock, AlertCircle, Plus, Camera, Pencil,
  Save,
  X,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('saved');
  const [isEditing, setIsEditing] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); // Konsi field edit ho rahi hai

  // 1. User State (Editable)
  const [userData, setUserData] = useState({
    name: "Alex Panda",
    email: "alex@pandas.ai",
    role: "Full Stack Developer",
    joined: "Jan 2024",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    totalSaved: 12,
    totalSubmitted: 5
  });

  const [tempData, setTempData] = useState({ ...userData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: value }));
  };

  // Save Logic
  const handleSave = () => {
    setUserData({ ...tempData }); // Final state update
    setIsEditMode(false);
    console.log("Updated Data Stored in State:", tempData);
  };

  // Cancel Logic
  const handleCancel = () => {
    setTempData({ ...userData }); // Purana data wapas reset
    setIsEditMode(false);
  };

  const submittedTools = [
    { id: 1, name: "GPT Optimizer", status: "Approved", date: "2 days ago" },
    { id: 2, name: "DataViz Pro", status: "Pending", date: "5 hours ago" },
    { id: 3, name: "CodeFast AI", status: "Rejected", date: "1 week ago" },
  ];

  const savedTools = [
    { id: 101, name: "Vercel SDK", category: "Deployment", image: "https://api.dicebear.com/7.x/shapes/svg?seed=1" },
    { id: 102, name: "Midjourney API", category: "Generative AI", image: "https://api.dicebear.com/7.x/shapes/svg?seed=2" },
    { id: 103, name: "Tailwind Master", category: "CSS Tool", image: "https://api.dicebear.com/7.x/shapes/svg?seed=3" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      case 'Pending': return 'text-amber-500 bg-amber-500/10 border-amber-500/20';
      case 'Rejected': return 'text-rose-500 bg-rose-500/10 border-rose-500/20';
      default: return 'text-slate-500';
    }
  };

  // Reusable Editable Text Component
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 p-4 md:p-8 pt-24 transition-colors duration-500">

      <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <ArrowLeft size={18} /> Back
        </button>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* --- LEFT SIDE: PROFILE INFO (SIDEBAR) --- */}
        <motion.aside className="lg:w-80 flex-shrink-0 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-10" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-[2rem] border-4 border-white dark:border-slate-900 overflow-hidden shadow-2xl">
                  <img src={userData.avatar} alt="avatar" className="w-full h-full object-cover" />
                </div>
                {isEditMode && (
                  <button className="absolute -bottom-2 -right-2 p-2.5 bg-indigo-600 text-white rounded-2xl shadow-lg hover:scale-110 transition-transform">
                    <Camera size={16} />
                  </button>
                )}
              </div>

              {/* Form Fields */}
              <div className="w-full space-y-4">
                {isEditMode ? (
                  <div className="space-y-3">
                    <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Full Name</label>
                      <input 
                        name="name" value={tempData.name} onChange={handleChange}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm font-bold outline-none focus:ring-2 ring-indigo-500/20"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Role</label>
                      <input 
                        name="role" value={tempData.role} onChange={handleChange}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm font-bold outline-none focus:ring-2 ring-indigo-500/20"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Email</label>
                      <input 
                        name="email" value={tempData.email} onChange={handleChange}
                        className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm font-bold outline-none focus:ring-2 ring-indigo-500/20"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-1">
                    <h2 className="text-xl font-black">{userData.name}</h2>
                    <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{userData.role}</p>
                    <p className="text-sm text-slate-500">{userData.email}</p>
                  </div>
                )}
              </div>

              {/* Control Buttons */}
              <div className="w-full mt-8">
                {isEditMode ? (
                  <div className="flex gap-2">
                    <button 
                      onClick={handleSave}
                      className="flex-1 bg-indigo-600 text-white py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
                    >
                      <Save size={14} /> Save
                    </button>
                    <button 
                      onClick={handleCancel}
                      className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-500 hover:text-red-500 transition-all"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setIsEditMode(true)}
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-xl"
                  >
                    <Pencil size={14} /> Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.aside>

        {/* --- RIGHT SIDE: CONTENT AREA --- */}
        <div className="flex-1 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <div className="flex gap-8">
              <button 
                onClick={() => setActiveTab('saved')}
                className={`flex items-center gap-2 pb-2 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === 'saved' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Bookmark size={16} /> Saved Tools
                {activeTab === 'saved' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full" />}
              </button>
              <button 
                onClick={() => setActiveTab('submitted')}
                className={`flex items-center gap-2 pb-2 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === 'submitted' ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Send size={16} /> Submissions
                {activeTab === 'submitted' && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600 rounded-full" />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {activeTab === 'saved' ? (
                savedTools.map((tool, i) => (
                  <motion.div 
                    key={tool.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-5 shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <img src={tool.image} className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800" alt={tool.name} />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg group-hover:text-indigo-600 transition-colors">{tool.name}</h3>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{tool.category}</p>
                      </div>
                      <button className="p-2 text-slate-400 hover:text-indigo-600"><ExternalLink size={18} /></button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full space-y-4">
                  {submittedTools.map((tool, i) => (
                    <motion.div 
                      key={tool.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex items-center justify-between group hover:border-indigo-500/30 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center font-black italic text-slate-400">#</div>
                        <div>
                          <h3 className="font-bold">{tool.name}</h3>
                          <p className="text-xs text-slate-400 font-medium">Submitted {tool.date}</p>
                        </div>
                      </div>
                      <div className={`px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${getStatusColor(tool.status)}`}>
                        {tool.status === 'Approved' && <CheckCircle2 size={12} />}
                        {tool.status === 'Pending' && <Clock size={12} />}
                        {tool.status === 'Rejected' && <AlertCircle size={12} />}
                        {tool.status}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;