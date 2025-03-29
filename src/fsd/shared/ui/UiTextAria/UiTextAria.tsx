import { useState } from "react";
import { cn } from "../../utiles/cn/cn";

interface IUiTextAria
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  wrapperClassName?: string;
  label?: string;
  initialValue?: string;
}

export const UiTextAria = ({
  wrapperClassName,
  className,
  initialValue,
  ...props
}: IUiTextAria) => {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="flex flex-col gap-1">
      {props.label && <label className="px-2 body-3">{props.label}</label>}
      <div
        className={cn(
          "border border-primary min-w-fit rounded-md flex items-center",
          wrapperClassName
        )}
      >
        <textarea
          className={cn("px-2 py-1 w-full ", className)}
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};
