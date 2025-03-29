import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface INewsStore {
  news: INewsContract[];
  addNews: (newNews: INewsContract) => void;
  removeNews: (id: number) => void;
  editNews: (editingNews: INewsContract) => void;
  setNews: (news: INewsContract[]) => void;
}

export const useNewsStore = create<INewsStore>()(
  devtools(
    immer((set) => ({
      news: [],
      addNews: (newNews: INewsContract) =>
        set((state) => ({ news: [...state.news, newNews] })),
      removeNews: (id: number) =>
        set((state) => ({
          news: state.news.filter((n: INewsContract) => n.id !== id),
        })),
      editNews: (editingNews: INewsContract) => {
        set((state) => ({
          news: state.news.map((n: INewsContract) => {
            if (n.id === editingNews.id) {
              return editingNews;
            }
            return n;
          }),
        }));
      },
      setNews: (news: INewsContract[]) => set({ news }),
    }))
  )
);
