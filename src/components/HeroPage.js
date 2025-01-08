import React, { useRef, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import logo_white_fill from "../assets/logo_white_fill.png";
import logo_white from "../assets/logo_white_outline.svg";
import about from "../assets/about_image.svg";
import mongo from "../assets/mongo.svg";
import express from "../assets/express.svg";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import data from "../data/skills.json";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import MatterCanvas from "../particles/matter";
import { useScrollEvent } from "../context/ScrollEventContext";

const HeroPage = () => {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const ref = useRef(null);
  const {
    heroPageRef,
    scrollToContentPage,
    scrollToContactPage,
    scrollToAboutPage,
  } = useScrollEvent();
  const [liElementAnimation, setLiAnimation] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [tooltipAnimation, setTooltipAnimation] = useState([
    false,
    false,
    false,
    false,
  ]);

  // about background click logic
  const handleAboutBAckgroundClick = (e) => {
    if (ref.current && ref.current === e.target) {
      setShowAboutModal(false);
    }
  };

  return (
    <>
      <div className="z-[0] text-white w-full h-100vh absolute  ">
        <MatterCanvas />
      </div>
      {/* <Menu /> */}
      <motion.div
        ref={heroPageRef}
        className="hero h-[100vh] bg-[#111111]  w-[100%] xs:px-5 sm:px-10 lg:px-20 "
      >
        <div className="header px-4 py-4 w-full flex items-center justify-between">
          <img
            className="w-[50px]  pointer-events-none relative "
            src={logo_white}
            alt="img.1"
          />

          <ul className="flex gap-4 sm:gap-6 relative sm:p-4">
            <motion.li
              onHoverStart={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[0] = true;
                  return updated;
                })
              }
              onHoverEnd={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[0] = false;
                  return updated;
                })
              }
            >
              <a href="/resume" target="_blank" rel="noreferrer">
                <FaFileAlt className="text-gray-400 hover:text-white duration-200 hover:scale-110 cursor-pointer size-7 md:size-9" />
              </a>
              <motion.span
                initial={{ x: "100px", opacity: 0 }}
                animate={{
                  x: liElementAnimation[0] ? 0 : "100px",
                  opacity: liElementAnimation[0] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 font-semibold tracking-wide bg-white whitespace-nowrap   px-3 py-0.5 rounded-full text-sm "
              >
                View Resume
              </motion.span>
            </motion.li>
            <motion.li
              onHoverStart={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[1] = true;
                  return updated;
                })
              }
              onHoverEnd={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[1] = false;
                  return updated;
                })
              }
            >
              <a
                href="https://www.linkedin.com/in/swanandsawant"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="text-gray-400 hover:text-white duration-200 hover:scale-110 cursor-pointer size-8 md:size-10" />
              </a>
              <motion.span
                initial={{ x: "100px", opacity: 0 }}
                animate={{
                  x: liElementAnimation[1] ? 0 : "100px",
                  opacity: liElementAnimation[1] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 font-semibold tracking-wide bg-white whitespace-nowrap   px-3 py-0.5 rounded-full text-sm "
              >
                Connect with me!
              </motion.span>
            </motion.li>
            <motion.li
              onClick={scrollToContactPage}
              onHoverStart={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[2] = true;
                  return updated;
                })
              }
              onHoverEnd={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[2] = false;
                  return updated;
                })
              }
            >
              <BiLogoGmail className="text-gray-400 hover:text-white duration-200 hover:scale-110 cursor-pointer size-8 md:size-10" />

              <motion.span
                initial={{ x: "100px", opacity: 0 }}
                animate={{
                  x: liElementAnimation[2] ? 0 : "100px",
                  opacity: liElementAnimation[2] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 font-semibold tracking-wide bg-white whitespace-nowrap   px-3 py-0.5 rounded-full text-sm "
              >
                Send an email!
              </motion.span>
            </motion.li>
            <motion.li
              onHoverStart={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[4] = true;
                  return updated;
                })
              }
              onHoverEnd={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[4] = false;
                  return updated;
                })
              }
            >
              <a
                href="https://github.com/Swanand12"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-gray-400 hover:text-white duration-200 hover:scale-110 cursor-pointer size-8 md:size-10" />
              </a>
              <motion.span
                initial={{ x: "100px", opacity: 0 }}
                animate={{
                  x: liElementAnimation[4] ? 0 : "100px",
                  opacity: liElementAnimation[4] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 font-semibold tracking-wide bg-white whitespace-nowrap  px-3 py-0.5 rounded-full text-sm "
              >
                Explore my code!
              </motion.span>
            </motion.li>
            <motion.li
              onHoverStart={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[3] = true;
                  return updated;
                })
              }
              onHoverEnd={() =>
                setLiAnimation((prev) => {
                  const updated = [...prev];
                  updated[3] = false;
                  return updated;
                })
              }
            >
              <a
                href="https://wa.me/9324441334?text=Message%20through%20swanand%20portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <RiWhatsappFill className="text-gray-400 hover:text-white duration-200 hover:scale-110 cursor-pointer size-8 md:size-10" />
              </a>
              <motion.span
                initial={{ x: "100px", opacity: 0 }}
                animate={{
                  x: liElementAnimation[3] ? 0 : "100px",
                  opacity: liElementAnimation[3] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 font-semibold tracking-wide bg-white whitespace-nowrap   px-3 rounded-full py-0.5 text-sm "
              >
                Chat with me!
              </motion.span>
            </motion.li>
          </ul>
        </div>
        <div className="flex h-[70%] items-center pointer-events-none justify-center sm:h-[78%] ">
          <div className=" flex flex-col absolute   gap-4">
            <div className="flex gap-4  ">
              <div className="flex">
                <img
                  className="size-10 sm:size-14 md:size-20"
                  src={logo_white_fill}
                  alt="img.1"
                />
                <h1 className="text-white  font-[Outfit] pt-1 sm:pt-0.5 md:pt-2 tracking-wider text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold">
                  wanand
                </h1>
              </div>
              <div className="flex">
                <img
                  className="size-10 sm:size-14 md:size-20"
                  src={logo_white_fill}
                  alt="img.1"
                />
                <h1 className="text-white font-[Outfit] pt-1 sm:pt-0.5 md:pt-2 tracking-wider text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-bold">
                  awant
                </h1>
              </div>
            </div>

            <i className="text-white tracking-wide mb-4 font-[Outfit]  sm:text-lg ">
              Computer Engineer & Developer
            </i>

            <button
              onClick={
                window.innerWidth >= 1024
                  ? () => setShowAboutModal(true)
                  : scrollToAboutPage
              }
              className="w-[7rem] pointer-events-auto text-sm sm:text-normal shadow-custom cursor-pointer focus:outline-none relative hover:scale-110 duration-200 group  py-1.5 sm:py-2 text-white font-semibold rounded-[4px] bg-gradient-to-l from-primary to-[#1f2667e6] "
              type="button"
            >
              About Me
              <FaArrowRightLong className="text-white group-hover:-right-4 duration-200 ease-in-out absolute text-[20px] top-1/2 -right-[10px] -translate-y-1/2" />
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button
            onClick={scrollToContentPage}
            className="w-[8rem] text-sm relative -top-3 sm:text-normal shadow-custom cursor-pointer focus:outline-none hover:scale-105 duration-200 group ease-in-out py-1.5 sm:py-2 text-white font-semibold rounded-[4px] bg-gradient-to-l from-primary to-[#1f2667e6]"
            type="button"
          >
            My Projects
            <FaArrowRightLong className="text-white rotate-90 left-1/2 -translate-x-1/2 group-hover:top-10 duration-200 ease-in-out absolute text-[20px] -" />
          </button>
        </div>
      </motion.div>

      {showAboutModal && (
        <div
          onClick={handleAboutBAckgroundClick}
          ref={ref}
          className={` w-full h-full text-white bg-black bg-opacity-60 fixed top-0 left-0 flex flex-col md:flex-row justify-center items-center z-50`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: showAboutModal ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ transformOrigin: "center" }}
            className={`xl:w-2/3  rounded-xl my-auto flex  px-14 py-10 bg-[#191919]`}
          >
            <div className="w-1/2">
              <h1 className="text-primary font-semibold text-2xl tracking-widest">
                ABOUT ME
              </h1>
              <p className="py-5 text-[14px] xl:text-sm  font-normal tracking-wide">
                Hello! Myself Swanand Sawant, a Computer Engineering aspirant at
                Shree L. R. Tiwari College Of Engineering. I have skilled in
                building Full-stack web applications and have a keen interest in
                Python problem-solving and blockchain technology. My Aim is to
                draw a meaningful impact by developing innovative software
                solutions and to spontaneously grow as an engineer. I thrive on
                solving problems with creative and efficient solutions, using
                technologies like
              </p>
              <p className="flex flex-wrap gap-3 pb-5">
                {data[0]?.skills.map((skill) => (
                  <p
                    className="text-[13px] border border-gray-500 py-1.5 px-3 rounded-full"
                    key={skill.id}
                  >
                    {skill.name}
                  </p>
                ))}
              </p>

              <h1 className="pt-8 pb-4 text-primary font-semibold text-2xl tracking-widest">
                MERN STACK
              </h1>
              <div className="flex gap-14 pt-14 ">
                <motion.div
                  onHoverStart={() =>
                    setTooltipAnimation((prev) => {
                      const updated = [...prev];
                      updated[0] = true;
                      return updated;
                    })
                  }
                  onHoverEnd={() =>
                    setTooltipAnimation((prev) => {
                      const updated = [...prev];
                      updated[0] = false;
                      return updated;
                    })
                  }
                  className="flex flex-col gap-5 items-center relative cursor-pointer pointer-events-none"
                >
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: tooltipAnimation[0] ? 0 : 50,
                      opacity: tooltipAnimation[0] ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className='cursor-pointer  w-[7rem]  shadow-custom bg-[#47A248] absolute -top-14 px-6 py-[7px] rounded-md text-[#111111] font-semibold tracking-wide justify-center after:content-[" "] after:w-3 after:h-3 after:bg-[#47A248] after:z-[1] after:absolute after:rotate-45 after:top-[1.7rem] after:left-[3rem] '
                  >
                    <a
                      href="https://chat-app-1-tutj.onrender.com/"
                      className="text-sm flex items-center gap-1"
                    >
                      MongoDB
                    </a>
                  </motion.span>
                  <img
                    className="pointer-events-auto"
                    src={mongo}
                    alt="mongo"
                  />
                  <span className="text-2xl pointer-events-auto text-[#47A248] font-semibold">
                    M
                  </span>
                </motion.div>
                <motion.div
                  onHoverStart={() =>
                    setTooltipAnimation((prev) => {
                      const updated = [...prev];
                      updated[1] = true;
                      return updated;
                    })
                  }
                  onHoverEnd={() =>
                    setTooltipAnimation((prev) => {
                      const updated = [...prev];
                      updated[1] = false;
                      return updated;
                    })
                  }
                  className="flex flex-col gap-5 items-center relative cursor-pointer pointer-events-none"
                >
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: tooltipAnimation[1] ? 0 : 50,
                      opacity: tooltipAnimation[1] ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className='cursor-pointer  w-[7rem] shadow-custom bg-white absolute -top-14 px-6 py-[7px] rounded-md flex text-[#111111] font-semibold tracking-wide justify-center after:content-[""] after:w-3 after:h-3 after:bg-white after:z-[1] after:absolute after:rotate-45 after:top-[1.7rem]  '
                  >
                    <a
                      href="https://chat-app-1-tutj.onrender.com/"
                      className="text-sm flex  items-center gap-1"
                    >
                      Express
                    </a>
                  </motion.span>
                  <img
                    className="pointer-events-auto"
                    src={express}
                    alt="express"
                  />
                  <span className="text-2xl pointer-events-auto font-semibold text-white">
                    E
                  </span>
                </motion.div>
                <motion.div
                  onHoverStart={() =>
                    setTooltipAnimation((prev) => {
                      const updated = [...prev];
                      updated[2] = true;
                      return updated;
                    })
                  }
                  onHoverEnd={() =>
                    setTooltipAnimation((prev) => {
                      const updated = [...prev];
                      updated[2] = false;
                      return updated;
                    })
                  }
                  className="flex flex-col gap-5 items-center relative cursor-pointer pointer-events-none"
                >
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: tooltipAnimation[2] ? 0 : 50,
                      opacity: tooltipAnimation[2] ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className='cursor-pointer  w-[7rem] shadow-custom -top-14 flex bg-[#61DAFB] absolute  px-6 py-[7px] rounded-md text-[#111111] font-semibold tracking-wide justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#61DAFB] after:z-[1] after:absolute after:rotate-45 after:top-[1.7rem]  '
                  >
                    <a
                      href="https://chat-app-1-tutj.onrender.com/"
                      className="text-sm flex  items-center gap-1"
                    >
                      React
                    </a>
                  </motion.span>
                  <img
                    className="pointer-events-auto"
                    src={react}
                    alt="react"
                  />
                  <span className="text-2xl pointer-events-auto text-[#61DAFB] font-semibold">
                    R
                  </span>
                </motion.div>
                <motion.div
                  onHoverStart={() =>
                    setTooltipAnimation((prev) => {
                      const updated = [...prev];
                      updated[3] = true;
                      return updated;
                    })
                  }
                  onHoverEnd={() =>
                    setTooltipAnimation((prev) => {
                      const updated = [...prev];
                      updated[3] = false;
                      return updated;
                    })
                  }
                  className="flex flex-col gap-5 items-center relative cursor-pointer pointer-events-none"
                >
                  <motion.span
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: tooltipAnimation[3] ? 0 : 50,
                      opacity: tooltipAnimation[3] ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className='cursor-pointer  w-[7rem] shadow-custom bg-[#8CC84B] absolute -top-14 flex  px-6 py-[7px] rounded-md text-[#111111] font-semibold tracking-wide justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#8CC84B] after:z-[1] after:absolute after:rotate-45 after:top-[1.7rem]  '
                  >
                    <a
                      href="https://chat-app-1-tutj.onrender.com/"
                      className="text-sm flex items-center gap-1"
                    >
                      Node
                    </a>
                  </motion.span>
                  <img className="pointer-events-auto" src={node} alt="node" />
                  <span className="text-2xl pointer-events-auto text-[#8CC84B] font-semibold">
                    N
                  </span>
                </motion.div>
              </div>
            </div>
            <div className="w-1/2 relative flex flex-col items-center justify-center ">
              <button
                onClick={() => setShowAboutModal(false)}
                className="absolute hover:rotate-90 duration-150 p-2 bg-black rounded-full bg-opacity-30 z-10 top-0 right-0"
              >
                <RxCross1 strokeWidth={1} />
              </button>
              <img src={about} alt="about-image" />
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default HeroPage;
