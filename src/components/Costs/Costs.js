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
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        />
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        />
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        />
      </Card>
    </div>
  );
};

export default Costs;
