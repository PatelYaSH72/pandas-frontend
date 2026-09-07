import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          flex flex-col items-center justify-center
          w-full max-w-sm
          rounded-[20px]
          border border-[#E3E8E3]
          bg-white
          px-8 py-9
          shadow-[0_8px_30px_rgba(20,31,25,0.05)]
        "
      >
        {/* Logo / Search Mark */}
        <div className="relative flex h-14 w-14 items-center justify-center">
          
          {/* Outer rotating ring */}
          <motion.div
            className="
              absolute inset-0
              rounded-full
              border-[2px]
              border-[#E7F1EA]
              border-t-[#3F7A5B]
            "
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            }}
          />

          {/* Inner icon container */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              bg-[#E7F1EA]
              text-[#3F7A5B]
            "
          >
            <Search
              size={19}
              strokeWidth={1.8}
            />
          </motion.div>
        </div>

        {/* Loading text */}
        <div className="mt-6 text-center">
          <h2 className="text-sm font-semibold text-[#141F19]">
            Finding the right tools
          </h2>

          <p className="mt-1.5 text-xs leading-5 text-[#8A988E]">
            Curating useful AI tools and resources...
          </p>
        </div>

        {/* Small progress indicator */}
        <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-[#E7F1EA]">
          <motion.div
            className="h-full rounded-full bg-[#3F7A5B]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}