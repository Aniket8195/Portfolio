import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function ResumeViewer() {
  const resumeLink = "https://drive.google.com/file/d/1rlXIdtsL37gtFNfdBtyvrri2pH5kwz1a/preview"; // Embed link
  const downloadLink = "https://drive.google.com/uc?export=download&id=1rlXIdtsL37gtFNfdBtyvrri2pH5kwz1a"; // Direct download link

  return (
    <section id="resume" className="py-20 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Resume
      </motion.h2>

      <div className="w-full max-w-4xl h-[500px] shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <iframe
          src={resumeLink}
          className="w-full h-full"
          title="Aniket Patil Resume"
          allow="fullscreen"
        ></iframe>
      </div>

      <motion.a
        href={downloadLink}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 shadow-md hover:bg-blue-700 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        download
      >
        <FiDownload className="w-5 h-5" />
        Download Resume
      </motion.a>
    </section>
  );
}
