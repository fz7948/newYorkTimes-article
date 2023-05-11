import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
// components
import Header from "../components/Header";
import PostContainer from "../components/PostContainer";
import Loading from "../components/Loading";
import ModalWrapper from "../components/modal/ModalWrapper";
import ModalItem from "../components/modal/ModalItem";
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
import { useScrapStore } from "../zustand/store";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.post);
  const { check, updateCheckInLocalStorage } = useScrapStore();

  const [clientData, setClientData] = React.useState<DataType[]>([]);
  const [form, setForm] = React.useState<FormType>({
    page: 1,
    keyword: "",
    beginDate: new Date(0),
    endDate: new Date(),
    country: COUNTRY_TYPE.all,
  });
  const [isOpen, setIsOpen] = React.useState(true);

  const target = React.useRef<HTMLDivElement | null>(null);
  const [observe, unobserve] = useIntersectionObserver(() => {
    setForm((prev: FormType) => {
      return { ...form, page: prev.page + 1 };
    });
  });

  const handleStarIconClick = (item: DataType) => {
    updateCheckInLocalStorage(item);
  };

  React.useEffect(() => {
    if (form.page === 1) observe(target.current as HTMLDivElement);
  }, [clientData]);

  React.useEffect(() => {
    // dispatch(getPostsInStorage(form)) //
    //   .then(({ payload }) => {
    //     if (!payload && target.current) {
    //       unobserve(target.current as HTMLDivElement);
    //     } else {
    //       setClientData([...clientData, ...formatArticlesearchApi(payload)]);
    //     }
    //   });
  }, [form.page]);

  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      {loading && <Loading />}
      {isOpen && (
        <ModalWrapper
          onClose={() => setIsOpen(false)}
          children={<ModalItem />}
        />
      )}
      <Header />
      <PostContainer
        target={target}
        data={clientData}
        onStarClick={handleStarIconClick}
        onCheckedById={new Set(check)}
      />
    </main>
  );
}
