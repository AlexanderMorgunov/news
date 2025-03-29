import { NewsHeader } from "@/fsd/features/NewsHeader/ui/NewsHeader";
import { NewsList } from "@/fsd/features/NewsList/NewsList";

export const NewsPage = () => {
  return (
    <div className="wrapper flex flex-col gap-6 mt-2 mb-2">
      <NewsHeader />
      <NewsList />
    </div>
  );
};
