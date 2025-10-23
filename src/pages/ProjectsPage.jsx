import React from "react";
import Layout from "../components/Layout";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Employee Management System",
      description:
        "Manages employee records, attendance, and HR approvals with secure authentication.",
      image: "/assets/ems.png",
      link: "https://yourprojectlink.com",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Auth",
      ],
    },
    {
      id: 2,
      title: "HRS Mart (E-commerce Platform)",
      description:
        "Modern e-commerce website for browsing, searching, and purchasing products with cart and order management.",
      image: "/assets/hrsmart.png",
      link: "https://yourprojectlink.com",
      technologies: ["React.js", "TailwindCSS"],
    },
    {
      id: 3,
      title: "Discover Pakistan Tour & Travel",
      description:
        "Responsive landing page showcasing tour packages with MVT structure using Django.",
      image: "/assets/hotel.png",
      link: "https://yourprojectlink.com",
      technologies: ["Python", "Django", "TailwindCSS"],
    },
    {
      id: 4,
      title: "MZ Hotel Booking System",
      description:
        "Hotel management web app with room booking, admin dashboard, and user authentication.",
      image: "/assets/hotel.png",
      link: "https://yourprojectlink.com",
      technologies: ["HTML", "JavaScript", "TailwindCSS", "PHP", "MySQL"],
    },
    {
      id: 5,
      title: "Blood Donation Platform",
      description:
        "Connects blood donors and recipients with real-time matching and donation tracking system.",
      image: "/assets/blood.png",
      link: "https://yourprojectlink.com",
      technologies: ["HTML", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    },
    {
      id: 6,
      title: "Cloudinary Photos Gallery",
      description:
        "Next.js + Cloudinary app for uploading, searching, creating albums, and AI-based image filters.",
      image: "/assets/gallery.png",
      link: "https://yourprojectlink.com",
      technologies: [
        "Next.js",
        "Cloudinary",
        "TailwindCSS",
        "Shadcn.ui",
        "Postman",
      ],
    },
    {
      id: 7,
      title: "Portfolio Website",
      description:
        "Personal portfolio site showcasing projects, education, and contact details with a modern UI.",
      image: "/assets/portfolio.png",
      link: "https://yourprojectlink.com",
      technologies: ["Next.js", "TailwindCSS", "Framer Motion", "React Icons"],
    },
  ];

  return (
    <Layout>
      <section className="py-12 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Page Header */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-14 text-gray-900 tracking-tight">
          My{" "}
          <span className="text-amber-700 underline decoration-4 underline-offset-4">
            Projects
          </span>{" "}
          <Code2 className="inline w-6 h-6 text-amber-700 mb-1" />
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between items-center bg-white/80 backdrop-blur-sm border border-amber-100 shadow-md hover:shadow-2xl rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 w-full max-w-sm"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-5 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm text-center mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border shadow-sm 
                      ${
                        i % 4 === 0
                          ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                          : i % 4 === 1
                          ? "bg-pink-50 text-pink-700 border-pink-200"
                          : i % 4 === 2
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-amber-700 to-amber-600 text-white font-medium px-6 py-2.5 rounded-lg shadow-md hover:from-amber-800 hover:to-amber-700 transition-all duration-300"
              >
                Visit Website
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
