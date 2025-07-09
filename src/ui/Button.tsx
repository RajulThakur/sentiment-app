
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const baseStyles="bg-slate-200 text-slate-900 font-medium rounded-md px-5 py-2 transition-colors hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-40 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:focus:ring-slate-500"

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${className}`}
      {...props}>
      {children}
    </button>
  );
}
