import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine"; // Import the Engine type

// Your assets
import aws from "../../public/assets/aws.svg";
import bootstrap from "../../public/assets/bootstrap.svg";
import cpp from "../../public/assets/cpp.svg";
import css from "../../public/assets/css.svg";
import expressjs from "../../public/assets/expressjs.svg";
import github from "../../public/assets/github.svg";
import html from "../../public/assets/html.svg";
import javascript from "../../public/assets/javascript.svg";
import materialui from "../../public/assets/materialui.svg";
import mongodb from "../../public/assets/mongodb.svg";
import nestjs from "../../public/assets/nestjs.svg";
import nextjs from "../../public/assets/nextjs.svg";
import nodejs from "../../public/assets/nodejs.svg";
import postgresql from "../../public/assets/postgresql.svg";
import react from "../../public/assets/react.svg";
import redux from "../../public/assets/redux.svg";
import tailwindcss from "../../public/assets/tailwindcss.svg";
import typescript from "../../public/assets/typescript.svg";
import vercel from "../../public/assets/vercel.svg";

export default function Main() {
  // Initialize tsparticles engine with the slim bundle
  const particlesInit = async (main: Engine) => {
    await loadSlim(main);
  };

  // Define your full list of icon assets.
  // useMemo prevents this array from being re-created on every render.
  const allIconAssets = useMemo(() => [
    { src: aws, width: 40, height: 40 },
    { src: bootstrap, width: 40, height: 40 },
    { src: cpp, width: 40, height: 40 },
    { src: css, width: 40, height: 40 },
    { src: expressjs, width: 40, height: 40 },
    { src: github, width: 40, height: 40 },
    { src: html, width: 40, height: 40 },
    { src: javascript, width: 40, height: 40 },
    { src: materialui, width: 40, height: 40 },
    { src: mongodb, width: 40, height: 40 },
    { src: nestjs, width: 40, height: 40 },
    { src: nextjs, width: 40, height: 40 },
    { src: nodejs, width: 40, height: 40 },
    { src: postgresql, width: 40, height: 40 },
    { src: react, width: 40, height: 40 },
    { src: redux, width: 40, height: 40 },
    { src: tailwindcss, width: 40, height: 40 },
    { src: typescript, width: 40, height: 40 },
    { src: vercel, width: 40, height: 40 },
  ], []);

  // Utility function to shuffle an array (Fisher-Yates algorithm)
  const shuffleArray = (array: any[]) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  // Memoize the shuffled icons to ensure uniqueness on initial render.
  // The shuffle happens only when `allIconAssets` changes (which is once here).
  const shuffledIcons = useMemo(() => {
    const clonedAssets = [...allIconAssets]; // Clone to avoid modifying the original array
    return shuffleArray(clonedAssets);
  }, [allIconAssets]);

  // Determine the number of particles to show.
  // It will be 15, or the total number of unique icons if fewer than 15.
  const numberOfParticlesToShow = Math.min(15, shuffledIcons.length);

  return (
    <main className="relative z-0 overflow-x-hidden px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-40 py-8 min-h-screen flex flex-col items-center justify-center">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            // Set zIndex to -1 to ensure particles are always in the background,
            // behind headers and other content.
            zIndex: -1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push", // Adds new particles on click (these might be duplicates if all unique icons are already displayed)
              },
              onDiv: {
                elementId: "repulse-div", // Ensure this ID exists in your HTML if you enable this
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true, // Allows the particle canvas to resize with the window
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2,
              },
              connect: { // These modes might create lines/connections which could obscure icons
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false, // Set to false for cleaner unique icon display
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false, // Keep false for more predictable movement
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800, // Adjust this value to control particle density relative to screen size
              },
              limit: 0, // No hard limit on total particles over time, but initial generation is controlled by 'value'
              value: numberOfParticlesToShow, // Use the calculated number of unique particles
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: { // This is for text characters, likely not needed with images
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              type: "image", // Crucial for using images as particles
              image: shuffledIcons, // Pass the shuffled array of unique icon configurations
              polygon: { // Not needed if shape type is 'image'
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16, // Base size of the icons
            },
          },
          polygon: { // Not actively used when shape type is 'image'
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "", // Use CSS background on body/html for a solid color, not here
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />

      {/* Your actual content goes here */}
      {/* This content will appear above the Particles background */}
      <div className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Your Main Page Content
        <p className="mt-4 text-xl sm:text-2xl text-gray-300">
          Ayyaz is here with unique, floating tech icons!
        </p>
        {/* Placeholder for other components */}
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Project /> */}
        {/* <Contact /> */}
      </div>
    </main>
  );
}