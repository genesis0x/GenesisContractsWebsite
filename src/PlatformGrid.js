import React from "react";
import { platformDataRows } from "./platformData";
import { DataGrid } from "@material-ui/data-grid";
import { useHistory } from "react-router";
//import { Redirect } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "company", headerName: "Company", width: 200 },
  { field: "ticker", headerName: "Ticker", width: 100 },
  { field: "stockPrice", headerName: "Stock Price", width: 150 },
  { field: "timeElapsed", headerName: "Time Elapsed", width: 150 }
];

function PlatformGridComponent() {
  let history = useHistory();

  function handleRowClick(rowData) {
    var id = rowData.row.id;
    //var fieldSelected = rowData.field
    var newPath = "/platform?id=" + id;
    history.push(newPath);
  }

  return (
    <DataGrid
      rows={platformDataRows}
      columns={columns}
      pageSize={5}
      disableMultipleSelection={true}
      onCellClick={(rowData) => handleRowClick(rowData)}
    />
  );
}

export const PlatformGrid = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <PlatformGridComponent />
    </div>
  );
};
