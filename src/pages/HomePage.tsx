import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
// components
import Header from "../components/Header";
import PostContainer from "../components/PostContainer";
import Loading from "../components/Loading";
// hooks
import useIntersectionObserver from "../hooks/useIntersectionObserver";
// utils
import { formatArticlesearchApi } from "../utils";
// types
import { FormType, DataType } from "../types";
// constant
import { COUNTRY_TYPE } from "../constant";
// redux
import { getPostsInStorage } from "../redux/postSlice";
// zustand
import { useScrapStore } from "../store";

export default function HomePage() {
  // redux
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.post);
  // zustand
  const { data, addScrap } = useScrapStore();

  const [clientData, setClientData] = React.useState<DataType[]>([]);
  const [form, setForm] = React.useState<FormType>({
    page: 1,
    keyword: "",
    beginDate: new Date(0),
    endDate: new Date(),
    country: COUNTRY_TYPE.all,
  });
  const [checkedById, setCheckedById] = React.useState<Set<string>>(new Set());

  const target = React.useRef<HTMLDivElement | null>(null);
  const [observe, unobserve] = useIntersectionObserver(() => {
    setForm((prev: FormType) => {
      return { ...form, page: prev.page + 1 };
    });
  });

  console.log(data, "data", clientData);

  const handleStarIconClick = (item: DataType) => {
    const updatedCheckedById = new Set([...checkedById]);
    if (updatedCheckedById.has(item.id)) {
      updatedCheckedById.delete(item.id);
    } else {
      updatedCheckedById.add(item.id);
    }
    setCheckedById(updatedCheckedById);
    addScrap(item);
  };

  React.useEffect(() => {
    if (form.page === 1) observe(target.current as HTMLDivElement);
  }, [clientData]);

  React.useEffect(() => {
    dispatch(getPostsInStorage(form)) //
      .then(({ payload }) => {
        if (!payload && target.current) {
          unobserve(target.current as HTMLDivElement);
        } else {
          setClientData([...clientData, ...formatArticlesearchApi(payload)]);
        }
      });
  }, [form.page]);

  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      {loading && <Loading />}
      <Header />
      <PostContainer
        target={target}
        data={clientData}
        onStarClick={handleStarIconClick}
        onCheckedById={checkedById}
      />
    </main>
  );
}
