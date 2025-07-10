"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { randomColGen } from "@/helper/randomColGen";
import ResultSkeleton from "./ResultSkeleton";
import Card from "./Card";
import { ResultData } from "@/types/types";
import StatItem from "./StatItem";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Result({
  isLoading = false,
  result,
}: {
  isLoading?: boolean;
  result?: ResultData;
}) {
  // Show nothing if no result and not loading
  if (!isLoading && !result) {
    return (
      <Card>
        <div className='flex flex-col items-center justify-center h-80 text-slate-400 dark:text-slate-500'>
          <span className='text-lg'>No analysis yet</span>
          <span className='text-xs mt-2'>Submit some text to see results.</span>
        </div>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <ResultSkeleton/>
    );
  }

  const data = {
    labels: result!.emotions.map((emo) => emo.emotion),
    datasets: [
      {
        data: result!.emotions.map((emo) => emo.percent),
        backgroundColor: result!.emotions.map(() => randomColGen()),
        borderWidth: 2,
      },
    ],
  };

  return (
    <Card>
      <h3 className='font-bold tracking-tight text-3xl mb-8 text-slate-900 dark:text-slate-100'>
        Sentiment Analysis Result
      </h3>
      <div className='flex flex-col h-auto items-start md:flex-row gap-6'>
        <div className="flex flex-col gap-4">
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 flex-1'>
            <StatItem
              label='Confidence'
              value={result!.confidence}
            />
            <StatItem
              label='Accuracy'
              value={`${result!.accuracy}`}
            />
            <StatItem
              label='Emotions'
              value={result!.emotions.map((e) => e.emotion).join(", ")}
            />
          </div>
            <div className='mt-6 w-full'>
              <h4 className='text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide'>
                Top Words by Emotion
              </h4>
              <div className='flex flex-wrap gap-3'>
                {result!.emotions.map((emo) => (
                  <div
                    key={emo.emotion}
                    className='flex flex-col items-center'>
                    <span className='text-xs font-medium text-slate-400 mb-1'>
                      {emo.emotion}
                    </span>
                    <div className='flex flex-wrap gap-1'>
                      {emo.words.slice(0, 6).map((word, i) => (
                        <span
                          key={word + i}
                          className='bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded px-2 py-0.5 text-xs'>
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col items-center min-w-[180px]'>
          <Pie
            data={data}
            className='!w-80 !h-80'
          />
        </div>
      </div>
    </Card>
  );
}
