import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/A-logo.jpg";
import code from "./../../assets/code.png";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
              <img src={code} alt="code" />
              <img src={Image} alt="logo" />
              <img src={code} alt="code" />
            </span>
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
}; 
