import { Zoom } from "react-awesome-reveal";

const educationData = [
  {
    degree: "BS Software Engineering (BSSE)",
    institution: "Lahore Garrison Univeristy",
    period: "Oct 2019 - July 2013",
    details: "3.35 CGPA · Specialization: Web Development · Dean List",
  },
  {
    degree: "Intermediate (FSc Pre Engineering)",
    institution: "Punjab Group of Colleges Lahore",
    period: "Aug 2017 - Sep 2019",
    details: "Got A Grade · Class Topper",
  },
  {
    degree: "Matriculation (Computer Science)",
    institution: "Nobel High School Lahore",
    period: "Mar 2015 - July 2017",
    details: "Got A Grade · Class Monitor",
  },
];

export default function Education() {
  return (
    <section className="flex flex-col items-center justify-center text-white py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-40">
      <div className="text-center mb-12">
        <h2 className="text-3xl 2xl:text-5xl font-bold mb-12 2xl:mb-24 border-b-2 border-blue-500 pb-2 inline-block">
          Education
        </h2>
      </div>

      <div className="w-full max-w-[1600px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {educationData.map((exp, index) => (
            <Zoom
              key={index}
              duration={450}
              fraction={0.05}
              damping={0.15}
            >
              <div className="animated-border rounded-xl p-0.5 w-full max-w-sm">
                <div className="flex flex-col items-center justify-center p-6 skills-bg rounded-xl shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-1 project-title">{exp.degree}</h3>
                  <p className="text-md mb-1">{exp.institution}</p>
                  <p className="text-md text-gray-400 mb-1">{exp.period}</p>
                  <p className="text-sm text-gray-300">{exp.details}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
}
