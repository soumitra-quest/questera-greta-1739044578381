import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:email@example.com"
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
            >
              <FiMail className="w-5 h-5" />
              email@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-lg hover:text-primary transition-colors"
            >
              <FiPhone className="w-5 h-5" />
              +1 (234) 567-890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}