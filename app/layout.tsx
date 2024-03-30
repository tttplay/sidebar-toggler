import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidebar Toggle with Next.js",
  description: "A simple, responsive sidebar toggle button built with Next.js, Tailwind CSS, Zustand, and TypeScript, reminiscent of features on OpenAI's ChatGPT or Devin websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
