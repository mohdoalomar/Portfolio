import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  User,
  Code,
  Briefcase,
  BookOpen,
} from "lucide-react";
import HeroSection from "./HeroSection";
// SkillLogo Component
const SkillLogo = ({ imgPath, name, delay }) => {
  return (
    <motion.div
      className="flex flex-col items-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1 }}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-16 h-16 md:w-20 md:h-20 mb-3 p-2"
      >
        <div className="absolute inset-0  rounded-xl filter blur-md group-hover:blur-xl transition-all duration-300" />
        <img
          src={imgPath}
          alt={name}
          className="relative w-full h-full object-contain drop-shadow-lg"
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-400  text-sm font-medium group-hover:text-blue-400 transition-colors"
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

// Floating Skill Component
const FloatingSkill = ({ imgPath, delay = 0 }) => {
  return (
    <motion.div
      className="absolute w-16 h-16"
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        delay: delay,
        ease: "easeInOut",
      }}
    >
      <motion.img
        src={imgPath}
        alt="skill"
        className="w-full h-full object-contain opacity-20 hover:opacity-40 transition-opacity duration-300 "
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

const FloatingBackground = () => {
  const skills = [
    { name: "react", path: "tech/react.svg" },
    { name: "spring", path: "tech/spring.svg" },
    { name: "docker", path: "tech/docker.svg" },
    { name: "python", path: "tech/python.svg" },
    { name: "aws", path: "tech/aws.svg" },
    { name: "git", path: "tech/git.svg" },
    { name: "java", path: "tech/java.svg" },
    { name: "php", path: "tech/php.svg" },
    { name: "sql", path: "tech/sql.svg" },
    { name: "azure", path: "tech/azure.svg" },
    { name: "tailwind", path: "tech/tailwind.svg" },
    { name: "postman", path: "tech/postman.svg" },
  ];

  const positions = [
    { top: "5%", left: "10%" },
    { top: "15%", left: "80%" },
    { top: "25%", left: "15%" },
    { top: "35%", left: "75%" },
    { top: "45%", left: "15%" },
    { top: "55%", left: "85%" },
    { top: "60%", left: "30%" },
    { top: "75%", left: "70%" },
    { top: "85%", left: "15%" },
    { top: "95%", left: "80%" },
    { top: "40%", left: "45%" },
    { top: "70%", left: "10%" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="absolute"
          style={{
            top: positions[index].top,
            left: positions[index].left,
          }}
        >
          <FloatingSkill imgPath={skill.path} delay={index * 0.15} />
        </div>
      ))}
    </div>
  );
};

const Portfolio = () => {
  const courses = [
    {
      title: "React - The Complete Guide",
      provider: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux",
      badge: "React",
      color: "from-blue-600 to-indigo-400",
    },
    {
      title: "Agile Project Management",
      provider: "Google",
      instructor: "Google Career Certificates",
      link: "https://www.coursera.org/account/accomplishments/verify/4A8EMMSWHJWM",
      badge: "Agile",
      color: "from-indigo-400 to-purple-600",
    },
    {
      title: "Data, Data Everywhere",
      provider: "Google",
      instructor: "Google Career Certificates",
      link: "https://www.coursera.org/account/accomplishments/verify/S699KESORZ2A",
      badge: "Data Analytics",
      color: "from-blue-600 to-indigo-400",
    },
    {
      title: "Spring Boot For Beginners",
      provider: "Devtiro",
      instructor: "Devtiro",
      link: "https://www.youtube.com/watch?v=Nv2DERaMx-4&list=PLzUMQwCOrQTksiYqoumAQxuhPNa3HqasL&index=7",
      badge: "Spring Boot",
      color: "from-indigo-400 to-purple-600",
    },
  ];
  const skills = [
    { name: "React", imgPath: "tech/react.svg" },
    { name: "Spring", imgPath: "tech/spring.svg" },
    { name: "Docker", imgPath: "tech/docker.svg" },
    { name: "Postman", imgPath: "tech/postman.svg" },
    { name: "Tailwind CSS", imgPath: "tech/tailwind.svg" },
    { name: "SQL", imgPath: "tech/sql.svg" },
    { name: "Java", imgPath: "tech/java.svg" },
    { name: "AWS", imgPath: "tech/aws.svg" },
    { name: "Azure", imgPath: "tech/azure.svg" },
    { name: "PHP", imgPath: "tech/php.svg" },
    { name: "Git", imgPath: "tech/git.svg" },
    { name: "Python", imgPath: "tech/python.svg" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  // Floating skills data
  const floatingSkills = [
    { imgPath: "tech/react.svg", x: "10%", y: "20%", duration: 6 },
    { imgPath: "tech/java.svg", x: "80%", y: "30%", duration: 8 },
    { imgPath: "tech/docker.svg", x: "30%", y: "70%", duration: 7 },
    { imgPath: "tech/python.svg", x: "70%", y: "50%", duration: 9 },
    { imgPath: "tech/aws.svg", x: "50%", y: "10%", duration: 10 },
    { imgPath: "tech/git.svg", x: "20%", y: "60%", duration: 5 },
  ];

  return (
    <div className="bg-black text-white relative min-h-screen">
      {/* Floating Skills Background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingBackground />
      </div>

      {/* Gradient Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
      </div>
      <HeroSection />

      {/* About Section */}
      <motion.section className="py-20 px-4" {...fadeInUp}>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex items-center gap-4 text-blue-400">
            <User size={24} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>

          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              Passionate software engineering student at KSU with a first honor
              GPA, I specialize in creating intuitive and efficient web
              solutions. My expertise spans modern front-end technologies and
              robust back-end systems.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-blue-400">Education</h3>
              <div className="text-gray-300">
                <p className="font-semibold">
                  Bachelor of Software Engineering
                </p>
                <p>King Saud University (2021-2025)</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section className="py-20 px-4" {...fadeInUp}>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex items-center gap-4 text-blue-400">
            <BookOpen size={24} />
            <h2 className="text-3xl font-bold">Certifications & Courses</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                key={course.title}
                className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-blue-500/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`h-1 bg-gradient-to-r ${course.color}`} />
                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{course.provider}</p>
                    </div>
                    <span className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                      {course.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{course.instructor}</p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm group-hover:text-blue-300 transition-colors">
                    View Certificate <ExternalLink size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Skills Section */}
      <motion.section className="py-20 px-4 " {...fadeInUp}>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex items-center gap-4 text-blue-400 justify-center">
            <Code size={24} />
            <h2 className="text-3xl font-bold">Technologies</h2>
          </div>

          <motion.div
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <SkillLogo
                key={skill.name}
                name={skill.name}
                imgPath={skill.imgPath}
                delay={index}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="py-20 px-4" {...fadeInUp}>
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex items-center gap-4 text-blue-400">
            <Briefcase size={24} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tashalih",
                description:
                  "A platform for spare part discovery and inventory management.",
                url: "https://tashalih.xyz",
                tech: ["React", "Tailwind", "Django"],
                gradient: "from-blue-800 to-blue-500",
              },
              {
                title: "Lammah",
                description: "Corporate landing page showcasing AI solutions.",
                url: "https://lammah.ai",
                tech: ["React", "Framer Motion", "Tailwind"],
                gradient: "from-blue-500 to-purple-500",
              },
              {
                title: "AskCommunity",
                description:
                  "A Stack Overflow-like Q&A platform for developers.",
                tech: ["PHP", "MySQL", "JavaScript"],
                gradient: "from-purple-500 to-purple-800",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.url && (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                      whileHover={{ x: 5 }}
                    >
                      Visit Site <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="py-20 px-4" {...fadeInUp}>
        <div className="max-w-4xl mx-auto space-y-12 p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
          <div className="flex items-center gap-4 text-blue-400">
            <Mail size={24} />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="text-blue-400" size={24} />
              <p>mohdoalomar@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Linkedin className="text-blue-400" size={24} />
              <a
                href="https://www.linkedin.com/in/mohammad-al-omar-5b94421ab/"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
              >
                Mohammad Al-Omar
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <Github className="text-blue-400" size={24} />
              <a
                href="https://github.com/mohdoalomar"
                target="_blank"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
