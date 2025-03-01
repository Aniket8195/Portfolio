import { motion } from "framer-motion";
import React from "react";
import { Code, Database, Server, Cloud,GitBranch,Zap } from "lucide-react";
import profile from "../assets/profile.jpg";

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "React, TypeScript, Flutter, Dart" },
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "Backend", description: "Node.js, Express.js, Firebase" },
    { icon: <Database className="w-8 h-8 text-purple-500" />, title: "Database", description: "SQL, MongoDB" },
    { icon: <Cloud className="w-8 h-8 text-indigo-500" />, title: "Cloud & DevOps", description: "AWS, Docker, Kubernetes" },
    { icon: <GitBranch className="w-8 h-8 text-gray-500" />, title: "Version Control", description: "Git, GitHub" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Performance", description: "Optimization, Caching" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer specializing in building scalable applications using modern technologies.
              With expertise in React, TypeScript, Node.js, and cloud services like AWS and Firebase, I focus on delivering
              seamless and optimized solutions.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
  I build scalable, high-performance applications with clean architecture and efficient system design.  
  My expertise includes microservices, caching, and cloud technologies like AWS and Docker for seamless scalability.  
  I am passionate about problem-solving and have solved 500+ coding challenges on LeetCode and GeeksForGeeks.  
</p>

          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <img src={profile} alt="Decorative background" className="w-64 h-64 opacity-20 absolute bottom-0 right-0 -mb-32 -mr-32" />
      </div>
    </section>
  );
}
