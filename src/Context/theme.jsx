import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = React.useState(() => {
    // Initialize from localStorage if available, otherwise default to "light"
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  // Save theme to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("theme", themename);
  }, [themename]);

  const toggeltheme = () => {
    setthemename(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={[{ themename, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ThemeProvider, ThemeContext };
