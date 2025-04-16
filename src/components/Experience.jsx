"use client"

import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FiCalendar, FiBriefcase, FiAward } from "react-icons/fi"

const Experience = () => {
  const { theme } = useTheme()

  const experiences = [
    {
      title: "International Problem-Solving Hackathon",
      organization: "University of Westminster",
      description: "Participated in a global hackathon focused on innovative problem-solving.",
      date: "2023",
      type: "hackathon",
    },
    {
      title: "Hult Prize OnCampus",
      organization: "Informatics Institute of Technology",
      description: "Participated to pitch about my SDGP project which was held for the first time.",
      date: "2024",
      type: "competition",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#0077B6]">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-[#0077B6] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-6 rounded-lg border-2 ${
                theme === "dark"
                  ? "border-neutral-800 bg-neutral-900/50 hover:border-[#0077B6]"
                  : "border-neutral-200 bg-white hover:border-[#0077B6]"
              } transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full mr-4 ${theme === "dark" ? "bg-neutral-800" : "bg-neutral-100"}`}>
                  {exp.type === "hackathon" ? (
                    <FiAward className="text-[#0077B6] text-xl" />
                  ) : (
                    <FiBriefcase className="text-[#0077B6] text-xl" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className={theme === "dark" ? "text-neutral-400" : "text-neutral-600"}>{exp.organization}</p>
                </div>
              </div>

              <p className={`mb-4 ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}>{exp.description}</p>

              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                  theme === "dark" ? "bg-neutral-800" : "bg-neutral-100"
                }`}
              >
                <FiCalendar className="mr-2 text-[#0077B6]" />
                {exp.date}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`mt-12 p-6 rounded-lg text-center ${theme === "dark" ? "bg-neutral-800/50" : "bg-neutral-100"}`}
        >
          <h3 className="text-xl font-bold mb-4">Looking for Opportunities</h3>
          <p className={theme === "dark" ? "text-neutral-300" : "text-neutral-700"}>
            I'm currently seeking a software engineering internship to apply my problem-solving skills, technical
            knowledge, and leadership abilities in a dynamic environment.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-6 py-3 bg-[#0077B6] text-white rounded-md font-medium transition-all hover:shadow-lg"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
