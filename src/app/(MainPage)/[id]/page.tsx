import { DetailNewsPage } from "@/fsd/pages/DetailNewsPage/DetailNewsPage";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <DetailNewsPage id={Number(id)} />;
}
