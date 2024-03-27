"use client";
import { useState } from "react";

const columnsOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function CustomUI() {
  const [columns, setColumns] = useState(1); 

  const generateGrid = (columns) => {
    const gridItems = [];
    for (let i = 1; i <= columns; i++) {
      gridItems.push(
        <div key={i} className=" text-sm rounded bg-blue-100 p-5" style={{ width:"100%" }}>
          Card {i}
        </div>
      );
    }
    return gridItems;
  };

  const selectChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setColumns(value);
    }
  };

  return (
    <div className="p-20 bg-blue-200 text-blue-800">
      <div className="">
        <label htmlFor="columnsoption" className="mr-2">
          Select the Columns:
        </label>
        <select id="columnsoption" value={columns} onChange={selectChange}>
          {columnsOption.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="p-20 bg-blue-200 text-blue-800" style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(90px,1fr))" ,gap:"10px"}}>
        {generateGrid(columns)}
      </div>
    </div>
  );
}
