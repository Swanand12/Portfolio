import React, { useState } from "react";
import HeroPage from "./pages/HeroPage";
import ContentPage from "./pages/ContentPage";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const PortFolio = () => {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <motion.div
        animate={{ y: scroll ? -window.innerHeight : 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-screen w-[100%] bg-black"
      >
        <HeroPage setScroll={setScroll} />
        <ContentPage />
      </motion.div>
    </>
  );
};

export default PortFolio;
