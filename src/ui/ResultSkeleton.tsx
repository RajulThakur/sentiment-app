import Card from "./Card";

export default function ResultSkeleton() {
  return (
    <Card>
      <div className='animate-pulse flex flex-col md:flex-row gap-6 items-center'>
        <div className='flex-1 flex justify-center items-center min-w-[180px]'>
          <div className='rounded-full bg-slate-200 dark:bg-slate-700 w-40 h-40' />
        </div>
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 flex-1 w-full'>
          <div className='h-6 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-2' />
          <div className='h-6 bg-slate-200 dark:bg-slate-700 rounded w-24 mb-2' />
          <div className='h-6 bg-slate-200 dark:bg-slate-700 rounded w-40 mb-2' />
        </div>
      </div>
    </Card>
  );
}
