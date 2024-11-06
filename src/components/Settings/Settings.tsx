import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

interface SettingsProps {
  visibleColumns: string[];
  setVisibleColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

const Settings: React.FC<SettingsProps> = ({ visibleColumns, setVisibleColumns }) => {
  const [query, setQuery] = useState<string>("");

  const columns = [
    { label: "Full Name", value: "fullName" },
    { label: "Birthday", value: "birthday" },
    { label: "Gender", value: "gender" },
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" },
    { label: "Username", value: "username" },
    { label: "General Info", value: "generalInfo" },
    { label: "Domain", value: "domain" },
    { label: "IP", value: "ip" },
    { label: "MAC IP", value: "macIp" },
    { label: "Address", value: "address" },
    { label: "Bank", value: "bank" },
    { label: "University", value: "university" },
    { label: "Company", value: "company" },
    { label: "EIN", value: "ein" },
    { label: "SSN", value: "ssn" },
  ];

  const handleCheckboxChange = (value: string) => {
    if (visibleColumns.includes(value)) {
      setVisibleColumns(visibleColumns.filter((col) => col !== value));
    } else {
      setVisibleColumns([...visibleColumns, value]);
    }
  };

  const filteredColumns = columns.filter((col) =>
    col.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="absolute top-15 right-0 bg-white p-4 shadow-lg border border-gray-300 rounded-md z-10"
      style={{ minWidth: "250px", maxHeight: "300px", overflowY: "auto" }}
    >
      <SearchBar query={query} setQuery={setQuery} />
      {filteredColumns.map((col) => (
        <div
          key={col.value} 
          className="flex items-center justify-between mb-1 cursor-pointer"
          onClick={() => handleCheckboxChange(col.value)}
        >
          <span>{col.label}</span>
          {visibleColumns.includes(col.value) && (
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
  );
};
export default Settings;
