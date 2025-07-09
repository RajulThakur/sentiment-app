import { Moon } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex fixed top-4 bg-slate-900 px-8 rounded-3xl left-4 right-4 h-18 justify-between ">
      <div className=" bg-slate-900 flex items-center">
        <img src="/logo.svg" alt="Sentiment Analysis" className="w-48" />
      </div>
      <div className="flex items-center px-4">
        <Button>
          <Moon/>
        </Button>
      </div>

    </nav>
  );
}