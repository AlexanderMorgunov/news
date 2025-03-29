"use client";
import { UiButton } from "@/fsd/shared/ui/UiButton/UiButton";
import Link from "next/link";

export const DetailNewsPageHeader = () => {
  return (
    <div className="flex flex-col gap-3 bg-primary-bg p-4 rounded-sm">
      <h1 className="header-1 text text-primary">Новости</h1>
      <div>
        <Link href="/">
          <UiButton variant="default">Назад</UiButton>
        </Link>
      </div>
    </div>
  );
};
