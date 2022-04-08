import React, { useState } from "react";
import "./Costs.css";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";

const Costs = (props) => {
  const [year, setYear] = useState("2021");
  const yearChangeHandler = (yearChanger) => {
    setYear(yearChanger);
    console.log(year);
  };

  return (
    <div>
      <Card className='costs'>
        <CostsFilter year={year} onYearChange={yearChangeHandler} />
        {props.costs.map((cost) => (
          <CostItem 
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
};

export default Costs;
