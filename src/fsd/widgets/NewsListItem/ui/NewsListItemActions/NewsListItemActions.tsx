import { UiButton } from "@/fsd/shared/ui/UiButton/UiButton";
import Link from "next/link";

interface INewsListItemActionsProps {
  deleteNews?: (id: number) => void;
  changeNews: (id: number) => void;
  id: number;
}

export const NewsListItemActions = ({
  changeNews,
  deleteNews,
  id,
}: INewsListItemActionsProps) => {
  return (
    <div className="flex gap-2 flex-wrap max-w-[500px]">
      <Link href={`/${id}`}>
        <UiButton variant="outline" className="grow-1">
          Читать полностью
        </UiButton>
      </Link>
      <UiButton
        variant="default"
        onClick={() => changeNews?.(id)}
        className="grow-1"
      >
        Редактировать
      </UiButton>
      <UiButton
        variant="outline-danger"
        onClick={() => deleteNews?.(id)}
        className="grow-1"
      >
        Удалить
      </UiButton>
    </div>
  );
};
