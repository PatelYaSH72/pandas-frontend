import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
      <motion.div
        initial={{ scale: 0.95, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.8,
        }}
        className="flex flex-col items-center gap-4 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:scale-[1.03] transition-transform duration-300"
      >
        {/* Circular Gradient Spinner */}
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-t-indigo-500 border-b-purple-500 border-l-blue-400 border-r-indigo-300"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          {/* Inner pulse */}
          <motion.div
            className="w-full h-full rounded-full bg-indigo-100 dark:bg-indigo-900 opacity-30"
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        </motion.div>

        {/* Loading Text */}
        <p className="text-indigo-700 dark:text-indigo-400 font-semibold text-lg">
          Loading, please wait...
        </p>
      </motion.div>
    </div>
  );
}
