import { useAppSelector } from "../redux/store";
// icons
import SearchIcon from "../components/icon/SearchIcon";
import CalendarIcon from "../components/icon/CalendarIcon";
// components
import HeaderButton from "../components/button/HeaderButton";
//utils
import { toStringByFormatting, formatCountryToArray } from "../utils";
// content
import { KOREA_COUNTRY_TYPE, MODE_TYPE } from "../constant";

type Props = {
  onClick: () => void;
  mode: string;
};

export default function Header(props: Props) {
  const { onClick, mode } = props;

  const { homeForm, scrapForm } = useAppSelector((state) => state.post);

  const isHomeFormMode = mode === MODE_TYPE.home ? homeForm : scrapForm;

  const isHeadlineFilter = !!isHomeFormMode.keyword;
  const isDateFilter = isHomeFormMode.beginDate !== "1970-01-01";
  const isCountryFilter = isHomeFormMode.country !== "*";

  const formatCountry = formatCountryToArray(isHomeFormMode.country);

  return (
    <section className="flex w-full h-[60px] px-[20px] py-[13px] gap-[7px] border-b-[2px] bg-white">
      <HeaderButton
        onClick={onClick}
        iconElement={<SearchIcon />}
        label={isHeadlineFilter ? isHomeFormMode.keyword : "전체 헤드라인"}
        active={isHeadlineFilter}
        isTruncate
      />
      <HeaderButton
        onClick={onClick}
        iconElement={<CalendarIcon />}
        label={
          isDateFilter
            ? toStringByFormatting(new Date(isHomeFormMode.beginDate), ".")
            : "전체 날짜"
        }
        active={isDateFilter}
      />
      <HeaderButton
        onClick={onClick}
        label={
          isCountryFilter
            ? formatCountry.length === 1
              ? formatCountry[0]
              : `${KOREA_COUNTRY_TYPE[formatCountry[0]]} 외 ${
                  formatCountry.length
                }개`
            : "전체 국가"
        }
        active={isCountryFilter}
      />
    </section>
  );
}
