"use client";
import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import Image from "next/image";
import { NewsListItemActions } from "./NewsListItemActions/NewsListItemActions";
import Link from "next/link";
import { NewsListItemTag } from "./NewsListItemTag/NewsListItemTag";
import { useState } from "react";

interface INewsListItemProps {
  item: INewsContract;
  setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveItem: React.Dispatch<React.SetStateAction<INewsContract | null>>;
  setIsOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NewsListItem = ({
  item,
  setIsOpenEditModal,
  setActiveItem,
  setIsOpenDeleteModal,
}: INewsListItemProps) => {
  const [imageError, setImageError] = useState(false);

  const onDelete = () => {
    setIsOpenDeleteModal(true);
    setActiveItem(item);
  };

  const onChangeNews = () => {
    setActiveItem(item);
    setIsOpenEditModal(true);
  };
  const shortDescription =
    item.description?.length > 200
      ? `${item.description?.slice(0, 200)}...`
      : item.description;
  return (
    <section className=" bg-primary-bg flex flex-col gap-3 p-4 border border-gray-200 rounded-sm">
      <div className="text-disabled flex justify-between">
        <span>{item.author}</span> <span>{item.datePublication}</span>
      </div>
      <Link href={`/${item.id}`}>
        <h2 className="header-4 hover:text-primary">{item.title}</h2>
      </Link>
      {item.tags?.length && (
        <div className="flex gap-1 flex-wrap">
          {item.tags.map((el) => (
            <NewsListItemTag key={el} el={el} />
          ))}
        </div>
      )}
      <div>{shortDescription}</div>
      {item.imageSrc && !imageError && (
        <div>
          <Image
            src={item.imageSrc || ""}
            alt={item.title}
            width={500}
            height={500}
            className="w-auto h-auto"
            priority
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <NewsListItemActions
        id={item.id}
        changeNews={onChangeNews}
        deleteNews={onDelete}
      />
    </section>
  );
};
