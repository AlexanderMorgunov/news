import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { DeleteModal } from "@/fsd/shared/ui/DeleteModal";
import { useDeleteNews } from "../hooks/useDeleteNews";

interface IDeleteNewsModalProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  activeNews: INewsContract;
}

export const DeleteNewsModal = ({
  isOpen,
  setIsOpen,
  activeNews,
}: IDeleteNewsModalProps) => {
  const { loading, onDelete } = useDeleteNews();
  const shortTitle =
    activeNews.title.length > 100
      ? `${activeNews.title.slice(0, 100)}...`
      : activeNews.title;
  const handleDelete = () => {
    onDelete(activeNews.id);
    setIsOpen(false);
  };
  return (
    <DeleteModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      headerTitle={`Вы уверены что хотите удалить новость с заголовком "${shortTitle}"?`}
      onDelete={handleDelete}
      loading={loading}
    />
  );
};
