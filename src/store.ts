import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IReviewState {
  data: "";
}

export const useReviewStore = create<IReviewState>()(
  persist(
    (set, get) => ({
      data: "",
    }),
    { name: "review-storage" },
  ),
);
