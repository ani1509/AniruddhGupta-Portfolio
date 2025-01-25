import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/pic.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi there! I'm <span className="different">Aniruddh Gupta</span>, a passionate tech enthusiast from
                <span className="different"> Kanpur, Uttar Pradesh, India</span>. Currently, I work as a
                <span className="different"> Programmer Analyst</span> at
                <span className="different"> Cognizant Technology Solutions Corporation</span>, where I focus on
                designing, developing, and maintaining high-performance software applications. I thrive on solving
                technical challenges, collaborating with diverse teams, and driving innovative solutions. Let's
                connect and create something amazing together!
              </h4>

              
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
