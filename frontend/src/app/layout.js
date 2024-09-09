import { Inter } from "next/font/google";
import DashboardLayout from "./dashboardLayout";
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
        <video className="absolute w-screen h-screen object-cover" src="/assets/media/background.webm" autoPlay loop muted></video>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}
