import React from "react";
import resume from "../assets/Swanand-CV.pdf";

const Resume = () => {
  return (
    <embed
      src={resume}
      type="application/pdf"
      className="w-[100%] h-screen"
    ></embed>
  );
};

export default Resume;
