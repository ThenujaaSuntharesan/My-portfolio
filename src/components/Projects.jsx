"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FiGithub, FiExternalLink, FiCode, FiChevronUp } from "react-icons/fi"
import project1Img from "../assets/projects/project-1.jpg"
import project2Img from "../assets/projects/project-2.jpg"
import project3Img from "../assets/projects/project-3.jpg"
import project4Img from "../assets/projects/project-4.jpg"
import project5Img from "../assets/projects/project-5.jpg"

const Projects = () => {
  const { theme } = useTheme()
  const [activeTab, setActiveTab] = useState("all")
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "MyBete - SDGP Project",
      description:
        "A personalized diabetes management application for individuals with diabetes, those without diabetes, and those unsure of their status. Integrated real-time glucose tracking, symptom assessment, personalized health recommendations, report uploading, exercise suggestions, and analytics visualization.",
      image: project1Img,
      technologies: ["Flutter", "Firebase"],
      category: "mobile",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 2,
      title: "Personal Finance Tracker",
      description:
        "A comprehensive financial management tool for tracking expenses and income transactions. The system supports bulk data uploads, advanced filtering and sorting, and generates detailed financial summaries.",
      image: project2Img,
      technologies: ["Python", "tkinter", "JSON"],
      category: "desktop",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 3,
      title: "FitGlow Website",
      description:
        "A website promoting the Sustainable Development Goal of good health and well-being. Includes user profile section for personalized interactions, gallery page to display relevant content, and responsive sitemap to improve navigation and user accessibility.",
      image: project3Img,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "web",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 4,
      title: "Student Management System",
      description:
        "A reliable student information management system with functionalities for seat allocation, registration, removal, and marks recording. Leveraged array structures and incorporated object-oriented principles.",
      image: project4Img,
      technologies: ["Java", "OOP"],
      category: "desktop",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      id: 5,
      title: "Real Time Ticket Management System",
      description:
        "A multithreaded system for efficient ticket processing, ensuring seamless vendor-customer interactions through synchronized operations. Designed and implemented RESTful APIs for system configuration, process management, and real-time summary visualization.",
      image: project5Img,
      technologies: ["Java", "SpringBoot", "Angular", "JSON"],
      category: "web",
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "desktop", label: "Desktop" },
  ]

  const toggleProjectDetails = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null)
    } else {
      setExpandedProject(projectId)
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#0077B6]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#0077B6] mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
            Here are some of the projects I've worked on during my academic journey. Each project has helped me develop
            different skills and expertise.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className={`inline-flex p-1 rounded-xl ${theme === "dark" ? "bg-neutral-800" : "bg-white shadow-md"}`}>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-[#0077B6] text-white"
                    : theme === "dark"
                      ? "text-neutral-300 hover:text-white"
                      : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`rounded-xl overflow-hidden shadow-lg ${
                theme === "dark" ? "bg-neutral-800" : "bg-white"
              } transition-all duration-300`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs font-medium bg-[#0077B6]/80 text-white rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <AnimatePresence>
                  {expandedProject === project.id ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className={`mb-4 text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                        {project.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.p
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`mb-4 text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
                    >
                      {project.description.length > 150
                        ? `${project.description.substring(0, 150)}...`
                        : project.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.links.github}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-lg ${
                        theme === "dark" ? "bg-neutral-700 hover:bg-neutral-600" : "bg-neutral-100 hover:bg-neutral-200"
                      }`}
                      aria-label="View GitHub Repository"
                    >
                      <FiGithub className="text-[#0077B6]" />
                    </motion.a>
                    <motion.a
                      href={project.links.live}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-lg ${
                        theme === "dark" ? "bg-neutral-700 hover:bg-neutral-600" : "bg-neutral-100 hover:bg-neutral-200"
                      }`}
                      aria-label="View Live Demo"
                    >
                      <FiExternalLink className="text-[#0077B6]" />
                    </motion.a>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleProjectDetails(project.id)}
                    className="flex items-center text-sm font-medium text-[#0077B6]"
                  >
                    {expandedProject === project.id ? (
                      <>
                        Hide Details
                        <FiChevronUp className="ml-1" />
                      </>
                    ) : (
                      <>
                        View Details
                        <FiCode className="ml-1" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
