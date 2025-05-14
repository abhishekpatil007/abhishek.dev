'use client';

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import { useRef, useState } from "react";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion"
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setParallax({ x, y });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${parallax.x * 10}px, ${parallax.y * 10}px, 0)`
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-black to-black" />
        </motion.div>
        
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 20}px, 0)`
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate3d(${parallax.x * (10 + i)}px, ${parallax.y * (10 + i)}px, 0)`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl"
          style={{
            transform: `translate3d(${parallax.x * 30}px, ${parallax.y * 30}px, 0)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [-20, 20, -20],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl"
          style={{
            transform: `translate3d(${parallax.x * 20}px, ${parallax.y * 20}px, 0)`
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [20, -20, 20],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Accent Lines */}
        <motion.div
          className="absolute inset-0"
          style={{
            transform: `translate3d(${parallax.x * 10}px, ${parallax.y * 10}px, 0)`
          }}
        >
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
        </motion.div>

        {/* Animated Rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-emerald-500/10"
          style={{
            transform: `translate3d(${parallax.x * 15}px, ${parallax.y * 15}px, 0)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-emerald-500/10"
          style={{
            transform: `translate3d(${parallax.x * 10}px, ${parallax.y * 10}px, 0)`
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-4 z-20">
        {/* Social Links */}
        <motion.div
          className="absolute top-8 right-8 flex gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/abhishekpatil007" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-patil-38032b1b4/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/abhishek.patil_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-emerald-500 font-mono text-sm tracking-wider">WEB DEVELOPER & DESIGNER</span>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-4">
            <span className="block mb-4">Abhishek Patil</span>
            <TypewriterComponent
              options={{
                strings: [
                  "Crafting Digital Experiences",
                  "Building Modern Web Apps",
                  "Creating Beautiful Interfaces",
                  "Transforming Ideas into Reality"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into elegant, high-performance web solutions that help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm text-emerald-500 bg-emerald-500/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/917892736965"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-emerald-500 text-black font-medium rounded-md hover:bg-emerald-400 transition-all duration-300 relative overflow-hidden flex items-center justify-center"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-patil-38032b1b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 border border-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-800/50 transition-all duration-300 relative overflow-hidden flex items-center justify-center"
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "5+", label: "Years Experience" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl font-bold text-emerald-500 mb-2 group-hover:text-emerald-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-emerald-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 