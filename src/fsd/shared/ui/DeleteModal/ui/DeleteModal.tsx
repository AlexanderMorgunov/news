"use client";
import { UiModal } from "@/fsd/shared/ui/UiModal/UiModal";
import { DeleteModalActions } from "./DeleteModalActions";

interface IDeleteModalProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  headerTitle: string;
  onDelete: () => void;
  loading?: boolean;
}

export const DeleteModal = ({
  isOpen,
  setIsOpen,
  headerTitle,
  onDelete,
  loading,
}: IDeleteModalProps) => {
  return (
    <UiModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      headerTitle={"Действительно хотите удалить?"}
      className="flex flex-col gap-2 "
    >
      <div className="flex flex-col justify-between h-full grow-1">
        <p className="body-1">{headerTitle}</p>
        <DeleteModalActions
          onCancel={() => setIsOpen(false)}
          onDelete={onDelete}
          loading={loading}
          className="items-end self-end"
        />
      </div>
    </UiModal>
  );
};
