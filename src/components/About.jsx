"use client"

import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FiFileText } from "react-icons/fi"
import aboutImg from "../assets/about.jpg"

const About = () => {
  const { theme } = useTheme()

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[#0077B6]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#0077B6] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden">
              <img
                src={aboutImg || "/placeholder.svg"}
                alt="Thenujaa Suntharesan"
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-tr from-neutral-900/80 to-transparent"
                    : "bg-gradient-to-tr from-white/50 to-transparent"
                }`}
              ></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center h-full"
          >
            <h3 className="text-2xl font-bold mb-4 text-left">
              Software Engineering <span className="text-[#0077B6]">Undergraduate</span>
            </h3>
            <p className={`mb-6 text-left ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}>
            A passionate Software Engineering undergraduate at the University of Westminster, specializing in developing user-focused applications using Java, Python, Spring Boot, and modern web technologies. 
            My academic background and hands-on project experience have equipped me with strong problem-solving and collaboration skills.
            I thrive in dynamic environments where I can grow continuously and contribute through innovative solutions. I am actively seeking opportunities to apply my technical and leadership abilities in real-world settings.
            </p>

            <motion.a
              href="https://github.com/ThenujaaSuntharesan/resume/raw/main/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#0077B6] text-white rounded-xl font-medium flex items-center gap-2 transition-all hover:shadow-lg w-fit"
              rel="noreferrer"
            >
              <FiFileText className="text-white" />
              Get Resume
            </motion.a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
      </div>
    </section>
  )
}

export default About
