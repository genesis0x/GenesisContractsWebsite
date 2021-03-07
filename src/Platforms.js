import React from "react";
import { platformData } from "./platformData";

export const Platforms = () => {
  return (
    <>
      <div className="platforms-container">
        {platformData.map((data, key) => {
          return (
            <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })}
      </div>
    </>
  );
};
