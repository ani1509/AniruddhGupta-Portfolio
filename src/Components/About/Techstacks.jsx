import React from "react";
import "./Techstacks.css";
import { FaCode } from "react-icons/fa";

import { FaReact, FaNodeJs, FaAws,  } from "react-icons/fa";
import {
  SiRedux,
  SiCplusplus,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiNextdotjs,
  SiGit,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different"> Technical Skills</h2>
        <div className="techsection">
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <SiNodedotjs />
            <h5>Node</h5>
          </div>
          <div>
            <SiMongodb />
            <h5>MongoDB</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>

          <div>
            <SiNextdotjs />
            <h5>NextJs</h5>
          </div>
          
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiTailwindcss />
            <h5>Tailwind CSS</h5>
          </div>

          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          
          {/* <div>
            <SiCplusplus />
            <h5>C++</h5>
          </div> */}
          {/* <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div> */}
          
          
          {/* <div>
            <BsWordpress />
            <h5>Wordpress</h5>
          </div> */}
          {/* <div>
            <SiHeroku />
            <h5>Heroku</h5>
          </div>  */}
          <div>
            <SiGit />
            <h5>Git</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div> 
        </div>
      </div>
    </>
  );
};
