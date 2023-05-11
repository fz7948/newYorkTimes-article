import { useAppSelector } from "../redux/store";
// icons
import SearchIcon from "../components/icon/SearchIcon";
import CalendarIcon from "../components/icon/CalendarIcon";
// components
import HeaderButton from "../components/button/HeaderButton";
//utils
import { toStringByFormatting, formatCountryToArray } from "../utils";
// content
import { KOREA_COUNTRY_TYPE } from "../constant";

type Props = {
  onClick: () => void;
};

export default function Header(props: Props) {
  const { onClick } = props;

  const { form: formInStorage } = useAppSelector((state) => state.post);

  const isHeadlineFilter = !!formInStorage.keyword;
  const isDateFilter = formInStorage.beginDate !== "1970-01-01";
  const isCountryFilter = formInStorage.country !== "*";

  console.log(isHeadlineFilter, isDateFilter, isCountryFilter);

  console.log(formInStorage.country, "formInStorage.country ?");
  const test = formatCountryToArray(formInStorage.country);

  console.log(test, "test ?");

  return (
    <section className="flex w-full h-[60px] px-[20px] py-[13px] gap-[7px] border-b-[2px] bg-white">
      <HeaderButton
        onClick={onClick}
        iconElement={<SearchIcon />}
        label={isHeadlineFilter ? formInStorage.keyword : "전체 헤드라인"}
        active={isHeadlineFilter}
        isTruncate
      />
      <HeaderButton
        onClick={onClick}
        iconElement={<CalendarIcon />}
        label={
          isDateFilter
            ? toStringByFormatting(new Date(formInStorage.beginDate), ".")
            : "전체 날짜"
        }
        active={isDateFilter}
      />
      <HeaderButton
        onClick={onClick}
        label={
          isCountryFilter
            ? test.length === 1
              ? test[0]
              : `${KOREA_COUNTRY_TYPE[test[0]]} 외 ${test.length}개`
            : "전체 국가"
        }
        active={isCountryFilter}
      />
    </section>
  );
}
