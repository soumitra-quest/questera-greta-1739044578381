import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer specializing in modern web technologies
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <FiGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a href="mailto:email@example.com"
               className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}