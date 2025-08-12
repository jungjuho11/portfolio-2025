'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  major: string;
  minor?: string;
  years: string;
  location: string;
}

const education: EducationItem[] = [
  {
    id: 1,
    institution: "University of Nebraska Omaha",
    degree: "Bachelor's Degree",
    major: "Cyber Security",
    minor: "Computer Science",
    years: "2016 - 2021",
    location: "Omaha, NE"
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {item.institution}
                    </h3>
                    <p className="text-lg text-blue-400 font-medium">
                      {item.degree}
                    </p>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Major */}
                <div className="flex items-center space-x-3 p-4 bg-slate-700/30 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-slate-400 text-sm">Major</p>
                    <p className="text-white font-medium">{item.major}</p>
                  </div>
                </div>

                {/* Minor */}
                {item.minor && (
                  <div className="flex items-center space-x-3 p-4 bg-slate-700/30 rounded-lg">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-slate-400 text-sm">Minor</p>
                      <p className="text-white font-medium">{item.minor}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap items-center gap-6 text-slate-300">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-sm">{item.years}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
