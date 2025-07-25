import React from "react";

export default function Main() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center transition-colors duration-300 bg-[var(--website-bg)] text-[var(--website-text-color)]">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold">
        Your Main Page Content
      </div>
      <p className="mt-4 text-xl sm:text-2xl">
        Ayyaz is here with unique, floating tech icons!
      </p>
    </main>
  );
}


