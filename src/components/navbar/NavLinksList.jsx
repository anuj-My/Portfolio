import React from "react";
const list = [
  {
    id: 1,
    title: "home",
    url: "#home",
  },

  {
    id: 2,
    title: "About",
    url: "#about",
  },

  {
    id: 3,
    title: "projects",
    url: "#projects",
  },

  {
    id: 4,
    title: "contact",
    url: "#contact",
  },

  // {
  //   id: 4,
  //   title: "resume",
  //   url: "/",
  // },
];

export default function NavLinksList({ onClickClose }) {
  const renderedList = list.map(({ title, url }, index) => {
    return (
      <li key={index} onClick={onClickClose}>
        <a href={url} rel="noreferrer">
          {title}
        </a>
      </li>
    );
  });

  return <ul>{renderedList}</ul>;
}
