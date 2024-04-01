import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="max-w-4xl mx-auto p-10 py-20 min-h-screen" id="projects">
      <div className="flex flex-col items-center text-left space-y-4">
        <h2 className="text-4xl items-start font-bold uppercase mb-6 w-full">Projects</h2>
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="p-4 shadow-md">
            <h2 className="font-bold text-xl mb-2">Dental Software</h2>
            <Image src="./dental.png" alt="Saviour of Savour" width={128} height={128} className=" mb-4" />
            <p>
              Dental Software is a software that helps dental clinics to manage their patients, appointments, and billing.
              It is a platform where dental clinics can manage their patients' information and appointments easily.
            </p>
            {/* <div
              className='text-gray-600 hover:cursor-default'>No link to be viewed 🥺
              </div> */}
          </div>
          <div className="p-4 shadow-md">
            <h2 className="font-bold text-xl mb-2">Saviour of Savour</h2>
            <Image src="./sos.png" alt="Saviour of Savour" width={128} height={128} className=" mb-4" />
            <p>Saviour of Savour is a food delivery app that
              aims to fulfil the student's needs. It is a platform
              where students can order food from the canteen and
              the food would be delivered by other students living
              in the same area with you.
            </p>
            <Link href="https://saviour-of-savour.web.app/" target="_blank" rel="noopener noreferrer"
              className='text-yellow-300 hover:text-yellow-500 hover:cursor-pointer hover:border-black hover:border-b-2 '>Visit our Site</Link>
          </div>

          {/* <div className="p-4 shadow-md">
            <h2 className="font-bold text-xl mb-2">Feature 3</h2>
            <p>This is a description of feature 3.</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Projects