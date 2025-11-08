const lightIcons = [
  { src: "/assets/aws.svg", width: 40, height: 40 },
  { src: "/assets/github.svg", width: 40, height: 40 },
  { src: "/assets/bootstrap.svg", width: 40, height: 40 },
  { src: "/assets/cpp.svg", width: 40, height: 40 },
  { src: "/assets/css.svg", width: 40, height: 40 },
  { src: "/assets/expressjs.svg", width: 40, height: 40 },
  { src: "/assets/html.svg", width: 40, height: 40 },
  { src: "/assets/javascript.svg", width: 40, height: 40 },
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

const darkIcons = lightIcons.map(icon => {
  if (icon.src.includes("github")) return { ...icon, src: "/assets/green_github.svg" };
  if (icon.src.includes("aws")) return { ...icon, src: "/assets/aws_dark.svg" };
  return icon;
});

function shuffleArray(array: any[]) {
  const cloned = [...array];
  let currentIndex = cloned.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [cloned[currentIndex], cloned[randomIndex]] = [cloned[randomIndex], cloned[currentIndex]];
  }
  return cloned;
}

export function getShuffledIcons(theme: "light" | "dark") {
  const icons = theme === "dark" ? darkIcons : lightIcons;
  return shuffleArray(icons);
}
