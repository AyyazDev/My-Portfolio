import './App.css'
import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Main from './components/Main';
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <>
    <ThemeProvider> 
     {/* <Header></Header> */}
      <Main></Main>
      {/* <Analytics />
      <Footer></Footer> */}
    </ThemeProvider> 
    </>
  );
}

