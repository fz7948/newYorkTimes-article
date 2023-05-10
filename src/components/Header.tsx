// icons
import SearchIcon from "../components/icon/SearchIcon";
import CalendarIcon from "../components/icon/CalendarIcon";
// components
import HeaderButton from "../components/button/HeaderButton";

export default function Header() {
  return (
    <section className="flex w-full h-[60px] px-[20px] py-[13px] gap-[7px] border-b-[2px]">
      <HeaderButton iconElement={<SearchIcon />} label="전체 헤드라인" />
      <HeaderButton iconElement={<CalendarIcon />} label="전체 날짜" />
      <HeaderButton label="전체 국가" />
    </section>
  );
}
