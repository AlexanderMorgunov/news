import { cn } from "../../utiles/cn/cn";

interface IUiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "outline-danger";
}

export const UiButton = ({
  children,
  className,
  variant = "default",
  ...props
}: IUiButtonProps) => {
  const classNames = {
    default:
      "bg-primary text-white hover:bg-hover active:bg-active disabled:bg-disabled",
    outline:
      "border border-outline-foreground  hover:border-hover hover:text-hover active:border-active active:text-active disabled:border-disabled disabled:text-disabled",
    ghost:
      "text-primary hover:text-hover active:text-active disabled:text-disabled",
    ["outline-danger"]: "border border-error text-error ",
  }[variant];

  return (
    <button
      {...props}
      className={cn(
        "px-2 py-1 border-0 rounded cursor-pointer body-2",
        classNames,
        className
      )}
    >
      {children}
    </button>
  );
};
