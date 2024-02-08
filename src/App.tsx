import React, { createContext, useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { ThemeContext } from "./ThemeProvider";
import "./general.scss";
import SocialMediaCard from "./components/SocialMediaCard";
import Switch from "./components/Switch";
import SocialMediaOverview from "./components/SocialMediaOverview";

function App() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light",
    );
  }, [darkTheme]);

  return (
    <div className="app">
      <div className="grid">
        <div className="header-bg"></div>
        <header>
          <div>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div className="theme-switch">
            <p>Dark Mode</p>
            <Switch onSwitch={toggleTheme} sliderOnRightside={true} />
          </div>
        </header>
        <main className="cards-grid">
          <SocialMediaCard
            followers={"1987"}
            username={"nathanf"}
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
          <h2>Overview - Today</h2>
          <SocialMediaOverview
            dataNumber={"87"}
            theme={"Facebook"}
            dataType={"Page Views"}
            positive={true}
            stats={3}
          />
          <SocialMediaOverview
            dataNumber={"52"}
            theme={"Facebook"}
            dataType={"Likes"}
            positive={false}
            stats={2}
          />
          <SocialMediaOverview
            dataNumber={"5462"}
            theme={"Instagram"}
            dataType={"Likes"}
            positive={true}
            stats={2257}
          />
          <SocialMediaOverview
            dataNumber={"52k"}
            theme={"Instagram"}
            dataType={"Profile Views"}
            positive={true}
            stats={1375}
          />
          <SocialMediaOverview
            dataNumber={"117"}
            theme={"Twitter"}
            dataType={"Retweets"}
            positive={true}
            stats={303}
          />

          <SocialMediaOverview
            dataNumber={"507"}
            theme={"Twitter"}
            dataType={"Likes"}
            positive={true}
            stats={553}
          />
          <SocialMediaOverview
            dataNumber={"107"}
            theme={"YouTube"}
            dataType={"Likes"}
            positive={false}
            stats={19}
          />
          <SocialMediaOverview
            dataNumber={"1407"}
            theme={"YouTube"}
            dataType={"Total Views"}
            positive={false}
            stats={12}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
