import Contact from "./Contact";
import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import studyabroad_chatbot from "../assets/studyabroad_chatbot.svg";
import hirrd from "../assets/hirrd.svg";
import sustainify from "../assets/sustainify.svg";
import chat_app from "../assets/chat_app.webp";
import course_compass from "../assets/course_compass.webp";
import klimate from "../assets/klimate.webp";
import gemmatalks_chatbot from "../assets/gemmatalks_chatbot.webp";
import data from "../data/skills.json";
import { useScrollEvent } from "../context/ScrollEventContext";
import About from "./About";
import { FaCircleCheck } from "react-icons/fa6";
import { FaAdjust } from "react-icons/fa";

const ContentPage = () => {
  const { contentRef, scrollToHeroPage } = useScrollEvent();

  return (
    <>
      <div ref={contentRef} className="h-full relative font-Nunito">
        <div className="flex w-full relative z-10 bg-white justify-center">
          <h1 className=" text-[2.2rem] font-bold px-5 py-2 border-x-[3px] border-b-[3px] border-[#1595b6] rounded-b-xl text-[#1595b6]">
            My Projects
          </h1>
        </div>

        {/* Projects */}
        <div className="projects relative px-5 py-8 w-full bg-white">
          {/* Project -1 */}
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
                  className='cursor-pointer w-[fit-content] shadow-xl mb-6 bg-[#ef233c] px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#ef233c] after:absolute after:rotate-45 after:top-7  '
                >
                  <a
                    href="https://drive.google.com/drive/folders/1RlfL9CqPuNTQQuDTJNxz2wKb5FjQi78_?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    GemmaTalks Chatbot{" "}
                    <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  loading="lazy"
                  className="xl:w-[450px] w-[400px] relative hover:scale-110 duration-300 z-20"
                  src={gemmatalks_chatbot}
                  alt="demo"
                />
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute lg:block hidden right-0 z-0 h-[2px] bg-[#ef233c]"
              ></motion.div>
              <a
                className="absolute hover:scale-125 lg:block hidden transition-transform duration-150 -right-2 border-[3px] border-[#ef233c] rounded-full h-4 w-4 bg-white z-50"
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
              className="lg:w-1/2 w-full ml-auto  sm:px-10 px-2 py-10 flex flex-col lg:items-start items-center gap-2.5"
            >
              <h1 className="text-[#ef233c] text-[1.3rem] sm:text-3xl flex items-center gap-3 font-bold">
                GemmaTalks Chatbot <FaCircleCheck size={20} />
              </h1>

              <span className="text-[#ef233c] text-md sm:text-xl font-semibold">
                (AI Powered Assistant)
              </span>
              <p className="font-semibold text-sm sm:text-normal lg:text-start text-center">
                A local full-stack AI chat application powered by Ollama. Users
                can start new chats, send messages, view generated responses
                from LLMs, streamed responses token-by-token, can edit and
                delete chat and stop generation mid-way.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center gap-3 pt-2 pb-5">
                {data[7]?.gemmatalks_chatbot.map((h) => (
                  <p
                    key={h?.id}
                    className="text-[12px] sm:text-sm border bg-[#ef233c] text-white border-gray-300 font-semibold py-1 px-3 rounded-full"
                  >
                    {h?.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Project 0*/}
          <div className="w-full flex lg:flex-row flex-col-reverse py-8">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="lg:w-1/2 w-full ml-auto sm:px-10 px-2 py-10 flex flex-col lg:items-start items-center gap-2.5"
            >
              <h1 className="text-[#512da8] text-[1.3rem] sm:text-3xl flex items-center gap-3 font-bold">
                StudyAbroad Chatbot <FaAdjust size={20} />
              </h1>
              <span className="text-[#512da8] text-md sm:text-xl font-semibold">
                (Virtual Intelligent Assistant)
              </span>
              <p className="font-semibold text-sm sm:text-normal lg:text-start text-center">
                The Study Abroad Chatbot is a MERN stack application designed to
                assist students in their study abroad journey by offering
                personalized guidance on university selection, courses,
                scholarships, tuition fees, and more. It integrates FastAPI with
                a Retrieval-Augmented Generation (RAG) model to fetch relevant
                data and uses Gemini to deliver accurate, context-aware
                responses in natural language. This ensures students receive
                timely and reliable information through an interactive and
                user-friendly interface.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center  gap-3 pt-2 pb-5">
                {data[1]?.studyAbroad_chatbot.map((h) => (
                  <p
                    key={h?.id}
                    className="text-[12px] sm:text-sm border border-gray-300 bg-[#512da8] text-white font-semibold py-1 px-3 rounded-full"
                  >
                    {h?.name}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="relative lg:w-1/2 w-full flex items-center">
              <a
                className="absolute hover:scale-125 lg:block hidden transition-transform duration-150  -left-2 border-[3px] border-[#512da8] rounded-full h-4 w-4 bg-white z-50"
                href="https://github.com/Swanand12/StudyAbroad-Chatbot"
                target="_blank"
                rel="noreferrer"
              ></a>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
                className="absolute lg:block hidden left-0 z-0 h-[2px] bg-[#512da8]"
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
                  className='cursor-pointer w-[fit-content] shadow-xl mb-6 bg-[#512da8]  px-6 py-[5px] items-center rounded-md text-white font-semibold flex justify-center after:content-[""] after:w-3 after:h-3 after:bg-[#512da8] after:absolute after:rotate-45 after:top-7  '
                >
                  <a
                    href="https://github.com/Swanand12/StudyAbroad-Chatbot"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    StudyAbroad - Chatbot{" "}
                    <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  loading="lazy"
                  className="xl:w-[450px] w-[400px] z-20 relative hover:scale-110 duration-300"
                  src={studyabroad_chatbot}
                  alt="demo"
                />
              </motion.div>
            </div>
          </div>

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
                  loading="lazy"
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
              className="lg:w-1/2 w-full ml-auto  sm:px-10 px-2 py-10 flex flex-col lg:items-start items-center gap-2.5"
            >
              <h1 className="text-[#B91C1C] text-[1.3rem] sm:text-3xl flex items-center gap-3 font-bold">
                Hirrd <FaCircleCheck size={20} />
              </h1>

              <span className="text-[#B91C1C] text-md sm:text-xl font-semibold">
                (Job Portal)
              </span>
              <p className="font-semibold text-sm sm:text-normal lg:text-start text-center">
                Hirrd is a full-stack job portal built with the MERN stack
                (MongoDB, Express.js, React.js, Node.js) that connects
                recruiters with candidates, allowing recruiters to hire and
                candidates to apply for jobs. It streamlines the recruitment
                process, making it easier for both parties to find the right
                opportunities.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center gap-3 pt-2 pb-5">
                {data[2]?.hirrd_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-[12px] sm:text-sm border bg-[#B91C1C] text-white border-gray-300 font-semibold py-1 px-3 rounded-full"
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
              <h1 className="text-[#36D9C4] text-[1.3rem] sm:text-3xl flex items-center gap-3 font-bold">
                Sustainify <FaAdjust size={20} />
              </h1>
              <span className="text-[#36D9C4] text-md sm:text-xl font-semibold">
                (P2P Energy Trading Portal)
              </span>
              <p className="font-semibold text-sm sm:text-normal lg:text-start text-center">
                Sustainify is a decentralized peer-to-peer energy trading
                platform that allows prosumers with rooftop solar panels to sell
                surplus energy to consumers using the grid as a mediator for
                secure and reliable transfers. The platform uses blockchain
                technology and smart contracts to ensure transparent, automated
                energy transactions. I developed the entire software system
                using the MERN stack for the web application and integrated
                blockchain through Solidity-based smart contracts. Sustainify
                aims to promote sustainability, lower energy costs, and support
                a transparent, decentralized energy ecosystem.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center  gap-3 pt-2 pb-5">
                {data[3]?.sustainify_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-[12px] sm:text-sm border border-gray-300  bg-[#36D9C4] text-white font-semibold py-1 px-3 rounded-full"
                  >
                    {h?.name}
                  </p>
                ))}
              </div>
            </motion.div>

            <div className="relative lg:w-1/2 w-full flex items-center">
              <a
                className="absolute hover:scale-125 lg:block hidden transition-transform duration-150  -left-2 border-[3px] border-[#36D9C4] rounded-full h-4 w-4 bg-white z-50"
                href="https://github.com/Swanand12/Sustainify"
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
                    href="https://github.com/Swanand12/Sustainify"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    Sustainify <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  loading="lazy"
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
                  loading="lazy"
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
              <h1 className="text-[#399918] text-[1.3rem] sm:text-3xl flex items-center gap-3 font-bold">
                Chat App <FaCircleCheck size={20} />
              </h1>
              <span className="text-[#399918] text-md sm:text-xl font-semibold">
                (Real Time Chatting Application)
              </span>
              <p className="font-semibold text-sm sm:text-normal lg:text-start text-center">
                Chat App is a real-time messaging application built using the
                MERN stack, allowing users to search for friends, chat
                one-on-one, and manage group chats with features like
                adding/removing members and leaving groups. It supports
                real-time messaging and notifications similar to WhatsApp,
                powered by Socket.io. I developed a responsive and user-friendly
                interface, implemented backend functionality with authentication
                and APIs, and used MongoDB for data storage. Profile photos are
                uploaded to Cloudinary for optimized image delivery, and a
                typing indicator using debouncing was added to enhance the
                overall chat experience.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center  gap-3 pt-2 pb-5">
                {data[4]?.chat_app_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-[12px] sm:text-sm border border-gray-300 bg-[#399918] text-white font-semibold py-1 px-3 rounded-full"
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
              <h1 className="text-[#9F6A00] text-[1.3rem] sm:text-3xl flex items-center gap-3 font-bold">
                Course Compass <FaAdjust size={20} />
              </h1>
              <span className="text-[#9F6A00] text-md sm:text-xl font-semibold">
                (Online Learning Platform)
              </span>
              <p className="font-semibold text-sm sm:text-normal lg:text-start text-center">
                I worked as a Frontend Developer Intern at Course Compass, where
                I contributed to building a full-fledged Learning Management
                System (LMS) for students and teachers. The platform included
                features like live classes, chats, quizzes, project submissions,
                and doubt resolution through teachers or a chatbot. My role
                focused on developing responsive, user-friendly interfaces using
                React, collaborating with the backend team for seamless API
                integration, and managing global state with Context API. I also
                implemented performance optimizations such as memoization and
                lazy loading, while ensuring code reusability through modular
                component design.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center gap-3 pt-2 pb-5">
                {data[5]?.course_compass_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-[12px] sm:text-sm border border-gray-300 bg-[#9F6A00] text-white font-semibold py-1 px-3 rounded-full"
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
                  loading="lazy"
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
                    href="https://klimate-weather.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1"
                  >
                    Klimate <GoLinkExternal size={14} strokeWidth={1} />
                  </a>
                </motion.span>

                <img
                  loading="lazy"
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
              <h1 className="text-gray-500 text-[1.3rem] sm:text-3xl flex items-center gap-3 font-bold">
                Klimate <FaCircleCheck size={20} />
              </h1>
              <span className="text-gray-500 text-md sm:text-xl font-semibold">
                (Weather App)
              </span>
              <p className="font-semibold text-sm sm:text-normal lg:text-start text-center">
                Klimate is a weather application that provides real-time weather
                updates for your location and any city you search. It features
                city search, favorite city management, and a 6-day weather
                forecast. The app includes interactive graphs for detailed
                hourly forecasts.
              </p>
              <div className="skills flex flex-wrap lg:justify-start justify-center gap-3 pt-2 pb-5">
                {data[6]?.klimate_technologies.map((h) => (
                  <p
                    key={h?.id}
                    className="text-[12px] sm:text-sm border border-gray-300 bg-gray-500 text-white font-semibold py-1 px-3 rounded-full"
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
