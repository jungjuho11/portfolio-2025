'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Picture */}
          <motion.div
            className="mb-8 flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl"
              variants={floatingVariants}
              animate="animate"
            >
              <Image
                src="/profile-picture.jpg"
                alt="Juho Jung - Software Developer"
                fill
                className="object-cover scale-125"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" as const,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-2"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Juho Jung
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl text-slate-400 mb-4"
            variants={itemVariants}
          >
            정주호
          </motion.h2>

          <motion.h3
            className="text-xl md:text-2xl text-slate-300 mb-6"
            variants={itemVariants}
          >
            Software Developer & IT Solutions Specialist
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Hi, I’m Juho. I build apps and keep tech running smoothly from crafting clean, user-friendly web experiences to solving tricky IT problems, I love creating solutions that make life easier for people and teams.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/juho-jung-a58442152/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-blue-400/50 transition-colors duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Positioned outside content container */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
