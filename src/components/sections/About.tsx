'use client';

import { motion } from "framer-motion";
import { 
  CodeBracketIcon, 
  LightBulbIcon, 
  RocketLaunchIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

const values = [
  {
    icon: CodeBracketIcon,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code that stands the test of time."
  },
  {
    icon: LightBulbIcon,
    title: "Innovation",
    description: "Staying ahead of the curve with cutting-edge technologies and modern development practices."
  },
  {
    icon: RocketLaunchIcon,
    title: "Performance",
    description: "Optimizing for speed and efficiency to deliver lightning-fast user experiences."
  }
  // Collaboration will be rendered separately
];

function AnimatedIllustration() {
  const [isActive, setIsActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div 
      className="relative w-full aspect-square rounded-2xl overflow-hidden bg-black/50 border border-gray-800/50 group cursor-pointer"
      onClick={() => setIsActive(!isActive)}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(16,185,129,0.03)_50%,_transparent_75%)] bg-[length:40px_40px]" />
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-emerald-500/5 blur-xl pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isActive ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isActive ? Infinity : 0,
        }}
      />

      {/* Animated Elements */}
      <div className="absolute inset-0">
        {/* Particle Network */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              scale: isActive ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              {/* Particle */}
              <motion.div
                className="w-2 h-2 rounded-full bg-emerald-500/40"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
              {/* Glow */}
              <motion.div
                className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500/20 blur-sm"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Dynamic Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${20 + i * 8},50 Q${50},${30 + i * 5} 80,50`}
              fill="none"
              stroke="rgba(16,185,129,0.1)"
              strokeWidth="0.5"
              animate={{
                d: [
                  `M${20 + i * 8},50 Q${50},${30 + i * 5} 80,50`,
                  `M${20 + i * 8},50 Q${50},${70 - i * 5} 80,50`,
                  `M${20 + i * 8},50 Q${50},${30 + i * 5} 80,50`,
                ],
                strokeWidth: isActive ? [0.5, 1, 0.5] : 0.5,
                stroke: isActive 
                  ? ["rgba(16,185,129,0.1)", "rgba(16,185,129,0.2)", "rgba(16,185,129,0.1)"]
                  : "rgba(16,185,129,0.1)",
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </svg>

        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative w-40 h-40"
            animate={{
              rotate: [0, 360],
              scale: isActive ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-emerald-500/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                borderColor: isActive 
                  ? ["rgba(16,185,129,0.3)", "rgba(16,185,129,0.5)", "rgba(16,185,129,0.3)"]
                  : "rgba(16,185,129,0.3)",
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Inner Ring */}
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-emerald-500/20"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.4, 0.2],
                borderColor: isActive 
                  ? ["rgba(16,185,129,0.2)", "rgba(16,185,129,0.4)", "rgba(16,185,129,0.2)"]
                  : "rgba(16,185,129,0.2)",
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            {/* Center Dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
                backgroundColor: isActive 
                  ? ["rgba(16,185,129,0.5)", "rgba(16,185,129,0.8)", "rgba(16,185,129,0.5)"]
                  : "rgba(16,185,129,0.5)",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        {[
          { icon: "⚛️", x: "20%", y: "30%" },
          { icon: "⚡", x: "70%", y: "40%" },
          { icon: "🚀", x: "30%", y: "70%" },
          { icon: "💻", x: "80%", y: "60%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: item.x,
              top: item.y,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
              scale: isActive ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border border-emerald-500/10" />
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent"
          animate={{
            opacity: isActive ? [0.5, 0.2, 0.5] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isActive ? Infinity : 0,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative py-32 bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Illustration and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <AnimatedIllustration />
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { number: "50+", label: "Projects" },
                { number: "100%", label: "Satisfaction" },
                { number: "24/7", label: "Support" }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-2xl font-bold text-emerald-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-emerald-500 font-mono text-sm tracking-wider mb-4 block">ABOUT ME</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Crafting Digital Experiences with Passion
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I&#39;m a full-stack developer with a passion for creating beautiful, functional, and user-friendly web applications. With expertise in modern web technologies and a keen eye for design, I help businesses transform their ideas into digital reality.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <value.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <UserGroupIcon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      Collaboration
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Working closely with clients&#39; needs and deliver exceptional results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 text-right"
            >
              <a
                href="https://calendly.com/abhishek01patil/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-500 text-black font-medium rounded-md hover:bg-emerald-400 transition-all duration-300 relative overflow-hidden group inline-block"
              >
                <span className="relative z-10">Let&#39;s Work Together</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 