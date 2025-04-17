"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FiArrowRight, FiLinkedin, FiGithub, FiMail } from "react-icons/fi"
import theanBImg from "../assets/projects/theanB.jpg"
import theanImg from "../assets/projects/thean.jpg"

const Hero = () => {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [welcomeIndex, setWelcomeIndex] = useState(0)

  const welcomeMessages = ["Welcome I'm", "Welkom I'm", "Vanakkam I'm", "Ayubowan I'm"]

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeIndex((prev) => (prev + 1) % welcomeMessages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#0077B6] font-medium mb-2 text-sm text-left"
            >
              {welcomeMessages[welcomeIndex]}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-2 text-left"
            >
              Thenujaa <span className="text-[#0077B6]">Suntharesan</span>
              <span className="text-[#0077B6]">.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className={`text-xl md:text-2xl font-medium mb-6 text-left ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Software Engineering Undergraduate
            </motion.h2>

            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`text-base md:text-lg mb-8 max-w-xl text-left ${
                theme === "dark" ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              Motivated undergraduate reading BEng (Hons) Software Engineering at University of Westminster, with
              expertise in multiple programming languages and frameworks. Passionate about developing user-centric
              applications.
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col space-y-6"
            >
              <div className="flex space-x-4">
                <motion.a
                  href="mailto:thenujaasuntharasan@gmail.com"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full ${
                    theme === "dark" ? "bg-neutral-800 hover:bg-neutral-700" : "bg-white hover:bg-neutral-100"
                  } shadow-md`}
                >
                  <FiMail className="text-[#0077B6] text-xl" />
                </motion.a>
                <motion.a
                  href="http://linkedin.com/in/thenujaa-suntharesan-475726310"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full ${
                    theme === "dark" ? "bg-neutral-800 hover:bg-neutral-700" : "bg-white hover:bg-neutral-100"
                  } shadow-md`}
                >
                  <FiLinkedin className="text-[#0077B6] text-xl" />
                </motion.a>
                <motion.a
                  href="https://github.com/ThenujaaSuntharesan"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full ${
                    theme === "dark" ? "bg-neutral-800 hover:bg-neutral-700" : "bg-white hover:bg-neutral-100"
                  } shadow-md`}
                >
                  <FiGithub className="text-[#0077B6] text-xl" />
                </motion.a>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#0077B6] text-white rounded-xl font-medium flex items-center gap-2 transition-all hover:shadow-lg"
                >
                  Get In Touch
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <FiArrowRight />
                  </motion.span>
                </motion.a>

                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-medium border-2 transition-all ${
                    theme === "dark"
                      ? "border-neutral-700 text-white hover:border-[#0077B6]"
                      : "border-neutral-300 text-neutral-800 hover:border-[#0077B6]"
                  }`}
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#0077B6]"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-[#0077B6]"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-[#0077B6]"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-[#0077B6]"></div>

              {/* Animated dots */}
              <motion.div
                className="absolute -top-2 left-1/2 w-4 h-4 rounded-full bg-[#0077B6]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-2 left-1/2 w-4 h-4 rounded-full bg-[#0077B6]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-[#0077B6]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              ></motion.div>
              <motion.div
                className="absolute top-1/2 -right-2 w-4 h-4 rounded-full bg-[#0077B6]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              ></motion.div>

              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  initial={{ filter: "grayscale(100%)" }}
                  animate={{
                    filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={isHovered ? theanImg : theanBImg}
                    alt="Thenujaa Suntharesan"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ borderWidth: 0 }}
                  animate={{
                    borderWidth: isHovered ? 4 : 0,
                    borderColor: "#0077B6",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ borderStyle: "solid" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
