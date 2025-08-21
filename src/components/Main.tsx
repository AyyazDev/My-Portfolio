import React from "react";

export default function Main() {
  return (
    <main
      className="
        relative z-10 flex flex-col items-center justify-center min-h-screen 
        py-8 text-center transition-colors duration-300 
        bg-[var(--website-bg)] text-[var(--website-text-color)]
      "
    >
      {/* Container ensures padding on all devices */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-screen-lg">
        <div
          className="
            font-bold leading-tight
            text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          "
        >
          Your Main Page Content Your Main Page Content Your Main Page Content
          Your Main Page Content Your Main Page Content Your Main Page Content
          Your Main Page Content Your Main Page Content Your Main Page Content
          Your Main Page Content
        </div>

        <p
          className="
            mt-4 
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
          "
        >
          Ayyaz is here with unique, floating tech icons! Your Main Page Content
          Your Main Page Content Your Main Page Content Your Main Page Content
          Your Main Page Content Your Main Page Content Your Main Page Content
          Your Main Page Content Your Main Page Content
        </p>
      </div>
    </main>
  );
}
