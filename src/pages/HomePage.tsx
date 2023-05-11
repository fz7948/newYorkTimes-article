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
import { DataType } from "../types";
// redux
import { getPostsInStorage } from "../redux/postSlice";
// zustand
import { useScrapStore } from "../zustand/store";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const { loading, form: formInStorage } = useAppSelector(
    (state) => state.post,
  );
  const { check, updateCheckInLocalStorage } = useScrapStore();

  const [clientData, setClientData] = React.useState<DataType[]>([]);
  const [page, setPage] = React.useState({ number: 1 });
  const [isOpen, setIsOpen] = React.useState(false);

  const target = React.useRef<HTMLDivElement | null>(null);
  const [observe, unobserve] = useIntersectionObserver(() => {
    setPage((prev: { number: number }) => {
      return { ...prev, number: prev.number + 1 };
    });
  });

  const handleStarIconClick = (item: DataType) => {
    updateCheckInLocalStorage(item);
  };

  React.useEffect(() => {
    if (page.number === 1) observe(target.current as HTMLDivElement);
  }, [clientData]);

  React.useEffect(() => {
    dispatch(getPostsInStorage({ form: formInStorage, page: page.number })) //
      .then(({ payload }) => {
        if (!payload && target.current) {
          unobserve(target.current as HTMLDivElement);
        } else {
          setClientData([...clientData, ...formatArticlesearchApi(payload)]);
        }
      });
  }, [page]);

  React.useEffect(() => {
    setClientData([]);
    setPage({ ...page, number: 1 });
  }, [formInStorage]);

  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      {loading && <Loading />}
      {isOpen && (
        <ModalWrapper
          onClose={() => setIsOpen(false)}
          children={<ModalItem onClose={() => setIsOpen(false)} />}
        />
      )}
      <Header onClick={() => setIsOpen(true)} />
      <PostContainer
        target={target}
        data={clientData}
        onStarClick={handleStarIconClick}
        onCheckedById={new Set(check)}
      />
    </main>
  );
}
