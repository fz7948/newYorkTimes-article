import { BiDetail } from "react-icons/bi";

export default function ScrapIcon() {
  return (
    <div className="flex justify-center items-center w-[20px] h-[22px] border-[2px] border-[#ffffff] rounded-sm">
      <img
        src={`${process.env.PUBLIC_URL}/image/Scrap.png`}
        className="w-[10px] h-[12px] brightness-200"
      />
    </div>
  );
}
