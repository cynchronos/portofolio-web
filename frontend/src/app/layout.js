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
          <video className="absolute w-screen h-screen object-cover" src="/assets/media/background.webm" autoPlay loop muted></video>
          <main className="relative flex h-screen w-screen items-start lg:items-center justify-normal lg:justify-between text-white">
            <div className="lg:block flex justify-center items-center w-screen lg:w-4/5 lg:h-4/5 mx-auto my-auto">
              <div className="flex flex-col lg:flex-row gap-x-16 h-full gap-y-4 lg:gap-y-0">
                <Sidebar />
                {children}
              </div>
            </div>
          </main>
      </body>
    </html>
  );
}
