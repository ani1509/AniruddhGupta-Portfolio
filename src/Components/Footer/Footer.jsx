import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <div className="footerBox">
          <p className="footer">
            &copy; {new Date().getFullYear()} Aniruddh. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
