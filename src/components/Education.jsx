"use client"

import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FiCalendar, FiBookOpen, FiAward } from "react-icons/fi"

const Education = () => {
  const { theme } = useTheme()

  const educationData = [
    {
      institution: "University of Westminster (Informatics Institute of Technology)",
      degree: "BEng (Hons) Software Engineering",
      period: "Jan 2024 - Present",
      details: [
        "Year 01 (Level 04) Modules: Computer Systems Fundamentals, Mathematics for Computing, Web Design and Development, Software Development I, Software Development II, Trends in Computer Science",
        "Year 02 (Level 05) Modules: Software Development Group Project, Object Oriented Programming, Database Systems, Software Engineering Principles and Practice, Data Structures and Algorithms, Machine Learning and Data Mining",
      ],
      icon: "🎓",
    },
    {
      institution: "T/Sri Shanmuga Hindu Ladies College",
      degree: "GCE Advanced Level - Physical Science Stream",
      period: "Jan 2018 - Feb 2021",
      details: ["3S with A in English Language"],
      icon: "🏫",
    },
    {
      institution: "T/Sri Shanmuga Hindu Ladies College",
      degree: "GCE Ordinary Level",
      period: "Jan 2016 - Dec 2017",
      details: ["8A B"],
      icon: "📚",
    },
  ]

  const certifications = [
    "Spring Boot 2.0 Essential Training",
    "Java Object-Oriented Programming",
    "Angular Essential Training",
    "Figma Essential Training: The Basics",
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#0077B6]">Education</span>
          </h2>
          <div className="w-20 h-1 bg-[#0077B6] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`col-span-1 ${theme === "dark" ? "bg-neutral-800/50" : "bg-white shadow-md"} rounded-xl p-6 h-full`}
          >
            <div className="flex items-center justify-center mb-6">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  theme === "dark" ? "bg-neutral-700" : "bg-neutral-100"
                }`}
              >
                <FiAward className="text-[#0077B6] text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mb-6">Certifications</h3>
            <ul className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center p-3 rounded-xl text-left ${theme === "dark" ? "bg-neutral-700/50" : "bg-neutral-50"}`}
                >
                  <FiBookOpen className="text-[#0077B6] mr-3 flex-shrink-0" />
                  <span>{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2 h-full"
          >
            <div className="relative h-full">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#0077B6]"></div>

              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative mb-12 pl-16 text-left"
                >
                  {/* Timeline circle */}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#0077B6] flex items-center justify-center text-white">
                    {item.icon}
                  </div>

                  <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-neutral-800" : "bg-white shadow-md"}`}>
                    <div className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-[#0077B6]/10 text-[#0077B6]">
                      <FiCalendar className="inline mr-2 text-[#0077B6]" />
                      {item.period}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                    <p className={`text-lg mb-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                      {item.institution}
                    </p>

                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#0077B6] mr-2">•</span>
                          <span className={theme === "dark" ? "text-neutral-300" : "text-neutral-700"}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
