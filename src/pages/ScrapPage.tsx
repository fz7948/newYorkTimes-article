import React from "react";
// components
import Header from "../components/Header";
import PostCard from "../components/PostCard";
// zustand
import { useScrapStore } from "../zustand/store";
// types
import { DataType } from "../types";

export default function ScrapPage() {
  // zustand
  const { check, data, updateCheckInLocalStorage } = useScrapStore();

  const [filterData, setFilterData] = React.useState<DataType[]>([]);

  const handleStarIconClick = (item: DataType) => {
    updateCheckInLocalStorage(item);
  };

  const handleHeaderClick = () => {
    // setIsOpen(true);
  };

  React.useEffect(() => {
    setFilterData(data);
  }, [data]);

  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      <Header onClick={handleHeaderClick} />
      <section className="flex flex-col w-full h-full px-[20px] py-[20px] gap-[8px] overflow-auto">
        {filterData &&
          filterData.map((item: DataType) => (
            <PostCard
              key={item.id}
              item={item}
              onStarClick={handleStarIconClick}
              onCheckedById={new Set(check)}
            />
          ))}
      </section>
    </main>
  );
}
