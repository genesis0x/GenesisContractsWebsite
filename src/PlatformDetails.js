import React from "react";
//import { useParams } from "react-router";

//import { platformDataRows } from "./platformData";
//import { Redirect } from "react-router-dom";

function PlatformDetailsComponent() {
  //let { id } = useParams();
  //alert(id);
  var id = 3;
  return <div>Platform Details {id}</div>;
}

export const PlatformDetails = () => {
  return (
    <div style={{ color: "#ffffff" }}>
      <PlatformDetailsComponent />
    </div>
  );
};
