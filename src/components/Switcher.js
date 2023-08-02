import React, { useState } from "react";
import useDarkMode from "../hooks/darkMode";

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode((prev) => !prev);
  };
  return (
    <i
      onClick={toggleDarkMode}
      title={darkMode ? "переключить на дневной режим" : "переключить на ночной режим"}
      className=" material-icons  cursor-pointer translate-y-1.5 "
    >
      {darkMode ? "wb_sunny" : "brightness_3"}
    </i>
  );
};

export default Switcher;
