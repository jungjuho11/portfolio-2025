'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "One Staff Medical",
    position: "Software Developer",
    duration: "Dec 2024 - Aug 2025",
    location: "Omaha, NE",
    description: [
      "Developed and enhanced an internal tool using Next.js and TypeScript, improving staff efficiency and delivering a seamless user experience.",
"Utilized Next.js Server-Side Props and React Context API for efficient data management and optimized application performance.",
"Integrated RESTful APIs with Swagger for testing and validation, ensuring robust end-to-end functionality.",
"Collaborated with designers, product managers, and backend engineers to translate business requirements into effective technical solutions.",
"Contributed to backend development with C#, ASP.NET, and SQL Server by fixing bugs and implementing minor features.",
"Participated in requirement analysis sessions and troubleshooting across the stack, working closely with stakeholders and QA to align technical implementation with business needs and resolve defects.",


    ],
    technologies: ["ReactJs", "NextJs", "JavaScript", "TypeScript", "C#", "SQL", "Node.js", "AWS", "Docker", "Swagger", "Jenkins", ".NET"],
    link: "https://www.onestaffmedical.com/"
  },
  {
    id: 2,
    company: "Milan Laser",
    position: "Web Developer",
    duration: "Sep 2022 - Nov 2024",
    location: "Omaha, NE",
    description: [
      "Integrated SEO best practices into site architecture and design, improving site rankings across search engines.",
      "Collaborated with stakeholders to define requirements, assess project direction, and ensure alignment with business goals.",
      "Actively participated in cross-functional team meetings to align development goals with business objectives.",
      "Developed a solution to consolidate 180 metro sites into a single, unified corporate site.",
      "Customized and added new features to existing Content Management Systems (CMS) to enhance functionality and provide clients with greater control over site content.",
      "Designed and updated mobile-friendly, scalable user interfaces, ensuring adherence to brand guidelines and consistency.",
      "Coordinated and participated in code deployments and production releases, ensuring seamless rollouts and minimal downtime.",
      "Collaborate with PMs to troubleshoot and resolve customer-reported bugs.",
      "Engaged in code review and resolve Pull Request comments",
      "Involve in sprint ceremonies (estimate, and planning)",
      "Solid understanding of Git Resource Control"
    ],
    technologies: ["Gatsby.js", "ReactJs", "JavaScript", "Firebase", "CSS", "HTML", "Git"],
    link: "https://milanlaser.com"
  },
  {
    id: 3,
    company: "Milan Laser",
    position: "Service Desk Specialist",
    duration: "Apr 2022 - Sep 2022",
    location: "Omaha, NE",
    description: [
      "Provided frontline IT support for macOS, iOS, and Windows users via help desk, phone, and in-person requests, ensuring quick resolution of hardware, software, and network issues.",
      "Administered Mosyle MDM for Mac and iOS devices, including configuration profile deployment, policy enforcement, and software updates to maintain compliance and security.",
      "Troubleshooting and resolving printer, peripheral, and connectivity issues, minimizing downtime and improving user productivity.",
      "Conducted onboarding and IT orientation for new hires, configuring laptops, and accounts while training staff on company systems and best practices.",
      "Managed user accounts, permissions, and access control using Okta to ensure data security and smooth business operations.",
      "Maintained accurate IT asset inventory and documentation, tracking device assignments, lifecycle, and support history."
    ],
    technologies: ["MDM", "Mosyle", "Jamf", "Networking", "Okta", "Apple Business Manager", "Google Workspace", "Microsoft Office 365"],
    link: "https://milanlaser.com"
  },
  {
    id: 4,
    company: "Militti Sales & Promotions",
    position: "System Administrator",
    duration: "Aug 2021 - Apr 2022",
    location: "Omaha, NE",
    description: [
      "Implemented and administered Cisco Meraki Systems Manager for macOS, enabling centralized device enrollment, configuration, policy management, and real-time monitoring to improve security and streamline IT operations",
      "Installed important security and functionality patches to maintain protections against intrusion and ensure system reliability.",
      "Provisioned and upgraded software/hardware, managed file systems, and safeguarded data integrity.",
      "Managed employee onboarding and offboarding, driving IT governance improvements.",
      "Researched, recommended, and implemented new technologies to enhance system performance and usability.",
      "Managed the WordPress website to ensure it is up to date with the latest core, theme, and plugin updates for optimal security and performance."
    ],
    technologies: [],
    link: "https://milittisales.com/"
  }
];

const Experience = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
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
              My Path in Tech
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A mix of hands-on IT work, web development projects, and academic achievements that together built the foundation for my career.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform -translate-x-1/2" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
              }`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 ${
                index % 2 === 0 ? 'left-6 md:left-1/2 md:-translate-x-1/2' : 'left-6 md:left-1/2 md:-translate-x-1/2'
              }`} />

              {/* Content */}
              <div className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {experience.position}
                      </h3>
                      <div className="flex items-center space-x-2 text-slate-400 text-sm mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <h4 className="text-lg font-semibold text-blue-400">
                        {experience.company}
                      </h4>
                      <div className="flex items-center space-x-2 text-slate-400 text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4 text-left">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="text-slate-300 text-sm flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-left">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:border-blue-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {experience.link && (
                    <div className="flex justify-end">
                      <motion.a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 group/link"
                        whileHover={{ x: 4 }}
                      >
                        <span>View Company</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                      </motion.a>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
