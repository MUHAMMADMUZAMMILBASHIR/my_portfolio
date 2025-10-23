import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaProjectDiagram,
  FaUserGraduate,
  FaUser,
  FaEnvelope,
  FaLaptopCode,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import avatar from "../../public/images/avatar.jfif";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/about", icon: <FaUser />, label: "About" },
    { path: "/skills", icon: <FaLaptopCode />, label: "Skills" },
    { path: "/experience", icon: <FaBriefcase />, label: "Experience" },
    { path: "/education", icon: <FaUserGraduate />, label: "Education" },
    { path: "/projects", icon: <FaProjectDiagram />, label: "Projects" },
    { path: "/contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* 🔹 Logo Section */}
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-amber-700"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={avatar}
            alt="Muzammil Avatar"
            className="w-10 h-10 rounded-full shadow-md object-cover mr-2"
          />
          MMB.DEV
        </Link>

        {/* 🔹 Hamburger / Close Button */}
        <button
          className="text-2xl text-amber-700 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex flex-col items-center transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-amber-700 scale-110"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-xs mt-1">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* 🔹 Mobile Slide Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-2/3 bg-white shadow-lg flex flex-col items-center justify-center gap-6 md:hidden z-40"
            >
              {/* ❌ Close button inside menu */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-3xl text-amber-700"
              >
                <FaTimes />
              </button>

              {links.map((link) => (
                <motion.li
                  key={link.path}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex flex-col items-center text-lg font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-amber-700"
                        : "text-gray-700 hover:text-amber-700"
                    }`}
                  >
                    <span className="text-xl mb-1">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
