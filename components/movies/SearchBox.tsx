"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  onClick: (e: any) => void;
}
const SearchButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="btn btn-primary btn-outline">
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
  );
};

const SearchBox = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    router.push(`?query=${searchTerm}`);
  };
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex flex-col justify-center items-center mb-4">
      <form className="flex flex-row items-center" onSubmit={submitHandler}>
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            router.push(`?query=${e.target.value}`);
          }}
          type="text"
          placeholder="Search here"
          className="my-6 input input-primary w-full max-w-xs bg-base me-2"
        />
        <SearchButton onClick={submitHandler} />
      </form>
      <p>Search result for - {searchTerm}</p>
    </div>
  );
};

export default SearchBox;
