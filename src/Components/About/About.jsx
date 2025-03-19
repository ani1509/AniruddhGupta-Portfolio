import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
// import XIcon from '@mui/icons-material/X';
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Aniruddh Gupta</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Skilled MERN Stack Developer with expertise in building scalable web applications using React.js, Node.js, Express, and MongoDB. Proficient in solving complex technical challenges, optimizing performance, and delivering high-quality solutions. Passionate about innovation, clean code, and continuous learning.
          </p>
        <div className="about__contact center">
          <a
            href="https://www.linkedin.com/in/aniruddh-gupta-01techie/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/ani1509"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:aniruddh01gupta@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+917275537945"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          
          {/* <a
            href="https://twitter.com/Anirudd20560491"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a> */}

        </div>
        <button 
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1WgWzUm1sdvcYIagF6Qg6i8VwbPcFlhv2/view?usp=drive_link"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
