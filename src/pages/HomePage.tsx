import React from "react";
// components
import Header from "../components/Header";
import PostCard from "../components/PostCard";
// hooks
import useIntersectionObserver from "../hooks/useIntersectionObserver";
// utils
import { formatArticlesearchApi } from "../utils";
// types
import { COUNTRY_TYPE, FormType, DataType } from "../types";
// service
import { getArticlesearchApi } from "../service";

export default function HomePage() {
  const [data, setData] = React.useState<DataType[]>([]);
  const [form, setForm] = React.useState<FormType>({
    page: 1,
    keyword: "",
    beginDate: new Date(0),
    endDate: new Date(),
    country: COUNTRY_TYPE.all,
  });

  console.log(data, "data ?");

  React.useEffect(() => {
    getArticlesearchApi(form) //
      .then((res: DataType) => setData(formatArticlesearchApi(res)));
  }, [form]);

  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      <Header />
      <section className="flex flex-col w-full h-full px-[20px] py-[20px] gap-[8px] overflow-auto">
        {data.map((item) => (
          <PostCard item={item} />
        ))}
      </section>
    </main>
  );
}
