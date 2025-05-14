'use client';

import { motion } from "framer-motion";
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  WrenchScrewdriverIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";
import { scaleIn } from "@/lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Modern web applications built with React, Next.js, and Tailwind CSS",
    icon: CodeBracketIcon,
    features: ["Responsive Design", "Performance Optimized", "SEO Friendly"],
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    icon: DevicePhoneMobileIcon,
    features: ["React Native", "Native Performance", "Offline Support"],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with",
    icon: PaintBrushIcon,
    features: ["User-Centered", "Modern Aesthetics", "Intuitive Navigation"],
  },
  {
    title: "Backend Development",
    description: "Robust and scalable backend systems and APIs",
    icon: ServerIcon,
    features: ["Node.js/Python", "REST/GraphQL", "Database Design"],
  },
  {
    title: "Performance Optimization",
    description: "Speed up your applications and improve user experience",
    icon: RocketLaunchIcon,
    features: ["Load Time Optimization", "Caching", "Code Splitting"],
  },
  {
    title: "E-commerce Solutions",
    description: "Scalable online stores with secure payment processing",
    icon: ShoppingCartIcon,
    features: ["Secure Payments", "Inventory Management", "Analytics"],
  },
  {
    title: "SEO Optimization",
    description: "Improve your search rankings and drive organic traffic",
    icon: MagnifyingGlassIcon,
    features: ["Keyword Research", "Technical SEO", "Content Strategy"],
  },
  {
    title: "Maintenance & Support",
    description: "Reliable ongoing support and maintenance for your applications",
    icon: WrenchScrewdriverIcon,
    features: ["Regular Updates", "Security Monitoring", "Performance Tuning"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative py-32 bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-emerald-500 font-mono text-sm tracking-wider mb-4 block">WHAT I DO</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Development Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end software solutions tailored to your needs, from concept to deployment and beyond.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group relative h-full"
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-emerald-500/10 rounded-lg transform transition-transform group-hover:scale-105" />
              <div className="relative p-5 md:p-6 rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm h-full flex flex-col">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3 md:mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Ready to transform your ideas into reality?</p>
          <button className="px-8 py-4 bg-emerald-500 text-black font-medium rounded-md hover:bg-emerald-400 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
} 