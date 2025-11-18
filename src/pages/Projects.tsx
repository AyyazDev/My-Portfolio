import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "../index.css"; // this must include Tailwind directives

const projects = [
  {
    title: "BLU Transfer",
    description:
      "Full-stack MERN application with cart, payments, and admin panel.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "AWS", "Stripe/Paypal"],
    image: "/assets/BLU_Img.png", 
    demoLink: "https://blu.taxi",
  },
  {
    title: "Pharmacy Solutions",
    description: "Modern portfolio built with React + Tailwind.",
    tech: ["ReactJS", "NestJS", "PosgreSQL", "TypeORM", "Typescript", "MaterialUI", ],
    image: "/assets/Pharmacy_Sol_Img.png",
    demoLink: "https://app.pharmacy-solutions.co.uk/",
  },
  {
    title: "RALCO Construction",
    description: "End-to-end booking and invoice generation system.",
    tech: ["NextJS", "NestJS", "PosgreSQL", "Tailwind", "CI/CD", "i18N"],
    image: "/assets/RALCO_Constructions_Img.png",
    demoLink: "https://app.ralco.io/",
  },
   {
    title: "HR 360°",
    description: "End-to-end booking and invoice generation system.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Redux" , "JWT Auth"],
    image: "/assets/HR360_Img.png",
    demoLink: "https://hr360.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center text-white py-24 px-0">
      <h2 className="text-3xl font-bold mb-12 border-b-2 border-blue-500 pb-2">
        Projects
      </h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 rounded-xl shadow-xl skills-bg border border-gray-700 hover:border-blue-400 transition-all flex flex-col items-center"
          >
            {/* Project Image */}
            <div className="w-72 h-36 rounded-xl overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover m-1"
              />
            </div>
  {/* Project Title */}
  <h3 className="text-xl font-semibold mb-2 project-title">
    {project.title}
  </h3>

  {/* Live Demo Button */}
  {project.demoLink && (
    <a
      href={project.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-white hover:text-blue-400 hover:underline mb-2"
    >
      Live Demo <FiExternalLink />
    </a>
  )}

            <p className="text-gray-300 mb-4 text-center">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
