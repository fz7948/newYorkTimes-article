import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import cx from "classnames";
// components
import BaseCalendar from "../calendar/BaseCalendar";
import TextInput from "../input/TextInput";
// constant
import { COUNTRY_TYPE, KOREA_COUNTRY_TYPE } from "../../constant";
// redux
import { setFormState } from "../../redux/postSlice";
// utils
import { toStringByFormatting, formatCountryToArray } from "../../utils";

const COUNTRY_BUTTON_CLASS = [
  "px-3",
  "py-2",
  "border",
  "rounded-[30px]", //
];

type FormType = {
  name: string;
  value: string | undefined;
};

type Props = {
  onClose: () => void;
};

export default function ModalItem(props: Props) {
  const { onClose } = props;

  const dispatch = useAppDispatch();
  const { form: formInStorage } = useAppSelector((state: any) => state.post);

  const [form, setForm] = React.useState({ date: "", keyword: "" });
  const [checkedById, setCheckedById] = React.useState<Set<string>>(new Set());

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormUpdate = (props: FormType) => {
    const { name, value } = props;
    setForm({ ...form, [name]: value });
  };

  const handleCountryUpdate = (en: any) => {
    const updatedCheckedById = new Set(checkedById);
    if (updatedCheckedById.has(en)) {
      updatedCheckedById.delete(en);
    } else {
      updatedCheckedById.add(en);
    }
    setCheckedById(updatedCheckedById);
  };

  const handleFormSubmit = () => {
    const formatCheckedById = [...checkedById].map((val) => COUNTRY_TYPE[val]);
    const baseCheckedById = [...formatCheckedById].join(", ");

    const formatForm = {
      beginDate: form.date ? form.date : toStringByFormatting(new Date(0), "-"),
      endDate: form.date ? form.date : toStringByFormatting(new Date(), "-"),
      keyword: form.keyword,
      country: baseCheckedById ? baseCheckedById : COUNTRY_TYPE.all,
    };
    dispatch(setFormState({ ...formInStorage, ...formatForm }));
    onClose();
  };

  React.useEffect(() => {
    const isAllDate = formInStorage.beginDate === "1970-01-01";
    const isAllCountry = formInStorage.country === "*";

    let countryList = [] as string[];

    if (!isAllCountry) {
      countryList = formatCountryToArray(formInStorage.country);
    }

    setForm({
      ...form,
      keyword: formInStorage.keyword,
      date: isAllDate ? "" : formInStorage.beginDate,
    });
    setCheckedById(new Set(countryList));
  }, [formInStorage]);

  return (
    <section className="flex flex-col justify-between w-full h-[480px] p-[20px]">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col w-full gap-[8px]">
          <label className="font-[600] text-[16px]">헤드라인</label>
          <TextInput
            name="keyword"
            value={form.keyword}
            onChange={handleFormChange}
            placeholder="검색하실 헤드라인을 입력해주세요."
          />
        </div>
        <div className="flex flex-col w-full gap-[8px]">
          <label className="font-[600] text-[16px]">날짜</label>
          <BaseCalendar
            name="date"
            onSelect={form.date}
            onUpdate={handleFormUpdate}
          />
        </div>
        <div className="flex flex-col w-full gap-[8px]">
          <label className="font-[600] text-[16px]">국가</label>
          <div className="flex flex-wrap gap-[5px]">
            {Object.entries(KOREA_COUNTRY_TYPE).map(([en, ko]: any) => (
              <button
                key={en}
                className={
                  checkedById.has(en)
                    ? cx(COUNTRY_BUTTON_CLASS, "bg-[#82B0F4] text-white")
                    : cx(COUNTRY_BUTTON_CLASS, "bg-white text-[#6D6D6D]")
                }
                onClick={() => handleCountryUpdate(en)}
              >
                <span>{ko}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-[60px] bg-[#3478F6] rounded-[16px] text-white font-[600] text-[16px]"
        onClick={handleFormSubmit}
      >
        필터 적용하기
      </button>
    </section>
  );
}
