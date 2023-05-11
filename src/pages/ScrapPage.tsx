import React from "react";
// components
import Header from "../components/Header";
import PostCard from "../components/PostCard";
// zustand
import { useScrapStore } from "../store";
// types
import { DataType } from "../types";

export default function ScrapPage() {
  // zustand
  const { data, updateScrap } = useScrapStore();

  const handleStarIconClick = (item: DataType) => {
    const { id } = item;
    const updateData = data.reduce((res: DataType[], cur: DataType) => {
      if (cur.id === id) {
        return res;
      }
      return [...res, cur];
    }, []);

    updateScrap(updateData);
  };

  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      <Header />
      <section className="flex flex-col w-full h-full px-[20px] py-[20px] gap-[8px] overflow-auto">
        {data &&
          data.map((item: DataType) => (
            <PostCard
              key={item.id}
              item={item}
              onStarClick={handleStarIconClick}
            />
          ))}
      </section>
    </main>
  );
}
