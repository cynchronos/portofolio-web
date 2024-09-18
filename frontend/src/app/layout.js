import { Inter } from "next/font/google";
import BackgroundLayout from "@/components/backgroundLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dimas Rizqi's Web",
  description: "Dimas Rizqi's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <BackgroundLayout />
        {children}
      </body>
    </html>
  );
}
