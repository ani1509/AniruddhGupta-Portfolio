import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter 
        options={{
          strings: ["Web Developer", "Frontend Developer", "React Developer","Problem Solver","Techie"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
