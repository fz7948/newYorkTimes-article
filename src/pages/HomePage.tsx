import React from "react";
// components
import Header from "../components/Header";
import PostContainer from "../components/PostContainer";
// hooks
import useIntersectionObserver from "../hooks/useIntersectionObserver";
// utils
import { formatArticlesearchApi } from "../utils";
// types
import { FormType, DataType, DocsInterface } from "../types";
// service
import { getArticlesearchApi } from "../service";
// constant
import { COUNTRY_TYPE } from "../constant";

export default function HomePage() {
  const [data, setData] = React.useState<DataType[]>([]);
  const [form, setForm] = React.useState<FormType>({
    page: 1,
    keyword: "",
    beginDate: new Date(0),
    endDate: new Date(),
    country: COUNTRY_TYPE.all,
  });

  const target = React.useRef<HTMLDivElement | null>(null);
  const [observe, unobserve] = useIntersectionObserver(() => {
    setForm((prev: FormType) => {
      return { ...form, page: prev.page + 1 };
    });
  });

  console.log(data, "data ?");

  React.useEffect(() => {
    if (form.page === 1) observe(target.current as HTMLDivElement);
  }, [data]);

  console.log(form, "form ?");

  React.useEffect(() => {
    // getArticlesearchApi(form) //
    //   .then((res: DocsInterface[]) => {
    //     if (!res || !res?.length) {
    //       unobserve(target.current as HTMLDivElement);
    //     } else {
    //       setData([...data, ...formatArticlesearchApi(res)]);
    //     }
    //   });
  }, [form.page]);

  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      <Header />
      <PostContainer
        target={target}
        data={data} //
      />
    </main>
  );
}
