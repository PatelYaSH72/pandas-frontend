import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const SearchBar = () => (
  <section className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative group"
    >
      <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
        <Search className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={24} />
      </div>
      <input 
        type="text"
        placeholder="Search AI tools, technologies, resources..."
        className="w-full pl-14 pr-6 py-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none text-lg transition-all"
      />
    </motion.div>
  </section>
);

export default SearchBar