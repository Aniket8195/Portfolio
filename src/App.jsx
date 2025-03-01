import { useEffect } from "react"
import React from "react";
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Education from "./components/Education"  
import Contact from "./components/Contact"
import FloatingNav from "./components/FloatingNav"
import { ThemeProvider } from "./components/theme/ThemeProvider"
import { ModeToggle } from "./components/theme/ModeToggle"
import Projects from "./components/Project";
import ResumeViewer from "./components/Resume";
import AP from "./assets/AP .webp"


function App() {

  useEffect(() => {
    document.title = "Aniket Patil Portfolio";
    document.documentElement.style.scrollBehavior = "smooth"
    const faviconElement = document.querySelector("link[rel='icon']");
    faviconElement.href = AP;
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div> */}
        <FloatingNav />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <ResumeViewer />
      </div>
    </ThemeProvider>
  )
}

export default App

