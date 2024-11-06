import React from "react";
import { User } from "../../types";
import { HiCog } from "react-icons/hi";
import Settings from "../Settings/Settings";

interface TableProps {
  users: User[];
  visibleColumns: string[];
  setVisibleColumns: React.Dispatch<React.SetStateAction<string[]>>;
  query: string;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  showSettings: boolean;
}

const Table: React.FC<TableProps> = ({ users, visibleColumns, setVisibleColumns, query, setShowSettings, showSettings }) => {
  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(query.toLowerCase()) ||
      user.lastName.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.username.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="overflow-auto max-h-[550px] relative">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="sticky top-0 bg-gray-100">
          <tr>
            {visibleColumns.includes("fullName") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Full Name
              </th>
            )}
            {visibleColumns.includes("birthday") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Birthday
              </th>
            )}
            {visibleColumns.includes("gender") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Gender
              </th>
            )}
            {visibleColumns.includes("email") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Email
              </th>
            )}
            {visibleColumns.includes("phone") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Phone
              </th>
            )}
            {visibleColumns.includes("username") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Username
              </th>
            )}
            {visibleColumns.includes("generalInfo") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                General Info
              </th>
            )}
            {visibleColumns.includes("domain") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Domain
              </th>
            )}
            {visibleColumns.includes("ip") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                IP
              </th>
            )}
            {visibleColumns.includes("macIp") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                MAC IP
              </th>
            )}
            {visibleColumns.includes("address") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Address
              </th>
            )}
            {visibleColumns.includes("bank") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Bank
              </th>
            )}
            {visibleColumns.includes("university") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                University
              </th>
            )}
            {visibleColumns.includes("company") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                Company
              </th>
            )}
            {visibleColumns.includes("ein") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                EIN
              </th>
            )}
            {visibleColumns.includes("ssn") && (
              <th className="p-2 border text-[#626E7B] uppercase" style={{ fontWeight: 600, fontSize: '10px', lineHeight: '12px', letterSpacing: '0.2px' }}>
                SSN
              </th>
            )}
            <th className="p-2 border relative">
              <button onClick={() => setShowSettings((prev) => !prev)} className="flex items-center justify-center">
                <HiCog className="w-5 h-5 text-[#626E7B]" />
              </button>
              {showSettings && (
                <Settings visibleColumns={visibleColumns} setVisibleColumns={setVisibleColumns} closeSettings={() => setShowSettings(false)} />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              {visibleColumns.includes("fullName") && (
                <td className="p-2 border">{`${user.firstName} ${user.lastName}`}</td>
              )}
              {visibleColumns.includes("birthday") && <td className="p-2 border">{user.birthDate}</td>}
              {visibleColumns.includes("gender") && <td className="p-2 border">{user.gender}</td>}
              {visibleColumns.includes("email") && <td className="p-2 border">{user.email}</td>}
              {visibleColumns.includes("phone") && <td className="p-2 border">{user.phone}</td>}
              {visibleColumns.includes("username") && <td className="p-2 border">{user.username}</td>}
              {visibleColumns.includes("domain") && <td className="p-2 border">{user.domain}</td>}
              {visibleColumns.includes("ip") && <td className="p-2 border">{user.ip}</td>}
              {visibleColumns.includes("macIp") && <td className="p-2 border">{user.macAddress}</td>}
              {visibleColumns.includes("address") && (
                <td className="p-2 border">{`${user.address?.address || ""}, ${user.address?.city || ""}`}</td>
              )}
              {visibleColumns.includes("bank") && (
                <td className="p-2 border">{`${user.bank?.cardType || ""}, ${user.bank?.cardNumber || ""}`}</td>
              )}
              {visibleColumns.includes("university") && <td className="p-2 border">{user.university}</td>}
              {visibleColumns.includes("company") && <td className="p-2 border">{user.company?.name}</td>}
              {visibleColumns.includes("ein") && <td className="p-2 border">{user.ein}</td>}
              {visibleColumns.includes("ssn") && <td className="p-2 border">{user.ssn}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
