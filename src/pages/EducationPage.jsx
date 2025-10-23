import React from "react";
import Layout from "../components/Layout";
import { GraduationCap } from "lucide-react";

export default function EducationPage() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Software Engineering (BSSE)",
      university: "(IIUI) International Islamic University, Islamabad",
      image: "/public/images/iiui.jfif",
      semester: "7th",
      duration: "4 Years",
      start_end_date: "2022 - 2026",
      status: "Continue",
      description:
        "Currently pursuing BS Software Engineering with a focus on Web Development, Mobile App Development, and Database Management. Maintaining a 3.3 CGPA with valuable semester project experience.",
    },
    {
      id: 2,
      degree: "Intermediate in Computer Science (ICS)",
      university: "F.G. Sir Syed College, The Mall, Rawalpindi",
      image: "/public/images/collage.jpg",
      semester: "Completed",
      duration: "2 Years",
      start_end_date: "2019 - 2021",
      status: "Completed",
      description:
        "Completed Intermediate in Computer Science with 1017 marks. Built a strong programming foundation and logical problem-solving mindset.",
    },
    {
      id: 3,
      degree: "Matriculation in Science",
      university: "F.G. Public School No.2, Tariqabad, Rawalpindi",
      image: "/public/images/school.jfif",
      semester: "Completed",
      duration: "2 Years",
      start_end_date: "2017 - 2019",
      status: "Completed",
      description:
        "Completed Matriculation in Science with 857 marks. Developed early interest in computers and technology fundamentals.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6">
        {/* Header Section */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-14 text-gray-900 tracking-tight">
          My{" "}
          <span className="text-amber-700 underline decoration-4 underline-offset-4">
            Education
          </span>{" "}
          <GraduationCap className="inline w-7 h-7 text-amber-700 mb-1" />
        </h1>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Left Image */}
              <div className="w-28 h-28 flex-shrink-0">
                <img
                  src={edu.image}
                  alt={edu.university}
                  className="w-full h-full object-cover rounded-xl border border-gray-200"
                />
              </div>

              {/* Right Info */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </h2>
                <p className="text-gray-600 font-medium mt-1">
                  {edu.university}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-gray-700">
                  {edu.semester !== "Completed" && (
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      {edu.semester} Semester
                    </span>
                  )}
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                    {edu.duration}
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    {edu.start_end_date}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${
                      edu.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
