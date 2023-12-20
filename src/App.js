import React, { useEffect, useState } from "react";
import "./utils/App.css";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currTable, setCurrTable] = useState(1);
  const [tableRow, setTableRow] = useState(6);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=42")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const indexOfLastTableRow = currTable * tableRow;
  const indexOfFirstTableRow = indexOfLastTableRow - tableRow;
  const currTableData = users.slice(indexOfFirstTableRow, indexOfLastTableRow);
  const TotalTables = Math.ceil(users.length / tableRow);

  return (
    <div className="container">
      <h1>Users Data</h1>
      <Table users={currTableData} />
      <Pagination
        currTable={currTable}
        TotalTables={TotalTables}
        setCurrTable={setCurrTable}
      />
    </div>
  );
};

export default App;
