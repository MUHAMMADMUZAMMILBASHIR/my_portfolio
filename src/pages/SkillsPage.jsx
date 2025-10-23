import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const skills = [
    {
      id: 1,
      title: "FrontEnd",
      images: [
        "/public/images/html.png",
        "/public/images/css.png",
        "/public/images/js.png",
        "/public/images/react.png",
        "/public/images/next.png",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
    },
    {
      id: 2,
      title: "UI Libraries",
      images: [
        "/public/images/tailwind.png",
        "/public/images/btrp.jfif",
        "/public/images/ui.png",
        "/public/images/cn.png",
      ],
      technologies: ["TailwindCSS", "Bootstrap", "Material UI", "ShadCN.UI"],
    },
    {
      id: 3,
      title: "BackEnd",
      images: [
        "/public/images/php.png",
        "/public/images/sql.png",
        "/public/images/django.jfif",
        "/public/images/node.png",
      ],
      technologies: ["PHP", "MySQL", "Django", "Node.js"],
    },
    {
      id: 4,
      title: "Software Tools",
      images: [
        "/public/images/vs.png",
        "/public/images/sublime.jfif",
        "/public/images/pycharm.png",
        "/public/images/jupyter.png",
      ],
      technologies: [
        "VS Code",
        "Sublime Text",
        "PyCharm",
        "Jupyter Notebook",
      ],
    },
  ];

  return (
    <Layout>
      <section className="py-12 px-4 sm:px-8 md:px-16 bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-extrabold text-center mb-14 text-gray-900 tracking-tight"
        >
          My <span className="text-amber-700 underline">Skills</span> ⚡
        </motion.h1>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.97 }}
              className="w-full max-w-xs bg-white/90 border border-amber-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              {/* Title */}
              <h2 className="text-xl font-semibold text-amber-700 mb-4 text-center">
                {skill.title}
              </h2>

              {/* Icons */}
              <div className="grid grid-cols-3 gap-4 place-items-center mb-6">
                {skill.images.map((img, j) => (
                  <motion.img
                    key={j}
                    src={img}
                    alt={skill.technologies[j]}
                    className="w-12 h-12 object-contain"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2">
                {skill.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-full shadow-sm hover:scale-105 transition-transform"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
