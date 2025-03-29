import { DetailNewsPage } from "@/fsd/pages/DetailNewsPage/DetailNewsPage";

export default async function Page({ params }: { params: { id: number } }) {
  const { id } = await params;
  return <DetailNewsPage id={Number(id)} />;
}
