import React from "react";

const Pagination = ({ currTable, setCurrTable, TotalTables }) => {
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
  return (
    <nav>
      <ul>
        <li>
          {currTable} of {TotalTables}{" "}
        </li>
        <li>
          <input
            type="number"
            value={currTable}
            max={TotalTables}
            min={1}
            onChange={(e) => goToTableByNumber(e.target.value)}
          />
        </li>
        <li onClick={() => setCurrTable(1)}>{"<<"}</li>
        <li onClick={goToPrevTable}>Prev</li>
        <li onClick={goToNextTable}>Next</li>
        <li onClick={() => setCurrTable(TotalTables)}>{">>"}</li>
      </ul>
    </nav>
  );
};

export default Pagination;
