'use client';

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import emailjs from '@emailjs/browser';
import { useInView } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/abhishekpatil007",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abhishek-patil-38032b1b4/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/abhishek.patil_",
    icon: "instagram",
  },
];

const contactInfo = [
  {
    icon: EnvelopeIcon,
    title: "Email",
    value: "abhishek01patil@gmail.com",
    link: "mailto:abhishek01patil@gmail.com",
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    value: "+91 7892736965",
    link: "tel:+917892736965",
  },
  {
    icon: MapPinIcon,
    title: "Location",
    value: "Bengaluru, India",
    link: "https://maps.google.com/?q=Bengaluru,India",
  },
  {
    icon: GlobeAltIcon,
    title: "Timezone",
    value: "Indian Standard Time (IST)",
    link: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Abhishek Patil",
      };

      await emailjs.send(
        'service_ygqlthc', // Your EmailJS service ID
        'template_3h6gotm', // Your EmailJS template ID
        templateParams,
        '3nmhFlYBUgqs6JV2r' // Your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section ref={ref} className="relative py-32 bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-emerald-500 font-mono text-sm tracking-wider mb-4 block"
            >
              GET IN TOUCH
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 hover:text-emerald-400 transition-colors cursor-pointer"
              onClick={() => window.open('https://calendly.com/abhishek01patil/30min', '_blank', 'noopener noreferrer')}
              tabIndex={0}
              role="link"
              aria-label="Book a call with Abhishek Patil via Calendly"
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
            >
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
            </motion.p>
            <motion.a
              href="https://calendly.com/abhishek01patil/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-emerald-500 text-black font-semibold rounded-lg shadow-lg hover:bg-emerald-400 transition-all duration-300 mb-4"
            >
              Book a Call
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent rounded-2xl" />
              <form onSubmit={handleSubmit} className="relative bg-black/50 rounded-2xl p-8 border border-gray-800/50">
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-500">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                    {errorMessage}
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-emerald-500 text-black font-medium rounded-lg hover:bg-emerald-400 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-black/50 rounded-xl border border-gray-800/50 hover:border-emerald-500/50 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <info.icon className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-gray-400">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-800/50">
                <h3 className="text-lg font-semibold text-white mb-6">Connect with me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-black/50 rounded-lg border border-gray-800/50 hover:border-emerald-500/50 transition-colors group"
                      whileHover={{ y: -2 }}
                    >
                      <span className="text-white group-hover:text-emerald-400 transition-colors">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="pt-8 border-t border-gray-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-gray-400">
                    Available for freelance work
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 