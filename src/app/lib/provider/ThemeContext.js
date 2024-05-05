// components/context/ThemeContext.js
import React, { createContext, useContext } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(false);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};