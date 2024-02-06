import React, { createContext, useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { ThemeContext } from "./ThemeProvider";
import "./general.scss";
import SocialMediaCard from "./components/SocialMediaCard";

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
      <header>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </header>
      <main>
        <h2>Overview - Today</h2>
        <button onClick={toggleTheme}>button</button>
        <div className="cards-grid">
          <SocialMediaCard
            followers={"1987"}
            username={"koala"}
            followerStats={12}
            positive={true}
            theme={"Facebook"}
          />
          <SocialMediaCard
            followers={"1044"}
            username={"nathanf"}
            followerStats={99}
            positive={true}
            theme={"Twitter"}
          />
          <SocialMediaCard
            followers={"11k"}
            username={"realnathanf"}
            followerStats={1099}
            positive={true}
            theme={"Instagram"}
          />
          <SocialMediaCard
            followers={"8239"}
            username={"Nathan F."}
            followerStats={144}
            positive={false}
            theme={"YouTube"}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
