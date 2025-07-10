import Navbar from "@/ui/navbar";
import Result from "@/ui/Result";
import Textarea from "@/ui/Textarea";

export default function Page() {
  return (
    <div className='w-dvw h-dvh p-4 bg-slate-100 dark:bg-black flex justify-center flex-col items-center'>
      <Navbar />
      <div className="grid w-full px-8 grid-cols-2 h-full max-h-1/3 gap-10 justify-center">
        <Textarea />
        <Result/>
      </div>
    </div>
  );
}
