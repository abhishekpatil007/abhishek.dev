"use client";

import { motion } from "framer-motion";
import { LightBulbIcon, ClipboardDocumentCheckIcon, PaintBrushIcon, CodeBracketIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useInView } from "framer-motion";

const steps = [
  {
    icon: LightBulbIcon,
    title: "Discovery & Consultation",
    description: "We start with a conversation to understand your goals, needs, and vision for the project.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Planning & Proposal",
    description: "I outline the project scope, timeline, and deliverables, ensuring we're aligned before work begins.",
  },
  {
    icon: PaintBrushIcon,
    title: "Design & Prototyping",
    description: "I create wireframes and design mockups for your feedback, focusing on user experience and aesthetics.",
  },
  {
    icon: CodeBracketIcon,
    title: "Development",
    description: "I build your solution using modern, scalable technologies, keeping you updated throughout the process.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Launch & Support",
    description: "After launch, I provide ongoing support and updates to ensure your project's continued success.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="relative py-32 bg-black">
      {/* Glowing vertical timeline accent */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-1 bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent rounded-full blur-lg h-full" />
      </div>
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-emerald-500 font-mono text-sm tracking-wider mb-4 block"
          >
            WORKFLOW
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            My Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A transparent, collaborative approach from idea to launch.
          </motion.p>
        </div>
        <ol className="relative flex flex-col gap-12 md:gap-16 items-center">
          {steps.map((step, idx) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
              className="relative w-full max-w-2xl group"
            >
              {/* Timeline dot and connector */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center z-10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 shadow-lg flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-emerald-500/40 to-transparent mt-1" />
                )}
              </div>
              {/* Card */}
              <div className="ml-0 md:ml-12 bg-black/60 border border-emerald-500/10 rounded-2xl shadow-xl backdrop-blur-md px-8 py-8 md:py-10 relative z-20 transition-all duration-300 group-hover:shadow-emerald-500/20">
                <div className="flex items-center gap-4 mb-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-lg shadow-md border-2 border-emerald-500/30 animate-pulse">
                    {idx + 1}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-0 group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
} 