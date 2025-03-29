import { FC, memo } from "react";
import { IIconProps } from "./type";
import { cn } from "../../utiles/cn/cn";

const IconCross: FC<IIconProps> = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center cursor-pointer",
        className
      )}
      {...props}
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.99365 1.04644C1.76634 0.817854 1.3978 0.817854 1.17048 1.04644C0.943172 1.27502 0.943172 1.64562 1.17048 1.87421L6.17683 6.90853L1.26045 11.8524C1.03314 12.081 1.03314 12.4516 1.26045 12.6801C1.48776 12.9087 1.85631 12.9087 2.08362 12.6801L7 7.7363L11.9164 12.6801C12.1437 12.9087 12.5122 12.9087 12.7396 12.6801C12.9669 12.4516 12.9669 12.081 12.7396 11.8524L7.82317 6.90853L12.8295 1.87421C13.0568 1.64562 13.0568 1.27502 12.8295 1.04644C12.6022 0.817854 12.2337 0.817854 12.0063 1.04644L7 6.08076L1.99365 1.04644Z"
          fill="currentColor"
          stroke="CurrentColor"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default memo(IconCross);
