import React from "react";
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa'; // Імпорт стрілок

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  totalUsers: number;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  itemsPerPage,
  setItemsPerPage,
  totalPages,
  totalUsers,
}) => {
  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPage = Number(e.target.value);
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalUsers);

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="relative">
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          className="p-2 border border-[#EAEDF0] bg-[#F8F9F9] rounded-[8px] pr-10 cursor-pointer"
          style={{ WebkitAppearance: "none", MozAppearance: "none" }}
        >
          <option value={10}>10 items</option>
          <option value={20}>20 items</option>
          <option value={50}>50 items</option>
        </select>
        <span className="absolute pb-1 right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg width="22" height="22" viewBox="0 0 20 20" fill="#265BAC">
            <path d="M10 14l-6-6h12l-6 6z" />
          </svg>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[#5F6E7C]">
          {startIndex}-{endIndex} of {totalUsers}
        </span>

        <button
          onClick={() => setPage((prev) => Math.max(prev - 10, 1))}
          className={`p-2 border rounded-[8px] bg-[#F8F9F9] text-[#5F6E7C] ${
            page <= 10 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page <= 10}
        >
          <FaAngleDoubleLeft size={20} />
        </button>

        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={`p-2 border rounded-[8px] bg-[#F8F9F9] text-[#5F6E7C] ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === 1}
        >
          <FaAngleLeft size={20} />
        </button>

        <input
          type="text"
          value={page}
          onChange={handlePageChange}
          className="w-16 p-2 border rounded-[8px] text-center text-[#5F6E7C]"
          min={1}
          max={totalPages}
        />

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className={`p-2 border rounded-[8px] bg-[#F8F9F9] text-[#5F6E7C] ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === totalPages}
        >
          <FaAngleRight size={20} />
        </button>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 10, totalPages))}
          className={`p-2 border rounded-[8px] bg-[#F8F9F9] text-[#5F6E7C] ${
            page + 10 > totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page + 10 > totalPages}
        >
          <FaAngleDoubleRight size={20} />
        </button>
      </div>
    </div>
  );
};
export default Pagination;