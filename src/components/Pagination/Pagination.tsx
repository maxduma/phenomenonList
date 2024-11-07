import React, { useState } from "react";
import ItemsPerPageSelector from "./ItemsPerPageSelector";

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
  const [inputValue, setInputValue] = useState<string>(page.toString());

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setInputValue(newValue);
      if (newValue === "") {
        setPage(1);
      } else {
        const newPage = Number(newValue);
        if (newPage >= 1 && newPage <= totalPages) {
          setPage(newPage);
        }
      }
    }
  };

  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalUsers);

  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-2">
        <ItemsPerPageSelector
          itemsPerPage={itemsPerPage} 
          setItemsPerPage={setItemsPerPage} 
        />
        <span className="font-semibold text-[10px] leading-[12px] tracking-[0.2px] text-[#5F6E7C]">ITEMS PER PAGE</span>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)' }} 
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 10.4142V16H14L14 4H12V9.58576L11.7071 9.29286L7.20712 4.79286L5.79291 6.20708L9.5858 9.99997L5.79291 13.7929L7.20712 15.2071L11.7071 10.7071L12 10.4142Z"
              fill="#687684"
            />
          </svg>
        </button>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={`p-2 border rounded-[8px] bg-[#F8F9F9] text-[#5F6E7C] ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === 1}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7071 9.29291L8.20708 4.79291L6.79286 6.20712L10.5858 10L6.79286 13.7929L8.20708 15.2071L12.7071 10.7071L13.4142 10L12.7071 9.29291Z"
              fill="#687684"
            />
          </svg>
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={handlePageChange}
          className="w-16 p-2 border rounded-[8px] text-center text-[#5F6E7C]"
        />
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className={`p-2 border rounded-[8px] bg-[#F8F9F9] text-[#5F6E7C] ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page === totalPages}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7071 9.29291L8.20708 4.79291L6.79286 6.20712L10.5858 10L6.79286 13.7929L8.20708 15.2071L12.7071 10.7071L13.4142 10L12.7071 9.29291Z"
              fill="#687684"
            />
          </svg>
        </button>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 10, totalPages))}
          className={`p-2 border rounded-[8px] bg-[#F8F9F9] text-[#5F6E7C] ${
            page + 10 > totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={page + 10 > totalPages}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 10.4142V16H14L14 4H12V9.58576L11.7071 9.29286L7.20712 4.79286L5.79291 6.20708L9.5858 9.99997L5.79291 13.7929L7.20712 15.2071L11.7071 10.7071L12 10.4142Z"
              fill="#687684"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Pagination;