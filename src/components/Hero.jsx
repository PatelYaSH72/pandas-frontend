import { motion } from 'framer-motion';
import Button from './Button.jsx';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const Hero = () => {

  const navigate = useNavigate()
   
  return(
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent dark:from-indigo-900/20" />
    </div>
    
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
          The Ultimate AI Hub
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Discover 200+ <span className="text-indigo-600">AI Tools</span> <br /> 
          & Tech Resources
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          Web Development, AI, ML, Data Science, Mobile, Design & more — all curated in one platform for modern builders.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={()=>navigate('/Ai-Tools')} variant="primary" className="w-full sm:w-auto text-lg px-8 cursor-pointer" to={'/Ai-Tools'}>
            <Search size={20} /> Explore Tools
          </Button>
          <Button onClick={()=>navigate('/Resources')} variant="secondary" className="w-full sm:w-auto text-lg px-8 cursor-pointer">
            Browse Resources
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
}
export default Hero