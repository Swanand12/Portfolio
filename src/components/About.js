import React from "react";
import about from "../assets/about_image.webp";
import data from "../data/skills.json";
import mongo from "../assets/mongo.webp";
import express from "../assets/express.webp";
import react from "../assets/react.webp";
import node from "../assets/node.webp";
import { motion } from "framer-motion";
import { useScrollEvent } from "../context/ScrollEventContext";

const About = () => {
  const { aboutRef } = useScrollEvent();
  return (
    <>
      <div
        ref={aboutRef}
        className="flex  flex-col sm:px-20 xs:px-10 px-2 pb-10 bg-white"
      >
        <div className="flex lg:pt-5 justify-center ">
          <h1 className="text-[2.2rem] font-bold px-5 py-2 border-[3px] border-[#1595b6] rounded-xl text-[#1595b6]">
            About Me
          </h1>
        </div>

        <div className=" pb-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className=" flex flex-col items-center justify-center "
          >
            <img className="" src={about} alt="about-image" />
          </motion.div>
          <div
            className={` flex flex-col justify-center items-center bg-white`}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-primary font-semibold text-2xl tracking-widest">
                ABOUT ME
              </h1>
              <p className="py-5 text-center text-sm sm:text-normal  font-semibold tracking-wide">
                I'm Swanand Sawant, a Computer Engineering student at Shree L.
                R. Tiwari College of Engineering with practical experience in
                full-stack development using the MERN stack, HTML, CSS,
                JavaScript, SQL as well as Python and Flask. I’ve applied these
                skills in both academic and independent projects. Notably, I
                built Sustainify, a blockchain-based peer-to-peer energy trading
                platform selected for the Smart India Hackathon Grand Finale,
                and StudyAbroad Chatbot, a virtual assistant for guiding
                students through international study processes.I’ve also worked
                on freelance projects, such as developing portfolio websites for
                clients like Finwin Solutions, and interned as a Frontend
                Developer, where I created responsive, user-friendly interfaces
                for an online learning platform. These diverse experiences have
                strengthened my ability to learn quickly, adapt to new
                technologies, and build real-world applications.
              </p>
              <p className="flex flex-wrap justify-center gap-3 pb-5 overflow-visible relative max-w-[100vw]">
                {data[0]?.skills.map((skill, i) => (
                  <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 * i,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className="text-[12px] sm:text-sm border border-gray-500 py-1.5 px-3 rounded-full"
                    key={skill.id - i}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </p>

              <h1 className="sm:py-8 pt-8 pb-16 text-primary font-semibold text-2xl tracking-widest">
                MERN STACK
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-4  sm:gap-6 gap-10 items-center">
                <div className="flex flex-col gap-5 items-center  cursor-pointer pointer-events-none">
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className='cursor-pointer  w-[7rem] relative  shadow-custom bg-[#47A248]  px-6 py-[7px] rounded-md text-[#111111] font-semibold tracking-wide justify-center after:content-[" "] after:w-3 after:h-3  after:bg-[#47A248] after:z-[1] after:absolute after:rotate-45 after:top-[1.7rem] after:left-[3rem] '
                  >
                    <a
                      href="https://chat-app-1-tutj.onrender.com/"
                      className="text-sm flex items-center gap-1"
                    >
                      MongoDB
                    </a>
                  </motion.span>
                  <img
                    className="pointer-events-auto w-[4rem] sm:w-auto"
                    src={mongo}
                    alt="mongo"
                  />
                  <span className="text-2xl pointer-events-auto text-[#47A248] font-semibold">
                    M
                  </span>
                </div>
                <div className="flex flex-col gap-5 items-center  cursor-pointer pointer-events-none">
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className='cursor-pointer  w-[7rem] relative shadow-custom bg-white  px-6 py-[7px] rounded-md flex text-[#111111] font-semibold tracking-wide justify-center after:content-[""] after:w-3 after:h-3  after:bg-white after:z-[1] after:absolute after:rotate-45 after:top-[1.7rem]  '
                  >
                    <a
                      href="https://chat-app-1-tutj.onrender.com/"
                      className="text-sm flex  items-center gap-1"
                    >
                      Express
                    </a>
                  </motion.span>
                  <img
                    className="pointer-events-auto w-[4rem] sm:w-auto text-black"
                    src={express}
                    alt="express"
                  />
                  <span className="text-2xl pointer-events-auto font-semibold text-black">
                    E
                  </span>
                </div>
                <div className="flex flex-col gap-5 items-center  cursor-pointer pointer-events-none">
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.9,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className='cursor-pointer  w-[7rem] relative shadow-custom  flex bg-[#61DAFB]  px-6 py-[7px] rounded-md text-[#111111] font-semibold tracking-wide justify-center after:content-[""] after:w-3 after:h-3  after:bg-[#61DAFB] after:z-[1] after:absolute after:rotate-45 after:top-[1.7rem]  '
                  >
                    <a
                      href="https://chat-app-1-tutj.onrender.com/"
                      className="text-sm flex  items-center gap-1"
                    >
                      React
                    </a>
                  </motion.span>
                  <img
                    className="pointer-events-auto w-[4rem] sm:w-auto"
                    src={react}
                    alt="react"
                  />
                  <span className="text-2xl pointer-events-auto text-[#61DAFB] font-semibold">
                    R
                  </span>
                </div>
                <div className="flex flex-col gap-5 items-center  cursor-pointer pointer-events-none">
                  <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.2,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className='cursor-pointer  w-[7rem] relative shadow-custom bg-[#8CC84B]  flex  px-6 py-[7px] rounded-md text-[#111111] font-semibold tracking-wide justify-center after:content-[""] after:w-3 after:h-3  after:bg-[#8CC84B] after:z-[1] after:absolute after:rotate-45 after:top-[1.7rem]  '
                  >
                    <a
                      href="https://chat-app-1-tutj.onrender.com/"
                      className="text-sm flex items-center gap-1"
                    >
                      Node
                    </a>
                  </motion.span>
                  <img
                    className="pointer-events-auto w-[4rem] sm:w-auto"
                    src={node}
                    alt="node"
                  />
                  <span className="text-2xl pointer-events-auto text-[#8CC84B] font-semibold">
                    N
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
