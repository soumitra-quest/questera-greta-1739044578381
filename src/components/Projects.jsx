import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with React and Node.js',
    image: 'https://via.placeholder.com/500x300',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Mobile-first e-commerce platform',
    image: 'https://via.placeholder.com/500x300',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe'],
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'Real-time chat application',
    image: 'https://via.placeholder.com/500x300',
    tags: ['React', 'Socket.io', 'Express'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}