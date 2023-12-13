import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div className="flex-1">
        <Link className="btn btn-ghost text-sm" href="/movies">
          NEXT<span className="text-primary">TMDB</span>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link href="movies/search" as="/movies/search">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
