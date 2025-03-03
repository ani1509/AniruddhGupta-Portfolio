import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiBootstrap,
  SiReact,
  SiCss3,
  Si1Password,
  SiReactrouter,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import DailyInsight from "./DailyInsight.png";
import WordMaven from "./WordMaven.png"
import TicTacToe from "./Tic-Tac-Toe.png"

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={WordMaven} alt="WordMaven" />
                </div>
              </div>
              <div className="project_information">
                <h2>WordMaven</h2>
                <p>
                  It is a React-based text utility app offering features like text manipulation, encrpt/decrypt find-and-replace, theme toggling, clipboard operations, export to PDF/DOCX, generating QR and undo/redo functionality.
                </p>
                <div>
                  <SiReact />
                  <IoLogoJavascript />
                  <SiHtml5 />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://ani1509.github.io/WordMaven/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Visit Site
                    </span>
                  </a>
                  <a
                    href="https://github.com/ani1509/WordMaven"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={TicTacToe} alt="tic tac toe" />                </div>
              </div>
              <div className="project_information">
                <h2>Tic Tac Toe Game</h2>
                <p>
                  A classic game of X's and O's built with React, offering customizable player names and a sleek, interactive 3x3 grid. Perfect for enjoying a timeless battle of strategy and fun. Features state persistence for seamless gameplay.</p>
                <div>
                  <SiReact />
                  <IoLogoJavascript />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    href="https://ani1509.github.io/Tic-Tac-Toe-Game/"
                    // onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Visit Site
                    </span>
                  </a>
                  <a
                    href="https://github.com/ani1509/Tic-Tac-Toe-Game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={DailyInsight}
                    alt="Dailylnsight News App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Dailylnsight News App </h2>
                <p>
                  It is a React app to get real-time news updates from various categories including business, entertainment, health, science, sports, and technology.
                </p>
                <div>
                  <FaReact />
                  <IoLogoJavascript />
                  <DiCss3 />
                  <SiReactrouter />
                </div>
                <div>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      Visit Site
                    </span>
                  </a>
                  <a
                    href="https://github.com/ani1509/DailyInsight-News-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjQB67jN3rAucINBI1Wy0uHmNXyjzn8SaBQ&s"
                    alt="Dummy Project"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Dummy Project</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus et, non iusto placeat voluptas, eum magnam dolor veritatis repudiandae neque, at itaque!
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <Si1Password />
                </div>
                <div>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      Visit Site
                    </span>
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
