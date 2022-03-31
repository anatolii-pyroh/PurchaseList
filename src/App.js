import Costs from "./components/UI/Costs";
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
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
