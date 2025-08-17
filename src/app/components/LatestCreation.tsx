'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const LatestCreation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="latest-creation" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Latest Creation
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              My most recent project - a full-stack application built with modern web technologies
            </p>
          </motion.div>

          {/* Project Card */}
          <motion.div
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              {/* Project Header */}
              <div className="p-8 border-b border-slate-700/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Perpetual Watchlist
                    </h3>
                    <p className="text-slate-400 text-lg">
                      Movie & TV Show Watchlist Manager
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://perpetual-watchlist.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    {/* Uncomment when GitHub repo is available */}
                    {/* <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a> */}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">About the Project</h4>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      A sleek and intuitive web application that allows users to search for movies and TV shows 
                      and add them to a personalized watchlist. Features a modern interface with real-time search 
                      functionality and persistent data storage.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                    <ul className="text-slate-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        Real-time movie & TV show search
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        Persistent watchlist management
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        Clean, responsive design
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        Admin authentication system
                      </li>
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                    
                    {/* Frontend Technologies */}
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-blue-400 mb-3 flex items-center gap-2">
                        💻 Frontend Technologies
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {[
                          'Next.js 14', 'React 18', 'TypeScript', 'Material-UI (MUI)',
                          'React Hook Form', 'React Hot Toast', 'TanStack React Table'
                        ].map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Backend & Database */}
                    <div className="mb-6">
                      <h5 className="text-lg font-medium text-purple-400 mb-3 flex items-center gap-2">
                        🗄️ Backend & Database
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {[
                          'Next.js API Routes', 'Supabase', 'Prisma ORM', 'PostgreSQL'
                        ].map((tech, index) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm text-slate-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-600/30 rounded-lg p-4">
                      <h5 className="text-lg font-medium text-white mb-3">Project Highlights</h5>
                      <div className="space-y-2 text-sm text-slate-400">
                        <p>• Full-stack Next.js 14 application with App Router</p>
                        <p>• Type-safe development with TypeScript</p>
                        <p>• Modern UI with Material-UI components</p>
                        <p>• Robust backend with Supabase and Prisma ORM</p>
                        <p>• PostgreSQL database with authentication</p>
                        <p>• Advanced data tables and form management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestCreation;
