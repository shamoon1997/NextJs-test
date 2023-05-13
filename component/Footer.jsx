import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { BriefIntro } from "../data";

const Footer = () => {
  return (
    <footer className="text-center relative md:pb-10 pb-10 bg-gray-900 border-t-2 border-gray-400 text-white w-[100vw]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 md:justify-start ">
        <div className=" text-gray-300 relative h-[100px] w-[100px] rounded-full flex md:justify-center md:items-center justify-center items-center m-auto md:ml-[10em]  ">
          <Image
            fill
            src="/projects/logo.jpeg"
            className="absolute object-fill rounded-full  "
          />
        </div>
        <div className="flex flex-col md:justify-center py-[2em] md:items-center justify-center items-center md:mr-[5em] ">
          <div className="flex md:gap-10 gap-7 justify-center items-center">
            <a
              className="rounded-full  shadow-lg text-blue-400  cursor-pointer hover:scale-105 ease-in duration-300 "
              href={BriefIntro[0].linkedin}
              target="_blank"
            >
              <FaLinkedinIn size={50} />
            </a>
            <a
              className="rounded-full shadow-lg text-black bg-gray-200  cursor-pointer hover:scale-105 ease-in duration-300 "
              href={BriefIntro[0].gitHub}
              target="_blank"
            >
              <FaGithub size={50} />
            </a>
            <a
              className="rounded-full shadow-lg  text-blue-500  cursor-pointer hover:scale-105 ease-in duration-300 "
              href={BriefIntro[0].instagram}
              target="_blank"
            >
              <FaInstagram size={50} />
            </a>
          </div>
          <ul className=" grid grid-cols-3 md:hidden mt-[2em] ">
            <Link href="/#intro" prefetch={false}>
              <li className="p-4 text-small">Home</li>
            </Link>
            <Link href="/#about" prefetch={false}>
              <li className="p-4 text-small">About</li>
            </Link>
            <Link href="/#skill" prefetch={false}>
              <li className="p-4 text-small">Skills</li>
            </Link>
            <Link href="/Experience" prefetch={false}>
              <li className="p-4 text-small">Experience</li>
            </Link>
            <Link href="/Project" prefetch={false}>
              <li className="p-4 text-small">Projects</li>
            </Link>
            <Link href="/#contact" prefetch={false}>
              <li className="p-4 text-small">Contact</li>
            </Link>
          </ul>
        </div>
        <ul className=" hidden md:grid-cols-2 md:grid ">
          <Link href="/#intro" prefetch={false}>
            <li className="p-4 text-small hover:bg-gray-500">Home</li>
          </Link>
          <Link href="/#about" prefetch={false}>
            <li className="p-4 text-small hover:bg-gray-500">About</li>
          </Link>
          <Link href="/#skill" prefetch={false}>
            <li className="p-4 text-small hover:bg-gray-500">Skills</li>
          </Link>
          <Link href="/Experience" prefetch={false}>
            <li className="p-4 text-small hover:bg-gray-500">Experience</li>
          </Link>
          <Link href="/Project" prefetch={false}>
            <li className="p-4 text-small hover:bg-gray-500">Projects</li>
          </Link>
          <Link href="/#contact" prefetch={false}>
            <li className="p-4 text-small hover:bg-gray-500">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="text-white w-full absolute bottom-0  ">
        Copyright © George Georgiou Hadjigeorgiou
      </div>
    </footer>
  );
};

export default Footer;
