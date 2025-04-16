"use client"

import { useState, useEffect } from "react"
import { useTheme } from "./ThemeProvider"
import { motion } from "framer-motion"
import { FiSun, FiMoon } from "react-icons/fi"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setScrolled(window.scrollY > 50)

      // Determine which section is currently in view
      const sections = ["home", "about", "technologies", "education", "projects", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "technologies", label: "Technologies" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-neutral-900/80 backdrop-blur-md"
            : "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a href="#home" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-3xl font-bold">
          <span className="text-[#0077B6]">T</span>
          <span className={theme === "dark" ? "text-white" : "text-neutral-800"}>S</span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? theme === "dark"
                    ? "text-[#0077B6]"
                    : "text-[#0077B6]"
                  : theme === "dark"
                    ? "text-neutral-300 hover:text-white"
                    : "text-neutral-600 hover:text-neutral-900"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0077B6]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className={`p-2 rounded-full ${
            theme === "dark" ? "bg-neutral-800 text-yellow-300" : "bg-neutral-200 text-neutral-700"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </motion.button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <MobileMenu
            navItems={navItems}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            theme={theme}
          />
        </div>
      </div>
    </motion.nav>
  )
}

const MobileMenu = ({ navItems, activeSection, setActiveSection, theme }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-md ${theme === "dark" ? "text-white" : "text-neutral-800"}`}
        aria-label="Toggle menu"
      >
        <div className="w-6 flex flex-col items-end space-y-1.5">
          <motion.span
            animate={{ width: isOpen ? "24px" : "24px", rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className={`h-0.5 ${theme === "dark" ? "bg-white" : "bg-neutral-800"} rounded-full`}
          />
          <motion.span
            animate={{ width: isOpen ? "0px" : "16px", opacity: isOpen ? 0 : 1 }}
            className={`h-0.5 ${theme === "dark" ? "bg-white" : "bg-neutral-800"} rounded-full`}
          />
          <motion.span
            animate={{ width: isOpen ? "24px" : "20px", rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className={`h-0.5 ${theme === "dark" ? "bg-white" : "bg-neutral-800"} rounded-full`}
          />
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-16 right-6 p-4 rounded-lg shadow-lg ${
            theme === "dark" ? "bg-neutral-800" : "bg-white"
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeSection === item.id
                    ? "text-[#0077B6]"
                    : theme === "dark"
                      ? "text-neutral-300"
                      : "text-neutral-600"
                }`}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Navbar
