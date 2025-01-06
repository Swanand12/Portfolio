import React, { useEffect, useState } from "react";
import HeroPage from "../components/HeroPage";
import ContentPage from "../components/ContentPage";
import { motion } from "framer-motion";

const PortFolio = () => {
  const [scroll, setScroll] = useState(0);
  console.log(document.querySelector("body").clientHeight);
  return (
    <>
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: scroll,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-screen portfolio w-[100%] bg-black"
      >
        <HeroPage scroll={scroll} setScroll={setScroll} />
        <ContentPage setScroll={setScroll} />
      </motion.div>
    </>
  );
};

export default PortFolio;
