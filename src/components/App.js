import React, { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import GlobalStyles from "../styles/global.styled.js";
import styled, { ThemeProvider, keyframes } from "styled-components";
import Navbar from "./navbar/Navbar";
import Hero from "./home/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "./footer/Footer.jsx";
// import Icons from "./icons/Icons";
import { StyledMain } from "../styles/Main.Styled";

const animateSnow = keyframes`
from {
    transform: translateY(0)
  }
  to{
    transform: translateY(650px);
  }

`;

export const SnowWrap = styled.div`
  min-height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  background-position: center center;
  div,
  div::after,
  div::before {
    content: "";
    position: absolute;
    top: -650px;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(4px 4px at 100px 50px, #fff, transparent),
      radial-gradient(6px 6px at 200px 150px, #fff, transparent),
      radial-gradient(3px 3px at 300px 250px, #fff, transparent),
      radial-gradient(4px 4px at 400px 350px, #fff, transparent),
      radial-gradient(6px 6px at 500px 100px, #fff, transparent),
      radial-gradient(3px 3px at 50px 200px, #fff, transparent),
      radial-gradient(4px 4px at 150px 300px, #fff, transparent),
      radial-gradient(6px 6px at 250px 400px, #fff, transparent),
      radial-gradient(3px 3px at 350px 500px, #fff, transparent);
    background-size: 650px 650px;
    animation: ${animateSnow} 3s linear;
    animation-iteration-count: infinite;
  }

  div::after {
    margin-left: -250px;
    opacity: 0.5;
    filter: blur(2px);
    animation-direction: reverse;
    animation-duration: 6s;
  }

  div::before {
    margin-left: -350px;
    opacity: 0.7;
    filter: blur(1px);
    animation-direction: reverse;
    animation-duration: 9s;
  }
`;

const DarkMode = styled.div`
  position: fixed;
  bottom: 0rem;
  right: 4.5rem;
  font-size: 3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &::after {
    content: "";
    display: block;
    height: 9rem;
    width: 1px;
    background-color: ${({ theme }) => theme.textCl};
    opacity: 0.4;
    margin-top: 2rem;
  }
`;

const dark = {
  backgroundCl: "#172026",
  textCl: "#FEFCFD",
};
const light = {
  backgroundCl: "#FEFCFD",
  textCl: "#172026",
};

function App() {
  function getModeFromStorage() {
    const getStorage = JSON.parse(localStorage.getItem("mode"));
    if (getStorage === null) return true;
    if (getStorage) return getStorage;
    if (!getStorage) return getStorage;
  }
  const [theme, setTheme] = useState(getModeFromStorage());

  function themeModeToggler() {
    setTheme(!theme);
  }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeProvider theme={theme === true ? light : dark}>
      <React.Fragment>
        <GlobalStyles />
        <SnowWrap>
          <div></div>
        </SnowWrap>
        <Navbar />
        <StyledMain>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </StyledMain>
        <Footer />

        <DarkMode onClick={themeModeToggler}>
          <CgDarkMode />
        </DarkMode>
        {/* <Icons /> */}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
