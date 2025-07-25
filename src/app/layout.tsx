import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Complete IELTS Course in Bangladesh - Munzereen Shahid [2025]",
  description:
    "IELTS-এর সেরা প্রস্তুতি নিতে আজই জয়েন করুন Complete IELTS Course-টিতে, যেখানে থাকছে দেশসেরা IELTS ইন্সট্রাক্টরের গাইডলাইন, Mock Test ও প্রিমিয়াম হার্ডকপি বই।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
