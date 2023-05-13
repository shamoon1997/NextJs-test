import React from "react";
import dynamic from "next/dynamic";
import { MySkill, TSkill } from "../data";
const Image = dynamic(() => import("next/image"));

const Skills = () => {
  return (
    <div
      className="w-screen mb-0 bg-gray-900 pb-32 h-auto mx-auto  md:pt-[2em] lg:pt-[5em] xl:pt-[1em] md:px-6 px-2 lg:px-6 "
      id="skill"
    >
      <div className="max-w-[1240px] mx-auto justify-center h-auto pt-32 ">
        {/* <p className="text-xl tracking-widest uppercase text-[#5e51e5] ">
          Skills
        </p> */}
        <h3 className="my-5 text-gray-400 text-2xl ">Technical Skills</h3>
        <div className="flex flex-col mb-[5em] ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {TSkill.map((value, id) => (
              <>
                <div
                  key={id}
                  className="p-10 px-2 mb-5 md:w-[90%] border-[2px] bg-gray-400 border-gray-900 shadow-xl rounded-xl md:hover:scale-[1.03] ease-in duration-300  "
                >
                  <div className="flex flex-row  justify-between items-center mb-3 ">
                    <div className="flex flex-col items-start justify-start    ">
                      <h3 className="capitalize">{value.skillName}</h3>
                    </div>
                    <h4>{value.percentage}%</h4>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-1.5">
                    <div
                      className="bg-blue-400 text-xs font-medium text-blue-700 p-0.5 leading-none h-1.5 rounded-full  "
                      style={{ width: value.percentage + "%" }}
                    ></div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <h3 className="my-5 text-gray-400 text-2xl ">Soft Skills</h3>
        <div className="flex flex-col mb-[5em] ">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 ">
            {MySkill.map((value, id) => (
              <>
                <div
                  key={id}
                  className="py-10 px-3 mb-5 md:w-[90%] border-[2px] bg-gray-400 border-gray-900 shadow-xl rounded-xl md:hover:scale-[1.03] ease-in duration-300 "
                >
                  <div className="flex flex-row  justify-between items-center mb-3 ">
                    <div className="flex flex-col items-start justify-start    ">
                      <h3 className="capitalize">{value.skillName}</h3>
                    </div>
                    <h4>{value.percentage}%</h4>
                  </div>
                  <div className="w-full bg-gray-500  rounded-full h-1.5  ">
                    <div
                      className="bg-blue-400 text-xs font-medium text-blue-700 p-0.5 leading-none h-1.5 rounded-full  "
                      style={{ width: value.percentage + "%" }}
                    ></div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
