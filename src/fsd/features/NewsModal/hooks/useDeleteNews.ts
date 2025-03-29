import { useNews } from "@/fsd/shared/hooks/useNews";

export const useDeleteNews = () => {
  const { deleteNews, loading } = useNews();

  const onDelete = (id: number) => {
    deleteNews(id);
  };
  return {
    onDelete,
    loading,
  };
};
