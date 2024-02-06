import React, { createContext, useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { ThemeContext } from "./ThemeProvider";
import "./general.scss";

function App() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light",
    );
  }, [darkTheme]);

  return (
    <div className="grid">
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
      <h2 onClick={toggleTheme}>Overview - Today</h2>
      <button onClick={toggleTheme}>button</button>
    </div>
  );
}

export default App;
