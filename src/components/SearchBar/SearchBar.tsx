import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <div className="relative w-full mb-4">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FaSearch className="text-[#687684]" />
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 p-2 border border-[#EAEDF0] bg-[#F8F9F9] rounded-[8px] placeholder-[#5F6E7C]"
        placeholder="Search"
        style={{ fontWeight: "normal" }}
      />
    </div>
  );
};
export default SearchBar;