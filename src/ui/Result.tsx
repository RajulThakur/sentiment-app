"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { randomColorGen } from "@/helper/randomColorGen";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Result() {
  // Example data for the pie chart
  const data = {
    labels: ["Happy", "Neutral", "Sad"],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: [randomColorGen(), randomColorGen(), randomColorGen()],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h3 className='font-bold tracking-tighter text-2xl'>Result</h3>
      <br />
      <div className='flex gap-3'>
        <div className='flex-1 max-w-xl gap-y-3 grid-cols-2 grid'>
          <p className='font-semibold text-gray-400'>Confidence</p>
          <p>97</p>
          <p className='font-semibold text-gray-400'>Accuracy</p>
          <p>87</p>
          <p className='font-semibold text-gray-400'>Emotions</p>
          <p>Happy, neutral, sad</p>
        </div>
        <div className=' flex items-center'>
          <Pie data={data} className="text-gray-50" updateMode="none" />
        </div>
      </div>
    </div>
  );
}
