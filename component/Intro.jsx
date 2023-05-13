import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BriefIntro } from "../data";
import { BsPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Image = dynamic(() => import("next/image"));

const Intro = () => {
  return (
    <div
      className="w-screen h-auto  mx-auto bg-gray-900 text-center md:mb-0 pb-[10] "
      id="intro"
    >
      <div className="max-w-[1240px] w-full h-screen mx-auto p-2 pb-[10] flex flex-col justify-center items-center ">
        <div className="">
          {BriefIntro.map((Value) => (
            <>
              <div
                className="relative bg-gray-300 shadow-lg shadow-gray-800 rounded-[5px] rounded-bl-[70px] rounded-br-[150px] rounded-tl-[100px] mx-auto w-[20rem] h-[20rem] md:hover:scale-[1.1] duration-300 md:mt-9 mt-0 overflow-hidden hover:border-[5px] "
                style={{ borderRadius: " 55% 45% 70% 30% / 44% 80% 20% 56%  " }}
              >
                <Image
                  src="/projects/Alkis.png"
                  fill
                  className="absolute  object-fill "
                />
              </div>

              {/* <p className='uppercase text-sm tracking-widest text-gray-500 ' >{Value.quote}</p> */}
              <h1 className="py-1 w-screen text-[#5651e5] px-[.4px]  ">
                {Value.name}
              </h1>
              <p className=" md:w-[70%] md:px-[auto] pl-[20px] mx-[auto] text-gray-200">
                {Value.role}
              </p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4 mt-2 ">
                {/* a is for link */}

                <a
                  className="rounded-full  shadow-lg text-blue-400  cursor-pointer hover:scale-105 ease-in duration-300 "
                  href={Value.linkedin}
                  target="_blank"
                >
                  <FaLinkedinIn size={50} />
                </a>
                <a
                  className="rounded-full shadow-lg text-black bg-gray-200  cursor-pointer hover:scale-105 ease-in duration-300 "
                  href={Value.gitHub}
                  target="_blank"
                >
                  <FaGithub size={50} />
                </a>
                <a
                  className="rounded-full shadow-lg  text-blue-500  cursor-pointer hover:scale-105 ease-in duration-300 "
                  href={Value.instagram}
                  target="_blank"
                >
                  <FaInstagram size={50} />
                </a>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;

// {/* <div className='w-full flex md:flex-row flex-col items-center justify-center  h-[80vh] top-[100vh] '>
//     <Image
//         src='/assets/people01.png'
//         alt='Alkis Savuollis'
//         width={250}
//         height={250}
//     />
// </div> */}
