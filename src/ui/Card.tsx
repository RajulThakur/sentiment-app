import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className='bg-white dark:bg-slate-800 rounded-xl shadow-md p-2 lg:p-4 w-full'>
      {children}
    </div>
  );
}
