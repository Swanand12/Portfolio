import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const toggleSidebar = () => {
    if (isOpen) {
      // Trigger link exit animation first
      setShowLinks(false);
      // Delay sidebar close animation slightly to allow links to animate out
      setTimeout(() => setIsOpen(false), 400); // Match link exit animation duration
    } else {
      // Open sidebar and trigger link animation after a delay
      setIsOpen(true);
      setTimeout(() => setShowLinks(true), 800); // Match sidebar open animation duration
    }
  };

  return (
    <>
      <div className="relative">
        {/* Hamburger/Cross Button */}
        <button
          className={`z-50 fixed bottom-10 right-10 w-16 h-16 bg-white text-black rounded-full flex flex-col items-center justify-center ${
            isOpen ? "" : "gap-[4px]"
          }`}
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 45 }}
                className="w-5 h-[2px] bg-black"
              ></motion.div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: -45 }}
                className="w-5 h-[2px] bg-black"
              ></motion.div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ rotate: 45 }}
                animate={{ rotate: 0 }}
                className="w-5 h-[2px] bg-black"
              ></motion.div>
              <motion.div
                initial={{ rotate: 45 }}
                animate={{ rotate: 0 }}
                className="w-5 h-[2px] bg-black"
              ></motion.div>
              <motion.div
                initial={{ rotate: 45 }}
                animate={{ rotate: 0 }}
                className="w-5 h-[2px] bg-black"
              ></motion.div>
            </>
          )}
        </button>

        {/* Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed right-0 w-64 h-full bg-white text-black shadow-lg flex flex-col gap-4 px-10 items-start justify-center"
              initial={{ clipPath: "circle(0% at 90% 90%)" }}
              animate={{ clipPath: "circle(150% at 90% 90%)" }}
              exit={{ clipPath: "circle(0% at 90% 90%)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <AnimatePresence>
                {showLinks &&
                  ["Home", "About", "Services", "Contact"].map(
                    (link, index) => (
                      <motion.a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="text-xl font-medium px-5"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 50, opacity: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                      >
                        {link}
                      </motion.a>
                    )
                  )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Menu;
