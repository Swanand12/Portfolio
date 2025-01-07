import React, { useRef } from "react";
import HeroPage from "../components/HeroPage";
import ContentPage from "../components/ContentPage";

const PortFolio = () => {
  const contentRef = useRef(null);
  const heroPageRef = useRef(null);

  const scrollToHeroPage = () => {
    heroPageRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToContent = () => {
    contentRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="h-screen portfolio w-[100%] bg-black">
        <HeroPage heroPageRef={heroPageRef} scrollToContent={scrollToContent} />
        <ContentPage
          contentRef={contentRef}
          scrollToHeroPage={scrollToHeroPage}
        />
      </div>
    </>
  );
};

export default PortFolio;
