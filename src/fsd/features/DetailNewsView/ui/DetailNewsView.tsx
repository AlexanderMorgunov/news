"use client";

import { useNews } from "@/fsd/shared/hooks/useNews";
import { UiSpinner } from "@/fsd/shared/ui/UiSpinner/UiSpinner";
import { NewsListItemTag } from "@/fsd/widgets/NewsListItem/ui/NewsListItemTag/NewsListItemTag";
import Image from "next/image";
import { useState } from "react";

interface IDetailNewsViewProps {
  id: number;
}
export const DetailNewsView = ({ id }: IDetailNewsViewProps) => {
  const { getNewsById, loading } = useNews();
  const news = getNewsById(id);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      {loading ? (
        <UiSpinner
          className="self-center flex items-center justify-center"
          svgClassName="w-20 h-20"
        />
      ) : news ? (
        <section className="bg-primary-bg flex flex-col gap-3 p-4 border border-gray-200 rounded-sm">
          <div className="text-disabled flex justify-between">
            <span>{news.author}</span> <span>{news.datePublication}</span>
          </div>
          <h2 className="header-3 hover:text-primary">{news.title}</h2>
          <>
            {news.tags?.length && (
              <div className="flex gap-1 flex-wrap">
                {news.tags.map((el) => (
                  <NewsListItemTag key={el} el={el} />
                ))}
              </div>
            )}
          </>
          {news.imageSrc && !imageError && (
            <div>
              <Image
                src={news.imageSrc || ""}
                alt={news.title}
                width={800}
                height={800}
                className="w-auto h-auto"
                priority
                onError={() => setImageError(true)}
              />
            </div>
          )}
          <p className="body-1">{news.description}</p>
        </section>
      ) : (
        <div className="body-1">Новость не найдена</div>
      )}
    </>
  );
};
