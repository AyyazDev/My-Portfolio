import React from "react";
import { Link } from "react-scroll";
import { Fade, Slide } from "react-awesome-reveal";

import python from "../../public/assets/aws.svg";
import java from "../../public/assets/aws.svg";
import wordpress from "../../public/assets/aws.svg";
import shopify from "../../public/assets/aws.svg";
import htmlIcon from "../../public/assets/aws.svg";
import cssIcon from "../../public/assets/aws.svg";
import jsIcon from "../../public/assets/aws.svg";
import reactIcon from "../../public/assets/aws.svg";
import typescriptIcon from "../../public/assets/aws.svg";
import vueIcon from "../../public/assets/aws.svg";
import bootstrapIcon from "../../public/assets/aws.svg";
import AyyazImage from "../../public/assets/ayyaz.png";

export default function About() {
  const skills = [
    python,
    java,
    jsIcon,
    reactIcon,
    typescriptIcon,
    vueIcon,
    wordpress,
    shopify,
    htmlIcon,
    cssIcon,
    bootstrapIcon,
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: "8.1rem",
        paddingRight: "8.1rem",
        paddingTop: "0rem",
      }}
    >
      {/* LEFT TEXT */}
      <div className="max-w-xl space-y-4">
        <Fade direction="left">
          <h2 className="text-4xl font-bold mb-6 text-green-400">About Me</h2>
        </Fade>

        <Fade direction="left" delay={100}>
          <p className="text-lg mb-4">
            Hi there! I'm Muhammad Ayyaz, a passionate software engineer skilled
            in modern web technologies and creating scalable, efficient solutions.
          </p>
        </Fade>

        <Fade direction="left" delay={200}>
          <p className="text-lg mb-4">
            Passionate about problem-solving and collaborative development, I thrive
            in Agile environments, integrating new technologies and improving performance.
          </p>
        </Fade>

        {/* Education */}
        <Fade direction="left" delay={300}>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Education</h3>
            <p className="font-medium">
              BS Software Engineering (BSSE) — Lahore Garrison University
            </p>
            <p className="text-sm text-gray-300">2019 – 2023 | Lahore, Pakistan</p>
          </div>
        </Fade>

        {/* Experience */}
        <Fade direction="left" delay={400}>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Experience</h3>

            <p className="font-medium">Software Engineer</p>
            <p className="text-sm text-gray-300">Netetechnology | September 2024 - Present</p>
            <p className="text-sm text-gray-300">Lahore, Pakistan</p>

            <p className="font-medium mt-2">Software Engineer</p>
            <p className="text-sm text-gray-300">Khired Networks | August 2023 - August 2024</p>
            <p className="text-sm text-gray-300">Lahore, Pakistan</p>
          </div>
        </Fade>
      </div>

      {/* RIGHT IMAGE */}
      <Slide direction="right" delay={500}>
        <div className="mt-12 md:mt-0">
          <img
            src={AyyazImage}
            alt="Muhammad Ayyaz"
            className="rounded-2xl shadow-2xl w-[320px] md:w-[400px] object-cover"
          />
        </div>
      </Slide>

      {/* SKILLS */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        {skills.map((icon, idx) => (
          <Fade key={idx} direction="up" delay={100 + idx * 50}>
            <img
              src={icon}
              alt="skill-icon"
              className="object-contain hover:scale-110 transition-transform duration-300"
              style={{ width: "2.125rem", height: "2.125rem" }}
            />
          </Fade>
        ))}
      </div>
    </section>
  );
}
