// import React from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {
  const costs = [
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.999,
    },
    {
      id: "c2",
      date: new Date(2021, 3, 1),
      description: "Костюм",
      amount: 49.99,
    },
    {
      id: "c3",
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.12,
    },
  ];

  const addCostHandler = (costData) => {
    console.log(costData)
    console.log("App component")
  }
  return (
    <div className='App'>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );

  // return (
  //   React.createElement("div", {},
  //   React.createElement("h2", {}, "Начнём изучение React!",
  //   React.createElement(Costs, { costs: costs})))
  // )
}

export default App;
