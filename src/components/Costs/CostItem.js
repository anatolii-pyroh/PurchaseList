import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description)

  const changeDescription = () => {
    setDescription("New Item")
    console.log(description);
  };
  return (
    <Card className='cost-item'>
      <CostDate date={props.date} />
      <div className='cost-item__description'>
        <h2>{description}</h2>
        <div className='cost-item__price'>{props.amount}$</div>
      </div>
      <button onClick={changeDescription}>Изменить описание</button>
    </Card>
  );
};

export default CostItem;
