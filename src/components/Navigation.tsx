import React from "react";
import { useNavigate } from "react-router-dom";
// icons
import HomeIcon from "../components/icon/HomeIcon";
import ScrapIcon from "../components/icon/ScrapIcon";
// components
import NavigationButton from "../components/button/NavigationButton";

const menu = [
  { href: "/", name: "홈", iconElement: <HomeIcon /> },
  { href: "/scrap", name: "스크랩", iconElement: <ScrapIcon /> },
];

export default function Navigation() {
  const navigate = useNavigate();

  const handleNacigationClick = (pathname: string) => {
    navigate(pathname);
  };

  return (
    <footer
      className={`flex absolute bottom-0 max-w-screen-sm items-center justify-around w-full h-[85px] bg-[#000000] rounded-[30px] z-50`}
    >
      {menu.map((item) => (
        <NavigationButton
          key={item.href}
          iconElement={item.iconElement}
          name={item.name}
          href={item.href}
          onClick={handleNacigationClick}
        />
      ))}
    </footer>
  );
}
