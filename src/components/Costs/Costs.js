import React, { useState } from "react";
import "./Costs.css";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";
import CostList from "./CostList";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const yearChangeHandler = (yearChanger) => {
    setSelectedYear(yearChanger);
    console.log(selectedYear);
  };

  const filteredCosts = props.costs.filter(
    (element) => element.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className='costs'>
        <CostsFilter year={selectedYear} onYearChange={yearChangeHandler} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
