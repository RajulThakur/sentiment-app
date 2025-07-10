import { ButtonHTMLAttributes, ReactNode } from "react";

type Theme = "base" | "transparent" | "none";
const styles: Record<Theme, string> = {
  base: "bg-slate-200 text-slate-900 font-medium rounded-md px-5 py-2 transition-colors hover:bg-slate-300 focus:outline-none dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 ",
  none: "",
  transparent:
    "text-slate-900 font-medium rounded-md p-2 transition-colors hover:bg-slate-300 focus:outline-none dark:text-slate-100 dark:hover:bg-slate-800 active:scale-[0.97] active:translate-y-[1px]  ",
};
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  theme?: Theme;
  isDisable?: boolean;
}

export default function Button({
  children,
  theme = "base",
  className = "",
  isDisable = false,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isDisable}
      className={`${styles[theme]} ${
        isDisable ? "cursor-not-allowed opacity-80 " : "cursor-pointer"
      } ${className}`}
      {...props}>
      {children}
    </button>
  );
}
