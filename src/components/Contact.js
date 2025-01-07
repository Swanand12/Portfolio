import React, { useRef, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaAt } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import contact_img from "../assets/contact_image.svg";
import logo from "../assets/logo_blue_outline.svg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useScrollEvent } from "../context/ScrollEventContext";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [tooltipAnimation, setTooltipAnimation] = useState(false);
  const { contactRef, scrollToHeroPage } = useScrollEvent();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    console.log(form.current);
    console.log(process.env);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          form.current.reset();
          toast.success("Your message has been sent successfully");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };
  return (
    <>
      <div
        ref={contactRef}
        className="h-auto min-h-[100vh]  font-Nunito sm:px-10 px-2 bg-white"
      >
        <div className="flex bg-white justify-center ">
          <h1 className="text-[2.2rem] font-bold px-5 py-2 border-[3px] border-[#1595b6] rounded-xl text-[#1595b6]">
            Lets connect
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="lg:w-1/2 w-full"
          >
            <img src={contact_img} alt="contact-img" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="lg:w-1/2 w-full px-5  py-5 space-y-2"
          >
            <form onSubmit={sendEmail} ref={form}>
              <div className="flex flex-col gap-1">
                <p className="flex gap-2 text-lg text-gray-500 font-semibold items-center pt-2">
                  <IoPerson size={18} /> Name
                </p>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name..."
                  className="border-2 border-gray-300 px-4 py-2 focus:border-none focus:outline-none focus:ring-4 rounded-lg "
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="flex gap-2 text-lg text-gray-500 font-semibold items-center pt-2">
                  <FaAt size={18} /> Email
                </p>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email..."
                  className="border-2 border-gray-300 px-4 py-2 focus:border-none focus:outline-none focus:ring-4 rounded-lg "
                />
              </div>
              <div className="flex flex-col pb-3 gap-1">
                <p className="flex gap-2 text-lg text-gray-500 font-semibold items-center pt-2">
                  <IoIosChatboxes size={18} /> Message
                </p>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Type message here..."
                  className="border-2 border-gray-300 px-4 py-2 focus:border-none focus:outline-none focus:ring-4 rounded-lg "
                />
              </div>
              <button
                type="submit"
                value={"Send"}
                className={`${
                  loading && "bg-opacity-60"
                } py-2.5 bg-[#1788AE] flex justify-center items-center gap-3 text-sm text-white w-full rounded-lg`}
              >
                {!loading ? (
                  <>
                    <FaTelegramPlane size={18} /> Send Message
                  </>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="animate-spin">
                      <AiOutlineLoading3Quarters />
                    </span>{" "}
                    Sending
                  </div>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-center gap-8 pt-5 lg:pt-10">
          <span className="text-sm text-gray-400">
            Made by Swanand Sawant &copy; 2025
          </span>

          <motion.div
            onHoverStart={() => setTooltipAnimation(true)}
            onHoverEnd={() => setTooltipAnimation(false)}
            className="group relative px-4"
          >
            <img className="h-[3rem] cursor-pointer" src={logo} alt="logo" />
            {window.innerWidth >= 1024 ? (
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: tooltipAnimation ? 0 : -50,
                  opacity: tooltipAnimation ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.68, -0.55, 0.265, 1.55],
                }}
                onClick={scrollToHeroPage}
                className=" text-white absolute bg-[#1788AE] px-3 py-1.5 whitespace-nowrap top-[0.5rem] text-sm font-semibold tracking wide left-[4.5rem] rounded-md before:content-[' '] before:rounded-sm before before:bg-[#1788AE] before:absolute before:-top-1.5 before:rotate-45 before:left-12 before:w-4 before:h-4 before:z-10"
              >
                Scroll to top
              </motion.button>
            ) : (
              <motion.button
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ amount: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0.68, -0.55, 0.265, 1.55],
                }}
                onClick={scrollToHeroPage}
                className=" text-white absolute bg-[#1788AE] px-3 py-1.5 whitespace-nowrap top-[0.5rem] text-sm font-semibold tracking wide left-[4.5rem] rounded-md before:content-[' '] before:rounded-sm before before:bg-[#1788AE] before:absolute before:-top-1.5 before:rotate-45 before:left-12 before:w-4 before:h-4 before:z-10"
              >
                Scroll to top
              </motion.button>
            )}
          </motion.div>

          <ul className="flex gap-6 mb-5 lg:mb-0">
            <li className="">
              <a target="_blank" rel="noreferrer" href="www.google.com">
                <FaLinkedinIn className="text-[#1788AE] duration-200 hover:scale-125 cursor-pointer size-5" />
              </a>
            </li>
            <li className="">
              <a target="_blank" rel="noreferrer" href="www.facebook.com">
                <BiLogoGmail className="text-[#1788AE] duration-200 hover:scale-125 cursor-pointer size-5" />
              </a>
            </li>
            <li className="">
              <a
                rel="noreferrer"
                href="https://github.com/Swanand12"
                target="_blank"
              >
                <FaGithub className="text-[#1788AE] duration-200 hover:scale-125 cursor-pointer size-5" />
              </a>
            </li>
            <li className="">
              <a
                rel="noreferrer"
                href="https://wa.me/9324441334?text=Message%20through%20swanand%20portfolio"
                target="_blank"
              >
                <RiWhatsappFill className="text-[#1788AE] duration-200 hover:scale-125 cursor-pointer size-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
