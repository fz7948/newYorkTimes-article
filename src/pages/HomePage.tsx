import React from "react";
// components
import Header from "../components/Header";
// hooks
import useIntersectionObserver from "../hooks/useIntersectionObserver";
// utils
import { toStringByFormatting } from "../utils";
// types
import { COUNTRY_TYPE, FormType } from "../types";
// service
import { getArticlesearchApi } from "../service";

export default function HomePage() {
  const [data, setData] = React.useState([]);
  const [form, setForm] = React.useState<FormType>({
    page: 1,
    keyword: "",
    beginDate: toStringByFormatting(new Date(0)),
    endDate: toStringByFormatting(new Date()),
    country: COUNTRY_TYPE.all,
  });

  console.log(data, "data ?");

  React.useEffect(() => {
    getArticlesearchApi(form).then((res) => setData(res));
  }, [form]);

  return (
    <main className="flex flex-col mx-auto w-full h-full">
      <Header />
      <section className="flex flex-col w-full h-full px-[20px] pt-[20px] gap-[8px]">
        <div className="flex flex-col justify-between w-full h-[104px] bg-slate-200 rounded-[8px] px-[20px] py-[10px]">
          <div className="flex w-full">
            <div className="w-full h-[56px] bg-slate-300"></div>
            <div className="w-[30px] h-[56px] bg-slate-400"></div>
          </div>
          <div className="flex w-full h-full">
            <div className="flex w-full bg-slate-500"></div>
            <div className="w-[68px] bg-slate-600"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
