import React, { useState } from "react";
import "./Costs.css";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const yearChangeHandler = (yearChanger) => {
    setSelectedYear(yearChanger);
    console.log(selectedYear);
  };

  const filteredCosts = props.costs.filter(element => element.date.getFullYear().toString() === selectedYear)


  return (
    <div>
      <Card className='costs'>
        <CostsFilter year={selectedYear} onYearChange={yearChangeHandler} />
        {filteredCosts.map((cost) => (
          <CostItem
          key={cost.id} 
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
