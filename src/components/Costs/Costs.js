import "./Costs.css";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import Card from "../UI/Card";

const Costs = (props) => {
  return (
    <div>
      <CostsFilter/>
    <Card className="costs">
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
