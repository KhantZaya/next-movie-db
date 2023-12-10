import type { Metadata } from "next";

// components

export const metadata: Metadata = {
  title: "Movie Detail",
  description: "Movie Detail Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        {children}
    </div>
  );
}
