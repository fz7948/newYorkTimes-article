// icons
import SearchIcon from "../components/icon/SearchIcon";
import CalendarIcon from "../components/icon/CalendarIcon";
// components
import HeaderButton from "../components/button/HeaderButton";

type Props = {
  onClick: () => void;
};

export default function Header(props: Props) {
  const { onClick } = props;

  return (
    <section className="flex w-full h-[60px] px-[20px] py-[13px] gap-[7px] border-b-[2px] bg-white">
      <HeaderButton
        onClick={onClick}
        iconElement={<SearchIcon />}
        label="전체 헤드라인"
      />
      <HeaderButton
        onClick={onClick}
        iconElement={<CalendarIcon />}
        label="전체 날짜"
      />
      <HeaderButton
        onClick={onClick}
        label="전체 국가" //
      />
    </section>
  );
}
