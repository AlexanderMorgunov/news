import { useEffect } from "react";

type ClickOutsideCallback = () => void;

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: ClickOutsideCallback
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
};
