import React from 'react'
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';


const Nav = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center ">
        {/* When clicked, this image will use the scrollToTop function */}
        <a href="/" className="cursor-pointer mr-4">
          <Image
            src="/headericon.webp"
            alt="CSH Logo"
            width={50}
            height={50}
          />
        </a>
        {/* Update your links to point to the respective section IDs */}
        <Link href="/" className="text-lg font-semibold mr-4 hover:underline hover:text-blue-600 transition duration-300">Home</Link>
        <Link href="#about" className="text-lg font-semibold mr-4 hover:underline hover:text-blue-600 transition duration-300">About</Link>
        <Link href="#skills" className="text-lg font-semibold mr-4 hover:underline hover:text-blue-600 transition duration-300">Skills</Link>
        <Link href="#projects" className="text-lg font-semibold mr-4 hover:underline hover:text-blue-600 transition duration-300">Projects</Link>
        <Link href="#contact" className="text-lg font-semibold hover:underline hover:text-blue-600 transition duration-300">Contact</Link>
      
      </div>
      <div className="flex items-center gap-2">
        <Link href="https://www.linkedin.com/in/chua-shi-hong-62742a222/" passHref target="_blank">
          <Image src="./icons/linkedin.png" alt="LinkedIn" width={30} height={30}
            className="hover:scale-125 transition-transform duration-200" />
        </Link>
        <Link href="https://github.com/chuashihong" passHref target="_blank">
          <Image src="./icons/github.png" alt="GitHub" width={30} height={30}
            className="hover:scale-125 transition-transform duration-200" />
        </Link>
        <Link href="https://www.instagram.com/chuashihong/" passHref target="_blank">
          <Image src="./icons/instagram.png" alt="Instagram" width={30} height={30}
            className="hover:scale-125 transition-transform duration-200" />
        </Link>
        <Link href="/resume.pdf" passHref target="_blank">
          <Image src="./icons/resume.png" alt="Resume" width={30} height={30}
            className="hover:scale-125 transition-transform duration-200" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav