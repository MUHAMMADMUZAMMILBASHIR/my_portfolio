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
import avatar from '../../public/images/avatar.jfif'

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
        {/* 🔸 Logo Section */}
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



        {/* 🔸 Hamburger Menu Button (Mobile Only) */}
        <button
          className="text-2xl text-amber-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* 🔸 Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
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
      </div>
    </nav>
  );
}
