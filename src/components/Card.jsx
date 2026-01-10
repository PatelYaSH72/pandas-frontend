const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default Card