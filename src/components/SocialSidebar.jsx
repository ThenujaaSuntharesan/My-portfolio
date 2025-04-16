// "use client"

// import { motion } from "framer-motion"
// import { useTheme } from "./ThemeProvider"
// import { FiLinkedin, FiGithub } from "react-icons/fi"

// const SocialSidebar = () => {
//   const { theme } = useTheme()

//   const socialLinks = [
//     { icon: <FiLinkedin />, url: "https://linkedin.com/in/thenujaa-suntharesan", label: "LinkedIn" },
//     { icon: <FiGithub />, url: "https://github.com/ThenujaaSuntharesan", label: "GitHub" },
//   ]

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5, delay: 1.5 }}
//       className="fixed left-6 bottom-0 z-10 hidden md:flex flex-col items-center"
//     >
//       <div className="flex flex-col items-center">
//         <div className={`w-px h-24 ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-300"}`}></div>

//         {socialLinks.map((link, index) => (
//           <motion.a
//             key={index}
//             href={link.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ y: -5, scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.5 + index * 0.1 }}
//             className={`p-3 text-xl mb-2 transition-colors ${
//               theme === "dark" ? "text-neutral-400 hover:text-[#FF5A5F]" : "text-neutral-600 hover:text-[#FF5A5F]"
//             }`}
//             aria-label={link.label}
//           >
//             {link.icon}
//           </motion.a>
//         ))}
//         <div className={`w-px h-24 ${theme === "dark" ? "bg-neutral-700" : "bg-neutral-300"}`}></div>
//       </div>
//     </motion.div>
//   )
// }

// export default SocialSidebar


"use client"
import { useTheme } from "./ThemeProvider"

const SocialSidebar = () => {
  const { theme } = useTheme()

  return null // Removing the sidebar completely
}

export default SocialSidebar
