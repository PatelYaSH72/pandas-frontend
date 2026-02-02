import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  
   ShieldCheck, Plus, 
  Github, Twitter,  
  
} from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Categories from '../components/Categories';
import TrendingTools from '../components/TrendingTools';
import { useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
import SearchPage from '../components/SearchPage';

// --- Main Page Component ---

export default function Home() {

 const navigate = useNavigate()

 const navigateWithAuth = (navigate, path) => {
  const token = localStorage.getItem('token'); // yaha token ka naam jo bhi aap use kar rahe ho
  if (token) {
    navigate(path);
  } else {
    navigate('/login');
  }
};

 

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation */}
      

    {/* <Navbar/> */}

      <Hero />
      <SearchPage />
      <Categories />
      <TrendingTools />

      {/* Why Pandas Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">Everything you need to stay ahead</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "200+ AI Tools", desc: "A massive library of tools ranging from LLMs to code generators." },
            { title: "Verified Resources", desc: "Every link is manually checked for quality and relevance." },
            { title: "Daily Updates", desc: "New tools and learning materials added every single day." }
          ].map((feature, i) => (
            <div key={i} className="space-y-4">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center mx-auto">
                <ShieldCheck className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h2 className="text-4xl font-bold mb-6">Build the future together</h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-xl mx-auto">
            Have a tool or resource that changed your workflow? Share it with our community of 50k+ developers.
          </p>
          <Button onClick={()=>navigate('/Add-Tools')} variant="secondary" className="mx-auto !text-indigo-600">
            <Plus size={20} /> Submit Your Tool
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => navigateWithAuth(navigate, '/')}>
  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
  <span className="text-xl font-bold">Pandas</span>
</div>

            <p className="text-slate-500">The premier destination for discovering next-gen AI tools and tech learning resources.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-500">
  <li>
    <button onClick={() => navigateWithAuth(navigate, '/Ai-Tools')} className="hover:text-indigo-600 cursor-pointer">
      AI Tool Directory
    </button>
  </li>
  <li>
    <button onClick={() => navigateWithAuth(navigate, '/Resources')} className="hover:text-indigo-600 cursor-pointer">
      Learning Paths
    </button>
  </li>
  <li>
    <button onClick={() => navigateWithAuth(navigate, '/Category')} className="hover:text-indigo-600 cursor-pointer">
      Categories
    </button>
  </li>
</ul>

          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a className="hover:text-indigo-600 cursor-pointer" onClick={() => navigateWithAuth(navigate, '/Add-Tools')}>Submit a Tools</a></li>
              <li><a className="hover:text-indigo-600 cursor-pointer" onClick={() => navigateWithAuth(navigate, '/Contact')}>Join the Discord</a></li>
              <li><a className="hover:text-indigo-600 cursor-pointer" onClick={() => navigateWithAuth(navigate, '/Privacy-Policy')}>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg cursor-pointer hover:text-indigo-600"><Twitter size={20}/></div>
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg cursor-pointer hover:text-indigo-600"><Github size={20}/></div>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
          © 2026 Pandas AI Hub. Built for the community.
        </div>
      </footer>
    </div>
  );
}