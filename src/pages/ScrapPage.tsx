import React from "react";
import { useAppSelector } from "../redux/store";
// components
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import ModalWrapper from "../components/modal/ModalWrapper";
import ModalItem from "../components/modal/ModalItem";
import NotFoundResult from "../components/NotFoundResult";

// zustand
import { useScrapStore } from "../zustand/store";
// types
import { DataType } from "../types";
// constant
import { MODE_TYPE } from "../constant";
// utils
import { toStringByFormatting } from "../utils";

export default function ScrapPage() {
  const { scrapForm } = useAppSelector((state) => state.post);
  // zustand
  const { check, data, updateCheckInLocalStorage } = useScrapStore();

  const [filterData, setFilterData] = React.useState<DataType[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleStarIconClick = (item: DataType) => {
    updateCheckInLocalStorage(item);
  };

  React.useEffect(() => {
    const filterData = data.reduce((res, cur) => {
      const isFind = cur.headline.includes(scrapForm.keyword);
      const isDate =
        scrapForm.beginDate === "1970-01-01"
          ? true
          : toStringByFormatting(new Date(cur.date), "-") ===
            scrapForm.beginDate;
      if (isFind && isDate) {
        return [...res, cur];
      }
      return res;
    }, []);
    setFilterData(filterData);
  }, [data, scrapForm]);

  console.log(check, "check ?");

  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      {isOpen && (
        <ModalWrapper
          onClose={() => setIsOpen(false)}
          children={
            <ModalItem
              onClose={() => setIsOpen(false)}
              mode={MODE_TYPE.scrap}
            />
          }
        />
      )}
      <Header onClick={() => setIsOpen(true)} mode={MODE_TYPE.scrap} />
      <section className="flex flex-col w-full h-full px-[20px] py-[20px] gap-[8px] overflow-auto">
        {check?.length ? (
          <>
            {filterData.map((item: DataType) => (
              <PostCard
                key={item.id}
                item={item}
                onStarClick={handleStarIconClick}
                onCheckedById={new Set(check)}
              />
            ))}
          </>
        ) : (
          <NotFoundResult />
        )}
      </section>
    </main>
  );
}
