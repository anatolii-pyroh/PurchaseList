import React from "react";
import Costs from "./components/UI/Costs";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.999,
    },
    {
      date: new Date(2021, 3, 1),
      description: "Костюм",
      amount: 49.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.12,
    },
  ];
  return (
    <div className='App'>
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
