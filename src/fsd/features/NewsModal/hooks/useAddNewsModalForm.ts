import { INewsContract } from "@/fsd/entities/News/model/newsContract";
import { generateNumberId } from "@/fsd/shared/helpers/generateNumberId";

export const useAddNewsModalForm = ({
  submit,
}: {
  submit: (data: INewsContract) => void;
}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: INewsContract = {
      author: formData.get("author") as string,
      datePublication: formData.get("datePublication") as string,
      title: formData.get("title") as string,
      imageSrc: formData.get("imageSrc") as string,
      description: formData.get("description") as string,
      id: generateNumberId(),
      tags: (formData.get("tags") as string)?.split(","),
    };
    submit(data);
  };
  return { onSubmit };
};
