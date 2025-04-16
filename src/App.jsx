"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Education from "./components/Education"
import BackToTop from "./components/BackToTop"
import SocialSidebar from "./components/SocialSidebar"
import { ThemeProvider } from "./components/ThemeProvider"
import "./App.css"

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

const AppContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Get the theme from ThemeProvider
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)

    // Set up a mutation observer to watch for class changes on the html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark")
          setIsDarkMode(isDark)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`overflow-x-hidden antialiased selection:bg-[#0077B6]/30 selection:text-[#0077B6] ${
        isDarkMode ? "dark bg-black text-neutral-300" : "bg-white text-neutral-800"
      }`}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className={`absolute top-0 z-[-2] h-screen w-screen ${
            isDarkMode
              ? "bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,119,182,0.15),rgba(255,255,255,0))]"
              : "bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,119,182,0.1),rgba(255,255,255,0))]"
          }`}
        ></div>
      </div>

      <Navbar />
      <SocialSidebar />

      <div className="container mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Projects />
        <Contact />
      </div>

      <footer className="py-12 mt-8 bg-transparent">
        <div className="container mx-auto px-8 flex flex-col items-center justify-center">
          <h3 className="text-xl font-light text-neutral-600 mb-6">BUILT WITH</h3>
          <div className="flex items-center justify-center space-x-12 mb-4">
            <a href="https://react.dev" target="_blank" rel="noreferrer" className="group flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
                className="w-10 h-10 text-[#61DAFB] group-hover:scale-110 transition-transform"
              >
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </a>

            <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="group flex flex-col items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 410 404"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform"
              >
                <path
                  d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
                  fill="url(#paint1_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="6.00017"
                    y1="32.9999"
                    x2="235"
                    y2="344"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#41D1FF" />
                    <stop offset="1" stopColor="#BD34FE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="194.651"
                    y1="8.81818"
                    x2="236.076"
                    y2="292.989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFEA83" />
                    <stop offset="0.0833333" stopColor="#FFDD35" />
                    <stop offset="1" stopColor="#FFA800" />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
                className="w-10 h-10 group-hover:scale-110 transition-transform"
              >
                <g clipPath="url(#prefix__clip0)">
                  <path
                    fill="#38bdf8"
                    fillRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0H54V32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  )
}

export default App
