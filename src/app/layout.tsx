import { ReactNode } from "react";
import "@app/styles/global.css";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return children;
}
