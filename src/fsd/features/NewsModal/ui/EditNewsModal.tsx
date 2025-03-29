"use client";
import { UiModal } from "@/fsd/shared/ui/UiModal/UiModal";
import { NewsModalForm } from "./NewsModalForm";
import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { useNews } from "@/fsd/shared/hooks/useNews";
import { useEditNewsModalForm } from "../hooks/useEditNewsModalForm";

interface IEditNewsModalProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  activeNews: INewsContract;
}

export const EditNewsModal = ({
  isOpen,
  setIsOpen,
  activeNews,
}: IEditNewsModalProps) => {
  const { changeNews, loading } = useNews();
  const submitForm = (data: INewsContract) => {
    console.log(data);
    changeNews(data);
    if (!loading) setIsOpen(false);
  };
  const { onSubmit } = useEditNewsModalForm({
    submit: submitForm,
    id: activeNews.id,
  });
  return (
    <UiModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      headerTitle="Редактировать новость"
    >
      <NewsModalForm
        submit={onSubmit}
        isLoading={loading}
        initialData={activeNews}
      />
    </UiModal>
  );
};
