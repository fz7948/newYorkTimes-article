import { ReactNode } from "react";

import cx from "classnames";

const HEADER_BUTTON_CLASS = [
  "flex",
  "h-full",
  "items-center",
  "border",
  "rounded-[30px]",
  "px-[8px]",
  "gap-[4px]",
  "text-[13px]",
  "truncate",
  "justify-center",
  "max-w-[33%]",
];

type Props = {
  onClick: () => void;
  iconElement?: ReactNode;
  label: string;
  active: boolean;
  isTruncate?: boolean;
};

export default function HeaderButton(props: Props) {
  const { onClick, iconElement, label, active, isTruncate } = props;

  return (
    <button
      type="button"
      className={
        active
          ? cx(HEADER_BUTTON_CLASS, "text-[#3478F6] border-[#3478F6]")
          : cx(HEADER_BUTTON_CLASS, "text-[#6D6D6D]")
      }
      onClick={onClick}
    >
      {iconElement}
      <div className={isTruncate ? "truncate" : undefined}>{label}</div>
    </button>
  );
}
