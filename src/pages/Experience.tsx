import React from "react";
import { Fade } from "react-awesome-reveal";


const experiences = [
  {
    role: "Software Engineer",
    company: "Netetechnology",
    period: "Sep 2024 - Present",
    details: [
      "Collaborated with stakeholders to define requirements & deliver efficient solutions.",
      "Led the development of scalable web app, ensuring high performance & reliability.",
      "Integrated multiple third-party APIs to enhance application functionality.",
      "Deployed & managed web app on AWS, ensuring GitHub continuous deployment.",
      "Mentored junior developers, conducted code reviews, and establish best practices.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Khired Networks",
    period: "Aug 2023 - Aug 2024",
    details: [
      "Developed & maintained web apps using ReactJS, NextJS, NestJS, & Postgresql.",
      "Worked closely with cross-functional teams to create and deploy functionalities.",
      "Reviewed code and provided constructive insights to team members.",
      "Diagnosed & addressed software issues to maintain peak application performance.",
      "Engaged in daily stand-up meetings and sprint planning, adhering to Agile practices.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen py-10 px-10 lg:px-24 text-[1.2rem]" >
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-12 text-center 
        border-b-2 border-blue-500 pb-2 inline-block">
          Experience
        </h2>
      </div>
<Fade direction="left" delay={200}>
      <div className="space-y-14">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            
            {/* Left side */}
            <div className="lg:w-1/4 w-full mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold 
               transition-colors duration-100">
                {exp.role}
              </h3>

              <p className="text-lg font-medium 
              text-var(--website-text-color) transition-colors duration-100">
                {exp.company}
              </p>

              <p className="mt-1 text-sm font-medium 
              text-var(--website-text-color) transition-colors duration-100">
                {exp.period}
              </p>
            </div>

            {/* Right side */}
            <div className="lg:w-3/4 w-full">
              <ul className="list-disc list-inside space-y-4">
                {exp.details.map((point, pidx) => (
                  <li
                    key={pidx}
                    className="text-var(--website-text-color) transition-colors duration-100"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
      </Fade>
    </section>
  );
}
