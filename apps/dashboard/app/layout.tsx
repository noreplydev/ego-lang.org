import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Default } from "@/components/default";

const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ego",
  description: "multipurpose programming language written in rust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className + " relative h-screen w-screen overflow-hidden"}>
        <Default fontClassname={jetbrains.className}>{children}</Default>
      </body>
    </html>
  );
}
