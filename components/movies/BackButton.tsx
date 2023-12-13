"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface Props {
  className ?: string
}
const BackButton = ({className} : Props) => {
  const router = useRouter();

  return (
    <button
      className={`btn absolute text-white ${className}`}
      onClick={() => router.back()}
    >
      {/* <Link href="/movies"> */}
        Back
        {/* </Link> */}
    </button>
  );
};

export default BackButton;
