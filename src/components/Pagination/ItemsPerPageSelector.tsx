import React, { useState } from "react";

interface ItemsPerPageSelectorProps {
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}

const ItemsPerPageSelector: React.FC<ItemsPerPageSelectorProps> = ({
  itemsPerPage,
  setItemsPerPage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = [10, 20, 50];

  const handleOptionClick = (option: number) => {
    setItemsPerPage(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 border border-[#EAEDF0] bg-[#F8F9F9] rounded-[8px] cursor-pointer flex items-center justify-between w-24 text-sm"
      >
        {itemsPerPage}
        <svg width="18" height="18" viewBox="0 0 20 20" fill="#265BAC">
          <path d="M10 14l-6-6h12l-6 6z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full border border-[#EAEDF0] bg-white rounded-[8px] shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`p-2 pr-4 pl-4 m-2 rounded-[8px] cursor-pointer flex justify-between items-center 
                ${option === itemsPerPage ? "bg-[#F8F9F9]" : "bg-white"} 
                hover:bg-[#F1F1F1]`}
            >
              <span className="text-[#5F6E7C] mr-1">{option}</span>
              {option === itemsPerPage && (
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.746 1.66602L4.6031 9.66602L3.87516 10.4813L3.12763 9.68394L0.270477 6.63631L1.72955 5.26843L3.83917 7.51869L10.2541 0.333984L11.746 1.66602Z"
                    fill="#005CB2"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ItemsPerPageSelector;