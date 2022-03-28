import CostItem from "./components/UI/CostItem";

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
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </div>
  );
}

export default App;
