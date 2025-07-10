import { HTMLAttributes, ReactNode } from "react";

interface StatItemProp extends HTMLAttributes<HTMLDivElement>{
    label:string;
    value:ReactNode;
}
export default function StatItem({ label, value,...props }:StatItemProp) {
  return (
    <div className='flex flex-col items-start gap-0.5' {...props}>
      <span className='text-xs text-slate-300 font-semibold'>{label}</span>
      <span className='text-base font-semibold text-slate-800 dark:text-slate-100'>
        {value}
      </span>
    </div>
  );
}
