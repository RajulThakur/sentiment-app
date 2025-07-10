'use client'
import { Moon } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  function handleClick(){
    console.log('click')
  }
  return (
    <nav className="flex fixed top-4 bg-slate-200 dark:bg-slate-900 px-8 rounded-3xl left-4 right-4 h-18 justify-between ">
      <div className=" flex items-center cursor-pointer">
        <img src="/logo.svg" alt="Sentiment Analysis" className="w-48" />
      </div>
      <div className="flex items-center px-4">
        <Button theme="transparent" onClick={handleClick} >
          <Moon/>
        </Button>
      </div>

    </nav>
  );
}