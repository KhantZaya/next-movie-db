"use client"

import { useState, useEffect, SetStateAction } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [selectedPage, setSelectedPage] = useState(1);
  const totalPages = 10; // Set the total number of pages
  
  const pageParam = searchParams.get('page')
  useEffect(() => {
    // Update the selected page when the route changes
    const page = pageParam && parseInt(pageParam) || 1;
    setSelectedPage(page);
  }, [pageParam]);

  const handlePageChange = (page: SetStateAction<number>) => {
    setSelectedPage(page);
    router.push(`/movies?page=${page}`)
  };

  const generatePaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <input
          key={i}
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={i.toString()}
          checked={selectedPage === i}
          onChange={() => handlePageChange(i)}
        />
      );
    }
    return buttons;
  };

  return (
    <div className="join mx-auto mb-10 min-w-sm flex justify-center">
      {generatePaginationButtons()}
    </div>
  );
};

export default Pagination;

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";

// const Pagination = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams()
//   const [selectedPage, setSelectedPage] = useState(1);
//   const totalPages = 10; // Set the total number of pages
  
//   const pageParam = searchParams.get('page')
//   useEffect(() => {
//     // Update the selected page when the route changes
//     const page = pageParam && parseInt(pageParam) || 1;
//     setSelectedPage(page);
//   }, [pageParam]);

//   const generatePaginationButtons = () => {
//     const buttons = [];
//     for (let i = 1; i <= totalPages; i++) {
//       buttons.push(
//         <Link href={`/movies?page=${i}`} key={i}>
//             <input
//               className="join-item btn btn-square"
//               type="radio"
//               name="options"
//               aria-label={i.toString()}
//               checked={selectedPage === i}
//               onChange={() => setSelectedPage(i)}
//             />
//         </Link>
//       );
//     }
//     return buttons;
//   };

//   return (
//     <div className="join mx-auto mb-10 min-w-sm flex justify-center">
//       {generatePaginationButtons()}
//     </div>
//   );
// };

// export default Pagination;