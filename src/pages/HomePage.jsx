import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Layout from "../components/Layout";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function HomePage() {
  return (
    <Layout>
      <section className="py-20 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 mt-12 md:px-20">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hello, I'm{" "}
            <span className="text-amber-700">Muhammad Muzammil Bashir</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
            I'm building clean, responsive, and user-friendly web applications{" "}
            <span className="text-amber-700 font-semibold inline-block overflow-hidden whitespace-nowrap border-r-4 border-amber-700">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Web Developer",
                  "Backend Integrator",
                  "UI/UX Designer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
            .
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center md:justify-start gap-6 text-3xl text-gray-600">
            {[FaFacebook, FaInstagram, FaLinkedin, FaGithub].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="#"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-700 transition-transform"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Section (Profile Picture) */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src="/public/images/avatar.jfif"
            alt="Muzammil Avatar"
            className="w-60 h-60 rounded-full shadow-lg object-cover"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </section>
    </Layout>
  );
}
