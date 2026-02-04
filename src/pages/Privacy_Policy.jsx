import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm p-6 border border-zinc-200 dark:border-zinc-800"
  >
    <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
      {title}
    </h2>
    <div className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed space-y-2">
      {children}
    </div>
  </motion.div>
);

export default function PrivacyPolicy() {


   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 px-4 py-12 relative pt-28">
      {/* Back Button */}
      <motion.button
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 rounded-full
          bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800
          px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300
          shadow-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition mt-24 ml-30"
      >
        <ArrowLeft size={16} />
        Back
      </motion.button>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Last updated: February 2026
          </p>
        </motion.div>

        {/* Sections */}
        <Section title="Overview">
          <p>
            Welcome to <strong>Your Website Name</strong>. This platform provides
            access to <strong>200+ AI tools</strong> and curated resources across
            Web Development, Data Science, AI/ML, UI/UX, and more.
          </p>
        </Section>

        <Section title="Information We Collect">
          <ul className="list-disc pl-5 space-y-1">
            <li>Email address (if you create an account)</li>
            <li>Tool submissions or feedback</li>
            <li>Usage and interaction data</li>
            <li>Browser & device information</li>
          </ul>
        </Section>

        <Section title="How We Use Your Data">
          <ul className="list-disc pl-5 space-y-1">
            <li>Authentication and access control</li>
            <li>Improving tools and resources</li>
            <li>System monitoring and security</li>
            <li>UI/UX optimization</li>
          </ul>
        </Section>

        <Section title="Real-Time Features">
          <p>
            Real-time updates may use secure WebSocket connections. No personal
            messages are stored.
          </p>
        </Section>

        <Section title="Data Security">
          <ul className="list-disc pl-5 space-y-1">
            <li>JWT-based authentication</li>
            <li>Role-based access control</li>
            <li>Input validation & sanitization</li>
            <li>Rate limiting</li>
          </ul>
        </Section>

        <Section title="Cookies & Analytics">
          <p>
            Cookies may be used for session management and performance insights.
          </p>
        </Section>

        <Section title="Third-Party Links">
          <p>
            External AI tools and resources have their own privacy policies.
          </p>
        </Section>

        <Section title="What We Don’t Do">
          <ul className="list-disc pl-5 space-y-1">
            <li>We don’t sell user data</li>
            <li>No cross-site tracking</li>
            <li>No ad profiling</li>
          </ul>
        </Section>

        <Section title="Contact">
          <p>If you have questions, contact us at:</p>
          <p className="font-medium text-indigo-600 dark:text-indigo-400">
            pandas.work01@gmail.com
          </p>
        </Section>

        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
          Built with a privacy-first mindset for developers and learners.
        </p>
      </div>
    </div>
  );
}
