import React, { useState } from "react";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import hirrd from "../assets/hirrd.svg";
import sustainify from "../assets/sustainify.svg";
import chat_app from "../assets/chat_app.png";
import course_compass from "../assets/course_compass.png";
import klimate from "../assets/klimate.png";
// import AchievementsAndCertifications from "./AchievementsAndCertifications";
import data from "../data/skills.json";
import { useScrollEvent } from "../context/ScrollEventContext";
import About from "./About";
import { BiCheckCircle } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaAdjust } from "react-icons/fa";

const ContentPage = () => {
  const { contentRef, scrollToHeroPage } = useScrollEvent();

  return (
    <>
      <div ref={contentRef} className="h-full relative font-Nunito  bg-white">
        <div className="flex w-full relative z-10 bg-white justify-center">
          <h1 className=" text-[2.2rem] font-bold px-5 py-2 border-x-[3px] border-b-[3px] border-[#1595b6] rounded-b-xl text-[#1595b6]">
            My Projects
          </h1>
        </div>

        {/* Projects */}
        <div className="projects relative px-5 py-8 w-full bg-white">
          {/* Project 1 */}
          <div className="w-full flex lg:flex-row flex-col py-8">
            <div className="relative  lg:w-1/2 w-full flex items-center">
              <motion.div
                className="lg:w-[fit-content] w-full flex flex-col items-center cursor-pointer relative lg:pl-5 group"
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className='cursor-pointer w-[fit-content] shadow-xl mb-6 bg-[#B91C1C] px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#B91C1C] after:absolute after:rotate-45 after:top-7  '
                >
                  <a
                    href="https://job-portal-lhzj.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    Hirrd <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  className="xl:w-[450px] w-[400px] relative hover:scale-110 duration-300 z-20"
                  src={hirrd}
                  alt="demo"
                />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute lg:block hidden right-0 z-0 h-[2px] bg-[#B91C1C]"
              ></motion.div>
              <a
                className="absolute hover:scale-125 lg:block hidden transition-transform duration-150 -right-2 border-[3px] border-[#B91C1C] rounded-full h-4 w-4 bg-white z-50"
                href="https://job-portal-lhzj.onrender.com"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="lg:w-1/2 w-full ml-auto sm:px-10 px-2 py-10 flex flex-col lg:items-start items-center gap-2.5"
            >
              <h1 className="text-[#B91C1C] text-3xl flex items-center gap-3 font-bold">
                Hirrd <FaCircleCheck size={20} />
              </h1>

              <span className="text-[#B91C1C] text-xl font-semibold">
                (Job Portal)
              </span>
              <p className="font-semibold lg:text-start text-center">
                Hirrd is a full-stack job portal that connects recruiters with
                candidates, allowing recruiters to hire and candidates to apply
                for jobs. It streamlines the recruitment process, making it
                easier for both parties to find the right opportunities.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center gap-3 pt-2 pb-5">
                {data[1]?.hirrd_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full"
                  >
                    {h?.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Project 2 */}
          <div className="w-full flex lg:flex-row flex-col-reverse py-8">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="lg:w-1/2 w-full ml-auto sm:px-10 px-2 py-10 flex flex-col lg:items-start items-center gap-2.5"
            >
              <h1 className="text-[#36D9C4] text-3xl flex items-center gap-3 font-bold">
                Sustainify <FaAdjust size={20} />
              </h1>
              <span className="text-[#36D9C4] text-xl font-semibold">
                (Energy Trading Portal)
              </span>
              <p className="font-semibold lg:text-start text-center">
                Sustainify is the peer-to-peer energy trading platform
                leveraging blockchain technology to ensure secure and
                transparent transactions.The platform uses a private blockchain
                network to ensure security and transparency in transactions. Key
                features include the ability for prosumers to post bids for
                selling excess energy, while consumers can bid on these posts
                based on their needs. Both prosumers and consumers can track
                their energy tokens on a personalized dashboard, monitor bid
                statuses, and view their transaction history for complete
                transparency.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center  gap-3 pt-2 pb-5">
                {data[2]?.sustainify_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full"
                  >
                    {h?.name}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="relative lg:w-1/2 w-full flex items-center">
              <a
                className="absolute hover:scale-125 lg:block hidden transition-transform duration-150  -left-2 border-[3px] border-[#36D9C4] rounded-full h-4 w-4 bg-white z-50"
                href="https://job-portal-lhzj.onrender.com"
                target="_blank"
                rel="noreferrer"
              ></a>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute lg:block hidden left-0 z-0 h-[2px] bg-[#36D9C4]"
              ></motion.div>
              <motion.div
                className="lg:w-[fit-content] w-full flex flex-col items-center ml-auto cursor-pointer group relative lg:pr-5"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className='cursor-pointer w-[fit-content] shadow-xl mb-6 bg-[#36D9C4]  px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#36D9C4] after:absolute after:rotate-45 after:top-7  '
                >
                  <a
                    href="https://job-portal-lhzj.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    Sustainify <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  className="xl:w-[450px] w-[400px] z-20 relative hover:scale-110 duration-300"
                  src={sustainify}
                  alt="demo"
                />
              </motion.div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-full flex lg:flex-row flex-col  py-8 ">
            <div className="relative lg:w-1/2 w-full flex items-center">
              <motion.div
                className="lg:w-[fit-content] w-full flex flex-col items-center cursor-pointer relative lg:pl-5 group"
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className='cursor-pointer w-[fit-content] shadow-xl mb-6 bg-[#399918] px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#399918] after:absolute after:rotate-45 after:top-7  '
                >
                  <a
                    href="https://chat-app-1-tutj.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    Chat App <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  className="xl:w-[450px] w-[400px] z-20 relative hover:scale-110 duration-300"
                  src={chat_app}
                  alt="demo"
                />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute lg:block hidden right-0 z-0 h-[2px] bg-[#399918]"
              ></motion.div>
              <a
                className="absolute hover:scale-125 lg:block hidden transition-transform duration-150  -right-2 border-[3px] border-[#399918] rounded-full h-4 w-4 bg-white z-50"
                href="https://chat-app-1-tutj.onrender.com/"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="lg:w-1/2 w-full ml-auto sm:px-10 px-2 py-10 flex flex-col lg:items-start items-center gap-2.5"
            >
              <h1 className="text-[#399918] text-3xl flex items-center gap-3 font-bold">
                Chat App <FaCircleCheck size={20} />
              </h1>
              <span className="text-[#399918] text-xl font-semibold">
                (Real Time Chatting Application)
              </span>
              <p className="font-semibold lg:text-start text-center">
                Chat-App is a full-stack chatting platform that provides
                real-time communication using Socket.io. It offers features like
                one-to-one messaging, group chats, and comprehensive CRUD
                operations for managing conversations and user data.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center  gap-3 pt-2 pb-5">
                {data[3]?.chat_app_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full"
                  >
                    {h?.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Project 4 */}
          <div className="w-full flex lg:flex-row flex-col-reverse py-8">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="lg:w-1/2 w-full ml-auto sm:px-10 px-2 py-10 flex flex-col lg:items-start items-center gap-2.5"
            >
              <h1 className="text-[#9F6A00] text-3xl flex items-center gap-3 font-bold">
                Course Compass <FaAdjust size={20} />
              </h1>
              <span className="text-[#9F6A00] text-xl font-semibold">
                (Online Learning Platform)
              </span>
              <p className="font-semibold lg:text-start text-center">
                I worked as a frontend developer on a Course Compass during my
                internship, designed to offer experiential courses to students.
                The platform integrates interactive quizzes, live lectures,
                practical projects, and an AI tutor to enhance learning by
                providing personalized support and real-time engagement.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center gap-3 pt-2 pb-5">
                {data[4]?.course_compass_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full"
                  >
                    {h?.name}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="relative lg:w-1/2 w-full flex items-center">
              <a
                className="absolute hover:scale-125 lg:block hidden transition-transform duration-150  -left-2 border-[3px] border-[#9F6A00] rounded-full h-4 w-4 bg-white z-50"
                href="https://chat-app-1-tutj.onrender.com"
                target="_blank"
                rel="noreferrer"
              ></a>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute left-0 z-0 lg:block hidden h-[2px] bg-[#9F6A00]"
              ></motion.div>
              <motion.div
                className="lg:w-[fit-content] w-full ml-auto flex flex-col items-center  justify-center cursor-pointer group relative lg:pr-5"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className='cursor-pointer w-[fit-content] shadow-xl mb-6   bg-[#9F6A00] px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#9F6A00] after:absolute after:rotate-45 after:top-7  '
                >
                  <a
                    href="https://job-portal-lhzj.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    Course Compass <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  className="xl:w-[450px] w-[400px] relative z-20 hover:scale-110 duration-300"
                  src={course_compass}
                  alt="demo"
                />
              </motion.div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="w-full flex lg:flex-row flex-col pt-8 pb-14 ">
            <div className="relative lg:w-1/2 w-full flex items-center lg:justify-start justify-center">
              <motion.div
                className="w-[fit-content] cursor-pointer relative lg:pl-5 flex flex-col items-center group"
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <motion.span
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ amount: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 1,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className='cursor-pointer w-[fit-content] shadow-xl mb-6 bg-gray-500 px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-gray-500 after:absolute after:rotate-45 after:top-7  '
                >
                  <a
                    href="https://klimate-flax.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    Klimate <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  className="xl:w-[450px] w-[400px] z-20 relative hover:scale-110 duration-300"
                  src={klimate}
                  alt="demo"
                />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute hidden lg:block right-0 z-0 h-[2px] bg-gray-500"
              ></motion.div>
              <a
                className="absolute hidden lg:block hover:scale-125 transition-transform duration-150  -right-2 border-[3px] border-gray-500 rounded-full h-4 w-4 bg-white z-50"
                href="https://weather-klimate.vercel.app"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="lg:w-1/2 w-full ml-auto sm:px-10 px-2 py-10 flex flex-col lg:items-start items-center gap-2.5"
            >
              <h1 className="text-gray-500 text-3xl flex items-center gap-3 font-bold">
                Klimate <FaCircleCheck size={20} />
              </h1>
              <span className="text-gray-500 text-xl font-semibold">
                (Weather App)
              </span>
              <p className="font-semibold lg:text-start text-center">
                Klimate is a weather application that provides real-time weather
                updates for your location and any city you search. It features
                city search, favorite city management, and a 6-day weather
                forecast. The app includes interactive graphs for detailed
                hourly forecasts.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center gap-3 pt-2 pb-5">
                {data[5]?.klimate_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full"
                  >
                    {h?.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ height: "0" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute hidden lg:block top-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#1595b6]"
          ></motion.div>
        </div>

        {/* <AchievementsAndCertifications /> */}
        {window.innerWidth < 1024 && <About />}
        <Contact scrollToHeroPage={scrollToHeroPage} />
      </div>
    </>
  );
};

export default ContentPage;
