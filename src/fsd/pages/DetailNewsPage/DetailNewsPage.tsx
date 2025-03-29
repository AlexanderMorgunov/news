import { DetailNewsPageHeader } from "@/fsd/features/DetailNewsPageHeader/DetailNewsPageHeader";
import { DetailNewsView } from "@/fsd/features/DetailNewsView";

export const DetailNewsPage = ({ id }: { id: number }) => {
  return (
    <div className="wrapper flex flex-col gap-6 mt-2 mb-2">
      <DetailNewsPageHeader />
      <DetailNewsView id={id} />
    </div>
  );
};
