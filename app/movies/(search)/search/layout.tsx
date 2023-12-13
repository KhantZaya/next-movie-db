import type { Metadata } from "next";
import BackButton from "@/components/movies/BackButton";
import SearchBox from "@/components/movies/SearchBox";

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
        <BackButton className="top-20 left-4"/>
        <SearchBox />
        {children}
    </div>
  );
}
