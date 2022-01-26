import React, { useContext } from "react";
import "./style/global.scss";
import SidebarMenu from "./components/SidebarMenu";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import MyProject from "./components/MyProject";
import Certificate from "./components/Certificate";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import SettingApp from "./components/Setting";
import GlobalStyles from "./style/globalStyles";
import { ContextApp } from "./context/appContext";
import { ThemeProvider } from "styled-components";
import { THEMES } from "./constant/common";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { theme, showMenu } = useContext(ContextApp);
  AOS.init()
  return (
    <ThemeProvider theme={THEMES[theme].styles}>
      <GlobalStyles />
      <div className="wrap__app">
        
        <SettingApp />
        <SidebarMenu />
        <main style={{marginLeft :  showMenu ? '300px' : 0}} id="main-content">
          <HeroSection />
          <AboutMe />
          <Skill />
          <Education />
          <MyProject />
          <Certificate />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
