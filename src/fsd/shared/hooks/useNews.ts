import { useNewsStore } from "@/fsd/app/store/store";
import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { useEffect } from "react";
import { useNewsLocalStorage } from "./useNewsLocalStorage";

export const useNews = () => {
  const { news, addNews, removeNews, setNews, editNews } = useNewsStore(
    (state) => state
  );
  const {
    getNewsLocalStorage,
    addNewsLocalStorage,
    removeNewsLocalStorage,
    editNewsLocalStorage,
    loading,
  } = useNewsLocalStorage();

  const deleteNews = (id: number) => {
    removeNews(id);
    removeNewsLocalStorage(id);
  };
  const createNews = (newNews: INewsContract) => {
    addNews(newNews);
    addNewsLocalStorage(newNews);
  };

  const changeNews = (editingNews: INewsContract) => {
    editNewsLocalStorage(editingNews);
    editNews(editingNews);
  };

  const getNewsById = (id: number) => {
    return news.find((n) => n.id === Number(id)) || null;
  };

  useEffect(() => {
    if (getNewsLocalStorage().length) {
      setNews(getNewsLocalStorage());
    }
  }, []);

  return {
    news,
    createNews,
    deleteNews,
    loading,
    changeNews,
    getNewsById,
  };
};
