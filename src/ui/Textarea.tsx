"use client";
import { SendHorizonal } from "lucide-react";
import { FormEvent, useState } from "react";
import Button from "./Button";

export default function Textarea({
  sendRequest,
  isLoading
}: {
  sendRequest: (value:string) => Promise<void>;
  isLoading:boolean;
}) {
  const [value, setValue] = useState("");
async function handleSubmit(e:FormEvent<HTMLFormElement>) {
      e.preventDefault();
      await sendRequest(value);
    }
  return (
    <form
      onSubmit={handleSubmit}
      id="input-text"
      className='w-full flex flex-col items-center gap-1 h-full bg-slate-100  dark:bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-100 dark:border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg font-mono text-sm backdrop-blur-sm'>
      <textarea
        id='text-sentiment'
        className='flex-1 outline-none   placeholder-slate-400  p-4 resize-none w-full '
        placeholder='Write here...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        type='submit'
        className='flex items-center text-lg hover:bg-slate-800 rounded-b-lg transition-colors text-slate-900 dark:text-slate-100 py-2 h-auto gap-2 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed'
        theme='none'
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-slate-400" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
            Loading...
          </span>
        ) : (
          <>
            Submit <SendHorizonal size={18} />
          </>
        )}
      </Button>
    </form>
  );
}
