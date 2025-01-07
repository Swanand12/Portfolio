import React, { useRef } from "react";
import HeroPage from "../components/HeroPage";
import ContentPage from "../components/ContentPage";

const PortFolio = () => {
  return (
    <>
      <div className="h-screen portfolio w-[100%] bg-black">
        <HeroPage />
        <ContentPage />
      </div>
    </>
  );
};

export default PortFolio;
