// types
import { DataType } from "../types";
// utils
import { toStringByFormatting, getDayOfWeek } from "../utils";
//icons
import StarIcon from "../components/icon/StarIcon";

type Props = {
  item: DataType;
};

export default function PostCard({ item }: Props) {
  const { id, date, headline, journalist, source } = item;

  return (
    <section
      key={id}
      className="flex flex-col justify-between w-full h-[104px] rounded-[8px] px-[20px] py-[10px] bg-white"
    >
      <div className="flex w-full">
        <div className="w-full h-[56px] line-clamp-2 text-[18px] font-[600]">
          {headline}
        </div>
        <button
          type="button"
          className="flex justify-center items-center w-[22px] h-[22px]"
        >
          <StarIcon active={false} />
        </button>
      </div>
      <div className="flex justify-between items-center w-full h-full">
        <div className="flex flex-1 items-center w-full h-full max-w-[calc(100%-100px)] gap-[8px]">
          <div className="flex-1 text-[12px] truncate">{source}</div>
          <div className="flex-1 text-[12px] truncate">{journalist}</div>
        </div>
        <div className="flex w-[85px] text-[12px] text-[#6D6D6D] truncate">
          {`${toStringByFormatting(date, ".")} (${getDayOfWeek(date)})`}
        </div>
      </div>
    </section>
  );
}
