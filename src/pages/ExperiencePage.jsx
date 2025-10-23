import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import devRolin from '../../public/images/dev.png';
import den from '../../public/images/den.jfif';

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      company: "DevRolin",
      position: "Web Developer Intern",
      department: "Web Development",
      location:
        "Oric Pak Korea Building, Arid Agriculture University Rawalpindi, Pakistan",
      type: "On-site",
      image: devRolin,
      startDate: "07/Sep/2025",
      endDate: "07/Dec/2025",
      duration: "3 Months (Ongoing)",
      status: "Continue",
    },
    {
      id: 2,
      company: "Digital Empowerment Network (DEN)",
      position: "Web Development Virtual Intern",
      department: "IT Department",
      location: "Remote",
      type: "Remote",
      image: den,
      startDate: "4/June/2024",
      endDate: "4/Sep/2024",
      duration: "3 Months",
      status: "Completed",
    },
  ];

  return (
    <Layout>
      <section className="py-12 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-white to-gray-50">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-3xl font-extrabold text-center mb-14 text-gray-900 tracking-tight"
        >
          My <span className="text-amber-700 underline">Experience</span> 💼
        </motion.h1>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Left - Company Logo */}
              <div className="flex-shrink-0 w-28 h-28">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-full h-full object-contain rounded-xl border border-gray-200 shadow-sm"
                />
              </div>

              {/* Right - Experience Info */}
              <div className="flex flex-col w-full text-center sm:text-left">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {exp.position}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exp.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>

                <p className="text-gray-700 mt-1 font-medium">
                  {exp.company}
                </p>
                <p className="text-gray-500 text-sm">
                  {exp.department} • {exp.type}
                </p>

                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>
                    📍 <span className="font-medium">{exp.location}</span>
                  </p>
                  <p>
                    🗓️ {exp.startDate} - {exp.endDate}
                  </p>
                  <p>
                    ⏳ Duration:{" "}
                    <span className="font-medium">{exp.duration}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
