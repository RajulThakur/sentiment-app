"use client";
import { SendHorizonal } from "lucide-react";
import { FormEvent, useState } from "react";
import Button from "./Button";
import { BACKEND_URL } from "@/const/constant";

export default function Textarea() {
  const [value, setValue] = useState("");

  async function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await sendPostRequest(value);
    setValue("");
  }

  async function sendPostRequest(text: string) {
    try {
      const response = await fetch(`${BACKEND_URL}/api/sentiment-analysis`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-1 h-full bg-slate-100  dark:bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-100 dark:border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg font-mono text-sm backdrop-blur-sm"
    >
      <textarea
        id="text-sentiment"
        className="flex-1 outline-none   placeholder-slate-400  p-4 resize-none w-full "
        placeholder="Write here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        type="submit"
        className="flex items-center text-slate-900 dark:text-slate-100 py-2 h-auto gap-2 w-full justify-center"
        theme="none"
      >
        Submit <SendHorizonal />
      </Button>
    </form>
  );
}
