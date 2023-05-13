import React from "react";
import Head from "next/head";
import Image from "next/image";
import { JobLevel } from "../data";

const Experience = () => {
  return (
    <main className="md:px-10 py-5 px-2 text-white  w-screen h-auto  ">
      <Head>
        <title>George Georgiou | Experience</title>
        <meta name="description" content="Aliks savoullis Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-center  m-auto mb-5 ">Experience </h2>
      <section className="grid grid-cols-1 justify-center items-center mb-20  gap-5  ">
        {JobLevel.map((value, index) => (
          <>
            <div className="md:flex md:flex-row grid grid-cols-1 gap-5 justify-start items-center  bg-no-repeat  bg-gray-900 text-gray-300 md:w-full  shadow-lg shadow-gray-900  py-10  rounded-xl duration-300 border border-1 border-[#13a094] ease-in-out relative text-left pl-[15px] overflow-hidden h-auto ">
              <div
                className="md:relative absolute top-4 right-4 md:top-0 md:right-0 w-[10vh]  h-[10vh] overflow-hidden rounded-full md:mt-[-100px] "
                key={index}
              >
                <Image
                  fill
                  src="/projects/logo.jpeg"
                  className="absolute object-fill rounded-full  "
                />
              </div>
              <div className="md:border-l-2 md:border-gray-300 w-full h-auto md:mt-8 pt-1 md:pt-2 md:pl-5 ">
                <p>{value.year}</p>
                <h3 className="text-white font-bold ">{value.title}</h3>
                <p>{value.role}</p>
                <p>{value.location}</p>
                <br></br>
                <p className="whitespace-pre-wrap">{value.overview}</p>
                <br></br>
                <p className="text-white"> Skills:</p>
                <p>{value.skills}</p>
              </div>
            </div>
            {/* <p className='text-[12px]  font-semibold'></p>
                            <h3 className='text-[23px] text-gray-300 '>{ value.title }</h3>
                            <p className='font-semibold' >{ value.role }</p>
                            <p className='px-10 font-bold ' >{ value.overview }</p> */}
          </>
        ))}
      </section>
    </main>
  );
};

export default Experience;
