"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useInView } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I offer end-to-end web development, UI/UX design, mobile app development, backend/API development, performance optimization, and ongoing support.",
  },
  {
    question: "How do we start a project?",
    answer: "Simply reach out via the contact form or WhatsApp. We'll discuss your requirements, goals, and timeline, then I'll provide a proposal and get started!",
  },
  {
    question: "What is your typical project turnaround time?",
    answer: "Project timelines vary based on complexity, but most websites are delivered within 2-4 weeks. I'll provide a clear timeline after our initial discussion.",
  },
  // {
  //   question: "How do you handle payments?",
  //   answer: "Payments are typically split into milestones: an initial deposit, a mid-project payment, and a final payment upon completion. Details are discussed before starting.",
  // },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All my projects are fully responsive and optimized for all devices.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section ref={ref} className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-emerald-500 font-mono text-sm tracking-wider mb-4 block"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="border border-gray-800/50 rounded-lg bg-black/50 overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-emerald-500 transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-gray-400 text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 