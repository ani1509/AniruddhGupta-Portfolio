import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail, CgTwitter } from "react-icons/cg";
import {  BsFillTelephoneFill } from "react-icons/bs";


import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/aniruddh-gupta-01techie/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/ani1509/"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:aniruddh01gupta@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a
              href="https://twitter.com/Anirudd20560491"
              target="_blank"
              rel="noreferrer"
            ><CgTwitter/>
          </a>
               {/* <FaSquareXTwitter className="email" /> 
               <BsTwitterX className="TwitterX" /> */}
            
            <a href="tel:+917275537945" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
            
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>aniruddh01gupta@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+91 7275537945</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
