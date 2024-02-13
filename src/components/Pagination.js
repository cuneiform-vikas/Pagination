import React from "react";

const Pagination = ({
  currTable,
  setCurrTable,
  TotalTables,
  tableRow,
  setTableRow,
}) => {
  const tableNumbers = [...Array(TotalTables + 1).keys()].slice(1);

  const goToNextTable = () => {
    if (currTable < TotalTables) {
      setCurrTable(currTable + 1);
    }
  };

  const goToPrevTable = () => {
    if (currTable > 1) setCurrTable(currTable - 1);
  };

  const goToTableByNumber = (num) => {
    setCurrTable(num);
  };

  const renderPageNumbers = () => {
    const visibleNumbers = [];
    if (TotalTables <= 5) {
      visibleNumbers.push(...tableNumbers);
    } else {
      if (currTable < 3) {
        visibleNumbers.push(...tableNumbers.slice(0, 3));
        visibleNumbers.push("...");
        visibleNumbers.push(TotalTables);
      } else if (currTable >= TotalTables - 2) {
        // visibleNumbers.push(1, "...");
        visibleNumbers.push(...tableNumbers.slice(tableNumbers.length - 3));
      } else {
        visibleNumbers.push(currTable - 1, currTable, currTable + 1);
        visibleNumbers.push("...", TotalTables);
      }
    }

    return visibleNumbers.map((pageNum, i) => (
      <li
        key={i}
        onClick={() => {
          if (typeof pageNum === "number") {
            goToTableByNumber(pageNum);
          }
        }}
      >
        {pageNum}
      </li>
    ));
  };

  return (
    <nav>
      <div>
        <label htmlFor="row">Rows: </label>
        <input
          id="row"
          type="number"
          value={tableRow}
          max={6}
          min={1}
          onChange={(e) => setTableRow(e.target.value)}
        />
      </div>
      <p>
        {currTable} of {TotalTables}{" "}
      </p>
      <input
        type="number"
        value={currTable}
        max={TotalTables}
        min={1}
        onChange={(e) => goToTableByNumber(e.target.value)}
      />
      <ul>
        <li onClick={() => setCurrTable(1)}>{"<<"}</li>
        <li onClick={goToPrevTable}>Prev</li>
        {renderPageNumbers()}
        <li onClick={goToNextTable}>Next</li>
        <li onClick={() => setCurrTable(TotalTables)}>{">>"}</li>
      </ul>
    </nav>
  );
};

export default Pagination;
