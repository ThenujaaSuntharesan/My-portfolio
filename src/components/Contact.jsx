"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { FiPhone, FiMail, FiMapPin, FiSend, FiAlertCircle, FiCheckCircle } from "react-icons/fi"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const { theme } = useTheme()
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    // Phone validation - optional
    if (formData.phone.trim() && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)
      setSubmitStatus({ success: false, message: "" })

      // Replace these with your actual EmailJS credentials
      const serviceId = "service_qa84zqc" // e.g., 'portfolio_contact'
      const templateId = "template_tibqbpf" // e.g., 'contact_form'
      const userId = "FIeh6bCAHOnShVHOW" // Your EmailJS public key

      emailjs
        .sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
          console.log("Email sent successfully:", result.text)
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          })
          setIsSubmitting(false)
          setSubmitStatus({
            success: true,
            message: "Message sent successfully! I'll get back to you soon.",
          })

          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitStatus({ success: false, message: "" })
          }, 5000)
        })
        .catch((error) => {
          console.error("Error sending email:", error.text)
          setIsSubmitting(false)
          setSubmitStatus({
            success: false,
            message: "Failed to send message. Please try again or contact me directly via email.",
          })
        })
    }
  }

  const contactInfo = [
    {
      icon: <FiPhone className="text-2xl text-[#0077B6]" />,
      title: "Phone",
      details: "+94 77 545 7118",
    },
    {
      icon: <FiMail className="text-2xl text-[#0077B6]" />,
      title: "Email",
      details: "thenujaasuntharesan@gmail.com",
    },
    {
      icon: <FiMapPin className="text-2xl text-[#0077B6]" />,
      title: "Address",
      details: "Colombo, Srilanka",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-[#0077B6]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-[#0077B6] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl text-center ${theme === "dark" ? "bg-neutral-800" : "bg-white shadow-md"}`}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-neutral-700" : "bg-neutral-100"
                  }`}
                >
                  {info.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              <p className={theme === "dark" ? "text-neutral-300" : "text-neutral-700"}>{info.details}</p>
            </motion.div>
          ))}
        </div>

        <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 space-y-6">
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`w-full px-6 py-4 rounded-xl outline-none ${
                    theme === "dark"
                      ? "bg-neutral-800 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-[#0077B6]"
                      : "bg-white text-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-[#0077B6] shadow-md"
                  } ${errors.name ? "border-2 border-red-500" : ""}`}
                />
                {errors.name && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <FiAlertCircle className="mr-1" />
                    {errors.name}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-6 py-4 rounded-xl outline-none ${
                    theme === "dark"
                      ? "bg-neutral-800 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-[#0077B6]"
                      : "bg-white text-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-[#0077B6] shadow-md"
                  } ${errors.email ? "border-2 border-red-500" : ""}`}
                />
                {errors.email && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <FiAlertCircle className="mr-1" />
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (Optional)"
                  className={`w-full px-6 py-4 rounded-xl outline-none ${
                    theme === "dark"
                      ? "bg-neutral-800 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-[#0077B6]"
                      : "bg-white text-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-[#0077B6] shadow-md"
                  } ${errors.phone ? "border-2 border-red-500" : ""}`}
                />
                {errors.phone && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <FiAlertCircle className="mr-1" />
                    {errors.phone}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6 h-full flex flex-col">
            <div className="relative flex-grow">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={7}
                className={`w-full h-full px-6 py-4 rounded-xl outline-none resize-none ${
                  theme === "dark"
                    ? "bg-neutral-800 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-[#0077B6]"
                    : "bg-white text-neutral-800 placeholder:text-neutral-500 focus:ring-2 focus:ring-[#0077B6] shadow-md"
                } ${errors.message ? "border-2 border-red-500" : ""}`}
              />
              {errors.message && (
                <div className="flex items-center text-red-500 text-sm mt-1">
                  <FiAlertCircle className="mr-1" />
                  {errors.message}
                </div>
              )}
            </div>

            <div className="flex justify-end items-center">
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mr-4 flex items-center ${submitStatus.success ? "text-green-500" : "text-red-500"}`}
                >
                  {submitStatus.success ? <FiCheckCircle className="mr-2" /> : <FiAlertCircle className="mr-2" />}
                  {submitStatus.message}
                </motion.div>
              )}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-[#0077B6] text-white rounded-xl font-medium flex items-center gap-2 transition-all hover:shadow-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FiSend />
              </motion.button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
