import React from "react";
import h from "../assets/harigurus.webp";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import hirrd from "../assets/hirrd.svg";

const ContentPage = ({ setScroll }) => {
  return (
    <>
      <div className="h-full relative font-Nunito  bg-white">
        <div className="flex w-full relative z-10 bg-white justify-center">
          <h1 className=" text-[2.2rem] font-bold px-5 py-2 border-x-[3px] border-b-[3px] border-[#1595b6] rounded-b-xl text-[#1595b6]">
            My Projects
          </h1>
        </div>

        {/* Projects */}
        <div className="projects relative px-5 w-full bg-white">
          {/* Project 1 */}
          <div className="w-full flex py-5">
            <div className="relative  w-1/2 flex items-center">
              <motion.div
                className="w-[fit-content] cursor-pointer relative pl-5 group"
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <span className='cursor-pointer w-[fit-content] group-hover:-top-11 hover:ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:transition-transform hover:duration-500 bg-[#B91C1C] absolute top-14 left-1/2 -translate-x-1/2 px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#B91C1C] after:absolute after:rotate-45 after:top-7  '>
                  <a
                    href="https://job-portal-lhzj.onrender.com"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    Hirrd <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </span>
                <img
                  className="w-[400px] relative hover:scale-110 duration-300 z-20"
                  src={hirrd}
                  alt="demo"
                />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 600 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute right-0 z-0 h-[2px] bg-[#B91C1C]"
              ></motion.div>
              <a
                className="absolute -right-2 border-[3px] border-[#B91C1C] rounded-full h-4 w-4 bg-white z-50"
                href="https://job-portal-lhzj.onrender.com"
                target="_blank"
              ></a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-1/2 ml-auto p-10 flex flex-col gap-2.5"
            >
              <h1 className="text-[#B91C1C] text-3xl font-bold">Hirrd</h1>
              <span className="text-[#B91C1C] text-xl font-semibold">
                (Job Portal)
              </span>
              <p className="font-semibold">
                Hirrd is a full-stack job portal that connects recruiters with
                candidates, allowing recruiters to hire and candidates to apply
                for jobs. It streamlines the recruitment process, making it
                easier for both parties to find the right opportunities.
              </p>
              <div className="skills flex flex-wrap gap-3 pt-2 pb-5">
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #react.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #node.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #express.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #mongoDB
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #tailwind css
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #shadcn UI
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #rest API
                </p>
              </div>
            </motion.div>
          </div>

          {/* Project 2 */}
          <div className="w-full flex py-5">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-1/2 ml-auto p-10 flex flex-col gap-2.5"
            >
              <h1 className="text-[#36D9C4] text-3xl font-bold">Sustainify</h1>
              <span className="text-[#36D9C4] text-xl font-semibold">
                (Energy Trading Portal)
              </span>
              <p className="font-semibold">
                Sustainify is a sustainable energy network that enables
                peer-to-peer solar energy trading using blockchain technology.
                It includes features like energy bidding and automatic energy
                transfer for surplus production. The project focuses on
                optimizing energy distribution through a decentralized
              </p>
              <div className="skills flex flex-wrap gap-3 pt-2 pb-5">
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #react.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #node.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #express.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #mongoDB
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #tailwind css
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #shadcn UI
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #framer-motion
                </p>
              </div>
            </motion.div>

            <div className="relative w-1/2 flex items-center">
              <a
                className="absolute -left-2 border-[3px] border-[#36D9C4] rounded-full h-4 w-4 bg-white z-50"
                href="https://job-portal-lhzj.onrender.com"
                target="_blank"
              ></a>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 600 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute left-0 z-0 h-[2px] bg-[#36D9C4]"
              ></motion.div>
              <motion.div
                className="w-[fit-content] ml-auto cursor-pointer group relative pr-5"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <span className='cursor-pointer w-[fit-content] group-hover:-top-11 ease-custom transition-transform duration-500 bg-[#36D9C4] absolute top-14 left-1/2 -translate-x-1/2 px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#36D9C4] after:absolute after:rotate-45 after:top-7  '>
                  <a
                    href="https://job-portal-lhzj.onrender.com"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    Sustainify <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </span>
                <img
                  className="w-[400px] z-20 relative hover:scale-110 duration-300"
                  src={h}
                  alt="demo"
                />
              </motion.div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-full flex py-5 ">
            <div className="relative w-1/2 flex items-center">
              <motion.div
                className="w-[fit-content] cursor-pointer relative pl-5 group"
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <span className='cursor-pointer w-[fit-content] group-hover:-top-11 ease-custom transition-transform duration-500 bg-[#399918] absolute top-14 left-1/2 -translate-x-1/2 px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#399918] after:absolute after:rotate-45 after:top-7  '>
                  <a
                    href="https://chat-app-1-tutj.onrender.com"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    Chat App <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </span>
                <img
                  className="w-[400px] z-20 relative hover:scale-110 duration-300"
                  src={h}
                  alt="demo"
                />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 600 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute right-0 z-0 h-[2px] bg-[#399918]"
              ></motion.div>
              <a
                className="absolute -right-2 border-[3px] border-[#399918] rounded-full h-4 w-4 bg-white z-50"
                href="https://chat-app-1-tutj.onrender.com/"
                target="_blank"
              ></a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-1/2 ml-auto p-10 flex flex-col gap-2.5"
            >
              <h1 className="text-[#399918] text-3xl font-bold">Chat App</h1>
              <span className="text-[#399918] text-xl font-semibold">
                (Real Time Chatting Application)
              </span>
              <p className="font-semibold">
                Chat-App is a full-stack chatting platform that provides
                real-time communication using Socket.io. It offers features like
                one-to-one messaging, group chats, and comprehensive CRUD
                operations for managing conversations and user data.
              </p>
              <div className="skills flex flex-wrap gap-3 pt-2 pb-5">
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #react.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #node.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #express.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #mongoDB
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #tailwind css
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #socket.io
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #rest API
                </p>
              </div>
            </motion.div>
          </div>

          {/* Project 4 */}
          <div className="w-full flex py-5">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-1/2 ml-auto p-10 flex flex-col gap-2.5"
            >
              <h1 className="text-[#9F6A00] text-3xl font-bold">
                Course Compass
              </h1>
              <span className="text-[#9F6A00] text-xl font-semibold">
                (Online Learning Platform)
              </span>
              <p className="font-semibold">
                I worked as a frontend developer on a Course Compass during my
                internship, designed to offer experiential courses to students.
                The platform integrates interactive quizzes, live lectures,
                practical projects, and an AI tutor to enhance learning by
                providing personalized support and real-time engagement.
              </p>
              <div className="skills flex flex-wrap gap-3 pt-2 pb-5">
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #react.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #node.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #express.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #mongoDB
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #tailwind css
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #shadcn UI
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #framer-motion
                </p>
              </div>
            </motion.div>

            <div className="relative w-1/2 flex items-center">
              <a
                className="absolute -left-2 border-[3px] border-[#9F6A00] rounded-full h-4 w-4 bg-white z-50"
                href="https://chat-app-1-tutj.onrender.com"
                target="_blank"
              ></a>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 600 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute left-0 z-0 h-[2px] bg-[#9F6A00]"
              ></motion.div>
              <motion.div
                className="w-[fit-content] ml-auto cursor-pointer group relative pr-5"
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <span className='cursor-pointer w-[fit-content] group-hover:-top-11 ease-custom transition-transform duration-500 bg-[#9F6A00] absolute top-14 left-1/2 -translate-x-1/2 px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#9F6A00] after:absolute after:rotate-45 after:top-7  '>
                  <a
                    href="https://job-portal-lhzj.onrender.com"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    Course Compass <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </span>
                <img
                  className="w-[400px] relative z-20 hover:scale-110 duration-300"
                  src={h}
                  alt="demo"
                />
              </motion.div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="w-full flex py-5 ">
            <div className="relative w-1/2 flex items-center">
              <motion.div
                className="w-[fit-content] cursor-pointer relative pl-5 group"
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <span className='cursor-pointer w-[fit-content] group-hover:-top-11 ease-custom transition-transform duration-500 bg-gray-500 absolute top-14 left-1/2 -translate-x-1/2 px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-gray-500 after:absolute after:rotate-45 after:top-7  '>
                  <a
                    href="https://chat-app-1-tutj.onrender.com"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    Klimate <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </span>
                <img
                  className="w-[400px] z-20 relative hover:scale-110 duration-300"
                  src={h}
                  alt="demo"
                />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 600 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute right-0 z-0 h-[2px] bg-gray-500"
              ></motion.div>
              <a
                className="absolute -right-2 border-[3px] border-gray-500 rounded-full h-4 w-4 bg-white z-50"
                href="https://chat-app-1-tutj.onrender.com/"
                target="_blank"
              ></a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="w-1/2 ml-auto p-10 flex flex-col gap-2.5"
            >
              <h1 className="text-gray-500 text-3xl font-bold">Klimate</h1>
              <span className="text-gray-500 text-xl font-semibold">
                (Weather App)
              </span>
              <p className="font-semibold">
                Klimate is a weather application that provides real-time weather
                updates for your location and any city you search. It features
                city search, favorite city management, and a 6-day weather
                forecast. The app includes interactive graphs for detailed
                hourly forecasts.
              </p>
              <div className="skills flex flex-wrap gap-3 pt-2 pb-5">
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #react.js
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #tanstack Query
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #openWeather API's
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #shadcn UI
                </p>
                <p className="text-sm border border-gray-300 font-semibold py-1 px-3 rounded-full">
                  #tailwind css
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ height: "0" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#1595b6]"
          ></motion.div>
        </div>

        <Contact setScroll={setScroll} />
      </div>
    </>
  );
};

export default ContentPage;
