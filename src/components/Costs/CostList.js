import React from "react";
import CostItem from "./CostItem";

const CostList = (props) => {
  let costContent = <p>В этом году расходов нет</p>;
  if (props.costs.length > 0) {
    costContent = props.costs.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }
  return <div>{costContent}</div>;
};

export default CostList;
