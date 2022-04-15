import React from "react";
import "./DiagramBar.css";

const DiagramBar = (props) => {
    let barHeightFill = "0%"

    if (props.maxValue > 0) {
        barHeightFill = Math.round(props.value / props.maxValue * 100) + "%"
    }
  return (
    <div className='diagram-bar'>
      <div className='diagram-bar__inner'>
        <div className='diagram-bar__fill' style={{height: barHeightFill}}></div>
      </div>
      <div className='diagram-bar__label'>{props.label}</div>
    </div>
  );
};

export default DiagramBar;
