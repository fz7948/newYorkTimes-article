import { create } from "zustand";
import { persist } from "zustand/middleware";
// types
import { DataType } from "./types";

interface IScrapState {
  data: DataType[];
  addScrap: (by: DataType) => void;
  updateScrap: (by: DataType[]) => void;
}

export const useScrapStore = create<IScrapState>()(
  persist(
    (set, get) => ({
      data: [],
      addScrap: (by) =>
        set((state) => {
          return { data: [...state.data, by] };
        }),
      updateScrap: (by: DataType[]) =>
        set((state) => {
          return { data: by };
        }),
    }),
    { name: "scrap-storage" },
  ),
);
