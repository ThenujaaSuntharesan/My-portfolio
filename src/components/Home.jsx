"use client"
import { useTheme } from "./ThemeProvider"
import Hero from "./Hero"

const Home = () => {
  const { theme } = useTheme()

  return (
    <div id="home" className="min-h-screen">
      <Hero />
    </div>
  )
}

export default Home

