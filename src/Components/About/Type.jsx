import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter 
        options={{
          strings: ["MERN Developer", "Full Stack Developer", "React Developer","Problem Solver","Techie"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
