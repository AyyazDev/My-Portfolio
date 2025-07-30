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
  { src: "/assets/aws.svg", width: 40, height: 40 },
  { src: "/assets/bootstrap.svg", width: 40, height: 40 },
  { src: "/assets/cpp.svg", width: 40, height: 40 },
  { src: "/assets/css.svg", width: 40, height: 40 },
  { src: "/assets/expressjs.svg", width: 40, height: 40 },
  { src: "/assets/github.svg", width: 40, height: 40 },
  { src: "/assets/html.svg" , width: 40, height: 40 },
  { src: "/assets/javascript.svg" , width: 40, height: 40 },
  { src: "/assets/materialui.svg", width: 40, height: 40 },
  { src: "/assets/mongodb.svg", width: 40, height: 40 },
  { src: "/assets/nestjs.svg", width: 40, height: 40 },
  { src: "/assets/nextjs.svg", width: 40, height: 40 },
  { src: "/assets/nodejs.svg", width: 40, height: 40 },
  { src: "/assets/postgresql.svg", width: 40, height: 40 },
  { src: "/assets/react.svg", width: 40, height: 40 },
  { src: "/assets/redux.svg", width: 40, height: 40 },
  { src: "/assets/tailwindcss.svg", width: 40, height: 40 },
  { src: "/assets/typescript.svg", width: 40, height: 40 },
  { src: "/assets/vercel.svg", width: 40, height: 40 },
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

export function getShuffledIcons() {
  return shuffleArray(allIconAssets);
}

