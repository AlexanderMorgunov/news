import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { UiButton } from "@/fsd/shared/ui/UiButton/UiButton";
import { UiInput } from "@/fsd/shared/ui/UiInput/UiInput";
import { UiSpinner } from "@/fsd/shared/ui/UiSpinner/UiSpinner";
import { UiTextAria } from "@/fsd/shared/ui/UiTextAria/UiTextAria";
// import { useNewsModalForm } from "../hooks/useNewsModalForm";

interface INewsModalFormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  initialData?: INewsContract;
  isLoading?: boolean;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const NewsModalForm = ({
  initialData,
  isLoading = false,
  submit,
  ...props
}: INewsModalFormProps) => {
  return (
    <div className="flex flex-col w-[450px] max-w-full">
      <form className="flex flex-col gap-2 mt-4" {...props} onSubmit={submit}>
        <UiInput
          type="text"
          placeholder="Автор"
          label="Автор публикации*"
          initialValue={initialData?.author || ""}
          minLength={3}
          required
          name="author"
        />
        <UiInput
          type="date"
          placeholder="Дата публикации"
          label="Дата*"
          initialValue={
            initialData?.datePublication ||
            new Date().toISOString().slice(0, 10)
          }
          required
          minLength={3}
          name="datePublication"
        />
        <UiInput
          type="text"
          placeholder="Заголовок"
          label="Заголовок*"
          initialValue={initialData?.title}
          required
          minLength={3}
          name="title"
        />
        <UiInput
          type="text"
          placeholder="Ссылка на изображение"
          label="Картинка"
          initialValue={initialData?.imageSrc || ""}
          name="imageSrc"
        />
        <UiTextAria
          label="Описание*"
          placeholder="Описание"
          name="description"
          initialValue={initialData?.description}
          required
          minLength={10}
        />
        <UiInput
          type="text"
          placeholder="Теги через запятую"
          label="Теги"
          name="tags"
          initialValue={initialData?.tags?.join(", ")}
        />
        <UiButton variant="default" className="mt-4" type="submit">
          {isLoading ? (
            <UiSpinner
              className=" flex items-center justify-center"
              svgClassName="w-6 h-6 text-white"
            />
          ) : (
            "Сохранить"
          )}
        </UiButton>
      </form>
    </div>
  );
};
