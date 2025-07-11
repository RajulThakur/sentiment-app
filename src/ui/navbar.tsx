"use client";
import { Moon, Sun } from "lucide-react";
import Button from "./Button";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  function handleClick() {
    return theme == "dark" ? setTheme("light") : setTheme("dark");
  }
  return (
    <nav className='flex z-10 fixed top-4 bg-slate-200 dark:bg-slate-900 px-8 rounded-3xl left-4 right-4 h-18 justify-between '>
      <div className=' flex items-center cursor-pointer'>
        <img
          src='/logo.svg'
          alt='Sentiment Analysis'
          className='w-48'
        />
      </div>
      <div className='flex items-center px-4'>
        <Button
          theme='transparent'
          onClick={handleClick}>
          {theme == "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </nav>
  );
}
