import React from "react";
import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
  const dataSetsValue = props.dataSets.map(
    (dataSet) => dataSet.value
    );

  const maxCosts = Math.max(...dataSetsValue);
  return (
    <div className='diagram'>
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
