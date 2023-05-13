import React from "react";
import dynamic from "next/dynamic";
import { AboutMe } from "../data";
import Link from "next/link";
const Image = dynamic(() => import("next/image"));

const About = () => {
  return (
    <div
      className="w-screen bg-gray-700 py-[13em] px-5 mx-auto h-auto flex items-center  "
      id="about"
    >
      <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-3 gaps-2 ">
        <div className="col-span-2">
          <h2 className="tracking-widest text-[#5e51e5] ">Who I Am</h2>
          {AboutMe.map((value, id) => (
            <>
              <p
                key={id}
                className="py-2 px-1 text-gray-200 whitespace-pre-wrap text-justify mr-4"
              >
                {value.overview}
              </p>
            </>
          ))}

          <br />

          <button className="py-2 px-2 normal-case">
            <Link className="py-2 px-2 hover:underline" href="Experience">
              Check out my Job Experience
            </Link>
          </button>
        </div>
        <div className="w-[100%] relative h-[50vh] m-auto mt-5 shadow-xl  shadow-gray-400 rounded-xl  p-4 hover:scale-[1.03] ease-in duration-300 ">
          {AboutMe.map((value, id) => (
            <>
              <Image
                fill
                key={id}
                src="/assets/bus1.jpg"
                className="rounded-xl absolute object-fill"
                alt={"George Georgiou"}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
