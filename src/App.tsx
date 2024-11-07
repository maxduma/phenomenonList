import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { User } from "./types";
import SearchBar from "./components/SearchBar/SearchBar";
import Table from "./components/Table/Table";
import Pagination from "./components/Pagination/Pagination";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "fullName", "email", "username",
    "birthday", "gender", "phone",
  ]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=${itemsPerPage}&skip=${(page - 1) * itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
        setTotalUsers(data.total);
      });
  }, [page, itemsPerPage]);

  return (
    <Router basename="/phenomenonList">
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar query={query} setQuery={setQuery} />
              <Table
                users={users}
                visibleColumns={visibleColumns}
                setVisibleColumns={setVisibleColumns}
                query={query}
                setShowSettings={setShowSettings}
                showSettings={showSettings}
              />
              <Pagination
                page={page}
                setPage={setPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                totalPages={totalPages}
                totalUsers={totalUsers}
              />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};
export default App;