import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CgDarkMode } from "react-icons/cg";
import GlobalStyles from "../styles/global.styled.js";
import styled, { ThemeProvider } from "styled-components";
import Navbar from "./navbar/Navbar";
import Hero from "./home/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "./footer/Footer.jsx";
import Icons from "./icons/Icons";
import { StyledMain } from "../styles/Main.Styled";

const DarkMode = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  font-size: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1.6rem;
  }
`;

const dark = {
  backgroundCl: "#111",
  textCl: "#FEFCFD",
};
const light = {
  backgroundCl: "#FEFCFD",
  textCl: "#111",
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
        <Helmet>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Inconsolata:wght@200;300;400;500;600;700&family=Karla:wght@300;400;500;600;700&family=Major+Mono+Display&family=Monoton&family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        <Navbar />
        <StyledMain>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </StyledMain>
        <Footer />

        <DarkMode onClick={themeModeToggler}>
          <span>Dark Mode</span>
          <CgDarkMode />
        </DarkMode>
        <Icons />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
