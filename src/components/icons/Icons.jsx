import React from "react";
import { FaCodepen } from "react-icons/fa";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { IconsWrapper, IconsContainer } from "./Icons.Styled";

export default function Icons() {
  const socialMediaDetails = [
    {
      id: 0,
      url: "mailto:anuj89806@gmail.com",
      icon: <SiGmail />,
    },
    {
      id: 1,
      url: "https://twitter.com/anuj89806",
      icon: <FiTwitter />,
    },
    {
      id: 2,
      url: "https://github.com/anuj-My",
      icon: <FiGithub />,
    },
    {
      id: 3,
      url: "https://linkedin.com/in/anuj-my",
      icon: <FiLinkedin />,
    },
    {
      id: 4,
      url: "https://codepen.io/anujmaurya-7",
      icon: <FaCodepen />,
    },
  ];

  const iconsList = socialMediaDetails.map(({ url, icon }, index) => {
    return (
      <IconsWrapper key={index}>
        <a href={url} target="_blank" rel="noreferrer">
          {icon}
        </a>
      </IconsWrapper>
    );
  });

  return <IconsContainer>{iconsList}</IconsContainer>;
}
