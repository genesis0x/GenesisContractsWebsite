import React from "react";
import { platformDataRows } from "./platformData";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "company", headerName: "Company", width: 200 },
  { field: "ticker", headerName: "Ticker", width: 100 },
  { field: "stockPrice", headerName: "Stock Price", width: 150 },
  { field: "timeElapsed", headerName: "Time Elapsed", width: 150 }
];

function handleRowClick(rowData) {
  alert(
    JSON.stringify(rowData.row) +
      " field selected: " +
      JSON.stringify(rowData.field)
  );
}

export const Platforms = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={platformDataRows}
        columns={columns}
        pageSize={5}
        disableMultipleSelection={true}
        onCellClick={(rowData) => handleRowClick(rowData)}
      />
    </div>
  );
};
