"use client";
import { UiButton } from "@/fsd/shared/ui/UiButton/UiButton";
import { AddNewsModal } from "../../NewsModal/ui/AddNewsModal";
import { useState } from "react";

export const NewsHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3 bg-primary-bg p-4 rounded-sm">
      <h1 className="header-1 text text-primary">Новости</h1>
      <div>
        <UiButton variant="default" onClick={() => setIsOpen(true)}>
          + Добавить новость
        </UiButton>
      </div>
      <AddNewsModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
