import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";
import { BiGitBranch } from "react-icons/bi";
import {
  HeadingPrimary,
  StyledSection,
  Divider,
  HeadingWrapper,
} from "../../styles/Section.Styled";
import {
  InfiniteScrollBar,
  ScrollWrapper,
  IconWrapper,
  StyledAbout,
} from "./About.Styled";
import { Container } from "../../styles/container.styled";

const list = [
  {
    icon: <FaHtml5 />,
  },

  {
    icon: <FaCss3Alt />,
  },

  {
    icon: <FaBootstrap />,
  },

  {
    icon: <IoLogoJavascript />,
  },

  {
    icon: <SiStyledcomponents />,
  },

  {
    icon: <FaReact />,
  },
  {
    icon: <BiGitBranch />,
  },
];

export default function About() {
  const iconsList = list.map(({ icon }, index) => {
    return <IconWrapper key={index}>{icon}</IconWrapper>;
  });

  /////
  return (
    <StyledSection id="about">
      <Container>
        <HeadingWrapper>
          <HeadingPrimary>About Me</HeadingPrimary>
          <Divider></Divider>
        </HeadingWrapper>
        <StyledAbout>
          <div className="about-content">
            <p>
              I have spent a year learning front-end technologies and UI
              Designing and developed different types of websites using HTML5,
              CSS3, Javascript &#40;Es6&#41;, React and more. I have an
              understanding of the importance of being able to adapt in a
              technology field which is changing rapidly. I'm always willing to
              explore and learn new skills and technologies.
            </p>
          </div>
          <div className="illustration"></div>
        </StyledAbout>
      </Container>
      <InfiniteScrollBar>
        <ScrollWrapper>{iconsList}</ScrollWrapper>
        <ScrollWrapper>{iconsList}</ScrollWrapper>
      </InfiniteScrollBar>
    </StyledSection>
  );
}
