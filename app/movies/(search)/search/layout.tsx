import type { Metadata } from "next";
import SearchBox from "../../../../components/movies/SearchBox";
import Pagination from "@/components/movies/Pagination";
import BackButton from "@/components/movies/BackButton";

// components

export const metadata: Metadata = {
  title: "Search Movie",
  description: "Movie Search Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <BackButton className="top-20"/>
        {children}
    </div>
  );
}
