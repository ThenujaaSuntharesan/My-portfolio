"use client"

import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FaJava } from "react-icons/fa"
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMysql,
  SiSpring,
  SiFlutter,
  SiFirebase,
} from "react-icons/si"

const Technologies = () => {
  const { theme } = useTheme()

  const technologies = [
    { name: "Java", icon: <FaJava className="text-5xl text-[#007396]" /> },
    { name: "Python", icon: <SiPython className="text-5xl text-[#3776AB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-5xl text-[#F7DF1E]" /> },
    { name: "HTML", icon: <SiHtml5 className="text-5xl text-[#E34F26]" /> },
    { name: "CSS", icon: <SiCss3 className="text-5xl text-[#1572B6]" /> },
    { name: "React", icon: <SiReact className="text-5xl text-[#61DAFB]" /> },
    { name: "MySQL", icon: <SiMysql className="text-5xl text-[#4479A1]" /> },
    { name: "Spring Boot", icon: <SiSpring className="text-5xl text-[#6DB33F]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-5xl text-[#02569B]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-5xl text-[#FFCA28]" /> },
  ]

  const iconVariants = (index) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: (index % 3) + 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  })

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#0077B6]">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-[#0077B6] mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
            I've worked with a variety of technologies throughout my journey as a software engineering student. Here are
            the main technologies I'm proficient in.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`flex flex-col items-center justify-center p-6 rounded-xl ${
                theme === "dark" ? "bg-neutral-800/50 hover:bg-neutral-800" : "bg-white hover:bg-neutral-50 shadow-md"
              } transition-all duration-300`}
            >
              <motion.div variants={iconVariants(index)} initial="initial" animate="animate" className="mb-4">
                {tech.icon}
              </motion.div>
              <p className="font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
