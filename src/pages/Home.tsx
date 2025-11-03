import React from 'react';
import Main from '../components/Main'; // Keep your Particles and content here
import illusSVG from '../../public/assets/Programming-pana.svg'

export default function Home() {
   return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
      <h2 className="text-4xl font-bold">Home Section</h2>
      <img 
        src={illusSVG} 
        alt="Developer Illustration" 
        className="w-[550px] h-auto"
      />
    </section>
  );
}