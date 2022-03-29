import React from "react";
import CostItem from "./CostItem";
import "./Costs.css";

const Costs = (props) => {
  return (
    <div className='costs'>
      <CostItem
        date={props.costs_0.date}
        description={props.costs_0.description}
        amount={props.costs_0.amount}
      />
      <CostItem
        date={props.costs_1.date}
        description={props.costs_1.description}
        amount={props.costs_1.amount}
      />
      <CostItem
        date={props.costs_2.date}
        description={props.costs_2.description}
        amount={props.costs_2.amount}
      />
    </div>
  );
};

export default Costs;
