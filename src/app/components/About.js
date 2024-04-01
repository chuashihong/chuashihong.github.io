import React from 'react'
import { useRef } from 'react'
const About = () => {
  const aboutRef = useRef(null)
  return (
    <section className="max-w-4xl mx-auto p-10 min-h-screen" id="about">
      <div className="flex flex-col items-center text-left space-y-4">
        <h2 className="text-4xl items-start font-bold uppercase mb-6 w-full">About me</h2>
        <p className="text-xl">
          Hi, I'm <span className="font-bold">Chua Shi Hong</span>, a web developer and UI/UX designer with a passion for creating beautiful,
          functional, and user-centered digital experiences. With my academic journey at the National University of Singapore,
          I am always looking for new and innovative ways to apply my skills.
        </p>
        <p className="text-xl">
          I believe that design and development are about more than just making things look good — it's about solving problems
          and creating intuitive, enjoyable experiences for users. Whether it's crafting a new website, a mobile app, or any other
          digital product, I bring my commitment to quality and user-focused design to every project.
        </p>
        <p className="text-xl">
          As I stand on the threshold of a new chapter post-graduation, I'm ready to dive into challenges, innovate solutions, and contribute
          to a team that values curiosity and passion. Let's build something special together.
        </p>
      </div>
    </section>

  )
}

export default About