'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'
import { personalInfo } from '@/lib/data'
import { FiMail, FiMapPin, FiSend, FiLinkedin } from 'react-icons/fi'
import { MagneticButton } from './MagneticButton'

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-lighter" />

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent-cyan bg-accent-cyan/10 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            <span className="gradient-text">Let&apos;s Work Together</span>
          </h2>
          <p className="mt-4 text-lg text-light-muted max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-light mb-6">
              Contact Information
            </h3>
            <p className="text-light-muted mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Let&apos;s create something amazing together.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <MagneticButton>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-light/10 hover:border-accent-blue/50 transition-all group"
                  data-cursor="hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiMail className="text-accent-blue" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-light-muted">Email</p>
                    <p className="text-light font-medium group-hover:gradient-text transition-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>
              </MagneticButton>

              {/* LinkedIn */}
              <MagneticButton>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-light/10 hover:border-accent-blue/50 transition-all group"
                  data-cursor="hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiLinkedin className="text-accent-cyan" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-light-muted">LinkedIn</p>
                    <p className="text-light font-medium group-hover:gradient-text transition-all">
                      Connect with me
                    </p>
                  </div>
                </a>
              </MagneticButton>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-light/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
                  <FiMapPin className="text-accent-purple" size={20} />
                </div>
                <div>
                  <p className="text-sm text-light-muted">Location</p>
                  <p className="text-light font-medium">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <MagneticButton>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-cursor="hover"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <span>✓ Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </MagneticButton>

              {/* Success Message */}
              {submitted && (
                <motion.p
                  className="text-center text-accent-cyan"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
