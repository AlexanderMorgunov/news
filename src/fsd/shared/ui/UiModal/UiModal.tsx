"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";
import IconCross from "@/fsd/shared/ui/icons/IconCross";
import { cn } from "../../utiles/cn/cn";

interface IUiModal {
  header?: React.ReactNode | null;
  headerTitle?: string;
  closeIcon?: React.ReactNode;
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  closable?: boolean;
  className?: string;
  overlayClassName?: string;
  headerClassName?: string;
}

export const UiModal = ({
  closable = true,
  header,
  headerTitle = "",
  children,
  isOpen,
  setIsOpen,
  closeIcon = <IconCross />,
  className,
  headerClassName,
  overlayClassName,
}: IUiModal) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    document.documentElement.addEventListener("click", handleMouseMove);
    return () => {
      document.removeEventListener("click", handleMouseMove);
    };
  }, [mounted]);

  useClickAway(modalRef, (e) => {
    if (e.target === overlayRef.current && closable) {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      const keyDownHandler = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          if (closable) setIsOpen(false);
        }
      };

      document.addEventListener("keydown", keyDownHandler);
      return () => {
        document.removeEventListener("keydown", keyDownHandler);
      };
    }
  }, [isOpen, mounted]);

  const headerModal =
    typeof header === "undefined" ? (
      <div className={cn("flex justify-between items-center", headerClassName)}>
        <p className="text-2xl font-semibold align-baseline text-primary-text">
          {headerTitle}
        </p>
        <button
          className="flex items-center justify-center bg-transparent text-primary text-2xl h-6 border-none outline-none"
          onClick={() => setIsOpen(false)}
        >
          {closeIcon}
        </button>
      </div>
    ) : (
      header
    );

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          id="customModal"
          ref={overlayRef}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "will-change-[backdrop-filter] fixed left-0 top-0 w-full h-full bg-[rgba(18,20,23,0.6)] backdrop-blur-[15px] flex justify-center items-center z-10",
            overlayClassName
          )}
        >
          <motion.div
            ref={modalRef}
            style={{
              transformOrigin: mounted
                ? `${mouse.x - window.innerWidth / 2 + 550 / 2}px ${
                    mouse.y - window.innerHeight / 2 + 320 / 2
                  }px`
                : "center center",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              stiffness: 300,
              duration: 0.3,
            }}
            className={cn(
              "flex flex-col will-change-[backdrop-filter] min-w-[300px] min-h-[270px] max-w-[500px] max-h-[90vh] p-4",
              "rounded-[30px] relative z-[15] shadow-[0_10px_30px_0_rgba(0,106,255,0.08)] bg-white overflow-hidden overflow-y-scroll no-scrollbar",
              className
            )}
          >
            {headerModal}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
