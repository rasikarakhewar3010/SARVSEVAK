"use client";
import { FaGlobeAmericas, FaUserCheck, FaComments, FaHeadphones } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext"; // adjust path if needed

const featuresData = {
  en: [
    {
      icon: <FaGlobeAmericas className="h-6 w-6 text-[#FF9933]" />,
      title: "Multilingual Support",
      description:
        "Communicate across 10+ languages with contextual translations. Supports regional phrases and cultural idioms.",
    },
    {
      icon: <FaUserCheck className="h-6 w-6 text-[#FF9933]" />,
      title: "Cultural Awareness",
      description:
        "Adapts tone and style based on region. Handles taboos and greetings as per local norms.",
    },
    {
      icon: <FaComments className="h-6 w-6 text-[#FF9933]" />,
      title: "Sentiment Detection",
      description: "Detects user emotions and responds with empathy. Escalates critical tones.",
    },
    {
      icon: <FaHeadphones className="h-6 w-6 text-[#FF9933]" />,
      title: "Smart Human Escalation",
      description:
        "Hands off to a human agent when needed, passing chat context and emotion summary.",
    },
  ],
  hi: [
    {
      icon: <FaGlobeAmericas className="h-6 w-6 text-[#FF9933]" />,
      title: "बहुभाषी समर्थन",
      description:
        "10+ भाषाओं में संवाद करें, क्षेत्रीय वाक्यांशों और सांस्कृतिक मुहावरों का समर्थन करता है।",
    },
    {
      icon: <FaUserCheck className="h-6 w-6 text-[#FF9933]" />,
      title: "सांस्कृतिक जागरूकता",
      description: "क्षेत्र के अनुसार लहजा और शैली को अनुकूलित करता है। स्थानीय नियमों के अनुसार शिष्टाचार।",
    },
    {
      icon: <FaComments className="h-6 w-6 text-[#FF9933]" />,
      title: "भावना पहचान",
      description: "उपयोगकर्ता की भावनाओं का पता लगाता है और सहानुभूति के साथ प्रतिक्रिया करता है।",
    },
    {
      icon: <FaHeadphones className="h-6 w-6 text-[#FF9933]" />,
      title: "स्मार्ट मानव हस्तांतरण",
      description: "आवश्यक होने पर मानव एजेंट को संदर्भ और भावनात्मक सारांश के साथ सौंपता है।",
    },
  ],
  // Add more languages here following the same structure, or fallback to English
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = (index) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
});

export default function KeyFeaturesSection() {
  const { language } = useContext(LanguageContext);

  // Fallback to English if current language features not found
  const features = featuresData[language] || featuresData["en"];

  return (
    <section
      className="py-24 bg-gradient-to-br from-[#FFF5E0] via-[#FDF2E9] to-[#f8f8f8]"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#05445E] mb-4">
            <span className="inline-block bg-gradient-to-r from-[#FF9933] to-[#FFD580] text-transparent bg-clip-text">
              {/* You can localize this heading too if needed */}
              {language === "hi" ? "मुख्य विशेषताएं" : "Core Features"}
            </span>
          </h2>
          <p className="text-lg text-[#222] font-medium max-w-3xl mx-auto">
            {language === "hi"
              ? "विभिन्न उपयोगकर्ताओं के लिए भारत भर में व्यावहारिकता और उद्देश्य के साथ निर्मित। सरल, मापनीय, और छात्र-निर्मित।"
              : "Built with practicality and purpose for diverse users across India. Simple, scalable, and student-built."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              whileHover="hover"
              className="h-full w-full"
            >
              <div className="p-[1px] bg-gradient-to-tr from-[#FF9933] to-[#FFD580] rounded-xl shadow-md hover:shadow-2xl hover:ring-2 hover:ring-[#FF9933]/60 transition duration-300">
                <div className="bg-white rounded-xl p-6 h-full flex flex-col">
                  <div className="mb-4 p-4 bg-[#FFEDD5]/60 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#05445E] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#222] leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
