import React from "react";
import Layout from "../components/Layout";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function AboutPage() {
  const personalInfo = {
    name: "Muhammad Muzammil Bashir",
    title: "Web Developer | BS Software Engineering Student",
    university: "International Islamic University, Islamabad (IIUI)",
    location: "Rawalpindi, Pakistan",
    email: "muzammilrawalpindi786@gmail.com",
    bio: "I’m a passionate web developer who loves creating clean, responsive, and functional web apps. With a strong foundation in frontend and continue Learning the backend technologies, I aim to build digital solutions that make a real impact.",
    image: "/src/assets/images/avatar.jfif",
  };

  const expertise = [
    {
      id: 1,
      icon: <FaCode className="text-amber-700 text-xl" />,
      title: "Frontend Development",
      description:
        "Building interactive, user-friendly interfaces using React.js, Next.js, and TailwindCSS.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-amber-700 text-xl" />,
      title: "Backend Development",
      description: "Creating APIs and dynamic systems using PHP, MySQL, and Django.",
    },
    {
      id: 3,
      icon: <FaRocket className="text-amber-700 text-xl" />,
      title: "AI & ML Enthusiast",
      description:
        "Exploring AI integration in web apps and working on ML-based recognition projects.",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Quick Learner",
    "Time Management",
    "Attention to Detail",
  ];

  const goals = [
    "To create scalable, clean, and modern digital products.",
    "To continuously learn and explore AI & ML in web development.",
    "To contribute to impactful open-source and real-world projects.",
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-extrabold text-center mb-14 text-gray-900 tracking-tight"
        >
          About <span className="text-amber-700 underline">Me</span>
        </motion.h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              {personalInfo.name}
            </h2>
            <p className="text-amber-700 font-medium">{personalInfo.title}</p>
            <p className="text-gray-600 text-sm italic">
              {personalInfo.university}
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              {personalInfo.bio}
            </p>

            <div className="mt-6">
              <h3 className="flex items-center gap-1 font-semibold text-gray-800 mb-2">
                <MapPin className="text-amber-700" /> Location
              </h3>
              <p className="text-gray-600">{personalInfo.location}</p>

              <h3 className="flex items-center gap-1 font-semibold text-gray-800 mt-4 mb-2">
                <Mail className="text-amber-700" /> Email
              </h3>
              <p className="text-gray-600">{personalInfo.email}</p>
            </div>
          </motion.div>

          {/* Right: Expertise Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              My Expertise
            </h2>
            {expertise.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 text-center sm:text-left"
              >
                <div
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {item.icon}
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 🌟 Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Soft Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className={`px-4 py-1 rounded-full text-sm font-medium
                  ${
                    i % 5 === 0
                      ? "bg-blue-100 text-blue-600"
                      : i % 5 === 1
                      ? "bg-purple-100 text-purple-600"
                      : i % 5 === 2
                      ? "bg-pink-100 text-pink-600"
                      : i % 5 === 3
                      ? "bg-green-100 text-green-600"
                      : "bg-amber-100 text-amber-700"
                  }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
