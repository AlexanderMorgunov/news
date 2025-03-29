import { cn } from "@/fsd/shared/utiles/cn/cn";
import { UiButton } from "../../UiButton/UiButton";
import { UiSpinner } from "../../UiSpinner/UiSpinner";

interface IDeleteModalActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onDelete: () => void;
  onCancel: () => void;
  loading?: boolean;
}
export const DeleteModalActions = ({
  className,
  onDelete,
  onCancel,
  loading,
  ...props
}: IDeleteModalActionsProps) => {
  return (
    <div className={cn("flex gap-2 flex-wrap", className)} {...props}>
      <UiButton variant="outline-danger" onClick={onDelete}>
        {loading ? (
          <UiSpinner
            className=" flex items-center justify-center"
            svgClassName="w-6 h-6 text-white"
          />
        ) : (
          "Удалить"
        )}
      </UiButton>
      <UiButton variant="default" onClick={onCancel}>
        Отменить
      </UiButton>
    </div>
  );
};
