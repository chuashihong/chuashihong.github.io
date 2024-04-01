'use client'

import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Nav from './components/Nav';
import React from 'react'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GoToTop from "./components/GoToTop";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default Home
