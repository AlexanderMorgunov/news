"use client";
import { UiModal } from "@/fsd/shared/ui/UiModal/UiModal";
import { NewsModalForm } from "./NewsModalForm";
import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { useNews } from "@/fsd/shared/hooks/useNews";
import { useAddNewsModalForm } from "../hooks/useAddNewsModalForm";

interface INewsModalProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const AddNewsModal = ({ isOpen, setIsOpen }: INewsModalProps) => {
  const { createNews, loading } = useNews();
  const submitForm = (data: INewsContract) => {
    createNews(data);
    if (!loading) setIsOpen(false);
  };
  const { onSubmit } = useAddNewsModalForm({ submit: submitForm });
  return (
    <UiModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      headerTitle="Добавить новость"
    >
      <NewsModalForm submit={onSubmit} isLoading={loading} />
    </UiModal>
  );
};
