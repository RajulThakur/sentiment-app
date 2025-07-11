'use client'
import { ResultData } from "@/types/types";
import Navbar from "@/ui/navbar";
import Result from "@/ui/Result";
import Textarea from "@/ui/Textarea";
import { useState } from "react";

export default function Page() {
  const [isLoading,setIsLoading]=useState(false);
  const [result, setResult] = useState<ResultData>();
    async function sendPostRequest(text: string) {
      try {
        setIsLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sentiment-analysis`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });
        const data = await response.json();
        setResult(data[0]);
        console.log("Response:", data[0]);
      } catch (error) {
        console.error("Error:", error);
      }finally{
        setIsLoading(false);
      }
    }
  return (
    <div className='p-4 lg:h-dvh bg-slate-100 dark:bg-black flex justify-center flex-col items-center'>
      <Navbar />
      <div className="flex flex-col lg:grid w-full pt-30 lg:pt-1 px-2 lg:px-8 grid-cols-2 h-full lg:max-h-96 gap-10 justify-center">
        <Textarea sendRequest={sendPostRequest} isLoading={isLoading} />
        <Result isLoading={isLoading} result={result}/>
      </div>
    </div>
  );
}
