import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { HashLink } from 'react-router-hash-link';

export default function Header({ isDark, toggleTheme }) {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-primary"
        >
          Portfolio
        </motion.div>
        
        <div className="flex items-center gap-6">
          <HashLink smooth to="#home" className="hover:text-primary transition-colors">Home</HashLink>
          <HashLink smooth to="#projects" className="hover:text-primary transition-colors">Projects</HashLink>
          <HashLink smooth to="#contact" className="hover:text-primary transition-colors">Contact</HashLink>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  );
}