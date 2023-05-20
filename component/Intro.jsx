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
              {/* <div className="relative bg-gray-300 shadow-lg shadow-gray-800 rounded-[160px] mx-auto w-[20rem] h-[20rem] md:mt-9 mt-0 overflow-hidden "
              >
                <Image
                  src="/projects/Alkis.png"
                  fill
                  className="absolute  object-fill "
                />
              </div> */}

              <div className="relative bg-gray-300 shadow-lg shadow-gray-800 rounded-[200px] mx-auto w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] overflow-hidden">
  <div className="aspect-w-1 aspect-h-1">
    <Image
      src="/projects/Alkis.png"
      layout="fill"
      objectFit="cover"
      className="rounded-[160px] md:rounded-[180px]"
    />
  </div>
</div>



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

