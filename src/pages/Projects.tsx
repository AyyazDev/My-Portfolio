import React from "react";
import { FiExternalLink } from "react-icons/fi";
import "../index.css"; // this must include Tailwind directives
import { Zoom } from "react-awesome-reveal";

const projects = [
  {
    title: "BLU Transfer",
    description:
      "A chauffeur service platform delivering seamless bookings, secure payments, driver & admin dashboards with geofenced routes & pricing etc.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "AWS", "Stripe/Paypal", "GMap API"],
    image: "/assets/BLU_Img.png", 
    demoLink: "https://blu.taxi",
  },
  {
    title: "Pharmacy Solutions",
    description: "A pharmacy management system where admin, pharmacist, contractor, & DEO roles manage prescriptions & invoicing under NHS regulations.",
    tech: ["ReactJS", "NestJS", "PosgreSQL", "TypeORM", "Typescript", "MaterialUI", "Nodemailer"],
    image: "/assets/Pharmacy_Sol_Img.png",
    demoLink: "https://app.pharmacy-solutions.co.uk/",
  },
  {
    title: "RALCO Construction",
    description: "A platform with admin, foreman, & worker panels to handle workforce assignment, job scheduling, progress tracking for streamlined site management.",
    tech: ["NextJS", "NestJS", "PosgreSQL", "Tailwind", "Github CI/CD", "i18N", "Formik"],
    image: "/assets/RALCO_Constructions_Img.png",
    demoLink: "https://app.ralco.io/",
  },
   {
    title: "HR 360°",
    description: "HR platform with admin, client & employee panels, where admin can manage employees, payroll, attendance, events, feedback, & company activities.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Redux" , "JWT Auth", "Vercel"],
    image: "/assets/HR360_Img.png",
    demoLink: "https://hr360.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center text-white py-24 px-0 xl:px-12 2xl:px-4">
      <h2 className="text-3xl font-bold mb-12 border-b-2 border-blue-500 pb-2">
        Projects
      </h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-332 px-10 lg:px-3">
        {projects.map((project, index) => (
          <Zoom
                               key={index}
                               duration={450}
                               fraction={0.05}    // 👈 triggers immediately when slightly visible
                               damping={0.15}
                             >
           <div className="animated-border rounded-xl p-0.5">
          <div
            key={index}
            className="bg-[#111] p-6 rounded-xl shadow-xl skills-bg border border-gray-700 transition-all flex flex-col items-center"
          >
            {/* Project Image */}
            <div className="w-70 lg:w-90 h-45 rounded-xl overflow-hidden mb-4">
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

            <p className="text-gray-300 mb-8 mt-2 text-center">{project.description}</p>

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
          </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
}
