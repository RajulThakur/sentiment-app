import type { Metadata } from "next";
import { Inter as NextInter } from "next/font/google";
import "./globals.css";

const inter = NextInter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Sentiment Analysis",
  description: "Sentiment analysis is a technique used to determine the sentiment or emotion expressed in a piece of text. It involves analyzing the text for positive, negative, or neutral sentiment, and can be used to gain insights into customer feedback, social media trends, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
