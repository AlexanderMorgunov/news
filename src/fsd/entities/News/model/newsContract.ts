export interface INewsContract {
  title: string;
  imageSrc: string | null;
  description: string;
  author: string | null;
  datePublication: string;
  id: number;
  tags?: string[];
}
