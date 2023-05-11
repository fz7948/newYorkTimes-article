import React from "react";
import cx from "classnames";
// components
import BaseCalendar from "../calendar/BaseCalendar";
import TextInput from "../input/TextInput";
// constant
import { COUNTRY_TYPE, KOREA_COUNTRY_TYPE } from "../../constant";

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

export default function ModalItem() {
  const [form, setForm] = React.useState({ date: "", keyword: "" });
  const [checkedById, setCheckedById] = React.useState<Set<number>>(new Set());

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
    console.log();
  };

  console.log(checkedById, "checkedById ?");

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
