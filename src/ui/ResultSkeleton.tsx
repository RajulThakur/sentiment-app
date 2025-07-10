import Card from "./Card";

export default function ResultSkeleton() {
  return (
    <Card>
      <div className='animate-pulse flex flex-col md:flex-row gap-8 items-stretch'>
        {/* Left: Stats and Words */}
        <div className='flex flex-col gap-6 flex-1 min-w-[250px]'>
          {/* Stat lines */}
          <div className='flex flex-col gap-3 mt-2'>
            <div className='h-5 bg-slate-200 dark:bg-slate-700 rounded w-32' />
            <div className='h-5 bg-slate-200 dark:bg-slate-700 rounded w-40' />
            <div className='h-5 bg-slate-200 dark:bg-slate-700 rounded w-28' />
          </div>
          {/* Words box */}
          <div className='bg-slate-200 dark:bg-slate-700 rounded-xl h-48 w-full mt-6' />
        </div>
        {/* Right: Pie chart skeleton */}
        <div className='flex-1 flex justify-center items-center min-w-[220px]'>
          <div className='rounded-full bg-slate-200 dark:bg-slate-700 w-80 h-80' />
        </div>
      </div>
    </Card>
  );
}
