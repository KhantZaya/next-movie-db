import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

// components
import NavBar from "../../../components/ui/NavBar";
import Pagination from "@/components/movies/Pagination";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        {children}
        <Pagination />
    </div>
        
  );
}