import React from "react";

export const NewsListItemTag = ({ el }: { el: string }) => {
  return (
    <span
      key={el}
      className="body-3 text-disabled bg-fuchsia-50 px-2 py-1 border border-gray-200 rounded-xl flex items-center"
    >
      {el}
    </span>
  );
};
