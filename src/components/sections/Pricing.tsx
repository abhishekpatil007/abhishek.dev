"use client";

import { motion } from "framer-motion";
import { CheckCircleIcon, PlusCircleIcon, CreditCardIcon, ChatBubbleLeftRightIcon, WrenchScrewdriverIcon, GlobeAltIcon, PaintBrushIcon, ChartBarIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const plans = [
  {
    name: "BASIC PLAN",
    price: "₹30,000+",
    description: "For individuals or startups who need a simple yet effective online presence.",
    features: [
      "3 Static Pages (Home, About, Contact)",
      "Mobile Responsive Design",
      "Basic SEO Optimization",
      "Contact Form",
      "Hosting & Deployment Support (Charged separately)"
    ],
    support: "1 Week Post-Delivery Bug Fixes"
  },
  {
    name: "STANDARD PLAN",
    price: "₹50,000+",
    description: "Ideal for businesses ready to scale their digital presence with dynamic content and admin features.",
    features: [
      "5 Dynamic Pages (Home, About, Services, Blog, Contact)",
      "Custom UI with Tailwind/Material UI",
      "On-Page SEO + Speed Optimization",
      "Admin Panel for Blog/Services",
      "Google Maps Integration",
      "Hosting & Deployment Support"
    ],
    support: "1 Month Maintenance"
  },
  {
    name: "PREMIUM PLAN",
    price: "₹85,000+",
    description: "Perfect for brands that need powerful features, sleek animations, and long-term support.",
    features: [
      "7–10 Dynamic Pages + Admin Panel",
      "Fully Custom UI/UX with Animations (Framer Motion, AOS)",
      "CMS Integration (WordPress, Headless, or Custom)",
      "Blog, Forms, Dashboards",
      "Google Analytics + Advanced SEO",
      "Social Media Integration",
      "SSL, Performance, and Security Setup"
    ],
    support: "1 Months Maintenance + Priority Support"
  }
];

const addons = [
  {
    icon: CalendarDaysIcon,
    name: "Reservation/Booking System",
    price: "₹20,000+",
    desc: "Allow clients to book appointments or reservations directly through your site."
  },
  {
    icon: CreditCardIcon,
    name: "Payment Gateway Integration",
    price: "₹5,000 – ₹10,000",
    desc: "Enable smooth, secure online transactions on your website."
  },
  {
    icon: ChatBubbleLeftRightIcon,
    name: "WhatsApp or Live Chat Setup",
    price: "₹2,000 – ₹5,000",
    desc: "Provide real-time communication options with your website visitors."
  },
  {
    icon: WrenchScrewdriverIcon,
    name: "Monthly Maintenance",
    price: "₹3,000 – ₹7,000",
    desc: "Ensure your website stays updated, secure, and running smoothly."
  },
  {
    icon: GlobeAltIcon,
    name: "Hosting & Domain Setup",
    price: "₹2,000 – ₹4,000",
    desc: "Get your website live with secure hosting and a custom domain name."
  },
  {
    icon: PaintBrushIcon,
    name: "Figma to React Code Conversion",
    price: "₹15,000 – ₹30,000+",
    desc: "Convert your Figma designs to responsive, production-ready React code."
  },
  {
    icon: ChartBarIcon,
    name: "SEO Optimization",
    price: "₹5,000 – ₹10,000",
    desc: "Optimize your website for search engines to boost organic traffic."
  }
];

const calendly = "https://calendly.com/abhishek01patil/30min";

export default function Pricing() {
  return (
    <section className="relative py-32 bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-mono text-sm tracking-wider mb-4 block"
          >
            PRICING
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Payment Models & Add-Ons
          </motion.h2>
        </div>
        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={
                "relative rounded-2xl bg-black/60 border-2 border-transparent shadow-xl p-8 flex flex-col items-center group overflow-hidden backdrop-blur-lg hover:shadow-emerald-500/40 hover:border-emerald-500/60 transition-all duration-300"
              }
            >
              {/* Glowing gradient border */}
              <div className={"absolute inset-0 rounded-2xl pointer-events-none border-2 border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300"} />
              {/* Plan Icon */}
              <div className={"absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 shadow-lg flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform z-10"}>
                <CheckCircleIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className={"mt-12 text-2xl font-extrabold text-emerald-400 mb-2 tracking-wide drop-shadow-lg"}>{plan.name}</h3>
              <div className="text-4xl font-black text-white mb-2 drop-shadow-lg">{plan.price}</div>
              <div className="text-gray-400 text-base mb-4 text-center font-medium">{plan.description}</div>
              <ul className="mb-6 space-y-2 w-full">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-200">
                    <PlusCircleIcon className="w-5 h-5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={"mt-auto text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-lg mb-4"}>{plan.support}</div>
              <a
                href={calendly}
                target="_blank"
                rel="noopener noreferrer"
                className={"inline-block w-full text-center px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 shadow-lg hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 mt-2"}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
        {/* Add-Ons */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Add-Ons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {addons.map((addon, idx) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="relative rounded-2xl border border-emerald-500/20 bg-black/60 p-7 flex flex-col items-start shadow-xl group overflow-hidden backdrop-blur-lg transition-all duration-300"
              >
                {/* Glowing border on hover */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-emerald-500/40 group-hover:shadow-emerald-500/20 transition-all duration-300" />
                {/* Icon with glow and float */}
                <motion.div
                  className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-400 to-emerald-600 shadow-lg text-white group-hover:shadow-emerald-500/30"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: idx * 0.1 }}
                >
                  <addon.icon className="w-7 h-7" />
                </motion.div>
                <span className="text-lg font-bold text-emerald-400 mb-1 drop-shadow">{addon.name}</span>
                <div className="text-emerald-300 font-extrabold mb-2 text-base">{addon.price}</div>
                <div className="text-gray-400 text-sm font-medium mb-1">{addon.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 