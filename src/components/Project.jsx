import React from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi"; // Importing GitHub icon
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const projects = [
  {
    title: "StudyWiz",
    description: "A React-based platform for finding study peers, allowing users to create and join study rooms.",
    tech: "React, Spring Boot Microservices, Eureka, API Gateway",
    github: "https://github.com/Aniket8195/StudyWiz",
  },
  {
    title: "ServeEase",
    description: "A service marketplace connecting service seekers with providers, featuring authentication and request management.",
    tech: "Spring Boot, Supabase SQL, REST APIs",
    github: "https://github.com/Aniket8195/ServeEase",
  },
  {
    title: "Code Editor",
    description: "A mobile app built with Flutter for solving coding problems on mobile devices, supporting multiple programming languages.",
    tech: "Flutter, Dart, Redis, WebSockets",
    github: "https://github.com/Aniket8195/CodeEditor",
  },
  {
    title: "Email Automation",
    description: "A scalable email automation system with OAuth integration, scheduling, customizable templates, and detailed tracking.",
    tech: "TypeScript, PostgreSQL, BullMQ, Prisma, React",
    github: "https://github.com/Aniket8195/email-automation",
  },
  {
    title: "Smart Healthcare Assistant",
    description: "An AI-powered healthcare application that improves accessibility by enabling virtual appointments and medical record management.",
    tech: "Flutter, Firebase, AI Models",
    github: "https://github.com/DarpanNeve/S-MPLE_2.4.2",
  },
  {
    title: "DSA Challenges",
    description: "A collection of 500+ coding challenges solved on platforms like LeetCode and GeeksForGeeks, structured in an easy-to-follow format.",
    tech: "Java,Data Structures",
    github: "https://github.com/Aniket8195/DSA_DOC",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.tech}</p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300"
                >
                  <FiGithub className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
