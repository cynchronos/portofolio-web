import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dimas Rizqi's Web",
  description: "Dimas Rizqi's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen w-screen flex-col items-center justify-between bg-[url('/assets/images/background.webp')] bg-cover bg-center">
          <div className="block justify-center items-center w-4/5 h-4/5 mx-auto my-auto">
              <div className="flex gap-x-16 h-full">
                <Sidebar />
                {children}
              </div>
          </div>
        </main>
      </body>
    </html>
  );
}
