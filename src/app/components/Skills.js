import Image from 'next/image';
import React from 'react';

const Skills = () => {
  const familiarSkills = [
    { name: "Java", icon: "/icons/java.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "C++", icon: "/icons/cpp.png" },
    { name: "Git", icon: "/icons/git.png" },
    { name: "PostgreSQL", icon: "/icons/postgresql.png" },
    { name: "Firebase", icon: "/icons/firebase.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "TailwindCSS", icon: "/icons/tailwind.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "Figma", icon: "/icons/figma.png" },
  ];
  const experienceLevelSkills = [
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "TypeScript", icon: "/icons/ts.png" },
    { name: "Flutter", icon: "/icons/flutter.png" },
    { name: "AlpineJS", icon: "/icons/alpinejs.png" },
    { name: "Vue.js", icon: "/icons/vue.png" },
    { name: "Next.js", icon: "/icons/nextjs.png" },

  ];
  return (
    // <section id="skills" className="max-w-4xl mx-auto px-4 py-8">
    //   <h2 className="text-4xl font-bold text-left mb-6 uppercase">Skills</h2>
    //   <h3 className="text-xl font-semibold">I am quite familiar with</h3>
    //   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
    //     {highLevelSkills.map((skill, index) => (
    //       <div key={index} className="flex flex-col items-center">
    //         <Image src={skill.icon} alt={skill.skill} width={64} height={64} />
    //         <div className="flex-grow flex flex-col items-center justify-end">
    //           <p className="mt-2">{skill.skill}</p>
    //           <p className="text-sm text-gray-600">I am {skill.level} at this</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section id="skills" className="max-w-4xl mx-auto p-10 min-h-screen"> {/* Use your own background color */}
      <h2 className="text-4xl font-bold text-left mb-6 uppercase">Skills</h2>
      <h3 className="text-xl font-semibold">I am quite familiar with these</h3>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 pt-5 pb-16">
        {familiarSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-between p-4 bg-navy rounded-lg shadow-md transform transition duration-300 hover:scale-110"> {/* Use your own colors */}
            <Image src={skill.icon} alt={skill.name} width={64} height={64} />
            <p className="mt-2 text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-semibold">I have also played around with these</h3>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {experienceLevelSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-between p-4 bg-navy rounded-lg shadow-md transform transition duration-300 hover:scale-110"> {/* Use your own colors */}
            <Image src={skill.icon} alt={skill.name} width={64} height={64} />
            <p className="mt-2 text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
