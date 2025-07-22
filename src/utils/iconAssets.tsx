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

const allIconAssets = [
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
];

function shuffleArray(array: any[]) {
  const cloned = [...array];
  let currentIndex = cloned.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [cloned[currentIndex], cloned[randomIndex]] = [cloned[randomIndex], cloned[currentIndex]];
  }
  return cloned;
}

export const shuffledIcons = shuffleArray(allIconAssets);
