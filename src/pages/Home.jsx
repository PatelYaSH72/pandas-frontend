import React from 'react';
import {
  SearchCheck,
  BookMarked,
  RefreshCw,
  Plus,
  Github,
  Twitter,
} from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Categories from '../components/Categories';
import TrendingTools from '../components/TrendingTools';
import { useNavigate } from 'react-router';

// --- Main Page Component ---

export default function Home() {
  const navigate = useNavigate();

  const navigateWithAuth = (navigate, path) => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  const features = [
    {
      icon: SearchCheck,
      title: 'A directory built to be searched',
      desc: 'Filter by category, pricing, and use case instead of scrolling a feed. Find the tool that fits the job, not just the loudest one.',
    },
    {
      icon: BookMarked,
      title: 'Every listing is checked',
      desc: 'Tools are reviewed before they go live, and pricing or status changes get corrected instead of left stale.',
    },
    {
      icon: RefreshCw,
      title: 'The list keeps moving',
      desc: 'New tools and resources are added continuously, so the directory reflects what people are actually using now.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#141F19] font-sans selection:bg-[#E7F1EA] selection:text-[#141F19]">
      <Hero />
      <Categories />
      <TrendingTools />

      {/* Why Pandas Section */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Built for finding the right tool, not just any tool
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((feature, i) => (
            <div key={i} className="space-y-4">
              <div className="w-11 h-11 bg-[#E7F1EA] rounded-[10px] flex items-center justify-center">
                <feature.icon className="text-[#3F7A5B]" size={20} strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="text-[#4B5C53] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-[#141F19] rounded-[20px] px-10 py-14 md:px-16 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Know a tool that belongs here?
            </h2>
            <p className="text-[#B9C7BE] text-base leading-relaxed">
              Submit it for review. If it fits the bar, it goes live and stays current with the rest of the directory.
            </p>
          </div>
          <Button
            onClick={() => navigate('/Add-Tools')}
            className="!bg-[#3F7A5B] hover:!bg-[#4a8c69] !text-white shrink-0 !rounded-[10px] px-5 py-3 font-medium transition-colors"
          >
            <Plus size={18} /> Submit a tool
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-[#E3E8E3]">
        {/* Top Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div
              className="flex items-center gap-2 mb-6 cursor-pointer w-fit"
              onClick={() => navigateWithAuth(navigate, '/')}
            >
              <img src="/logo-img.png" alt="Pandas Logo" className="w-7 h-7 object-contain" />
              <span className="text-lg font-semibold tracking-tight">Pandas</span>
            </div>
            <p className="text-[#4B5C53] text-sm leading-relaxed max-w-[240px]">
              A directory for finding AI tools and resources that actually fit your workflow.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-[#141F19]">Explore</h4>
            <ul className="space-y-3 text-sm text-[#4B5C53]">
              <li>
                <button onClick={() => navigateWithAuth(navigate, '/Ai-Tools')} className="hover:text-[#3F7A5B] transition-colors">
                  AI tool directory
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithAuth(navigate, '/Resources')} className="hover:text-[#3F7A5B] transition-colors">
                  Learning paths
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithAuth(navigate, '/Category')} className="hover:text-[#3F7A5B] transition-colors">
                  Categories
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-[#141F19]">Support</h4>
            <ul className="space-y-3 text-sm text-[#4B5C53]">
              <li>
                <button onClick={() => navigateWithAuth(navigate, '/Add-Tools')} className="hover:text-[#3F7A5B] transition-colors">
                  Submit a tool
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithAuth(navigate, '/Contact')} className="hover:text-[#3F7A5B] transition-colors">
                  Join the Discord
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithAuth(navigate, '/Privacy-Policy')} className="hover:text-[#3F7A5B] transition-colors">
                  Privacy policy
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-5 text-[#141F19]">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-[#FAFAF8] border border-[#E3E8E3] rounded-[8px] text-[#4B5C53] hover:text-[#3F7A5B] hover:border-[#3F7A5B] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 bg-[#FAFAF8] border border-[#E3E8E3] rounded-[8px] text-[#4B5C53] hover:text-[#3F7A5B] hover:border-[#3F7A5B] transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E3E8E3] pt-6">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#8A988E] text-sm">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigateWithAuth(navigate, '/')}
            >
              <img src="/logo-img.png" alt="Pandas Logo" className="w-5 h-5 object-contain" />
              <span className="font-medium text-[#4B5C53]">Pandas</span>
            </div>
            <p>© 2026 Pandas. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}