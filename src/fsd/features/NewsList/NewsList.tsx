"use client";
import React from "react";
import { NewsListItem } from "@/fsd/widgets/NewsListItem";
import { useNews } from "@/fsd/shared/hooks/useNews";
import { UiSpinner } from "@/fsd/shared/ui/UiSpinner/UiSpinner";
import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { EditNewsModal } from "../NewsModal/ui/EditNewsModal";
import { DeleteNewsModal } from "../NewsModal/ui/DeleteNewsModal";

export const NewsList = () => {
  const { news, loading } = useNews();

  const [isOpenEditModal, setIsOpenEditModal] = React.useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<INewsContract | null>(
    null
  );

  return (
    <div className="flex flex-col gap-5 text-primary-text">
      {news.length ? (
        news.map((el) => (
          <NewsListItem
            key={el.id}
            item={el}
            setIsOpenEditModal={setIsOpenEditModal}
            setActiveItem={setActiveItem}
            setIsOpenDeleteModal={setIsOpenDeleteModal}
          />
        ))
      ) : loading ? (
        <UiSpinner className="self-center" svgClassName="w-20 h-20" />
      ) : (
        <div className="body-1">Новостей нет</div>
      )}
      {activeItem && (
        <>
          <EditNewsModal
            isOpen={isOpenEditModal}
            setIsOpen={setIsOpenEditModal}
            activeNews={activeItem}
          />
          <DeleteNewsModal
            activeNews={activeItem}
            isOpen={isOpenDeleteModal}
            setIsOpen={setIsOpenDeleteModal}
          />
        </>
      )}
    </div>
  );
};
