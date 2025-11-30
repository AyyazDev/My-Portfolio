import React from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaAws, FaStripe, FaPaypal
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostgresql, SiNextdotjs,
  SiNestjs, SiBootstrap, SiTypescript, SiGithubactions, SiPostman,
  SiGooglemaps, SiJsonwebtokens, SiCplusplus, SiVercel, SiMui
} from 'react-icons/si';

import { Zoom } from "react-awesome-reveal";

const skills = [
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'ExpressJS', icon: <SiExpress className="text-gray-300" /> },
  { name: 'ReactJS', icon: <FaReact className="text-blue-400" /> },
  { name: 'NodeJS', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'NextJS', icon: <SiNextdotjs className="text-white" /> },
  { name: 'NestJS', icon: <SiNestjs className="text-red-600" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-500" /> },
  { name: 'Material UI', icon: <SiMui className="text-blue-700" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
  { name: 'Vercel', icon: <SiVercel className="text-white" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
  { name: 'GitHub CI/CD', icon: <SiGithubactions className="text-white" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Stripe', icon: <FaStripe className="text-indigo-500" /> },
  { name: 'PayPal', icon: <FaPaypal className="text-blue-600" /> },
  {
    name: 'Google Map API', icon: <SiGooglemaps className="text-green-500" />,
  },
  { name: 'JWT/Auth', icon: <SiJsonwebtokens className="text-yellow-500" /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white py-20 px-0">
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2">Skills</h2>

<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-6 xl:gap-9 2xl:gap-6 xl:p-10">
        {skills.map((skill, index) => (
          <Zoom
            key={index}
            duration={450}
            fraction={0.05}    // 👈 triggers immediately when slightly visible
            damping={0.15}
          >
<div
  className={`flex flex-col items-center justify-center p-5 xl:p-6 2xl:p-10 zoom-125:2xl:p-5 skills-bg rounded-xl shadow-lg hover:scale-110 transition-transform duration-300`}
>
              <div className="text-4xl mb-3">{skill.icon}</div>
              <p className="text-sm font-semibold text-center">{skill.name}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
}
