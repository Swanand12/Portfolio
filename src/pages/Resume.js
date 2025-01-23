import React from "react";
import resume from "../assets/Swanand-Resume.pdf";

const Resume = () => {
  return (
    <div className="w-full">
      <embed
        src={resume}
        type="application/pdf"
        className="w-[100%] h-screen"
      ></embed>
    </div>
  );
};

export default Resume;
