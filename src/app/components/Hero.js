import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto p-10 min-h-screen" id="hero">
      <Image src="./profilepic2.webp" alt="Profile Pic" width={128} height={128}
        className="mx-auto mb-4 rounded-full" />
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Chua Shi Hong.</h1>
      <p className="text-3xl text-justify">
        Passionate about crafting elegant solutions in tech,
        I'm a fresh NUS Computer Science graduate ready to make a positive impact.
        With every line of code, I aim to build not just software, but a better tomorrow.
      </p>
    </section>
  );
}

export default Hero