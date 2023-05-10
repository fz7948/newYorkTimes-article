import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import cx from "classnames";

const NAVIGATION_BUTTON_CLASS = [
  "flex",
  "flex-col",
  "justify-center",
  "items-center",
  "text-[10px]",
  "gap-[9px]",
  "p-3",
];

type Props = {
  iconElement: ReactNode;
  name: string;
  href: string;
  onClick: (pathname: string) => void;
};

export default function NavigationButton(props: Props) {
  const location = useLocation();

  const { iconElement, name, href, onClick } = props;

  return (
    <button
      type="button"
      className={
        location.pathname === href
          ? cx(NAVIGATION_BUTTON_CLASS, "brightness-100")
          : cx(NAVIGATION_BUTTON_CLASS, "brightness-50")
      }
      onClick={() => onClick(href)}
    >
      {iconElement}
      <div className="text-white font-[600]">{name}</div>
    </button>
  );
}
