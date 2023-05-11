import { create } from "zustand";
import { persist } from "zustand/middleware";
// types
import { DataType } from "../types";

interface IScrapState {
  data: DataType[];
  check: string[];
  updateCheckInLocalStorage: (by: DataType) => void;
}

export const useScrapStore = create<IScrapState>()(
  persist(
    (set, get) => ({
      data: [],
      check: [],
      updateCheckInLocalStorage: (by) =>
        set((state) => {
          let baseData = [...state.data];
          const updatedCheckedById = new Set([...state.check]);
          if (updatedCheckedById.has(by.headline)) {
            updatedCheckedById.delete(by.headline);
            baseData = baseData.reduce((res, cur) => {
              if (cur.headline === by.headline) {
                return res;
              }
              return [...res, cur];
            }, []);
          } else {
            updatedCheckedById.add(by.headline);
            baseData = [...baseData, { ...by }];
          }
          return { check: [...updatedCheckedById], data: baseData };
        }),
    }),
    { name: "scrap-storage" },
  ),
);
