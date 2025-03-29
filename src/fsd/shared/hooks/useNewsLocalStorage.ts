import { useEffect, useState } from "react";
import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { mockNews } from "@/fsd/features/NewsList/model/mockData/mockNews";

export const useNewsLocalStorage = () => {
  const [loading, setLoading] = useState(true);

  // Безопасный доступ к localStorage
  const safeLocalStorage = {
    set: (key: string, value: string) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, value);
      }
    },
    get: (key: string): string | null => {
      if (typeof window !== "undefined") {
        return localStorage.getItem(key);
      }
      return null;
    },
  };

  // Инициализация только на клиенте
  useEffect(() => {
    if (typeof window !== "undefined" && !safeLocalStorage.get("isVisit")) {
      safeLocalStorage.set("news", JSON.stringify(mockNews));
      safeLocalStorage.set("isVisit", "true");
    }
  }, []);

  const addNewsLocalStorage = (newNews: INewsContract) => {
    try {
      const currentNews = getNewsLocalStorage();
      const updatedNews = [...currentNews, newNews];
      safeLocalStorage.set("news", JSON.stringify(updatedNews));
    } catch (error) {
      console.error("Failed to add news to localStorage:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeNewsLocalStorage = (id: number) => {
    try {
      const currentNews = getNewsLocalStorage();
      const updatedNews = currentNews.filter((n: INewsContract) => n.id !== id);
      safeLocalStorage.set("news", JSON.stringify(updatedNews));
    } catch (error) {
      console.error("Failed to remove news from localStorage:", error);
    } finally {
      setLoading(false);
    }
  };

  const getNewsLocalStorage = (): INewsContract[] => {
    try {
      const data = safeLocalStorage.get("news");
      if (!data) return [];

      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Failed to parse news from localStorage:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const editNewsLocalStorage = (editingNews: INewsContract) => {
    try {
      const currentNews = getNewsLocalStorage();
      const updatedNews = currentNews.map((n: INewsContract) => {
        if (n.id === editingNews.id) {
          return editingNews;
        }
        return n;
      });
      safeLocalStorage.set("news", JSON.stringify(updatedNews));
    } catch (error) {
      console.error("Failed to edit news in localStorage:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    addNewsLocalStorage,
    removeNewsLocalStorage,
    getNewsLocalStorage,
    editNewsLocalStorage,
    loading,
  };
};
