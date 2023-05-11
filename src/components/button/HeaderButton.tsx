import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  iconElement?: ReactNode;
  label: string;
};

export default function HeaderButton(props: Props) {
  const { onClick, iconElement, label } = props;

  return (
    <button
      type="button"
      className="flex h-full items-center border rounded-[30px] px-[12px] gap-[4px] text-[#6D6D6D]"
      onClick={onClick}
    >
      {iconElement}
      <div>{label}</div>
    </button>
  );
}
