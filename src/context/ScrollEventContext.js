import { createContext, useContext, useRef } from "react";
import toast from "react-hot-toast";

const ScrollEventContext = createContext();

const ScrollEventProvider = ({ children }) => {
  const contentRef = useRef(null);
  const heroPageRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToHeroPage = () => {
    heroPageRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContentPage = () => {
    contentRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContactPage = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
    toast.success("Get in touch", {
      duration: 4000,
      style: { color: "#1788AE" },
      iconTheme: { primary: "#1788AE", secondary: "#FFF" },
    });
  };

  const scrollToAboutPage = () => {
    aboutRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ScrollEventContext.Provider
      value={{
        contentRef,
        scrollToContentPage,
        heroPageRef,
        scrollToHeroPage,
        contactRef,
        scrollToContactPage,
        aboutRef,
        scrollToAboutPage,
      }}
    >
      {children}
    </ScrollEventContext.Provider>
  );
};

const useScrollEvent = () => useContext(ScrollEventContext);

export { useScrollEvent, ScrollEventProvider };
