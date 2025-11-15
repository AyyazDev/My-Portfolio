import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaAws, FaStripe, FaPaypal } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostgresql, SiNextdotjs, SiNestjs, SiBootstrap, SiTypescript, SiGithubactions, SiPostman, SiGooglemaps, SiJsonwebtokens, SiCplusplus, SiVercel, SiMui } from 'react-icons/si';

const skills = [
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
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
      { name: 'Vercel', icon: <SiVercel className="text-white" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-400" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
  { name: 'GitHub CI/CD', icon: <SiGithubactions className="text-white" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Stripe', icon: <FaStripe className="text-indigo-500" /> },
  { name: 'PayPal', icon: <FaPaypal className="text-blue-600" /> },
  { name: 'Google Maps API', icon: <SiGooglemaps className="text-green-500" /> },
  { name: 'JWT/Auth', icon: <SiJsonwebtokens className="text-yellow-500" /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white py-20">
      <h2 className="text-4xl font-bold mb-12 border-b-2 border-blue-500 pb-2">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
